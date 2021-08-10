import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxillary/Auxillary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      //clearing if request sent
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req; //has to set it
      });

      //catching error is it happens
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res, //have to set it for functionality
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    //clean up: remove interceptors when not needed
    componentWillUnmount() {
      console.log("will unmount", this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
