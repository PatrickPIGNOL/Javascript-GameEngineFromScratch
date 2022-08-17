import {EBrowsers} from "./EBrowsers.js";
import {EImages} from "./EImages.js";
import {EFonts} from "./EFonts.js";
import {ESounds} from "./ESounds.js";

export class Loader
{
    static aImages = new Array();
	static aSounds = new Array();
    static aFonts = new Array();
    constructor()
    {
		
    }

	static get Sounds()
	{
		return Loader.aSounds;
	}

    static get Fonts()
    {
        return Loader.aFonts;
    }

    static get Images()
    {
        return Loader.aImages;
    }

	static mFromSoundEnum(pSoundFilesEnum)
	{
		const vSoundFiles = new Array();
        for (const [vKey, vValue] of Object.entries(pSoundFilesEnum)) 
        {
            vSoundFiles.push(vValue.FileName);
        }
        return vSoundFiles;
	}

	static mLoadSounds(pSoundsFiles, pCallBack)
	{
		
	}
	
	static mFromImageEnum(pImagesFilesEnum)
    {
        const vImagesFiles = new Array();
        for (const [vKey, vValue] of Object.entries(pImagesFilesEnum)) 
        {
            vImagesFiles.push(vValue.FileName);
        }
        return vImagesFiles;
    }

	static mLoadImages(pImageFiles, pCallBack)
    {
	}

    static mFromFontsEnum(pFontFilesEnum)
    {
        const vFontsFiles = new Array();
        for (const [vKey, vValue] of Object.entries(pFontFilesEnum)) 
        {
            vFontsFiles.push(vValue);
        }
        return vFontsFiles;
    }

	static mLoadFonts(pFontFiles, pCallBack)
    {
	}
	
	static mBrowser()
    {    
        let vBrowser = 0;
        if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)
        {
            vBrowser += EBrowsers.Opera;
        }
        if(typeof InstallTrigger !== 'undefined')
        {
            vBrowser += EBrowsers.Firefox;
        }
        if(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification)))
        {
            vBrowser += EBrowsers.Safari;
        }
        if(false || !!document.documentMode)
        {
            vBrowser += EBrowsers.IE;
        }
        if(! (vBrowser & EBrowsers.IE) && !!window.StyleMedia)
        {
            vBrowser += EBrowsers.Edge;
        }
        if(!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime))
        {
            vBrowser += EBrowsers.Chrome;
        }
        if((vBrowser & EBrowsers.Chrome) && (navigator.userAgent.indexOf("Edg") != -1))
        {
            vBrowser += EBrowsers.Chromium;
        }
        if((vBrowser & EBrowsers.Chrome) || (vBrowser & EBrowsers.Opera) && !!window.CSS)
        {
            vBrowser += EBrowsers.Blink;
        }
        return vBrowser;
    }
}

window.onload = OnWindowLoad;

function OnWindowLoad()
{
    const vHTML = document.getElementById("html");
    vHTML.style.margin = 0;
    vHTML.style.padding = 0;  
    document.body.style.backgroundColor = "#000000";
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.overflow = 'hidden';
	Loader.mLoadImages
    (
        Loader.mFromImageEnum(EImages),
        ()=>
        {
            Loader.mLoadFonts
            (
                Loader.mFromFontsEnum(EFonts),
                ()=>
                {
                    const vBrowser = Loader.mBrowser();
                    const vFPS = 30;
                    const vCanvas = document.getElementById("canvas");
                    vCanvas.style.margin = 0;
                    vCanvas.style.padding = 0;
                    vCanvas.style.cursor = "none";
                    GameEngine.Instance.mStart(vFPS, vBrowser, vCanvas, LoadingScene.Instance);
                }
            )
        }      
    );
}
