var TextBox = React.createClass({
    getInitialState: function() {
        return {value: 'Hello!'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        function countWords(words){
            if (words.length == 0)
                return 0;
            return words.match(/[^\s]+/g).length;
        };
        return (
            <div className="statbox">
            <textarea
            value={this.state.value}
            onChange={this.handleChange}
            />
            <p>Character count: {this.state.value.length}</p>
            <p>Word count: {countWords(this.state.value)}</p> 
            </div>
        );
    }

});
ReactDOM.render(
    <TextBox />,
    document.getElementById('content')
);
