import React from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from 'react-markdown';
import './styles.scss';

const markdown = `# HEADING 1
## HEADING 2
### HEADING 3

*italics*

**bold**

> Blockquote for quoting stuff basically 

\`and here's some code\`

[A link to my GitHub profile](https://github.com/Roman-Octavian)

* Unordered list element
* Unordered list element
1. Ordered list element
1. Ordered list element

Here's a code block:

    public class Main {
        public static void main(String args[]) {
            System.out.println("Hello World!");
        }
    }

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png)
`


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
                <h2 id="editor-title">Editor:</h2>
                <textarea id="editor" value={this.state.input} onChange={this.handleInput} />
                <h2 id="previewer-title">Previewer:</h2>
                <div id="preview">
                    <ReactMarkdown source={markdown} escapeHtml={false}>{this.state.input}</ReactMarkdown>
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