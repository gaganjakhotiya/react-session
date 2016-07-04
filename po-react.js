(function(){
  var ColorSelector = React.createClass({
      getInitialState: function() {
          return {
              red: 0,
              green: 0,
              blue: 0,
              colorCode: '#000000'
          }
      },

      onChange: function(e) {
          this.state[e.target.name] = e.target.value;
          this.state['colorCode'] = this.getHexColorCode(this.state.red, this.state.green, this.state.blue);
          this.forceUpdate();
      },

      getHexColorCode: function(red, green, blue) {
          return "#" + ((1 << 25) + (red << 16) + (green << 8) + (blue << 0)).toString(16).substr(1);
      },

      render: function() {
          var style = { 'width': '100px', 'height': '100px', 'background': this.state.colorCode }
          return (
            <div>
              <div>
                <p>Red</p><input type="range" name="red" min="0" max="255" value={this.state.red} onChange={this.onChange}/><strong>{ this.state.red }</strong><br/>
                <p>Green</p><input type="range" name="green" min="0" max="255" value={this.state.green} onChange={this.onChange}/><strong>{ this.state.green }</strong><br/>
                <p>Blue</p><input type="range" name="blue" min="0" max="255" value={this.state.blue} onChange={this.onChange}/><strong>{ this.state.blue }</strong><br/>
              </div>
              <div style={style}></div>
              <div>{this.state.colorCode}</div>
            </div>
          )
      }
  });
  ReactDOM.render(<ColorSelector/>, document.getElementById('content'));
}())