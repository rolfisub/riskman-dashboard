<?php

namespace Admin\Error;

use Zend\Mvc\MvcEvent;
use Admin\View\JsonErrorModel;
use Zend\EventManager\AbstractListenerAggregate;
use Zend\EventManager\EventManagerInterface;
use Admin\Error\Abstract4xx;
use Application\HipChat\HipChatService;
use Zend\Console\Response as ConsoleResponse;

/**
 * MVC Event listener for modifying the response when an error occurred.
 */
class ErrorHandlerListener extends AbstractListenerAggregate
{
    /**
     * Attaches the error-handler listener to the supplied event manager.
     *
     * @param EventManagerInterface $events Events manager to attach to
     * @param int|null $priority Priority level for the listener
     */
    public function attach(EventManagerInterface $events, $priority = 100)
    {
        $this->listeners[] = $events->attach(MvcEvent::EVENT_DISPATCH_ERROR, $this, $priority);
        $this->listeners[] = $events->attach(MvcEvent::EVENT_RENDER_ERROR, $this, $priority);
    }

    /**
     * Listerner which does the following when the request ends with an error:
     *
     * If the event's error is an instance of Abstract4xx, then the response's
     * status code will be set to the error code of the exception's class. The
     * error message and feedback will also be passed back in the response.
     *
     * If the event's error is anything other then an Abstract4xx, then the
     * response's reason-phrase will be set to the error message of the exception
     * and the status code will be set to 500, no feedback will be given.  Finally,
     * the exception will be logged and sent to hipchat.
     *
     * If there is no exception provided, then the response's reason phrase will be
     * used as the error message.
     *
     * In all cases, the response view-model is replaced with an error-model.
     *
     * @param MvcEvent $event
     */
    public function __invoke(MvcEvent $event)
    {
        $response = $event->getResponse();

        if ($response instanceof ConsoleResponse) {
            error_log($event->getResult());
            return;
        }

        $exception = $event->getParam('exception');

        if ($exception instanceof Abstract4xx) {
            $response->setStatusCode($exception->getCode());
            $model = new JsonErrorModel(
                $exception->getMessage(),
                $exception->getFeedback(),
                $exception->getValidation()
            );
        } elseif ($exception) {
            error_log($exception);
//            $this->sendHipChat($event, $exception);
            $response->setStatusCode(500);
            $model = new JsonErrorModel($response->getReasonPhrase());
        } else {
            $model = new JsonErrorModel($response->getReasonPhrase());
        }

        $model->setTerminal(true);
        $event->setResult($model);
        $event->setViewModel($model);
        //$event->stopPropagation(true);
    }

    /**
     * Wrapper for getting the hipchat service and sending a message with it
     *
     * @param MvcEvent $event
     * @param string|Exception $message
     */
    protected function sendHipChat(MvcEvent $event, $message)
    {
        $hipChat = $event->getApplication()->getServiceManager()->get(HipChatService::class);
        $hipChat->send($message);
    }
}
