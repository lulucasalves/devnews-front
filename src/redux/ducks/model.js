export const Types = {
  NEW: 'items/new',
  LIST: 'items/list'
}

export const model = {
  items: [
    {
      example: 'example'
    }
  ]
}

export default function reducer(state = model, action) {
  switch (action.type) {
    case Types.NEW:
      const item = action.newItem
      const newArray = state.items
      newArray.push(item)
      return { ...state, items: newArray }
    default:
      return state
  }
}

export function info(item) {
  return {
    type: Types.INFO,
    payload: {
      info: item
    }
  }
}
