class BaseObject
{
	constructor()
	{
		this.aOnClickEventListeners = new Array();
        this.aOnDoubleClickEventListeners = new Array();
        this.aOnDragEventListeners = new Array();
        this.aOnDragMoveEventListeners = new Array();
        this.aOnDragDropEventListeners = new Array();
        this.aOnKeyDownEventListeners = new Array();
        this.aOnKeyUpEventListeners = new Array();
        this.aOnMouseDownEventListeners = new Array();
        this.aOnMouseEnterEventListeners = new Array();
        this.aOnMouseLeaveEventListeners = new Array();
        this.aOnMouseMoveEventListeners = new Array();
        this.aOnMouseOutEventListeners = new Array();
        this.aOnMouseOverEventListeners = new Array();
        this.aOnMouseUpEventListeners = new Array();
        this.aOnTouchCancelEventListeners = new Array();
        this.aOnTouchEndEventListeners = new Array();
        this.aOnTouchLeaveEventListeners = new Array();
        this.aOnTouchMoveEventListeners = new Array();
        this.aOnTouchStartEventListeners = new Array(); 

        this.aOnLoadEventListeners = new Array();
        this.aOnUnLoadEventListeners = new Array();
        this.aOnUpdateEventListeners = new Array(); 
        this.aOnDrawEventListeners = new Array(); 
        this.aOnResizeEventListeners = new Array();
	}

	mOnClickEventHandler(pEvent)
    {
    }

    mOnDoubleClickEventHandler(pEvent)
    {
    }

    mOnDragEventHandler(pEvent)
    {
    }

    mOnDragMoveEventHandler(pEvent)
    {
    }

    mOnDragDropEventHandler(pEvent)
    {
    }

    mOnKeyDownEventHandler(pEvent)
    {
    }

    mOnKeyUpEventHandler(pEvent)
    {
    }

    mOnMouseDownEventHandler(pEvent)
    {
    }

    mOnMouseEnterEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }
    
    mOnMouseLeaveEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }
    
    mOnMouseMoveEventHandler(pEvent)
    {        
        pEvent.preventDefault();
        return false;
    }

    mOnMouseOutEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnMouseOverEventHandler(pEvent)
    {
        pEvent.preventDefault();
        return false;
    }

    mOnMouseUpEventHandler(pEvent)
    {
    }
    
    mOnTouchCancelEventHandler(pEvent)
    {
    }

    mOnTouchEndEventHandler(pEvent)
    {
    }
    
    mOnTouchLeaveEventHandler(pEvent)
    {
    }

    mOnTouchMoveEventHandler(pEvent)
    {
    }

    mOnTouchStartEventHandler(pEvent)
    {
    }

    mOnLoadEventHandler()
    {

    }
    
    mOnUnLoadEventHandler()
    {
        
    }

    mOnUpdateEventHandler(pCanvas, pDeltaTime)
    {   
        
    }

    mOnDrawEventHandler(pCanvas, pGraphicContext)
    {

    }

    mOnResizeEventHandler()
    {

    }

	mFireOnClickEvent(pEvent)
    { 
        this.aOnClickEventListeners.forEach
        (
            vOnClickEventListener=>
            {
                if(vOnClickEventListener)
                {
                    if(vOnClickEventListener === this)
                    {
                        vOnClickEventListener.mOnClickEventHandler(pEvent);
                    }
                    else
                    {
                        vOnClickEventListener.mFireOnClickEvent(pEvent);
                    }
                }
            }
        );
    }
	
	mFireOnDoubleClickEvent(pEvent)
    { 
        this.aOnDoubleClickEventListeners.forEach
        (
            vOnDoubleClickEventListener=>
            {
                if(vOnDoubleClickEventListener)
                {
                    if(vOnDoubleClickEventListener === this)
                    {
                        vOnDoubleClickEventListener.mOnDoubleClickEventHandler(pEvent);
                    }
                    else
                    {
                        vOnDoubleClickEventListener.mFireOnDoubleClickEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnDragEvent(pEvent)
    {
        this.aOnDragEventListeners.forEach
        (
            vOnDragEventListener=>
            {
                if(vOnDragEventListener)
                {
                    if(vOnDragEventListener === this)
                    {
                        vOnDragEventListener.mOnDragEventHandler(pEvent);
                    }
                    else
                    {
                        vOnDragEventListener.mFireOnDragEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnDragEvent(pEvent)
    {
        this.aOnDragEventListeners.forEach
        (
            vOnDragEventListener=>
            {
                if(vOnDragEventListener)
                {
                    if(vOnDragEventListener === this)
                    {
                        vOnDragEventListener.mOnDragEventHandler(pEvent);
                    }
                    else
                    {
                        vOnDragEventListener.mFireOnDragEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnDragMoveEvent(pEvent)
    {
        this.aOnDragMoveEventListeners.forEach
        (
            vOnDragMoveEventListener=>
            {
                if(vOnDragMoveEventListener)
                {
                    if(vOnDragMoveEventListener === this)
                    {
                        vOnDragMoveEventListener.mOnDragMoveEventHandler(pEvent);
                    }
                    else
                    {
                        vOnDragMoveEventListener.mFireOnDragMoveEvent(pEpEvent);
                    }
                }
            }
        );
    }

	mFireOnDragDropEvent(pEvent)
    {
        this.aOnDragDropEventListeners.forEach
        (
            vOnDragDropEventListener=>
            {
                if(vOnDragDropEventListener)
                {
                    if(vOnDragDropEventListener === this)
                    {
                        vOnDragDropEventListener.mOnDragDropEventHandler(pEvent);
                    }
                    else
                    {
                        vOnDragDropEventListener.mFireOnDragDropEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnDropEvent(pEvent)
    {
        this.aOnDropEventListeners.forEach
        (
            vOnDropEventListener=>
            {
                if(vOnDropEventListener)
                {
                    if(vOnDropEventListener === this)
                    {
                        vOnDropEventListener.mOnDropEventHandler(pEvent);
                    }
                    else
                    {
                        vOnDropEventListener.mFireOnDropEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnKeyDownEvent        (pEvent)
    { 
        this.aOnKeyDownEventListeners.forEach
        (
            vOnKeyDownEventListener=>
            {
                if(vOnKeyDownEventListener)
                {
                    if(vOnKeyDownEventListener === this)
                    {
                        vOnKeyDownEventListener.mOnKeyDownEventHandler(pEvent);
                    }
                    else
                    {
                        vOnKeyDownEventListener.mFireOnKeyDownEvent(pEvent);
                    }
                }
            }
        );
    }

	mOnKeyUpEvent          (pEvent)
    { 
        this.aFireOnKeyUpEventListeners.forEach
        (
            vOnKeyUpEventListener=>
            {
                if(vOnKeyUpEventListener)
                {
                    if(vOnKeyUpEventListener === this)
                    {
                        vOnKeyUpEventListener.mOnKeyUpEventHandler(pEvent);
                    }
                    else
                    {
                        vOnKeyUpEventListener.mFireOnKeyUpEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnMouseDownEvent      (pEvent)
    { 
        this.aOnMouseDownEventListeners.forEach
        (
            vOnMouseDownEventListener=>
            {
                if(vOnMouseDownEventListener)
                {
                    if(vOnMouseDownEventListener === this)
                    {
                        vOnMouseDownEventListener.mOnMouseDownEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseDownEventListener.mFireOnMouseDownEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnMouseEnterEvent     (pEvent)
    { 
        this.aOnMouseEnterEventListeners.forEach
        (
            vOnMouseEnterEventListener=>
            {
                if(vOnMouseEnterEventListener)
                {
                    if(vOnMouseEnterEventListener === this)
                    {
                        vOnMouseEnterEventListener.mOnMouseEnterEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseEnterEventListener.mFireOnMouseEnterEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnMouseLeaveEvent     (pEvent)
    { 
        this.aOnMouseLeaveEventListeners.forEach
        (
            vOnMouseLeaveEventListener=>
            {
                if(vOnMouseLeaveEventListener)
                {
                    if(vOnMouseLeaveEventListener === this)
                    {
                        vOnMouseLeaveEventListener.mOnMouseLeaveEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseLeaveEventListener.mFireOnMouseLeaveEvent(pEvent);                        
                    }
                }
            }
        );
    }

	mFireOnMouseMoveEvent      (pEvent)
    { 
        this.aOnMouseMoveEventListeners.forEach
        (
            vOnMouseMoveEventListener=>
            {
                if(vOnMouseMoveEventListener)
                {
                    if(vOnMouseMoveEventListener === this)
                    {
                        vOnMouseMoveEventListener.mOnMouseMoveEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseMoveEventListener.mFireOnMouseMoveEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnMouseOutEvent       (pEvent)
    { 
        this.aOnMouseOutEventListeners.forEach
        (
            vOnMouseOutEventListener=>
            {
                if(vOnMouseOutEventListener)
                {
                    if(vOnMouseOutEventListener === this)
                    {
                        vOnMouseOutEventListener.mOnMouseOutEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseOutEventListener.mFireOnMouseOutEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnMouseOverEvent(pEvent)
    { 
        this.aOnMouseOverEventListeners.forEach
        (
            vOnMouseOverEventListener=>
            {
                if(vOnMouseOverEventListener)
                {
                    if(vOnMouseOverEventListener === this)
                    {
                        vOnMouseOverEventListener.mOnMouseOverEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseOverEventListener.mFireOnMouseOverEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnMouseUpEvent(pEvent)
    { 
        this.aOnMouseUpEventListeners.forEach
        (
            vOnMouseUpEventListener=>
            {
                if(vOnMouseUpEventListener)
                {
                    if(vOnMouseUpEventListener === this)
                    {
                        vOnMouseUpEventListener.mOnMouseUpEventHandler(pEvent);
                    }
                    else
                    {
                        vOnMouseUpEventListener.mFireOnMouseUpEvent(pEvent); 
                    }
                }
            }
        );
    }

	mFireOnTouchCancelEvent(pEvent)
    { 
        this.aOnTouchCancelEventListeners.forEach
        (
            vOnTouchCancelEventListener=>
            {
                if(vOnTouchCancelEventListener)
                {
                    if(vOnTouchCancelEventListener === this)
                    {
                        vOnTouchCancelEventListener.mOnTouchCancelEventHandler(pEvent);
                    }
                    else
                    {
                        vOnTouchCancelEventListener.mFireOnTouchCancelEvent(pEvent);                        
                    }
                }
            }
        );
    }

	mFireOnTouchEndEvent(pEvent)
    { 
        this.aOnTouchEndEventListeners.forEach
        (
            vOnTouchEndEventListener=>
            {
                if(vOnTouchEndEventListener)
                {
                    if(vOnTouchEndEventListener === this)
                    {
                        vOnTouchEndEventListener.mOnTouchEndEventHandler(pEvent);
                    }
                    else
                    {
                        vOnTouchEndEventListener.mFireOnTouchEndEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnTouchLeaveEvent(pEvent)
    { 
        this.aOnTouchLeaveEventListeners.forEach
        (
            vOnTouchLeaveEventListener=>
            {
                if(vOnTouchLeaveEventListener)
                {
                    if(vOnTouchLeaveEventListener === this)
                    {
                        vOnTouchLeaveEventListener.mOnTouchLeaveEventHandler(pEvent);
                    }
                    else
                    {
                        vOnTouchLeaveEventListener.mFireOnTouchLeaveEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnTouchMoveEvent(pEvent)
    { 
        this.aOnTouchMoveEventListeners.forEach
        (
            vOnTouchMoveEventListener=>
            {
                if(vOnTouchMoveEventListener)
                {
                    if(vOnTouchMoveEventListener === this)
                    {
                        vOnTouchMoveEventListener.mOnTouchMoveEventHandler(pEvent);
                    }
                    else
                    {
                        vOnTouchMoveEventListener.mFireOnTouchMoveEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnTouchStartEvent(pEvent)
    { 
        this.aOnTouchStartEventListeners.forEach
        (
            vOnTouchStartEventListener=>
            {
                if(vOnTouchStartEventListener)
                {
                    if(vOnTouchStartEventListener === this)
                    {
                        vOnTouchStartEventListener.mOnTouchStartEventHandler(pEvent);
                    }
                    else
                    {
                        vOnTouchStartEventListener.mFireOnTouchStartEvent(pEvent);
                    }
                }
            }
        );
    }

	mFireOnLoadEvent()
    { 
        this.aOnLoadEventListeners.forEach
        (
            vOnLoadEventListener=>
            {
                if(vOnLoadEventListener)
                {
                    if(vOnLoadEventListener === this)
                    {
                        vOnLoadEventListener.mOnLoadEventHandler();
                    }
                    else
                    {
                        vOnLoadEventListener.mFireOnLoadEvent();                        
                    }
                }
            }
        );
    }

	mFireOnUnLoadEvent()
    {
        this.aOnUnLoadEventListeners.forEach
        (
            vOnUnLoadEventListener=>
            {
                if(vOnUnLoadEventListener)
                {
                    if(vOnUnLoadEventListener === this)
                    {
                        vOnUnLoadEventListener.mOnUnLoadEventHandler();
                    }
                    else
                    {
                        vOnUnLoadEventListener.mFireOnUnLoadEvent();
                    }
                }
            }
        );
    }

	mFireOnUpdateEvent(pCanvas, pDeltaTime)
    {
        this.aOnUpdateEventListeners.forEach
        (
            vOnUpdateEventListener=>
            {
                if(vOnUpdateEventListener)
                {
                    if(vOnUpdateEventListener === this)
                    {
                        vOnUpdateEventListener.mOnUpdateEventHandler(pCanvas, pDeltaTime);
                    }
                    else
                    {
                        vOnUpdateEventListener.mFireOnUpdateEvent(pCanvas, pDeltaTime);
                    }
                }
            }
        );
    }

	mFireOnDrawEvent(pCanvas, pGraphicContext)
    {
        this.aOnDrawEventListeners.forEach
        (
            vOnDrawEventListener=>
            {
                if(vOnDrawEventListener)
                {
                    if(vOnDrawEventListener === this)
                    {
                        vOnDrawEventListener.mOnDrawEventHandler(pCanvas, pGraphicContext);
                    }
                    else
                    {
                        vOnDrawEventListener.mFireOnDrawEvent(pCanvas, pGraphicContext);
                    }
                }
            }
        );
    }

	mFireOnResizeEvent(pCanvas)
    {
        this.aOnResizeEventListeners.forEach
        (
            vOnResizeEventListener=>
            {
                if(vOnResizeEventListener)
                {
                    if(vOnResizeEventListener === this)
                    {
                        vOnResizeEventListener.mOnResizeEventHandler(pCanvas);    
                    }
                    else
                    {
                        vOnResizeEventListener.mFireOnResizeEvent(pCanvas);
                    }
                }
            }
        );
    }
	
	mAddOnClickEventListener(pEventListener)
    {
        if(pEventListener)
        {
            return this.aOnClickEventListeners.push(pEventListener);
        }
        else
        {
            throw new Error("Observer provided is null or undefined.");
        }
    }

	mRemoveOnClickEventListener(pEventListener)
	{
		for(let vIndex = this.aOnClickEventListeners.length - 1; vIndex >= 0; vIndex--)
		{
			if(pEventListener === this.aOnClickEventListeners[vIndex])
			{
				this.aOnClickEventListeners.splice(vIndex, 1);
			}
		}
	}
}

module.exports = {BaseObject}