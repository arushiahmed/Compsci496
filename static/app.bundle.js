webpackJsonp([0],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(20);

var _reactRouter = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bodyPage = {
  width: '100%',
  height: '100%',
  margin: '0'

};

var content = {
  width: '550px',
  margin: 'auto',
  marginBottom: '5%'
};

var divStyle = {
  width: '100%',
  height: '250px',
  marginTop: '20px'

};

var signUp = {
  height: '$height',
  marginLeft: '25px',
  marginTop: '20px'
};

var loginPage = {
  height: '$height/2',
  marginLeft: '25%',
  marginTop: '20px'
};

var Welcome = function (_React$createClass) {
  _inherits(Welcome, _React$createClass);

  function Welcome() {
    _classCallCheck(this, Welcome);

    return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
  }

  return Welcome;
}(_react2.default.createClass({
  displayName: 'Welcome',

  getInitialState: function getInitialState() {
    return { signup: false, login: true };
  },
  switch: function _switch(word) {
    var signup = void 0,
        login = void 0;
    if (word == "signup") {
      signup = true;login = false;
    } else {
      login = true;signup = false;
    }
    return this.setState({ login: login, signup: signup });
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      { style: bodyPage },
      _react2.default.createElement(
        'h1',
        { style: { marginLeft: '2%', marginTop: '15px' } },
        'Website title'
      ),
      _react2.default.createElement(
        'center',
        { style: content },
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { id: 'buttons' },
          _react2.default.createElement(
            'button',
            { id: 'signupButton', onClick: this.switch.bind(null, "signup"), className: 'btn btn-dark', style: signUp },
            'Sign Up'
          ),
          _react2.default.createElement(
            'button',
            { id: 'loginButton', onClick: this.switch.bind(null, "login"), className: 'btn btn-dark', style: loginPage },
            'Login'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        this.state.signup ? _react2.default.createElement(Signup, null) : null,
        this.state.login ? _react2.default.createElement(Login, null) : null
      )
    );
  }
}));

exports.default = Welcome;

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup() {
    _classCallCheck(this, Signup);

    return _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));
  }

  _createClass(Signup, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { className: 'form-group', name: 'signup' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Name'
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement('input', { type: 'name', className: 'form-control', id: 'firstname', placeholder: 'First Name' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement('input', { type: 'name', className: 'form-control', id: 'lastname', placeholder: 'Last Name' })
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Undergraduate or Graduate Student'
          ),
          _react2.default.createElement('input', { type: 'degree', className: 'form-control', id: 'inputDegree', placeholder: 'Degree' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'School'
          ),
          _react2.default.createElement('input', { type: 'school', className: 'form-control', id: 'inputSchool', placeholder: 'School' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'School Email'
          ),
          _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'inputEmail', placeholder: 'Email' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Major'
          ),
          _react2.default.createElement('input', { type: 'major', className: 'form-control', id: 'inputMajor', placeholder: 'Major' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Year'
          ),
          _react2.default.createElement('input', { type: 'year', className: 'form-control', id: 'inputYear', placeholder: 'Year' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Country'
          ),
          _react2.default.createElement('input', { type: 'country', className: 'form-control', id: 'inputCountry', placeholder: 'Country' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Username'
          ),
          _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'inputUsername', placeholder: 'Username' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Password'
          ),
          _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'inputPassword', placeholder: 'Password' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Confirm Password'
          ),
          _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'comfirmPassword', placeholder: 'Confirm Password' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-dark', role: 'button' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/form', style: { textDecoration: 'none', color: 'white' } },
            'Sign Up'
          )
        )
      );
    }
  }]);

  return Signup;
}(_react2.default.Component);

var Login = function (_React$Component2) {
  _inherits(Login, _React$Component2);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { className: 'form-group', name: 'login' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Username'
          ),
          _react2.default.createElement('input', { className: 'form-control', id: 'inputName', placeholder: 'Username' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Password'
          ),
          _react2.default.createElement('input', { className: 'form-control', id: 'inputPassword', placeholder: 'Password' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-dark', role: 'button' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/about', style: { textDecoration: 'none', color: 'white' } },
            'Login'
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(20);

var _reactRouter = __webpack_require__(15);

var _Profile = __webpack_require__(79);

var _Profile2 = _interopRequireDefault(_Profile);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'h1',
          { style: { marginLeft: '2%' } },
          'About'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'center',
          null,
          _react2.default.createElement(
            'p',
            null,
            'This is an interactive platform where international students and domestic students can find friends.'
          )
        )
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(86);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(15);

var _NewSurvey = __webpack_require__(250);

var _NewSurvey2 = _interopRequireDefault(_NewSurvey);

var _Welcome = __webpack_require__(123);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Profile = __webpack_require__(79);

var _Profile2 = _interopRequireDefault(_Profile);

var _About = __webpack_require__(124);

var _About2 = _interopRequireDefault(_About);

var _Survey = __webpack_require__(249);

var _Survey2 = _interopRequireDefault(_Survey);

var _FriendList = __webpack_require__(248);

var _FriendList2 = _interopRequireDefault(_FriendList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById("contents");

// A simple component to indicate that a page was not found.
var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};

// This defines the main application layout that can be used
// across nested routes. The `props.children` property is received
// by the parent route. See the route definitions below.
var App = function App(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'contents' },
      props.children
    )
  );
};

// For safety, we specify that the prop types received by the
// App component must require a "children" property. If we do
// not include this it will not compile.
App.propTypes = {
  children: _react2.default.PropTypes.object.isRequired
};

var RoutedApp = function RoutedApp() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: App },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Welcome2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/connect', component: (0, _reactRouter.withRouter)(_FriendList2.default) }),
      _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/form', component: _NewSurvey2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/userSurvey', component: _Survey2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/profile', component: _Profile2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
    )
  );
};

// This renders the JSX router inside the content node:
_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FriendFilter = function (_React$Component) {
  _inherits(FriendFilter, _React$Component);

  function FriendFilter(props) {
    _classCallCheck(this, FriendFilter);

    var _this = _possibleConstructorReturn(this, (FriendFilter.__proto__ || Object.getPrototypeOf(FriendFilter)).call(this, props));

    _this.state = {
      status: props.initFilter.status || '',
      changed: false
    };

    _this.onChangeStatus = _this.onChangeStatus.bind(_this);
    _this.applyFilter = _this.applyFilter.bind(_this);
    _this.resetFilter = _this.resetFilter.bind(_this);
    _this.clearFilter = _this.clearFilter.bind(_this);
    return _this;
  }

  _createClass(FriendFilter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        status: newProps.initFilter.status || '',
        changed: false
      });
    }
  }, {
    key: 'resetFilter',
    value: function resetFilter() {
      this.setState({
        status: this.props.initFilter.status || '',
        changed: false
      });
    }
  }, {
    key: 'onChangeStatus',
    value: function onChangeStatus(e) {
      this.setState({ status: e.target.value, changed: true });
    }
  }, {
    key: 'clearFilter',
    value: function clearFilter(e) {
      this.props.setFilter({});
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter() {
      var newFilter = {};
      if (this.state.status) newFilter.status = this.state.status;
      this.props.setFilter(newFilter);
    }
  }, {
    key: 'clearFilter',
    value: function clearFilter() {
      this.props.setFilter({});
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Status:',
        _react2.default.createElement(
          'select',
          { value: this.state.status, onChange: this.onChangeStatus },
          _react2.default.createElement(
            'option',
            { value: '' },
            '(Any)'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Undergraduate' },
            'Undergraduate'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Graduate' },
            'Graduate'
          )
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.applyFilter },
          'Apply'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.resetFilter, disabled: !this.state.changed },
          'Reset'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.clearFilter },
          'Clear'
        )
      );
    }
  }]);

  return FriendFilter;
}(_react2.default.Component);

exports.default = FriendFilter;


FriendFilter.propTypes = {
  setFilter: _react2.default.PropTypes.func.isRequired,
  initFilter: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(20);

var _reactRouter = __webpack_require__(15);

var _FriendFilter = __webpack_require__(245);

var _FriendFilter2 = _interopRequireDefault(_FriendFilter);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// NEW
// (1) Added a function to delete an issue given the issue ID.
// (2) Added a button to the interface to provide the delete functionality.
var FriendCard = function FriendCard(props) {
  return _react2.default.createElement(
    _reactRouter.Link,
    { to: '/profile', style: { textDecoration: 'none', color: 'black' } },
    _react2.default.createElement(
      'div',
      { className: 'card border-dark mb-3', style: { width: '400px', marginLeft: '25%' } },
      _react2.default.createElement(
        'div',
        { className: 'card-body h-100' },
        _react2.default.createElement(
          'h5',
          { className: 'card-title' },
          'Name:',
          props.friend.name,
          ' '
        ),
        _react2.default.createElement(
          'h6',
          { className: 'card-subtitle mb-2', id: 'academic' },
          'Academic:',
          props.friend.status
        ),
        _react2.default.createElement(
          'h6',
          { className: 'card-subtitle mb-2', id: 'school' },
          'School: ',
          props.friend.school
        ),
        _react2.default.createElement(
          'h6',
          { className: 'card-subtitle mb-2', id: 'year' },
          'Year: ',
          props.friend.school
        ),
        _react2.default.createElement(
          'h6',
          { className: 'card-subtitle mb-2', id: 'rate' },
          'Rate: ',
          props.friend.rate
        ),
        _react2.default.createElement(
          'p',
          { className: 'card-text', id: 'bio' },
          'Bio: ',
          props.friend.bio
        ),
        _react2.default.createElement('br', null)
      )
    )
  );
};

FriendCard.propTypes = {
  friend: _react2.default.PropTypes.object.isRequired
};
// NEW END

function FriendTable(props) {
  var friendCard = props.friends.map(function (friend) {
    return _react2.default.createElement(FriendCard, { key: friend._id, friend: friend });
  });
  return _react2.default.createElement(
    'div',
    { className: 'card-deck' },
    friendCard
  );
}

// NEW
FriendTable.propTypes = {
  friends: _react2.default.PropTypes.array.isRequired
};
// NEW END

var FriendList = function (_React$Component) {
  _inherits(FriendList, _React$Component);

  function FriendList() {
    _classCallCheck(this, FriendList);

    var _this = _possibleConstructorReturn(this, (FriendList.__proto__ || Object.getPrototypeOf(FriendList)).call(this));

    _this.state = { friends: [] };

    _this.loadData = _this.loadData.bind(_this);
    _this.setFilter = _this.setFilter.bind(_this);
    return _this;
  }

  _createClass(FriendList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }

    // This method is part of the React component "lifecycle". It is invoked
    // when a component property is updated. In this case, we are using it to
    // load new data when the props.location object is changed. In particular,
    // when we click on a link that causes react router to change the view to
    // the IssueList and the URL changes (for example, a search query) it
    // causes the componentDidUpdate() method to be invoked.

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var oldQuery = prevProps.location.query;
      var newQuery = this.props.location.query;
      if (oldQuery.status === newQuery.status) {
        return;
      }
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      // Note: React Router automatically adds a "location" property to a react
      //       object's "props". The object that the "location" property refers
      //       to also has a "search" property which is the query string of the
      //       URL, including the '?' character  -  which is why we do not need
      //       to add it to the string in the `fetch()` call.
      fetch('/api/friends' + this.props.location.search).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            var friends = [];
            data.records.forEach(function (friend) {
              friends.push(friend);
            });
            _this2.setState({ friends: data.records });
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }
  }, {
    key: 'setFilter',
    value: function setFilter(query) {
      this.props.router.push({ pathname: this.props.location.pathname, query: query });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _SearchBar2.default,
          null,
          ' '
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_FriendFilter2.default, { setFilter: this.setFilter, initFilter: this.props.location.query }),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(FriendTable, { friends: this.state.friends })
      );
    }
  }]);

  return FriendList;
}(_react2.default.Component);

exports.default = FriendList;


FriendList.propTypes = {
  location: _react2.default.PropTypes.object.isRequired,
  router: _react2.default.PropTypes.object
};

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(20);

var _reactRouter = __webpack_require__(15);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formStyle = {
  marginLeft: '2%',
  marginRight: '2%',
  fontSize: '20px'
};

var FormQuestion = function FormQuestion(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      { style: { marginLeft: '2%' } },
      'What are the people you want to connect with?'
    ),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you want to meet somone in person, online, or both?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.one
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you want to connect with Undergraduates, Graduates Students, or both?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.two
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you want to connect with people in the same year as you, different, or both?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.three
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you want to connect with people from the same country, different, or both?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.four
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you want to connect with people in the same major, different, or both?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.five
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you want to connect with people in the same school/college as you, different, or both?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.six
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you want to connect with someone who has a car on campus?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.seven
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you want to connect with people who share the same ethnicity?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.eight
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      { style: { marginLeft: '2%' } },
      'Knowledge about the University'
    ),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you have any knowledge of the school before you started? If yes please describe below.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.nine
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you know the city/town of where your school is located? If yes please descibe below.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.ten
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you have a job(s) on campus? If yes please descibe the position and what you do below.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.eleven
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Are their resources on campus that you found helpful/not helpful? If yes please descibe the position and what you do below.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.tweleve
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Are you involved with any clubs/organizations on campus? If yes please descibe the position and what you do below.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.thirteen
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      { style: { marginLeft: '2%' } },
      'What are your hobbies?'
    ),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Select all hobbies that apply to you.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.categories
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'If there is a hobbie that was not listest above, type your answers here. Please explain more about your hobbies.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.fourteen
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      { style: { marginLeft: '2%' } },
      'What are you hoping to get out of this website?'
    ),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Are you looking for help or are you willing to help? Please describe.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.fifteen
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Are there any challenges you are coping with? Please describe.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.sixteen
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'How can someone help you with your challenges? Please describe.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.seventeen
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'How are you able to help someone with their challenges? Please describe.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        { style: { border: '2px solid grey' } },
        'My Answer: '
      ),
      props.question.eighteen
    ),
    _react2.default.createElement('br', null)
  );
};

function FormPage(props) {
  var formQuestions = props.questionform.map(function (question) {
    return _react2.default.createElement(FormQuestion, { key: question._id, question: question });
  });

  return _react2.default.createElement(
    'div',
    { id: 'question-air' },
    formQuestions
  );
}

var Survey = function (_React$Component) {
  _inherits(Survey, _React$Component);

  function Survey() {
    _classCallCheck(this, Survey);

    var _this = _possibleConstructorReturn(this, (Survey.__proto__ || Object.getPrototypeOf(Survey)).call(this));

    _this.loadData = _this.loadData.bind(_this);

    _this.state = {
      questionform: []
    };

    return _this;
  }

  _createClass(Survey, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      var question = this.state.questionform;
      fetch("api/questionform").then(function (res) {
        if (res.ok) {
          res.json().then(function (json) {
            var questionform = [];
            json.records.forEach(function (question) {
              questionform.push(question);
            });
            _this2.setState({ questionform: questionform });
          });
        }
      }).catch(function (err) {
        alert("There was a problem: " + err.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'h1',
          { style: { marginLeft: '2%' } },
          'My Survey'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('hr', null),
          _react2.default.createElement(FormPage, { questionform: this.state.questionform }),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'center',
            null,
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-dark', role: 'button' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/form', style: { textDecoration: 'none', color: 'white' } },
                    'New Survery'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-dark', role: 'button' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/*', style: { textDecoration: 'none', color: 'white' } },
                    'Edit'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-dark', role: 'button', Link: '/connect' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/connect', style: { textDecoration: 'none', color: 'white' } },
                    'Find Friends'
                  )
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null)
          )
        )
      );
    }
  }]);

  return Survey;
}(_react2.default.Component);

exports.default = Survey;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(20);

var _reactRouter = __webpack_require__(15);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Style Variables
var inputStyle = {
  marginRight: '5%'

};

var textStyle = {
  fontSize: '22px',
  fontFamily: 'Athelas',
  marginLeft: '5%',
  marginRight: '5%'
};

var formStyle = {
  marginLeft: '2%',
  marginRight: '2%',
  fontSize: '20px'

  //Checkboxes

};
var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      six: '',
      seven: '',
      eight: '',
      categories: [{ name: 'Sports', value: 'Sports' }, { name: 'Dance', value: 'Dance' }, { name: 'Music', value: 'Music' }, { name: 'Art', value: 'Art' }, { name: 'Fashion', value: 'Fashion' }, { name: 'Make up', value: 'Make up' }, { name: 'Traveling', value: 'Traveling' }, { name: 'Hiking', value: 'Hiking' }, { name: 'Gardening', value: 'Gardening' }, { name: 'Camping', value: 'Camping' }, { name: 'Video Games', value: 'Video Games' }, { name: 'Photography', value: 'Photography' }, { name: 'Cars', value: 'Cars' }, { name: 'Movies', value: 'Movies' }, { name: 'Books', value: 'Books' }, { name: 'Volunteer', value: 'Volunteer' }, { name: 'Comedy', value: 'Comedy' }, { name: 'Games', value: 'Games' }, { name: 'Building', value: 'Building' }, { name: 'Fishing', value: 'Fishing' }, { name: 'Theater', value: 'Theater' }, { name: 'Baking/Cooking', value: 'Baking/Cooking' }, { name: 'Writing', value: 'Writing' }, { name: 'Other', value: 'Other' }],
      nine: '',
      ten: '',
      eleven: '',
      tweleve: '',
      thirteen: '',
      fourteen: '',
      fifteen: '',
      sixteen: '',
      seventeen: '',
      eighteen: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleCheck = _this.handleCheck.bind(_this);
    _this.oneChange = _this.oneChange.bind(_this);
    _this.twoChange = _this.twoChange.bind(_this);
    _this.threeChange = _this.threeChange.bind(_this);
    _this.fourChange = _this.fourChange.bind(_this);
    _this.fiveChange = _this.fiveChange.bind(_this);
    _this.sixChange = _this.sixChange.bind(_this);
    _this.sevenChange = _this.sevenChange.bind(_this);
    _this.eightChange = _this.eightChange.bind(_this);

    return _this;
  }

  _createClass(Form, [{
    key: 'handleCheck',
    value: function handleCheck(e) {
      var categories = this.state.categories;
      var index = void 0;

      if (e.target.checked) {
        categories.push(+e.target.value);
      } else {
        index = categories.indexOf(+e.value);
        categories.splice(index, 1);
      }

      this.setState(_defineProperty({}, categories, e.target.value));
    }
  }, {
    key: 'oneChange',
    value: function oneChange(e) {
      this.setState({ one: e.target.value });
    }
  }, {
    key: 'twoChange',
    value: function twoChange(e) {
      this.setState({ two: e.target.value });
    }
  }, {
    key: 'threeChange',
    value: function threeChange(e) {
      this.setState({ three: e.target.value });
    }
  }, {
    key: 'fourChange',
    value: function fourChange(e) {
      this.setState({ four: e.target.value });
    }
  }, {
    key: 'fiveChange',
    value: function fiveChange(e) {
      this.setState({ five: e.target.value });
    }
  }, {
    key: 'sixChange',
    value: function sixChange(e) {
      this.setState({ six: e.target.value });
    }
  }, {
    key: 'sevenChange',
    value: function sevenChange(e) {
      this.setState({ seven: e.target.value });
    }
  }, {
    key: 'eightChange',
    value: function eightChange(e) {
      this.setState({ eight: e.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.question;
      var submitReq = {
        "one": form.inlineRadio1.value,
        "two": form.inlineRadio2.value,
        "three": form.inlineRadio3.value,
        "four": form.inlineRadio4.value,
        "five": form.inlineRadio5.value,
        "six": form.inlineRadio6.value,
        "seven": form.inlineRadio7.value,
        "eight": form.inlineRadio8.value,
        "categories": form.defaultCheck.value,
        "nine": form.openOne.value,
        "ten": form.openTwo.value,
        "eleven": form.openThree.value,
        "tweleve": form.openFour.value,
        "thirteen": form.openFive.value,
        "fourteen": form.openSix.value,
        "fifteen": form.openSeven.value,
        "sixteen": form.openEight.value,
        "seventeen": form.openNine.value,
        "eighteen": form.openTen.value
      };

      fetch('/api/questionform', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitReq)
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.success) {
          alert('Failed to add event.\n Error description: ' + json.msg);
        } else {
          alert('Questions Saved');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _SearchBar2.default,
          null,
          ' '
        ),
        _react2.default.createElement(
          'h1',
          { style: { marginLeft: '2%' } },
          'Survery Questions'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'form',
          { className: 'form-group', name: 'question', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            'What are the people you want to connect with?'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you want to meet somone in person, online, or both?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions1', id: 'inlineRadio1', value: 'In person', checked: this.state.one === 'In person', onChange: this.oneChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio1' },
                  'In person'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions1', id: 'inlineRadio1', value: 'Online', checked: this.state.one === 'Online', onChange: this.oneChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio1' },
                  'Online'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions1', id: 'inlineRadio1', value: 'Both', checked: this.state.one === 'Both', onChange: this.oneChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio1' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you want to connect with Undergraduates, Graduates Students, or both?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions2', id: 'inlineRadio2', value: 'Undergraduates', checked: this.state.two === 'Undergraduates', onChange: this.twoChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio1' },
                  'Undergraduates'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions2', id: 'inlineRadio2', value: 'Graduates', checked: this.state.two === 'Graduates', onChange: this.twoChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio2' },
                  'Graduates'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions2', id: 'inlineRadio2', value: 'Both', checked: this.state.two === 'Both', onChange: this.twoChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio2' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you want to connect with people in the same year as you, different, or both?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions3', id: 'inlineRadio3', value: 'Same', checked: this.state.three === 'Same', onChange: this.threeChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio3' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions3', id: 'inlineRadio3', value: 'Different', checked: this.state.three === 'Different', onChange: this.threeChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio3' },
                  'Different'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions3', id: 'inlineRadio3', value: 'Both', checked: this.state.three === 'Both', onChange: this.threeChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio3' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you want to connect with people from the same country, different, or both?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions4', id: 'inlineRadio4', value: 'Same', checked: this.state.four === 'Same', onChange: this.fourChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio1' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions4', id: 'inlineRadio4', value: 'Different', checked: this.state.four === 'Different', onChange: this.fourChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio4' },
                  'Different'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions4', id: 'inlineRadio4', value: 'Both', checked: this.state.four === 'Both', onChange: this.fourChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio4' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you want to connect with people in the same major, different, or both?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions5', id: 'inlineRadio5', value: 'Same', checked: this.state.five === 'Same', onChange: this.fiveChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio5' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions5', id: 'inlineRadio5', value: 'Different', checked: this.state.five === 'Different', onChange: this.fiveChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio5' },
                  'Different'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions5', id: 'inlineRadio5', value: 'Both', checked: this.state.five === 'Both', onChange: this.fiveChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio5' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you want to connect with people in the same school/college as you, different, or both?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions6', id: 'inlineRadio6', value: 'Same', checked: this.state.six === 'Same', onChange: this.sixChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio6' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions6', id: 'inlineRadio6', value: 'Different', checked: this.state.six === 'Different', onChange: this.sixChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio6' },
                  'Different'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions6', id: 'inlineRadio6', value: 'Both', checked: this.state.six === 'Both', onChange: this.sixChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio2' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you want to connect with someone who has a car on campus?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions7', id: 'inlineRadio7', value: 'Yes', checked: this.state.seven === 'Yes', onChange: this.sevenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'Yes '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions7', id: 'inlineRadio7', value: 'No', checked: this.state.seven === 'No', onChange: this.sevenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'No'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions7', id: 'inlineRadio7', value: 'Both', checked: this.state.seven === 'Both', onChange: this.sevenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you want to connect with people who share the same ethnicity?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions8', id: 'inlineRadio8', value: 'Same', checked: this.state.eight === 'Same', onChange: this.eightChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'inlineRadioOptions8', id: 'inlineRadio8', value: 'Different', checked: this.state.eight === 'Different', onChange: this.eightChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Different'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            'Knowledge about the University'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you have any knowledge of the school before you started? Please describe what you know.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openOne', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you know the city/town of where your school is located? Please describe what you know.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openTwo', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Do you have a job(s) on campus? If yes please descibe the position and what you do below.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openThree', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Are their resources on campus that you found helpful/not helpful? If yes please descibe the position and what you do below.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openFour', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Are you involved with any clubs/organizations on campus? If yes please descibe the position and what you do below.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openFive', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            'What are your hobbies'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'col', style: textStyle },
              _react2.default.createElement(
                'label',
                null,
                'Select all hobbies that apply to you.'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group', id: 'hobbies' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck', checked: this.state.categories[0].false, name: this.state.categories[0].name, value: this.state.categories[0].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck' },
                    'Sports'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck1', checked: this.state.categories[1].false, name: this.state.categories[1].name, value: this.state.categories[1].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck1' },
                    'Dance'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck2', checked: this.state.categories[2].false, name: this.state.categories[2].name, value: this.state.categories[2].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck2' },
                    'Music'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck3', checked: this.state.categories[3].false, name: this.state.categories[3].name, value: this.state.categories[3].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck3' },
                    'Art'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck4', checked: this.state.categories[4].false, name: this.state.categories[4].name, value: this.state.categories[4].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck4' },
                    'Fashion'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck5', checked: this.state.categories[5].false, name: this.state.categories[5].name, value: this.state.categories[5].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck5' },
                    'Make up'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck6', checked: this.state.categories[6].false, name: this.state.categories[6].name, value: this.state.categories[6].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck6' },
                    'Traveling'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck7', checked: this.state.categories[7].false, name: this.state.categories[7].name, value: this.state.categories[7].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck7' },
                    'Hiking'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck8', checked: this.state.categories[8].false, name: this.state.categories[8].name, value: this.state.categories[8].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck8' },
                    'Gardening'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck9', checked: this.state.categories[9].false, name: this.state.categories[9].name, value: this.state.categories[9].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck9' },
                    'Camping'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck10', checked: this.state.categories[10].false, name: this.state.categories[10].name, value: this.state.categories[10].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck9' },
                    'Video Games'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck11', checked: this.state.categories[11].false, name: this.state.categories[11].name, value: this.state.categories[11].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck11' },
                    'Photography'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck12', checked: this.state.categories[12].false, name: this.state.categories[12].name, value: this.state.categories[12].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck12' },
                    'Cars'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck13', checked: this.state.categories[13].false, name: this.state.categories[13].name, value: this.state.categories[13].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck13' },
                    'Movies'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck14', checked: this.state.categories[14].false, name: this.state.categories[14].name, value: this.state.categories[14].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck14' },
                    'Books'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck15', checked: this.state.categories[15].false, name: this.state.categories[15].name, value: this.state.categories[15].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck11' },
                    'Volunteer'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck16', checked: this.state.categories[16].false, name: this.state.categories[16].name, value: this.state.categories[16].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck16' },
                    'Comedy'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck17', checked: this.state.categories[17].false, name: this.state.categories[17].name, value: this.state.categories[17].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck17' },
                    'Games'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck18', checked: this.state.categories[18].false, name: this.state.categories[18].name, value: this.state.categories[18].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck18' },
                    'Building'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck19', checked: this.state.categories[19].false, name: this.state.categories[19].name, value: this.state.categories[19].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck19' },
                    'Fishing'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck20', checked: this.state.categories[20].false, name: this.state.categories[20].name, value: this.state.categories[20].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck20' },
                    'Theater'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck21', checked: this.state.categories[21].false, name: this.state.categories[21].name, value: this.state.categories[21].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck21' },
                    'Baking/Cooking'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck22', checked: this.state.categories[22].false, name: this.state.categories[22].name, value: this.state.categories[22].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck22' },
                    'Writing'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck23', checked: this.state.categories[23].false, name: this.state.categories[23].name, value: this.state.categories[23].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck23' },
                    'Other'
                  )
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'If there is a hobbie that was not listest above, type your answers here. Please explain more about your hobbies.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openSix', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            'What are you hoping to get out of this website?'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Are you looking for help or are you willing to help? Please describe.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openSeven', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Are there any challenges you are coping with? Please describe.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openEight', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'How can someone help you with your challenges? Please describe.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openNine', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'How are you able to help someone with their challenges? Please describe'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openTen', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'center',
            null,
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-dark', type: 'submit' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/connect', style: { textDecoration: 'none', color: 'white' } },
                    'Find Friends'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

exports.default = Form;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(20);

var _reactRouter = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));
  }

  _createClass(SearchBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'nav',
            { className: 'navbar navbar-dark' },
            _react2.default.createElement('a', { className: 'navbar-brand' }),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/about', style: { textDecoration: 'none', color: 'white' } },
                'About'
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/connect', style: { textDecoration: 'none', color: 'white' } },
                'Connect With Students'
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/userSurvey', style: { textDecoration: 'none', color: 'white' } },
                'Survery'
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/profile', style: { textDecoration: 'none', color: 'white' } },
                'Profile'
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/', style: { textDecoration: 'none', color: 'white' } },
                'Sign Out'
              )
            ),
            _react2.default.createElement(
              'form',
              { className: 'form-inline' },
              _react2.default.createElement('input', { className: 'form-control mr-sm-2', type: 'search', placeholder: 'Search', 'aria-label': 'Search' }),
              _react2.default.createElement(
                'button',
                { className: 'btn btn-outline-dark my-2 my-sm-0', type: 'submit' },
                'Search'
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(20);

var _reactRouter = __webpack_require__(15);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // NEW: added the import for react.


var profile = {
  border: "2px solid black",
  marginTop: "10px",
  marginLeft: "5%",
  fontSize: "20px",
  height: "100px",
  width: "100px"
};
var formStyle = {
  width: '500px'
};

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _SearchBar2.default,
          null,
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'row', style: { marginLeft: '85%' } },
          _react2.default.createElement(
            'div',
            { className: 'col' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/rate', style: { textDecoration: 'none', color: 'white' } },
                'Rate'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/chat', style: { textDecoration: 'none', color: 'white' } },
                'Chat'
              )
            )
          )
        ),
        _react2.default.createElement(
          'h1',
          { style: { marginLeft: '5%' } },
          'Profile'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'picture', style: profile },
          'Profile picture'
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'form',
          { style: { marginLeft: '5%' } },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Email address'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'text', className: 'form-control-plaintext', id: 'staticEmail', defaultValue: 'emailexamplel@umass.edu', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Degree'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'ethencity', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'School'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'school', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Country'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'country', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Bio:'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { className: 'form-control form-control-lg', id: 'exampleFormControlTextarea1', rows: '3', style: formStyle })
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-dark', role: 'button', style: { marginLeft: '5%' } },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '*', style: { textDecoration: 'none', color: 'white' } },
            'Edit'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

exports.default = Profile;

/***/ })

},[126]);
//# sourceMappingURL=app.bundle.js.map