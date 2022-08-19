import {GraphicComponent} from "./GraphicComponent.js";

export class MouseFocusable extends GraphicComponent
{
    constructor(pParent, pX, pY, pWidth, pHeight)
    {
        super(pParent, pX, pY, pWidth, pHeight);
        this.aDown = false;
        this.aDragable = false;
		this.aDropable = false;
		this.aMouseOrigin = null;
        this.aDraged = false;
        this.aComponentDraged = null;
		this.aMouseFocus = null;
        this.aMouseFocusable = false;
    }

    get ComponentDraged()
    {
        return this.aComponentDraged;
    }

    get Dragable()
    {
        return this.aDragable;
    }

    set Dragable(pDragable)
    {
        this.aDragable = pDragable;
    }

    get Draged()
    {
        return this.aDraged;
    }

    set Draged(pDraged)
    {
        this.aDraged = pDraged;
    }
	
    get MouseFocus()
    {
        return this.aMouseFocus;
    }
	
    get MouseFocusable()
    {
        return this.aMouseFocusable;
    }

    set MouseFocusable(pMouseFocusable)
    {
        this.aMouseFocusable = pMouseFocusable;
    }

    mDropable(pEvent)
    {
        return this.aDropable;
    }

    mDropZone(pEvent)
    {
		return null;
    }

    mOnClickEventHandler(pEvent)
    {
        this.aMouseFocus = this.mUpdateMouseFocus(pEvent);
        super.mOnClickEventHandler(pEvent);
        if(this.MouseFocus && (this.MouseFocus !== this))
        {
            this.aMouseFocus.mOnClickEvent(pEvent);
        }
    }

    mOnMouseDownEventHandler(pEvent)
    {
		//TODO
        this.aPreviousState = pEvent;
        if(this.MouseFocus && this.MouseFocus.Dragable && !this.aComponentDraged )
        {
            this.aComponentDraged = this.MouseFocus;
            this.MouseFocus.mOnDragEvent(this.aComponentDraged);
        }
    }

    mOnMouseUpEventHandler(pEvent)
    {
		//TODO
        this.aPreviousState = pEvent;
        if(this.aComponentDraged)
        {
            this.aComponentDraged.mDrop(pEvent, this.MouseFocus);
            this.aMouseFocus.mOnDragDropEvent(this.aComponentDraged);
            this.aComponentDraged = null;
        }
    }

    mOnMouseMoveEventHandler(pEvent)
    {
        super.mOnMouseMoveEventHandler(pEvent);
        this.aMouseFocus = this.mUpdateMouseFocus(pEvent);
        if 
        (
            this.aDragDropEvent 
        )
        {
            this.aDragDropEvent.mUpdate(pEvent, this.MouseFocus);
            this.aDragDropEvent.MouseFocusable.mOnDragMoveEventHandler(this.aDragDropEvent);
        }
        else if
        (
            this.MouseFocus 
            && 
            (this.MouseFocus !== this)
        )
        {
            this.MouseFocus.mOnMouseMoveEvent(pEvent);
        }
        this.aPreviousState = pEvent;
    }

    mUpdateMouseFocus(pMouse)
    {
        this.aMouseFocus = null;
        if
        (
            this.Visible
            &&
            (!this.Draged)
            &&
            (pMouse.clientX >= this.AbsoluteX)
            &&
            (pMouse.clientX <= this.AbsoluteX + this.Width)
            &&
            (pMouse.clientY >= this.AbsoluteY)
            &&
            (pMouse.clientY <= this.AbsoluteY + this.Height)
        )
        {
            for(let vIndex = 0; vIndex < this.aComponents.length; vIndex++)
            {
                const vComponentFound = this.aComponents[vIndex];
                if(this.aMouseFocus = vComponentFound.mUpdateMouseFocus(pMouse))
                {
                    return this.aMouseFocus;
                }
            }
            if(this.aMouseFocusable && this.aMouseFocus === null)
            {
                this.aMouseFocus = this;
            }
        }
        return this.aMouseFocus;
    }
	
	mUpdate(pCurrentMouse, pTarget)
    {
        this.aCurrentMouse = pCurrentMouse;
        this.aTarget = pTarget;
        if(this.aTarget && this.aTarget.mDropable(this))
        {
			let vRectangle = this.aTarget.mDropZone(this);
			if(vRectangle)
			{
				this.aMouseFocusable.X = vRectangle.X/* + this.aTarget.AbsoluteX*/;
				this.aMouseFocusable.Y = vRectangle.Y/* + this.aTarget.AbsoluteY*/;
				this.aMouseFocusable.Width = vRectangle.Width;
				this.aMouseFocusable.Height = vRectangle.Height;
			}
        }
        else
        {
        	this.aMouseFocusable.X =
			(
				this.aX - 
				(
					this.aMouseOrigin.clientX - this.aParent.AbsoluteX
				)
			) 
			+ 
            (
				pCurrentMouse.clientX - this.aParent.AbsoluteX
			);
            this.aMouseFocusable.Y = (this.aY - (this.aMouseOrigin.clientY - this.aParent.AbsoluteY)) + (pCurrentMouse.clientY - this.aParent.AbsoluteY);
            this.aMouseFocusable.Width = this.aWidth;
            this.aMouseFocusable.Height = this.aHeight;
        }
    }
	
    mDrop(pCurrentMouse, pTarget)
    {
        this.aCurrentMouse = pCurrentMouse;
        this.aTarget = pTarget;
        this.aMouseFocusable.Draged = false;
        if
        (
            this.aTarget 
            && 
            this.aTarget.mAllowDrop(this)
        )
        {
            pTarget.mOnDropEvent(this);
        }
        else
        {
            this.aMouseFocusable.X = this.aX;
            this.aMouseFocusable.Y = this.aY;
            this.aMouseFocusable.Width = this.aWidth;
            this.aMouseFocusable.Height = this.aHeight;
        }
    }
}

export default {MouseFocusable};