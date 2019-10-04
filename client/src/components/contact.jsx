import React from "react";
import reactDOM from "react-dom";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }
  componentDidMount() {
    fetch("/api/contact")
      .then(res => res.json())
      .then(
        data => {
          console.log(data);
          this.setState({
            contacts: data
          });
        },
        err => console.log(err)
      );
  }
  render() {
    return (
      <div>
        <div className="form-wrapper">
          <h1 id="subscribe">Subscribe to PoWeR LaB</h1>

          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="form-group col-md-6">
                <label for="first-name">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="form-group col-md-6">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Comments</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div id="testimonial-wrapper">
          <h2 id="testimonial-header">Reviews</h2>
          {this.state.contacts.map(contacts => {
            return (
              <div>
                <section id="customer-testimonial">
                  <section id="customer-name">-{contacts.fname}</section>
                  {contacts.testimonial}
                </section>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Contact;
