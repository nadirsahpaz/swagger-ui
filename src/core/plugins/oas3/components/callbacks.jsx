import React from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"
import { fromJS } from "immutable"

const Callbacks = (props) => {
  let { callbacks, getComponent } = props
  // const Markdown = getComponent("Markdown")
  const OperationContainer = getComponent("OperationContainer", true)

  if(!callbacks) {
    return <span>No callbacks</span>
  }

  let callbackElements = callbacks.map((callback, callbackName) => {
    return <div key={callbackName}>
      <h2>{callbackName}</h2>
      { callback.map((pathItem, pathItemName) => {
        return <div key={pathItemName}>
          { pathItem.map((operation, method) => {
            let op = fromJS({
              operation
            })
            return <OperationContainer
              {...props}
              op={op}
              key={method}
              tag={""}
              method={method}
              path={pathItemName}
              allowTryItOut={false}
              />
          }) }
        </div>
      }) }
    </div>
  })
  return <div>
    {callbackElements}
  </div>
}

Callbacks.propTypes = {
  getComponent: PropTypes.func.isRequired,
  callbacks: ImPropTypes.iterable.isRequired

}

export default Callbacks
