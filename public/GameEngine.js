import {BaseObject} from "./BaseObject.js";
import {EBrowsers} from "./EBrowsers.js";
export class GameEngine extends BaseObject
{
    static aInstance = null;
    static get Instance()
    {
        if(GameEngine.aInstance === null)
        {
            GameEngine.aInstance = new GameEngine();
        }
        return GameEngine.aInstance;
    }

    constructor()
    {
        super();
        this.aScene = null;
        this.aBrowser = null;
        this.aCanvas = null;       
        this.aOldTime = performance.now();
        this.aLoopTimeOut = -1;
        this.aTimer = 0;
        this.aFPS = 0;
        this.aFPSCounter = 0;
    }

    mOnClickEventHandler(pClickEvent)
    {
        this.aScene.mOnClickEvent(pClickEvent);
    }

    mOnDoubleClickEventHandler(pDoubleClickEvent)
    {
        this.aScene.mOnDoubleClickEvent(pDoubleClickEvent);
    }

    mOnKeyDownEventHandler(pKeyDownEvent)
    {
        this.aScene.mOnKeyDownEvent(pKeyDownEvent);
    }

    mOnKeyUpEventHandler(pKeyUpEvent)
    {
        this.aScene.mOnKeyUpEvent(pKeyUpEvent);
    }

    mOnMouseDownEventHandler(pMouseDownEvent)
    {
        this.aScene.mOnMouseDownEvent(pMouseDownEvent);
    }

    mOnMouseEnterEventHandler(pMouseEnterEvent)
    {
        this.aScene.mOnMouseEnterEvent(pMouseEnterEvent);
    }
    
    mOnMouseLeaveEventHandler(pMouseLeaveEvent)
    {
        this.aScene.mOnMouseLeaveEvent(pMouseLeaveEvent);
    }
    
    mOnMouseMoveEventHandler(pMouseMoveEvent)
    {
        this.aScene.mOnMouseMoveEvent(pMouseMoveEvent);
    }

    mOnMouseOutEventHandler(pMouseOutEvent)
    {
        this.aScene.mOnMouseMoveEvent(pMouseOutEvent);
    }

    mOnMouseOverEventHandler(pMouseOverEvent)
    {
        this.aScene.mOnMouseOverEvent(pMouseOverEvent);
    }

    mOnMouseUpEventHandler(pMouseUpEvent)
    {
        this.aScene.mOnMouseUpEvent(pMouseUpEvent);
    }
    
    mOnTouchCancelEventHandler(pTouchCancelEvent)
    {
        this.aScene.mOnTouchCancelEvent(pTouchCancelEvent);
    }

    mOnTouchEndEventHandler(pTouchEndEvent)
    {
        this.aScene.mOnTouchEndEvent(pTouchEndEvent);
    }
    
    mOnTouchLeaveEventHandler(pTouchLeaveEvent)
    {
        this.aScene.mOnTouchLeaveEvent(pTouchLeaveEvent);
    }

    mOnTouchMoveEventHandler(pTouchMoveEvent)
    {
        this.aScene.mOnTouchMoveEvent(pTouchMoveEvent);
    }

    mOnTouchStartEventHandler(pTouchStartEvent)
    {
        this.aScene.mOnTouchStartEvent(pTouchStartEvent);
    }

    mOnUpdateEventHandler(pCanvas, pDeltaTime)
    {   
        if
        (
            (this.aBrowser & EBrowsers.Chromium)
            ||
            (this.aBrowser & EBrowsers.Chrome)
        )
        {
            this.aCanvas.width = window.innerWidth - 1;
            this.aCanvas.height = window.innerHeight - 1;
        }
        else
        {
            this.aCanvas.width = window.innerWidth;
            this.aCanvas.height = window.innerHeight;
        }
        this.aScene.mOnUpdateEvent(pCanvas, pDeltaTime);
    }

    mOnDrawEventHandler(pCanvas, pGraphicContext)
    {
        if(pGraphicContext)
        {
            pGraphicContext.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
            this.aScene.mOnDrawEvent(pCanvas, pGraphicContext);
        }
        else
        {
            document.write("Canvas are not supported");
        }        
    }

    mOnResizeEventHandler()
    {
        this.aScene.mOnResizeEvent()
    }

    mStart(pFPS, pBrowser, pCanvas, pScene)
    {
        this.Browser = pBrowser;
        this.Canvas = pCanvas;
        this.mChangeScene(pScene);
        this.mOnLoadEvent();
        window.onresize = () =>
        {
            GameEngine.Instance.mOnResizeEvent(GameEngine.Instance.Canvas);
        };
        window.setInterval
        (
            ()=>
            {
                window.requestAnimationFrame
                (
                    ()=>
                    {
                        GameEngine.Instance.mLoop();
                    }
                )
            }, 
            1000/pFPS
        );
    }
    
    mLoop()
    {
        const vNewTime = performance.now();
        const vDeltaTime = vNewTime - this.aOldTime;
        this.aOldTime = vNewTime;
        this.mOnUpdateEvent(this.aCanvas, vDeltaTime);
        this.mOnDrawEvent(this.aCanvas, this.aCanvas.getContext('2d'));
        this.aTimer += vDeltaTime;
        this.aFPSCounter += 1;
        if(this.aTimer > 1000)
        {
            this.aFPS = this.aFPSCounter;
            this.aFPSCounter = 0;
            this.aTimer = 0;
        }
    }
    
    mChangeScene(pScene)
    {
        if(this.aScene)
        {
            this.aScene.mOnUnLoadEvent();
        }
        this.aScene = pScene;
        this.aScene.mOnLoadEvent();
    }
    
    set Browser(pBrowser)
    {
        this.aBrowser = pBrowser;
    }

    get LoopTimeOut()
    {
        return this.aLoopTimeOut;
    }

    set LoopTimeOut(pLoopTimeout)
    {
        this.aLoopTimeOut = pLoopTimeout;
    }

    get Canvas()
    {
        return this.aCanvas;
    }

    set Canvas(pCanvas)
    {
        this.aCanvas = pCanvas;
        this.aCanvas.addEventListener
        (
            "click",
            pClickEvent =>
            {
                GameEngine.Instance.mFireOnClickEvent(pClickEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            "dblclick",
            pDoubleClickEvent => 
            {
                GameEngine.Instance.mFireOnDoubleClickEvent(pDoubleClickEvent);
            }
        );

        this.aCanvas.addEventListener
        (
            "keydown",
            pKeyDownEvent =>
            {
                GameEngine.Instance.mFireOnKeyDownEvent(pKeyDownEvent);
            }
        );

        this.aCanvas.addEventListener
        (
            'keyup', 
            pKeyUpEvent =>
            {
                GameEngine.Instance.mFireOnKeyUpEvent(pKeyUpEvent);
            }
        );

        this.aCanvas.addEventListener
        (
            "mousedown",
            pMouseDownEvent =>
            {
                GameEngine.Instance.mFireOnMouseDownEvent(pMouseDownEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            'mouseenter',
            pMouseEnterEvent => 
            {
                GameEngine.Instance.mFireOnMouseEnterEvent(pMouseEnterEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            'mouseleave',
            pMouseLeaveEvent => 
            {
                GameEngine.Instance.mFireOnMouseLeaveEvent(pMouseLeaveEvent);
            },
            false
        );
        this.aCanvas.addEventListener
        (
            "mousemove",
            pMouseMoveEvent =>
            {       
                GameEngine.Instance.mFireOnMouseMoveEvent(pMouseMoveEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            "mouseout",
            pMouseOutEvent =>
            {       
                GameEngine.Instance.mFireOnMouseOutEvent(pMouseOutEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            "mouseover",
            pMouseOverEvent =>
            {
                GameEngine.Instance.mFireOnMouseOverEvent(pMouseOverEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            "mouseup",
            pMouseUpEvent =>
            {
                GameEngine.Instance.mFireOnMouseUpEvent(pMouseUpEvent)
            }
        );   
        this.aCanvas.addEventListener
        (
            "touchcancel",
            pTouchCancelEvent =>
            {
                GameEngine.Instance.mFireOnTouchCancelEvent(pTouchCancelEvent);
            },
            false
        );
        this.aCanvas.addEventListener
        (
            "touchend",
            pTouchEndEvent =>
            {
                GameEngine.Instance.mFireOnTouchEndEvent(pTouchEndEvent);
            },
            false
        );
        this.aCanvas.addEventListener
        (
            "touchleave",
            pTouchLeaveEvent =>
            {
                GameEngine.Instance.mFireOnTouchLeaveEvent(pTouchLeaveEvent);
            },
            false
        );
        this.aCanvas.addEventListener
        (
            "touchmove",
            pTouchMoveEvent =>
            {
                GameEngine.Instance.mFireOnTouchMoveEvent(pTouchMoveEvent);
            },
            false
        );
        this.aCanvas.addEventListener
        (
            "touchstart",
            pTouchStartEvent =>
            {
                GameEngine.Instance.mFireOnTouchStartEvent(pTouchStartEvent);
            },
            false
        );
    }
}

export default {GameEngine};