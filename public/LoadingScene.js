export class IntroScene extends Scene
{
    static aInstance = null;
    static get Instance()
    {
        if(IntroScene.aInstance === null)
        {
            IntroScene.aInstance = new IntroScene();
        }
        return IntroScene.aInstance;
    }

    constructor()
    {
        super();
		this.aAutomaton = new Automaton(IntroFadeInState.Instance);
        this.aTimer = 0;
        this.aClicked = false;
        this.aStatus = EIntroStatus.FadeIn;
        this.aAlpha = 0;
        this.aMouse = Mouse.Instance;
        this.mAddOnAllEventListener(this.aMouse);
		this.aAutomaton.mChangeState(IntroFadeInState.Instance);
    }
