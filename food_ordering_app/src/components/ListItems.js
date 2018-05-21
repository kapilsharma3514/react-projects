import React from 'react';

class ListItems extends React.Component {


  addItem(item) {
    //alert('Add req '+item.name+' '+parseInt(parseInt(this.refs.count.textContent)+1));
    if (parseInt(parseInt(this.refs.count.textContent)+1) > 1) {
      this.refs.count.textContent = parseInt(parseInt(this.refs.count.textContent)+1);
    }
    else {
      this.refs.count.textContent = 1;
    }
    this.props.onAdd(item, this.refs.count.textContent);
  }

  deleteItem(item) {
    //alert('Delete req '+item.name+' '+parseInt(parseInt(this.refs.count.textContent)+1));
    if (parseInt(parseInt(this.refs.count.textContent)+1) > 1) {
      if (parseInt(parseInt(this.refs.count.textContent)+1) === 2) {
        this.refs.count.textContent = "";
      }
      else {
        this.refs.count.textContent = parseInt(parseInt(this.refs.count.textContent)-1);
      }
      this.props.deleteFromCart(item, this.refs.count.textContent);
    }
  }

  render() {
      const divStyle= {
        borderBottom: '1px solid lightgrey',
        padding: '5px 0px',
        overflow: 'hidden'
      }
      const noOpacity = {
        opacity: '0.3'
      }
      const yesOpacity = {
        opacity: '1'
      }
      console.log(new Date().getSeconds());
      let hStart = this.props.foodItem.availabletime.substr(0,2);
      let mStart = this.props.foodItem.availabletime.substr(3,2);
      let hEnd = this.props.foodItem.availabletime.substr(6,2);
      let mEnd = this.props.foodItem.availabletime.substr(9,2);
      let cHour = new Date().getHours();
      let cMinutes = new Date().getMinutes();
      let timeFlag=0;
      if ((parseInt(cHour)===parseInt(hStart) && parseInt(cMinutes)>=parseInt(mStart))
      || (parseInt(cHour)===parseInt(hEnd) && parseInt(cMinutes)<=parseInt(mEnd))
      || (parseInt(cHour)>parseInt(hStart) && parseInt(cHour)<parseInt(hEnd))) {
        timeFlag=1;
      }
      const statusToClassName = {
        veg: "btn btn-success",
        nonveg: "btn btn-danger"
      };
    return (
        <div>
        { timeFlag===1 &&
          <div style={yesOpacity}>
          <div className="row" style={divStyle}>
            <div className="col-md-1"><button className={statusToClassName[this.props.foodItem.vegflag]}></button></div>
            <div className="col-md-6 text-left"><div className="dish-name">{this.props.foodItem.name}
              </div>
              <span className="sub-desc">{this.props.foodItem.description}</span>
            </div>
            <div className="col-md-1" onClick={this.deleteItem.bind(this, this.props.foodItem)}><i className="glyphicon glyphicon-minus"></i></div>
            <div className="col-md-1" ref="count"></div>
            <div className="col-md-1" onClick={this.addItem.bind(this, this.props.foodItem)}><i className="glyphicon glyphicon-plus"></i></div>
            <div className="col-md-2"><i className="fa fa-inr"></i>{this.props.foodItem.price}</div>
          </div>
          </div>
        }
        {
          timeFlag===0 &&
            <div style={noOpacity}>
            <div className="row" style={divStyle}>
              <div className="col-md-1"><button className={statusToClassName[this.props.foodItem.vegflag]}></button></div>
              <div className="col-md-6 text-left"><div className="dish-name">{this.props.foodItem.name}
                </div>
                <span className="sub-desc">{this.props.foodItem.description}{this.props.foodItem.description && <br/>} Available Between {hStart}:{mStart} - {hEnd}:{mEnd}</span>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-1"></div>
              <div className="col-md-1"></div>
              <div className="col-md-2"><i className="fa fa-inr"></i>{this.props.foodItem.price}</div>
            </div>
            </div>
        }
        </div>
    );
  }
};

export default ListItems;
