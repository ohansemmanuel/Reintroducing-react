import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'

class Chats extends Component {
  render () {
    return (
      <React.Fragment>
        {this.props.chatList.map((chat, i) => {
          if (i === 4) {
            // Simulate an error
            throw new Error('I crashed!')
          }
          return (
            <li key={i} className='chat-bubble'>
              {chat}
            </li>
          )
        })}
      </React.Fragment>
    )
  }
}

class App extends Component {
  chatThreadRef = React.createRef()

  // NB: unconditionally overriding state here is generally a bad idea.
  static getDerivedStateFromProps (props, state) {
    return {
      points: 1000
    }
  }
  state = {
    points: 10,
    chatList: ['Hey', 'Hello', 'Hi']
  }

  _handleAddChat = () => {
    this.setState(prevState => ({
      chatList: [...prevState.chatList, 'Hello!!!']
    }))
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    if (this.state.chatList > prevState.chatList) {
      const chatThreadRef = this.chatThreadRef.current
      return chatThreadRef.scrollHeight - chatThreadRef.scrollTop
    }
    return null
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const chatThreadRef = this.chatThreadRef.current
      chatThreadRef.scrollTop = chatThreadRef.scrollHeight - snapshot
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>You've scored {this.state.points} points.</p>
        </header>
        <section className='App-chat'>
          <p className='chat-header'>
            Football Chat{' '}
            <button className='chat-btn' onClick={this._handleAddChat}>
              Add Chat
            </button>
          </p>
          <ul className='chat-thread' ref={this.chatThreadRef}>
            <Chats chatList={this.state.chatList} />
          </ul>
        </section>
      </div>
    )
  }
}

export default App
