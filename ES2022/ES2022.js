class Colorbutton extends HTMLElement{

    // all field are public by default
    color = "red"
    //  private fields are start with a #, and can be only changed from  a class

    #clicked = false

    #somethingClicked(){

    }
}

const button = new ColorButton()

// public fields are accessed and changed by eveyone

button.color = "blue"