import React from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from 'react-markdown';
import './styles.scss';

const markdown = `# This is a markdown previewer
---
## Headings can be added by typing "#" as seen in the editor
### The amount of "#" indicates the heading number; this would be heading 3

You can also use *italics* and **bolded** text wherever you wish.

> Moreover, there are Blockquotes too!

And you can write in-line code like this: \`console.log("Very important code");\` In-line means it's located inside regular text.

Markdown has links; here is [a link to my GitHub profile](https://github.com/Roman-Octavian).

There are unordered and ordered lists too:
* Unordered list element
* Unordered list element
1. Ordered list element
1. Ordered list element

Here's a code block, for a change:

    public class Main {
        public static void main(String args[]) {
            System.out.println("Hello World!");
        }
    }
And, lastly, images can also be embedded with Markdown:

![React logo, this is alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png)`


class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: markdown
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleInput (event) {
        this.setState({
                input: event.target.value
            });
    }
    handleClick = () => {
        this.setState({
            input :''
        });
    }
    render() {
        return(
            <div>
                <h1 id="title">Markdown Previewer</h1>
                <div id="textarea-div">
                    <h2 class="subtitle">EDITOR:</h2>
                    <textarea id="editor" value={this.state.input} onChange={this.handleInput} />
                    <button onClick={this.handleClick}>Clear Editor</button>
                </div>
                    <div id="previewer-div">
                        <h2 class="subtitle">PREVIEWER:</h2>
                        <div id="preview">
                        <ReactMarkdown>{this.state.input}</ReactMarkdown>
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="App">
                <MainContent />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.getElementById("root")
)