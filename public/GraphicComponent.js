import {BaseObject} from "./BaseObject.js";
export class GraphicComponent extends BaseObject
{
    constructor(pParent, pX, pY, pWidth, pHeight)
    {
        super();
        this.aComponents = new Array();
        this.aParent = pParent;
        if(this.aParent)
        {
            this.aParent.mAddComponent(this);
        }
        this.aX = pX;
        this.aY = pY;
        this.aWidth = pWidth;
        this.aHeight = pHeight;
        this.aVisible = false;
        this.aMouse = null;   
        this.aGlobalAlpha = 1;
    }

    get Components()
    {
        return this.aComponents;
    }
	
	mAddComponent(pComponent)
    {
        this.aComponents.push(pComponent);
        pComponent.mOnLoadEvent();
    }

    mRemoveComponent(pComponent)
    {
        let vIndex = this.aComponents.indexOf(pComponent);
        this.aComponents.splice(vIndex, 1);
    }

    get Parent()
    {
        return this.aParent;
    }

    set Parent(pParent)
    {
        this.aParent = pParent;
    }
	
	get AbsoluteX()
    {
        let vX = this.X;
        let vComponent = this;
        while(vComponent.Parent)
        {
            vComponent = vComponent.Parent;
            vX += vComponent.X;
        }
        return vX;
    }

    get AbsoluteY()
    {
        let vY = this.Y;
        let vComponent = this;
        while(vComponent.Parent)
        {
            vComponent = vComponent.Parent;
            vY += vComponent.Y;
        }
        return vY;
    }

    get X()
    {
        return this.aX;
    }

    set X(pX)
    {
        this.aX = pX;
    }

    get Y()
    {
        return this.aY;
    }

    set Y(pY)
    {
        this.aY = pY;
    }

    get Width()
    {
        return this.aWidth;
    }

    set Width(pWidth)
    {
        this.aWidth = pWidth;
    }

    get Height()
    {
        return this.aHeight;
    }

    set Height(pHeight)
    {
        this.aHeight = pHeight;
    }

    get GlobalAlpha()
    {
        return this.aGlobalAlpha;
    }

    set GlobalAlpha(pGlobalAlpha)
    {
        this.aGlobalAlpha = pGlobalAlpha;
    }

    get Visible()
    {
        return this.aVisible;
    }

    set Visible(pVisible)
    {
        this.aVisible = pVisible
    }
}

export default {GraphicComponent};