import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions/actions'
const { SHOW_ALL } = VisibilityFilters

const initialState = {
  visibiltyFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todos(state = [], action){
  switch (action.type){
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
      case TOGGLE_TODO
        return Object.assign({}, state, {
          todos: state.todos.map((todo, index) => {
            if (index === action.index){
              return Object.assign({}, todo, {
                completed: !todo.completed
              })
            }
            return todo
          })
        })
      default:
        return state
  }
}

function visibiltyFilter(state = SHOW_ALL, action){
  switch (action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibiltyFilter,
  todos
})
