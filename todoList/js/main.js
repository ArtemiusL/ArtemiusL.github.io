"use strict";

(function () {
	'use strict';

	var mainTemplate = document.querySelector("#main-template");
	var elementToClone = mainTemplate.content.querySelector("#todo-item-template");

	var getCaseElement = function getCaseElement(data, id) {
		var element = elementToClone.cloneNode(true);
		element.querySelector('.todo-item__span').textContent = data;
		element.querySelector('.item-input-check').id = "itemCheck-" + id;
		element.querySelector('.item-check-label').setAttribute('for', "itemCheck-" + id);
		return element;
	};
	var Case = function Case(data, id) {
		var _this = this;

		var boolean = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
		var App = arguments[3];

		this.data = data;
		this.element = getCaseElement(this.data, id);

		this.state = boolean;

		this.checkElement = this.element.querySelector('.item-input-check');
		this.closeElement = this.element.querySelector('.todo-item__close');

		this.remove = function () {
			_this.element.parentNode.removeChild(_this.element);
			App.todoList = App.todoList.filter(function (el) {
				return el.element !== _this.element;
			});
			App.changeLeftCase(App.leftItem);
		};
		this.changeState = function (evt) {

			if (evt.target.checked) {
				_this.state = true;
			} else {
				_this.state = false;
			}
			App.changeLeftCase(App.leftItem);
		};

		this.closeElement.addEventListener('click', this.remove);
		this.checkElement.addEventListener('change', this.changeState);
	};

	var renderTodoList = function renderTodoList(filterItems, pasteElement) {
		var container = document.createDocumentFragment();
		pasteElement.innerHTML = "";
		filterItems.forEach(function (item) {
			item.checkElement.checked = item.state;
			container.appendChild(item.element);
		});
		pasteElement.appendChild(container);
	};

	var mainTemplate$1 = document.querySelector("#main-template");
	var elementToClone$1 = mainTemplate$1.content.querySelector("#mainTodoapp");

	var getItemsElement = function getItemsElement() {
		var element = elementToClone$1.cloneNode(true);
		return element;
	};

	var Items = function Items() {
		var _this2 = this;

		this.state = "ALL";
		this.todoList = [];
		this.checkState = false;

		this.element = getItemsElement();

		this.writeInput = this.element.querySelector("#mainWriteInput");
		this.leftItem = this.element.querySelector('#leftItem');
		this.writeCheck = this.element.querySelector('#writeCheck');
		this.filtersWrap = this.element.querySelector(".filters");

		this.append = function (elementContainer) {
			elementContainer.appendChild(_this2.element);
		};

		this.filtersWrap.addEventListener('click', function (evt) {
			if (evt.target.classList.contains('filter-btn')) {
				var btns = _this2.filtersWrap.querySelectorAll(".filter-btn");
				btns.forEach(function (el) {
					el.classList.remove('active');
				});
				evt.target.classList.add('active');
				_this2.changeState(evt.target.id);
			}
			if (evt.target.classList.contains('btn-clear-completed')) {
				_this2.todoList = _this2.todoList.filter(function (element) {
					return !element.state;
				});
				_this2.changeState();
			}
		});

		this.writeCheck.addEventListener('change', function () {
			_this2.checkAll();
		});

		this.createChild = function (data) {
			var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var newElement = new Case(data, _this2.todoList.length + 1, state, _this2);
			_this2.pushTodoList(newElement);
			return newElement;
		};

		this.writeInput.addEventListener("keyup", function (evt) {
			if (evt.key == "Enter") {
				var data = _this2.writeInput.value;
				if (data) {
					_this2.createChild(data);
					_this2.writeInput.value = null;
					_this2.changeLeftCase(_this2.leftItem);
					_this2.changeState();
				}
			}
		});

		//для отображения оставшихся активных задач
		this.changeLeftCase = function (domElement) {
			_this2.leftCase = _this2.todoList.filter(function (element) {
				return !element.state;
			});

			//если все элементы списка чекнутые меняем состояние списка
			if (_this2.leftCase.length == 0) {
				_this2.checkState = true;
				_this2.writeCheck.checked = true;
			}
			if (_this2.leftCase.length == _this2.todoList.length) {
				_this2.checkState = false;
				_this2.writeCheck.checked = false;
			}

			//если все элементы списка чекнутые меняем состояние списка
			domElement.innerHTML = _this2.leftCase.length;
		};
		this.checkAll = function () {
			if (!_this2.checkState) {
				_this2.todoList.forEach(function (item) {
					item.checkElement.checked = true;
					item.state = true;
				});
				_this2.checkState = true;
				_this2.changeLeftCase(_this2.leftItem);
			} else {
				_this2.todoList.forEach(function (item) {
					item.checkElement.checked = false;
					item.state = false;
				});
				_this2.checkState = false;
				_this2.changeLeftCase(_this2.leftItem);
			}
		};
		//для отображения оставшихся активных задач

		this.pushTodoList = function (caseEl) {
			_this2.todoList.push(caseEl);
		};

		this.renderFromStorage = function (arrayStorage, state, parent) {
			_this2.state = state;
			arrayStorage.forEach(function (item, number) {

				_this2.createChild(item.data, item.state);
			});
			_this2.changeLeftCase(_this2.leftItem);
			_this2.changeState();
		};
		this.btnFilter = this.element.querySelectorAll('.filter-btn');
		this.changeState = function (state) {
			if (state) {
				_this2.state = state;
			}
			var newTodo = void 0;
			//элемент куда мы отрисовываем
			var todoItems = _this2.element.querySelector("#todoItems");
			//элемент куда мы отрисовываем

			switch (_this2.state) {
				case 'ALL':
					renderTodoList(_this2.todoList, todoItems);
					break;
				case 'ACTIVE':
					newTodo = _this2.todoList.filter(function (element) {
						return !element.state;
					});
					renderTodoList(newTodo, todoItems);
					break;
				case 'COMPLETED':
					newTodo = _this2.todoList.filter(function (element) {
						return element.state;
					});
					renderTodoList(newTodo, todoItems);
					break;
			}
			_this2.btnFilter.forEach(function (item) {

				if (item.id === "" + _this2.state) {
					item.classList.add('active');
				} else if (item.classList.contains('active')) {
					item.classList.remove('active');
				}
			});
		};

		this.changeLocalStorage = function () {
			setTimeout(function () {

				localStorage.setItem("todoList", JSON.stringify(_this2.todoList));
				localStorage.setItem("AppState", _this2.state);
				_this2.changeLocalStorage();
			}, 1000);
		};
	};

	var storage = JSON.parse(localStorage.getItem("todoList"));
	var storaggeAppState = localStorage.getItem("AppState");
	var mainAppContainer = document.querySelector('.main-content');
	var App = new Items();
	App.append(mainAppContainer);

	var initialApp = function initialApp() {
		if (storage) {
			App.renderFromStorage(storage, storaggeAppState);
			App.changeState();
			App.changeLeftCase(App.leftItem);
		} else {
			return false;
		}
	};
	initialApp();

	App.changeLocalStorage();
})();
//# sourceMappingURL=main.js.map
