import Prism from 'prismjs';
import type from 'of-type';
import M from 'materialize-css';

import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.css';
import 'prismjs/themes/prism.css';
import './normalize.css';
import './main.scss';

import CodeTemplates from './code-templates.js';

new class View {
  constructor() {
    this.dom = {};
    this.instances = {};
    this.initiatieDOM();
    this.initiateCollapsibleMenu();
    this.initiateMenuButtons();
    this.initiateSpies();
    this.addHeaderAnchors();
    this.initiateCollapsibleCode();
    this.initiateSimpleCode();
    this.initiateCollapsibleTables();
  }

  initiatieDOM() {
    this.dom.collapsibles = document.querySelectorAll('menu .collapsible');
    this.dom.anchors = document.querySelectorAll('menu .collapsible a[href]');
    this.dom.spies = document.querySelectorAll('.scrollspy');
    this.dom.headers = document.querySelectorAll('h1[data-id], h2[data-id], h3[data-id], h4[data-id], h5[data-id], h6[data-id]');
    this.dom.codes = document.querySelectorAll('.collapsible');
    this.dom.simpleCodes = document.querySelectorAll('.simple-code');
    this.dom.tables = document.querySelectorAll('.collapsible-table');
  }

  initiateCollapsibleMenu() {
    this.instances.collapsibles = M.Collapsible.init(this.dom.collapsibles, {});
  }

  initiateMenuButtons() {
    const menu = document.getElementById('nav-menu');
    const open = document.getElementById('menu-open-button');
    const close = document.getElementById('menu-close-button');
    open.addEventListener('click', () => {
      menu.classList.remove('close');
      open.classList.add('hidden');
      close.classList.remove('hidden');
    });
    close.addEventListener('click', () => {
      menu.classList.add('close');
      close.classList.add('hidden');
      open.classList.remove('hidden');
    });
  }

  initiateSpies() {
    const collapsibleMap = this._createCollapsibleMap();
    let previousSpyId = null;
    this.instances.spies = M.ScrollSpy.init(this.dom.spies, {
      activeClass: 'active-spy',
      scrollOffset: 12,
      throttle: 12,
      getActiveElement: (id) => {
        if (id !== previousSpyId) {
          const collapseLevels = collapsibleMap.get(id);
          collapseLevels.forEach((level) => {
            if (typeof level.index === 'number') level.instance.open(level.index);
          });
          this._setHash(id);
        }
        previousSpyId = id;
        return `a[href="#${id}"]`;
      }
    });
  }

  addHeaderAnchors() {
    for (let header of this.dom.headers) {
      const id = header.getAttribute('data-id');
      header.addEventListener('click', () => this._setHash(id));
    }
  }

  initiateCollapsibleCode() {
    for (let node of this.dom.codes) {
      let template = node.getAttribute('data-template');
      if (type(template, String) && type(CodeTemplates[template], Object)) {
        this._generateCodeTemplate(node, CodeTemplates[template]);
        M.Collapsible.init(node, {
          onOpenEnd: () => toggleClass(node, true),
          onCloseEnd: () => toggleClass(node, false)
        });
      }
    }
    function toggleClass(node, open) {
      const switchClass = node.querySelector('.collapsible-switch').classList;
      const classes = ['opened', 'closed'];
      switchClass.remove(classes[open ? 0 : 1]);
      switchClass.add(classes[open ? 1 : 0]);
    }
  }

  initiateSimpleCode() {
    for (let node of this.dom.simpleCodes) {
      let templateName = node.getAttribute('data-template');
      if (type(templateName, String) && type(CodeTemplates[templateName], Object)) {
        let template = CodeTemplates[templateName];
        node.innerHTML = `<code class="${template.language}">${template.body}</code>`;
      }
    }
  }

  initiateCollapsibleTables() {
    for (let table of this.dom.tables) {
      M.Collapsible.init(table, {
        accordion: false
      });
      let headers = table.querySelectorAll('.collapsible-header');
      for (let header of headers) {
        let anchors = header.querySelectorAll('a');
        for (let anchor of anchors) {
          anchor.addEventListener('click', function () {
            header.classList.remove('collapsible-header');
            setTimeout(() => {
              header.classList.add('collapsible-header');
            }, 10);
          });
        }
      }
    }
  }

  _generateCodeTemplate(node, template) {
    node.innerHTML = `
    <li>
      <div class="collapsible-header">
        <span class="collapsible-switch opened">
          <span>
            <i class="material-icons">unfold_more</i>
            <i class="material-icons">unfold_less</i>
          </span>
        </span>
        <span class="collapsible-title">code example</span>
        <span class="collapsible-language">${template.header}</span>
      </div>
      <div class="collapsible-body">
        <pre><code class="${template.language}">${template.body}</code></pre>
      </div>
    </li>
    `;
  }

  _setHash(id) {
    let hash = `#${id}`;
    if (history.pushState) history.pushState(null, null, hash);
    else location.hash = hash;
  }

  _createCollapsibleMap() {
    const instanceMap = new Map();
    const identifierMap = new Map();
    for (let instance of this.instances.collapsibles) instanceMap.set(instance.el, instance);
    for (let anchor of this.dom.anchors) {
      let id = anchor.hash.slice(1);
      let parents = this._parentsCollection(anchor);
      let bodies = this._findBodies(parents, instanceMap);
      identifierMap.set(id, bodies);
    }
    return identifierMap;
  }

  _parentsCollection(element) {
    const collection = [];
    let current = element.parentElement;
    while (current !== null) {
      collection.unshift(current);
      current = current.parentElement;
    }
    return collection;
  }

  _findBodies(parents, instanceMap) {
    const collection = [];
    for (let parent of parents) {
      if (parent.classList.contains('collapsible-body')) {
        collection[collection.length - 1].body = parent;
      }
      if (parent.classList.contains('collapsible-header')) {
        collection[collection.length - 1].header = parent;
      }
      if (parent.classList.contains('collapsible')) {
        collection.push({
          instance: instanceMap.get(parent),
          container: parent,
          body: null,
          index: null
        });
      }
    }
    this._findIndex(collection);
    return collection;
  }

  _findIndex(collection) {
    for (let item of collection) {
      let children = item.container.children;
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        if (child.contains(item.body) || child.contains(item.header)) {
          item.index = i;
          break;
        }
      }
    }
    return collection;
  }
};
