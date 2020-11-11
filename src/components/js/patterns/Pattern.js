export default class Pattern {
    /**
     * Init elements of the class
     */
    initElements() {}

    /**
     * Init events of the class
     */
    initEvents() {}

    /**
     * Launch the current activity after retrieve and inject template on DOM
     */
    launch() {
        this.initElements();
        this.initEvents();
    }

    /**
     * Lifecycle hook for destroy
     */
    onDestroy() {}
}