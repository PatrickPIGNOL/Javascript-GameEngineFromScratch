import {MouseFocusable} from "./MouseFocusable.js";

export class KeyboardFocusable extends MouseFocusable
{
    constructor(pParent, pX, pY, pWidth, pHeight)
    {
        super(pParent, pX, pY, pWidth, pHeight);
		this.aDefault = false;
		this.MouseFocusable = true;
		this.aKeyboardFocusable = false;
		this.aKeyboardFocused = null;
    }

	get KeyboardFocusable()
	{
		return this.aKeyboardFocusable;
	}

	set KeyboardFocusable(pValue)
	{
		this.aKeyboardFocusable = pValue;
	}

	get KeyboardFocused()
	{
		return this.aKeyboardFocused;
	}

    mOnClickEventHandler(pEvent)
    {
        super.mOnClickEventHandler(pEvent);
		this.mUpdateKeyboardFocused(pEvent);
    }

	mUpdateKeyboardFocused(pEvent)
	{
		super.mUpdateKeyboardFocused(pEvent);
		if(this.Parent.instanceof(KeyboardFocusable))
		{
			this.Parent.mUpdateKeyboardFocused();
		}
		if(this.MouseFocus == this && this.aKeyboarFocusable && this.aKeyboardFocused != this)
		{
			this.aKeyboardFocused = this;
		}
		else if(this.MouseFocus.KeyboardFocusable)
		{
			this.aKeyboardFocused = this.MouseFocus;
		}
	}
}

export default {KeyboardFocusable};
