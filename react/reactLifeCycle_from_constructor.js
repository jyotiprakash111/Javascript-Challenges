/* Mounting Phase 
constructor(props):

// The constructor is the first method called when a component instance is created. It’s used for initializing state, binding event handlers, and any other setup tasks.

// If you use state or bind event handlers, you need to call super(props) to properly initialize the component.

constructor(props) {
    super(props);
    // Initialize state
    this.state = {
        counter: 0
    };
    // Bind methods
    this.handleClick = this.handleClick.bind(this);
}


// 2. static getDerivedStateFromProps(props, state):

// This method is called right before rendering both during the initial mount and subsequent updates. It should return an object to update the state or null to update nothing.

// It’s used to update the state in response to prop changes.


// static
 getDerivedStateFromProps(props, state) {
    if (props.someProp !== state.someState) {
        return { someState: props.someProp };
    }
    return null;
}


// 3. render():

// The render method is required and is responsible for describing what the UI should look like. It returns a React element, JSX, or null.


render() {
    return (
        <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.handleClick}>Increment</button>
        </div>
    );
}


// 4.componentDidMount():

// This method is called immediately after a component is mounted (inserted into the tree). It’s a good place to make network requests or initialize timers.

componentDidMount() {
    // Perform any necessary setup, such as fetching data
    console.log("Component mounted!");
}


// Updating Phase
// static getDerivedStateFromProps(props, state):

// 1. This method is called again when new props or state are being received, before the render method.

shouldComponentUpdate(nextProps, nextState);

// 2. This method is called before rendering when new props or state are received. By default, it returns true, but you can return false to prevent re-rendering.

shouldComponentUpdate(nextProps, nextState) {
    // Determine if component should re-render
    return this.state.counter !== nextState.counter;
}


// render():
// This method is called again to render the component.

getSnapshotBeforeUpdate(prevProps, prevState);

// This method is called right before the DOM is updated. It allows you to capture information from the DOM before it is changed.


getSnapshotBeforeUpdate(prevProps, prevState) {
    // Capture the scroll position or other DOM info
    return { scrollPosition: window.scrollY };
}


getSnapshotBeforeUpdate(prevProps, prevState) {
    Capture the scroll position or other DOM info
    return { scrollPosition: window.scrollY };
}


*/