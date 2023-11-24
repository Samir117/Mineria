import React from "react";
import BarraAdmin from "../components/BarraAdmin";


export const Resultados = () => {
    const codigoHTML = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Analisis</title><script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>
    
    
    
    
    <style type="text/css">
        pre { line-height: 125%; }
    td.linenos .normal { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
    span.linenos { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
    td.linenos .special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
    span.linenos.special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
    .highlight .hll { background-color: var(--jp-cell-editor-active-background) }
    .highlight { background: var(--jp-cell-editor-background); color: var(--jp-mirror-editor-variable-color) }
    .highlight .c { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment */
    .highlight .err { color: var(--jp-mirror-editor-error-color) } /* Error */
    .highlight .k { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword */
    .highlight .o { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator */
    .highlight .p { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation */
    .highlight .ch { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Hashbang */
    .highlight .cm { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Multiline */
    .highlight .cp { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Preproc */
    .highlight .cpf { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.PreprocFile */
    .highlight .c1 { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Single */
    .highlight .cs { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Special */
    .highlight .kc { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Constant */
    .highlight .kd { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Declaration */
    .highlight .kn { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Namespace */
    .highlight .kp { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Pseudo */
    .highlight .kr { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Reserved */
    .highlight .kt { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Type */
    .highlight .m { color: var(--jp-mirror-editor-number-color) } /* Literal.Number */
    .highlight .s { color: var(--jp-mirror-editor-string-color) } /* Literal.String */
    .highlight .ow { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator.Word */
    .highlight .pm { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation.Marker */
    .highlight .w { color: var(--jp-mirror-editor-variable-color) } /* Text.Whitespace */
    .highlight .mb { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Bin */
    .highlight .mf { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Float */
    .highlight .mh { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Hex */
    .highlight .mi { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer */
    .highlight .mo { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Oct */
    .highlight .sa { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Affix */
    .highlight .sb { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Backtick */
    .highlight .sc { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Char */
    .highlight .dl { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Delimiter */
    .highlight .sd { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Doc */
    .highlight .s2 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Double */
    .highlight .se { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Escape */
    .highlight .sh { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Heredoc */
    .highlight .si { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Interpol */
    .highlight .sx { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Other */
    .highlight .sr { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Regex */
    .highlight .s1 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Single */
    .highlight .ss { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Symbol */
    .highlight .il { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer.Long */
      </style>
    
    
    
    <style type="text/css">
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*
     * Mozilla scrollbar styling
     */
    
    /* use standard opaque scrollbars for most nodes */
    [data-jp-theme-scrollbars='true'] {
      scrollbar-color: rgb(var(--jp-scrollbar-thumb-color))
        var(--jp-scrollbar-background-color);
    }
    
    /* for code nodes, use a transparent style of scrollbar. These selectors
     * will match lower in the tree, and so will override the above */
    [data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar,
    [data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar {
      scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
    }
    
    /* tiny scrollbar */
    
    .jp-scrollbar-tiny {
      scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
      scrollbar-width: thin;
    }
    
    /*
     * Webkit scrollbar styling
     */
    
    /* use standard opaque scrollbars for most nodes */
    
    [data-jp-theme-scrollbars='true'] ::-webkit-scrollbar,
    [data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-corner {
      background: var(--jp-scrollbar-background-color);
    }
    
    [data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-thumb {
      background: rgb(var(--jp-scrollbar-thumb-color));
      border: var(--jp-scrollbar-thumb-margin) solid transparent;
      background-clip: content-box;
      border-radius: var(--jp-scrollbar-thumb-radius);
    }
    
    [data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-track:horizontal {
      border-left: var(--jp-scrollbar-endpad) solid
        var(--jp-scrollbar-background-color);
      border-right: var(--jp-scrollbar-endpad) solid
        var(--jp-scrollbar-background-color);
    }
    
    [data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-track:vertical {
      border-top: var(--jp-scrollbar-endpad) solid
        var(--jp-scrollbar-background-color);
      border-bottom: var(--jp-scrollbar-endpad) solid
        var(--jp-scrollbar-background-color);
    }
    
    /* for code nodes, use a transparent style of scrollbar */
    
    [data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar::-webkit-scrollbar,
    [data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar::-webkit-scrollbar,
    [data-jp-theme-scrollbars='true']
      .CodeMirror-hscrollbar::-webkit-scrollbar-corner,
    [data-jp-theme-scrollbars='true']
      .CodeMirror-vscrollbar::-webkit-scrollbar-corner {
      background-color: transparent;
    }
    
    [data-jp-theme-scrollbars='true']
      .CodeMirror-hscrollbar::-webkit-scrollbar-thumb,
    [data-jp-theme-scrollbars='true']
      .CodeMirror-vscrollbar::-webkit-scrollbar-thumb {
      background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
      border: var(--jp-scrollbar-thumb-margin) solid transparent;
      background-clip: content-box;
      border-radius: var(--jp-scrollbar-thumb-radius);
    }
    
    [data-jp-theme-scrollbars='true']
      .CodeMirror-hscrollbar::-webkit-scrollbar-track:horizontal {
      border-left: var(--jp-scrollbar-endpad) solid transparent;
      border-right: var(--jp-scrollbar-endpad) solid transparent;
    }
    
    [data-jp-theme-scrollbars='true']
      .CodeMirror-vscrollbar::-webkit-scrollbar-track:vertical {
      border-top: var(--jp-scrollbar-endpad) solid transparent;
      border-bottom: var(--jp-scrollbar-endpad) solid transparent;
    }
    
    /* tiny scrollbar */
    
    .jp-scrollbar-tiny::-webkit-scrollbar,
    .jp-scrollbar-tiny::-webkit-scrollbar-corner {
      background-color: transparent;
      height: 4px;
      width: 4px;
    }
    
    .jp-scrollbar-tiny::-webkit-scrollbar-thumb {
      background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
    }
    
    .jp-scrollbar-tiny::-webkit-scrollbar-track:horizontal {
      border-left: 0px solid transparent;
      border-right: 0px solid transparent;
    }
    
    .jp-scrollbar-tiny::-webkit-scrollbar-track:vertical {
      border-top: 0px solid transparent;
      border-bottom: 0px solid transparent;
    }
    
    /*
     * Phosphor
     */
    
    .lm-ScrollBar[data-orientation='horizontal'] {
      min-height: 16px;
      max-height: 16px;
      min-width: 45px;
      border-top: 1px solid #a0a0a0;
    }
    
    .lm-ScrollBar[data-orientation='vertical'] {
      min-width: 16px;
      max-width: 16px;
      min-height: 45px;
      border-left: 1px solid #a0a0a0;
    }
    
    .lm-ScrollBar-button {
      background-color: #f0f0f0;
      background-position: center center;
      min-height: 15px;
      max-height: 15px;
      min-width: 15px;
      max-width: 15px;
    }
    
    .lm-ScrollBar-button:hover {
      background-color: #dadada;
    }
    
    .lm-ScrollBar-button.lm-mod-active {
      background-color: #cdcdcd;
    }
    
    .lm-ScrollBar-track {
      background: #f0f0f0;
    }
    
    .lm-ScrollBar-thumb {
      background: #cdcdcd;
    }
    
    .lm-ScrollBar-thumb:hover {
      background: #bababa;
    }
    
    .lm-ScrollBar-thumb.lm-mod-active {
      background: #a0a0a0;
    }
    
    .lm-ScrollBar[data-orientation='horizontal'] .lm-ScrollBar-thumb {
      height: 100%;
      min-width: 15px;
      border-left: 1px solid #a0a0a0;
      border-right: 1px solid #a0a0a0;
    }
    
    .lm-ScrollBar[data-orientation='vertical'] .lm-ScrollBar-thumb {
      width: 100%;
      min-height: 15px;
      border-top: 1px solid #a0a0a0;
      border-bottom: 1px solid #a0a0a0;
    }
    
    .lm-ScrollBar[data-orientation='horizontal']
      .lm-ScrollBar-button[data-action='decrement'] {
      background-image: var(--jp-icon-caret-left);
      background-size: 17px;
    }
    
    .lm-ScrollBar[data-orientation='horizontal']
      .lm-ScrollBar-button[data-action='increment'] {
      background-image: var(--jp-icon-caret-right);
      background-size: 17px;
    }
    
    .lm-ScrollBar[data-orientation='vertical']
      .lm-ScrollBar-button[data-action='decrement'] {
      background-image: var(--jp-icon-caret-up);
      background-size: 17px;
    }
    
    .lm-ScrollBar[data-orientation='vertical']
      .lm-ScrollBar-button[data-action='increment'] {
      background-image: var(--jp-icon-caret-down);
      background-size: 17px;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    
    /* <DEPRECATED> */ .p-Widget, /* </DEPRECATED> */
    .lm-Widget {
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      cursor: default;
    }
    
    
    /* <DEPRECATED> */ .p-Widget.p-mod-hidden, /* </DEPRECATED> */
    .lm-Widget.lm-mod-hidden {
      display: none !important;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    
    /* <DEPRECATED> */ .p-CommandPalette, /* </DEPRECATED> */
    .lm-CommandPalette {
      display: flex;
      flex-direction: column;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    
    /* <DEPRECATED> */ .p-CommandPalette-search, /* </DEPRECATED> */
    .lm-CommandPalette-search {
      flex: 0 0 auto;
    }
    
    
    /* <DEPRECATED> */ .p-CommandPalette-content, /* </DEPRECATED> */
    .lm-CommandPalette-content {
      flex: 1 1 auto;
      margin: 0;
      padding: 0;
      min-height: 0;
      overflow: auto;
      list-style-type: none;
    }
    
    
    /* <DEPRECATED> */ .p-CommandPalette-header, /* </DEPRECATED> */
    .lm-CommandPalette-header {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    
    
    /* <DEPRECATED> */ .p-CommandPalette-item, /* </DEPRECATED> */
    .lm-CommandPalette-item {
      display: flex;
      flex-direction: row;
    }
    
    
    /* <DEPRECATED> */ .p-CommandPalette-itemIcon, /* </DEPRECATED> */
    .lm-CommandPalette-itemIcon {
      flex: 0 0 auto;
    }
    
    
    /* <DEPRECATED> */ .p-CommandPalette-itemContent, /* </DEPRECATED> */
    .lm-CommandPalette-itemContent {
      flex: 1 1 auto;
      overflow: hidden;
    }
    
    
    /* <DEPRECATED> */ .p-CommandPalette-itemShortcut, /* </DEPRECATED> */
    .lm-CommandPalette-itemShortcut {
      flex: 0 0 auto;
    }
    
    
    /* <DEPRECATED> */ .p-CommandPalette-itemLabel, /* </DEPRECATED> */
    .lm-CommandPalette-itemLabel {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    
    .lm-close-icon {
        border:1px solid transparent;
      background-color: transparent;
      position: absolute;
        z-index:1;
        right:3%;
        top: 0;
        bottom: 0;
        margin: auto;
        padding: 7px 0;
        display: none;
        vertical-align: middle;
      outline: 0;
      cursor: pointer;
    }
    .lm-close-icon:after {
        content: "X";
        display: block;
        width: 15px;
        height: 15px;
        text-align: center;
        color:#000;
        font-weight: normal;
        font-size: 12px;
        cursor: pointer;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    
    /* <DEPRECATED> */ .p-DockPanel, /* </DEPRECATED> */
    .lm-DockPanel {
      z-index: 0;
    }
    
    
    /* <DEPRECATED> */ .p-DockPanel-widget, /* </DEPRECATED> */
    .lm-DockPanel-widget {
      z-index: 0;
    }
    
    
    /* <DEPRECATED> */ .p-DockPanel-tabBar, /* </DEPRECATED> */
    .lm-DockPanel-tabBar {
      z-index: 1;
    }
    
    
    /* <DEPRECATED> */ .p-DockPanel-handle, /* </DEPRECATED> */
    .lm-DockPanel-handle {
      z-index: 2;
    }
    
    
    /* <DEPRECATED> */ .p-DockPanel-handle.p-mod-hidden, /* </DEPRECATED> */
    .lm-DockPanel-handle.lm-mod-hidden {
      display: none !important;
    }
    
    
    /* <DEPRECATED> */ .p-DockPanel-handle:after, /* </DEPRECATED> */
    .lm-DockPanel-handle:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
    }
    
    
    /* <DEPRECATED> */
    .p-DockPanel-handle[data-orientation='horizontal'],
    /* </DEPRECATED> */
    .lm-DockPanel-handle[data-orientation='horizontal'] {
      cursor: ew-resize;
    }
    
    
    /* <DEPRECATED> */
    .p-DockPanel-handle[data-orientation='vertical'],
    /* </DEPRECATED> */
    .lm-DockPanel-handle[data-orientation='vertical'] {
      cursor: ns-resize;
    }
    
    
    /* <DEPRECATED> */
    .p-DockPanel-handle[data-orientation='horizontal']:after,
    /* </DEPRECATED> */
    .lm-DockPanel-handle[data-orientation='horizontal']:after {
      left: 50%;
      min-width: 8px;
      transform: translateX(-50%);
    }
    
    
    /* <DEPRECATED> */
    .p-DockPanel-handle[data-orientation='vertical']:after,
    /* </DEPRECATED> */
    .lm-DockPanel-handle[data-orientation='vertical']:after {
      top: 50%;
      min-height: 8px;
      transform: translateY(-50%);
    }
    
    
    /* <DEPRECATED> */ .p-DockPanel-overlay, /* </DEPRECATED> */
    .lm-DockPanel-overlay {
      z-index: 3;
      box-sizing: border-box;
      pointer-events: none;
    }
    
    
    /* <DEPRECATED> */ .p-DockPanel-overlay.p-mod-hidden, /* </DEPRECATED> */
    .lm-DockPanel-overlay.lm-mod-hidden {
      display: none !important;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    
    /* <DEPRECATED> */ .p-Menu, /* </DEPRECATED> */
    .lm-Menu {
      z-index: 10000;
      position: absolute;
      white-space: nowrap;
      overflow-x: hidden;
      overflow-y: auto;
      outline: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    
    /* <DEPRECATED> */ .p-Menu-content, /* </DEPRECATED> */
    .lm-Menu-content {
      margin: 0;
      padding: 0;
      display: table;
      list-style-type: none;
    }
    
    
    /* <DEPRECATED> */ .p-Menu-item, /* </DEPRECATED> */
    .lm-Menu-item {
      display: table-row;
    }
    
    
    /* <DEPRECATED> */
    .p-Menu-item.p-mod-hidden,
    .p-Menu-item.p-mod-collapsed,
    /* </DEPRECATED> */
    .lm-Menu-item.lm-mod-hidden,
    .lm-Menu-item.lm-mod-collapsed {
      display: none !important;
    }
    
    
    /* <DEPRECATED> */
    .p-Menu-itemIcon,
    .p-Menu-itemSubmenuIcon,
    /* </DEPRECATED> */
    .lm-Menu-itemIcon,
    .lm-Menu-itemSubmenuIcon {
      display: table-cell;
      text-align: center;
    }
    
    
    /* <DEPRECATED> */ .p-Menu-itemLabel, /* </DEPRECATED> */
    .lm-Menu-itemLabel {
      display: table-cell;
      text-align: left;
    }
    
    
    /* <DEPRECATED> */ .p-Menu-itemShortcut, /* </DEPRECATED> */
    .lm-Menu-itemShortcut {
      display: table-cell;
      text-align: right;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    
    /* <DEPRECATED> */ .p-MenuBar, /* </DEPRECATED> */
    .lm-MenuBar {
      outline: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    
    /* <DEPRECATED> */ .p-MenuBar-content, /* </DEPRECATED> */
    .lm-MenuBar-content {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      list-style-type: none;
    }
    
    
    /* <DEPRECATED> */ .p--MenuBar-item, /* </DEPRECATED> */
    .lm-MenuBar-item {
      box-sizing: border-box;
    }
    
    
    /* <DEPRECATED> */
    .p-MenuBar-itemIcon,
    .p-MenuBar-itemLabel,
    /* </DEPRECATED> */
    .lm-MenuBar-itemIcon,
    .lm-MenuBar-itemLabel {
      display: inline-block;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    
    /* <DEPRECATED> */ .p-ScrollBar, /* </DEPRECATED> */
    .lm-ScrollBar {
      display: flex;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    
    /* <DEPRECATED> */
    .p-ScrollBar[data-orientation='horizontal'],
    /* </DEPRECATED> */
    .lm-ScrollBar[data-orientation='horizontal'] {
      flex-direction: row;
    }
    
    
    /* <DEPRECATED> */
    .p-ScrollBar[data-orientation='vertical'],
    /* </DEPRECATED> */
    .lm-ScrollBar[data-orientation='vertical'] {
      flex-direction: column;
    }
    
    
    /* <DEPRECATED> */ .p-ScrollBar-button, /* </DEPRECATED> */
    .lm-ScrollBar-button {
      box-sizing: border-box;
      flex: 0 0 auto;
    }
    
    
    /* <DEPRECATED> */ .p-ScrollBar-track, /* </DEPRECATED> */
    .lm-ScrollBar-track {
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      flex: 1 1 auto;
    }
    
    
    /* <DEPRECATED> */ .p-ScrollBar-thumb, /* </DEPRECATED> */
    .lm-ScrollBar-thumb {
      box-sizing: border-box;
      position: absolute;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    
    /* <DEPRECATED> */ .p-SplitPanel-child, /* </DEPRECATED> */
    .lm-SplitPanel-child {
      z-index: 0;
    }
    
    
    /* <DEPRECATED> */ .p-SplitPanel-handle, /* </DEPRECATED> */
    .lm-SplitPanel-handle {
      z-index: 1;
    }
    
    
    /* <DEPRECATED> */ .p-SplitPanel-handle.p-mod-hidden, /* </DEPRECATED> */
    .lm-SplitPanel-handle.lm-mod-hidden {
      display: none !important;
    }
    
    
    /* <DEPRECATED> */ .p-SplitPanel-handle:after, /* </DEPRECATED> */
    .lm-SplitPanel-handle:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
    }
    
    
    /* <DEPRECATED> */
    .p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle,
    /* </DEPRECATED> */
    .lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle {
      cursor: ew-resize;
    }
    
    
    /* <DEPRECATED> */
    .p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle,
    /* </DEPRECATED> */
    .lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle {
      cursor: ns-resize;
    }
    
    
    /* <DEPRECATED> */
    .p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle:after,
    /* </DEPRECATED> */
    .lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle:after {
      left: 50%;
      min-width: 8px;
      transform: translateX(-50%);
    }
    
    
    /* <DEPRECATED> */
    .p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle:after,
    /* </DEPRECATED> */
    .lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle:after {
      top: 50%;
      min-height: 8px;
      transform: translateY(-50%);
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    
    /* <DEPRECATED> */ .p-TabBar, /* </DEPRECATED> */
    .lm-TabBar {
      display: flex;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    
    /* <DEPRECATED> */ .p-TabBar[data-orientation='horizontal'], /* </DEPRECATED> */
    .lm-TabBar[data-orientation='horizontal'] {
      flex-direction: row;
      align-items: flex-end;
    }
    
    
    /* <DEPRECATED> */ .p-TabBar[data-orientation='vertical'], /* </DEPRECATED> */
    .lm-TabBar[data-orientation='vertical'] {
      flex-direction: column;
      align-items: flex-end;
    }
    
    
    /* <DEPRECATED> */ .p-TabBar-content, /* </DEPRECATED> */
    .lm-TabBar-content {
      margin: 0;
      padding: 0;
      display: flex;
      flex: 1 1 auto;
      list-style-type: none;
    }
    
    
    /* <DEPRECATED> */
    .p-TabBar[data-orientation='horizontal'] > .p-TabBar-content,
    /* </DEPRECATED> */
    .lm-TabBar[data-orientation='horizontal'] > .lm-TabBar-content {
      flex-direction: row;
    }
    
    
    /* <DEPRECATED> */
    .p-TabBar[data-orientation='vertical'] > .p-TabBar-content,
    /* </DEPRECATED> */
    .lm-TabBar[data-orientation='vertical'] > .lm-TabBar-content {
      flex-direction: column;
    }
    
    
    /* <DEPRECATED> */ .p-TabBar-tab, /* </DEPRECATED> */
    .lm-TabBar-tab {
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      overflow: hidden;
    }
    
    
    /* <DEPRECATED> */
    .p-TabBar-tabIcon,
    .p-TabBar-tabCloseIcon,
    /* </DEPRECATED> */
    .lm-TabBar-tabIcon,
    .lm-TabBar-tabCloseIcon {
      flex: 0 0 auto;
    }
    
    
    /* <DEPRECATED> */ .p-TabBar-tabLabel, /* </DEPRECATED> */
    .lm-TabBar-tabLabel {
      flex: 1 1 auto;
      overflow: hidden;
      white-space: nowrap;
    }
    
    
    .lm-TabBar-tabInput {
      user-select: all;
      width: 100%;
      box-sizing : border-box;
    }
    
    
    /* <DEPRECATED> */ .p-TabBar-tab.p-mod-hidden, /* </DEPRECATED> */
    .lm-TabBar-tab.lm-mod-hidden {
      display: none !important;
    }
    
    
    .lm-TabBar-addButton.lm-mod-hidden {
      display: none !important;
    }
    
    
    /* <DEPRECATED> */ .p-TabBar.p-mod-dragging .p-TabBar-tab, /* </DEPRECATED> */
    .lm-TabBar.lm-mod-dragging .lm-TabBar-tab {
      position: relative;
    }
    
    
    /* <DEPRECATED> */
    .p-TabBar.p-mod-dragging[data-orientation='horizontal'] .p-TabBar-tab,
    /* </DEPRECATED> */
    .lm-TabBar.lm-mod-dragging[data-orientation='horizontal'] .lm-TabBar-tab {
      left: 0;
      transition: left 150ms ease;
    }
    
    
    /* <DEPRECATED> */
    .p-TabBar.p-mod-dragging[data-orientation='vertical'] .p-TabBar-tab,
    /* </DEPRECATED> */
    .lm-TabBar.lm-mod-dragging[data-orientation='vertical'] .lm-TabBar-tab {
      top: 0;
      transition: top 150ms ease;
    }
    
    
    /* <DEPRECATED> */
    .p-TabBar.p-mod-dragging .p-TabBar-tab.p-mod-dragging,
    /* </DEPRECATED> */
    .lm-TabBar.lm-mod-dragging .lm-TabBar-tab.lm-mod-dragging {
      transition: none;
    }
    
    .lm-TabBar-tabLabel .lm-TabBar-tabInput {
      user-select: all;
      width: 100%;
      box-sizing : border-box;
      background: inherit;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    
    /* <DEPRECATED> */ .p-TabPanel-tabBar, /* </DEPRECATED> */
    .lm-TabPanel-tabBar {
      z-index: 1;
    }
    
    
    /* <DEPRECATED> */ .p-TabPanel-stackedPanel, /* </DEPRECATED> */
    .lm-TabPanel-stackedPanel {
      z-index: 0;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    @charset "UTF-8";
    html{
      -webkit-box-sizing:border-box;
              box-sizing:border-box; }
    
    *,
    *::before,
    *::after{
      -webkit-box-sizing:inherit;
              box-sizing:inherit; }
    
    body{
      font-size:14px;
      font-weight:400;
      letter-spacing:0;
      line-height:1.28581;
      text-transform:none;
      color:#182026;
      font-family:-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif; }
    
    p{
      margin-bottom:10px;
      margin-top:0; }
    
    small{
      font-size:12px; }
    
    strong{
      font-weight:600; }
    
    ::-moz-selection{
      background:rgba(125, 188, 255, 0.6); }
    
    ::selection{
      background:rgba(125, 188, 255, 0.6); }
    .bp3-heading{
      color:#182026;
      font-weight:600;
      margin:0 0 10px;
      padding:0; }
      .bp3-dark .bp3-heading{
        color:#f5f8fa; }
    
    h1.bp3-heading, .bp3-running-text h1{
      font-size:36px;
      line-height:40px; }
    
    h2.bp3-heading, .bp3-running-text h2{
      font-size:28px;
      line-height:32px; }
    
    h3.bp3-heading, .bp3-running-text h3{
      font-size:22px;
      line-height:25px; }
    
    h4.bp3-heading, .bp3-running-text h4{
      font-size:18px;
      line-height:21px; }
    
    h5.bp3-heading, .bp3-running-text h5{
      font-size:16px;
      line-height:19px; }
    
    h6.bp3-heading, .bp3-running-text h6{
      font-size:14px;
      line-height:16px; }
    .bp3-ui-text{
      font-size:14px;
      font-weight:400;
      letter-spacing:0;
      line-height:1.28581;
      text-transform:none; }
    
    .bp3-monospace-text{
      font-family:monospace;
      text-transform:none; }
    
    .bp3-text-muted{
      color:#5c7080; }
      .bp3-dark .bp3-text-muted{
        color:#a7b6c2; }
    
    .bp3-text-disabled{
      color:rgba(92, 112, 128, 0.6); }
      .bp3-dark .bp3-text-disabled{
        color:rgba(167, 182, 194, 0.6); }
    
    .bp3-text-overflow-ellipsis{
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      word-wrap:normal; }
    .bp3-running-text{
      font-size:14px;
      line-height:1.5; }
      .bp3-running-text h1{
        color:#182026;
        font-weight:600;
        margin-bottom:20px;
        margin-top:40px; }
        .bp3-dark .bp3-running-text h1{
          color:#f5f8fa; }
      .bp3-running-text h2{
        color:#182026;
        font-weight:600;
        margin-bottom:20px;
        margin-top:40px; }
        .bp3-dark .bp3-running-text h2{
          color:#f5f8fa; }
      .bp3-running-text h3{
        color:#182026;
        font-weight:600;
        margin-bottom:20px;
        margin-top:40px; }
        .bp3-dark .bp3-running-text h3{
          color:#f5f8fa; }
      .bp3-running-text h4{
        color:#182026;
        font-weight:600;
        margin-bottom:20px;
        margin-top:40px; }
        .bp3-dark .bp3-running-text h4{
          color:#f5f8fa; }
      .bp3-running-text h5{
        color:#182026;
        font-weight:600;
        margin-bottom:20px;
        margin-top:40px; }
        .bp3-dark .bp3-running-text h5{
          color:#f5f8fa; }
      .bp3-running-text h6{
        color:#182026;
        font-weight:600;
        margin-bottom:20px;
        margin-top:40px; }
        .bp3-dark .bp3-running-text h6{
          color:#f5f8fa; }
      .bp3-running-text hr{
        border:none;
        border-bottom:1px solid rgba(16, 22, 26, 0.15);
        margin:20px 0; }
        .bp3-dark .bp3-running-text hr{
          border-color:rgba(255, 255, 255, 0.15); }
      .bp3-running-text p{
        margin:0 0 10px;
        padding:0; }
    
    .bp3-text-large{
      font-size:16px; }
    
    .bp3-text-small{
      font-size:12px; }
    a{
      color:#106ba3;
      text-decoration:none; }
      a:hover{
        color:#106ba3;
        cursor:pointer;
        text-decoration:underline; }
      a .bp3-icon, a .bp3-icon-standard, a .bp3-icon-large{
        color:inherit; }
      a code,
      .bp3-dark a code{
        color:inherit; }
      .bp3-dark a,
      .bp3-dark a:hover{
        color:#48aff0; }
        .bp3-dark a .bp3-icon, .bp3-dark a .bp3-icon-standard, .bp3-dark a .bp3-icon-large,
        .bp3-dark a:hover .bp3-icon,
        .bp3-dark a:hover .bp3-icon-standard,
        .bp3-dark a:hover .bp3-icon-large{
          color:inherit; }
    .bp3-running-text code, .bp3-code{
      font-family:monospace;
      text-transform:none;
      background:rgba(255, 255, 255, 0.7);
      border-radius:3px;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);
      color:#5c7080;
      font-size:smaller;
      padding:2px 5px; }
      .bp3-dark .bp3-running-text code, .bp3-running-text .bp3-dark code, .bp3-dark .bp3-code{
        background:rgba(16, 22, 26, 0.3);
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
        color:#a7b6c2; }
      .bp3-running-text a > code, a > .bp3-code{
        color:#137cbd; }
        .bp3-dark .bp3-running-text a > code, .bp3-running-text .bp3-dark a > code, .bp3-dark a > .bp3-code{
          color:inherit; }
    
    .bp3-running-text pre, .bp3-code-block{
      font-family:monospace;
      text-transform:none;
      background:rgba(255, 255, 255, 0.7);
      border-radius:3px;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
      color:#182026;
      display:block;
      font-size:13px;
      line-height:1.4;
      margin:10px 0;
      padding:13px 15px 12px;
      word-break:break-all;
      word-wrap:break-word; }
      .bp3-dark .bp3-running-text pre, .bp3-running-text .bp3-dark pre, .bp3-dark .bp3-code-block{
        background:rgba(16, 22, 26, 0.3);
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
        color:#f5f8fa; }
      .bp3-running-text pre > code, .bp3-code-block > code{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:inherit;
        font-size:inherit;
        padding:0; }
    
    .bp3-running-text kbd, .bp3-key{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      background:#ffffff;
      border-radius:3px;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
      color:#5c7080;
      display:-webkit-inline-box;
      display:-ms-inline-flexbox;
      display:inline-flex;
      font-family:inherit;
      font-size:12px;
      height:24px;
      -webkit-box-pack:center;
          -ms-flex-pack:center;
              justify-content:center;
      line-height:24px;
      min-width:24px;
      padding:3px 6px;
      vertical-align:middle; }
      .bp3-running-text kbd .bp3-icon, .bp3-key .bp3-icon, .bp3-running-text kbd .bp3-icon-standard, .bp3-key .bp3-icon-standard, .bp3-running-text kbd .bp3-icon-large, .bp3-key .bp3-icon-large{
        margin-right:5px; }
      .bp3-dark .bp3-running-text kbd, .bp3-running-text .bp3-dark kbd, .bp3-dark .bp3-key{
        background:#394b59;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
        color:#a7b6c2; }
    .bp3-running-text blockquote, .bp3-blockquote{
      border-left:solid 4px rgba(167, 182, 194, 0.5);
      margin:0 0 10px;
      padding:0 20px; }
      .bp3-dark .bp3-running-text blockquote, .bp3-running-text .bp3-dark blockquote, .bp3-dark .bp3-blockquote{
        border-color:rgba(115, 134, 148, 0.5); }
    .bp3-running-text ul,
    .bp3-running-text ol, .bp3-list{
      margin:10px 0;
      padding-left:30px; }
      .bp3-running-text ul li:not(:last-child), .bp3-running-text ol li:not(:last-child), .bp3-list li:not(:last-child){
        margin-bottom:5px; }
      .bp3-running-text ul ol, .bp3-running-text ol ol, .bp3-list ol,
      .bp3-running-text ul ul,
      .bp3-running-text ol ul,
      .bp3-list ul{
        margin-top:5px; }
    
    .bp3-list-unstyled{
      list-style:none;
      margin:0;
      padding:0; }
      .bp3-list-unstyled li{
        padding:0; }
    .bp3-rtl{
      text-align:right; }
    
    .bp3-dark{
      color:#f5f8fa; }
    
    :focus{
      outline:rgba(19, 124, 189, 0.6) auto 2px;
      outline-offset:2px;
      -moz-outline-radius:6px; }
    
    .bp3-focus-disabled :focus{
      outline:none !important; }
      .bp3-focus-disabled :focus ~ .bp3-control-indicator{
        outline:none !important; }
    
    .bp3-alert{
      max-width:400px;
      padding:20px; }
    
    .bp3-alert-body{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex; }
      .bp3-alert-body .bp3-icon{
        font-size:40px;
        margin-right:20px;
        margin-top:0; }
    
    .bp3-alert-contents{
      word-break:break-word; }
    
    .bp3-alert-footer{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:horizontal;
      -webkit-box-direction:reverse;
          -ms-flex-direction:row-reverse;
              flex-direction:row-reverse;
      margin-top:10px; }
      .bp3-alert-footer .bp3-button{
        margin-left:10px; }
    .bp3-breadcrumbs{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      cursor:default;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -ms-flex-wrap:wrap;
          flex-wrap:wrap;
      height:30px;
      list-style:none;
      margin:0;
      padding:0; }
      .bp3-breadcrumbs > li{
        -webkit-box-align:center;
            -ms-flex-align:center;
                align-items:center;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex; }
        .bp3-breadcrumbs > li::after{
          background:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z' fill='%235C7080'/%3e%3c/svg%3e");
          content:"";
          display:block;
          height:16px;
          margin:0 5px;
          width:16px; }
        .bp3-breadcrumbs > li:last-of-type::after{
          display:none; }
    
    .bp3-breadcrumb,
    .bp3-breadcrumb-current,
    .bp3-breadcrumbs-collapsed{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      display:-webkit-inline-box;
      display:-ms-inline-flexbox;
      display:inline-flex;
      font-size:16px; }
    
    .bp3-breadcrumb,
    .bp3-breadcrumbs-collapsed{
      color:#5c7080; }
    
    .bp3-breadcrumb:hover{
      text-decoration:none; }
    
    .bp3-breadcrumb.bp3-disabled{
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed; }
    
    .bp3-breadcrumb .bp3-icon{
      margin-right:5px; }
    
    .bp3-breadcrumb-current{
      color:inherit;
      font-weight:600; }
      .bp3-breadcrumb-current .bp3-input{
        font-size:inherit;
        font-weight:inherit;
        vertical-align:baseline; }
    
    .bp3-breadcrumbs-collapsed{
      background:#ced9e0;
      border:none;
      border-radius:3px;
      cursor:pointer;
      margin-right:2px;
      padding:1px 5px;
      vertical-align:text-bottom; }
      .bp3-breadcrumbs-collapsed::before{
        background:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cg fill='%235C7080'%3e%3ccircle cx='2' cy='8.03' r='2'/%3e%3ccircle cx='14' cy='8.03' r='2'/%3e%3ccircle cx='8' cy='8.03' r='2'/%3e%3c/g%3e%3c/svg%3e") center no-repeat;
        content:"";
        display:block;
        height:16px;
        width:16px; }
      .bp3-breadcrumbs-collapsed:hover{
        background:#bfccd6;
        color:#182026;
        text-decoration:none; }
    
    .bp3-dark .bp3-breadcrumb,
    .bp3-dark .bp3-breadcrumbs-collapsed{
      color:#a7b6c2; }
    
    .bp3-dark .bp3-breadcrumbs > li::after{
      color:#a7b6c2; }
    
    .bp3-dark .bp3-breadcrumb.bp3-disabled{
      color:rgba(167, 182, 194, 0.6); }
    
    .bp3-dark .bp3-breadcrumb-current{
      color:#f5f8fa; }
    
    .bp3-dark .bp3-breadcrumbs-collapsed{
      background:rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-breadcrumbs-collapsed:hover{
        background:rgba(16, 22, 26, 0.6);
        color:#f5f8fa; }
    .bp3-button{
      display:-webkit-inline-box;
      display:-ms-inline-flexbox;
      display:inline-flex;
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      border:none;
      border-radius:3px;
      cursor:pointer;
      font-size:14px;
      -webkit-box-pack:center;
          -ms-flex-pack:center;
              justify-content:center;
      padding:5px 10px;
      text-align:left;
      vertical-align:middle;
      min-height:30px;
      min-width:30px; }
      .bp3-button > *{
        -webkit-box-flex:0;
            -ms-flex-positive:0;
                flex-grow:0;
        -ms-flex-negative:0;
            flex-shrink:0; }
      .bp3-button > .bp3-fill{
        -webkit-box-flex:1;
            -ms-flex-positive:1;
                flex-grow:1;
        -ms-flex-negative:1;
            flex-shrink:1; }
      .bp3-button::before,
      .bp3-button > *{
        margin-right:7px; }
      .bp3-button:empty::before,
      .bp3-button > :last-child{
        margin-right:0; }
      .bp3-button:empty{
        padding:0 !important; }
      .bp3-button:disabled, .bp3-button.bp3-disabled{
        cursor:not-allowed; }
      .bp3-button.bp3-fill{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        width:100%; }
      .bp3-button.bp3-align-right,
      .bp3-align-right .bp3-button{
        text-align:right; }
      .bp3-button.bp3-align-left,
      .bp3-align-left .bp3-button{
        text-align:left; }
      .bp3-button:not([class*="bp3-intent-"]){
        background-color:#f5f8fa;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
        color:#182026; }
        .bp3-button:not([class*="bp3-intent-"]):hover{
          background-clip:padding-box;
          background-color:#ebf1f5;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
        .bp3-button:not([class*="bp3-intent-"]):active, .bp3-button:not([class*="bp3-intent-"]).bp3-active{
          background-color:#d8e1e8;
          background-image:none;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
        .bp3-button:not([class*="bp3-intent-"]):disabled, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled{
          background-color:rgba(206, 217, 224, 0.5);
          background-image:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(92, 112, 128, 0.6);
          cursor:not-allowed;
          outline:none; }
          .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active, .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active:hover, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active:hover{
            background:rgba(206, 217, 224, 0.7); }
      .bp3-button.bp3-intent-primary{
        background-color:#137cbd;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
        color:#ffffff; }
        .bp3-button.bp3-intent-primary:hover, .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{
          color:#ffffff; }
        .bp3-button.bp3-intent-primary:hover{
          background-color:#106ba3;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
        .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{
          background-color:#0e5a8a;
          background-image:none;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
        .bp3-button.bp3-intent-primary:disabled, .bp3-button.bp3-intent-primary.bp3-disabled{
          background-color:rgba(19, 124, 189, 0.5);
          background-image:none;
          border-color:transparent;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(255, 255, 255, 0.6); }
      .bp3-button.bp3-intent-success{
        background-color:#0f9960;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
        color:#ffffff; }
        .bp3-button.bp3-intent-success:hover, .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{
          color:#ffffff; }
        .bp3-button.bp3-intent-success:hover{
          background-color:#0d8050;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
        .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{
          background-color:#0a6640;
          background-image:none;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
        .bp3-button.bp3-intent-success:disabled, .bp3-button.bp3-intent-success.bp3-disabled{
          background-color:rgba(15, 153, 96, 0.5);
          background-image:none;
          border-color:transparent;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(255, 255, 255, 0.6); }
      .bp3-button.bp3-intent-warning{
        background-color:#d9822b;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
        color:#ffffff; }
        .bp3-button.bp3-intent-warning:hover, .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{
          color:#ffffff; }
        .bp3-button.bp3-intent-warning:hover{
          background-color:#bf7326;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
        .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{
          background-color:#a66321;
          background-image:none;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
        .bp3-button.bp3-intent-warning:disabled, .bp3-button.bp3-intent-warning.bp3-disabled{
          background-color:rgba(217, 130, 43, 0.5);
          background-image:none;
          border-color:transparent;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(255, 255, 255, 0.6); }
      .bp3-button.bp3-intent-danger{
        background-color:#db3737;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
        color:#ffffff; }
        .bp3-button.bp3-intent-danger:hover, .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{
          color:#ffffff; }
        .bp3-button.bp3-intent-danger:hover{
          background-color:#c23030;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
        .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{
          background-color:#a82a2a;
          background-image:none;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
        .bp3-button.bp3-intent-danger:disabled, .bp3-button.bp3-intent-danger.bp3-disabled{
          background-color:rgba(219, 55, 55, 0.5);
          background-image:none;
          border-color:transparent;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(255, 255, 255, 0.6); }
      .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head{
        stroke:#ffffff; }
      .bp3-button.bp3-large,
      .bp3-large .bp3-button{
        min-height:40px;
        min-width:40px;
        font-size:16px;
        padding:5px 15px; }
        .bp3-button.bp3-large::before,
        .bp3-button.bp3-large > *,
        .bp3-large .bp3-button::before,
        .bp3-large .bp3-button > *{
          margin-right:10px; }
        .bp3-button.bp3-large:empty::before,
        .bp3-button.bp3-large > :last-child,
        .bp3-large .bp3-button:empty::before,
        .bp3-large .bp3-button > :last-child{
          margin-right:0; }
      .bp3-button.bp3-small,
      .bp3-small .bp3-button{
        min-height:24px;
        min-width:24px;
        padding:0 7px; }
      .bp3-button.bp3-loading{
        position:relative; }
        .bp3-button.bp3-loading[class*="bp3-icon-"]::before{
          visibility:hidden; }
        .bp3-button.bp3-loading .bp3-button-spinner{
          margin:0;
          position:absolute; }
        .bp3-button.bp3-loading > :not(.bp3-button-spinner){
          visibility:hidden; }
      .bp3-button[class*="bp3-icon-"]::before{
        font-family:"Icons16", sans-serif;
        font-size:16px;
        font-style:normal;
        font-weight:400;
        line-height:1;
        -moz-osx-font-smoothing:grayscale;
        -webkit-font-smoothing:antialiased;
        color:#5c7080; }
      .bp3-button .bp3-icon, .bp3-button .bp3-icon-standard, .bp3-button .bp3-icon-large{
        color:#5c7080; }
        .bp3-button .bp3-icon.bp3-align-right, .bp3-button .bp3-icon-standard.bp3-align-right, .bp3-button .bp3-icon-large.bp3-align-right{
          margin-left:7px; }
      .bp3-button .bp3-icon:first-child:last-child,
      .bp3-button .bp3-spinner + .bp3-icon:last-child{
        margin:0 -7px; }
      .bp3-dark .bp3-button:not([class*="bp3-intent-"]){
        background-color:#394b59;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
        color:#f5f8fa; }
        .bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover, .bp3-dark .bp3-button:not([class*="bp3-intent-"]):active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active{
          color:#f5f8fa; }
        .bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover{
          background-color:#30404d;
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-button:not([class*="bp3-intent-"]):active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active{
          background-color:#202b33;
          background-image:none;
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
        .bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled{
          background-color:rgba(57, 75, 89, 0.5);
          background-image:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(167, 182, 194, 0.6); }
          .bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active{
            background:rgba(57, 75, 89, 0.7); }
        .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-button-spinner .bp3-spinner-head{
          background:rgba(16, 22, 26, 0.5);
          stroke:#8a9ba8; }
        .bp3-dark .bp3-button:not([class*="bp3-intent-"])[class*="bp3-icon-"]::before{
          color:#a7b6c2; }
        .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-large{
          color:#a7b6c2; }
      .bp3-dark .bp3-button[class*="bp3-intent-"]{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-button[class*="bp3-intent-"]:hover{
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-button[class*="bp3-intent-"]:active, .bp3-dark .bp3-button[class*="bp3-intent-"].bp3-active{
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
        .bp3-dark .bp3-button[class*="bp3-intent-"]:disabled, .bp3-dark .bp3-button[class*="bp3-intent-"].bp3-disabled{
          background-image:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(255, 255, 255, 0.3); }
        .bp3-dark .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head{
          stroke:#8a9ba8; }
      .bp3-button:disabled::before,
      .bp3-button:disabled .bp3-icon, .bp3-button:disabled .bp3-icon-standard, .bp3-button:disabled .bp3-icon-large, .bp3-button.bp3-disabled::before,
      .bp3-button.bp3-disabled .bp3-icon, .bp3-button.bp3-disabled .bp3-icon-standard, .bp3-button.bp3-disabled .bp3-icon-large, .bp3-button[class*="bp3-intent-"]::before,
      .bp3-button[class*="bp3-intent-"] .bp3-icon, .bp3-button[class*="bp3-intent-"] .bp3-icon-standard, .bp3-button[class*="bp3-intent-"] .bp3-icon-large{
        color:inherit !important; }
      .bp3-button.bp3-minimal{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none; }
        .bp3-button.bp3-minimal:hover{
          background:rgba(167, 182, 194, 0.3);
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:#182026;
          text-decoration:none; }
        .bp3-button.bp3-minimal:active, .bp3-button.bp3-minimal.bp3-active{
          background:rgba(115, 134, 148, 0.3);
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:#182026; }
        .bp3-button.bp3-minimal:disabled, .bp3-button.bp3-minimal:disabled:hover, .bp3-button.bp3-minimal.bp3-disabled, .bp3-button.bp3-minimal.bp3-disabled:hover{
          background:none;
          color:rgba(92, 112, 128, 0.6);
          cursor:not-allowed; }
          .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{
            background:rgba(115, 134, 148, 0.3); }
        .bp3-dark .bp3-button.bp3-minimal{
          background:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:inherit; }
          .bp3-dark .bp3-button.bp3-minimal:hover, .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none; }
          .bp3-dark .bp3-button.bp3-minimal:hover{
            background:rgba(138, 155, 168, 0.15); }
          .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{
            background:rgba(138, 155, 168, 0.3);
            color:#f5f8fa; }
          .bp3-dark .bp3-button.bp3-minimal:disabled, .bp3-dark .bp3-button.bp3-minimal:disabled:hover, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover{
            background:none;
            color:rgba(167, 182, 194, 0.6);
            cursor:not-allowed; }
            .bp3-dark .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{
              background:rgba(138, 155, 168, 0.3); }
        .bp3-button.bp3-minimal.bp3-intent-primary{
          color:#106ba3; }
          .bp3-button.bp3-minimal.bp3-intent-primary:hover, .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#106ba3; }
          .bp3-button.bp3-minimal.bp3-intent-primary:hover{
            background:rgba(19, 124, 189, 0.15);
            color:#106ba3; }
          .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
            background:rgba(19, 124, 189, 0.3);
            color:#106ba3; }
          .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{
            background:none;
            color:rgba(16, 107, 163, 0.5); }
            .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{
              background:rgba(19, 124, 189, 0.3); }
          .bp3-button.bp3-minimal.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
            stroke:#106ba3; }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary{
            color:#48aff0; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:hover{
              background:rgba(19, 124, 189, 0.2);
              color:#48aff0; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
              background:rgba(19, 124, 189, 0.3);
              color:#48aff0; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{
              background:none;
              color:rgba(72, 175, 240, 0.5); }
              .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{
                background:rgba(19, 124, 189, 0.3); }
        .bp3-button.bp3-minimal.bp3-intent-success{
          color:#0d8050; }
          .bp3-button.bp3-minimal.bp3-intent-success:hover, .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#0d8050; }
          .bp3-button.bp3-minimal.bp3-intent-success:hover{
            background:rgba(15, 153, 96, 0.15);
            color:#0d8050; }
          .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
            background:rgba(15, 153, 96, 0.3);
            color:#0d8050; }
          .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{
            background:none;
            color:rgba(13, 128, 80, 0.5); }
            .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{
              background:rgba(15, 153, 96, 0.3); }
          .bp3-button.bp3-minimal.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
            stroke:#0d8050; }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success{
            color:#3dcc91; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:hover{
              background:rgba(15, 153, 96, 0.2);
              color:#3dcc91; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
              background:rgba(15, 153, 96, 0.3);
              color:#3dcc91; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{
              background:none;
              color:rgba(61, 204, 145, 0.5); }
              .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{
                background:rgba(15, 153, 96, 0.3); }
        .bp3-button.bp3-minimal.bp3-intent-warning{
          color:#bf7326; }
          .bp3-button.bp3-minimal.bp3-intent-warning:hover, .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#bf7326; }
          .bp3-button.bp3-minimal.bp3-intent-warning:hover{
            background:rgba(217, 130, 43, 0.15);
            color:#bf7326; }
          .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
            background:rgba(217, 130, 43, 0.3);
            color:#bf7326; }
          .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{
            background:none;
            color:rgba(191, 115, 38, 0.5); }
            .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{
              background:rgba(217, 130, 43, 0.3); }
          .bp3-button.bp3-minimal.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
            stroke:#bf7326; }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning{
            color:#ffb366; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:hover{
              background:rgba(217, 130, 43, 0.2);
              color:#ffb366; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
              background:rgba(217, 130, 43, 0.3);
              color:#ffb366; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{
              background:none;
              color:rgba(255, 179, 102, 0.5); }
              .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{
                background:rgba(217, 130, 43, 0.3); }
        .bp3-button.bp3-minimal.bp3-intent-danger{
          color:#c23030; }
          .bp3-button.bp3-minimal.bp3-intent-danger:hover, .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#c23030; }
          .bp3-button.bp3-minimal.bp3-intent-danger:hover{
            background:rgba(219, 55, 55, 0.15);
            color:#c23030; }
          .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
            background:rgba(219, 55, 55, 0.3);
            color:#c23030; }
          .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{
            background:none;
            color:rgba(194, 48, 48, 0.5); }
            .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{
              background:rgba(219, 55, 55, 0.3); }
          .bp3-button.bp3-minimal.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
            stroke:#c23030; }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger{
            color:#ff7373; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:hover{
              background:rgba(219, 55, 55, 0.2);
              color:#ff7373; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
              background:rgba(219, 55, 55, 0.3);
              color:#ff7373; }
            .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{
              background:none;
              color:rgba(255, 115, 115, 0.5); }
              .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{
                background:rgba(219, 55, 55, 0.3); }
      .bp3-button.bp3-outlined{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        border:1px solid rgba(24, 32, 38, 0.2);
        -webkit-box-sizing:border-box;
                box-sizing:border-box; }
        .bp3-button.bp3-outlined:hover{
          background:rgba(167, 182, 194, 0.3);
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:#182026;
          text-decoration:none; }
        .bp3-button.bp3-outlined:active, .bp3-button.bp3-outlined.bp3-active{
          background:rgba(115, 134, 148, 0.3);
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:#182026; }
        .bp3-button.bp3-outlined:disabled, .bp3-button.bp3-outlined:disabled:hover, .bp3-button.bp3-outlined.bp3-disabled, .bp3-button.bp3-outlined.bp3-disabled:hover{
          background:none;
          color:rgba(92, 112, 128, 0.6);
          cursor:not-allowed; }
          .bp3-button.bp3-outlined:disabled.bp3-active, .bp3-button.bp3-outlined:disabled:hover.bp3-active, .bp3-button.bp3-outlined.bp3-disabled.bp3-active, .bp3-button.bp3-outlined.bp3-disabled:hover.bp3-active{
            background:rgba(115, 134, 148, 0.3); }
        .bp3-dark .bp3-button.bp3-outlined{
          background:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:inherit; }
          .bp3-dark .bp3-button.bp3-outlined:hover, .bp3-dark .bp3-button.bp3-outlined:active, .bp3-dark .bp3-button.bp3-outlined.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none; }
          .bp3-dark .bp3-button.bp3-outlined:hover{
            background:rgba(138, 155, 168, 0.15); }
          .bp3-dark .bp3-button.bp3-outlined:active, .bp3-dark .bp3-button.bp3-outlined.bp3-active{
            background:rgba(138, 155, 168, 0.3);
            color:#f5f8fa; }
          .bp3-dark .bp3-button.bp3-outlined:disabled, .bp3-dark .bp3-button.bp3-outlined:disabled:hover, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover{
            background:none;
            color:rgba(167, 182, 194, 0.6);
            cursor:not-allowed; }
            .bp3-dark .bp3-button.bp3-outlined:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined:disabled:hover.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover.bp3-active{
              background:rgba(138, 155, 168, 0.3); }
        .bp3-button.bp3-outlined.bp3-intent-primary{
          color:#106ba3; }
          .bp3-button.bp3-outlined.bp3-intent-primary:hover, .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#106ba3; }
          .bp3-button.bp3-outlined.bp3-intent-primary:hover{
            background:rgba(19, 124, 189, 0.15);
            color:#106ba3; }
          .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{
            background:rgba(19, 124, 189, 0.3);
            color:#106ba3; }
          .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
            background:none;
            color:rgba(16, 107, 163, 0.5); }
            .bp3-button.bp3-outlined.bp3-intent-primary:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled.bp3-active{
              background:rgba(19, 124, 189, 0.3); }
          .bp3-button.bp3-outlined.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
            stroke:#106ba3; }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary{
            color:#48aff0; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:hover{
              background:rgba(19, 124, 189, 0.2);
              color:#48aff0; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{
              background:rgba(19, 124, 189, 0.3);
              color:#48aff0; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
              background:none;
              color:rgba(72, 175, 240, 0.5); }
              .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled.bp3-active{
                background:rgba(19, 124, 189, 0.3); }
        .bp3-button.bp3-outlined.bp3-intent-success{
          color:#0d8050; }
          .bp3-button.bp3-outlined.bp3-intent-success:hover, .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#0d8050; }
          .bp3-button.bp3-outlined.bp3-intent-success:hover{
            background:rgba(15, 153, 96, 0.15);
            color:#0d8050; }
          .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{
            background:rgba(15, 153, 96, 0.3);
            color:#0d8050; }
          .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
            background:none;
            color:rgba(13, 128, 80, 0.5); }
            .bp3-button.bp3-outlined.bp3-intent-success:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled.bp3-active{
              background:rgba(15, 153, 96, 0.3); }
          .bp3-button.bp3-outlined.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
            stroke:#0d8050; }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success{
            color:#3dcc91; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:hover{
              background:rgba(15, 153, 96, 0.2);
              color:#3dcc91; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{
              background:rgba(15, 153, 96, 0.3);
              color:#3dcc91; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
              background:none;
              color:rgba(61, 204, 145, 0.5); }
              .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled.bp3-active{
                background:rgba(15, 153, 96, 0.3); }
        .bp3-button.bp3-outlined.bp3-intent-warning{
          color:#bf7326; }
          .bp3-button.bp3-outlined.bp3-intent-warning:hover, .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#bf7326; }
          .bp3-button.bp3-outlined.bp3-intent-warning:hover{
            background:rgba(217, 130, 43, 0.15);
            color:#bf7326; }
          .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{
            background:rgba(217, 130, 43, 0.3);
            color:#bf7326; }
          .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
            background:none;
            color:rgba(191, 115, 38, 0.5); }
            .bp3-button.bp3-outlined.bp3-intent-warning:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled.bp3-active{
              background:rgba(217, 130, 43, 0.3); }
          .bp3-button.bp3-outlined.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
            stroke:#bf7326; }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning{
            color:#ffb366; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:hover{
              background:rgba(217, 130, 43, 0.2);
              color:#ffb366; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{
              background:rgba(217, 130, 43, 0.3);
              color:#ffb366; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
              background:none;
              color:rgba(255, 179, 102, 0.5); }
              .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled.bp3-active{
                background:rgba(217, 130, 43, 0.3); }
        .bp3-button.bp3-outlined.bp3-intent-danger{
          color:#c23030; }
          .bp3-button.bp3-outlined.bp3-intent-danger:hover, .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#c23030; }
          .bp3-button.bp3-outlined.bp3-intent-danger:hover{
            background:rgba(219, 55, 55, 0.15);
            color:#c23030; }
          .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{
            background:rgba(219, 55, 55, 0.3);
            color:#c23030; }
          .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
            background:none;
            color:rgba(194, 48, 48, 0.5); }
            .bp3-button.bp3-outlined.bp3-intent-danger:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled.bp3-active{
              background:rgba(219, 55, 55, 0.3); }
          .bp3-button.bp3-outlined.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
            stroke:#c23030; }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger{
            color:#ff7373; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:hover{
              background:rgba(219, 55, 55, 0.2);
              color:#ff7373; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{
              background:rgba(219, 55, 55, 0.3);
              color:#ff7373; }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
              background:none;
              color:rgba(255, 115, 115, 0.5); }
              .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled.bp3-active{
                background:rgba(219, 55, 55, 0.3); }
        .bp3-button.bp3-outlined:disabled, .bp3-button.bp3-outlined.bp3-disabled, .bp3-button.bp3-outlined:disabled:hover, .bp3-button.bp3-outlined.bp3-disabled:hover{
          border-color:rgba(92, 112, 128, 0.1); }
        .bp3-dark .bp3-button.bp3-outlined{
          border-color:rgba(255, 255, 255, 0.4); }
          .bp3-dark .bp3-button.bp3-outlined:disabled, .bp3-dark .bp3-button.bp3-outlined:disabled:hover, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover{
            border-color:rgba(255, 255, 255, 0.2); }
        .bp3-button.bp3-outlined.bp3-intent-primary{
          border-color:rgba(16, 107, 163, 0.6); }
          .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
            border-color:rgba(16, 107, 163, 0.2); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary{
            border-color:rgba(72, 175, 240, 0.6); }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
              border-color:rgba(72, 175, 240, 0.2); }
        .bp3-button.bp3-outlined.bp3-intent-success{
          border-color:rgba(13, 128, 80, 0.6); }
          .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
            border-color:rgba(13, 128, 80, 0.2); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success{
            border-color:rgba(61, 204, 145, 0.6); }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
              border-color:rgba(61, 204, 145, 0.2); }
        .bp3-button.bp3-outlined.bp3-intent-warning{
          border-color:rgba(191, 115, 38, 0.6); }
          .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
            border-color:rgba(191, 115, 38, 0.2); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning{
            border-color:rgba(255, 179, 102, 0.6); }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
              border-color:rgba(255, 179, 102, 0.2); }
        .bp3-button.bp3-outlined.bp3-intent-danger{
          border-color:rgba(194, 48, 48, 0.6); }
          .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
            border-color:rgba(194, 48, 48, 0.2); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger{
            border-color:rgba(255, 115, 115, 0.6); }
            .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
              border-color:rgba(255, 115, 115, 0.2); }
    
    a.bp3-button{
      text-align:center;
      text-decoration:none;
      -webkit-transition:none;
      transition:none; }
      a.bp3-button, a.bp3-button:hover, a.bp3-button:active{
        color:#182026; }
      a.bp3-button.bp3-disabled{
        color:rgba(92, 112, 128, 0.6); }
    
    .bp3-button-text{
      -webkit-box-flex:0;
          -ms-flex:0 1 auto;
              flex:0 1 auto; }
    
    .bp3-button.bp3-align-left .bp3-button-text, .bp3-button.bp3-align-right .bp3-button-text,
    .bp3-button-group.bp3-align-left .bp3-button-text,
    .bp3-button-group.bp3-align-right .bp3-button-text{
      -webkit-box-flex:1;
          -ms-flex:1 1 auto;
              flex:1 1 auto; }
    .bp3-button-group{
      display:-webkit-inline-box;
      display:-ms-inline-flexbox;
      display:inline-flex; }
      .bp3-button-group .bp3-button{
        -webkit-box-flex:0;
            -ms-flex:0 0 auto;
                flex:0 0 auto;
        position:relative;
        z-index:4; }
        .bp3-button-group .bp3-button:focus{
          z-index:5; }
        .bp3-button-group .bp3-button:hover{
          z-index:6; }
        .bp3-button-group .bp3-button:active, .bp3-button-group .bp3-button.bp3-active{
          z-index:7; }
        .bp3-button-group .bp3-button:disabled, .bp3-button-group .bp3-button.bp3-disabled{
          z-index:3; }
        .bp3-button-group .bp3-button[class*="bp3-intent-"]{
          z-index:9; }
          .bp3-button-group .bp3-button[class*="bp3-intent-"]:focus{
            z-index:10; }
          .bp3-button-group .bp3-button[class*="bp3-intent-"]:hover{
            z-index:11; }
          .bp3-button-group .bp3-button[class*="bp3-intent-"]:active, .bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-active{
            z-index:12; }
          .bp3-button-group .bp3-button[class*="bp3-intent-"]:disabled, .bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-disabled{
            z-index:8; }
      .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:first-child) .bp3-button,
      .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:first-child){
        border-bottom-left-radius:0;
        border-top-left-radius:0; }
      .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
      .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){
        border-bottom-right-radius:0;
        border-top-right-radius:0;
        margin-right:-1px; }
      .bp3-button-group.bp3-minimal .bp3-button{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none; }
        .bp3-button-group.bp3-minimal .bp3-button:hover{
          background:rgba(167, 182, 194, 0.3);
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:#182026;
          text-decoration:none; }
        .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
          background:rgba(115, 134, 148, 0.3);
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:#182026; }
        .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{
          background:none;
          color:rgba(92, 112, 128, 0.6);
          cursor:not-allowed; }
          .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{
            background:rgba(115, 134, 148, 0.3); }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button{
          background:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:inherit; }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none; }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover{
            background:rgba(138, 155, 168, 0.15); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
            background:rgba(138, 155, 168, 0.3);
            color:#f5f8fa; }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{
            background:none;
            color:rgba(167, 182, 194, 0.6);
            cursor:not-allowed; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{
              background:rgba(138, 155, 168, 0.3); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{
          color:#106ba3; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#106ba3; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{
            background:rgba(19, 124, 189, 0.15);
            color:#106ba3; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
            background:rgba(19, 124, 189, 0.3);
            color:#106ba3; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{
            background:none;
            color:rgba(16, 107, 163, 0.5); }
            .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{
              background:rgba(19, 124, 189, 0.3); }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
            stroke:#106ba3; }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{
            color:#48aff0; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{
              background:rgba(19, 124, 189, 0.2);
              color:#48aff0; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
              background:rgba(19, 124, 189, 0.3);
              color:#48aff0; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{
              background:none;
              color:rgba(72, 175, 240, 0.5); }
              .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{
                background:rgba(19, 124, 189, 0.3); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{
          color:#0d8050; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#0d8050; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{
            background:rgba(15, 153, 96, 0.15);
            color:#0d8050; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
            background:rgba(15, 153, 96, 0.3);
            color:#0d8050; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{
            background:none;
            color:rgba(13, 128, 80, 0.5); }
            .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{
              background:rgba(15, 153, 96, 0.3); }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
            stroke:#0d8050; }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{
            color:#3dcc91; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{
              background:rgba(15, 153, 96, 0.2);
              color:#3dcc91; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
              background:rgba(15, 153, 96, 0.3);
              color:#3dcc91; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{
              background:none;
              color:rgba(61, 204, 145, 0.5); }
              .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{
                background:rgba(15, 153, 96, 0.3); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{
          color:#bf7326; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#bf7326; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{
            background:rgba(217, 130, 43, 0.15);
            color:#bf7326; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
            background:rgba(217, 130, 43, 0.3);
            color:#bf7326; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{
            background:none;
            color:rgba(191, 115, 38, 0.5); }
            .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{
              background:rgba(217, 130, 43, 0.3); }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
            stroke:#bf7326; }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{
            color:#ffb366; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{
              background:rgba(217, 130, 43, 0.2);
              color:#ffb366; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
              background:rgba(217, 130, 43, 0.3);
              color:#ffb366; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{
              background:none;
              color:rgba(255, 179, 102, 0.5); }
              .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{
                background:rgba(217, 130, 43, 0.3); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{
          color:#c23030; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
            background:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:#c23030; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{
            background:rgba(219, 55, 55, 0.15);
            color:#c23030; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
            background:rgba(219, 55, 55, 0.3);
            color:#c23030; }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{
            background:none;
            color:rgba(194, 48, 48, 0.5); }
            .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{
              background:rgba(219, 55, 55, 0.3); }
          .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
            stroke:#c23030; }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{
            color:#ff7373; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{
              background:rgba(219, 55, 55, 0.2);
              color:#ff7373; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
              background:rgba(219, 55, 55, 0.3);
              color:#ff7373; }
            .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{
              background:none;
              color:rgba(255, 115, 115, 0.5); }
              .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{
                background:rgba(219, 55, 55, 0.3); }
      .bp3-button-group .bp3-popover-wrapper,
      .bp3-button-group .bp3-popover-target{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-flex:1;
            -ms-flex:1 1 auto;
                flex:1 1 auto; }
      .bp3-button-group.bp3-fill{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        width:100%; }
      .bp3-button-group .bp3-button.bp3-fill,
      .bp3-button-group.bp3-fill .bp3-button:not(.bp3-fixed){
        -webkit-box-flex:1;
            -ms-flex:1 1 auto;
                flex:1 1 auto; }
      .bp3-button-group.bp3-vertical{
        -webkit-box-align:stretch;
            -ms-flex-align:stretch;
                align-items:stretch;
        -webkit-box-orient:vertical;
        -webkit-box-direction:normal;
            -ms-flex-direction:column;
                flex-direction:column;
        vertical-align:top; }
        .bp3-button-group.bp3-vertical.bp3-fill{
          height:100%;
          width:unset; }
        .bp3-button-group.bp3-vertical .bp3-button{
          margin-right:0 !important;
          width:100%; }
        .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:first-child .bp3-button,
        .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:first-child{
          border-radius:3px 3px 0 0; }
        .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:last-child .bp3-button,
        .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:last-child{
          border-radius:0 0 3px 3px; }
        .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
        .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:not(:last-child){
          margin-bottom:-1px; }
      .bp3-button-group.bp3-align-left .bp3-button{
        text-align:left; }
      .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
      .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){
        margin-right:1px; }
      .bp3-dark .bp3-button-group.bp3-vertical > .bp3-popover-wrapper:not(:last-child) .bp3-button,
      .bp3-dark .bp3-button-group.bp3-vertical > .bp3-button:not(:last-child){
        margin-bottom:1px; }
    .bp3-callout{
      font-size:14px;
      line-height:1.5;
      background-color:rgba(138, 155, 168, 0.15);
      border-radius:3px;
      padding:10px 12px 9px;
      position:relative;
      width:100%; }
      .bp3-callout[class*="bp3-icon-"]{
        padding-left:40px; }
        .bp3-callout[class*="bp3-icon-"]::before{
          font-family:"Icons20", sans-serif;
          font-size:20px;
          font-style:normal;
          font-weight:400;
          line-height:1;
          -moz-osx-font-smoothing:grayscale;
          -webkit-font-smoothing:antialiased;
          color:#5c7080;
          left:10px;
          position:absolute;
          top:10px; }
      .bp3-callout.bp3-callout-icon{
        padding-left:40px; }
        .bp3-callout.bp3-callout-icon > .bp3-icon:first-child{
          color:#5c7080;
          left:10px;
          position:absolute;
          top:10px; }
      .bp3-callout .bp3-heading{
        line-height:20px;
        margin-bottom:5px;
        margin-top:0; }
        .bp3-callout .bp3-heading:last-child{
          margin-bottom:0; }
      .bp3-dark .bp3-callout{
        background-color:rgba(138, 155, 168, 0.2); }
        .bp3-dark .bp3-callout[class*="bp3-icon-"]::before{
          color:#a7b6c2; }
      .bp3-callout.bp3-intent-primary{
        background-color:rgba(19, 124, 189, 0.15); }
        .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
        .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,
        .bp3-callout.bp3-intent-primary .bp3-heading{
          color:#106ba3; }
        .bp3-dark .bp3-callout.bp3-intent-primary{
          background-color:rgba(19, 124, 189, 0.25); }
          .bp3-dark .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
          .bp3-dark .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,
          .bp3-dark .bp3-callout.bp3-intent-primary .bp3-heading{
            color:#48aff0; }
      .bp3-callout.bp3-intent-success{
        background-color:rgba(15, 153, 96, 0.15); }
        .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
        .bp3-callout.bp3-intent-success > .bp3-icon:first-child,
        .bp3-callout.bp3-intent-success .bp3-heading{
          color:#0d8050; }
        .bp3-dark .bp3-callout.bp3-intent-success{
          background-color:rgba(15, 153, 96, 0.25); }
          .bp3-dark .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
          .bp3-dark .bp3-callout.bp3-intent-success > .bp3-icon:first-child,
          .bp3-dark .bp3-callout.bp3-intent-success .bp3-heading{
            color:#3dcc91; }
      .bp3-callout.bp3-intent-warning{
        background-color:rgba(217, 130, 43, 0.15); }
        .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
        .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,
        .bp3-callout.bp3-intent-warning .bp3-heading{
          color:#bf7326; }
        .bp3-dark .bp3-callout.bp3-intent-warning{
          background-color:rgba(217, 130, 43, 0.25); }
          .bp3-dark .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
          .bp3-dark .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,
          .bp3-dark .bp3-callout.bp3-intent-warning .bp3-heading{
            color:#ffb366; }
      .bp3-callout.bp3-intent-danger{
        background-color:rgba(219, 55, 55, 0.15); }
        .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
        .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,
        .bp3-callout.bp3-intent-danger .bp3-heading{
          color:#c23030; }
        .bp3-dark .bp3-callout.bp3-intent-danger{
          background-color:rgba(219, 55, 55, 0.25); }
          .bp3-dark .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
          .bp3-dark .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,
          .bp3-dark .bp3-callout.bp3-intent-danger .bp3-heading{
            color:#ff7373; }
      .bp3-running-text .bp3-callout{
        margin:20px 0; }
    .bp3-card{
      background-color:#ffffff;
      border-radius:3px;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
      padding:20px;
      -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-card.bp3-dark,
      .bp3-dark .bp3-card{
        background-color:#30404d;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }
    
    .bp3-elevation-0{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }
      .bp3-elevation-0.bp3-dark,
      .bp3-dark .bp3-elevation-0{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }
    
    .bp3-elevation-1{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2); }
      .bp3-elevation-1.bp3-dark,
      .bp3-dark .bp3-elevation-1{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
    
    .bp3-elevation-2{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2); }
      .bp3-elevation-2.bp3-dark,
      .bp3-dark .bp3-elevation-2{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4); }
    
    .bp3-elevation-3{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }
      .bp3-elevation-3.bp3-dark,
      .bp3-dark .bp3-elevation-3{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    
    .bp3-elevation-4{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2); }
      .bp3-elevation-4.bp3-dark,
      .bp3-dark .bp3-elevation-4{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4); }
    
    .bp3-card.bp3-interactive:hover{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
      cursor:pointer; }
      .bp3-card.bp3-interactive:hover.bp3-dark,
      .bp3-dark .bp3-card.bp3-interactive:hover{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    
    .bp3-card.bp3-interactive:active{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
      opacity:0.9;
      -webkit-transition-duration:0;
              transition-duration:0; }
      .bp3-card.bp3-interactive:active.bp3-dark,
      .bp3-dark .bp3-card.bp3-interactive:active{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
    
    .bp3-collapse{
      height:0;
      overflow-y:hidden;
      -webkit-transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-collapse .bp3-collapse-body{
        -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
        transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
        transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
        transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
        .bp3-collapse .bp3-collapse-body[aria-hidden="true"]{
          display:none; }
    
    .bp3-context-menu .bp3-popover-target{
      display:block; }
    
    .bp3-context-menu-popover-target{
      position:fixed; }
    
    .bp3-divider{
      border-bottom:1px solid rgba(16, 22, 26, 0.15);
      border-right:1px solid rgba(16, 22, 26, 0.15);
      margin:5px; }
      .bp3-dark .bp3-divider{
        border-color:rgba(16, 22, 26, 0.4); }
    .bp3-dialog-container{
      opacity:1;
      -webkit-transform:scale(1);
              transform:scale(1);
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-pack:center;
          -ms-flex-pack:center;
              justify-content:center;
      min-height:100%;
      pointer-events:none;
      -webkit-user-select:none;
         -moz-user-select:none;
          -ms-user-select:none;
              user-select:none;
      width:100%; }
      .bp3-dialog-container.bp3-overlay-enter > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear > .bp3-dialog{
        opacity:0;
        -webkit-transform:scale(0.5);
                transform:scale(0.5); }
      .bp3-dialog-container.bp3-overlay-enter-active > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear-active > .bp3-dialog{
        opacity:1;
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:300ms;
                transition-duration:300ms;
        -webkit-transition-property:opacity, -webkit-transform;
        transition-property:opacity, -webkit-transform;
        transition-property:opacity, transform;
        transition-property:opacity, transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
                transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
      .bp3-dialog-container.bp3-overlay-exit > .bp3-dialog{
        opacity:1;
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-dialog-container.bp3-overlay-exit-active > .bp3-dialog{
        opacity:0;
        -webkit-transform:scale(0.5);
                transform:scale(0.5);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:300ms;
                transition-duration:300ms;
        -webkit-transition-property:opacity, -webkit-transform;
        transition-property:opacity, -webkit-transform;
        transition-property:opacity, transform;
        transition-property:opacity, transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
                transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
    
    .bp3-dialog{
      background:#ebf1f5;
      border-radius:6px;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;
      margin:30px 0;
      padding-bottom:20px;
      pointer-events:all;
      -webkit-user-select:text;
         -moz-user-select:text;
          -ms-user-select:text;
              user-select:text;
      width:500px; }
      .bp3-dialog:focus{
        outline:0; }
      .bp3-dialog.bp3-dark,
      .bp3-dark .bp3-dialog{
        background:#293742;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
        color:#f5f8fa; }
    
    .bp3-dialog-header{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      background:#ffffff;
      border-radius:6px 6px 0 0;
      -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
              box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-flex:0;
          -ms-flex:0 0 auto;
              flex:0 0 auto;
      min-height:40px;
      padding-left:20px;
      padding-right:5px;
      z-index:30; }
      .bp3-dialog-header .bp3-icon-large,
      .bp3-dialog-header .bp3-icon{
        color:#5c7080;
        -webkit-box-flex:0;
            -ms-flex:0 0 auto;
                flex:0 0 auto;
        margin-right:10px; }
      .bp3-dialog-header .bp3-heading{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        word-wrap:normal;
        -webkit-box-flex:1;
            -ms-flex:1 1 auto;
                flex:1 1 auto;
        line-height:inherit;
        margin:0; }
        .bp3-dialog-header .bp3-heading:last-child{
          margin-right:20px; }
      .bp3-dark .bp3-dialog-header{
        background:#30404d;
        -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
                box-shadow:0 1px 0 rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-dialog-header .bp3-icon-large,
        .bp3-dark .bp3-dialog-header .bp3-icon{
          color:#a7b6c2; }
    
    .bp3-dialog-body{
      -webkit-box-flex:1;
          -ms-flex:1 1 auto;
              flex:1 1 auto;
      line-height:18px;
      margin:20px; }
    
    .bp3-dialog-footer{
      -webkit-box-flex:0;
          -ms-flex:0 0 auto;
              flex:0 0 auto;
      margin:0 20px; }
    
    .bp3-dialog-footer-actions{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-pack:end;
          -ms-flex-pack:end;
              justify-content:flex-end; }
      .bp3-dialog-footer-actions .bp3-button{
        margin-left:10px; }
    .bp3-multistep-dialog-panels{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex; }
    
    .bp3-multistep-dialog-left-panel{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-flex:1;
          -ms-flex:1;
              flex:1;
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column; }
      .bp3-dark .bp3-multistep-dialog-left-panel{
        background:#202b33; }
    
    .bp3-multistep-dialog-right-panel{
      background-color:#f5f8fa;
      border-left:1px solid rgba(16, 22, 26, 0.15);
      border-radius:0 0 6px 0;
      -webkit-box-flex:3;
          -ms-flex:3;
              flex:3;
      min-width:0; }
      .bp3-dark .bp3-multistep-dialog-right-panel{
        background-color:#293742;
        border-left:1px solid rgba(16, 22, 26, 0.4); }
    
    .bp3-multistep-dialog-footer{
      background-color:#ffffff;
      border-radius:0 0 6px 0;
      border-top:1px solid rgba(16, 22, 26, 0.15);
      padding:10px; }
      .bp3-dark .bp3-multistep-dialog-footer{
        background:#30404d;
        border-top:1px solid rgba(16, 22, 26, 0.4); }
    
    .bp3-dialog-step-container{
      background-color:#f5f8fa;
      border-bottom:1px solid rgba(16, 22, 26, 0.15); }
      .bp3-dark .bp3-dialog-step-container{
        background:#293742;
        border-bottom:1px solid rgba(16, 22, 26, 0.4); }
      .bp3-dialog-step-container.bp3-dialog-step-viewed{
        background-color:#ffffff; }
        .bp3-dark .bp3-dialog-step-container.bp3-dialog-step-viewed{
          background:#30404d; }
    
    .bp3-dialog-step{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      background-color:#f5f8fa;
      border-radius:6px;
      cursor:not-allowed;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      margin:4px;
      padding:6px 14px; }
      .bp3-dark .bp3-dialog-step{
        background:#293742; }
      .bp3-dialog-step-viewed .bp3-dialog-step{
        background-color:#ffffff;
        cursor:pointer; }
        .bp3-dark .bp3-dialog-step-viewed .bp3-dialog-step{
          background:#30404d; }
      .bp3-dialog-step:hover{
        background-color:#f5f8fa; }
        .bp3-dark .bp3-dialog-step:hover{
          background:#293742; }
    
    .bp3-dialog-step-icon{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      background-color:rgba(92, 112, 128, 0.6);
      border-radius:50%;
      color:#ffffff;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      height:25px;
      -webkit-box-pack:center;
          -ms-flex-pack:center;
              justify-content:center;
      width:25px; }
      .bp3-dark .bp3-dialog-step-icon{
        background-color:rgba(167, 182, 194, 0.6); }
      .bp3-active.bp3-dialog-step-viewed .bp3-dialog-step-icon{
        background-color:#2b95d6; }
      .bp3-dialog-step-viewed .bp3-dialog-step-icon{
        background-color:#8a9ba8; }
    
    .bp3-dialog-step-title{
      color:rgba(92, 112, 128, 0.6);
      -webkit-box-flex:1;
          -ms-flex:1;
              flex:1;
      padding-left:10px; }
      .bp3-dark .bp3-dialog-step-title{
        color:rgba(167, 182, 194, 0.6); }
      .bp3-active.bp3-dialog-step-viewed .bp3-dialog-step-title{
        color:#2b95d6; }
      .bp3-dialog-step-viewed:not(.bp3-active) .bp3-dialog-step-title{
        color:#182026; }
        .bp3-dark .bp3-dialog-step-viewed:not(.bp3-active) .bp3-dialog-step-title{
          color:#f5f8fa; }
    .bp3-drawer{
      background:#ffffff;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;
      margin:0;
      padding:0; }
      .bp3-drawer:focus{
        outline:0; }
      .bp3-drawer.bp3-position-top{
        height:50%;
        left:0;
        right:0;
        top:0; }
        .bp3-drawer.bp3-position-top.bp3-overlay-enter, .bp3-drawer.bp3-position-top.bp3-overlay-appear{
          -webkit-transform:translateY(-100%);
                  transform:translateY(-100%); }
        .bp3-drawer.bp3-position-top.bp3-overlay-enter-active, .bp3-drawer.bp3-position-top.bp3-overlay-appear-active{
          -webkit-transform:translateY(0);
                  transform:translateY(0);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:200ms;
                  transition-duration:200ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
        .bp3-drawer.bp3-position-top.bp3-overlay-exit{
          -webkit-transform:translateY(0);
                  transform:translateY(0); }
        .bp3-drawer.bp3-position-top.bp3-overlay-exit-active{
          -webkit-transform:translateY(-100%);
                  transform:translateY(-100%);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:100ms;
                  transition-duration:100ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-drawer.bp3-position-bottom{
        bottom:0;
        height:50%;
        left:0;
        right:0; }
        .bp3-drawer.bp3-position-bottom.bp3-overlay-enter, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear{
          -webkit-transform:translateY(100%);
                  transform:translateY(100%); }
        .bp3-drawer.bp3-position-bottom.bp3-overlay-enter-active, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear-active{
          -webkit-transform:translateY(0);
                  transform:translateY(0);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:200ms;
                  transition-duration:200ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
        .bp3-drawer.bp3-position-bottom.bp3-overlay-exit{
          -webkit-transform:translateY(0);
                  transform:translateY(0); }
        .bp3-drawer.bp3-position-bottom.bp3-overlay-exit-active{
          -webkit-transform:translateY(100%);
                  transform:translateY(100%);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:100ms;
                  transition-duration:100ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-drawer.bp3-position-left{
        bottom:0;
        left:0;
        top:0;
        width:50%; }
        .bp3-drawer.bp3-position-left.bp3-overlay-enter, .bp3-drawer.bp3-position-left.bp3-overlay-appear{
          -webkit-transform:translateX(-100%);
                  transform:translateX(-100%); }
        .bp3-drawer.bp3-position-left.bp3-overlay-enter-active, .bp3-drawer.bp3-position-left.bp3-overlay-appear-active{
          -webkit-transform:translateX(0);
                  transform:translateX(0);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:200ms;
                  transition-duration:200ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
        .bp3-drawer.bp3-position-left.bp3-overlay-exit{
          -webkit-transform:translateX(0);
                  transform:translateX(0); }
        .bp3-drawer.bp3-position-left.bp3-overlay-exit-active{
          -webkit-transform:translateX(-100%);
                  transform:translateX(-100%);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:100ms;
                  transition-duration:100ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-drawer.bp3-position-right{
        bottom:0;
        right:0;
        top:0;
        width:50%; }
        .bp3-drawer.bp3-position-right.bp3-overlay-enter, .bp3-drawer.bp3-position-right.bp3-overlay-appear{
          -webkit-transform:translateX(100%);
                  transform:translateX(100%); }
        .bp3-drawer.bp3-position-right.bp3-overlay-enter-active, .bp3-drawer.bp3-position-right.bp3-overlay-appear-active{
          -webkit-transform:translateX(0);
                  transform:translateX(0);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:200ms;
                  transition-duration:200ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
        .bp3-drawer.bp3-position-right.bp3-overlay-exit{
          -webkit-transform:translateX(0);
                  transform:translateX(0); }
        .bp3-drawer.bp3-position-right.bp3-overlay-exit-active{
          -webkit-transform:translateX(100%);
                  transform:translateX(100%);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:100ms;
                  transition-duration:100ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
      .bp3-position-right):not(.bp3-vertical){
        bottom:0;
        right:0;
        top:0;
        width:50%; }
        .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear{
          -webkit-transform:translateX(100%);
                  transform:translateX(100%); }
        .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear-active{
          -webkit-transform:translateX(0);
                  transform:translateX(0);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:200ms;
                  transition-duration:200ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
        .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit{
          -webkit-transform:translateX(0);
                  transform:translateX(0); }
        .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit-active{
          -webkit-transform:translateX(100%);
                  transform:translateX(100%);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:100ms;
                  transition-duration:100ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
      .bp3-position-right).bp3-vertical{
        bottom:0;
        height:50%;
        left:0;
        right:0; }
        .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right).bp3-vertical.bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right).bp3-vertical.bp3-overlay-appear{
          -webkit-transform:translateY(100%);
                  transform:translateY(100%); }
        .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right).bp3-vertical.bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right).bp3-vertical.bp3-overlay-appear-active{
          -webkit-transform:translateY(0);
                  transform:translateY(0);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:200ms;
                  transition-duration:200ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
        .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right).bp3-vertical.bp3-overlay-exit{
          -webkit-transform:translateY(0);
                  transform:translateY(0); }
        .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
        .bp3-position-right).bp3-vertical.bp3-overlay-exit-active{
          -webkit-transform:translateY(100%);
                  transform:translateY(100%);
          -webkit-transition-delay:0;
                  transition-delay:0;
          -webkit-transition-duration:100ms;
                  transition-duration:100ms;
          -webkit-transition-property:-webkit-transform;
          transition-property:-webkit-transform;
          transition-property:transform;
          transition-property:transform, -webkit-transform;
          -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                  transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-drawer.bp3-dark,
      .bp3-dark .bp3-drawer{
        background:#30404d;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
        color:#f5f8fa; }
    
    .bp3-drawer-header{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      border-radius:0;
      -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
              box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-flex:0;
          -ms-flex:0 0 auto;
              flex:0 0 auto;
      min-height:40px;
      padding:5px;
      padding-left:20px;
      position:relative; }
      .bp3-drawer-header .bp3-icon-large,
      .bp3-drawer-header .bp3-icon{
        color:#5c7080;
        -webkit-box-flex:0;
            -ms-flex:0 0 auto;
                flex:0 0 auto;
        margin-right:10px; }
      .bp3-drawer-header .bp3-heading{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        word-wrap:normal;
        -webkit-box-flex:1;
            -ms-flex:1 1 auto;
                flex:1 1 auto;
        line-height:inherit;
        margin:0; }
        .bp3-drawer-header .bp3-heading:last-child{
          margin-right:20px; }
      .bp3-dark .bp3-drawer-header{
        -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
                box-shadow:0 1px 0 rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-drawer-header .bp3-icon-large,
        .bp3-dark .bp3-drawer-header .bp3-icon{
          color:#a7b6c2; }
    
    .bp3-drawer-body{
      -webkit-box-flex:1;
          -ms-flex:1 1 auto;
              flex:1 1 auto;
      line-height:18px;
      overflow:auto; }
    
    .bp3-drawer-footer{
      -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
              box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
      -webkit-box-flex:0;
          -ms-flex:0 0 auto;
              flex:0 0 auto;
      padding:10px 20px;
      position:relative; }
      .bp3-dark .bp3-drawer-footer{
        -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4);
                box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4); }
    .bp3-editable-text{
      cursor:text;
      display:inline-block;
      max-width:100%;
      position:relative;
      vertical-align:top;
      white-space:nowrap; }
      .bp3-editable-text::before{
        bottom:-3px;
        left:-3px;
        position:absolute;
        right:-3px;
        top:-3px;
        border-radius:3px;
        content:"";
        -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
        transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
        transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
        transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-editable-text:hover::before{
        -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15);
                box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
      .bp3-editable-text.bp3-editable-text-editing::before{
        background-color:#ffffff;
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
      .bp3-editable-text.bp3-disabled::before{
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-editable-text.bp3-intent-primary .bp3-editable-text-input,
      .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{
        color:#137cbd; }
      .bp3-editable-text.bp3-intent-primary:hover::before{
        -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4);
                box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4); }
      .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
      .bp3-editable-text.bp3-intent-success .bp3-editable-text-input,
      .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{
        color:#0f9960; }
      .bp3-editable-text.bp3-intent-success:hover::before{
        -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4);
                box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4); }
      .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{
        -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
      .bp3-editable-text.bp3-intent-warning .bp3-editable-text-input,
      .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{
        color:#d9822b; }
      .bp3-editable-text.bp3-intent-warning:hover::before{
        -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4);
                box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4); }
      .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{
        -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
      .bp3-editable-text.bp3-intent-danger .bp3-editable-text-input,
      .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{
        color:#db3737; }
      .bp3-editable-text.bp3-intent-danger:hover::before{
        -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4);
                box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4); }
      .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{
        -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
      .bp3-dark .bp3-editable-text:hover::before{
        -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
                box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15); }
      .bp3-dark .bp3-editable-text.bp3-editable-text-editing::before{
        background-color:rgba(16, 22, 26, 0.3);
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-editable-text.bp3-disabled::before{
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-dark .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{
        color:#48aff0; }
      .bp3-dark .bp3-editable-text.bp3-intent-primary:hover::before{
        -webkit-box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4);
                box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4); }
      .bp3-dark .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{
        -webkit-box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{
        color:#3dcc91; }
      .bp3-dark .bp3-editable-text.bp3-intent-success:hover::before{
        -webkit-box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4);
                box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4); }
      .bp3-dark .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{
        -webkit-box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{
        color:#ffb366; }
      .bp3-dark .bp3-editable-text.bp3-intent-warning:hover::before{
        -webkit-box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4);
                box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4); }
      .bp3-dark .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{
        -webkit-box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{
        color:#ff7373; }
      .bp3-dark .bp3-editable-text.bp3-intent-danger:hover::before{
        -webkit-box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4);
                box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4); }
      .bp3-dark .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{
        -webkit-box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    
    .bp3-editable-text-input,
    .bp3-editable-text-content{
      color:inherit;
      display:inherit;
      font:inherit;
      letter-spacing:inherit;
      max-width:inherit;
      min-width:inherit;
      position:relative;
      resize:none;
      text-transform:inherit;
      vertical-align:top; }
    
    .bp3-editable-text-input{
      background:none;
      border:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      padding:0;
      white-space:pre-wrap;
      width:100%; }
      .bp3-editable-text-input::-webkit-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-editable-text-input::-moz-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-editable-text-input:-ms-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-editable-text-input::-ms-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-editable-text-input::placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-editable-text-input:focus{
        outline:none; }
      .bp3-editable-text-input::-ms-clear{
        display:none; }
    
    .bp3-editable-text-content{
      overflow:hidden;
      padding-right:2px;
      text-overflow:ellipsis;
      white-space:pre; }
      .bp3-editable-text-editing > .bp3-editable-text-content{
        left:0;
        position:absolute;
        visibility:hidden; }
      .bp3-editable-text-placeholder > .bp3-editable-text-content{
        color:rgba(92, 112, 128, 0.6); }
        .bp3-dark .bp3-editable-text-placeholder > .bp3-editable-text-content{
          color:rgba(167, 182, 194, 0.6); }
    
    .bp3-editable-text.bp3-multiline{
      display:block; }
      .bp3-editable-text.bp3-multiline .bp3-editable-text-content{
        overflow:auto;
        white-space:pre-wrap;
        word-wrap:break-word; }
    .bp3-divider{
      border-bottom:1px solid rgba(16, 22, 26, 0.15);
      border-right:1px solid rgba(16, 22, 26, 0.15);
      margin:5px; }
      .bp3-dark .bp3-divider{
        border-color:rgba(16, 22, 26, 0.4); }
    .bp3-control-group{
      -webkit-transform:translateZ(0);
              transform:translateZ(0);
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-align:stretch;
          -ms-flex-align:stretch;
              align-items:stretch; }
      .bp3-control-group > *{
        -webkit-box-flex:0;
            -ms-flex-positive:0;
                flex-grow:0;
        -ms-flex-negative:0;
            flex-shrink:0; }
      .bp3-control-group > .bp3-fill{
        -webkit-box-flex:1;
            -ms-flex-positive:1;
                flex-grow:1;
        -ms-flex-negative:1;
            flex-shrink:1; }
      .bp3-control-group .bp3-button,
      .bp3-control-group .bp3-html-select,
      .bp3-control-group .bp3-input,
      .bp3-control-group .bp3-select{
        position:relative; }
      .bp3-control-group .bp3-input{
        border-radius:inherit;
        z-index:2; }
        .bp3-control-group .bp3-input:focus{
          border-radius:3px;
          z-index:14; }
        .bp3-control-group .bp3-input[class*="bp3-intent"]{
          z-index:13; }
          .bp3-control-group .bp3-input[class*="bp3-intent"]:focus{
            z-index:15; }
        .bp3-control-group .bp3-input[readonly], .bp3-control-group .bp3-input:disabled, .bp3-control-group .bp3-input.bp3-disabled{
          z-index:1; }
      .bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input{
        z-index:13; }
        .bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input:focus{
          z-index:15; }
      .bp3-control-group .bp3-button,
      .bp3-control-group .bp3-html-select select,
      .bp3-control-group .bp3-select select{
        -webkit-transform:translateZ(0);
                transform:translateZ(0);
        border-radius:inherit;
        z-index:4; }
        .bp3-control-group .bp3-button:focus,
        .bp3-control-group .bp3-html-select select:focus,
        .bp3-control-group .bp3-select select:focus{
          z-index:5; }
        .bp3-control-group .bp3-button:hover,
        .bp3-control-group .bp3-html-select select:hover,
        .bp3-control-group .bp3-select select:hover{
          z-index:6; }
        .bp3-control-group .bp3-button:active,
        .bp3-control-group .bp3-html-select select:active,
        .bp3-control-group .bp3-select select:active{
          z-index:7; }
        .bp3-control-group .bp3-button[readonly], .bp3-control-group .bp3-button:disabled, .bp3-control-group .bp3-button.bp3-disabled,
        .bp3-control-group .bp3-html-select select[readonly],
        .bp3-control-group .bp3-html-select select:disabled,
        .bp3-control-group .bp3-html-select select.bp3-disabled,
        .bp3-control-group .bp3-select select[readonly],
        .bp3-control-group .bp3-select select:disabled,
        .bp3-control-group .bp3-select select.bp3-disabled{
          z-index:3; }
        .bp3-control-group .bp3-button[class*="bp3-intent"],
        .bp3-control-group .bp3-html-select select[class*="bp3-intent"],
        .bp3-control-group .bp3-select select[class*="bp3-intent"]{
          z-index:9; }
          .bp3-control-group .bp3-button[class*="bp3-intent"]:focus,
          .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:focus,
          .bp3-control-group .bp3-select select[class*="bp3-intent"]:focus{
            z-index:10; }
          .bp3-control-group .bp3-button[class*="bp3-intent"]:hover,
          .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:hover,
          .bp3-control-group .bp3-select select[class*="bp3-intent"]:hover{
            z-index:11; }
          .bp3-control-group .bp3-button[class*="bp3-intent"]:active,
          .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:active,
          .bp3-control-group .bp3-select select[class*="bp3-intent"]:active{
            z-index:12; }
          .bp3-control-group .bp3-button[class*="bp3-intent"][readonly], .bp3-control-group .bp3-button[class*="bp3-intent"]:disabled, .bp3-control-group .bp3-button[class*="bp3-intent"].bp3-disabled,
          .bp3-control-group .bp3-html-select select[class*="bp3-intent"][readonly],
          .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:disabled,
          .bp3-control-group .bp3-html-select select[class*="bp3-intent"].bp3-disabled,
          .bp3-control-group .bp3-select select[class*="bp3-intent"][readonly],
          .bp3-control-group .bp3-select select[class*="bp3-intent"]:disabled,
          .bp3-control-group .bp3-select select[class*="bp3-intent"].bp3-disabled{
            z-index:8; }
      .bp3-control-group .bp3-input-group > .bp3-icon,
      .bp3-control-group .bp3-input-group > .bp3-button,
      .bp3-control-group .bp3-input-group > .bp3-input-left-container,
      .bp3-control-group .bp3-input-group > .bp3-input-action{
        z-index:16; }
      .bp3-control-group .bp3-select::after,
      .bp3-control-group .bp3-html-select::after,
      .bp3-control-group .bp3-select > .bp3-icon,
      .bp3-control-group .bp3-html-select > .bp3-icon{
        z-index:17; }
      .bp3-control-group .bp3-select:focus-within{
        z-index:5; }
      .bp3-control-group:not(.bp3-vertical) > *:not(.bp3-divider){
        margin-right:-1px; }
      .bp3-control-group:not(.bp3-vertical) > .bp3-divider:not(:first-child){
        margin-left:6px; }
      .bp3-dark .bp3-control-group:not(.bp3-vertical) > *:not(.bp3-divider){
        margin-right:0; }
      .bp3-dark .bp3-control-group:not(.bp3-vertical) > .bp3-button + .bp3-button{
        margin-left:1px; }
      .bp3-control-group .bp3-popover-wrapper,
      .bp3-control-group .bp3-popover-target{
        border-radius:inherit; }
      .bp3-control-group > :first-child{
        border-radius:3px 0 0 3px; }
      .bp3-control-group > :last-child{
        border-radius:0 3px 3px 0;
        margin-right:0; }
      .bp3-control-group > :only-child{
        border-radius:3px;
        margin-right:0; }
      .bp3-control-group .bp3-input-group .bp3-button{
        border-radius:3px; }
      .bp3-control-group .bp3-numeric-input:not(:first-child) .bp3-input-group{
        border-bottom-left-radius:0;
        border-top-left-radius:0; }
      .bp3-control-group.bp3-fill{
        width:100%; }
      .bp3-control-group > .bp3-fill{
        -webkit-box-flex:1;
            -ms-flex:1 1 auto;
                flex:1 1 auto; }
      .bp3-control-group.bp3-fill > *:not(.bp3-fixed){
        -webkit-box-flex:1;
            -ms-flex:1 1 auto;
                flex:1 1 auto; }
      .bp3-control-group.bp3-vertical{
        -webkit-box-orient:vertical;
        -webkit-box-direction:normal;
            -ms-flex-direction:column;
                flex-direction:column; }
        .bp3-control-group.bp3-vertical > *{
          margin-top:-1px; }
        .bp3-control-group.bp3-vertical > :first-child{
          border-radius:3px 3px 0 0;
          margin-top:0; }
        .bp3-control-group.bp3-vertical > :last-child{
          border-radius:0 0 3px 3px; }
    .bp3-control{
      cursor:pointer;
      display:block;
      margin-bottom:10px;
      position:relative;
      text-transform:none; }
      .bp3-control input:checked ~ .bp3-control-indicator{
        background-color:#137cbd;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
        color:#ffffff; }
      .bp3-control:hover input:checked ~ .bp3-control-indicator{
        background-color:#106ba3;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
      .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{
        background:#0e5a8a;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-control input:disabled:checked ~ .bp3-control-indicator{
        background:rgba(19, 124, 189, 0.5);
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-dark .bp3-control input:checked ~ .bp3-control-indicator{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-control:hover input:checked ~ .bp3-control-indicator{
        background-color:#106ba3;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{
        background-color:#0e5a8a;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-dark .bp3-control input:disabled:checked ~ .bp3-control-indicator{
        background:rgba(14, 90, 138, 0.5);
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-control:not(.bp3-align-right){
        padding-left:26px; }
        .bp3-control:not(.bp3-align-right) .bp3-control-indicator{
          margin-left:-26px; }
      .bp3-control.bp3-align-right{
        padding-right:26px; }
        .bp3-control.bp3-align-right .bp3-control-indicator{
          margin-right:-26px; }
      .bp3-control.bp3-disabled{
        color:rgba(92, 112, 128, 0.6);
        cursor:not-allowed; }
      .bp3-control.bp3-inline{
        display:inline-block;
        margin-right:20px; }
      .bp3-control input{
        left:0;
        opacity:0;
        position:absolute;
        top:0;
        z-index:-1; }
      .bp3-control .bp3-control-indicator{
        background-clip:padding-box;
        background-color:#f5f8fa;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
        border:none;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
        cursor:pointer;
        display:inline-block;
        font-size:16px;
        height:1em;
        margin-right:10px;
        margin-top:-3px;
        position:relative;
        -webkit-user-select:none;
           -moz-user-select:none;
            -ms-user-select:none;
                user-select:none;
        vertical-align:middle;
        width:1em; }
        .bp3-control .bp3-control-indicator::before{
          content:"";
          display:block;
          height:1em;
          width:1em; }
      .bp3-control:hover .bp3-control-indicator{
        background-color:#ebf1f5; }
      .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{
        background:#d8e1e8;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-control input:disabled ~ .bp3-control-indicator{
        background:rgba(206, 217, 224, 0.5);
        -webkit-box-shadow:none;
                box-shadow:none;
        cursor:not-allowed; }
      .bp3-control input:focus ~ .bp3-control-indicator{
        outline:rgba(19, 124, 189, 0.6) auto 2px;
        outline-offset:2px;
        -moz-outline-radius:6px; }
      .bp3-control.bp3-align-right .bp3-control-indicator{
        float:right;
        margin-left:10px;
        margin-top:1px; }
      .bp3-control.bp3-large{
        font-size:16px; }
        .bp3-control.bp3-large:not(.bp3-align-right){
          padding-left:30px; }
          .bp3-control.bp3-large:not(.bp3-align-right) .bp3-control-indicator{
            margin-left:-30px; }
        .bp3-control.bp3-large.bp3-align-right{
          padding-right:30px; }
          .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{
            margin-right:-30px; }
        .bp3-control.bp3-large .bp3-control-indicator{
          font-size:20px; }
        .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{
          margin-top:0; }
      .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{
        background-color:#137cbd;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
        color:#ffffff; }
      .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{
        background-color:#106ba3;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
      .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{
        background:#0e5a8a;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
        background:rgba(19, 124, 189, 0.5);
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-dark .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{
        background-color:#106ba3;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{
        background-color:#0e5a8a;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
        background:rgba(14, 90, 138, 0.5);
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-control.bp3-checkbox .bp3-control-indicator{
        border-radius:3px; }
      .bp3-control.bp3-checkbox input:checked ~ .bp3-control-indicator::before{
        background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='white'/%3e%3c/svg%3e"); }
      .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator::before{
        background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z' fill='white'/%3e%3c/svg%3e"); }
      .bp3-control.bp3-radio .bp3-control-indicator{
        border-radius:50%; }
      .bp3-control.bp3-radio input:checked ~ .bp3-control-indicator::before{
        background-image:radial-gradient(#ffffff, #ffffff 28%, transparent 32%); }
      .bp3-control.bp3-radio input:checked:disabled ~ .bp3-control-indicator::before{
        opacity:0.5; }
      .bp3-control.bp3-radio input:focus ~ .bp3-control-indicator{
        -moz-outline-radius:16px; }
      .bp3-control.bp3-switch input ~ .bp3-control-indicator{
        background:rgba(167, 182, 194, 0.5); }
      .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{
        background:rgba(115, 134, 148, 0.5); }
      .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{
        background:rgba(92, 112, 128, 0.5); }
      .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{
        background:rgba(206, 217, 224, 0.5); }
        .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{
          background:rgba(255, 255, 255, 0.8); }
      .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{
        background:#137cbd; }
      .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{
        background:#106ba3; }
      .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{
        background:#0e5a8a; }
      .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{
        background:rgba(19, 124, 189, 0.5); }
        .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{
          background:rgba(255, 255, 255, 0.8); }
      .bp3-control.bp3-switch:not(.bp3-align-right){
        padding-left:38px; }
        .bp3-control.bp3-switch:not(.bp3-align-right) .bp3-control-indicator{
          margin-left:-38px; }
      .bp3-control.bp3-switch.bp3-align-right{
        padding-right:38px; }
        .bp3-control.bp3-switch.bp3-align-right .bp3-control-indicator{
          margin-right:-38px; }
      .bp3-control.bp3-switch .bp3-control-indicator{
        border:none;
        border-radius:1.75em;
        -webkit-box-shadow:none !important;
                box-shadow:none !important;
        min-width:1.75em;
        -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
        transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
        width:auto; }
        .bp3-control.bp3-switch .bp3-control-indicator::before{
          background:#ffffff;
          border-radius:50%;
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
          height:calc(1em - 4px);
          left:0;
          margin:2px;
          position:absolute;
          -webkit-transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
          transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
          width:calc(1em - 4px); }
      .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{
        left:calc(100% - 1em); }
      .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right){
        padding-left:45px; }
        .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right) .bp3-control-indicator{
          margin-left:-45px; }
      .bp3-control.bp3-switch.bp3-large.bp3-align-right{
        padding-right:45px; }
        .bp3-control.bp3-switch.bp3-large.bp3-align-right .bp3-control-indicator{
          margin-right:-45px; }
      .bp3-dark .bp3-control.bp3-switch input ~ .bp3-control-indicator{
        background:rgba(16, 22, 26, 0.5); }
      .bp3-dark .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{
        background:rgba(16, 22, 26, 0.7); }
      .bp3-dark .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{
        background:rgba(16, 22, 26, 0.9); }
      .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{
        background:rgba(57, 75, 89, 0.5); }
        .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{
          background:rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{
        background:#137cbd; }
      .bp3-dark .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{
        background:#106ba3; }
      .bp3-dark .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{
        background:#0e5a8a; }
      .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{
        background:rgba(14, 90, 138, 0.5); }
        .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{
          background:rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-control.bp3-switch .bp3-control-indicator::before{
        background:#394b59;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
      .bp3-control.bp3-switch .bp3-switch-inner-text{
        font-size:0.7em;
        text-align:center; }
      .bp3-control.bp3-switch .bp3-control-indicator-child:first-child{
        line-height:0;
        margin-left:0.5em;
        margin-right:1.2em;
        visibility:hidden; }
      .bp3-control.bp3-switch .bp3-control-indicator-child:last-child{
        line-height:1em;
        margin-left:1.2em;
        margin-right:0.5em;
        visibility:visible; }
      .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:first-child{
        line-height:1em;
        visibility:visible; }
      .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:last-child{
        line-height:0;
        visibility:hidden; }
      .bp3-dark .bp3-control{
        color:#f5f8fa; }
        .bp3-dark .bp3-control.bp3-disabled{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-control .bp3-control-indicator{
          background-color:#394b59;
          background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
          background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-control:hover .bp3-control-indicator{
          background-color:#30404d; }
        .bp3-dark .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{
          background:#202b33;
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
        .bp3-dark .bp3-control input:disabled ~ .bp3-control-indicator{
          background:rgba(57, 75, 89, 0.5);
          -webkit-box-shadow:none;
                  box-shadow:none;
          cursor:not-allowed; }
        .bp3-dark .bp3-control.bp3-checkbox input:disabled:checked ~ .bp3-control-indicator, .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
          color:rgba(167, 182, 194, 0.6); }
    .bp3-file-input{
      cursor:pointer;
      display:inline-block;
      height:30px;
      position:relative; }
      .bp3-file-input input{
        margin:0;
        min-width:200px;
        opacity:0; }
        .bp3-file-input input:disabled + .bp3-file-upload-input,
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{
          background:rgba(206, 217, 224, 0.5);
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(92, 112, 128, 0.6);
          cursor:not-allowed;
          resize:none; }
          .bp3-file-input input:disabled + .bp3-file-upload-input::after,
          .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{
            background-color:rgba(206, 217, 224, 0.5);
            background-image:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:rgba(92, 112, 128, 0.6);
            cursor:not-allowed;
            outline:none; }
            .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active:hover,
            .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active,
            .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active:hover{
              background:rgba(206, 217, 224, 0.7); }
          .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input, .bp3-dark
          .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{
            background:rgba(57, 75, 89, 0.5);
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:rgba(167, 182, 194, 0.6); }
            .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after, .bp3-dark
            .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{
              background-color:rgba(57, 75, 89, 0.5);
              background-image:none;
              -webkit-box-shadow:none;
                      box-shadow:none;
              color:rgba(167, 182, 194, 0.6); }
              .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-dark
              .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active{
                background:rgba(57, 75, 89, 0.7); }
      .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{
        color:#182026; }
      .bp3-dark .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{
        color:#f5f8fa; }
      .bp3-file-input.bp3-fill{
        width:100%; }
      .bp3-file-input.bp3-large,
      .bp3-large .bp3-file-input{
        height:40px; }
      .bp3-file-input .bp3-file-upload-input-custom-text::after{
        content:attr(bp3-button-text); }
    
    .bp3-file-upload-input{
      -webkit-appearance:none;
         -moz-appearance:none;
              appearance:none;
      background:#ffffff;
      border:none;
      border-radius:3px;
      -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
      color:#182026;
      font-size:14px;
      font-weight:400;
      height:30px;
      line-height:30px;
      outline:none;
      padding:0 10px;
      -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      vertical-align:middle;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      word-wrap:normal;
      color:rgba(92, 112, 128, 0.6);
      left:0;
      padding-right:80px;
      position:absolute;
      right:0;
      top:0;
      -webkit-user-select:none;
         -moz-user-select:none;
          -ms-user-select:none;
              user-select:none; }
      .bp3-file-upload-input::-webkit-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-file-upload-input::-moz-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-file-upload-input:-ms-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-file-upload-input::-ms-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-file-upload-input::placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-file-upload-input:focus, .bp3-file-upload-input.bp3-active{
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
      .bp3-file-upload-input[type="search"], .bp3-file-upload-input.bp3-round{
        border-radius:30px;
        -webkit-box-sizing:border-box;
                box-sizing:border-box;
        padding-left:10px; }
      .bp3-file-upload-input[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
      .bp3-file-upload-input:disabled, .bp3-file-upload-input.bp3-disabled{
        background:rgba(206, 217, 224, 0.5);
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(92, 112, 128, 0.6);
        cursor:not-allowed;
        resize:none; }
      .bp3-file-upload-input::after{
        background-color:#f5f8fa;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
        color:#182026;
        min-height:24px;
        min-width:24px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        word-wrap:normal;
        border-radius:3px;
        content:"Browse";
        line-height:24px;
        margin:3px;
        position:absolute;
        right:0;
        text-align:center;
        top:0;
        width:70px; }
        .bp3-file-upload-input::after:hover{
          background-clip:padding-box;
          background-color:#ebf1f5;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
        .bp3-file-upload-input::after:active, .bp3-file-upload-input::after.bp3-active{
          background-color:#d8e1e8;
          background-image:none;
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
        .bp3-file-upload-input::after:disabled, .bp3-file-upload-input::after.bp3-disabled{
          background-color:rgba(206, 217, 224, 0.5);
          background-image:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(92, 112, 128, 0.6);
          cursor:not-allowed;
          outline:none; }
          .bp3-file-upload-input::after:disabled.bp3-active, .bp3-file-upload-input::after:disabled.bp3-active:hover, .bp3-file-upload-input::after.bp3-disabled.bp3-active, .bp3-file-upload-input::after.bp3-disabled.bp3-active:hover{
            background:rgba(206, 217, 224, 0.7); }
      .bp3-file-upload-input:hover::after{
        background-clip:padding-box;
        background-color:#ebf1f5;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
      .bp3-file-upload-input:active::after{
        background-color:#d8e1e8;
        background-image:none;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-large .bp3-file-upload-input{
        font-size:16px;
        height:40px;
        line-height:40px;
        padding-right:95px; }
        .bp3-large .bp3-file-upload-input[type="search"], .bp3-large .bp3-file-upload-input.bp3-round{
          padding:0 15px; }
        .bp3-large .bp3-file-upload-input::after{
          min-height:30px;
          min-width:30px;
          line-height:30px;
          margin:5px;
          width:85px; }
      .bp3-dark .bp3-file-upload-input{
        background:rgba(16, 22, 26, 0.3);
        -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
        color:#f5f8fa;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input::-webkit-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input::-moz-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input:-ms-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input::-ms-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input::placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input:focus{
          -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-file-upload-input[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-file-upload-input:disabled, .bp3-dark .bp3-file-upload-input.bp3-disabled{
          background:rgba(57, 75, 89, 0.5);
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input::after{
          background-color:#394b59;
          background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
          background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
          color:#f5f8fa; }
          .bp3-dark .bp3-file-upload-input::after:hover, .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{
            color:#f5f8fa; }
          .bp3-dark .bp3-file-upload-input::after:hover{
            background-color:#30404d;
            -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                    box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
          .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{
            background-color:#202b33;
            background-image:none;
            -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                    box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
          .bp3-dark .bp3-file-upload-input::after:disabled, .bp3-dark .bp3-file-upload-input::after.bp3-disabled{
            background-color:rgba(57, 75, 89, 0.5);
            background-image:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            color:rgba(167, 182, 194, 0.6); }
            .bp3-dark .bp3-file-upload-input::after:disabled.bp3-active, .bp3-dark .bp3-file-upload-input::after.bp3-disabled.bp3-active{
              background:rgba(57, 75, 89, 0.7); }
          .bp3-dark .bp3-file-upload-input::after .bp3-button-spinner .bp3-spinner-head{
            background:rgba(16, 22, 26, 0.5);
            stroke:#8a9ba8; }
        .bp3-dark .bp3-file-upload-input:hover::after{
          background-color:#30404d;
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-file-upload-input:active::after{
          background-color:#202b33;
          background-image:none;
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-file-upload-input::after{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
    .bp3-form-group{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;
      margin:0 0 15px; }
      .bp3-form-group label.bp3-label{
        margin-bottom:5px; }
      .bp3-form-group .bp3-control{
        margin-top:7px; }
      .bp3-form-group .bp3-form-helper-text{
        color:#5c7080;
        font-size:12px;
        margin-top:5px; }
      .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{
        color:#106ba3; }
      .bp3-form-group.bp3-intent-success .bp3-form-helper-text{
        color:#0d8050; }
      .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{
        color:#bf7326; }
      .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{
        color:#c23030; }
      .bp3-form-group.bp3-inline{
        -webkit-box-align:start;
            -ms-flex-align:start;
                align-items:flex-start;
        -webkit-box-orient:horizontal;
        -webkit-box-direction:normal;
            -ms-flex-direction:row;
                flex-direction:row; }
        .bp3-form-group.bp3-inline.bp3-large label.bp3-label{
          line-height:40px;
          margin:0 10px 0 0; }
        .bp3-form-group.bp3-inline label.bp3-label{
          line-height:30px;
          margin:0 10px 0 0; }
      .bp3-form-group.bp3-disabled .bp3-label,
      .bp3-form-group.bp3-disabled .bp3-text-muted,
      .bp3-form-group.bp3-disabled .bp3-form-helper-text{
        color:rgba(92, 112, 128, 0.6) !important; }
      .bp3-dark .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{
        color:#48aff0; }
      .bp3-dark .bp3-form-group.bp3-intent-success .bp3-form-helper-text{
        color:#3dcc91; }
      .bp3-dark .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{
        color:#ffb366; }
      .bp3-dark .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{
        color:#ff7373; }
      .bp3-dark .bp3-form-group .bp3-form-helper-text{
        color:#a7b6c2; }
      .bp3-dark .bp3-form-group.bp3-disabled .bp3-label,
      .bp3-dark .bp3-form-group.bp3-disabled .bp3-text-muted,
      .bp3-dark .bp3-form-group.bp3-disabled .bp3-form-helper-text{
        color:rgba(167, 182, 194, 0.6) !important; }
    .bp3-input-group{
      display:block;
      position:relative; }
      .bp3-input-group .bp3-input{
        position:relative;
        width:100%; }
        .bp3-input-group .bp3-input:not(:first-child){
          padding-left:30px; }
        .bp3-input-group .bp3-input:not(:last-child){
          padding-right:30px; }
      .bp3-input-group .bp3-input-action,
      .bp3-input-group > .bp3-input-left-container,
      .bp3-input-group > .bp3-button,
      .bp3-input-group > .bp3-icon{
        position:absolute;
        top:0; }
        .bp3-input-group .bp3-input-action:first-child,
        .bp3-input-group > .bp3-input-left-container:first-child,
        .bp3-input-group > .bp3-button:first-child,
        .bp3-input-group > .bp3-icon:first-child{
          left:0; }
        .bp3-input-group .bp3-input-action:last-child,
        .bp3-input-group > .bp3-input-left-container:last-child,
        .bp3-input-group > .bp3-button:last-child,
        .bp3-input-group > .bp3-icon:last-child{
          right:0; }
      .bp3-input-group .bp3-button{
        min-height:24px;
        min-width:24px;
        margin:3px;
        padding:0 7px; }
        .bp3-input-group .bp3-button:empty{
          padding:0; }
      .bp3-input-group > .bp3-input-left-container,
      .bp3-input-group > .bp3-icon{
        z-index:1; }
      .bp3-input-group > .bp3-input-left-container > .bp3-icon,
      .bp3-input-group > .bp3-icon{
        color:#5c7080; }
        .bp3-input-group > .bp3-input-left-container > .bp3-icon:empty,
        .bp3-input-group > .bp3-icon:empty{
          font-family:"Icons16", sans-serif;
          font-size:16px;
          font-style:normal;
          font-weight:400;
          line-height:1;
          -moz-osx-font-smoothing:grayscale;
          -webkit-font-smoothing:antialiased; }
      .bp3-input-group > .bp3-input-left-container > .bp3-icon,
      .bp3-input-group > .bp3-icon,
      .bp3-input-group .bp3-input-action > .bp3-spinner{
        margin:7px; }
      .bp3-input-group .bp3-tag{
        margin:5px; }
      .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus),
      .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){
        color:#5c7080; }
        .bp3-dark .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus), .bp3-dark
        .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){
          color:#a7b6c2; }
        .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large,
        .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon,
        .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard,
        .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large{
          color:#5c7080; }
      .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled,
      .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled{
        color:rgba(92, 112, 128, 0.6) !important; }
        .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-large,
        .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon,
        .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-standard,
        .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-large{
          color:rgba(92, 112, 128, 0.6) !important; }
      .bp3-input-group.bp3-disabled{
        cursor:not-allowed; }
        .bp3-input-group.bp3-disabled .bp3-icon{
          color:rgba(92, 112, 128, 0.6); }
      .bp3-input-group.bp3-large .bp3-button{
        min-height:30px;
        min-width:30px;
        margin:5px; }
      .bp3-input-group.bp3-large > .bp3-input-left-container > .bp3-icon,
      .bp3-input-group.bp3-large > .bp3-icon,
      .bp3-input-group.bp3-large .bp3-input-action > .bp3-spinner{
        margin:12px; }
      .bp3-input-group.bp3-large .bp3-input{
        font-size:16px;
        height:40px;
        line-height:40px; }
        .bp3-input-group.bp3-large .bp3-input[type="search"], .bp3-input-group.bp3-large .bp3-input.bp3-round{
          padding:0 15px; }
        .bp3-input-group.bp3-large .bp3-input:not(:first-child){
          padding-left:40px; }
        .bp3-input-group.bp3-large .bp3-input:not(:last-child){
          padding-right:40px; }
      .bp3-input-group.bp3-small .bp3-button{
        min-height:20px;
        min-width:20px;
        margin:2px; }
      .bp3-input-group.bp3-small .bp3-tag{
        min-height:20px;
        min-width:20px;
        margin:2px; }
      .bp3-input-group.bp3-small > .bp3-input-left-container > .bp3-icon,
      .bp3-input-group.bp3-small > .bp3-icon,
      .bp3-input-group.bp3-small .bp3-input-action > .bp3-spinner{
        margin:4px; }
      .bp3-input-group.bp3-small .bp3-input{
        font-size:12px;
        height:24px;
        line-height:24px;
        padding-left:8px;
        padding-right:8px; }
        .bp3-input-group.bp3-small .bp3-input[type="search"], .bp3-input-group.bp3-small .bp3-input.bp3-round{
          padding:0 12px; }
        .bp3-input-group.bp3-small .bp3-input:not(:first-child){
          padding-left:24px; }
        .bp3-input-group.bp3-small .bp3-input:not(:last-child){
          padding-right:24px; }
      .bp3-input-group.bp3-fill{
        -webkit-box-flex:1;
            -ms-flex:1 1 auto;
                flex:1 1 auto;
        width:100%; }
      .bp3-input-group.bp3-round .bp3-button,
      .bp3-input-group.bp3-round .bp3-input,
      .bp3-input-group.bp3-round .bp3-tag{
        border-radius:30px; }
      .bp3-dark .bp3-input-group .bp3-icon{
        color:#a7b6c2; }
      .bp3-dark .bp3-input-group.bp3-disabled .bp3-icon{
        color:rgba(167, 182, 194, 0.6); }
      .bp3-input-group.bp3-intent-primary .bp3-input{
        -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input-group.bp3-intent-primary .bp3-input:focus{
          -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input-group.bp3-intent-primary .bp3-input[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px #137cbd;
                  box-shadow:inset 0 0 0 1px #137cbd; }
        .bp3-input-group.bp3-intent-primary .bp3-input:disabled, .bp3-input-group.bp3-intent-primary .bp3-input.bp3-disabled{
          -webkit-box-shadow:none;
                  box-shadow:none; }
      .bp3-input-group.bp3-intent-primary > .bp3-icon{
        color:#106ba3; }
        .bp3-dark .bp3-input-group.bp3-intent-primary > .bp3-icon{
          color:#48aff0; }
      .bp3-input-group.bp3-intent-success .bp3-input{
        -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input-group.bp3-intent-success .bp3-input:focus{
          -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input-group.bp3-intent-success .bp3-input[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px #0f9960;
                  box-shadow:inset 0 0 0 1px #0f9960; }
        .bp3-input-group.bp3-intent-success .bp3-input:disabled, .bp3-input-group.bp3-intent-success .bp3-input.bp3-disabled{
          -webkit-box-shadow:none;
                  box-shadow:none; }
      .bp3-input-group.bp3-intent-success > .bp3-icon{
        color:#0d8050; }
        .bp3-dark .bp3-input-group.bp3-intent-success > .bp3-icon{
          color:#3dcc91; }
      .bp3-input-group.bp3-intent-warning .bp3-input{
        -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input-group.bp3-intent-warning .bp3-input:focus{
          -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input-group.bp3-intent-warning .bp3-input[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px #d9822b;
                  box-shadow:inset 0 0 0 1px #d9822b; }
        .bp3-input-group.bp3-intent-warning .bp3-input:disabled, .bp3-input-group.bp3-intent-warning .bp3-input.bp3-disabled{
          -webkit-box-shadow:none;
                  box-shadow:none; }
      .bp3-input-group.bp3-intent-warning > .bp3-icon{
        color:#bf7326; }
        .bp3-dark .bp3-input-group.bp3-intent-warning > .bp3-icon{
          color:#ffb366; }
      .bp3-input-group.bp3-intent-danger .bp3-input{
        -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input-group.bp3-intent-danger .bp3-input:focus{
          -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input-group.bp3-intent-danger .bp3-input[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px #db3737;
                  box-shadow:inset 0 0 0 1px #db3737; }
        .bp3-input-group.bp3-intent-danger .bp3-input:disabled, .bp3-input-group.bp3-intent-danger .bp3-input.bp3-disabled{
          -webkit-box-shadow:none;
                  box-shadow:none; }
      .bp3-input-group.bp3-intent-danger > .bp3-icon{
        color:#c23030; }
        .bp3-dark .bp3-input-group.bp3-intent-danger > .bp3-icon{
          color:#ff7373; }
    .bp3-input{
      -webkit-appearance:none;
         -moz-appearance:none;
              appearance:none;
      background:#ffffff;
      border:none;
      border-radius:3px;
      -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
      color:#182026;
      font-size:14px;
      font-weight:400;
      height:30px;
      line-height:30px;
      outline:none;
      padding:0 10px;
      -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      vertical-align:middle; }
      .bp3-input::-webkit-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-input::-moz-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-input:-ms-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-input::-ms-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-input::placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-input:focus, .bp3-input.bp3-active{
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
      .bp3-input[type="search"], .bp3-input.bp3-round{
        border-radius:30px;
        -webkit-box-sizing:border-box;
                box-sizing:border-box;
        padding-left:10px; }
      .bp3-input[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
      .bp3-input:disabled, .bp3-input.bp3-disabled{
        background:rgba(206, 217, 224, 0.5);
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(92, 112, 128, 0.6);
        cursor:not-allowed;
        resize:none; }
      .bp3-input.bp3-large{
        font-size:16px;
        height:40px;
        line-height:40px; }
        .bp3-input.bp3-large[type="search"], .bp3-input.bp3-large.bp3-round{
          padding:0 15px; }
      .bp3-input.bp3-small{
        font-size:12px;
        height:24px;
        line-height:24px;
        padding-left:8px;
        padding-right:8px; }
        .bp3-input.bp3-small[type="search"], .bp3-input.bp3-small.bp3-round{
          padding:0 12px; }
      .bp3-input.bp3-fill{
        -webkit-box-flex:1;
            -ms-flex:1 1 auto;
                flex:1 1 auto;
        width:100%; }
      .bp3-dark .bp3-input{
        background:rgba(16, 22, 26, 0.3);
        -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
        color:#f5f8fa; }
        .bp3-dark .bp3-input::-webkit-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-input::-moz-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-input:-ms-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-input::-ms-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-input::placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-input:focus{
          -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-input[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-input:disabled, .bp3-dark .bp3-input.bp3-disabled{
          background:rgba(57, 75, 89, 0.5);
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(167, 182, 194, 0.6); }
      .bp3-input.bp3-intent-primary{
        -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input.bp3-intent-primary:focus{
          -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input.bp3-intent-primary[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px #137cbd;
                  box-shadow:inset 0 0 0 1px #137cbd; }
        .bp3-input.bp3-intent-primary:disabled, .bp3-input.bp3-intent-primary.bp3-disabled{
          -webkit-box-shadow:none;
                  box-shadow:none; }
        .bp3-dark .bp3-input.bp3-intent-primary{
          -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
          .bp3-dark .bp3-input.bp3-intent-primary:focus{
            -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                    box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
          .bp3-dark .bp3-input.bp3-intent-primary[readonly]{
            -webkit-box-shadow:inset 0 0 0 1px #137cbd;
                    box-shadow:inset 0 0 0 1px #137cbd; }
          .bp3-dark .bp3-input.bp3-intent-primary:disabled, .bp3-dark .bp3-input.bp3-intent-primary.bp3-disabled{
            -webkit-box-shadow:none;
                    box-shadow:none; }
      .bp3-input.bp3-intent-success{
        -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input.bp3-intent-success:focus{
          -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input.bp3-intent-success[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px #0f9960;
                  box-shadow:inset 0 0 0 1px #0f9960; }
        .bp3-input.bp3-intent-success:disabled, .bp3-input.bp3-intent-success.bp3-disabled{
          -webkit-box-shadow:none;
                  box-shadow:none; }
        .bp3-dark .bp3-input.bp3-intent-success{
          -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
          .bp3-dark .bp3-input.bp3-intent-success:focus{
            -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                    box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
          .bp3-dark .bp3-input.bp3-intent-success[readonly]{
            -webkit-box-shadow:inset 0 0 0 1px #0f9960;
                    box-shadow:inset 0 0 0 1px #0f9960; }
          .bp3-dark .bp3-input.bp3-intent-success:disabled, .bp3-dark .bp3-input.bp3-intent-success.bp3-disabled{
            -webkit-box-shadow:none;
                    box-shadow:none; }
      .bp3-input.bp3-intent-warning{
        -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input.bp3-intent-warning:focus{
          -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input.bp3-intent-warning[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px #d9822b;
                  box-shadow:inset 0 0 0 1px #d9822b; }
        .bp3-input.bp3-intent-warning:disabled, .bp3-input.bp3-intent-warning.bp3-disabled{
          -webkit-box-shadow:none;
                  box-shadow:none; }
        .bp3-dark .bp3-input.bp3-intent-warning{
          -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
          .bp3-dark .bp3-input.bp3-intent-warning:focus{
            -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                    box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
          .bp3-dark .bp3-input.bp3-intent-warning[readonly]{
            -webkit-box-shadow:inset 0 0 0 1px #d9822b;
                    box-shadow:inset 0 0 0 1px #d9822b; }
          .bp3-dark .bp3-input.bp3-intent-warning:disabled, .bp3-dark .bp3-input.bp3-intent-warning.bp3-disabled{
            -webkit-box-shadow:none;
                    box-shadow:none; }
      .bp3-input.bp3-intent-danger{
        -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input.bp3-intent-danger:focus{
          -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-input.bp3-intent-danger[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px #db3737;
                  box-shadow:inset 0 0 0 1px #db3737; }
        .bp3-input.bp3-intent-danger:disabled, .bp3-input.bp3-intent-danger.bp3-disabled{
          -webkit-box-shadow:none;
                  box-shadow:none; }
        .bp3-dark .bp3-input.bp3-intent-danger{
          -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
          .bp3-dark .bp3-input.bp3-intent-danger:focus{
            -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                    box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
          .bp3-dark .bp3-input.bp3-intent-danger[readonly]{
            -webkit-box-shadow:inset 0 0 0 1px #db3737;
                    box-shadow:inset 0 0 0 1px #db3737; }
          .bp3-dark .bp3-input.bp3-intent-danger:disabled, .bp3-dark .bp3-input.bp3-intent-danger.bp3-disabled{
            -webkit-box-shadow:none;
                    box-shadow:none; }
      .bp3-input::-ms-clear{
        display:none; }
    textarea.bp3-input{
      max-width:100%;
      padding:10px; }
      textarea.bp3-input, textarea.bp3-input.bp3-large, textarea.bp3-input.bp3-small{
        height:auto;
        line-height:inherit; }
      textarea.bp3-input.bp3-small{
        padding:8px; }
      .bp3-dark textarea.bp3-input{
        background:rgba(16, 22, 26, 0.3);
        -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
        color:#f5f8fa; }
        .bp3-dark textarea.bp3-input::-webkit-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark textarea.bp3-input::-moz-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark textarea.bp3-input:-ms-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark textarea.bp3-input::-ms-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark textarea.bp3-input::placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark textarea.bp3-input:focus{
          -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark textarea.bp3-input[readonly]{
          -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
                  box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark textarea.bp3-input:disabled, .bp3-dark textarea.bp3-input.bp3-disabled{
          background:rgba(57, 75, 89, 0.5);
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(167, 182, 194, 0.6); }
    label.bp3-label{
      display:block;
      margin-bottom:15px;
      margin-top:0; }
      label.bp3-label .bp3-html-select,
      label.bp3-label .bp3-input,
      label.bp3-label .bp3-select,
      label.bp3-label .bp3-slider,
      label.bp3-label .bp3-popover-wrapper{
        display:block;
        margin-top:5px;
        text-transform:none; }
      label.bp3-label .bp3-button-group{
        margin-top:5px; }
      label.bp3-label .bp3-select select,
      label.bp3-label .bp3-html-select select{
        font-weight:400;
        vertical-align:top;
        width:100%; }
      label.bp3-label.bp3-disabled,
      label.bp3-label.bp3-disabled .bp3-text-muted{
        color:rgba(92, 112, 128, 0.6); }
      label.bp3-label.bp3-inline{
        line-height:30px; }
        label.bp3-label.bp3-inline .bp3-html-select,
        label.bp3-label.bp3-inline .bp3-input,
        label.bp3-label.bp3-inline .bp3-input-group,
        label.bp3-label.bp3-inline .bp3-select,
        label.bp3-label.bp3-inline .bp3-popover-wrapper{
          display:inline-block;
          margin:0 0 0 5px;
          vertical-align:top; }
        label.bp3-label.bp3-inline .bp3-button-group{
          margin:0 0 0 5px; }
        label.bp3-label.bp3-inline .bp3-input-group .bp3-input{
          margin-left:0; }
        label.bp3-label.bp3-inline.bp3-large{
          line-height:40px; }
      label.bp3-label:not(.bp3-inline) .bp3-popover-target{
        display:block; }
      .bp3-dark label.bp3-label{
        color:#f5f8fa; }
        .bp3-dark label.bp3-label.bp3-disabled,
        .bp3-dark label.bp3-label.bp3-disabled .bp3-text-muted{
          color:rgba(167, 182, 194, 0.6); }
    .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button{
      -webkit-box-flex:1;
          -ms-flex:1 1 14px;
              flex:1 1 14px;
      min-height:0;
      padding:0;
      width:30px; }
      .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:first-child{
        border-radius:0 3px 0 0; }
      .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:last-child{
        border-radius:0 0 3px 0; }
    
    .bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:first-child{
      border-radius:3px 0 0 0; }
    
    .bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:last-child{
      border-radius:0 0 0 3px; }
    
    .bp3-numeric-input.bp3-large .bp3-button-group.bp3-vertical > .bp3-button{
      width:40px; }
    
    form{
      display:block; }
    .bp3-html-select select,
    .bp3-select select{
      display:-webkit-inline-box;
      display:-ms-inline-flexbox;
      display:inline-flex;
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      border:none;
      border-radius:3px;
      cursor:pointer;
      font-size:14px;
      -webkit-box-pack:center;
          -ms-flex-pack:center;
              justify-content:center;
      padding:5px 10px;
      text-align:left;
      vertical-align:middle;
      background-color:#f5f8fa;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      color:#182026;
      -moz-appearance:none;
      -webkit-appearance:none;
      border-radius:3px;
      height:30px;
      padding:0 25px 0 10px;
      width:100%; }
      .bp3-html-select select > *, .bp3-select select > *{
        -webkit-box-flex:0;
            -ms-flex-positive:0;
                flex-grow:0;
        -ms-flex-negative:0;
            flex-shrink:0; }
      .bp3-html-select select > .bp3-fill, .bp3-select select > .bp3-fill{
        -webkit-box-flex:1;
            -ms-flex-positive:1;
                flex-grow:1;
        -ms-flex-negative:1;
            flex-shrink:1; }
      .bp3-html-select select::before,
      .bp3-select select::before, .bp3-html-select select > *, .bp3-select select > *{
        margin-right:7px; }
      .bp3-html-select select:empty::before,
      .bp3-select select:empty::before,
      .bp3-html-select select > :last-child,
      .bp3-select select > :last-child{
        margin-right:0; }
      .bp3-html-select select:hover,
      .bp3-select select:hover{
        background-clip:padding-box;
        background-color:#ebf1f5;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
      .bp3-html-select select:active,
      .bp3-select select:active, .bp3-html-select select.bp3-active,
      .bp3-select select.bp3-active{
        background-color:#d8e1e8;
        background-image:none;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-html-select select:disabled,
      .bp3-select select:disabled, .bp3-html-select select.bp3-disabled,
      .bp3-select select.bp3-disabled{
        background-color:rgba(206, 217, 224, 0.5);
        background-image:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(92, 112, 128, 0.6);
        cursor:not-allowed;
        outline:none; }
        .bp3-html-select select:disabled.bp3-active,
        .bp3-select select:disabled.bp3-active, .bp3-html-select select:disabled.bp3-active:hover,
        .bp3-select select:disabled.bp3-active:hover, .bp3-html-select select.bp3-disabled.bp3-active,
        .bp3-select select.bp3-disabled.bp3-active, .bp3-html-select select.bp3-disabled.bp3-active:hover,
        .bp3-select select.bp3-disabled.bp3-active:hover{
          background:rgba(206, 217, 224, 0.7); }
    
    .bp3-html-select.bp3-minimal select,
    .bp3-select.bp3-minimal select{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none; }
      .bp3-html-select.bp3-minimal select:hover,
      .bp3-select.bp3-minimal select:hover{
        background:rgba(167, 182, 194, 0.3);
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#182026;
        text-decoration:none; }
      .bp3-html-select.bp3-minimal select:active,
      .bp3-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal select.bp3-active,
      .bp3-select.bp3-minimal select.bp3-active{
        background:rgba(115, 134, 148, 0.3);
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#182026; }
      .bp3-html-select.bp3-minimal select:disabled,
      .bp3-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal select:disabled:hover,
      .bp3-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal select.bp3-disabled,
      .bp3-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal select.bp3-disabled:hover,
      .bp3-select.bp3-minimal select.bp3-disabled:hover{
        background:none;
        color:rgba(92, 112, 128, 0.6);
        cursor:not-allowed; }
        .bp3-html-select.bp3-minimal select:disabled.bp3-active,
        .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active,
        .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active,
        .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active,
        .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active{
          background:rgba(115, 134, 148, 0.3); }
      .bp3-dark .bp3-html-select.bp3-minimal select, .bp3-html-select.bp3-minimal .bp3-dark select,
      .bp3-dark .bp3-select.bp3-minimal select, .bp3-select.bp3-minimal .bp3-dark select{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:inherit; }
        .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,
        .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover, .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,
        .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{
          background:none;
          -webkit-box-shadow:none;
                  box-shadow:none; }
        .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,
        .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover{
          background:rgba(138, 155, 168, 0.15); }
        .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,
        .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{
          background:rgba(138, 155, 168, 0.3);
          color:#f5f8fa; }
        .bp3-dark .bp3-html-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal .bp3-dark select:disabled,
        .bp3-dark .bp3-select.bp3-minimal select:disabled, .bp3-select.bp3-minimal .bp3-dark select:disabled, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover,
        .bp3-dark .bp3-select.bp3-minimal select:disabled:hover, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover{
          background:none;
          color:rgba(167, 182, 194, 0.6);
          cursor:not-allowed; }
          .bp3-dark .bp3-html-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled.bp3-active,
          .bp3-dark .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active,
          .bp3-dark .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active{
            background:rgba(138, 155, 168, 0.3); }
      .bp3-html-select.bp3-minimal select.bp3-intent-primary,
      .bp3-select.bp3-minimal select.bp3-intent-primary{
        color:#106ba3; }
        .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,
        .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,
        .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,
        .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{
          background:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:#106ba3; }
        .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,
        .bp3-select.bp3-minimal select.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.15);
          color:#106ba3; }
        .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,
        .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,
        .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#106ba3; }
        .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled,
        .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled,
        .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(16, 107, 163, 0.5); }
          .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active,
          .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active,
          .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
        .bp3-html-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
          stroke:#106ba3; }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary{
          color:#48aff0; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover{
            background:rgba(19, 124, 189, 0.2);
            color:#48aff0; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active{
            background:rgba(19, 124, 189, 0.3);
            color:#48aff0; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled{
            background:none;
            color:rgba(72, 175, 240, 0.5); }
            .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active,
            .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active,
            .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active{
              background:rgba(19, 124, 189, 0.3); }
      .bp3-html-select.bp3-minimal select.bp3-intent-success,
      .bp3-select.bp3-minimal select.bp3-intent-success{
        color:#0d8050; }
        .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,
        .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal select.bp3-intent-success:active,
        .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,
        .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{
          background:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:#0d8050; }
        .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,
        .bp3-select.bp3-minimal select.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.15);
          color:#0d8050; }
        .bp3-html-select.bp3-minimal select.bp3-intent-success:active,
        .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,
        .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#0d8050; }
        .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled,
        .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled,
        .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(13, 128, 80, 0.5); }
          .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active,
          .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active,
          .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
        .bp3-html-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
          stroke:#0d8050; }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success{
          color:#3dcc91; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover{
            background:rgba(15, 153, 96, 0.2);
            color:#3dcc91; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:active,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active{
            background:rgba(15, 153, 96, 0.3);
            color:#3dcc91; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled{
            background:none;
            color:rgba(61, 204, 145, 0.5); }
            .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active,
            .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active,
            .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active{
              background:rgba(15, 153, 96, 0.3); }
      .bp3-html-select.bp3-minimal select.bp3-intent-warning,
      .bp3-select.bp3-minimal select.bp3-intent-warning{
        color:#bf7326; }
        .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,
        .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,
        .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,
        .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{
          background:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:#bf7326; }
        .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,
        .bp3-select.bp3-minimal select.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.15);
          color:#bf7326; }
        .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,
        .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,
        .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#bf7326; }
        .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled,
        .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled,
        .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(191, 115, 38, 0.5); }
          .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active,
          .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active,
          .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
        .bp3-html-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
          stroke:#bf7326; }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning{
          color:#ffb366; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover{
            background:rgba(217, 130, 43, 0.2);
            color:#ffb366; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active{
            background:rgba(217, 130, 43, 0.3);
            color:#ffb366; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled{
            background:none;
            color:rgba(255, 179, 102, 0.5); }
            .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active,
            .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active,
            .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active{
              background:rgba(217, 130, 43, 0.3); }
      .bp3-html-select.bp3-minimal select.bp3-intent-danger,
      .bp3-select.bp3-minimal select.bp3-intent-danger{
        color:#c23030; }
        .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,
        .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,
        .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,
        .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{
          background:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:#c23030; }
        .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,
        .bp3-select.bp3-minimal select.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.15);
          color:#c23030; }
        .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,
        .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,
        .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#c23030; }
        .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled,
        .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled,
        .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(194, 48, 48, 0.5); }
          .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active,
          .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active,
          .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }
        .bp3-html-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
          stroke:#c23030; }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger{
          color:#ff7373; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover{
            background:rgba(219, 55, 55, 0.2);
            color:#ff7373; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active{
            background:rgba(219, 55, 55, 0.3);
            color:#ff7373; }
          .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled,
          .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled{
            background:none;
            color:rgba(255, 115, 115, 0.5); }
            .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active,
            .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active,
            .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active{
              background:rgba(219, 55, 55, 0.3); }
    
    .bp3-html-select.bp3-large select,
    .bp3-select.bp3-large select{
      font-size:16px;
      height:40px;
      padding-right:35px; }
    
    .bp3-dark .bp3-html-select select, .bp3-dark .bp3-select select{
      background-color:#394b59;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      color:#f5f8fa; }
      .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover, .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{
        color:#f5f8fa; }
      .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover{
        background-color:#30404d;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{
        background-color:#202b33;
        background-image:none;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-dark .bp3-html-select select:disabled, .bp3-dark .bp3-select select:disabled, .bp3-dark .bp3-html-select select.bp3-disabled, .bp3-dark .bp3-select select.bp3-disabled{
        background-color:rgba(57, 75, 89, 0.5);
        background-image:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-html-select select:disabled.bp3-active, .bp3-dark .bp3-select select:disabled.bp3-active, .bp3-dark .bp3-html-select select.bp3-disabled.bp3-active, .bp3-dark .bp3-select select.bp3-disabled.bp3-active{
          background:rgba(57, 75, 89, 0.7); }
      .bp3-dark .bp3-html-select select .bp3-button-spinner .bp3-spinner-head, .bp3-dark .bp3-select select .bp3-button-spinner .bp3-spinner-head{
        background:rgba(16, 22, 26, 0.5);
        stroke:#8a9ba8; }
    
    .bp3-html-select select:disabled,
    .bp3-select select:disabled{
      background-color:rgba(206, 217, 224, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed; }
    
    .bp3-html-select .bp3-icon,
    .bp3-select .bp3-icon, .bp3-select::after{
      color:#5c7080;
      pointer-events:none;
      position:absolute;
      right:7px;
      top:7px; }
      .bp3-html-select .bp3-disabled.bp3-icon,
      .bp3-select .bp3-disabled.bp3-icon, .bp3-disabled.bp3-select::after{
        color:rgba(92, 112, 128, 0.6); }
    .bp3-html-select,
    .bp3-select{
      display:inline-block;
      letter-spacing:normal;
      position:relative;
      vertical-align:middle; }
      .bp3-html-select select::-ms-expand,
      .bp3-select select::-ms-expand{
        display:none; }
      .bp3-html-select .bp3-icon,
      .bp3-select .bp3-icon{
        color:#5c7080; }
        .bp3-html-select .bp3-icon:hover,
        .bp3-select .bp3-icon:hover{
          color:#182026; }
        .bp3-dark .bp3-html-select .bp3-icon, .bp3-dark
        .bp3-select .bp3-icon{
          color:#a7b6c2; }
          .bp3-dark .bp3-html-select .bp3-icon:hover, .bp3-dark
          .bp3-select .bp3-icon:hover{
            color:#f5f8fa; }
      .bp3-html-select.bp3-large::after,
      .bp3-html-select.bp3-large .bp3-icon,
      .bp3-select.bp3-large::after,
      .bp3-select.bp3-large .bp3-icon{
        right:12px;
        top:12px; }
      .bp3-html-select.bp3-fill,
      .bp3-html-select.bp3-fill select,
      .bp3-select.bp3-fill,
      .bp3-select.bp3-fill select{
        width:100%; }
      .bp3-dark .bp3-html-select option, .bp3-dark
      .bp3-select option{
        background-color:#30404d;
        color:#f5f8fa; }
      .bp3-dark .bp3-html-select option:disabled, .bp3-dark
      .bp3-select option:disabled{
        color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-html-select::after, .bp3-dark
      .bp3-select::after{
        color:#a7b6c2; }
    
    .bp3-select::after{
      font-family:"Icons16", sans-serif;
      font-size:16px;
      font-style:normal;
      font-weight:400;
      line-height:1;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      content:""; }
    .bp3-running-text table, table.bp3-html-table{
      border-spacing:0;
      font-size:14px; }
      .bp3-running-text table th, table.bp3-html-table th,
      .bp3-running-text table td,
      table.bp3-html-table td{
        padding:11px;
        text-align:left;
        vertical-align:top; }
      .bp3-running-text table th, table.bp3-html-table th{
        color:#182026;
        font-weight:600; }
      
      .bp3-running-text table td,
      table.bp3-html-table td{
        color:#182026; }
      .bp3-running-text table tbody tr:first-child th, table.bp3-html-table tbody tr:first-child th,
      .bp3-running-text table tbody tr:first-child td,
      table.bp3-html-table tbody tr:first-child td,
      .bp3-running-text table tfoot tr:first-child th,
      table.bp3-html-table tfoot tr:first-child th,
      .bp3-running-text table tfoot tr:first-child td,
      table.bp3-html-table tfoot tr:first-child td{
        -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
                box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }
      .bp3-dark .bp3-running-text table th, .bp3-running-text .bp3-dark table th, .bp3-dark table.bp3-html-table th{
        color:#f5f8fa; }
      .bp3-dark .bp3-running-text table td, .bp3-running-text .bp3-dark table td, .bp3-dark table.bp3-html-table td{
        color:#f5f8fa; }
      .bp3-dark .bp3-running-text table tbody tr:first-child th, .bp3-running-text .bp3-dark table tbody tr:first-child th, .bp3-dark table.bp3-html-table tbody tr:first-child th,
      .bp3-dark .bp3-running-text table tbody tr:first-child td,
      .bp3-running-text .bp3-dark table tbody tr:first-child td,
      .bp3-dark table.bp3-html-table tbody tr:first-child td,
      .bp3-dark .bp3-running-text table tfoot tr:first-child th,
      .bp3-running-text .bp3-dark table tfoot tr:first-child th,
      .bp3-dark table.bp3-html-table tfoot tr:first-child th,
      .bp3-dark .bp3-running-text table tfoot tr:first-child td,
      .bp3-running-text .bp3-dark table tfoot tr:first-child td,
      .bp3-dark table.bp3-html-table tfoot tr:first-child td{
        -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
                box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }
    
    table.bp3-html-table.bp3-html-table-condensed th,
    table.bp3-html-table.bp3-html-table-condensed td, table.bp3-html-table.bp3-small th,
    table.bp3-html-table.bp3-small td{
      padding-bottom:6px;
      padding-top:6px; }
    
    table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{
      background:rgba(191, 204, 214, 0.15); }
    
    table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){
      -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
              box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }
    
    table.bp3-html-table.bp3-html-table-bordered tbody tr td,
    table.bp3-html-table.bp3-html-table-bordered tfoot tr td{
      -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
              box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }
      table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child),
      table.bp3-html-table.bp3-html-table-bordered tfoot tr td:not(:first-child){
        -webkit-box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15);
                box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15); }
    
    table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{
      -webkit-box-shadow:none;
              box-shadow:none; }
      table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:not(:first-child){
        -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
                box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }
    
    table.bp3-html-table.bp3-interactive tbody tr:hover td{
      background-color:rgba(191, 204, 214, 0.3);
      cursor:pointer; }
    
    table.bp3-html-table.bp3-interactive tbody tr:active td{
      background-color:rgba(191, 204, 214, 0.4); }
    
    .bp3-dark table.bp3-html-table{ }
      .bp3-dark table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{
        background:rgba(92, 112, 128, 0.15); }
      .bp3-dark table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){
        -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
                box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }
      .bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td,
      .bp3-dark table.bp3-html-table.bp3-html-table-bordered tfoot tr td{
        -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
                box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }
        .bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child),
        .bp3-dark table.bp3-html-table.bp3-html-table-bordered tfoot tr td:not(:first-child){
          -webkit-box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15);
                  box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15); }
      .bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{
        -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
                box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }
        .bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:first-child{
          -webkit-box-shadow:none;
                  box-shadow:none; }
      .bp3-dark table.bp3-html-table.bp3-interactive tbody tr:hover td{
        background-color:rgba(92, 112, 128, 0.3);
        cursor:pointer; }
      .bp3-dark table.bp3-html-table.bp3-interactive tbody tr:active td{
        background-color:rgba(92, 112, 128, 0.4); }
    
    .bp3-key-combo{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center; }
      .bp3-key-combo > *{
        -webkit-box-flex:0;
            -ms-flex-positive:0;
                flex-grow:0;
        -ms-flex-negative:0;
            flex-shrink:0; }
      .bp3-key-combo > .bp3-fill{
        -webkit-box-flex:1;
            -ms-flex-positive:1;
                flex-grow:1;
        -ms-flex-negative:1;
            flex-shrink:1; }
      .bp3-key-combo::before,
      .bp3-key-combo > *{
        margin-right:5px; }
      .bp3-key-combo:empty::before,
      .bp3-key-combo > :last-child{
        margin-right:0; }
    
    .bp3-hotkey-dialog{
      padding-bottom:0;
      top:40px; }
      .bp3-hotkey-dialog .bp3-dialog-body{
        margin:0;
        padding:0; }
      .bp3-hotkey-dialog .bp3-hotkey-label{
        -webkit-box-flex:1;
            -ms-flex-positive:1;
                flex-grow:1; }
    
    .bp3-hotkey-column{
      margin:auto;
      max-height:80vh;
      overflow-y:auto;
      padding:30px; }
      .bp3-hotkey-column .bp3-heading{
        margin-bottom:20px; }
        .bp3-hotkey-column .bp3-heading:not(:first-child){
          margin-top:40px; }
    
    .bp3-hotkey{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-pack:justify;
          -ms-flex-pack:justify;
              justify-content:space-between;
      margin-left:0;
      margin-right:0; }
      .bp3-hotkey:not(:last-child){
        margin-bottom:10px; }
    .bp3-icon{
      display:inline-block;
      -webkit-box-flex:0;
          -ms-flex:0 0 auto;
              flex:0 0 auto;
      vertical-align:text-bottom; }
      .bp3-icon:not(:empty)::before{
        content:"" !important;
        content:unset !important; }
      .bp3-icon > svg{
        display:block; }
        .bp3-icon > svg:not([fill]){
          fill:currentColor; }
    
    .bp3-icon.bp3-intent-primary, .bp3-icon-standard.bp3-intent-primary, .bp3-icon-large.bp3-intent-primary{
      color:#106ba3; }
      .bp3-dark .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-icon-large.bp3-intent-primary{
        color:#48aff0; }
    
    .bp3-icon.bp3-intent-success, .bp3-icon-standard.bp3-intent-success, .bp3-icon-large.bp3-intent-success{
      color:#0d8050; }
      .bp3-dark .bp3-icon.bp3-intent-success, .bp3-dark .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-icon-large.bp3-intent-success{
        color:#3dcc91; }
    
    .bp3-icon.bp3-intent-warning, .bp3-icon-standard.bp3-intent-warning, .bp3-icon-large.bp3-intent-warning{
      color:#bf7326; }
      .bp3-dark .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-icon-large.bp3-intent-warning{
        color:#ffb366; }
    
    .bp3-icon.bp3-intent-danger, .bp3-icon-standard.bp3-intent-danger, .bp3-icon-large.bp3-intent-danger{
      color:#c23030; }
      .bp3-dark .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-icon-large.bp3-intent-danger{
        color:#ff7373; }
    
    span.bp3-icon-standard{
      font-family:"Icons16", sans-serif;
      font-size:16px;
      font-style:normal;
      font-weight:400;
      line-height:1;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      display:inline-block; }
    
    span.bp3-icon-large{
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-style:normal;
      font-weight:400;
      line-height:1;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      display:inline-block; }
    
    span.bp3-icon:empty{
      font-family:"Icons20";
      font-size:inherit;
      font-style:normal;
      font-weight:400;
      line-height:1; }
      span.bp3-icon:empty::before{
        -moz-osx-font-smoothing:grayscale;
        -webkit-font-smoothing:antialiased; }
    
    .bp3-icon-add::before{
      content:""; }
    
    .bp3-icon-add-column-left::before{
      content:""; }
    
    .bp3-icon-add-column-right::before{
      content:""; }
    
    .bp3-icon-add-row-bottom::before{
      content:""; }
    
    .bp3-icon-add-row-top::before{
      content:""; }
    
    .bp3-icon-add-to-artifact::before{
      content:""; }
    
    .bp3-icon-add-to-folder::before{
      content:""; }
    
    .bp3-icon-airplane::before{
      content:""; }
    
    .bp3-icon-align-center::before{
      content:""; }
    
    .bp3-icon-align-justify::before{
      content:""; }
    
    .bp3-icon-align-left::before{
      content:""; }
    
    .bp3-icon-align-right::before{
      content:""; }
    
    .bp3-icon-alignment-bottom::before{
      content:""; }
    
    .bp3-icon-alignment-horizontal-center::before{
      content:""; }
    
    .bp3-icon-alignment-left::before{
      content:""; }
    
    .bp3-icon-alignment-right::before{
      content:""; }
    
    .bp3-icon-alignment-top::before{
      content:""; }
    
    .bp3-icon-alignment-vertical-center::before{
      content:""; }
    
    .bp3-icon-annotation::before{
      content:""; }
    
    .bp3-icon-application::before{
      content:""; }
    
    .bp3-icon-applications::before{
      content:""; }
    
    .bp3-icon-archive::before{
      content:""; }
    
    .bp3-icon-arrow-bottom-left::before{
      content:"↙"; }
    
    .bp3-icon-arrow-bottom-right::before{
      content:"↘"; }
    
    .bp3-icon-arrow-down::before{
      content:"↓"; }
    
    .bp3-icon-arrow-left::before{
      content:"←"; }
    
    .bp3-icon-arrow-right::before{
      content:"→"; }
    
    .bp3-icon-arrow-top-left::before{
      content:"↖"; }
    
    .bp3-icon-arrow-top-right::before{
      content:"↗"; }
    
    .bp3-icon-arrow-up::before{
      content:"↑"; }
    
    .bp3-icon-arrows-horizontal::before{
      content:"↔"; }
    
    .bp3-icon-arrows-vertical::before{
      content:"↕"; }
    
    .bp3-icon-asterisk::before{
      content:"*"; }
    
    .bp3-icon-automatic-updates::before{
      content:""; }
    
    .bp3-icon-badge::before{
      content:""; }
    
    .bp3-icon-ban-circle::before{
      content:""; }
    
    .bp3-icon-bank-account::before{
      content:""; }
    
    .bp3-icon-barcode::before{
      content:""; }
    
    .bp3-icon-blank::before{
      content:""; }
    
    .bp3-icon-blocked-person::before{
      content:""; }
    
    .bp3-icon-bold::before{
      content:""; }
    
    .bp3-icon-book::before{
      content:""; }
    
    .bp3-icon-bookmark::before{
      content:""; }
    
    .bp3-icon-box::before{
      content:""; }
    
    .bp3-icon-briefcase::before{
      content:""; }
    
    .bp3-icon-bring-data::before{
      content:""; }
    
    .bp3-icon-build::before{
      content:""; }
    
    .bp3-icon-calculator::before{
      content:""; }
    
    .bp3-icon-calendar::before{
      content:""; }
    
    .bp3-icon-camera::before{
      content:""; }
    
    .bp3-icon-caret-down::before{
      content:"⌄"; }
    
    .bp3-icon-caret-left::before{
      content:"〈"; }
    
    .bp3-icon-caret-right::before{
      content:"〉"; }
    
    .bp3-icon-caret-up::before{
      content:"⌃"; }
    
    .bp3-icon-cell-tower::before{
      content:""; }
    
    .bp3-icon-changes::before{
      content:""; }
    
    .bp3-icon-chart::before{
      content:""; }
    
    .bp3-icon-chat::before{
      content:""; }
    
    .bp3-icon-chevron-backward::before{
      content:""; }
    
    .bp3-icon-chevron-down::before{
      content:""; }
    
    .bp3-icon-chevron-forward::before{
      content:""; }
    
    .bp3-icon-chevron-left::before{
      content:""; }
    
    .bp3-icon-chevron-right::before{
      content:""; }
    
    .bp3-icon-chevron-up::before{
      content:""; }
    
    .bp3-icon-circle::before{
      content:""; }
    
    .bp3-icon-circle-arrow-down::before{
      content:""; }
    
    .bp3-icon-circle-arrow-left::before{
      content:""; }
    
    .bp3-icon-circle-arrow-right::before{
      content:""; }
    
    .bp3-icon-circle-arrow-up::before{
      content:""; }
    
    .bp3-icon-citation::before{
      content:""; }
    
    .bp3-icon-clean::before{
      content:""; }
    
    .bp3-icon-clipboard::before{
      content:""; }
    
    .bp3-icon-cloud::before{
      content:"☁"; }
    
    .bp3-icon-cloud-download::before{
      content:""; }
    
    .bp3-icon-cloud-upload::before{
      content:""; }
    
    .bp3-icon-code::before{
      content:""; }
    
    .bp3-icon-code-block::before{
      content:""; }
    
    .bp3-icon-cog::before{
      content:""; }
    
    .bp3-icon-collapse-all::before{
      content:""; }
    
    .bp3-icon-column-layout::before{
      content:""; }
    
    .bp3-icon-comment::before{
      content:""; }
    
    .bp3-icon-comparison::before{
      content:""; }
    
    .bp3-icon-compass::before{
      content:""; }
    
    .bp3-icon-compressed::before{
      content:""; }
    
    .bp3-icon-confirm::before{
      content:""; }
    
    .bp3-icon-console::before{
      content:""; }
    
    .bp3-icon-contrast::before{
      content:""; }
    
    .bp3-icon-control::before{
      content:""; }
    
    .bp3-icon-credit-card::before{
      content:""; }
    
    .bp3-icon-cross::before{
      content:"✗"; }
    
    .bp3-icon-crown::before{
      content:""; }
    
    .bp3-icon-cube::before{
      content:""; }
    
    .bp3-icon-cube-add::before{
      content:""; }
    
    .bp3-icon-cube-remove::before{
      content:""; }
    
    .bp3-icon-curved-range-chart::before{
      content:""; }
    
    .bp3-icon-cut::before{
      content:""; }
    
    .bp3-icon-dashboard::before{
      content:""; }
    
    .bp3-icon-data-lineage::before{
      content:""; }
    
    .bp3-icon-database::before{
      content:""; }
    
    .bp3-icon-delete::before{
      content:""; }
    
    .bp3-icon-delta::before{
      content:"Δ"; }
    
    .bp3-icon-derive-column::before{
      content:""; }
    
    .bp3-icon-desktop::before{
      content:""; }
    
    .bp3-icon-diagnosis::before{
      content:""; }
    
    .bp3-icon-diagram-tree::before{
      content:""; }
    
    .bp3-icon-direction-left::before{
      content:""; }
    
    .bp3-icon-direction-right::before{
      content:""; }
    
    .bp3-icon-disable::before{
      content:""; }
    
    .bp3-icon-document::before{
      content:""; }
    
    .bp3-icon-document-open::before{
      content:""; }
    
    .bp3-icon-document-share::before{
      content:""; }
    
    .bp3-icon-dollar::before{
      content:"$"; }
    
    .bp3-icon-dot::before{
      content:"•"; }
    
    .bp3-icon-double-caret-horizontal::before{
      content:""; }
    
    .bp3-icon-double-caret-vertical::before{
      content:""; }
    
    .bp3-icon-double-chevron-down::before{
      content:""; }
    
    .bp3-icon-double-chevron-left::before{
      content:""; }
    
    .bp3-icon-double-chevron-right::before{
      content:""; }
    
    .bp3-icon-double-chevron-up::before{
      content:""; }
    
    .bp3-icon-doughnut-chart::before{
      content:""; }
    
    .bp3-icon-download::before{
      content:""; }
    
    .bp3-icon-drag-handle-horizontal::before{
      content:""; }
    
    .bp3-icon-drag-handle-vertical::before{
      content:""; }
    
    .bp3-icon-draw::before{
      content:""; }
    
    .bp3-icon-drive-time::before{
      content:""; }
    
    .bp3-icon-duplicate::before{
      content:""; }
    
    .bp3-icon-edit::before{
      content:"✎"; }
    
    .bp3-icon-eject::before{
      content:"⏏"; }
    
    .bp3-icon-endorsed::before{
      content:""; }
    
    .bp3-icon-envelope::before{
      content:"✉"; }
    
    .bp3-icon-equals::before{
      content:""; }
    
    .bp3-icon-eraser::before{
      content:""; }
    
    .bp3-icon-error::before{
      content:""; }
    
    .bp3-icon-euro::before{
      content:"€"; }
    
    .bp3-icon-exchange::before{
      content:""; }
    
    .bp3-icon-exclude-row::before{
      content:""; }
    
    .bp3-icon-expand-all::before{
      content:""; }
    
    .bp3-icon-export::before{
      content:""; }
    
    .bp3-icon-eye-off::before{
      content:""; }
    
    .bp3-icon-eye-on::before{
      content:""; }
    
    .bp3-icon-eye-open::before{
      content:""; }
    
    .bp3-icon-fast-backward::before{
      content:""; }
    
    .bp3-icon-fast-forward::before{
      content:""; }
    
    .bp3-icon-feed::before{
      content:""; }
    
    .bp3-icon-feed-subscribed::before{
      content:""; }
    
    .bp3-icon-film::before{
      content:""; }
    
    .bp3-icon-filter::before{
      content:""; }
    
    .bp3-icon-filter-keep::before{
      content:""; }
    
    .bp3-icon-filter-list::before{
      content:""; }
    
    .bp3-icon-filter-open::before{
      content:""; }
    
    .bp3-icon-filter-remove::before{
      content:""; }
    
    .bp3-icon-flag::before{
      content:"⚑"; }
    
    .bp3-icon-flame::before{
      content:""; }
    
    .bp3-icon-flash::before{
      content:""; }
    
    .bp3-icon-floppy-disk::before{
      content:""; }
    
    .bp3-icon-flow-branch::before{
      content:""; }
    
    .bp3-icon-flow-end::before{
      content:""; }
    
    .bp3-icon-flow-linear::before{
      content:""; }
    
    .bp3-icon-flow-review::before{
      content:""; }
    
    .bp3-icon-flow-review-branch::before{
      content:""; }
    
    .bp3-icon-flows::before{
      content:""; }
    
    .bp3-icon-folder-close::before{
      content:""; }
    
    .bp3-icon-folder-new::before{
      content:""; }
    
    .bp3-icon-folder-open::before{
      content:""; }
    
    .bp3-icon-folder-shared::before{
      content:""; }
    
    .bp3-icon-folder-shared-open::before{
      content:""; }
    
    .bp3-icon-follower::before{
      content:""; }
    
    .bp3-icon-following::before{
      content:""; }
    
    .bp3-icon-font::before{
      content:""; }
    
    .bp3-icon-fork::before{
      content:""; }
    
    .bp3-icon-form::before{
      content:""; }
    
    .bp3-icon-full-circle::before{
      content:""; }
    
    .bp3-icon-full-stacked-chart::before{
      content:""; }
    
    .bp3-icon-fullscreen::before{
      content:""; }
    
    .bp3-icon-function::before{
      content:""; }
    
    .bp3-icon-gantt-chart::before{
      content:""; }
    
    .bp3-icon-geolocation::before{
      content:""; }
    
    .bp3-icon-geosearch::before{
      content:""; }
    
    .bp3-icon-git-branch::before{
      content:""; }
    
    .bp3-icon-git-commit::before{
      content:""; }
    
    .bp3-icon-git-merge::before{
      content:""; }
    
    .bp3-icon-git-new-branch::before{
      content:""; }
    
    .bp3-icon-git-pull::before{
      content:""; }
    
    .bp3-icon-git-push::before{
      content:""; }
    
    .bp3-icon-git-repo::before{
      content:""; }
    
    .bp3-icon-glass::before{
      content:""; }
    
    .bp3-icon-globe::before{
      content:""; }
    
    .bp3-icon-globe-network::before{
      content:""; }
    
    .bp3-icon-graph::before{
      content:""; }
    
    .bp3-icon-graph-remove::before{
      content:""; }
    
    .bp3-icon-greater-than::before{
      content:""; }
    
    .bp3-icon-greater-than-or-equal-to::before{
      content:""; }
    
    .bp3-icon-grid::before{
      content:""; }
    
    .bp3-icon-grid-view::before{
      content:""; }
    
    .bp3-icon-group-objects::before{
      content:""; }
    
    .bp3-icon-grouped-bar-chart::before{
      content:""; }
    
    .bp3-icon-hand::before{
      content:""; }
    
    .bp3-icon-hand-down::before{
      content:""; }
    
    .bp3-icon-hand-left::before{
      content:""; }
    
    .bp3-icon-hand-right::before{
      content:""; }
    
    .bp3-icon-hand-up::before{
      content:""; }
    
    .bp3-icon-header::before{
      content:""; }
    
    .bp3-icon-header-one::before{
      content:""; }
    
    .bp3-icon-header-two::before{
      content:""; }
    
    .bp3-icon-headset::before{
      content:""; }
    
    .bp3-icon-heart::before{
      content:"♥"; }
    
    .bp3-icon-heart-broken::before{
      content:""; }
    
    .bp3-icon-heat-grid::before{
      content:""; }
    
    .bp3-icon-heatmap::before{
      content:""; }
    
    .bp3-icon-help::before{
      content:"?"; }
    
    .bp3-icon-helper-management::before{
      content:""; }
    
    .bp3-icon-highlight::before{
      content:""; }
    
    .bp3-icon-history::before{
      content:""; }
    
    .bp3-icon-home::before{
      content:"⌂"; }
    
    .bp3-icon-horizontal-bar-chart::before{
      content:""; }
    
    .bp3-icon-horizontal-bar-chart-asc::before{
      content:""; }
    
    .bp3-icon-horizontal-bar-chart-desc::before{
      content:""; }
    
    .bp3-icon-horizontal-distribution::before{
      content:""; }
    
    .bp3-icon-id-number::before{
      content:""; }
    
    .bp3-icon-image-rotate-left::before{
      content:""; }
    
    .bp3-icon-image-rotate-right::before{
      content:""; }
    
    .bp3-icon-import::before{
      content:""; }
    
    .bp3-icon-inbox::before{
      content:""; }
    
    .bp3-icon-inbox-filtered::before{
      content:""; }
    
    .bp3-icon-inbox-geo::before{
      content:""; }
    
    .bp3-icon-inbox-search::before{
      content:""; }
    
    .bp3-icon-inbox-update::before{
      content:""; }
    
    .bp3-icon-info-sign::before{
      content:"ℹ"; }
    
    .bp3-icon-inheritance::before{
      content:""; }
    
    .bp3-icon-inner-join::before{
      content:""; }
    
    .bp3-icon-insert::before{
      content:""; }
    
    .bp3-icon-intersection::before{
      content:""; }
    
    .bp3-icon-ip-address::before{
      content:""; }
    
    .bp3-icon-issue::before{
      content:""; }
    
    .bp3-icon-issue-closed::before{
      content:""; }
    
    .bp3-icon-issue-new::before{
      content:""; }
    
    .bp3-icon-italic::before{
      content:""; }
    
    .bp3-icon-join-table::before{
      content:""; }
    
    .bp3-icon-key::before{
      content:""; }
    
    .bp3-icon-key-backspace::before{
      content:""; }
    
    .bp3-icon-key-command::before{
      content:""; }
    
    .bp3-icon-key-control::before{
      content:""; }
    
    .bp3-icon-key-delete::before{
      content:""; }
    
    .bp3-icon-key-enter::before{
      content:""; }
    
    .bp3-icon-key-escape::before{
      content:""; }
    
    .bp3-icon-key-option::before{
      content:""; }
    
    .bp3-icon-key-shift::before{
      content:""; }
    
    .bp3-icon-key-tab::before{
      content:""; }
    
    .bp3-icon-known-vehicle::before{
      content:""; }
    
    .bp3-icon-lab-test::before{
      content:""; }
    
    .bp3-icon-label::before{
      content:""; }
    
    .bp3-icon-layer::before{
      content:""; }
    
    .bp3-icon-layers::before{
      content:""; }
    
    .bp3-icon-layout::before{
      content:""; }
    
    .bp3-icon-layout-auto::before{
      content:""; }
    
    .bp3-icon-layout-balloon::before{
      content:""; }
    
    .bp3-icon-layout-circle::before{
      content:""; }
    
    .bp3-icon-layout-grid::before{
      content:""; }
    
    .bp3-icon-layout-group-by::before{
      content:""; }
    
    .bp3-icon-layout-hierarchy::before{
      content:""; }
    
    .bp3-icon-layout-linear::before{
      content:""; }
    
    .bp3-icon-layout-skew-grid::before{
      content:""; }
    
    .bp3-icon-layout-sorted-clusters::before{
      content:""; }
    
    .bp3-icon-learning::before{
      content:""; }
    
    .bp3-icon-left-join::before{
      content:""; }
    
    .bp3-icon-less-than::before{
      content:""; }
    
    .bp3-icon-less-than-or-equal-to::before{
      content:""; }
    
    .bp3-icon-lifesaver::before{
      content:""; }
    
    .bp3-icon-lightbulb::before{
      content:""; }
    
    .bp3-icon-link::before{
      content:""; }
    
    .bp3-icon-list::before{
      content:"☰"; }
    
    .bp3-icon-list-columns::before{
      content:""; }
    
    .bp3-icon-list-detail-view::before{
      content:""; }
    
    .bp3-icon-locate::before{
      content:""; }
    
    .bp3-icon-lock::before{
      content:""; }
    
    .bp3-icon-log-in::before{
      content:""; }
    
    .bp3-icon-log-out::before{
      content:""; }
    
    .bp3-icon-manual::before{
      content:""; }
    
    .bp3-icon-manually-entered-data::before{
      content:""; }
    
    .bp3-icon-map::before{
      content:""; }
    
    .bp3-icon-map-create::before{
      content:""; }
    
    .bp3-icon-map-marker::before{
      content:""; }
    
    .bp3-icon-maximize::before{
      content:""; }
    
    .bp3-icon-media::before{
      content:""; }
    
    .bp3-icon-menu::before{
      content:""; }
    
    .bp3-icon-menu-closed::before{
      content:""; }
    
    .bp3-icon-menu-open::before{
      content:""; }
    
    .bp3-icon-merge-columns::before{
      content:""; }
    
    .bp3-icon-merge-links::before{
      content:""; }
    
    .bp3-icon-minimize::before{
      content:""; }
    
    .bp3-icon-minus::before{
      content:"−"; }
    
    .bp3-icon-mobile-phone::before{
      content:""; }
    
    .bp3-icon-mobile-video::before{
      content:""; }
    
    .bp3-icon-moon::before{
      content:""; }
    
    .bp3-icon-more::before{
      content:""; }
    
    .bp3-icon-mountain::before{
      content:""; }
    
    .bp3-icon-move::before{
      content:""; }
    
    .bp3-icon-mugshot::before{
      content:""; }
    
    .bp3-icon-multi-select::before{
      content:""; }
    
    .bp3-icon-music::before{
      content:""; }
    
    .bp3-icon-new-drawing::before{
      content:""; }
    
    .bp3-icon-new-grid-item::before{
      content:""; }
    
    .bp3-icon-new-layer::before{
      content:""; }
    
    .bp3-icon-new-layers::before{
      content:""; }
    
    .bp3-icon-new-link::before{
      content:""; }
    
    .bp3-icon-new-object::before{
      content:""; }
    
    .bp3-icon-new-person::before{
      content:""; }
    
    .bp3-icon-new-prescription::before{
      content:""; }
    
    .bp3-icon-new-text-box::before{
      content:""; }
    
    .bp3-icon-ninja::before{
      content:""; }
    
    .bp3-icon-not-equal-to::before{
      content:""; }
    
    .bp3-icon-notifications::before{
      content:""; }
    
    .bp3-icon-notifications-updated::before{
      content:""; }
    
    .bp3-icon-numbered-list::before{
      content:""; }
    
    .bp3-icon-numerical::before{
      content:""; }
    
    .bp3-icon-office::before{
      content:""; }
    
    .bp3-icon-offline::before{
      content:""; }
    
    .bp3-icon-oil-field::before{
      content:""; }
    
    .bp3-icon-one-column::before{
      content:""; }
    
    .bp3-icon-outdated::before{
      content:""; }
    
    .bp3-icon-page-layout::before{
      content:""; }
    
    .bp3-icon-panel-stats::before{
      content:""; }
    
    .bp3-icon-panel-table::before{
      content:""; }
    
    .bp3-icon-paperclip::before{
      content:""; }
    
    .bp3-icon-paragraph::before{
      content:""; }
    
    .bp3-icon-path::before{
      content:""; }
    
    .bp3-icon-path-search::before{
      content:""; }
    
    .bp3-icon-pause::before{
      content:""; }
    
    .bp3-icon-people::before{
      content:""; }
    
    .bp3-icon-percentage::before{
      content:""; }
    
    .bp3-icon-person::before{
      content:""; }
    
    .bp3-icon-phone::before{
      content:"☎"; }
    
    .bp3-icon-pie-chart::before{
      content:""; }
    
    .bp3-icon-pin::before{
      content:""; }
    
    .bp3-icon-pivot::before{
      content:""; }
    
    .bp3-icon-pivot-table::before{
      content:""; }
    
    .bp3-icon-play::before{
      content:""; }
    
    .bp3-icon-plus::before{
      content:"+"; }
    
    .bp3-icon-polygon-filter::before{
      content:""; }
    
    .bp3-icon-power::before{
      content:""; }
    
    .bp3-icon-predictive-analysis::before{
      content:""; }
    
    .bp3-icon-prescription::before{
      content:""; }
    
    .bp3-icon-presentation::before{
      content:""; }
    
    .bp3-icon-print::before{
      content:"⎙"; }
    
    .bp3-icon-projects::before{
      content:""; }
    
    .bp3-icon-properties::before{
      content:""; }
    
    .bp3-icon-property::before{
      content:""; }
    
    .bp3-icon-publish-function::before{
      content:""; }
    
    .bp3-icon-pulse::before{
      content:""; }
    
    .bp3-icon-random::before{
      content:""; }
    
    .bp3-icon-record::before{
      content:""; }
    
    .bp3-icon-redo::before{
      content:""; }
    
    .bp3-icon-refresh::before{
      content:""; }
    
    .bp3-icon-regression-chart::before{
      content:""; }
    
    .bp3-icon-remove::before{
      content:""; }
    
    .bp3-icon-remove-column::before{
      content:""; }
    
    .bp3-icon-remove-column-left::before{
      content:""; }
    
    .bp3-icon-remove-column-right::before{
      content:""; }
    
    .bp3-icon-remove-row-bottom::before{
      content:""; }
    
    .bp3-icon-remove-row-top::before{
      content:""; }
    
    .bp3-icon-repeat::before{
      content:""; }
    
    .bp3-icon-reset::before{
      content:""; }
    
    .bp3-icon-resolve::before{
      content:""; }
    
    .bp3-icon-rig::before{
      content:""; }
    
    .bp3-icon-right-join::before{
      content:""; }
    
    .bp3-icon-ring::before{
      content:""; }
    
    .bp3-icon-rotate-document::before{
      content:""; }
    
    .bp3-icon-rotate-page::before{
      content:""; }
    
    .bp3-icon-satellite::before{
      content:""; }
    
    .bp3-icon-saved::before{
      content:""; }
    
    .bp3-icon-scatter-plot::before{
      content:""; }
    
    .bp3-icon-search::before{
      content:""; }
    
    .bp3-icon-search-around::before{
      content:""; }
    
    .bp3-icon-search-template::before{
      content:""; }
    
    .bp3-icon-search-text::before{
      content:""; }
    
    .bp3-icon-segmented-control::before{
      content:""; }
    
    .bp3-icon-select::before{
      content:""; }
    
    .bp3-icon-selection::before{
      content:"⦿"; }
    
    .bp3-icon-send-to::before{
      content:""; }
    
    .bp3-icon-send-to-graph::before{
      content:""; }
    
    .bp3-icon-send-to-map::before{
      content:""; }
    
    .bp3-icon-series-add::before{
      content:""; }
    
    .bp3-icon-series-configuration::before{
      content:""; }
    
    .bp3-icon-series-derived::before{
      content:""; }
    
    .bp3-icon-series-filtered::before{
      content:""; }
    
    .bp3-icon-series-search::before{
      content:""; }
    
    .bp3-icon-settings::before{
      content:""; }
    
    .bp3-icon-share::before{
      content:""; }
    
    .bp3-icon-shield::before{
      content:""; }
    
    .bp3-icon-shop::before{
      content:""; }
    
    .bp3-icon-shopping-cart::before{
      content:""; }
    
    .bp3-icon-signal-search::before{
      content:""; }
    
    .bp3-icon-sim-card::before{
      content:""; }
    
    .bp3-icon-slash::before{
      content:""; }
    
    .bp3-icon-small-cross::before{
      content:""; }
    
    .bp3-icon-small-minus::before{
      content:""; }
    
    .bp3-icon-small-plus::before{
      content:""; }
    
    .bp3-icon-small-tick::before{
      content:""; }
    
    .bp3-icon-snowflake::before{
      content:""; }
    
    .bp3-icon-social-media::before{
      content:""; }
    
    .bp3-icon-sort::before{
      content:""; }
    
    .bp3-icon-sort-alphabetical::before{
      content:""; }
    
    .bp3-icon-sort-alphabetical-desc::before{
      content:""; }
    
    .bp3-icon-sort-asc::before{
      content:""; }
    
    .bp3-icon-sort-desc::before{
      content:""; }
    
    .bp3-icon-sort-numerical::before{
      content:""; }
    
    .bp3-icon-sort-numerical-desc::before{
      content:""; }
    
    .bp3-icon-split-columns::before{
      content:""; }
    
    .bp3-icon-square::before{
      content:""; }
    
    .bp3-icon-stacked-chart::before{
      content:""; }
    
    .bp3-icon-star::before{
      content:"★"; }
    
    .bp3-icon-star-empty::before{
      content:"☆"; }
    
    .bp3-icon-step-backward::before{
      content:""; }
    
    .bp3-icon-step-chart::before{
      content:""; }
    
    .bp3-icon-step-forward::before{
      content:""; }
    
    .bp3-icon-stop::before{
      content:""; }
    
    .bp3-icon-stopwatch::before{
      content:""; }
    
    .bp3-icon-strikethrough::before{
      content:""; }
    
    .bp3-icon-style::before{
      content:""; }
    
    .bp3-icon-swap-horizontal::before{
      content:""; }
    
    .bp3-icon-swap-vertical::before{
      content:""; }
    
    .bp3-icon-symbol-circle::before{
      content:""; }
    
    .bp3-icon-symbol-cross::before{
      content:""; }
    
    .bp3-icon-symbol-diamond::before{
      content:""; }
    
    .bp3-icon-symbol-square::before{
      content:""; }
    
    .bp3-icon-symbol-triangle-down::before{
      content:""; }
    
    .bp3-icon-symbol-triangle-up::before{
      content:""; }
    
    .bp3-icon-tag::before{
      content:""; }
    
    .bp3-icon-take-action::before{
      content:""; }
    
    .bp3-icon-taxi::before{
      content:""; }
    
    .bp3-icon-text-highlight::before{
      content:""; }
    
    .bp3-icon-th::before{
      content:""; }
    
    .bp3-icon-th-derived::before{
      content:""; }
    
    .bp3-icon-th-disconnect::before{
      content:""; }
    
    .bp3-icon-th-filtered::before{
      content:""; }
    
    .bp3-icon-th-list::before{
      content:""; }
    
    .bp3-icon-thumbs-down::before{
      content:""; }
    
    .bp3-icon-thumbs-up::before{
      content:""; }
    
    .bp3-icon-tick::before{
      content:"✓"; }
    
    .bp3-icon-tick-circle::before{
      content:""; }
    
    .bp3-icon-time::before{
      content:"⏲"; }
    
    .bp3-icon-timeline-area-chart::before{
      content:""; }
    
    .bp3-icon-timeline-bar-chart::before{
      content:""; }
    
    .bp3-icon-timeline-events::before{
      content:""; }
    
    .bp3-icon-timeline-line-chart::before{
      content:""; }
    
    .bp3-icon-tint::before{
      content:""; }
    
    .bp3-icon-torch::before{
      content:""; }
    
    .bp3-icon-tractor::before{
      content:""; }
    
    .bp3-icon-train::before{
      content:""; }
    
    .bp3-icon-translate::before{
      content:""; }
    
    .bp3-icon-trash::before{
      content:""; }
    
    .bp3-icon-tree::before{
      content:""; }
    
    .bp3-icon-trending-down::before{
      content:""; }
    
    .bp3-icon-trending-up::before{
      content:""; }
    
    .bp3-icon-truck::before{
      content:""; }
    
    .bp3-icon-two-columns::before{
      content:""; }
    
    .bp3-icon-unarchive::before{
      content:""; }
    
    .bp3-icon-underline::before{
      content:"⎁"; }
    
    .bp3-icon-undo::before{
      content:"⎌"; }
    
    .bp3-icon-ungroup-objects::before{
      content:""; }
    
    .bp3-icon-unknown-vehicle::before{
      content:""; }
    
    .bp3-icon-unlock::before{
      content:""; }
    
    .bp3-icon-unpin::before{
      content:""; }
    
    .bp3-icon-unresolve::before{
      content:""; }
    
    .bp3-icon-updated::before{
      content:""; }
    
    .bp3-icon-upload::before{
      content:""; }
    
    .bp3-icon-user::before{
      content:""; }
    
    .bp3-icon-variable::before{
      content:""; }
    
    .bp3-icon-vertical-bar-chart-asc::before{
      content:""; }
    
    .bp3-icon-vertical-bar-chart-desc::before{
      content:""; }
    
    .bp3-icon-vertical-distribution::before{
      content:""; }
    
    .bp3-icon-video::before{
      content:""; }
    
    .bp3-icon-volume-down::before{
      content:""; }
    
    .bp3-icon-volume-off::before{
      content:""; }
    
    .bp3-icon-volume-up::before{
      content:""; }
    
    .bp3-icon-walk::before{
      content:""; }
    
    .bp3-icon-warning-sign::before{
      content:""; }
    
    .bp3-icon-waterfall-chart::before{
      content:""; }
    
    .bp3-icon-widget::before{
      content:""; }
    
    .bp3-icon-widget-button::before{
      content:""; }
    
    .bp3-icon-widget-footer::before{
      content:""; }
    
    .bp3-icon-widget-header::before{
      content:""; }
    
    .bp3-icon-wrench::before{
      content:""; }
    
    .bp3-icon-zoom-in::before{
      content:""; }
    
    .bp3-icon-zoom-out::before{
      content:""; }
    
    .bp3-icon-zoom-to-fit::before{
      content:""; }
    .bp3-submenu > .bp3-popover-wrapper{
      display:block; }
    
    .bp3-submenu .bp3-popover-target{
      display:block; }
      .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{ }
    
    .bp3-submenu.bp3-popover{
      -webkit-box-shadow:none;
              box-shadow:none;
      padding:0 5px; }
      .bp3-submenu.bp3-popover > .bp3-popover-content{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }
      .bp3-dark .bp3-submenu.bp3-popover, .bp3-submenu.bp3-popover.bp3-dark{
        -webkit-box-shadow:none;
                box-shadow:none; }
        .bp3-dark .bp3-submenu.bp3-popover > .bp3-popover-content, .bp3-submenu.bp3-popover.bp3-dark > .bp3-popover-content{
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-menu{
      background:#ffffff;
      border-radius:3px;
      color:#182026;
      list-style:none;
      margin:0;
      min-width:180px;
      padding:5px;
      text-align:left; }
    
    .bp3-menu-divider{
      border-top:1px solid rgba(16, 22, 26, 0.15);
      display:block;
      margin:5px; }
      .bp3-dark .bp3-menu-divider{
        border-top-color:rgba(255, 255, 255, 0.15); }
    
    .bp3-menu-item{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-align:start;
          -ms-flex-align:start;
              align-items:flex-start;
      border-radius:2px;
      color:inherit;
      line-height:20px;
      padding:5px 7px;
      text-decoration:none;
      -webkit-user-select:none;
         -moz-user-select:none;
          -ms-user-select:none;
              user-select:none; }
      .bp3-menu-item > *{
        -webkit-box-flex:0;
            -ms-flex-positive:0;
                flex-grow:0;
        -ms-flex-negative:0;
            flex-shrink:0; }
      .bp3-menu-item > .bp3-fill{
        -webkit-box-flex:1;
            -ms-flex-positive:1;
                flex-grow:1;
        -ms-flex-negative:1;
            flex-shrink:1; }
      .bp3-menu-item::before,
      .bp3-menu-item > *{
        margin-right:7px; }
      .bp3-menu-item:empty::before,
      .bp3-menu-item > :last-child{
        margin-right:0; }
      .bp3-menu-item > .bp3-fill{
        word-break:break-word; }
      .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
        background-color:rgba(167, 182, 194, 0.3);
        cursor:pointer;
        text-decoration:none; }
      .bp3-menu-item.bp3-disabled{
        background-color:inherit;
        color:rgba(92, 112, 128, 0.6);
        cursor:not-allowed; }
      .bp3-dark .bp3-menu-item{
        color:inherit; }
        .bp3-dark .bp3-menu-item:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
          background-color:rgba(138, 155, 168, 0.15);
          color:inherit; }
        .bp3-dark .bp3-menu-item.bp3-disabled{
          background-color:inherit;
          color:rgba(167, 182, 194, 0.6); }
      .bp3-menu-item.bp3-intent-primary{
        color:#106ba3; }
        .bp3-menu-item.bp3-intent-primary .bp3-icon{
          color:inherit; }
        .bp3-menu-item.bp3-intent-primary::before, .bp3-menu-item.bp3-intent-primary::after,
        .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{
          color:#106ba3; }
        .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary.bp3-active{
          background-color:#137cbd; }
        .bp3-menu-item.bp3-intent-primary:active{
          background-color:#106ba3; }
        .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,
        .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,
        .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary:active, .bp3-menu-item.bp3-intent-primary:active::before, .bp3-menu-item.bp3-intent-primary:active::after,
        .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-menu-item.bp3-intent-primary.bp3-active::after,
        .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{
          color:#ffffff; }
      .bp3-menu-item.bp3-intent-success{
        color:#0d8050; }
        .bp3-menu-item.bp3-intent-success .bp3-icon{
          color:inherit; }
        .bp3-menu-item.bp3-intent-success::before, .bp3-menu-item.bp3-intent-success::after,
        .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{
          color:#0d8050; }
        .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success.bp3-active{
          background-color:#0f9960; }
        .bp3-menu-item.bp3-intent-success:active{
          background-color:#0d8050; }
        .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-menu-item.bp3-intent-success:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,
        .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,
        .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success:active, .bp3-menu-item.bp3-intent-success:active::before, .bp3-menu-item.bp3-intent-success:active::after,
        .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-menu-item.bp3-intent-success.bp3-active::after,
        .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{
          color:#ffffff; }
      .bp3-menu-item.bp3-intent-warning{
        color:#bf7326; }
        .bp3-menu-item.bp3-intent-warning .bp3-icon{
          color:inherit; }
        .bp3-menu-item.bp3-intent-warning::before, .bp3-menu-item.bp3-intent-warning::after,
        .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{
          color:#bf7326; }
        .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning.bp3-active{
          background-color:#d9822b; }
        .bp3-menu-item.bp3-intent-warning:active{
          background-color:#bf7326; }
        .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,
        .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,
        .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning:active, .bp3-menu-item.bp3-intent-warning:active::before, .bp3-menu-item.bp3-intent-warning:active::after,
        .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-menu-item.bp3-intent-warning.bp3-active::after,
        .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{
          color:#ffffff; }
      .bp3-menu-item.bp3-intent-danger{
        color:#c23030; }
        .bp3-menu-item.bp3-intent-danger .bp3-icon{
          color:inherit; }
        .bp3-menu-item.bp3-intent-danger::before, .bp3-menu-item.bp3-intent-danger::after,
        .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{
          color:#c23030; }
        .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger.bp3-active{
          background-color:#db3737; }
        .bp3-menu-item.bp3-intent-danger:active{
          background-color:#c23030; }
        .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,
        .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,
        .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger:active, .bp3-menu-item.bp3-intent-danger:active::before, .bp3-menu-item.bp3-intent-danger:active::after,
        .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-menu-item.bp3-intent-danger.bp3-active::after,
        .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{
          color:#ffffff; }
      .bp3-menu-item::before{
        font-family:"Icons16", sans-serif;
        font-size:16px;
        font-style:normal;
        font-weight:400;
        line-height:1;
        -moz-osx-font-smoothing:grayscale;
        -webkit-font-smoothing:antialiased;
        margin-right:7px; }
      .bp3-menu-item::before,
      .bp3-menu-item > .bp3-icon{
        color:#5c7080;
        margin-top:2px; }
      .bp3-menu-item .bp3-menu-item-label{
        color:#5c7080; }
      .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
        color:inherit; }
      .bp3-menu-item.bp3-active, .bp3-menu-item:active{
        background-color:rgba(115, 134, 148, 0.3); }
      .bp3-menu-item.bp3-disabled{
        background-color:inherit !important;
        color:rgba(92, 112, 128, 0.6) !important;
        cursor:not-allowed !important;
        outline:none !important; }
        .bp3-menu-item.bp3-disabled::before,
        .bp3-menu-item.bp3-disabled > .bp3-icon,
        .bp3-menu-item.bp3-disabled .bp3-menu-item-label{
          color:rgba(92, 112, 128, 0.6) !important; }
      .bp3-large .bp3-menu-item{
        font-size:16px;
        line-height:22px;
        padding:9px 7px; }
        .bp3-large .bp3-menu-item .bp3-icon{
          margin-top:3px; }
        .bp3-large .bp3-menu-item::before{
          font-family:"Icons20", sans-serif;
          font-size:20px;
          font-style:normal;
          font-weight:400;
          line-height:1;
          -moz-osx-font-smoothing:grayscale;
          -webkit-font-smoothing:antialiased;
          margin-right:10px;
          margin-top:1px; }
    
    button.bp3-menu-item{
      background:none;
      border:none;
      text-align:left;
      width:100%; }
    .bp3-menu-header{
      border-top:1px solid rgba(16, 22, 26, 0.15);
      display:block;
      margin:5px;
      cursor:default;
      padding-left:2px; }
      .bp3-dark .bp3-menu-header{
        border-top-color:rgba(255, 255, 255, 0.15); }
      .bp3-menu-header:first-of-type{
        border-top:none; }
      .bp3-menu-header > h6{
        color:#182026;
        font-weight:600;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        word-wrap:normal;
        line-height:17px;
        margin:0;
        padding:10px 7px 0 1px; }
        .bp3-dark .bp3-menu-header > h6{
          color:#f5f8fa; }
      .bp3-menu-header:first-of-type > h6{
        padding-top:0; }
      .bp3-large .bp3-menu-header > h6{
        font-size:18px;
        padding-bottom:5px;
        padding-top:15px; }
      .bp3-large .bp3-menu-header:first-of-type > h6{
        padding-top:0; }
    
    .bp3-dark .bp3-menu{
      background:#30404d;
      color:#f5f8fa; }
    
    .bp3-dark .bp3-menu-item{ }
      .bp3-dark .bp3-menu-item.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-icon{
          color:inherit; }
        .bp3-dark .bp3-menu-item.bp3-intent-primary::before, .bp3-dark .bp3-menu-item.bp3-intent-primary::after,
        .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{
          color:#48aff0; }
        .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active{
          background-color:#137cbd; }
        .bp3-dark .bp3-menu-item.bp3-intent-primary:active{
          background-color:#106ba3; }
        .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,
        .bp3-dark .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,
        .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label,
        .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary:active, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::after,
        .bp3-dark .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::after,
        .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{
          color:#ffffff; }
      .bp3-dark .bp3-menu-item.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-icon{
          color:inherit; }
        .bp3-dark .bp3-menu-item.bp3-intent-success::before, .bp3-dark .bp3-menu-item.bp3-intent-success::after,
        .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{
          color:#3dcc91; }
        .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active{
          background-color:#0f9960; }
        .bp3-dark .bp3-menu-item.bp3-intent-success:active{
          background-color:#0d8050; }
        .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,
        .bp3-dark .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,
        .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label,
        .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success:active, .bp3-dark .bp3-menu-item.bp3-intent-success:active::before, .bp3-dark .bp3-menu-item.bp3-intent-success:active::after,
        .bp3-dark .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::after,
        .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{
          color:#ffffff; }
      .bp3-dark .bp3-menu-item.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-icon{
          color:inherit; }
        .bp3-dark .bp3-menu-item.bp3-intent-warning::before, .bp3-dark .bp3-menu-item.bp3-intent-warning::after,
        .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{
          color:#ffb366; }
        .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active{
          background-color:#d9822b; }
        .bp3-dark .bp3-menu-item.bp3-intent-warning:active{
          background-color:#bf7326; }
        .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,
        .bp3-dark .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,
        .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label,
        .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning:active, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::after,
        .bp3-dark .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::after,
        .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{
          color:#ffffff; }
      .bp3-dark .bp3-menu-item.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-icon{
          color:inherit; }
        .bp3-dark .bp3-menu-item.bp3-intent-danger::before, .bp3-dark .bp3-menu-item.bp3-intent-danger::after,
        .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{
          color:#ff7373; }
        .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active{
          background-color:#db3737; }
        .bp3-dark .bp3-menu-item.bp3-intent-danger:active{
          background-color:#c23030; }
        .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,
        .bp3-dark .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,
        .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label,
        .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger:active, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::after,
        .bp3-dark .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::after,
        .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{
          color:#ffffff; }
      .bp3-dark .bp3-menu-item::before,
      .bp3-dark .bp3-menu-item > .bp3-icon{
        color:#a7b6c2; }
      .bp3-dark .bp3-menu-item .bp3-menu-item-label{
        color:#a7b6c2; }
      .bp3-dark .bp3-menu-item.bp3-active, .bp3-dark .bp3-menu-item:active{
        background-color:rgba(138, 155, 168, 0.3); }
      .bp3-dark .bp3-menu-item.bp3-disabled{
        color:rgba(167, 182, 194, 0.6) !important; }
        .bp3-dark .bp3-menu-item.bp3-disabled::before,
        .bp3-dark .bp3-menu-item.bp3-disabled > .bp3-icon,
        .bp3-dark .bp3-menu-item.bp3-disabled .bp3-menu-item-label{
          color:rgba(167, 182, 194, 0.6) !important; }
    
    .bp3-dark .bp3-menu-divider,
    .bp3-dark .bp3-menu-header{
      border-color:rgba(255, 255, 255, 0.15); }
    
    .bp3-dark .bp3-menu-header > h6{
      color:#f5f8fa; }
    
    .bp3-label .bp3-menu{
      margin-top:5px; }
    .bp3-navbar{
      background-color:#ffffff;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
      height:50px;
      padding:0 15px;
      position:relative;
      width:100%;
      z-index:10; }
      .bp3-navbar.bp3-dark,
      .bp3-dark .bp3-navbar{
        background-color:#394b59; }
      .bp3-navbar.bp3-dark{
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-navbar{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-navbar.bp3-fixed-top{
        left:0;
        position:fixed;
        right:0;
        top:0; }
    
    .bp3-navbar-heading{
      font-size:16px;
      margin-right:15px; }
    
    .bp3-navbar-group{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      height:50px; }
      .bp3-navbar-group.bp3-align-left{
        float:left; }
      .bp3-navbar-group.bp3-align-right{
        float:right; }
    
    .bp3-navbar-divider{
      border-left:1px solid rgba(16, 22, 26, 0.15);
      height:20px;
      margin:0 10px; }
      .bp3-dark .bp3-navbar-divider{
        border-left-color:rgba(255, 255, 255, 0.15); }
    .bp3-non-ideal-state{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      height:100%;
      -webkit-box-pack:center;
          -ms-flex-pack:center;
              justify-content:center;
      text-align:center;
      width:100%; }
      .bp3-non-ideal-state > *{
        -webkit-box-flex:0;
            -ms-flex-positive:0;
                flex-grow:0;
        -ms-flex-negative:0;
            flex-shrink:0; }
      .bp3-non-ideal-state > .bp3-fill{
        -webkit-box-flex:1;
            -ms-flex-positive:1;
                flex-grow:1;
        -ms-flex-negative:1;
            flex-shrink:1; }
      .bp3-non-ideal-state::before,
      .bp3-non-ideal-state > *{
        margin-bottom:20px; }
      .bp3-non-ideal-state:empty::before,
      .bp3-non-ideal-state > :last-child{
        margin-bottom:0; }
      .bp3-non-ideal-state > *{
        max-width:400px; }
    
    .bp3-non-ideal-state-visual{
      color:rgba(92, 112, 128, 0.6);
      font-size:60px; }
      .bp3-dark .bp3-non-ideal-state-visual{
        color:rgba(167, 182, 194, 0.6); }
    
    .bp3-overflow-list{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -ms-flex-wrap:nowrap;
          flex-wrap:nowrap;
      min-width:0; }
    
    .bp3-overflow-list-spacer{
      -ms-flex-negative:1;
          flex-shrink:1;
      width:1px; }
    
    body.bp3-overlay-open{
      overflow:hidden; }
    
    .bp3-overlay{
      bottom:0;
      left:0;
      position:static;
      right:0;
      top:0;
      z-index:20; }
      .bp3-overlay:not(.bp3-overlay-open){
        pointer-events:none; }
      .bp3-overlay.bp3-overlay-container{
        overflow:hidden;
        position:fixed; }
        .bp3-overlay.bp3-overlay-container.bp3-overlay-inline{
          position:absolute; }
      .bp3-overlay.bp3-overlay-scroll-container{
        overflow:auto;
        position:fixed; }
        .bp3-overlay.bp3-overlay-scroll-container.bp3-overlay-inline{
          position:absolute; }
      .bp3-overlay.bp3-overlay-inline{
        display:inline;
        overflow:visible; }
    
    .bp3-overlay-content{
      position:fixed;
      z-index:20; }
      .bp3-overlay-inline .bp3-overlay-content,
      .bp3-overlay-scroll-container .bp3-overlay-content{
        position:absolute; }
    
    .bp3-overlay-backdrop{
      bottom:0;
      left:0;
      position:fixed;
      right:0;
      top:0;
      opacity:1;
      background-color:rgba(16, 22, 26, 0.7);
      overflow:auto;
      -webkit-user-select:none;
         -moz-user-select:none;
          -ms-user-select:none;
              user-select:none;
      z-index:20; }
      .bp3-overlay-backdrop.bp3-overlay-enter, .bp3-overlay-backdrop.bp3-overlay-appear{
        opacity:0; }
      .bp3-overlay-backdrop.bp3-overlay-enter-active, .bp3-overlay-backdrop.bp3-overlay-appear-active{
        opacity:1;
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:200ms;
                transition-duration:200ms;
        -webkit-transition-property:opacity;
        transition-property:opacity;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-overlay-backdrop.bp3-overlay-exit{
        opacity:1; }
      .bp3-overlay-backdrop.bp3-overlay-exit-active{
        opacity:0;
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:200ms;
                transition-duration:200ms;
        -webkit-transition-property:opacity;
        transition-property:opacity;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-overlay-backdrop:focus{
        outline:none; }
      .bp3-overlay-inline .bp3-overlay-backdrop{
        position:absolute; }
    .bp3-panel-stack{
      overflow:hidden;
      position:relative; }
    
    .bp3-panel-stack-header{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      -webkit-box-shadow:0 1px rgba(16, 22, 26, 0.15);
              box-shadow:0 1px rgba(16, 22, 26, 0.15);
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -ms-flex-negative:0;
          flex-shrink:0;
      height:30px;
      z-index:1; }
      .bp3-dark .bp3-panel-stack-header{
        -webkit-box-shadow:0 1px rgba(255, 255, 255, 0.15);
                box-shadow:0 1px rgba(255, 255, 255, 0.15); }
      .bp3-panel-stack-header > span{
        -webkit-box-align:stretch;
            -ms-flex-align:stretch;
                align-items:stretch;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-flex:1;
            -ms-flex:1;
                flex:1; }
      .bp3-panel-stack-header .bp3-heading{
        margin:0 5px; }
    
    .bp3-button.bp3-panel-stack-header-back{
      margin-left:5px;
      padding-left:0;
      white-space:nowrap; }
      .bp3-button.bp3-panel-stack-header-back .bp3-icon{
        margin:0 2px; }
    
    .bp3-panel-stack-view{
      bottom:0;
      left:0;
      position:absolute;
      right:0;
      top:0;
      background-color:#ffffff;
      border-right:1px solid rgba(16, 22, 26, 0.15);
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;
      margin-right:-1px;
      overflow-y:auto;
      z-index:1; }
      .bp3-dark .bp3-panel-stack-view{
        background-color:#30404d; }
      .bp3-panel-stack-view:nth-last-child(n + 4){
        display:none; }
    
    .bp3-panel-stack-push .bp3-panel-stack-enter, .bp3-panel-stack-push .bp3-panel-stack-appear{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      opacity:0; }
    
    .bp3-panel-stack-push .bp3-panel-stack-enter-active, .bp3-panel-stack-push .bp3-panel-stack-appear-active{
      -webkit-transform:translate(0%);
              transform:translate(0%);
      opacity:1;
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:400ms;
              transition-duration:400ms;
      -webkit-transition-property:opacity, -webkit-transform;
      transition-property:opacity, -webkit-transform;
      transition-property:transform, opacity;
      transition-property:transform, opacity, -webkit-transform;
      -webkit-transition-timing-function:ease;
              transition-timing-function:ease; }
    
    .bp3-panel-stack-push .bp3-panel-stack-exit{
      -webkit-transform:translate(0%);
              transform:translate(0%);
      opacity:1; }
    
    .bp3-panel-stack-push .bp3-panel-stack-exit-active{
      -webkit-transform:translateX(-50%);
              transform:translateX(-50%);
      opacity:0;
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:400ms;
              transition-duration:400ms;
      -webkit-transition-property:opacity, -webkit-transform;
      transition-property:opacity, -webkit-transform;
      transition-property:transform, opacity;
      transition-property:transform, opacity, -webkit-transform;
      -webkit-transition-timing-function:ease;
              transition-timing-function:ease; }
    
    .bp3-panel-stack-pop .bp3-panel-stack-enter, .bp3-panel-stack-pop .bp3-panel-stack-appear{
      -webkit-transform:translateX(-50%);
              transform:translateX(-50%);
      opacity:0; }
    
    .bp3-panel-stack-pop .bp3-panel-stack-enter-active, .bp3-panel-stack-pop .bp3-panel-stack-appear-active{
      -webkit-transform:translate(0%);
              transform:translate(0%);
      opacity:1;
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:400ms;
              transition-duration:400ms;
      -webkit-transition-property:opacity, -webkit-transform;
      transition-property:opacity, -webkit-transform;
      transition-property:transform, opacity;
      transition-property:transform, opacity, -webkit-transform;
      -webkit-transition-timing-function:ease;
              transition-timing-function:ease; }
    
    .bp3-panel-stack-pop .bp3-panel-stack-exit{
      -webkit-transform:translate(0%);
              transform:translate(0%);
      opacity:1; }
    
    .bp3-panel-stack-pop .bp3-panel-stack-exit-active{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      opacity:0;
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:400ms;
              transition-duration:400ms;
      -webkit-transition-property:opacity, -webkit-transform;
      transition-property:opacity, -webkit-transform;
      transition-property:transform, opacity;
      transition-property:transform, opacity, -webkit-transform;
      -webkit-transition-timing-function:ease;
              transition-timing-function:ease; }
    .bp3-panel-stack2{
      overflow:hidden;
      position:relative; }
    
    .bp3-panel-stack2-header{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      -webkit-box-shadow:0 1px rgba(16, 22, 26, 0.15);
              box-shadow:0 1px rgba(16, 22, 26, 0.15);
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -ms-flex-negative:0;
          flex-shrink:0;
      height:30px;
      z-index:1; }
      .bp3-dark .bp3-panel-stack2-header{
        -webkit-box-shadow:0 1px rgba(255, 255, 255, 0.15);
                box-shadow:0 1px rgba(255, 255, 255, 0.15); }
      .bp3-panel-stack2-header > span{
        -webkit-box-align:stretch;
            -ms-flex-align:stretch;
                align-items:stretch;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-flex:1;
            -ms-flex:1;
                flex:1; }
      .bp3-panel-stack2-header .bp3-heading{
        margin:0 5px; }
    
    .bp3-button.bp3-panel-stack2-header-back{
      margin-left:5px;
      padding-left:0;
      white-space:nowrap; }
      .bp3-button.bp3-panel-stack2-header-back .bp3-icon{
        margin:0 2px; }
    
    .bp3-panel-stack2-view{
      bottom:0;
      left:0;
      position:absolute;
      right:0;
      top:0;
      background-color:#ffffff;
      border-right:1px solid rgba(16, 22, 26, 0.15);
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;
      margin-right:-1px;
      overflow-y:auto;
      z-index:1; }
      .bp3-dark .bp3-panel-stack2-view{
        background-color:#30404d; }
      .bp3-panel-stack2-view:nth-last-child(n + 4){
        display:none; }
    
    .bp3-panel-stack2-push .bp3-panel-stack2-enter, .bp3-panel-stack2-push .bp3-panel-stack2-appear{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      opacity:0; }
    
    .bp3-panel-stack2-push .bp3-panel-stack2-enter-active, .bp3-panel-stack2-push .bp3-panel-stack2-appear-active{
      -webkit-transform:translate(0%);
              transform:translate(0%);
      opacity:1;
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:400ms;
              transition-duration:400ms;
      -webkit-transition-property:opacity, -webkit-transform;
      transition-property:opacity, -webkit-transform;
      transition-property:transform, opacity;
      transition-property:transform, opacity, -webkit-transform;
      -webkit-transition-timing-function:ease;
              transition-timing-function:ease; }
    
    .bp3-panel-stack2-push .bp3-panel-stack2-exit{
      -webkit-transform:translate(0%);
              transform:translate(0%);
      opacity:1; }
    
    .bp3-panel-stack2-push .bp3-panel-stack2-exit-active{
      -webkit-transform:translateX(-50%);
              transform:translateX(-50%);
      opacity:0;
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:400ms;
              transition-duration:400ms;
      -webkit-transition-property:opacity, -webkit-transform;
      transition-property:opacity, -webkit-transform;
      transition-property:transform, opacity;
      transition-property:transform, opacity, -webkit-transform;
      -webkit-transition-timing-function:ease;
              transition-timing-function:ease; }
    
    .bp3-panel-stack2-pop .bp3-panel-stack2-enter, .bp3-panel-stack2-pop .bp3-panel-stack2-appear{
      -webkit-transform:translateX(-50%);
              transform:translateX(-50%);
      opacity:0; }
    
    .bp3-panel-stack2-pop .bp3-panel-stack2-enter-active, .bp3-panel-stack2-pop .bp3-panel-stack2-appear-active{
      -webkit-transform:translate(0%);
              transform:translate(0%);
      opacity:1;
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:400ms;
              transition-duration:400ms;
      -webkit-transition-property:opacity, -webkit-transform;
      transition-property:opacity, -webkit-transform;
      transition-property:transform, opacity;
      transition-property:transform, opacity, -webkit-transform;
      -webkit-transition-timing-function:ease;
              transition-timing-function:ease; }
    
    .bp3-panel-stack2-pop .bp3-panel-stack2-exit{
      -webkit-transform:translate(0%);
              transform:translate(0%);
      opacity:1; }
    
    .bp3-panel-stack2-pop .bp3-panel-stack2-exit-active{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      opacity:0;
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:400ms;
              transition-duration:400ms;
      -webkit-transition-property:opacity, -webkit-transform;
      transition-property:opacity, -webkit-transform;
      transition-property:transform, opacity;
      transition-property:transform, opacity, -webkit-transform;
      -webkit-transition-timing-function:ease;
              transition-timing-function:ease; }
    .bp3-popover{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
      -webkit-transform:scale(1);
              transform:scale(1);
      border-radius:3px;
      display:inline-block;
      z-index:20; }
      .bp3-popover .bp3-popover-arrow{
        height:30px;
        position:absolute;
        width:30px; }
        .bp3-popover .bp3-popover-arrow::before{
          height:20px;
          margin:5px;
          width:20px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover{
        margin-bottom:17px;
        margin-top:-17px; }
        .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{
          bottom:-11px; }
          .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow svg{
            -webkit-transform:rotate(-90deg);
                    transform:rotate(-90deg); }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover{
        margin-left:17px; }
        .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{
          left:-11px; }
          .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow svg{
            -webkit-transform:rotate(0);
                    transform:rotate(0); }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover{
        margin-top:17px; }
        .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{
          top:-11px; }
          .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow svg{
            -webkit-transform:rotate(90deg);
                    transform:rotate(90deg); }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover{
        margin-left:-17px;
        margin-right:17px; }
        .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{
          right:-11px; }
          .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow svg{
            -webkit-transform:rotate(180deg);
                    transform:rotate(180deg); }
      .bp3-tether-element-attached-middle > .bp3-popover > .bp3-popover-arrow{
        top:50%;
        -webkit-transform:translateY(-50%);
                transform:translateY(-50%); }
      .bp3-tether-element-attached-center > .bp3-popover > .bp3-popover-arrow{
        right:50%;
        -webkit-transform:translateX(50%);
                transform:translateX(50%); }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{
        top:-0.3934px; }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{
        right:-0.3934px; }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{
        left:-0.3934px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{
        bottom:-0.3934px; }
      .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-popover{
        -webkit-transform-origin:top left;
                transform-origin:top left; }
      .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-popover{
        -webkit-transform-origin:top center;
                transform-origin:top center; }
      .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-popover{
        -webkit-transform-origin:top right;
                transform-origin:top right; }
      .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-popover{
        -webkit-transform-origin:center left;
                transform-origin:center left; }
      .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-popover{
        -webkit-transform-origin:center center;
                transform-origin:center center; }
      .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-popover{
        -webkit-transform-origin:center right;
                transform-origin:center right; }
      .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-popover{
        -webkit-transform-origin:bottom left;
                transform-origin:bottom left; }
      .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-popover{
        -webkit-transform-origin:bottom center;
                transform-origin:bottom center; }
      .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-popover{
        -webkit-transform-origin:bottom right;
                transform-origin:bottom right; }
      .bp3-popover .bp3-popover-content{
        background:#ffffff;
        color:inherit; }
      .bp3-popover .bp3-popover-arrow::before{
        -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);
                box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }
      .bp3-popover .bp3-popover-arrow-border{
        fill:#10161a;
        fill-opacity:0.1; }
      .bp3-popover .bp3-popover-arrow-fill{
        fill:#ffffff; }
      .bp3-popover-enter > .bp3-popover, .bp3-popover-appear > .bp3-popover{
        -webkit-transform:scale(0.3);
                transform:scale(0.3); }
      .bp3-popover-enter-active > .bp3-popover, .bp3-popover-appear-active > .bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:300ms;
                transition-duration:300ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
                transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
      .bp3-popover-exit > .bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-popover-exit-active > .bp3-popover{
        -webkit-transform:scale(0.3);
                transform:scale(0.3);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:300ms;
                transition-duration:300ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
                transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
      .bp3-popover .bp3-popover-content{
        border-radius:3px;
        position:relative; }
      .bp3-popover.bp3-popover-content-sizing .bp3-popover-content{
        max-width:350px;
        padding:20px; }
      .bp3-popover-target + .bp3-overlay .bp3-popover.bp3-popover-content-sizing{
        width:350px; }
      .bp3-popover.bp3-minimal{
        margin:0 !important; }
        .bp3-popover.bp3-minimal .bp3-popover-arrow{
          display:none; }
        .bp3-popover.bp3-minimal.bp3-popover{
          -webkit-transform:scale(1);
                  transform:scale(1); }
          .bp3-popover-enter > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear > .bp3-popover.bp3-minimal.bp3-popover{
            -webkit-transform:scale(1);
                    transform:scale(1); }
          .bp3-popover-enter-active > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear-active > .bp3-popover.bp3-minimal.bp3-popover{
            -webkit-transform:scale(1);
                    transform:scale(1);
            -webkit-transition-delay:0;
                    transition-delay:0;
            -webkit-transition-duration:100ms;
                    transition-duration:100ms;
            -webkit-transition-property:-webkit-transform;
            transition-property:-webkit-transform;
            transition-property:transform;
            transition-property:transform, -webkit-transform;
            -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                    transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
          .bp3-popover-exit > .bp3-popover.bp3-minimal.bp3-popover{
            -webkit-transform:scale(1);
                    transform:scale(1); }
          .bp3-popover-exit-active > .bp3-popover.bp3-minimal.bp3-popover{
            -webkit-transform:scale(1);
                    transform:scale(1);
            -webkit-transition-delay:0;
                    transition-delay:0;
            -webkit-transition-duration:100ms;
                    transition-duration:100ms;
            -webkit-transition-property:-webkit-transform;
            transition-property:-webkit-transform;
            transition-property:transform;
            transition-property:transform, -webkit-transform;
            -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                    transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-popover.bp3-dark,
      .bp3-dark .bp3-popover{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
        .bp3-popover.bp3-dark .bp3-popover-content,
        .bp3-dark .bp3-popover .bp3-popover-content{
          background:#30404d;
          color:inherit; }
        .bp3-popover.bp3-dark .bp3-popover-arrow::before,
        .bp3-dark .bp3-popover .bp3-popover-arrow::before{
          -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);
                  box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }
        .bp3-popover.bp3-dark .bp3-popover-arrow-border,
        .bp3-dark .bp3-popover .bp3-popover-arrow-border{
          fill:#10161a;
          fill-opacity:0.2; }
        .bp3-popover.bp3-dark .bp3-popover-arrow-fill,
        .bp3-dark .bp3-popover .bp3-popover-arrow-fill{
          fill:#30404d; }
    
    .bp3-popover-arrow::before{
      border-radius:2px;
      content:"";
      display:block;
      position:absolute;
      -webkit-transform:rotate(45deg);
              transform:rotate(45deg); }
    
    .bp3-tether-pinned .bp3-popover-arrow{
      display:none; }
    
    .bp3-popover-backdrop{
      background:rgba(255, 255, 255, 0); }
    
    .bp3-transition-container{
      opacity:1;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      z-index:20; }
      .bp3-transition-container.bp3-popover-enter, .bp3-transition-container.bp3-popover-appear{
        opacity:0; }
      .bp3-transition-container.bp3-popover-enter-active, .bp3-transition-container.bp3-popover-appear-active{
        opacity:1;
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-property:opacity;
        transition-property:opacity;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-transition-container.bp3-popover-exit{
        opacity:1; }
      .bp3-transition-container.bp3-popover-exit-active{
        opacity:0;
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-property:opacity;
        transition-property:opacity;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-transition-container:focus{
        outline:none; }
      .bp3-transition-container.bp3-popover-leave .bp3-popover-content{
        pointer-events:none; }
      .bp3-transition-container[data-x-out-of-boundaries]{
        display:none; }
    
    span.bp3-popover-target{
      display:inline-block; }
    
    .bp3-popover-wrapper.bp3-fill{
      width:100%; }
    
    .bp3-portal{
      left:0;
      position:absolute;
      right:0;
      top:0; }
    @-webkit-keyframes linear-progress-bar-stripes{
      from{
        background-position:0 0; }
      to{
        background-position:30px 0; } }
    @keyframes linear-progress-bar-stripes{
      from{
        background-position:0 0; }
      to{
        background-position:30px 0; } }
    
    .bp3-progress-bar{
      background:rgba(92, 112, 128, 0.2);
      border-radius:40px;
      display:block;
      height:8px;
      overflow:hidden;
      position:relative;
      width:100%; }
      .bp3-progress-bar .bp3-progress-meter{
        background:linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%);
        background-color:rgba(92, 112, 128, 0.8);
        background-size:30px 30px;
        border-radius:40px;
        height:100%;
        position:absolute;
        -webkit-transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
        transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
        width:100%; }
      .bp3-progress-bar:not(.bp3-no-animation):not(.bp3-no-stripes) .bp3-progress-meter{
        animation:linear-progress-bar-stripes 300ms linear infinite reverse; }
      .bp3-progress-bar.bp3-no-stripes .bp3-progress-meter{
        background-image:none; }
    
    .bp3-dark .bp3-progress-bar{
      background:rgba(16, 22, 26, 0.5); }
      .bp3-dark .bp3-progress-bar .bp3-progress-meter{
        background-color:#8a9ba8; }
    
    .bp3-progress-bar.bp3-intent-primary .bp3-progress-meter{
      background-color:#137cbd; }
    
    .bp3-progress-bar.bp3-intent-success .bp3-progress-meter{
      background-color:#0f9960; }
    
    .bp3-progress-bar.bp3-intent-warning .bp3-progress-meter{
      background-color:#d9822b; }
    
    .bp3-progress-bar.bp3-intent-danger .bp3-progress-meter{
      background-color:#db3737; }
    @-webkit-keyframes skeleton-glow{
      from{
        background:rgba(206, 217, 224, 0.2);
        border-color:rgba(206, 217, 224, 0.2); }
      to{
        background:rgba(92, 112, 128, 0.2);
        border-color:rgba(92, 112, 128, 0.2); } }
    @keyframes skeleton-glow{
      from{
        background:rgba(206, 217, 224, 0.2);
        border-color:rgba(206, 217, 224, 0.2); }
      to{
        background:rgba(92, 112, 128, 0.2);
        border-color:rgba(92, 112, 128, 0.2); } }
    .bp3-skeleton{
      -webkit-animation:1000ms linear infinite alternate skeleton-glow;
              animation:1000ms linear infinite alternate skeleton-glow;
      background:rgba(206, 217, 224, 0.2);
      background-clip:padding-box !important;
      border-color:rgba(206, 217, 224, 0.2) !important;
      border-radius:2px;
      -webkit-box-shadow:none !important;
              box-shadow:none !important;
      color:transparent !important;
      cursor:default;
      pointer-events:none;
      -webkit-user-select:none;
         -moz-user-select:none;
          -ms-user-select:none;
              user-select:none; }
      .bp3-skeleton::before, .bp3-skeleton::after,
      .bp3-skeleton *{
        visibility:hidden !important; }
    .bp3-slider{
      height:40px;
      min-width:150px;
      width:100%;
      cursor:default;
      outline:none;
      position:relative;
      -webkit-user-select:none;
         -moz-user-select:none;
          -ms-user-select:none;
              user-select:none; }
      .bp3-slider:hover{
        cursor:pointer; }
      .bp3-slider:active{
        cursor:-webkit-grabbing;
        cursor:grabbing; }
      .bp3-slider.bp3-disabled{
        cursor:not-allowed;
        opacity:0.5; }
      .bp3-slider.bp3-slider-unlabeled{
        height:16px; }
    
    .bp3-slider-track,
    .bp3-slider-progress{
      height:6px;
      left:0;
      right:0;
      top:5px;
      position:absolute; }
    
    .bp3-slider-track{
      border-radius:3px;
      overflow:hidden; }
    
    .bp3-slider-progress{
      background:rgba(92, 112, 128, 0.2); }
      .bp3-dark .bp3-slider-progress{
        background:rgba(16, 22, 26, 0.5); }
      .bp3-slider-progress.bp3-intent-primary{
        background-color:#137cbd; }
      .bp3-slider-progress.bp3-intent-success{
        background-color:#0f9960; }
      .bp3-slider-progress.bp3-intent-warning{
        background-color:#d9822b; }
      .bp3-slider-progress.bp3-intent-danger{
        background-color:#db3737; }
    
    .bp3-slider-handle{
      background-color:#f5f8fa;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      color:#182026;
      border-radius:3px;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
      cursor:pointer;
      height:16px;
      left:0;
      position:absolute;
      top:0;
      width:16px; }
      .bp3-slider-handle:hover{
        background-clip:padding-box;
        background-color:#ebf1f5;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
      .bp3-slider-handle:active, .bp3-slider-handle.bp3-active{
        background-color:#d8e1e8;
        background-image:none;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-slider-handle:disabled, .bp3-slider-handle.bp3-disabled{
        background-color:rgba(206, 217, 224, 0.5);
        background-image:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(92, 112, 128, 0.6);
        cursor:not-allowed;
        outline:none; }
        .bp3-slider-handle:disabled.bp3-active, .bp3-slider-handle:disabled.bp3-active:hover, .bp3-slider-handle.bp3-disabled.bp3-active, .bp3-slider-handle.bp3-disabled.bp3-active:hover{
          background:rgba(206, 217, 224, 0.7); }
      .bp3-slider-handle:focus{
        z-index:1; }
      .bp3-slider-handle:hover{
        background-clip:padding-box;
        background-color:#ebf1f5;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
        cursor:-webkit-grab;
        cursor:grab;
        z-index:2; }
      .bp3-slider-handle.bp3-active{
        background-color:#d8e1e8;
        background-image:none;
        -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);
        cursor:-webkit-grabbing;
        cursor:grabbing; }
      .bp3-disabled .bp3-slider-handle{
        background:#bfccd6;
        -webkit-box-shadow:none;
                box-shadow:none;
        pointer-events:none; }
      .bp3-dark .bp3-slider-handle{
        background-color:#394b59;
        background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
        background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
        color:#f5f8fa; }
        .bp3-dark .bp3-slider-handle:hover, .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{
          color:#f5f8fa; }
        .bp3-dark .bp3-slider-handle:hover{
          background-color:#30404d;
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{
          background-color:#202b33;
          background-image:none;
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
        .bp3-dark .bp3-slider-handle:disabled, .bp3-dark .bp3-slider-handle.bp3-disabled{
          background-color:rgba(57, 75, 89, 0.5);
          background-image:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(167, 182, 194, 0.6); }
          .bp3-dark .bp3-slider-handle:disabled.bp3-active, .bp3-dark .bp3-slider-handle.bp3-disabled.bp3-active{
            background:rgba(57, 75, 89, 0.7); }
        .bp3-dark .bp3-slider-handle .bp3-button-spinner .bp3-spinner-head{
          background:rgba(16, 22, 26, 0.5);
          stroke:#8a9ba8; }
        .bp3-dark .bp3-slider-handle, .bp3-dark .bp3-slider-handle:hover{
          background-color:#394b59; }
        .bp3-dark .bp3-slider-handle.bp3-active{
          background-color:#293742; }
      .bp3-dark .bp3-disabled .bp3-slider-handle{
        background:#5c7080;
        border-color:#5c7080;
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-slider-handle .bp3-slider-label{
        background:#394b59;
        border-radius:3px;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
        color:#f5f8fa;
        margin-left:8px; }
        .bp3-dark .bp3-slider-handle .bp3-slider-label{
          background:#e1e8ed;
          -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
          color:#394b59; }
        .bp3-disabled .bp3-slider-handle .bp3-slider-label{
          -webkit-box-shadow:none;
                  box-shadow:none; }
      .bp3-slider-handle.bp3-start, .bp3-slider-handle.bp3-end{
        width:8px; }
      .bp3-slider-handle.bp3-start{
        border-bottom-right-radius:0;
        border-top-right-radius:0; }
      .bp3-slider-handle.bp3-end{
        border-bottom-left-radius:0;
        border-top-left-radius:0;
        margin-left:8px; }
        .bp3-slider-handle.bp3-end .bp3-slider-label{
          margin-left:0; }
    
    .bp3-slider-label{
      -webkit-transform:translate(-50%, 20px);
              transform:translate(-50%, 20px);
      display:inline-block;
      font-size:12px;
      line-height:1;
      padding:2px 5px;
      position:absolute;
      vertical-align:top; }
    
    .bp3-slider.bp3-vertical{
      height:150px;
      min-width:40px;
      width:40px; }
      .bp3-slider.bp3-vertical .bp3-slider-track,
      .bp3-slider.bp3-vertical .bp3-slider-progress{
        bottom:0;
        height:auto;
        left:5px;
        top:0;
        width:6px; }
      .bp3-slider.bp3-vertical .bp3-slider-progress{
        top:auto; }
      .bp3-slider.bp3-vertical .bp3-slider-label{
        -webkit-transform:translate(20px, 50%);
                transform:translate(20px, 50%); }
      .bp3-slider.bp3-vertical .bp3-slider-handle{
        top:auto; }
        .bp3-slider.bp3-vertical .bp3-slider-handle .bp3-slider-label{
          margin-left:0;
          margin-top:-8px; }
        .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end, .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{
          height:8px;
          margin-left:0;
          width:16px; }
        .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{
          border-bottom-right-radius:3px;
          border-top-left-radius:0; }
          .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start .bp3-slider-label{
            -webkit-transform:translate(20px);
                    transform:translate(20px); }
        .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end{
          border-bottom-left-radius:0;
          border-bottom-right-radius:0;
          border-top-left-radius:3px;
          margin-bottom:8px; }
    
    @-webkit-keyframes pt-spinner-animation{
      from{
        -webkit-transform:rotate(0deg);
                transform:rotate(0deg); }
      to{
        -webkit-transform:rotate(360deg);
                transform:rotate(360deg); } }
    
    @keyframes pt-spinner-animation{
      from{
        -webkit-transform:rotate(0deg);
                transform:rotate(0deg); }
      to{
        -webkit-transform:rotate(360deg);
                transform:rotate(360deg); } }
    
    .bp3-spinner{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-pack:center;
          -ms-flex-pack:center;
              justify-content:center;
      overflow:visible;
      vertical-align:middle; }
      .bp3-spinner svg{
        display:block; }
      .bp3-spinner path{
        fill-opacity:0; }
      .bp3-spinner .bp3-spinner-head{
        stroke:rgba(92, 112, 128, 0.8);
        stroke-linecap:round;
        -webkit-transform-origin:center;
                transform-origin:center;
        -webkit-transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
        transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-spinner .bp3-spinner-track{
        stroke:rgba(92, 112, 128, 0.2); }
    
    .bp3-spinner-animation{
      -webkit-animation:pt-spinner-animation 500ms linear infinite;
              animation:pt-spinner-animation 500ms linear infinite; }
      .bp3-no-spin > .bp3-spinner-animation{
        -webkit-animation:none;
                animation:none; }
    
    .bp3-dark .bp3-spinner .bp3-spinner-head{
      stroke:#8a9ba8; }
    
    .bp3-dark .bp3-spinner .bp3-spinner-track{
      stroke:rgba(16, 22, 26, 0.5); }
    
    .bp3-spinner.bp3-intent-primary .bp3-spinner-head{
      stroke:#137cbd; }
    
    .bp3-spinner.bp3-intent-success .bp3-spinner-head{
      stroke:#0f9960; }
    
    .bp3-spinner.bp3-intent-warning .bp3-spinner-head{
      stroke:#d9822b; }
    
    .bp3-spinner.bp3-intent-danger .bp3-spinner-head{
      stroke:#db3737; }
    .bp3-tabs.bp3-vertical{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex; }
      .bp3-tabs.bp3-vertical > .bp3-tab-list{
        -webkit-box-align:start;
            -ms-flex-align:start;
                align-items:flex-start;
        -webkit-box-orient:vertical;
        -webkit-box-direction:normal;
            -ms-flex-direction:column;
                flex-direction:column; }
        .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab{
          border-radius:3px;
          padding:0 10px;
          width:100%; }
          .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab[aria-selected="true"]{
            background-color:rgba(19, 124, 189, 0.2);
            -webkit-box-shadow:none;
                    box-shadow:none; }
        .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab-indicator-wrapper .bp3-tab-indicator{
          background-color:rgba(19, 124, 189, 0.2);
          border-radius:3px;
          bottom:0;
          height:auto;
          left:0;
          right:0;
          top:0; }
      .bp3-tabs.bp3-vertical > .bp3-tab-panel{
        margin-top:0;
        padding-left:20px; }
    
    .bp3-tab-list{
      -webkit-box-align:end;
          -ms-flex-align:end;
              align-items:flex-end;
      border:none;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-flex:0;
          -ms-flex:0 0 auto;
              flex:0 0 auto;
      list-style:none;
      margin:0;
      padding:0;
      position:relative; }
      .bp3-tab-list > *:not(:last-child){
        margin-right:20px; }
    
    .bp3-tab{
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      word-wrap:normal;
      color:#182026;
      cursor:pointer;
      -webkit-box-flex:0;
          -ms-flex:0 0 auto;
              flex:0 0 auto;
      font-size:14px;
      line-height:30px;
      max-width:100%;
      position:relative;
      vertical-align:top; }
      .bp3-tab a{
        color:inherit;
        display:block;
        text-decoration:none; }
      .bp3-tab-indicator-wrapper ~ .bp3-tab{
        background-color:transparent !important;
        -webkit-box-shadow:none !important;
                box-shadow:none !important; }
      .bp3-tab[aria-disabled="true"]{
        color:rgba(92, 112, 128, 0.6);
        cursor:not-allowed; }
      .bp3-tab[aria-selected="true"]{
        border-radius:0;
        -webkit-box-shadow:inset 0 -3px 0 #106ba3;
                box-shadow:inset 0 -3px 0 #106ba3; }
      .bp3-tab[aria-selected="true"], .bp3-tab:not([aria-disabled="true"]):hover{
        color:#106ba3; }
      .bp3-tab:focus{
        -moz-outline-radius:0; }
      .bp3-large > .bp3-tab{
        font-size:16px;
        line-height:40px; }
    
    .bp3-tab-panel{
      margin-top:20px; }
      .bp3-tab-panel[aria-hidden="true"]{
        display:none; }
    
    .bp3-tab-indicator-wrapper{
      left:0;
      pointer-events:none;
      position:absolute;
      top:0;
      -webkit-transform:translateX(0), translateY(0);
              transform:translateX(0), translateY(0);
      -webkit-transition:height, width, -webkit-transform;
      transition:height, width, -webkit-transform;
      transition:height, transform, width;
      transition:height, transform, width, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-tab-indicator-wrapper .bp3-tab-indicator{
        background-color:#106ba3;
        bottom:0;
        height:3px;
        left:0;
        position:absolute;
        right:0; }
      .bp3-tab-indicator-wrapper.bp3-no-animation{
        -webkit-transition:none;
        transition:none; }
    
    .bp3-dark .bp3-tab{
      color:#f5f8fa; }
      .bp3-dark .bp3-tab[aria-disabled="true"]{
        color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-tab[aria-selected="true"]{
        -webkit-box-shadow:inset 0 -3px 0 #48aff0;
                box-shadow:inset 0 -3px 0 #48aff0; }
      .bp3-dark .bp3-tab[aria-selected="true"], .bp3-dark .bp3-tab:not([aria-disabled="true"]):hover{
        color:#48aff0; }
    
    .bp3-dark .bp3-tab-indicator{
      background-color:#48aff0; }
    
    .bp3-flex-expander{
      -webkit-box-flex:1;
          -ms-flex:1 1;
              flex:1 1; }
    .bp3-tag{
      display:-webkit-inline-box;
      display:-ms-inline-flexbox;
      display:inline-flex;
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      background-color:#5c7080;
      border:none;
      border-radius:3px;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#f5f8fa;
      font-size:12px;
      line-height:16px;
      max-width:100%;
      min-height:20px;
      min-width:20px;
      padding:2px 6px;
      position:relative; }
      .bp3-tag.bp3-interactive{
        cursor:pointer; }
        .bp3-tag.bp3-interactive:hover{
          background-color:rgba(92, 112, 128, 0.85); }
        .bp3-tag.bp3-interactive.bp3-active, .bp3-tag.bp3-interactive:active{
          background-color:rgba(92, 112, 128, 0.7); }
      .bp3-tag > *{
        -webkit-box-flex:0;
            -ms-flex-positive:0;
                flex-grow:0;
        -ms-flex-negative:0;
            flex-shrink:0; }
      .bp3-tag > .bp3-fill{
        -webkit-box-flex:1;
            -ms-flex-positive:1;
                flex-grow:1;
        -ms-flex-negative:1;
            flex-shrink:1; }
      .bp3-tag::before,
      .bp3-tag > *{
        margin-right:4px; }
      .bp3-tag:empty::before,
      .bp3-tag > :last-child{
        margin-right:0; }
      .bp3-tag:focus{
        outline:rgba(19, 124, 189, 0.6) auto 2px;
        outline-offset:0;
        -moz-outline-radius:6px; }
      .bp3-tag.bp3-round{
        border-radius:30px;
        padding-left:8px;
        padding-right:8px; }
      .bp3-dark .bp3-tag{
        background-color:#bfccd6;
        color:#182026; }
        .bp3-dark .bp3-tag.bp3-interactive{
          cursor:pointer; }
          .bp3-dark .bp3-tag.bp3-interactive:hover{
            background-color:rgba(191, 204, 214, 0.85); }
          .bp3-dark .bp3-tag.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-interactive:active{
            background-color:rgba(191, 204, 214, 0.7); }
        .bp3-dark .bp3-tag > .bp3-icon, .bp3-dark .bp3-tag .bp3-icon-standard, .bp3-dark .bp3-tag .bp3-icon-large{
          fill:currentColor; }
      .bp3-tag > .bp3-icon, .bp3-tag .bp3-icon-standard, .bp3-tag .bp3-icon-large{
        fill:#ffffff; }
      .bp3-tag.bp3-large,
      .bp3-large .bp3-tag{
        font-size:14px;
        line-height:20px;
        min-height:30px;
        min-width:30px;
        padding:5px 10px; }
        .bp3-tag.bp3-large::before,
        .bp3-tag.bp3-large > *,
        .bp3-large .bp3-tag::before,
        .bp3-large .bp3-tag > *{
          margin-right:7px; }
        .bp3-tag.bp3-large:empty::before,
        .bp3-tag.bp3-large > :last-child,
        .bp3-large .bp3-tag:empty::before,
        .bp3-large .bp3-tag > :last-child{
          margin-right:0; }
        .bp3-tag.bp3-large.bp3-round,
        .bp3-large .bp3-tag.bp3-round{
          padding-left:12px;
          padding-right:12px; }
      .bp3-tag.bp3-intent-primary{
        background:#137cbd;
        color:#ffffff; }
        .bp3-tag.bp3-intent-primary.bp3-interactive{
          cursor:pointer; }
          .bp3-tag.bp3-intent-primary.bp3-interactive:hover{
            background-color:rgba(19, 124, 189, 0.85); }
          .bp3-tag.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-primary.bp3-interactive:active{
            background-color:rgba(19, 124, 189, 0.7); }
      .bp3-tag.bp3-intent-success{
        background:#0f9960;
        color:#ffffff; }
        .bp3-tag.bp3-intent-success.bp3-interactive{
          cursor:pointer; }
          .bp3-tag.bp3-intent-success.bp3-interactive:hover{
            background-color:rgba(15, 153, 96, 0.85); }
          .bp3-tag.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-success.bp3-interactive:active{
            background-color:rgba(15, 153, 96, 0.7); }
      .bp3-tag.bp3-intent-warning{
        background:#d9822b;
        color:#ffffff; }
        .bp3-tag.bp3-intent-warning.bp3-interactive{
          cursor:pointer; }
          .bp3-tag.bp3-intent-warning.bp3-interactive:hover{
            background-color:rgba(217, 130, 43, 0.85); }
          .bp3-tag.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-warning.bp3-interactive:active{
            background-color:rgba(217, 130, 43, 0.7); }
      .bp3-tag.bp3-intent-danger{
        background:#db3737;
        color:#ffffff; }
        .bp3-tag.bp3-intent-danger.bp3-interactive{
          cursor:pointer; }
          .bp3-tag.bp3-intent-danger.bp3-interactive:hover{
            background-color:rgba(219, 55, 55, 0.85); }
          .bp3-tag.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-danger.bp3-interactive:active{
            background-color:rgba(219, 55, 55, 0.7); }
      .bp3-tag.bp3-fill{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        width:100%; }
      .bp3-tag.bp3-minimal > .bp3-icon, .bp3-tag.bp3-minimal .bp3-icon-standard, .bp3-tag.bp3-minimal .bp3-icon-large{
        fill:#5c7080; }
      .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]){
        background-color:rgba(138, 155, 168, 0.2);
        color:#182026; }
        .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive{
          cursor:pointer; }
          .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover{
            background-color:rgba(92, 112, 128, 0.3); }
          .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active, .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active{
            background-color:rgba(92, 112, 128, 0.4); }
        .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]){
          color:#f5f8fa; }
          .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive{
            cursor:pointer; }
            .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover{
              background-color:rgba(191, 204, 214, 0.3); }
            .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active{
              background-color:rgba(191, 204, 214, 0.4); }
          .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) > .bp3-icon, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-large{
            fill:#a7b6c2; }
      .bp3-tag.bp3-minimal.bp3-intent-primary{
        background-color:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
        .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{
          cursor:pointer; }
          .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{
            background-color:rgba(19, 124, 189, 0.25); }
          .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{
            background-color:rgba(19, 124, 189, 0.35); }
        .bp3-tag.bp3-minimal.bp3-intent-primary > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-large{
          fill:#137cbd; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary{
          background-color:rgba(19, 124, 189, 0.25);
          color:#48aff0; }
          .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{
            cursor:pointer; }
            .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{
              background-color:rgba(19, 124, 189, 0.35); }
            .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{
              background-color:rgba(19, 124, 189, 0.45); }
      .bp3-tag.bp3-minimal.bp3-intent-success{
        background-color:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
        .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{
          cursor:pointer; }
          .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{
            background-color:rgba(15, 153, 96, 0.25); }
          .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{
            background-color:rgba(15, 153, 96, 0.35); }
        .bp3-tag.bp3-minimal.bp3-intent-success > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-large{
          fill:#0f9960; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success{
          background-color:rgba(15, 153, 96, 0.25);
          color:#3dcc91; }
          .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{
            cursor:pointer; }
            .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{
              background-color:rgba(15, 153, 96, 0.35); }
            .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{
              background-color:rgba(15, 153, 96, 0.45); }
      .bp3-tag.bp3-minimal.bp3-intent-warning{
        background-color:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
        .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{
          cursor:pointer; }
          .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{
            background-color:rgba(217, 130, 43, 0.25); }
          .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{
            background-color:rgba(217, 130, 43, 0.35); }
        .bp3-tag.bp3-minimal.bp3-intent-warning > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-large{
          fill:#d9822b; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning{
          background-color:rgba(217, 130, 43, 0.25);
          color:#ffb366; }
          .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{
            cursor:pointer; }
            .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{
              background-color:rgba(217, 130, 43, 0.35); }
            .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{
              background-color:rgba(217, 130, 43, 0.45); }
      .bp3-tag.bp3-minimal.bp3-intent-danger{
        background-color:rgba(219, 55, 55, 0.15);
        color:#c23030; }
        .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{
          cursor:pointer; }
          .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{
            background-color:rgba(219, 55, 55, 0.25); }
          .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{
            background-color:rgba(219, 55, 55, 0.35); }
        .bp3-tag.bp3-minimal.bp3-intent-danger > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-large{
          fill:#db3737; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger{
          background-color:rgba(219, 55, 55, 0.25);
          color:#ff7373; }
          .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{
            cursor:pointer; }
            .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{
              background-color:rgba(219, 55, 55, 0.35); }
            .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{
              background-color:rgba(219, 55, 55, 0.45); }
    
    .bp3-tag-remove{
      background:none;
      border:none;
      color:inherit;
      cursor:pointer;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      margin-bottom:-2px;
      margin-right:-6px !important;
      margin-top:-2px;
      opacity:0.5;
      padding:2px;
      padding-left:0; }
      .bp3-tag-remove:hover{
        background:none;
        opacity:0.8;
        text-decoration:none; }
      .bp3-tag-remove:active{
        opacity:1; }
      .bp3-tag-remove:empty::before{
        font-family:"Icons16", sans-serif;
        font-size:16px;
        font-style:normal;
        font-weight:400;
        line-height:1;
        -moz-osx-font-smoothing:grayscale;
        -webkit-font-smoothing:antialiased;
        content:""; }
      .bp3-large .bp3-tag-remove{
        margin-right:-10px !important;
        padding:0 5px 0 0; }
        .bp3-large .bp3-tag-remove:empty::before{
          font-family:"Icons20", sans-serif;
          font-size:20px;
          font-style:normal;
          font-weight:400;
          line-height:1; }
    .bp3-tag-input{
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-align:start;
          -ms-flex-align:start;
              align-items:flex-start;
      cursor:text;
      height:auto;
      line-height:inherit;
      min-height:30px;
      padding-left:5px;
      padding-right:0; }
      .bp3-tag-input > *{
        -webkit-box-flex:0;
            -ms-flex-positive:0;
                flex-grow:0;
        -ms-flex-negative:0;
            flex-shrink:0; }
      .bp3-tag-input > .bp3-tag-input-values{
        -webkit-box-flex:1;
            -ms-flex-positive:1;
                flex-grow:1;
        -ms-flex-negative:1;
            flex-shrink:1; }
      .bp3-tag-input .bp3-tag-input-icon{
        color:#5c7080;
        margin-left:2px;
        margin-right:7px;
        margin-top:7px; }
      .bp3-tag-input .bp3-tag-input-values{
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-orient:horizontal;
        -webkit-box-direction:normal;
            -ms-flex-direction:row;
                flex-direction:row;
        -webkit-box-align:center;
            -ms-flex-align:center;
                align-items:center;
        -ms-flex-item-align:stretch;
            align-self:stretch;
        -ms-flex-wrap:wrap;
            flex-wrap:wrap;
        margin-right:7px;
        margin-top:5px;
        min-width:0; }
        .bp3-tag-input .bp3-tag-input-values > *{
          -webkit-box-flex:0;
              -ms-flex-positive:0;
                  flex-grow:0;
          -ms-flex-negative:0;
              flex-shrink:0; }
        .bp3-tag-input .bp3-tag-input-values > .bp3-fill{
          -webkit-box-flex:1;
              -ms-flex-positive:1;
                  flex-grow:1;
          -ms-flex-negative:1;
              flex-shrink:1; }
        .bp3-tag-input .bp3-tag-input-values::before,
        .bp3-tag-input .bp3-tag-input-values > *{
          margin-right:5px; }
        .bp3-tag-input .bp3-tag-input-values:empty::before,
        .bp3-tag-input .bp3-tag-input-values > :last-child{
          margin-right:0; }
        .bp3-tag-input .bp3-tag-input-values:first-child .bp3-input-ghost:first-child{
          padding-left:5px; }
        .bp3-tag-input .bp3-tag-input-values > *{
          margin-bottom:5px; }
      .bp3-tag-input .bp3-tag{
        overflow-wrap:break-word; }
        .bp3-tag-input .bp3-tag.bp3-active{
          outline:rgba(19, 124, 189, 0.6) auto 2px;
          outline-offset:0;
          -moz-outline-radius:6px; }
      .bp3-tag-input .bp3-input-ghost{
        -webkit-box-flex:1;
            -ms-flex:1 1 auto;
                flex:1 1 auto;
        line-height:20px;
        width:80px; }
        .bp3-tag-input .bp3-input-ghost:disabled, .bp3-tag-input .bp3-input-ghost.bp3-disabled{
          cursor:not-allowed; }
      .bp3-tag-input .bp3-button,
      .bp3-tag-input .bp3-spinner{
        margin:3px;
        margin-left:0; }
      .bp3-tag-input .bp3-button{
        min-height:24px;
        min-width:24px;
        padding:0 7px; }
      .bp3-tag-input.bp3-large{
        height:auto;
        min-height:40px; }
        .bp3-tag-input.bp3-large::before,
        .bp3-tag-input.bp3-large > *{
          margin-right:10px; }
        .bp3-tag-input.bp3-large:empty::before,
        .bp3-tag-input.bp3-large > :last-child{
          margin-right:0; }
        .bp3-tag-input.bp3-large .bp3-tag-input-icon{
          margin-left:5px;
          margin-top:10px; }
        .bp3-tag-input.bp3-large .bp3-input-ghost{
          line-height:30px; }
        .bp3-tag-input.bp3-large .bp3-button{
          min-height:30px;
          min-width:30px;
          padding:5px 10px;
          margin:5px;
          margin-left:0; }
        .bp3-tag-input.bp3-large .bp3-spinner{
          margin:8px;
          margin-left:0; }
      .bp3-tag-input.bp3-active{
        background-color:#ffffff;
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-tag-input.bp3-active.bp3-intent-primary{
          -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-tag-input.bp3-active.bp3-intent-success{
          -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-tag-input.bp3-active.bp3-intent-warning{
          -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
        .bp3-tag-input.bp3-active.bp3-intent-danger{
          -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
                  box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
      .bp3-dark .bp3-tag-input .bp3-tag-input-icon, .bp3-tag-input.bp3-dark .bp3-tag-input-icon{
        color:#a7b6c2; }
      .bp3-dark .bp3-tag-input .bp3-input-ghost, .bp3-tag-input.bp3-dark .bp3-input-ghost{
        color:#f5f8fa; }
        .bp3-dark .bp3-tag-input .bp3-input-ghost::-webkit-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-webkit-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-tag-input .bp3-input-ghost::-moz-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-moz-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-tag-input .bp3-input-ghost:-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost:-ms-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-tag-input .bp3-input-ghost::-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-ms-input-placeholder{
          color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-tag-input .bp3-input-ghost::placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::placeholder{
          color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-tag-input.bp3-active, .bp3-tag-input.bp3-dark.bp3-active{
        background-color:rgba(16, 22, 26, 0.3);
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-primary, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-primary{
          -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-success, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-success{
          -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-warning, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-warning{
          -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
        .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-danger, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-danger{
          -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                  box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    
    .bp3-input-ghost{
      background:none;
      border:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      padding:0; }
      .bp3-input-ghost::-webkit-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-input-ghost::-moz-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-input-ghost:-ms-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-input-ghost::-ms-input-placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-input-ghost::placeholder{
        color:rgba(92, 112, 128, 0.6);
        opacity:1; }
      .bp3-input-ghost:focus{
        outline:none !important; }
    .bp3-toast{
      -webkit-box-align:start;
          -ms-flex-align:start;
              align-items:flex-start;
      background-color:#ffffff;
      border-radius:3px;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      margin:20px 0 0;
      max-width:500px;
      min-width:300px;
      pointer-events:all;
      position:relative !important; }
      .bp3-toast.bp3-toast-enter, .bp3-toast.bp3-toast-appear{
        -webkit-transform:translateY(-40px);
                transform:translateY(-40px); }
      .bp3-toast.bp3-toast-enter-active, .bp3-toast.bp3-toast-appear-active{
        -webkit-transform:translateY(0);
                transform:translateY(0);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:300ms;
                transition-duration:300ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
                transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
      .bp3-toast.bp3-toast-enter ~ .bp3-toast, .bp3-toast.bp3-toast-appear ~ .bp3-toast{
        -webkit-transform:translateY(-40px);
                transform:translateY(-40px); }
      .bp3-toast.bp3-toast-enter-active ~ .bp3-toast, .bp3-toast.bp3-toast-appear-active ~ .bp3-toast{
        -webkit-transform:translateY(0);
                transform:translateY(0);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:300ms;
                transition-duration:300ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
                transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
      .bp3-toast.bp3-toast-exit{
        opacity:1;
        -webkit-filter:blur(0);
                filter:blur(0); }
      .bp3-toast.bp3-toast-exit-active{
        opacity:0;
        -webkit-filter:blur(10px);
                filter:blur(10px);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:300ms;
                transition-duration:300ms;
        -webkit-transition-property:opacity, -webkit-filter;
        transition-property:opacity, -webkit-filter;
        transition-property:opacity, filter;
        transition-property:opacity, filter, -webkit-filter;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-toast.bp3-toast-exit ~ .bp3-toast{
        -webkit-transform:translateY(0);
                transform:translateY(0); }
      .bp3-toast.bp3-toast-exit-active ~ .bp3-toast{
        -webkit-transform:translateY(-40px);
                transform:translateY(-40px);
        -webkit-transition-delay:50ms;
                transition-delay:50ms;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-toast .bp3-button-group{
        -webkit-box-flex:0;
            -ms-flex:0 0 auto;
                flex:0 0 auto;
        padding:5px;
        padding-left:0; }
      .bp3-toast > .bp3-icon{
        color:#5c7080;
        margin:12px;
        margin-right:0; }
      .bp3-toast.bp3-dark,
      .bp3-dark .bp3-toast{
        background-color:#394b59;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
        .bp3-toast.bp3-dark > .bp3-icon,
        .bp3-dark .bp3-toast > .bp3-icon{
          color:#a7b6c2; }
      .bp3-toast[class*="bp3-intent-"] a{
        color:rgba(255, 255, 255, 0.7); }
        .bp3-toast[class*="bp3-intent-"] a:hover{
          color:#ffffff; }
      .bp3-toast[class*="bp3-intent-"] > .bp3-icon{
        color:#ffffff; }
      .bp3-toast[class*="bp3-intent-"] .bp3-button, .bp3-toast[class*="bp3-intent-"] .bp3-button::before,
      .bp3-toast[class*="bp3-intent-"] .bp3-button .bp3-icon, .bp3-toast[class*="bp3-intent-"] .bp3-button:active{
        color:rgba(255, 255, 255, 0.7) !important; }
      .bp3-toast[class*="bp3-intent-"] .bp3-button:focus{
        outline-color:rgba(255, 255, 255, 0.5); }
      .bp3-toast[class*="bp3-intent-"] .bp3-button:hover{
        background-color:rgba(255, 255, 255, 0.15) !important;
        color:#ffffff !important; }
      .bp3-toast[class*="bp3-intent-"] .bp3-button:active{
        background-color:rgba(255, 255, 255, 0.3) !important;
        color:#ffffff !important; }
      .bp3-toast[class*="bp3-intent-"] .bp3-button::after{
        background:rgba(255, 255, 255, 0.3) !important; }
      .bp3-toast.bp3-intent-primary{
        background-color:#137cbd;
        color:#ffffff; }
      .bp3-toast.bp3-intent-success{
        background-color:#0f9960;
        color:#ffffff; }
      .bp3-toast.bp3-intent-warning{
        background-color:#d9822b;
        color:#ffffff; }
      .bp3-toast.bp3-intent-danger{
        background-color:#db3737;
        color:#ffffff; }
    
    .bp3-toast-message{
      -webkit-box-flex:1;
          -ms-flex:1 1 auto;
              flex:1 1 auto;
      padding:11px;
      word-break:break-word; }
    
    .bp3-toast-container{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      display:-webkit-box !important;
      display:-ms-flexbox !important;
      display:flex !important;
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;
      left:0;
      overflow:hidden;
      padding:0 20px 20px;
      pointer-events:none;
      right:0;
      z-index:40; }
      .bp3-toast-container.bp3-toast-container-in-portal{
        position:fixed; }
      .bp3-toast-container.bp3-toast-container-inline{
        position:absolute; }
      .bp3-toast-container.bp3-toast-container-top{
        top:0; }
      .bp3-toast-container.bp3-toast-container-bottom{
        bottom:0;
        -webkit-box-orient:vertical;
        -webkit-box-direction:reverse;
            -ms-flex-direction:column-reverse;
                flex-direction:column-reverse;
        top:auto; }
      .bp3-toast-container.bp3-toast-container-left{
        -webkit-box-align:start;
            -ms-flex-align:start;
                align-items:flex-start; }
      .bp3-toast-container.bp3-toast-container-right{
        -webkit-box-align:end;
            -ms-flex-align:end;
                align-items:flex-end; }
    
    .bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active),
    .bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active) ~ .bp3-toast, .bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active),
    .bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active) ~ .bp3-toast,
    .bp3-toast-container-bottom .bp3-toast.bp3-toast-exit-active ~ .bp3-toast,
    .bp3-toast-container-bottom .bp3-toast.bp3-toast-leave-active ~ .bp3-toast{
      -webkit-transform:translateY(60px);
              transform:translateY(60px); }
    .bp3-tooltip{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
      -webkit-transform:scale(1);
              transform:scale(1); }
      .bp3-tooltip .bp3-popover-arrow{
        height:22px;
        position:absolute;
        width:22px; }
        .bp3-tooltip .bp3-popover-arrow::before{
          height:14px;
          margin:4px;
          width:14px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip{
        margin-bottom:11px;
        margin-top:-11px; }
        .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{
          bottom:-8px; }
          .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow svg{
            -webkit-transform:rotate(-90deg);
                    transform:rotate(-90deg); }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip{
        margin-left:11px; }
        .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{
          left:-8px; }
          .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow svg{
            -webkit-transform:rotate(0);
                    transform:rotate(0); }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip{
        margin-top:11px; }
        .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{
          top:-8px; }
          .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow svg{
            -webkit-transform:rotate(90deg);
                    transform:rotate(90deg); }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip{
        margin-left:-11px;
        margin-right:11px; }
        .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{
          right:-8px; }
          .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow svg{
            -webkit-transform:rotate(180deg);
                    transform:rotate(180deg); }
      .bp3-tether-element-attached-middle > .bp3-tooltip > .bp3-popover-arrow{
        top:50%;
        -webkit-transform:translateY(-50%);
                transform:translateY(-50%); }
      .bp3-tether-element-attached-center > .bp3-tooltip > .bp3-popover-arrow{
        right:50%;
        -webkit-transform:translateX(50%);
                transform:translateX(50%); }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{
        top:-0.22183px; }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{
        right:-0.22183px; }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{
        left:-0.22183px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{
        bottom:-0.22183px; }
      .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-tooltip{
        -webkit-transform-origin:top left;
                transform-origin:top left; }
      .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-tooltip{
        -webkit-transform-origin:top center;
                transform-origin:top center; }
      .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-tooltip{
        -webkit-transform-origin:top right;
                transform-origin:top right; }
      .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-tooltip{
        -webkit-transform-origin:center left;
                transform-origin:center left; }
      .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-tooltip{
        -webkit-transform-origin:center center;
                transform-origin:center center; }
      .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-tooltip{
        -webkit-transform-origin:center right;
                transform-origin:center right; }
      .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-tooltip{
        -webkit-transform-origin:bottom left;
                transform-origin:bottom left; }
      .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-tooltip{
        -webkit-transform-origin:bottom center;
                transform-origin:bottom center; }
      .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-tooltip{
        -webkit-transform-origin:bottom right;
                transform-origin:bottom right; }
      .bp3-tooltip .bp3-popover-content{
        background:#394b59;
        color:#f5f8fa; }
      .bp3-tooltip .bp3-popover-arrow::before{
        -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);
                box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }
      .bp3-tooltip .bp3-popover-arrow-border{
        fill:#10161a;
        fill-opacity:0.1; }
      .bp3-tooltip .bp3-popover-arrow-fill{
        fill:#394b59; }
      .bp3-popover-enter > .bp3-tooltip, .bp3-popover-appear > .bp3-tooltip{
        -webkit-transform:scale(0.8);
                transform:scale(0.8); }
      .bp3-popover-enter-active > .bp3-tooltip, .bp3-popover-appear-active > .bp3-tooltip{
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-popover-exit > .bp3-tooltip{
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-popover-exit-active > .bp3-tooltip{
        -webkit-transform:scale(0.8);
                transform:scale(0.8);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-tooltip .bp3-popover-content{
        padding:10px 12px; }
      .bp3-tooltip.bp3-dark,
      .bp3-dark .bp3-tooltip{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
        .bp3-tooltip.bp3-dark .bp3-popover-content,
        .bp3-dark .bp3-tooltip .bp3-popover-content{
          background:#e1e8ed;
          color:#394b59; }
        .bp3-tooltip.bp3-dark .bp3-popover-arrow::before,
        .bp3-dark .bp3-tooltip .bp3-popover-arrow::before{
          -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);
                  box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }
        .bp3-tooltip.bp3-dark .bp3-popover-arrow-border,
        .bp3-dark .bp3-tooltip .bp3-popover-arrow-border{
          fill:#10161a;
          fill-opacity:0.2; }
        .bp3-tooltip.bp3-dark .bp3-popover-arrow-fill,
        .bp3-dark .bp3-tooltip .bp3-popover-arrow-fill{
          fill:#e1e8ed; }
      .bp3-tooltip.bp3-intent-primary .bp3-popover-content{
        background:#137cbd;
        color:#ffffff; }
      .bp3-tooltip.bp3-intent-primary .bp3-popover-arrow-fill{
        fill:#137cbd; }
      .bp3-tooltip.bp3-intent-success .bp3-popover-content{
        background:#0f9960;
        color:#ffffff; }
      .bp3-tooltip.bp3-intent-success .bp3-popover-arrow-fill{
        fill:#0f9960; }
      .bp3-tooltip.bp3-intent-warning .bp3-popover-content{
        background:#d9822b;
        color:#ffffff; }
      .bp3-tooltip.bp3-intent-warning .bp3-popover-arrow-fill{
        fill:#d9822b; }
      .bp3-tooltip.bp3-intent-danger .bp3-popover-content{
        background:#db3737;
        color:#ffffff; }
      .bp3-tooltip.bp3-intent-danger .bp3-popover-arrow-fill{
        fill:#db3737; }
    
    .bp3-tooltip-indicator{
      border-bottom:dotted 1px;
      cursor:help; }
    .bp3-tree .bp3-icon, .bp3-tree .bp3-icon-standard, .bp3-tree .bp3-icon-large{
      color:#5c7080; }
      .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-tree .bp3-icon-large.bp3-intent-primary{
        color:#137cbd; }
      .bp3-tree .bp3-icon.bp3-intent-success, .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-tree .bp3-icon-large.bp3-intent-success{
        color:#0f9960; }
      .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-tree .bp3-icon-large.bp3-intent-warning{
        color:#d9822b; }
      .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-tree .bp3-icon-large.bp3-intent-danger{
        color:#db3737; }
    
    .bp3-tree-node-list{
      list-style:none;
      margin:0;
      padding-left:0; }
    
    .bp3-tree-root{
      background-color:transparent;
      cursor:default;
      padding-left:0;
      position:relative; }
    
    .bp3-tree-node-content-0{
      padding-left:0px; }
    
    .bp3-tree-node-content-1{
      padding-left:23px; }
    
    .bp3-tree-node-content-2{
      padding-left:46px; }
    
    .bp3-tree-node-content-3{
      padding-left:69px; }
    
    .bp3-tree-node-content-4{
      padding-left:92px; }
    
    .bp3-tree-node-content-5{
      padding-left:115px; }
    
    .bp3-tree-node-content-6{
      padding-left:138px; }
    
    .bp3-tree-node-content-7{
      padding-left:161px; }
    
    .bp3-tree-node-content-8{
      padding-left:184px; }
    
    .bp3-tree-node-content-9{
      padding-left:207px; }
    
    .bp3-tree-node-content-10{
      padding-left:230px; }
    
    .bp3-tree-node-content-11{
      padding-left:253px; }
    
    .bp3-tree-node-content-12{
      padding-left:276px; }
    
    .bp3-tree-node-content-13{
      padding-left:299px; }
    
    .bp3-tree-node-content-14{
      padding-left:322px; }
    
    .bp3-tree-node-content-15{
      padding-left:345px; }
    
    .bp3-tree-node-content-16{
      padding-left:368px; }
    
    .bp3-tree-node-content-17{
      padding-left:391px; }
    
    .bp3-tree-node-content-18{
      padding-left:414px; }
    
    .bp3-tree-node-content-19{
      padding-left:437px; }
    
    .bp3-tree-node-content-20{
      padding-left:460px; }
    
    .bp3-tree-node-content{
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      height:30px;
      padding-right:5px;
      width:100%; }
      .bp3-tree-node-content:hover{
        background-color:rgba(191, 204, 214, 0.4); }
    
    .bp3-tree-node-caret,
    .bp3-tree-node-caret-none{
      min-width:30px; }
    
    .bp3-tree-node-caret{
      color:#5c7080;
      cursor:pointer;
      padding:7px;
      -webkit-transform:rotate(0deg);
              transform:rotate(0deg);
      -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-tree-node-caret:hover{
        color:#182026; }
      .bp3-dark .bp3-tree-node-caret{
        color:#a7b6c2; }
        .bp3-dark .bp3-tree-node-caret:hover{
          color:#f5f8fa; }
      .bp3-tree-node-caret.bp3-tree-node-caret-open{
        -webkit-transform:rotate(90deg);
                transform:rotate(90deg); }
      .bp3-tree-node-caret.bp3-icon-standard::before{
        content:""; }
    
    .bp3-tree-node-icon{
      margin-right:7px;
      position:relative; }
    
    .bp3-tree-node-label{
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      word-wrap:normal;
      -webkit-box-flex:1;
          -ms-flex:1 1 auto;
              flex:1 1 auto;
      position:relative;
      -webkit-user-select:none;
         -moz-user-select:none;
          -ms-user-select:none;
              user-select:none; }
      .bp3-tree-node-label span{
        display:inline; }
    
    .bp3-tree-node-secondary-label{
      padding:0 5px;
      -webkit-user-select:none;
         -moz-user-select:none;
          -ms-user-select:none;
              user-select:none; }
      .bp3-tree-node-secondary-label .bp3-popover-wrapper,
      .bp3-tree-node-secondary-label .bp3-popover-target{
        -webkit-box-align:center;
            -ms-flex-align:center;
                align-items:center;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex; }
    
    .bp3-tree-node.bp3-disabled .bp3-tree-node-content{
      background-color:inherit;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed; }
    
    .bp3-tree-node.bp3-disabled .bp3-tree-node-caret,
    .bp3-tree-node.bp3-disabled .bp3-tree-node-icon{
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed; }
    
    .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{
      background-color:#137cbd; }
      .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content,
      .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-standard, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-large{
        color:#ffffff; }
      .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret::before{
        color:rgba(255, 255, 255, 0.7); }
      .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret:hover::before{
        color:#ffffff; }
    
    .bp3-dark .bp3-tree-node-content:hover{
      background-color:rgba(92, 112, 128, 0.3); }
    
    .bp3-dark .bp3-tree .bp3-icon, .bp3-dark .bp3-tree .bp3-icon-standard, .bp3-dark .bp3-tree .bp3-icon-large{
      color:#a7b6c2; }
      .bp3-dark .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-primary{
        color:#137cbd; }
      .bp3-dark .bp3-tree .bp3-icon.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-success{
        color:#0f9960; }
      .bp3-dark .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-warning{
        color:#d9822b; }
      .bp3-dark .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-danger{
        color:#db3737; }
    
    .bp3-dark .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{
      background-color:#137cbd; }
    .bp3-omnibar{
      -webkit-filter:blur(0);
              filter:blur(0);
      opacity:1;
      background-color:#ffffff;
      border-radius:3px;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
      left:calc(50% - 250px);
      top:20vh;
      width:500px;
      z-index:21; }
      .bp3-omnibar.bp3-overlay-enter, .bp3-omnibar.bp3-overlay-appear{
        -webkit-filter:blur(20px);
                filter:blur(20px);
        opacity:0.2; }
      .bp3-omnibar.bp3-overlay-enter-active, .bp3-omnibar.bp3-overlay-appear-active{
        -webkit-filter:blur(0);
                filter:blur(0);
        opacity:1;
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:200ms;
                transition-duration:200ms;
        -webkit-transition-property:opacity, -webkit-filter;
        transition-property:opacity, -webkit-filter;
        transition-property:filter, opacity;
        transition-property:filter, opacity, -webkit-filter;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-omnibar.bp3-overlay-exit{
        -webkit-filter:blur(0);
                filter:blur(0);
        opacity:1; }
      .bp3-omnibar.bp3-overlay-exit-active{
        -webkit-filter:blur(20px);
                filter:blur(20px);
        opacity:0.2;
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:200ms;
                transition-duration:200ms;
        -webkit-transition-property:opacity, -webkit-filter;
        transition-property:opacity, -webkit-filter;
        transition-property:filter, opacity;
        transition-property:filter, opacity, -webkit-filter;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-omnibar .bp3-input{
        background-color:transparent;
        border-radius:0; }
        .bp3-omnibar .bp3-input, .bp3-omnibar .bp3-input:focus{
          -webkit-box-shadow:none;
                  box-shadow:none; }
      .bp3-omnibar .bp3-menu{
        background-color:transparent;
        border-radius:0;
        -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
                box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
        max-height:calc(60vh - 40px);
        overflow:auto; }
        .bp3-omnibar .bp3-menu:empty{
          display:none; }
      .bp3-dark .bp3-omnibar, .bp3-omnibar.bp3-dark{
        background-color:#30404d;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4); }
    
    .bp3-omnibar-overlay .bp3-overlay-backdrop{
      background-color:rgba(16, 22, 26, 0.2); }
    
    .bp3-select-popover .bp3-popover-content{
      padding:5px; }
    
    .bp3-select-popover .bp3-input-group{
      margin-bottom:0; }
    
    .bp3-select-popover .bp3-menu{
      max-height:300px;
      max-width:400px;
      overflow:auto;
      padding:0; }
      .bp3-select-popover .bp3-menu:not(:first-child){
        padding-top:5px; }
    
    .bp3-multi-select{
      min-width:150px; }
    
    .bp3-multi-select-popover .bp3-menu{
      max-height:300px;
      max-width:400px;
      overflow:auto; }
    
    .bp3-select-popover .bp3-popover-content{
      padding:5px; }
    
    .bp3-select-popover .bp3-input-group{
      margin-bottom:0; }
    
    .bp3-select-popover .bp3-menu{
      max-height:300px;
      max-width:400px;
      overflow:auto;
      padding:0; }
      .bp3-select-popover .bp3-menu:not(:first-child){
        padding-top:5px; }
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /* This file was auto-generated by ensureUiComponents() in @jupyterlab/buildutils */
    
    /**
     * (DEPRECATED) Support for consuming icons as CSS background images
     */
    
    /* Icons urls */
    
    :root {
      --jp-icon-add: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-bug: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0yMCA4aC0yLjgxYy0uNDUtLjc4LTEuMDctMS40NS0xLjgyLTEuOTZMMTcgNC40MSAxNS41OSAzbC0yLjE3IDIuMTdDMTIuOTYgNS4wNiAxMi40OSA1IDEyIDVjLS40OSAwLS45Ni4wNi0xLjQxLjE3TDguNDEgMyA3IDQuNDFsMS42MiAxLjYzQzcuODggNi41NSA3LjI2IDcuMjIgNi44MSA4SDR2MmgyLjA5Yy0uMDUuMzMtLjA5LjY2LS4wOSAxdjFINHYyaDJ2MWMwIC4zNC4wNC42Ny4wOSAxSDR2MmgyLjgxYzEuMDQgMS43OSAyLjk3IDMgNS4xOSAzczQuMTUtMS4yMSA1LjE5LTNIMjB2LTJoLTIuMDljLjA1LS4zMy4wOS0uNjYuMDktMXYtMWgydi0yaC0ydi0xYzAtLjM0LS4wNC0uNjctLjA5LTFIMjBWOHptLTYgOGgtNHYtMmg0djJ6bTAtNGgtNHYtMmg0djJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-build: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE0LjkgMTcuNDVDMTYuMjUgMTcuNDUgMTcuMzUgMTYuMzUgMTcuMzUgMTVDMTcuMzUgMTMuNjUgMTYuMjUgMTIuNTUgMTQuOSAxMi41NUMxMy41NCAxMi41NSAxMi40NSAxMy42NSAxMi40NSAxNUMxMi40NSAxNi4zNSAxMy41NCAxNy40NSAxNC45IDE3LjQ1Wk0yMC4xIDE1LjY4TDIxLjU4IDE2Ljg0QzIxLjcxIDE2Ljk1IDIxLjc1IDE3LjEzIDIxLjY2IDE3LjI5TDIwLjI2IDE5LjcxQzIwLjE3IDE5Ljg2IDIwIDE5LjkyIDE5LjgzIDE5Ljg2TDE4LjA5IDE5LjE2QzE3LjczIDE5LjQ0IDE3LjMzIDE5LjY3IDE2LjkxIDE5Ljg1TDE2LjY0IDIxLjdDMTYuNjIgMjEuODcgMTYuNDcgMjIgMTYuMyAyMkgxMy41QzEzLjMyIDIyIDEzLjE4IDIxLjg3IDEzLjE1IDIxLjdMMTIuODkgMTkuODVDMTIuNDYgMTkuNjcgMTIuMDcgMTkuNDQgMTEuNzEgMTkuMTZMOS45NjAwMiAxOS44NkM5LjgxMDAyIDE5LjkyIDkuNjIwMDIgMTkuODYgOS41NDAwMiAxOS43MUw4LjE0MDAyIDE3LjI5QzguMDUwMDIgMTcuMTMgOC4wOTAwMiAxNi45NSA4LjIyMDAyIDE2Ljg0TDkuNzAwMDIgMTUuNjhMOS42NTAwMSAxNUw5LjcwMDAyIDE0LjMxTDguMjIwMDIgMTMuMTZDOC4wOTAwMiAxMy4wNSA4LjA1MDAyIDEyLjg2IDguMTQwMDIgMTIuNzFMOS41NDAwMiAxMC4yOUM5LjYyMDAyIDEwLjEzIDkuODEwMDIgMTAuMDcgOS45NjAwMiAxMC4xM0wxMS43MSAxMC44NEMxMi4wNyAxMC41NiAxMi40NiAxMC4zMiAxMi44OSAxMC4xNUwxMy4xNSA4LjI4OTk4QzEzLjE4IDguMTI5OTggMTMuMzIgNy45OTk5OCAxMy41IDcuOTk5OThIMTYuM0MxNi40NyA3Ljk5OTk4IDE2LjYyIDguMTI5OTggMTYuNjQgOC4yODk5OEwxNi45MSAxMC4xNUMxNy4zMyAxMC4zMiAxNy43MyAxMC41NiAxOC4wOSAxMC44NEwxOS44MyAxMC4xM0MyMCAxMC4wNyAyMC4xNyAxMC4xMyAyMC4yNiAxMC4yOUwyMS42NiAxMi43MUMyMS43NSAxMi44NiAyMS43MSAxMy4wNSAyMS41OCAxMy4xNkwyMC4xIDE0LjMxTDIwLjE1IDE1TDIwLjEgMTUuNjhaIi8+CiAgICA8cGF0aCBkPSJNNy4zMjk2NiA3LjQ0NDU0QzguMDgzMSA3LjAwOTU0IDguMzM5MzIgNi4wNTMzMiA3LjkwNDMyIDUuMjk5ODhDNy40NjkzMiA0LjU0NjQzIDYuNTA4MSA0LjI4MTU2IDUuNzU0NjYgNC43MTY1NkM1LjM5MTc2IDQuOTI2MDggNS4xMjY5NSA1LjI3MTE4IDUuMDE4NDkgNS42NzU5NEM0LjkxMDA0IDYuMDgwNzEgNC45NjY4MiA2LjUxMTk4IDUuMTc2MzQgNi44NzQ4OEM1LjYxMTM0IDcuNjI4MzIgNi41NzYyMiA3Ljg3OTU0IDcuMzI5NjYgNy40NDQ1NFpNOS42NTcxOCA0Ljc5NTkzTDEwLjg2NzIgNC45NTE3OUMxMC45NjI4IDQuOTc3NDEgMTEuMDQwMiA1LjA3MTMzIDExLjAzODIgNS4xODc5M0wxMS4wMzg4IDYuOTg4OTNDMTEuMDQ1NSA3LjEwMDU0IDEwLjk2MTYgNy4xOTUxOCAxMC44NTUgNy4yMTA1NEw5LjY2MDAxIDcuMzgwODNMOS4yMzkxNSA4LjEzMTg4TDkuNjY5NjEgOS4yNTc0NUM5LjcwNzI5IDkuMzYyNzEgOS42NjkzNCA5LjQ3Njk5IDkuNTc0MDggOS41MzE5OUw4LjAxNTIzIDEwLjQzMkM3LjkxMTMxIDEwLjQ5MiA3Ljc5MzM3IDEwLjQ2NzcgNy43MjEwNSAxMC4zODI0TDYuOTg3NDggOS40MzE4OEw2LjEwOTMxIDkuNDMwODNMNS4zNDcwNCAxMC4zOTA1QzUuMjg5MDkgMTAuNDcwMiA1LjE3MzgzIDEwLjQ5MDUgNS4wNzE4NyAxMC40MzM5TDMuNTEyNDUgOS41MzI5M0MzLjQxMDQ5IDkuNDc2MzMgMy4zNzY0NyA5LjM1NzQxIDMuNDEwNzUgOS4yNTY3OUwzLjg2MzQ3IDguMTQwOTNMMy42MTc0OSA3Ljc3NDg4TDMuNDIzNDcgNy4zNzg4M0wyLjIzMDc1IDcuMjEyOTdDMi4xMjY0NyA3LjE5MjM1IDIuMDQwNDkgNy4xMDM0MiAyLjA0MjQ1IDYuOTg2ODJMMi4wNDE4NyA1LjE4NTgyQzIuMDQzODMgNS4wNjkyMiAyLjExOTA5IDQuOTc5NTggMi4yMTcwNCA0Ljk2OTIyTDMuNDIwNjUgNC43OTM5M0wzLjg2NzQ5IDQuMDI3ODhMMy40MTEwNSAyLjkxNzMxQzMuMzczMzcgMi44MTIwNCAzLjQxMTMxIDIuNjk3NzYgMy41MTUyMyAyLjYzNzc2TDUuMDc0MDggMS43Mzc3NkM1LjE2OTM0IDEuNjgyNzYgNS4yODcyOSAxLjcwNzA0IDUuMzU5NjEgMS43OTIzMUw2LjExOTE1IDIuNzI3ODhMNi45ODAwMSAyLjczODkzTDcuNzI0OTYgMS43ODkyMkM3Ljc5MTU2IDEuNzA0NTggNy45MTU0OCAxLjY3OTIyIDguMDA4NzkgMS43NDA4Mkw5LjU2ODIxIDIuNjQxODJDOS42NzAxNyAyLjY5ODQyIDkuNzEyODUgMi44MTIzNCA5LjY4NzIzIDIuOTA3OTdMOS4yMTcxOCA0LjAzMzgzTDkuNDYzMTYgNC4zOTk4OEw5LjY1NzE4IDQuNzk1OTNaIi8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-caret-down-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOS45LDEzLjYgMy42LDcuNCA0LjQsNi42IDkuOSwxMi4yIDE1LjQsNi43IDE2LjEsNy40ICIvPgoJPC9nPgo8L3N2Zz4K);
      --jp-icon-caret-down-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNS45TDksOS43bDMuOC0zLjhsMS4yLDEuMmwtNC45LDVsLTQuOS01TDUuMiw1Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-caret-down: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNy41TDksMTEuMmwzLjgtMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-caret-left: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik0xMC44LDEyLjhMNy4xLDlsMy44LTMuOGwwLDcuNkgxMC44eiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-caret-right: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik03LjIsNS4yTDEwLjksOWwtMy44LDMuOFY1LjJINy4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-caret-up-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTUuNCwxMy4zIDkuOSw3LjcgNC40LDEzLjIgMy42LDEyLjUgOS45LDYuMyAxNi4xLDEyLjYgIi8+Cgk8L2c+Cjwvc3ZnPgo=);
      --jp-icon-caret-up: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik01LjIsMTAuNUw5LDYuOGwzLjgsMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-case-sensitive: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWFjY2VudDIiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTcuNiw4aDAuOWwzLjUsOGgtMS4xTDEwLDE0SDZsLTAuOSwySDRMNy42LDh6IE04LDkuMUw2LjQsMTNoMy4yTDgsOS4xeiIvPgogICAgPHBhdGggZD0iTTE2LjYsOS44Yy0wLjIsMC4xLTAuNCwwLjEtMC43LDAuMWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjEtMC4xLTAuMi0wLjQtMC4yLTAuNyBjLTAuMywwLjMtMC42LDAuNS0wLjksMC43Yy0wLjMsMC4xLTAuNywwLjItMS4xLDAuMmMtMC4zLDAtMC41LDAtMC43LTAuMWMtMC4yLTAuMS0wLjQtMC4yLTAuNi0wLjNjLTAuMi0wLjEtMC4zLTAuMy0wLjQtMC41IGMtMC4xLTAuMi0wLjEtMC40LTAuMS0wLjdjMC0wLjMsMC4xLTAuNiwwLjItMC44YzAuMS0wLjIsMC4zLTAuNCwwLjQtMC41QzEyLDcsMTIuMiw2LjksMTIuNSw2LjhjMC4yLTAuMSwwLjUtMC4xLDAuNy0wLjIgYzAuMy0wLjEsMC41LTAuMSwwLjctMC4xYzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjIsMCwwLjMtMC4xLDAuNC0wLjJjMC4xLTAuMSwwLjItMC4yLDAuMi0wLjRjMC0xLTEuMS0xLTEuMy0xIGMtMC40LDAtMS40LDAtMS40LDEuMmgtMC45YzAtMC40LDAuMS0wLjcsMC4yLTFjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjZjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNDMTMuMyw0LDEzLjYsNCwxMy45LDQgYzAuMywwLDAuNSwwLDAuOCwwLjFjMC4zLDAsMC41LDAuMSwwLjcsMC4yYzAuMiwwLjEsMC40LDAuMywwLjUsMC41QzE2LDUsMTYsNS4yLDE2LDUuNnYyLjljMCwwLjIsMCwwLjQsMCwwLjUgYzAsMC4xLDAuMSwwLjIsMC4zLDAuMmMwLjEsMCwwLjIsMCwwLjMsMFY5Ljh6IE0xNS4yLDYuOWMtMS4yLDAuNi0zLjEsMC4yLTMuMSwxLjRjMCwxLjQsMy4xLDEsMy4xLTAuNVY2Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-circle-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-circle: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-clear: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8bWFzayBpZD0iZG9udXRIb2xlIj4KICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSJibGFjayIvPgogIDwvbWFzaz4KCiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxyZWN0IGhlaWdodD0iMTgiIHdpZHRoPSIyIiB4PSIxMSIgeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1LCAxMiwgMTIpIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgbWFzaz0idXJsKCNkb251dEhvbGUpIi8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-close: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1ub25lIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIGpwLWljb24zLWhvdmVyIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIi8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIGpwLWljb24tYWNjZW50Mi1ob3ZlciIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgogIDwvZz4KCiAgPGcgY2xhc3M9ImpwLWljb24tbm9uZSBqcC1pY29uLWJ1c3kiIGZpbGw9Im5vbmUiPgogICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-code: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTExLjQgMTguNkw2LjggMTRMMTEuNCA5LjRMMTAgOEw0IDE0TDEwIDIwTDExLjQgMTguNlpNMTYuNiAxOC42TDIxLjIgMTRMMTYuNiA5LjRMMTggOEwyNCAxNEwxOCAyMEwxNi42IDE4LjZWMTguNloiLz4KCTwvZz4KPC9zdmc+Cg==);
      --jp-icon-console: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwMCAyMDAiPgogIDxnIGNsYXNzPSJqcC1pY29uLWJyYW5kMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMjg4RDEiPgogICAgPHBhdGggZD0iTTIwIDE5LjhoMTYwdjE1OS45SDIweiIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNmZmYiPgogICAgPHBhdGggZD0iTTEwNSAxMjcuM2g0MHYxMi44aC00MHpNNTEuMSA3N0w3NCA5OS45bC0yMy4zIDIzLjMgMTAuNSAxMC41IDIzLjMtMjMuM0w5NSA5OS45IDg0LjUgODkuNCA2MS42IDY2LjV6Ii8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-copy: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTExLjksMUgzLjJDMi40LDEsMS43LDEuNywxLjcsMi41djEwLjJoMS41VjIuNWg4LjdWMXogTTE0LjEsMy45aC04Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTAuMmMwLDAuOCwwLjcsMS41LDEuNSwxLjVoOCBjMC44LDAsMS41LTAuNywxLjUtMS41VjUuNEMxNS41LDQuNiwxNC45LDMuOSwxNC4xLDMuOXogTTE0LjEsMTUuNWgtOFY1LjRoOFYxNS41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-copyright: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+CiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0xMS44OCw5LjE0YzEuMjgsMC4wNiwxLjYxLDEuMTUsMS42MywxLjY2aDEuNzljLTAuMDgtMS45OC0xLjQ5LTMuMTktMy40NS0zLjE5QzkuNjQsNy42MSw4LDksOCwxMi4xNCBjMCwxLjk0LDAuOTMsNC4yNCwzLjg0LDQuMjRjMi4yMiwwLDMuNDEtMS42NSwzLjQ0LTIuOTVoLTEuNzljLTAuMDMsMC41OS0wLjQ1LDEuMzgtMS42MywxLjQ0QzEwLjU1LDE0LjgzLDEwLDEzLjgxLDEwLDEyLjE0IEMxMCw5LjI1LDExLjI4LDkuMTYsMTEuODgsOS4xNHogTTEyLDJDNi40OCwyLDIsNi40OCwyLDEyczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFMxNy41MiwyLDEyLDJ6IE0xMiwyMGMtNC40MSwwLTgtMy41OS04LTggczMuNTktOCw4LThzOCwzLjU5LDgsOFMxNi40MSwyMCwxMiwyMHoiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-cut: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-download: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-edit: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-ellipses: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIyIi8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-extension: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExeiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-fast-forward: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTQgMThsOC41LTZMNCA2djEyem05LTEydjEybDguNS02TDEzIDZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-file-upload: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1eiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-file: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuMyA4LjJsLTUuNS01LjVjLS4zLS4zLS43LS41LTEuMi0uNUgzLjljLS44LjEtMS42LjktMS42IDEuOHYxNC4xYzAgLjkuNyAxLjYgMS42IDEuNmgxNC4yYy45IDAgMS42LS43IDEuNi0xLjZWOS40Yy4xLS41LS4xLS45LS40LTEuMnptLTUuOC0zLjNsMy40IDMuNmgtMy40VjQuOXptMy45IDEyLjdINC43Yy0uMSAwLS4yIDAtLjItLjJWNC43YzAtLjIuMS0uMy4yLS4zaDcuMnY0LjRzMCAuOC4zIDEuMWMuMy4zIDEuMS4zIDEuMS4zaDQuM3Y3LjJzLS4xLjItLjIuMnoiLz4KPC9zdmc+Cg==);
      --jp-icon-filter-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyeiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6Ii8+Cjwvc3ZnPgo=);
      --jp-icon-html5: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMDAiIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzbTUzLjUtNjloMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjgtMTYuMS0yNC44VjY5aC0yMi42bTg5LjItNjloMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2U0NGQyNiIgZD0iTTEwNy42IDQ3MWwtMzMtMzcwLjRoMzYyLjhsLTMzIDM3MC4yTDI1NS43IDUxMiIvPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNmMTY1MjkiIGQ9Ik0yNTYgNDgwLjVWMTMxaDE0OC4zTDM3NiA0NDciLz4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNlYmViZWIiIGQ9Ik0xNDIgMTc2LjNoMTE0djQ1LjRoLTY0LjJsNC4yIDQ2LjVoNjB2NDUuM0gxNTQuNG0yIDIyLjhIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNm0tNC4xIDQ2LjVIMjU1Ljh2NDUuNGg1NmwtNS4zIDU5LTUwLjcgMTMuNnY0Ny4ybDkzLTI1LjgiLz4KPC9zdmc+Cg==);
      --jp-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1icmFuZDQganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNGRkYiIGQ9Ik0yLjIgMi4yaDE3LjV2MTcuNUgyLjJ6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzNGNTFCNSIgZD0iTTIuMiAyLjJ2MTcuNWgxNy41bC4xLTE3LjVIMi4yem0xMi4xIDIuMmMxLjIgMCAyLjIgMSAyLjIgMi4ycy0xIDIuMi0yLjIgMi4yLTIuMi0xLTIuMi0yLjIgMS0yLjIgMi4yLTIuMnpNNC40IDE3LjZsMy4zLTguOCAzLjMgNi42IDIuMi0zLjIgNC40IDUuNEg0LjR6Ii8+Cjwvc3ZnPgo=);
      --jp-icon-inspector: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxNEg0di00aDExdjR6bTAtNUg0VjloMTF2NHptNSA1aC00VjloNHY5eiIvPgo8L3N2Zz4K);
      --jp-icon-json: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNGOUE4MjUiPgogICAgPHBhdGggZD0iTTIwLjIgMTEuOGMtMS42IDAtMS43LjUtMS43IDEgMCAuNC4xLjkuMSAxLjMuMS41LjEuOS4xIDEuMyAwIDEuNy0xLjQgMi4zLTMuNSAyLjNoLS45di0xLjloLjVjMS4xIDAgMS40IDAgMS40LS44IDAtLjMgMC0uNi0uMS0xIDAtLjQtLjEtLjgtLjEtMS4yIDAtMS4zIDAtMS44IDEuMy0yLTEuMy0uMi0xLjMtLjctMS4zLTIgMC0uNC4xLS44LjEtMS4yLjEtLjQuMS0uNy4xLTEgMC0uOC0uNC0uNy0xLjQtLjhoLS41VjQuMWguOWMyLjIgMCAzLjUuNyAzLjUgMi4zIDAgLjQtLjEuOS0uMSAxLjMtLjEuNS0uMS45LS4xIDEuMyAwIC41LjIgMSAxLjcgMXYxLjh6TTEuOCAxMC4xYzEuNiAwIDEuNy0uNSAxLjctMSAwLS40LS4xLS45LS4xLTEuMy0uMS0uNS0uMS0uOS0uMS0xLjMgMC0xLjYgMS40LTIuMyAzLjUtMi4zaC45djEuOWgtLjVjLTEgMC0xLjQgMC0xLjQuOCAwIC4zIDAgLjYuMSAxIDAgLjIuMS42LjEgMSAwIDEuMyAwIDEuOC0xLjMgMkM2IDExLjIgNiAxMS43IDYgMTNjMCAuNC0uMS44LS4xIDEuMi0uMS4zLS4xLjctLjEgMSAwIC44LjMuOCAxLjQuOGguNXYxLjloLS45Yy0yLjEgMC0zLjUtLjYtMy41LTIuMyAwLS40LjEtLjkuMS0xLjMuMS0uNS4xLS45LjEtMS4zIDAtLjUtLjItMS0xLjctMXYtMS45eiIvPgogICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMy44IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY3g9IjExIiBjeT0iOC4yIiByPSIyLjEiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-julia: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDMyNSAzMDAiPgogIDxnIGNsYXNzPSJqcC1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjY2IzYzMzIj4KICAgIDxwYXRoIGQ9Ik0gMTUwLjg5ODQzOCAyMjUgQyAxNTAuODk4NDM4IDI2Ni40MjE4NzUgMTE3LjMyMDMxMiAzMDAgNzUuODk4NDM4IDMwMCBDIDM0LjQ3NjU2MiAzMDAgMC44OTg0MzggMjY2LjQyMTg3NSAwLjg5ODQzOCAyMjUgQyAwLjg5ODQzOCAxODMuNTc4MTI1IDM0LjQ3NjU2MiAxNTAgNzUuODk4NDM4IDE1MCBDIDExNy4zMjAzMTIgMTUwIDE1MC44OTg0MzggMTgzLjU3ODEyNSAxNTAuODk4NDM4IDIyNSIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzM4OTgyNiI+CiAgICA8cGF0aCBkPSJNIDIzNy41IDc1IEMgMjM3LjUgMTE2LjQyMTg3NSAyMDMuOTIxODc1IDE1MCAxNjIuNSAxNTAgQyAxMjEuMDc4MTI1IDE1MCA4Ny41IDExNi40MjE4NzUgODcuNSA3NSBDIDg3LjUgMzMuNTc4MTI1IDEyMS4wNzgxMjUgMCAxNjIuNSAwIEMgMjAzLjkyMTg3NSAwIDIzNy41IDMzLjU3ODEyNSAyMzcuNSA3NSIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzk1NThiMiI+CiAgICA8cGF0aCBkPSJNIDMyNC4xMDE1NjIgMjI1IEMgMzI0LjEwMTU2MiAyNjYuNDIxODc1IDI5MC41MjM0MzggMzAwIDI0OS4xMDE1NjIgMzAwIEMgMjA3LjY3OTY4OCAzMDAgMTc0LjEwMTU2MiAyNjYuNDIxODc1IDE3NC4xMDE1NjIgMjI1IEMgMTc0LjEwMTU2MiAxODMuNTc4MTI1IDIwNy42Nzk2ODggMTUwIDI0OS4xMDE1NjIgMTUwIEMgMjkwLjUyMzQzOCAxNTAgMzI0LjEwMTU2MiAxODMuNTc4MTI1IDMyNC4xMDE1NjIgMjI1Ii8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-jupyter-favicon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDE1MiAxNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3ODk0NywgMTEwLjU4MjkyNykiIGQ9Ik03NS45NDIyODQyLDI5LjU4MDQ1NjEgQzQzLjMwMjM5NDcsMjkuNTgwNDU2MSAxNC43OTY3ODMyLDE3LjY1MzQ2MzQgMCwwIEM1LjUxMDgzMjExLDE1Ljg0MDY4MjkgMTUuNzgxNTM4OSwyOS41NjY3NzMyIDI5LjM5MDQ5NDcsMzkuMjc4NDE3MSBDNDIuOTk5Nyw0OC45ODk4NTM3IDU5LjI3MzcsNTQuMjA2NzgwNSA3NS45NjA1Nzg5LDU0LjIwNjc4MDUgQzkyLjY0NzQ1NzksNTQuMjA2NzgwNSAxMDguOTIxNDU4LDQ4Ljk4OTg1MzcgMTIyLjUzMDY2MywzOS4yNzg0MTcxIEMxMzYuMTM5NDUzLDI5LjU2Njc3MzIgMTQ2LjQxMDI4NCwxNS44NDA2ODI5IDE1MS45MjExNTgsMCBDMTM3LjA4Nzg2OCwxNy42NTM0NjM0IDEwOC41ODI1ODksMjkuNTgwNDU2MSA3NS45NDIyODQyLDI5LjU4MDQ1NjEgTDc1Ljk0MjI4NDIsMjkuNTgwNDU2MSBaIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMzczNjgsIDAuNzA0ODc4KSIgZD0iTTc1Ljk3ODQ1NzksMjQuNjI2NDA3MyBDMTA4LjYxODc2MywyNC42MjY0MDczIDEzNy4xMjQ0NTgsMzYuNTUzNDQxNSAxNTEuOTIxMTU4LDU0LjIwNjc4MDUgQzE0Ni40MTAyODQsMzguMzY2MjIyIDEzNi4xMzk0NTMsMjQuNjQwMTMxNyAxMjIuNTMwNjYzLDE0LjkyODQ4NzggQzEwOC45MjE0NTgsNS4yMTY4NDM5IDkyLjY0NzQ1NzksMCA3NS45NjA1Nzg5LDAgQzU5LjI3MzcsMCA0Mi45OTk3LDUuMjE2ODQzOSAyOS4zOTA0OTQ3LDE0LjkyODQ4NzggQzE1Ljc4MTUzODksMjQuNjQwMTMxNyA1LjUxMDgzMjExLDM4LjM2NjIyMiAwLDU0LjIwNjc4MDUgQzE0LjgzMzA4MTYsMzYuNTg5OTI5MyA0My4zMzg1Njg0LDI0LjYyNjQwNzMgNzUuOTc4NDU3OSwyNC42MjY0MDczIEw3NS45Nzg0NTc5LDI0LjYyNjQwNzMgWiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-jupyter: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAzOSA1MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzOCAtMjI4MSkiPgogICAgPGcgY2xhc3M9ImpwLWljb24td2FybjAiIGZpbGw9IiNGMzc3MjYiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5Ljc0IDIzMTEuOTgpIiBkPSJNIDE4LjI2NDYgNy4xMzQxMUMgMTAuNDE0NSA3LjEzNDExIDMuNTU4NzIgNC4yNTc2IDAgMEMgMS4zMjUzOSAzLjgyMDQgMy43OTU1NiA3LjEzMDgxIDcuMDY4NiA5LjQ3MzAzQyAxMC4zNDE3IDExLjgxNTIgMTQuMjU1NyAxMy4wNzM0IDE4LjI2OSAxMy4wNzM0QyAyMi4yODIzIDEzLjA3MzQgMjYuMTk2MyAxMS44MTUyIDI5LjQ2OTQgOS40NzMwM0MgMzIuNzQyNCA3LjEzMDgxIDM1LjIxMjYgMy44MjA0IDM2LjUzOCAwQyAzMi45NzA1IDQuMjU3NiAyNi4xMTQ4IDcuMTM0MTEgMTguMjY0NiA3LjEzNDExWiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5LjczIDIyODUuNDgpIiBkPSJNIDE4LjI3MzMgNS45MzkzMUMgMjYuMTIzNSA1LjkzOTMxIDMyLjk3OTMgOC44MTU4MyAzNi41MzggMTMuMDczNEMgMzUuMjEyNiA5LjI1MzAzIDMyLjc0MjQgNS45NDI2MiAyOS40Njk0IDMuNjAwNEMgMjYuMTk2MyAxLjI1ODE4IDIyLjI4MjMgMCAxOC4yNjkgMEMgMTQuMjU1NyAwIDEwLjM0MTcgMS4yNTgxOCA3LjA2ODYgMy42MDA0QyAzLjc5NTU2IDUuOTQyNjIgMS4zMjUzOSA5LjI1MzAzIDAgMTMuMDczNEMgMy41Njc0NSA4LjgyNDYzIDEwLjQyMzIgNS45MzkzMSAxOC4yNzMzIDUuOTM5MzFaIi8+CiAgICA8L2c+CiAgICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjY5LjMgMjI4MS4zMSkiIGQ9Ik0gNS44OTM1MyAyLjg0NEMgNS45MTg4OSAzLjQzMTY1IDUuNzcwODUgNC4wMTM2NyA1LjQ2ODE1IDQuNTE2NDVDIDUuMTY1NDUgNS4wMTkyMiA0LjcyMTY4IDUuNDIwMTUgNC4xOTI5OSA1LjY2ODUxQyAzLjY2NDMgNS45MTY4OCAzLjA3NDQ0IDYuMDAxNTEgMi40OTgwNSA1LjkxMTcxQyAxLjkyMTY2IDUuODIxOSAxLjM4NDYzIDUuNTYxNyAwLjk1NDg5OCA1LjE2NDAxQyAwLjUyNTE3IDQuNzY2MzMgMC4yMjIwNTYgNC4yNDkwMyAwLjA4MzkwMzcgMy42Nzc1N0MgLTAuMDU0MjQ4MyAzLjEwNjExIC0wLjAyMTIzIDIuNTA2MTcgMC4xNzg3ODEgMS45NTM2NEMgMC4zNzg3OTMgMS40MDExIDAuNzM2ODA5IDAuOTIwODE3IDEuMjA3NTQgMC41NzM1MzhDIDEuNjc4MjYgMC4yMjYyNTkgMi4yNDA1NSAwLjAyNzU5MTkgMi44MjMyNiAwLjAwMjY3MjI5QyAzLjYwMzg5IC0wLjAzMDcxMTUgNC4zNjU3MyAwLjI0OTc4OSA0Ljk0MTQyIDAuNzgyNTUxQyA1LjUxNzExIDEuMzE1MzEgNS44NTk1NiAyLjA1Njc2IDUuODkzNTMgMi44NDRaIi8+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzkuOCAyMzIzLjgxKSIgZD0iTSA3LjQyNzg5IDMuNTgzMzhDIDcuNDYwMDggNC4zMjQzIDcuMjczNTUgNS4wNTgxOSA2Ljg5MTkzIDUuNjkyMTNDIDYuNTEwMzEgNi4zMjYwNyA1Ljk1MDc1IDYuODMxNTYgNS4yODQxMSA3LjE0NDZDIDQuNjE3NDcgNy40NTc2MyAzLjg3MzcxIDcuNTY0MTQgMy4xNDcwMiA3LjQ1MDYzQyAyLjQyMDMyIDcuMzM3MTIgMS43NDMzNiA3LjAwODcgMS4yMDE4NCA2LjUwNjk1QyAwLjY2MDMyOCA2LjAwNTIgMC4yNzg2MSA1LjM1MjY4IDAuMTA1MDE3IDQuNjMyMDJDIC0wLjA2ODU3NTcgMy45MTEzNSAtMC4wMjYyMzYxIDMuMTU0OTQgMC4yMjY2NzUgMi40NTg1NkMgMC40Nzk1ODcgMS43NjIxNyAwLjkzMTY5NyAxLjE1NzEzIDEuNTI1NzYgMC43MjAwMzNDIDIuMTE5ODMgMC4yODI5MzUgMi44MjkxNCAwLjAzMzQzOTUgMy41NjM4OSAwLjAwMzEzMzQ0QyA0LjU0NjY3IC0wLjAzNzQwMzMgNS41MDUyOSAwLjMxNjcwNiA2LjIyOTYxIDAuOTg3ODM1QyA2Ljk1MzkzIDEuNjU4OTYgNy4zODQ4NCAyLjU5MjM1IDcuNDI3ODkgMy41ODMzOEwgNy40Mjc4OSAzLjU4MzM4WiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM4LjM2IDIyODYuMDYpIiBkPSJNIDIuMjc0NzEgNC4zOTYyOUMgMS44NDM2MyA0LjQxNTA4IDEuNDE2NzEgNC4zMDQ0NSAxLjA0Nzk5IDQuMDc4NDNDIDAuNjc5MjY4IDMuODUyNCAwLjM4NTMyOCAzLjUyMTE0IDAuMjAzMzcxIDMuMTI2NTZDIDAuMDIxNDEzNiAyLjczMTk4IC0wLjA0MDM3OTggMi4yOTE4MyAwLjAyNTgxMTYgMS44NjE4MUMgMC4wOTIwMDMxIDEuNDMxOCAwLjI4MzIwNCAxLjAzMTI2IDAuNTc1MjEzIDAuNzEwODgzQyAwLjg2NzIyMiAwLjM5MDUxIDEuMjQ2OTEgMC4xNjQ3MDggMS42NjYyMiAwLjA2MjA1OTJDIDIuMDg1NTMgLTAuMDQwNTg5NyAyLjUyNTYxIC0wLjAxNTQ3MTQgMi45MzA3NiAwLjEzNDIzNUMgMy4zMzU5MSAwLjI4Mzk0MSAzLjY4NzkyIDAuNTUxNTA1IDMuOTQyMjIgMC45MDMwNkMgNC4xOTY1MiAxLjI1NDYyIDQuMzQxNjkgMS42NzQzNiA0LjM1OTM1IDIuMTA5MTZDIDQuMzgyOTkgMi42OTEwNyA0LjE3Njc4IDMuMjU4NjkgMy43ODU5NyAzLjY4NzQ2QyAzLjM5NTE2IDQuMTE2MjQgMi44NTE2NiA0LjM3MTE2IDIuMjc0NzEgNC4zOTYyOUwgMi4yNzQ3MSA0LjM5NjI5WiIvPgogICAgPC9nPgogIDwvZz4+Cjwvc3ZnPgo=);
      --jp-icon-jupyterlab-wordmark: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIHZpZXdCb3g9IjAgMCAxODYwLjggNDc1Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0RTRFNEUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4MC4xMzY0MDEsIDY0LjI3MTQ5MykiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDU4Ljg3NTU2NikiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4NzYwMywgMC4xNDAyOTQpIj4KICAgICAgICA8cGF0aCBkPSJNLTQyNi45LDE2OS44YzAsNDguNy0zLjcsNjQuNy0xMy42LDc2LjRjLTEwLjgsMTAtMjUsMTUuNS0zOS43LDE1LjVsMy43LDI5IGMyMi44LDAuMyw0NC44LTcuOSw2MS45LTIzLjFjMTcuOC0xOC41LDI0LTQ0LjEsMjQtODMuM1YwSC00Mjd2MTcwLjFMLTQyNi45LDE2OS44TC00MjYuOSwxNjkuOHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU1LjA0NTI5NiwgNTYuODM3MTA0KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTYyNDUzLCAxLjc5OTg0MikiPgogICAgICAgIDxwYXRoIGQ9Ik0tMzEyLDE0OGMwLDIxLDAsMzkuNSwxLjcsNTUuNGgtMzEuOGwtMi4xLTMzLjNoLTAuOGMtNi43LDExLjYtMTYuNCwyMS4zLTI4LDI3LjkgYy0xMS42LDYuNi0yNC44LDEwLTM4LjIsOS44Yy0zMS40LDAtNjktMTcuNy02OS04OVYwaDM2LjR2MTEyLjdjMCwzOC43LDExLjYsNjQuNyw0NC42LDY0LjdjMTAuMy0wLjIsMjAuNC0zLjUsMjguOS05LjQgYzguNS01LjksMTUuMS0xNC4zLDE4LjktMjMuOWMyLjItNi4xLDMuMy0xMi41LDMuMy0xOC45VjAuMmgzNi40VjE0OEgtMzEyTC0zMTIsMTQ4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTAuMDEzMzIyLCA1My40Nzk2MzgpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43MDY0NTgsIDAuMjMxNDI1KSI+CiAgICAgICAgPHBhdGggZD0iTS00NzguNiw3MS40YzAtMjYtMC44LTQ3LTEuNy02Ni43aDMyLjdsMS43LDM0LjhoMC44YzcuMS0xMi41LDE3LjUtMjIuOCwzMC4xLTI5LjcgYzEyLjUtNywyNi43LTEwLjMsNDEtOS44YzQ4LjMsMCw4NC43LDQxLjcsODQuNywxMDMuM2MwLDczLjEtNDMuNywxMDkuMi05MSwxMDkuMmMtMTIuMSwwLjUtMjQuMi0yLjItMzUtNy44IGMtMTAuOC01LjYtMTkuOS0xMy45LTI2LjYtMjQuMmgtMC44VjI5MWgtMzZ2LTIyMEwtNDc4LjYsNzEuNEwtNDc4LjYsNzEuNHogTS00NDIuNiwxMjUuNmMwLjEsNS4xLDAuNiwxMC4xLDEuNywxNS4xIGMzLDEyLjMsOS45LDIzLjMsMTkuOCwzMS4xYzkuOSw3LjgsMjIuMSwxMi4xLDM0LjcsMTIuMWMzOC41LDAsNjAuNy0zMS45LDYwLjctNzguNWMwLTQwLjctMjEuMS03NS42LTU5LjUtNzUuNiBjLTEyLjksMC40LTI1LjMsNS4xLTM1LjMsMTMuNGMtOS45LDguMy0xNi45LDE5LjctMTkuNiwzMi40Yy0xLjUsNC45LTIuMywxMC0yLjUsMTUuMVYxMjUuNkwtNDQyLjYsMTI1LjZMLTQ0Mi42LDEyNS42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDYuNzQwNzI2LCA1Ni44MzcxMDQpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NTEyMjYsIDEuOTg5Mjk5KSI+CiAgICAgICAgPHBhdGggZD0iTS00NDAuOCwwbDQzLjcsMTIwLjFjNC41LDEzLjQsOS41LDI5LjQsMTIuOCw0MS43aDAuOGMzLjctMTIuMiw3LjktMjcuNywxMi44LTQyLjQgbDM5LjctMTE5LjJoMzguNUwtMzQ2LjksMTQ1Yy0yNiw2OS43LTQzLjcsMTA1LjQtNjguNiwxMjcuMmMtMTIuNSwxMS43LTI3LjksMjAtNDQuNiwyMy45bC05LjEtMzEuMSBjMTEuNy0zLjksMjIuNS0xMC4xLDMxLjgtMTguMWMxMy4yLTExLjEsMjMuNy0yNS4yLDMwLjYtNDEuMmMxLjUtMi44LDIuNS01LjcsMi45LTguOGMtMC4zLTMuMy0xLjItNi42LTIuNS05LjdMLTQ4MC4yLDAuMSBoMzkuN0wtNDQwLjgsMEwtNDQwLjgsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODIyLjc0ODEwNCwgMC4wMDAwMDApIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40NjQwNTAsIDAuMzc4OTE0KSI+CiAgICAgICAgPHBhdGggZD0iTS00MTMuNywwdjU4LjNoNTJ2MjguMmgtNTJWMTk2YzAsMjUsNywzOS41LDI3LjMsMzkuNWM3LjEsMC4xLDE0LjItMC43LDIxLjEtMi41IGwxLjcsMjcuN2MtMTAuMywzLjctMjEuMyw1LjQtMzIuMiw1Yy03LjMsMC40LTE0LjYtMC43LTIxLjMtMy40Yy02LjgtMi43LTEyLjktNi44LTE3LjktMTIuMWMtMTAuMy0xMC45LTE0LjEtMjktMTQuMS01Mi45IFY4Ni41aC0zMVY1OC4zaDMxVjkuNkwtNDEzLjcsMEwtNDEzLjcsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTc0LjQzMzI4NiwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTkwMDM0LCAwLjYxMDMzOSkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDQ1LjgsMTEzYzAuOCw1MCwzMi4yLDcwLjYsNjguNiw3MC42YzE5LDAuNiwzNy45LTMsNTUuMy0xMC41bDYuMiwyNi40IGMtMjAuOSw4LjktNDMuNSwxMy4xLTY2LjIsMTIuNmMtNjEuNSwwLTk4LjMtNDEuMi05OC4zLTEwMi41Qy00ODAuMiw0OC4yLTQ0NC43LDAtMzg2LjUsMGM2NS4yLDAsODIuNyw1OC4zLDgyLjcsOTUuNyBjLTAuMSw1LjgtMC41LDExLjUtMS4yLDE3LjJoLTE0MC42SC00NDUuOEwtNDQ1LjgsMTEzeiBNLTMzOS4yLDg2LjZjMC40LTIzLjUtOS41LTYwLjEtNTAuNC02MC4xIGMtMzYuOCwwLTUyLjgsMzQuNC01NS43LDYwLjFILTMzOS4yTC0zMzkuMiw4Ni42TC0zMzkuMiw4Ni42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAxLjk2MTA1OCwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMTc5NjQwLCAwLjcwNTA2OCkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDc4LjYsNjhjMC0yMy45LTAuNC00NC41LTEuNy02My40aDMxLjhsMS4yLDM5LjloMS43YzkuMS0yNy4zLDMxLTQ0LjUsNTUuMy00NC41IGMzLjUtMC4xLDcsMC40LDEwLjMsMS4ydjM0LjhjLTQuMS0wLjktOC4yLTEuMy0xMi40LTEuMmMtMjUuNiwwLTQzLjcsMTkuNy00OC43LDQ3LjRjLTEsNS43LTEuNiwxMS41LTEuNywxNy4ydjEwOC4zaC0zNlY2OCBMLTQ3OC42LDY4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCBkPSJNMTM1Mi4zLDMyNi4yaDM3VjI4aC0zN1YzMjYuMnogTTE2MDQuOCwzMjYuMmMtMi41LTEzLjktMy40LTMxLjEtMy40LTQ4Ljd2LTc2IGMwLTQwLjctMTUuMS04My4xLTc3LjMtODMuMWMtMjUuNiwwLTUwLDcuMS02Ni44LDE4LjFsOC40LDI0LjRjMTQuMy05LjIsMzQtMTUuMSw1My0xNS4xYzQxLjYsMCw0Ni4yLDMwLjIsNDYuMiw0N3Y0LjIgYy03OC42LTAuNC0xMjIuMywyNi41LTEyMi4zLDc1LjZjMCwyOS40LDIxLDU4LjQsNjIuMiw1OC40YzI5LDAsNTAuOS0xNC4zLDYyLjItMzAuMmgxLjNsMi45LDI1LjZIMTYwNC44eiBNMTU2NS43LDI1Ny43IGMwLDMuOC0wLjgsOC0yLjEsMTEuOGMtNS45LDE3LjItMjIuNywzNC00OS4yLDM0Yy0xOC45LDAtMzQuOS0xMS4zLTM0LjktMzUuM2MwLTM5LjUsNDUuOC00Ni42LDg2LjItNDUuOFYyNTcuN3ogTTE2OTguNSwzMjYuMiBsMS43LTMzLjZoMS4zYzE1LjEsMjYuOSwzOC43LDM4LjIsNjguMSwzOC4yYzQ1LjQsMCw5MS4yLTM2LjEsOTEuMi0xMDguOGMwLjQtNjEuNy0zNS4zLTEwMy43LTg1LjctMTAzLjcgYy0zMi44LDAtNTYuMywxNC43LTY5LjMsMzcuNGgtMC44VjI4aC0zNi42djI0NS43YzAsMTguMS0wLjgsMzguNi0xLjcsNTIuNUgxNjk4LjV6IE0xNzA0LjgsMjA4LjJjMC01LjksMS4zLTEwLjksMi4xLTE1LjEgYzcuNi0yOC4xLDMxLjEtNDUuNCw1Ni4zLTQ1LjRjMzkuNSwwLDYwLjUsMzQuOSw2MC41LDc1LjZjMCw0Ni42LTIzLjEsNzguMS02MS44LDc4LjFjLTI2LjksMC00OC4zLTE3LjYtNTUuNS00My4zIGMtMC44LTQuMi0xLjctOC44LTEuNy0xMy40VjIwOC4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzYxNjE2MSIgZD0iTTE1IDlIOXY2aDZWOXptLTIgNGgtMnYtMmgydjJ6bTgtMlY5aC0yVjdjMC0xLjEtLjktMi0yLTJoLTJWM2gtMnYyaC0yVjNIOXYySDdjLTEuMSAwLTIgLjktMiAydjJIM3YyaDJ2MkgzdjJoMnYyYzAgMS4xLjkgMiAyIDJoMnYyaDJ2LTJoMnYyaDJ2LTJoMmMxLjEgMCAyLS45IDItMnYtMmgydi0yaC0ydi0yaDJ6bS00IDZIN1Y3aDEwdjEweiIvPgo8L3N2Zz4K);
      --jp-icon-keyboard: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMTdjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0tOSAzaDJ2MmgtMlY4em0wIDNoMnYyaC0ydi0yek04IDhoMnYySDhWOHptMCAzaDJ2Mkg4di0yem0tMSAySDV2LTJoMnYyem0wLTNINVY4aDJ2MnptOSA3SDh2LTJoOHYyem0wLTRoLTJ2LTJoMnYyem0wLTNoLTJWOGgydjJ6bTMgM2gtMnYtMmgydjJ6bTAtM2gtMlY4aDJ2MnoiLz4KPC9zdmc+Cg==);
      --jp-icon-launcher: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkgMTlINVY1aDdWM0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz4KPC9zdmc+Cg==);
      --jp-icon-line-form: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNS44OCA0LjEyTDEzLjc2IDEybC03Ljg4IDcuODhMOCAyMmwxMC0xMEw4IDJ6Ii8+Cjwvc3ZnPgo=);
      --jp-icon-link: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xOSA1djE0SDVWNWgxNG0xLjEtMkgzLjljLS41IDAtLjkuNC0uOS45djE2LjJjMCAuNC40LjkuOS45aDE2LjJjLjQgMCAuOS0uNS45LS45VjMuOWMwLS41LS41LS45LS45LS45ek0xMSA3aDZ2MmgtNlY3em0wIDRoNnYyaC02di0yem0wIDRoNnYyaC02ek03IDdoMnYySDd6bTAgNGgydjJIN3ptMCA0aDJ2Mkg3eiIvPgo8L3N2Zz4=);
      --jp-icon-listings-info: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MC45NzggNTAuOTc4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MC45NzggNTAuOTc4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTQzLjUyLDcuNDU4QzM4LjcxMSwyLjY0OCwzMi4zMDcsMCwyNS40ODksMEMxOC42NywwLDEyLjI2NiwyLjY0OCw3LjQ1OCw3LjQ1OAoJCQljLTkuOTQzLDkuOTQxLTkuOTQzLDI2LjExOSwwLDM2LjA2MmM0LjgwOSw0LjgwOSwxMS4yMTIsNy40NTYsMTguMDMxLDcuNDU4YzAsMCwwLjAwMSwwLDAuMDAyLDAKCQkJYzYuODE2LDAsMTMuMjIxLTIuNjQ4LDE4LjAyOS03LjQ1OGM0LjgwOS00LjgwOSw3LjQ1Ny0xMS4yMTIsNy40NTctMTguMDNDNTAuOTc3LDE4LjY3LDQ4LjMyOCwxMi4yNjYsNDMuNTIsNy40NTh6CgkJCSBNNDIuMTA2LDQyLjEwNWMtNC40MzIsNC40MzEtMTAuMzMyLDYuODcyLTE2LjYxNSw2Ljg3MmgtMC4wMDJjLTYuMjg1LTAuMDAxLTEyLjE4Ny0yLjQ0MS0xNi42MTctNi44NzIKCQkJYy05LjE2Mi05LjE2My05LjE2Mi0yNC4wNzEsMC0zMy4yMzNDMTMuMzAzLDQuNDQsMTkuMjA0LDIsMjUuNDg5LDJjNi4yODQsMCwxMi4xODYsMi40NCwxNi42MTcsNi44NzIKCQkJYzQuNDMxLDQuNDMxLDYuODcxLDEwLjMzMiw2Ljg3MSwxNi42MTdDNDguOTc3LDMxLjc3Miw0Ni41MzYsMzcuNjc1LDQyLjEwNiw0Mi4xMDV6Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0yMy41NzgsMzIuMjE4Yy0wLjAyMy0xLjczNCwwLjE0My0zLjA1OSwwLjQ5Ni0zLjk3MmMwLjM1My0wLjkxMywxLjExLTEuOTk3LDIuMjcyLTMuMjUzCgkJCWMwLjQ2OC0wLjUzNiwwLjkyMy0xLjA2MiwxLjM2Ny0xLjU3NWMwLjYyNi0wLjc1MywxLjEwNC0xLjQ3OCwxLjQzNi0yLjE3NWMwLjMzMS0wLjcwNywwLjQ5NS0xLjU0MSwwLjQ5NS0yLjUKCQkJYzAtMS4wOTYtMC4yNi0yLjA4OC0wLjc3OS0yLjk3OWMtMC41NjUtMC44NzktMS41MDEtMS4zMzYtMi44MDYtMS4zNjljLTEuODAyLDAuMDU3LTIuOTg1LDAuNjY3LTMuNTUsMS44MzIKCQkJYy0wLjMwMSwwLjUzNS0wLjUwMywxLjE0MS0wLjYwNywxLjgxNGMtMC4xMzksMC43MDctMC4yMDcsMS40MzItMC4yMDcsMi4xNzRoLTIuOTM3Yy0wLjA5MS0yLjIwOCwwLjQwNy00LjExNCwxLjQ5My01LjcxOQoJCQljMS4wNjItMS42NCwyLjg1NS0yLjQ4MSw1LjM3OC0yLjUyN2MyLjE2LDAuMDIzLDMuODc0LDAuNjA4LDUuMTQxLDEuNzU4YzEuMjc4LDEuMTYsMS45MjksMi43NjQsMS45NSw0LjgxMQoJCQljMCwxLjE0Mi0wLjEzNywyLjExMS0wLjQxLDIuOTExYy0wLjMwOSwwLjg0NS0wLjczMSwxLjU5My0xLjI2OCwyLjI0M2MtMC40OTIsMC42NS0xLjA2OCwxLjMxOC0xLjczLDIuMDAyCgkJCWMtMC42NSwwLjY5Ny0xLjMxMywxLjQ3OS0xLjk4NywyLjM0NmMtMC4yMzksMC4zNzctMC40MjksMC43NzctMC41NjUsMS4xOTljLTAuMTYsMC45NTktMC4yMTcsMS45NTEtMC4xNzEsMi45NzkKCQkJQzI2LjU4OSwzMi4yMTgsMjMuNTc4LDMyLjIxOCwyMy41NzgsMzIuMjE4eiBNMjMuNTc4LDM4LjIydi0zLjQ4NGgzLjA3NnYzLjQ4NEgyMy41Nzh6Ii8+Cgk8L2c+Cjwvc3ZnPgo=);
      --jp-icon-markdown: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjN0IxRkEyIiBkPSJNNSAxNC45aDEybC02LjEgNnptOS40LTYuOGMwLTEuMy0uMS0yLjktLjEtNC41LS40IDEuNC0uOSAyLjktMS4zIDQuM2wtMS4zIDQuM2gtMkw4LjUgNy45Yy0uNC0xLjMtLjctMi45LTEtNC4zLS4xIDEuNi0uMSAzLjItLjIgNC42TDcgMTIuNEg0LjhsLjctMTFoMy4zTDEwIDVjLjQgMS4yLjcgMi43IDEgMy45LjMtMS4yLjctMi42IDEtMy45bDEuMi0zLjdoMy4zbC42IDExaC0yLjRsLS4zLTQuMnoiLz4KPC9zdmc+Cg==);
      --jp-icon-new-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-not-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMTkgMTcuMTg0NCAyLjk2OTY4IDE0LjMwMzIgMS44NjA5NCAxMS40NDA5WiIvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24yIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zMTU5MiA5LjMyMDMxKSIgZD0iTTcuMzY4NDIgMEwwIDcuMzY0NzkiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzE1OTIgMTYuNjgzNikgc2NhbGUoMSAtMSkiIGQ9Ik03LjM2ODQyIDBMMCA3LjM2NDc5Ii8+Cjwvc3ZnPgo=);
      --jp-icon-notebook: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNFRjZDMDAiPgogICAgPHBhdGggZD0iTTE4LjcgMy4zdjE1LjRIMy4zVjMuM2gxNS40bTEuNS0xLjVIMS44djE4LjNoMTguM2wuMS0xOC4zeiIvPgogICAgPHBhdGggZD0iTTE2LjUgMTYuNWwtNS40LTQuMy01LjYgNC4zdi0xMWgxMXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-numbering: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTQgMTlINlYxOS41SDVWMjAuNUg2VjIxSDRWMjJIN1YxOEg0VjE5Wk01IDEwSDZWNkg0VjdINVYxMFpNNCAxM0g1LjhMNCAxNS4xVjE2SDdWMTVINS4yTDcgMTIuOVYxMkg0VjEzWk05IDdWOUgyM1Y3SDlaTTkgMjFIMjNWMTlIOVYyMVpNOSAxNUgyM1YxM0g5VjE1WiIvPgoJPC9nPgo8L3N2Zz4K);
      --jp-icon-offline-bolt: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDIuMDJjLTUuNTEgMC05Ljk4IDQuNDctOS45OCA5Ljk4czQuNDcgOS45OCA5Ljk4IDkuOTggOS45OC00LjQ3IDkuOTgtOS45OFMxNy41MSAyLjAyIDEyIDIuMDJ6TTExLjQ4IDIwdi02LjI2SDhMMTMgNHY2LjI2aDMuMzVMMTEuNDggMjB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-palette: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE4IDEzVjIwSDRWNkg5LjAyQzkuMDcgNS4yOSA5LjI0IDQuNjIgOS41IDRINEMyLjkgNCAyIDQuOSAyIDZWMjBDMiAyMS4xIDIuOSAyMiA0IDIySDE4QzE5LjEgMjIgMjAgMjEuMSAyMCAyMFYxNUwxOCAxM1pNMTkuMyA4Ljg5QzE5Ljc0IDguMTkgMjAgNy4zOCAyMCA2LjVDMjAgNC4wMSAxNy45OSAyIDE1LjUgMkMxMy4wMSAyIDExIDQuMDEgMTEgNi41QzExIDguOTkgMTMuMDEgMTEgMTUuNDkgMTFDMTYuMzcgMTEgMTcuMTkgMTAuNzQgMTcuODggMTAuM0wyMSAxMy40MkwyMi40MiAxMkwxOS4zIDguODlaTTE1LjUgOUMxNC4xMiA5IDEzIDcuODggMTMgNi41QzEzIDUuMTIgMTQuMTIgNCAxNS41IDRDMTYuODggNCAxOCA1LjEyIDE4IDYuNUMxOCA3Ljg4IDE2Ljg4IDkgMTUuNSA5WiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDZIOS4wMTg5NEM5LjAwNjM5IDYuMTY1MDIgOSA2LjMzMTc2IDkgNi41QzkgOC44MTU3NyAxMC4yMTEgMTAuODQ4NyAxMi4wMzQzIDEySDlWMTRIMTZWMTIuOTgxMUMxNi41NzAzIDEyLjkzNzcgMTcuMTIgMTIuODIwNyAxNy42Mzk2IDEyLjYzOTZMMTggMTNWMjBINFY2Wk04IDhINlYxMEg4VjhaTTYgMTJIOFYxNEg2VjEyWk04IDE2SDZWMThIOFYxNlpNOSAxNkgxNlYxOEg5VjE2WiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-paste: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-pdf: url(data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMiIgd2lkdGg9IjE2Ij4KICAgIDxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDQ1KSIgY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI0ZGMkEyQSIKICAgICAgIGQ9Im0gMjIuMzQ0MzY5LC0zLjAxNjM2NDIgaCA1LjYzODYwNCB2IDEuNTc5MjQzMyBoIC0zLjU0OTIyNyB2IDEuNTA4NjkyOTkgaCAzLjMzNzU3NiBWIDEuNjUwODE1NCBoIC0zLjMzNzU3NiB2IDMuNDM1MjYxMyBoIC0yLjA4OTM3NyB6IG0gLTcuMTM2NDQ0LDEuNTc5MjQzMyB2IDQuOTQzOTU0MyBoIDAuNzQ4OTIgcSAxLjI4MDc2MSwwIDEuOTUzNzAzLC0wLjYzNDk1MzUgMC42NzgzNjksLTAuNjM0OTUzNSAwLjY3ODM2OSwtMS44NDUxNjQxIDAsLTEuMjA0NzgzNTUgLTAuNjcyOTQyLC0xLjgzNDMxMDExIC0wLjY3Mjk0MiwtMC42Mjk1MjY1OSAtMS45NTkxMywtMC42Mjk1MjY1OSB6IG0gLTIuMDg5Mzc3LC0xLjU3OTI0MzMgaCAyLjIwMzM0MyBxIDEuODQ1MTY0LDAgMi43NDYwMzksMC4yNjU5MjA3IDAuOTA2MzAxLDAuMjYwNDkzNyAxLjU1MjEwOCwwLjg5MDAyMDMgMC41Njk4MywwLjU0ODEyMjMgMC44NDY2MDUsMS4yNjQ0ODAwNiAwLjI3Njc3NCwwLjcxNjM1NzgxIDAuMjc2Nzc0LDEuNjIyNjU4OTQgMCwwLjkxNzE1NTEgLTAuMjc2Nzc0LDEuNjM4OTM5OSAtMC4yNzY3NzUsMC43MTYzNTc4IC0wLjg0NjYwNSwxLjI2NDQ4IC0wLjY1MTIzNCwwLjYyOTUyNjYgLTEuNTYyOTYyLDAuODk1NDQ3MyAtMC45MTE3MjgsMC4yNjA0OTM3IC0yLjczNTE4NSwwLjI2MDQ5MzcgaCAtMi4yMDMzNDMgeiBtIC04LjE0NTg1NjUsMCBoIDMuNDY3ODIzIHEgMS41NDY2ODE2LDAgMi4zNzE1Nzg1LDAuNjg5MjIzIDAuODMwMzI0LDAuNjgzNzk2MSAwLjgzMDMyNCwxLjk1MzcwMzE0IDAsMS4yNzUzMzM5NyAtMC44MzAzMjQsMS45NjQ1NTcwNiBRIDkuOTg3MTk2MSwyLjI3NDkxNSA4LjQ0MDUxNDUsMi4yNzQ5MTUgSCA3LjA2MjA2ODQgViA1LjA4NjA3NjcgSCA0Ljk3MjY5MTUgWiBtIDIuMDg5Mzc2OSwxLjUxNDExOTkgdiAyLjI2MzAzOTQzIGggMS4xNTU5NDEgcSAwLjYwNzgxODgsMCAwLjkzODg2MjksLTAuMjkzMDU1NDcgMC4zMzEwNDQxLC0wLjI5ODQ4MjQxIDAuMzMxMDQ0MSwtMC44NDExNzc3MiAwLC0wLjU0MjY5NTMxIC0wLjMzMTA0NDEsLTAuODM1NzUwNzQgLTAuMzMxMDQ0MSwtMC4yOTMwNTU1IC0wLjkzODg2MjksLTAuMjkzMDU1NSB6IgovPgo8L3N2Zz4K);
      --jp-icon-python: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMEQ0N0ExIj4KICAgIDxwYXRoIGQ9Ik0xMS4xIDYuOVY1LjhINi45YzAtLjUgMC0xLjMuMi0xLjYuNC0uNy44LTEuMSAxLjctMS40IDEuNy0uMyAyLjUtLjMgMy45LS4xIDEgLjEgMS45LjkgMS45IDEuOXY0LjJjMCAuNS0uOSAxLjYtMiAxLjZIOC44Yy0xLjUgMC0yLjQgMS40LTIuNCAyLjh2Mi4ySDQuN0MzLjUgMTUuMSAzIDE0IDMgMTMuMVY5Yy0uMS0xIC42LTIgMS44LTIgMS41LS4xIDYuMy0uMSA2LjMtLjF6Ii8+CiAgICA8cGF0aCBkPSJNMTAuOSAxNS4xdjEuMWg0LjJjMCAuNSAwIDEuMy0uMiAxLjYtLjQuNy0uOCAxLjEtMS43IDEuNC0xLjcuMy0yLjUuMy0zLjkuMS0xLS4xLTEuOS0uOS0xLjktMS45di00LjJjMC0uNS45LTEuNiAyLTEuNmgzLjhjMS41IDAgMi40LTEuNCAyLjQtMi44VjYuNmgxLjdDMTguNSA2LjkgMTkgOCAxOSA4LjlWMTNjMCAxLS43IDIuMS0xLjkgMi4xaC02LjJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-r-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjE5NkYzIiBkPSJNNC40IDIuNWMxLjItLjEgMi45LS4zIDQuOS0uMyAyLjUgMCA0LjEuNCA1LjIgMS4zIDEgLjcgMS41IDEuOSAxLjUgMy41IDAgMi0xLjQgMy41LTIuOSA0LjEgMS4yLjQgMS43IDEuNiAyLjIgMyAuNiAxLjkgMSAzLjkgMS4zIDQuNmgtMy44Yy0uMy0uNC0uOC0xLjctMS4yLTMuN3MtMS4yLTIuNi0yLjYtMi42aC0uOXY2LjRINC40VjIuNXptMy43IDYuOWgxLjRjMS45IDAgMi45LS45IDIuOS0yLjNzLTEtMi4zLTIuOC0yLjNjLS43IDAtMS4zIDAtMS42LjJ2NC41aC4xdi0uMXoiLz4KPC9zdmc+Cg==);
      --jp-icon-react: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMTUwIDE1MCA1NDEuOSAyOTUuMyI+CiAgPGcgY2xhc3M9ImpwLWljb24tYnJhbmQyIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxREFGQiI+CiAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgPGNpcmNsZSBjeD0iNDIwLjkiIGN5PSIyOTYuNSIgcj0iNDUuNyIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-redo: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4LjQgMTAuNkMxNi41NSA4Ljk5IDE0LjE1IDggMTEuNSA4Yy00LjY1IDAtOC41OCAzLjAzLTkuOTYgNy4yMkwzLjkgMTZjMS4wNS0zLjE5IDQuMDUtNS41IDcuNi01LjUgMS45NSAwIDMuNzMuNzIgNS4xMiAxLjg4TDEzIDE2aDlWN2wtMy42IDMuNnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-refresh: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTMuNWMtMi40OSAwLTQuNS0yLjAxLTQuNS00LjVTNi41MSA0LjUgOSA0LjVjMS4yNCAwIDIuMzYuNTIgMy4xNyAxLjMzTDEwIDhoNVYzbC0xLjc2IDEuNzZDMTIuMTUgMy42OCAxMC42NiAzIDkgMyA1LjY5IDMgMy4wMSA1LjY5IDMuMDEgOVM1LjY5IDE1IDkgMTVjMi45NyAwIDUuNDMtMi4xNiA1LjktNWgtMS41MmMtLjQ2IDItMi4yNCAzLjUtNC4zOCAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
      --jp-icon-regex: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiBmaWxsPSIjRkZGIj4KICAgIDxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjUuNSIgY3k9IjE0LjUiIHI9IjEuNSIvPgogICAgPHJlY3QgeD0iMTIiIHk9IjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIxIiBoZWlnaHQ9IjgiLz4KICAgIDxyZWN0IHg9IjguNSIgeT0iNy41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NiAtMC41IDAuNSAwLjg2NiAtMi4zMjU1IDcuMzIxOSkiIGNsYXNzPSJzdDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiLz4KICAgIDxyZWN0IHg9IjEyIiB5PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgLTAuODY2IDAuODY2IDAuNSAtMC42Nzc5IDE0LjgyNTIpIiBjbGFzcz0ic3QyIiB3aWR0aD0iMSIgaGVpZ2h0PSI4Ii8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-run: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTggNXYxNGwxMS03eiIvPgogICAgPC9nPgo8L3N2Zz4K);
      --jp-icon-running: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptOTYgMzI4YzAgOC44LTcuMiAxNi0xNiAxNkgxNzZjLTguOCAwLTE2LTcuMi0xNi0xNlYxNzZjMC04LjggNy4yLTE2IDE2LTE2aDE2MGM4LjggMCAxNiA3LjIgMTYgMTZ2MTYweiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-save: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0eiIvPgogICAgPC9nPgo8L3N2Zz4K);
      --jp-icon-search: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-settings: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwMDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXoiLz4KPC9zdmc+Cg==);
      --jp-icon-spreadsheet: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNENBRjUwIiBkPSJNMi4yIDIuMnYxNy42aDE3LjZWMi4ySDIuMnptMTUuNCA3LjdoLTUuNVY0LjRoNS41djUuNXpNOS45IDQuNHY1LjVINC40VjQuNGg1LjV6bS01LjUgNy43aDUuNXY1LjVINC40di01LjV6bTcuNyA1LjV2LTUuNWg1LjV2NS41aC01LjV6Ii8+Cjwvc3ZnPgo=);
      --jp-icon-stop: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik02IDZoMTJ2MTJINnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-tab: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
      --jp-icon-table-rows: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMSw4SDNWNGgxOFY4eiBNMjEsMTBIM3Y0aDE4VjEweiBNMjEsMTZIM3Y0aDE4VjE2eiIvPgogICAgPC9nPgo8L3N2Zz4=);
      --jp-icon-tag: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA0MyAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTI4LjgzMzIgMTIuMzM0TDMyLjk5OTggMTYuNTAwN0wzNy4xNjY1IDEyLjMzNEgyOC44MzMyWiIvPgoJCTxwYXRoIGQ9Ik0xNi4yMDk1IDIxLjYxMDRDMTUuNjg3MyAyMi4xMjk5IDE0Ljg0NDMgMjIuMTI5OSAxNC4zMjQ4IDIxLjYxMDRMNi45ODI5IDE0LjcyNDVDNi41NzI0IDE0LjMzOTQgNi4wODMxMyAxMy42MDk4IDYuMDQ3ODYgMTMuMDQ4MkM1Ljk1MzQ3IDExLjUyODggNi4wMjAwMiA4LjYxOTQ0IDYuMDY2MjEgNy4wNzY5NUM2LjA4MjgxIDYuNTE0NzcgNi41NTU0OCA2LjA0MzQ3IDcuMTE4MDQgNi4wMzA1NUM5LjA4ODYzIDUuOTg0NzMgMTMuMjYzOCA1LjkzNTc5IDEzLjY1MTggNi4zMjQyNUwyMS43MzY5IDEzLjYzOUMyMi4yNTYgMTQuMTU4NSAyMS43ODUxIDE1LjQ3MjQgMjEuMjYyIDE1Ljk5NDZMMTYuMjA5NSAyMS42MTA0Wk05Ljc3NTg1IDguMjY1QzkuMzM1NTEgNy44MjU2NiA4LjYyMzUxIDcuODI1NjYgOC4xODI4IDguMjY1QzcuNzQzNDYgOC43MDU3MSA3Ljc0MzQ2IDkuNDE3MzMgOC4xODI4IDkuODU2NjdDOC42MjM4MiAxMC4yOTY0IDkuMzM1ODIgMTAuMjk2NCA5Ljc3NTg1IDkuODU2NjdDMTAuMjE1NiA5LjQxNzMzIDEwLjIxNTYgOC43MDUzMyA5Ljc3NTg1IDguMjY1WiIvPgoJPC9nPgo8L3N2Zz4K);
      --jp-icon-terminal: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiA+CiAgICA8cmVjdCBjbGFzcz0ianAtaWNvbjIganAtaWNvbi1zZWxlY3RhYmxlIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiIGZpbGw9IiMzMzMzMzMiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uLWFjY2VudDIganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGQ9Ik01LjA1NjY0IDguNzYxNzJDNS4wNTY2NCA4LjU5NzY2IDUuMDMxMjUgOC40NTMxMiA0Ljk4MDQ3IDguMzI4MTJDNC45MzM1OSA4LjE5OTIyIDQuODU1NDcgOC4wODIwMyA0Ljc0NjA5IDcuOTc2NTZDNC42NDA2MiA3Ljg3MTA5IDQuNSA3Ljc3NTM5IDQuMzI0MjIgNy42ODk0NUM0LjE1MjM0IDcuNTk5NjEgMy45NDMzNiA3LjUxMTcyIDMuNjk3MjcgNy40MjU3OEMzLjMwMjczIDcuMjg1MTYgMi45NDMzNiA3LjEzNjcyIDIuNjE5MTQgNi45ODA0N0MyLjI5NDkyIDYuODI0MjIgMi4wMTc1OCA2LjY0MjU4IDEuNzg3MTEgNi40MzU1NUMxLjU2MDU1IDYuMjI4NTIgMS4zODQ3NyA1Ljk4ODI4IDEuMjU5NzcgNS43MTQ4NEMxLjEzNDc3IDUuNDM3NSAxLjA3MjI3IDUuMTA5MzggMS4wNzIyNyA0LjczMDQ3QzEuMDcyMjcgNC4zOTg0NCAxLjEyODkxIDQuMDk1NyAxLjI0MjE5IDMuODIyMjdDMS4zNTU0NyAzLjU0NDkyIDEuNTE1NjIgMy4zMDQ2OSAxLjcyMjY2IDMuMTAxNTZDMS45Mjk2OSAyLjg5ODQ0IDIuMTc5NjkgMi43MzQzNyAyLjQ3MjY2IDIuNjA5MzhDMi43NjU2MiAyLjQ4NDM4IDMuMDkxOCAyLjQwNDMgMy40NTExNyAyLjM2OTE0VjEuMTA5MzhINC4zODg2N1YyLjM4MDg2QzQuNzQwMjMgMi40Mjc3MyA1LjA1NjY0IDIuNTIzNDQgNS4zMzc4OSAyLjY2Nzk3QzUuNjE5MTQgMi44MTI1IDUuODU3NDIgMy4wMDE5NSA2LjA1MjczIDMuMjM2MzNDNi4yNTE5NSAzLjQ2NjggNi40MDQzIDMuNzQwMjMgNi41MDk3NyA0LjA1NjY0QzYuNjE5MTQgNC4zNjkxNCA2LjY3MzgzIDQuNzIwNyA2LjY3MzgzIDUuMTExMzNINS4wNDQ5MkM1LjA0NDkyIDQuNjM4NjcgNC45Mzc1IDQuMjgxMjUgNC43MjI2NiA0LjAzOTA2QzQuNTA3ODEgMy43OTI5NyA0LjIxNjggMy42Njk5MiAzLjg0OTYxIDMuNjY5OTJDMy42NTAzOSAzLjY2OTkyIDMuNDc2NTYgMy42OTcyNyAzLjMyODEyIDMuNzUxOTVDMy4xODM1OSAzLjgwMjczIDMuMDY0NDUgMy44NzY5NSAyLjk3MDcgMy45NzQ2MUMyLjg3Njk1IDQuMDY4MzYgMi44MDY2NCA0LjE3OTY5IDIuNzU5NzcgNC4zMDg1OUMyLjcxNjggNC40Mzc1IDIuNjk1MzEgNC41NzgxMiAyLjY5NTMxIDQuNzMwNDdDMi42OTUzMSA0Ljg4MjgxIDIuNzE2OCA1LjAxOTUzIDIuNzU5NzcgNS4xNDA2MkMyLjgwNjY0IDUuMjU3ODEgMi44ODI4MSA1LjM2NzE5IDIuOTg4MjggNS40Njg3NUMzLjA5NzY2IDUuNTcwMzEgMy4yNDAyMyA1LjY2Nzk3IDMuNDE2MDIgNS43NjE3MkMzLjU5MTggNS44NTE1NiAzLjgxMDU1IDUuOTQzMzYgNC4wNzIyNyA2LjAzNzExQzQuNDY2OCA2LjE4NTU1IDQuODI0MjIgNi4zMzk4NCA1LjE0NDUzIDYuNUM1LjQ2NDg0IDYuNjU2MjUgNS43MzgyOCA2LjgzOTg0IDUuOTY0ODQgNy4wNTA3OEM2LjE5NTMxIDcuMjU3ODEgNi4zNzEwOSA3LjUgNi40OTIxOSA3Ljc3NzM0QzYuNjE3MTkgOC4wNTA3OCA2LjY3OTY5IDguMzc1IDYuNjc5NjkgOC43NUM2LjY3OTY5IDkuMDkzNzUgNi42MjMwNSA5LjQwNDMgNi41MDk3NyA5LjY4MTY0QzYuMzk2NDggOS45NTUwOCA2LjIzNDM4IDEwLjE5MTQgNi4wMjM0NCAxMC4zOTA2QzUuODEyNSAxMC41ODk4IDUuNTU4NTkgMTAuNzUgNS4yNjE3MiAxMC44NzExQzQuOTY0ODQgMTAuOTg4MyA0LjYzMjgxIDExLjA2NDUgNC4yNjU2MiAxMS4wOTk2VjEyLjI0OEgzLjMzMzk4VjExLjA5OTZDMy4wMDE5NSAxMS4wNjg0IDIuNjc5NjkgMTAuOTk2MSAyLjM2NzE5IDEwLjg4MjhDMi4wNTQ2OSAxMC43NjU2IDEuNzc3MzQgMTAuNTk3NyAxLjUzNTE2IDEwLjM3ODlDMS4yOTY4OCAxMC4xNjAyIDEuMTA1NDcgOS44ODQ3NyAwLjk2MDkzOCA5LjU1MjczQzAuODE2NDA2IDkuMjE2OCAwLjc0NDE0MSA4LjgxNDQ1IDAuNzQ0MTQxIDguMzQ1N0gyLjM3ODkxQzIuMzc4OTEgOC42MjY5NSAyLjQxOTkyIDguODYzMjggMi41MDE5NSA5LjA1NDY5QzIuNTgzOTggOS4yNDIxOSAyLjY4OTQ1IDkuMzkyNTggMi44MTgzNiA5LjUwNTg2QzIuOTUxMTcgOS42MTUyMyAzLjEwMTU2IDkuNjkzMzYgMy4yNjk1MyA5Ljc0MDIzQzMuNDM3NSA5Ljc4NzExIDMuNjA5MzggOS44MTA1NSAzLjc4NTE2IDkuODEwNTVDNC4yMDMxMiA5LjgxMDU1IDQuNTE5NTMgOS43MTI4OSA0LjczNDM4IDkuNTE3NThDNC45NDkyMiA5LjMyMjI3IDUuMDU2NjQgOS4wNzAzMSA1LjA1NjY0IDguNzYxNzJaTTEzLjQxOCAxMi4yNzE1SDguMDc0MjJWMTFIMTMuNDE4VjEyLjI3MTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjk1MjY0IDYpIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
      --jp-icon-text-editor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTUgMTVIM3YyaDEydi0yem0wLThIM3YyaDEyVjd6TTMgMTNoMTh2LTJIM3Yyem0wIDhoMTh2LTJIM3Yyek0zIDN2MmgxOFYzSDN6Ii8+Cjwvc3ZnPgo=);
      --jp-icon-toc: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik03LDVIMjFWN0g3VjVNNywxM1YxMUgyMVYxM0g3TTQsNC41QTEuNSwxLjUgMCAwLDEgNS41LDZBMS41LDEuNSAwIDAsMSA0LDcuNUExLjUsMS41IDAgMCwxIDIuNSw2QTEuNSwxLjUgMCAwLDEgNCw0LjVNNCwxMC41QTEuNSwxLjUgMCAwLDEgNS41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMy41QTEuNSwxLjUgMCAwLDEgMi41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMC41TTcsMTlWMTdIMjFWMTlIN000LDE2LjVBMS41LDEuNSAwIDAsMSA1LjUsMThBMS41LDEuNSAwIDAsMSA0LDE5LjVBMS41LDEuNSAwIDAsMSAyLjUsMThBMS41LDEuNSAwIDAsMSA0LDE2LjVaIiAvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-tree-view: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMiAxMVYzaC03djNIOVYzSDJ2OGg3VjhoMnYxMGg0djNoN3YtOGgtN3YzaC0yVjhoMnYzeiIvPgogICAgPC9nPgo8L3N2Zz4=);
      --jp-icon-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMiAxNy4xODQ0IDIuOTY5NjggMTQuMzAzMiAxLjg2MDk0IDExLjQ0MDlaIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA5Ljg2NzE5KSIgZD0iTTIuODYwMTUgNC44NjUzNUwwLjcyNjU0OSAyLjk5OTU5TDAgMy42MzA0NUwyLjg2MDE1IDYuMTMxNTdMOCAwLjYzMDg3Mkw3LjI3ODU3IDBMMi44NjAxNSA0Ljg2NTM1WiIvPgo8L3N2Zz4K);
      --jp-icon-undo: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-vega: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbjEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjEyMTIxIj4KICAgIDxwYXRoIGQ9Ik0xMC42IDUuNGwyLjItMy4ySDIuMnY3LjNsNC02LjZ6Ii8+CiAgICA8cGF0aCBkPSJNMTUuOCAyLjJsLTQuNCA2LjZMNyA2LjNsLTQuOCA4djUuNWgxNy42VjIuMmgtNHptLTcgMTUuNEg1LjV2LTQuNGgzLjN2NC40em00LjQgMEg5LjhWOS44aDMuNHY3Ljh6bTQuNCAwaC0zLjRWNi41aDMuNHYxMS4xeiIvPgogIDwvZz4KPC9zdmc+Cg==);
      --jp-icon-yaml: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1jb250cmFzdDIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjRDgxQjYwIj4KICAgIDxwYXRoIGQ9Ik03LjIgMTguNnYtNS40TDMgNS42aDMuM2wxLjQgMy4xYy4zLjkuNiAxLjYgMSAyLjUuMy0uOC42LTEuNiAxLTIuNWwxLjQtMy4xaDMuNGwtNC40IDcuNnY1LjVsLTIuOS0uMXoiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxNi41IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxMSIgcj0iMi4xIi8+CiAgPC9nPgo8L3N2Zz4K);
    }
    
    /* Icon CSS class declarations */
    
    .jp-AddIcon {
      background-image: var(--jp-icon-add);
    }
    .jp-BugIcon {
      background-image: var(--jp-icon-bug);
    }
    .jp-BuildIcon {
      background-image: var(--jp-icon-build);
    }
    .jp-CaretDownEmptyIcon {
      background-image: var(--jp-icon-caret-down-empty);
    }
    .jp-CaretDownEmptyThinIcon {
      background-image: var(--jp-icon-caret-down-empty-thin);
    }
    .jp-CaretDownIcon {
      background-image: var(--jp-icon-caret-down);
    }
    .jp-CaretLeftIcon {
      background-image: var(--jp-icon-caret-left);
    }
    .jp-CaretRightIcon {
      background-image: var(--jp-icon-caret-right);
    }
    .jp-CaretUpEmptyThinIcon {
      background-image: var(--jp-icon-caret-up-empty-thin);
    }
    .jp-CaretUpIcon {
      background-image: var(--jp-icon-caret-up);
    }
    .jp-CaseSensitiveIcon {
      background-image: var(--jp-icon-case-sensitive);
    }
    .jp-CheckIcon {
      background-image: var(--jp-icon-check);
    }
    .jp-CircleEmptyIcon {
      background-image: var(--jp-icon-circle-empty);
    }
    .jp-CircleIcon {
      background-image: var(--jp-icon-circle);
    }
    .jp-ClearIcon {
      background-image: var(--jp-icon-clear);
    }
    .jp-CloseIcon {
      background-image: var(--jp-icon-close);
    }
    .jp-CodeIcon {
      background-image: var(--jp-icon-code);
    }
    .jp-ConsoleIcon {
      background-image: var(--jp-icon-console);
    }
    .jp-CopyIcon {
      background-image: var(--jp-icon-copy);
    }
    .jp-CopyrightIcon {
      background-image: var(--jp-icon-copyright);
    }
    .jp-CutIcon {
      background-image: var(--jp-icon-cut);
    }
    .jp-DownloadIcon {
      background-image: var(--jp-icon-download);
    }
    .jp-EditIcon {
      background-image: var(--jp-icon-edit);
    }
    .jp-EllipsesIcon {
      background-image: var(--jp-icon-ellipses);
    }
    .jp-ExtensionIcon {
      background-image: var(--jp-icon-extension);
    }
    .jp-FastForwardIcon {
      background-image: var(--jp-icon-fast-forward);
    }
    .jp-FileIcon {
      background-image: var(--jp-icon-file);
    }
    .jp-FileUploadIcon {
      background-image: var(--jp-icon-file-upload);
    }
    .jp-FilterListIcon {
      background-image: var(--jp-icon-filter-list);
    }
    .jp-FolderIcon {
      background-image: var(--jp-icon-folder);
    }
    .jp-Html5Icon {
      background-image: var(--jp-icon-html5);
    }
    .jp-ImageIcon {
      background-image: var(--jp-icon-image);
    }
    .jp-InspectorIcon {
      background-image: var(--jp-icon-inspector);
    }
    .jp-JsonIcon {
      background-image: var(--jp-icon-json);
    }
    .jp-JuliaIcon {
      background-image: var(--jp-icon-julia);
    }
    .jp-JupyterFaviconIcon {
      background-image: var(--jp-icon-jupyter-favicon);
    }
    .jp-JupyterIcon {
      background-image: var(--jp-icon-jupyter);
    }
    .jp-JupyterlabWordmarkIcon {
      background-image: var(--jp-icon-jupyterlab-wordmark);
    }
    .jp-KernelIcon {
      background-image: var(--jp-icon-kernel);
    }
    .jp-KeyboardIcon {
      background-image: var(--jp-icon-keyboard);
    }
    .jp-LauncherIcon {
      background-image: var(--jp-icon-launcher);
    }
    .jp-LineFormIcon {
      background-image: var(--jp-icon-line-form);
    }
    .jp-LinkIcon {
      background-image: var(--jp-icon-link);
    }
    .jp-ListIcon {
      background-image: var(--jp-icon-list);
    }
    .jp-ListingsInfoIcon {
      background-image: var(--jp-icon-listings-info);
    }
    .jp-MarkdownIcon {
      background-image: var(--jp-icon-markdown);
    }
    .jp-NewFolderIcon {
      background-image: var(--jp-icon-new-folder);
    }
    .jp-NotTrustedIcon {
      background-image: var(--jp-icon-not-trusted);
    }
    .jp-NotebookIcon {
      background-image: var(--jp-icon-notebook);
    }
    .jp-NumberingIcon {
      background-image: var(--jp-icon-numbering);
    }
    .jp-OfflineBoltIcon {
      background-image: var(--jp-icon-offline-bolt);
    }
    .jp-PaletteIcon {
      background-image: var(--jp-icon-palette);
    }
    .jp-PasteIcon {
      background-image: var(--jp-icon-paste);
    }
    .jp-PdfIcon {
      background-image: var(--jp-icon-pdf);
    }
    .jp-PythonIcon {
      background-image: var(--jp-icon-python);
    }
    .jp-RKernelIcon {
      background-image: var(--jp-icon-r-kernel);
    }
    .jp-ReactIcon {
      background-image: var(--jp-icon-react);
    }
    .jp-RedoIcon {
      background-image: var(--jp-icon-redo);
    }
    .jp-RefreshIcon {
      background-image: var(--jp-icon-refresh);
    }
    .jp-RegexIcon {
      background-image: var(--jp-icon-regex);
    }
    .jp-RunIcon {
      background-image: var(--jp-icon-run);
    }
    .jp-RunningIcon {
      background-image: var(--jp-icon-running);
    }
    .jp-SaveIcon {
      background-image: var(--jp-icon-save);
    }
    .jp-SearchIcon {
      background-image: var(--jp-icon-search);
    }
    .jp-SettingsIcon {
      background-image: var(--jp-icon-settings);
    }
    .jp-SpreadsheetIcon {
      background-image: var(--jp-icon-spreadsheet);
    }
    .jp-StopIcon {
      background-image: var(--jp-icon-stop);
    }
    .jp-TabIcon {
      background-image: var(--jp-icon-tab);
    }
    .jp-TableRowsIcon {
      background-image: var(--jp-icon-table-rows);
    }
    .jp-TagIcon {
      background-image: var(--jp-icon-tag);
    }
    .jp-TerminalIcon {
      background-image: var(--jp-icon-terminal);
    }
    .jp-TextEditorIcon {
      background-image: var(--jp-icon-text-editor);
    }
    .jp-TocIcon {
      background-image: var(--jp-icon-toc);
    }
    .jp-TreeViewIcon {
      background-image: var(--jp-icon-tree-view);
    }
    .jp-TrustedIcon {
      background-image: var(--jp-icon-trusted);
    }
    .jp-UndoIcon {
      background-image: var(--jp-icon-undo);
    }
    .jp-VegaIcon {
      background-image: var(--jp-icon-vega);
    }
    .jp-YamlIcon {
      background-image: var(--jp-icon-yaml);
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /**
     * (DEPRECATED) Support for consuming icons as CSS background images
     */
    
    .jp-Icon,
    .jp-MaterialIcon {
      background-position: center;
      background-repeat: no-repeat;
      background-size: 16px;
      min-width: 16px;
      min-height: 16px;
    }
    
    .jp-Icon-cover {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    
    /**
     * (DEPRECATED) Support for specific CSS icon sizes
     */
    
    .jp-Icon-16 {
      background-size: 16px;
      min-width: 16px;
      min-height: 16px;
    }
    
    .jp-Icon-18 {
      background-size: 18px;
      min-width: 18px;
      min-height: 18px;
    }
    
    .jp-Icon-20 {
      background-size: 20px;
      min-width: 20px;
      min-height: 20px;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /**
     * Support for icons as inline SVG HTMLElements
     */
    
    /* recolor the primary elements of an icon */
    .jp-icon0[fill] {
      fill: var(--jp-inverse-layout-color0);
    }
    .jp-icon1[fill] {
      fill: var(--jp-inverse-layout-color1);
    }
    .jp-icon2[fill] {
      fill: var(--jp-inverse-layout-color2);
    }
    .jp-icon3[fill] {
      fill: var(--jp-inverse-layout-color3);
    }
    .jp-icon4[fill] {
      fill: var(--jp-inverse-layout-color4);
    }
    
    .jp-icon0[stroke] {
      stroke: var(--jp-inverse-layout-color0);
    }
    .jp-icon1[stroke] {
      stroke: var(--jp-inverse-layout-color1);
    }
    .jp-icon2[stroke] {
      stroke: var(--jp-inverse-layout-color2);
    }
    .jp-icon3[stroke] {
      stroke: var(--jp-inverse-layout-color3);
    }
    .jp-icon4[stroke] {
      stroke: var(--jp-inverse-layout-color4);
    }
    /* recolor the accent elements of an icon */
    .jp-icon-accent0[fill] {
      fill: var(--jp-layout-color0);
    }
    .jp-icon-accent1[fill] {
      fill: var(--jp-layout-color1);
    }
    .jp-icon-accent2[fill] {
      fill: var(--jp-layout-color2);
    }
    .jp-icon-accent3[fill] {
      fill: var(--jp-layout-color3);
    }
    .jp-icon-accent4[fill] {
      fill: var(--jp-layout-color4);
    }
    
    .jp-icon-accent0[stroke] {
      stroke: var(--jp-layout-color0);
    }
    .jp-icon-accent1[stroke] {
      stroke: var(--jp-layout-color1);
    }
    .jp-icon-accent2[stroke] {
      stroke: var(--jp-layout-color2);
    }
    .jp-icon-accent3[stroke] {
      stroke: var(--jp-layout-color3);
    }
    .jp-icon-accent4[stroke] {
      stroke: var(--jp-layout-color4);
    }
    /* set the color of an icon to transparent */
    .jp-icon-none[fill] {
      fill: none;
    }
    
    .jp-icon-none[stroke] {
      stroke: none;
    }
    /* brand icon colors. Same for light and dark */
    .jp-icon-brand0[fill] {
      fill: var(--jp-brand-color0);
    }
    .jp-icon-brand1[fill] {
      fill: var(--jp-brand-color1);
    }
    .jp-icon-brand2[fill] {
      fill: var(--jp-brand-color2);
    }
    .jp-icon-brand3[fill] {
      fill: var(--jp-brand-color3);
    }
    .jp-icon-brand4[fill] {
      fill: var(--jp-brand-color4);
    }
    
    .jp-icon-brand0[stroke] {
      stroke: var(--jp-brand-color0);
    }
    .jp-icon-brand1[stroke] {
      stroke: var(--jp-brand-color1);
    }
    .jp-icon-brand2[stroke] {
      stroke: var(--jp-brand-color2);
    }
    .jp-icon-brand3[stroke] {
      stroke: var(--jp-brand-color3);
    }
    .jp-icon-brand4[stroke] {
      stroke: var(--jp-brand-color4);
    }
    /* warn icon colors. Same for light and dark */
    .jp-icon-warn0[fill] {
      fill: var(--jp-warn-color0);
    }
    .jp-icon-warn1[fill] {
      fill: var(--jp-warn-color1);
    }
    .jp-icon-warn2[fill] {
      fill: var(--jp-warn-color2);
    }
    .jp-icon-warn3[fill] {
      fill: var(--jp-warn-color3);
    }
    
    .jp-icon-warn0[stroke] {
      stroke: var(--jp-warn-color0);
    }
    .jp-icon-warn1[stroke] {
      stroke: var(--jp-warn-color1);
    }
    .jp-icon-warn2[stroke] {
      stroke: var(--jp-warn-color2);
    }
    .jp-icon-warn3[stroke] {
      stroke: var(--jp-warn-color3);
    }
    /* icon colors that contrast well with each other and most backgrounds */
    .jp-icon-contrast0[fill] {
      fill: var(--jp-icon-contrast-color0);
    }
    .jp-icon-contrast1[fill] {
      fill: var(--jp-icon-contrast-color1);
    }
    .jp-icon-contrast2[fill] {
      fill: var(--jp-icon-contrast-color2);
    }
    .jp-icon-contrast3[fill] {
      fill: var(--jp-icon-contrast-color3);
    }
    
    .jp-icon-contrast0[stroke] {
      stroke: var(--jp-icon-contrast-color0);
    }
    .jp-icon-contrast1[stroke] {
      stroke: var(--jp-icon-contrast-color1);
    }
    .jp-icon-contrast2[stroke] {
      stroke: var(--jp-icon-contrast-color2);
    }
    .jp-icon-contrast3[stroke] {
      stroke: var(--jp-icon-contrast-color3);
    }
    
    /* CSS for icons in selected items in the settings editor */
    #setting-editor .jp-PluginList .jp-mod-selected .jp-icon-selectable[fill] {
      fill: #fff;
    }
    #setting-editor
      .jp-PluginList
      .jp-mod-selected
      .jp-icon-selectable-inverse[fill] {
      fill: var(--jp-brand-color1);
    }
    
    /* CSS for icons in selected filebrowser listing items */
    .jp-DirListing-item.jp-mod-selected .jp-icon-selectable[fill] {
      fill: #fff;
    }
    .jp-DirListing-item.jp-mod-selected .jp-icon-selectable-inverse[fill] {
      fill: var(--jp-brand-color1);
    }
    
    /* CSS for icons in selected tabs in the sidebar tab manager */
    #tab-manager .lm-TabBar-tab.jp-mod-active .jp-icon-selectable[fill] {
      fill: #fff;
    }
    
    #tab-manager .lm-TabBar-tab.jp-mod-active .jp-icon-selectable-inverse[fill] {
      fill: var(--jp-brand-color1);
    }
    #tab-manager
      .lm-TabBar-tab.jp-mod-active
      .jp-icon-hover
      :hover
      .jp-icon-selectable[fill] {
      fill: var(--jp-brand-color1);
    }
    
    #tab-manager
      .lm-TabBar-tab.jp-mod-active
      .jp-icon-hover
      :hover
      .jp-icon-selectable-inverse[fill] {
      fill: #fff;
    }
    
    /**
     * TODO: come up with non css-hack solution for showing the busy icon on top
     *  of the close icon
     * CSS for complex behavior of close icon of tabs in the sidebar tab manager
     */
    #tab-manager
      .lm-TabBar-tab.jp-mod-dirty
      > .lm-TabBar-tabCloseIcon
      > :not(:hover)
      > .jp-icon3[fill] {
      fill: none;
    }
    #tab-manager
      .lm-TabBar-tab.jp-mod-dirty
      > .lm-TabBar-tabCloseIcon
      > :not(:hover)
      > .jp-icon-busy[fill] {
      fill: var(--jp-inverse-layout-color3);
    }
    
    #tab-manager
      .lm-TabBar-tab.jp-mod-dirty.jp-mod-active
      > .lm-TabBar-tabCloseIcon
      > :not(:hover)
      > .jp-icon-busy[fill] {
      fill: #fff;
    }
    
    /**
    * TODO: come up with non css-hack solution for showing the busy icon on top
    *  of the close icon
    * CSS for complex behavior of close icon of tabs in the main area tabbar
    */
    .lm-DockPanel-tabBar
      .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
      > .lm-TabBar-tabCloseIcon
      > :not(:hover)
      > .jp-icon3[fill] {
      fill: none;
    }
    .lm-DockPanel-tabBar
      .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
      > .lm-TabBar-tabCloseIcon
      > :not(:hover)
      > .jp-icon-busy[fill] {
      fill: var(--jp-inverse-layout-color3);
    }
    
    /* CSS for icons in status bar */
    #jp-main-statusbar .jp-mod-selected .jp-icon-selectable[fill] {
      fill: #fff;
    }
    
    #jp-main-statusbar .jp-mod-selected .jp-icon-selectable-inverse[fill] {
      fill: var(--jp-brand-color1);
    }
    /* special handling for splash icon CSS. While the theme CSS reloads during
       splash, the splash icon can loose theming. To prevent that, we set a
       default for its color variable */
    :root {
      --jp-warn-color0: var(--md-orange-700);
    }
    
    /* not sure what to do with this one, used in filebrowser listing */
    .jp-DragIcon {
      margin-right: 4px;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /**
     * Support for alt colors for icons as inline SVG HTMLElements
     */
    
    /* alt recolor the primary elements of an icon */
    .jp-icon-alt .jp-icon0[fill] {
      fill: var(--jp-layout-color0);
    }
    .jp-icon-alt .jp-icon1[fill] {
      fill: var(--jp-layout-color1);
    }
    .jp-icon-alt .jp-icon2[fill] {
      fill: var(--jp-layout-color2);
    }
    .jp-icon-alt .jp-icon3[fill] {
      fill: var(--jp-layout-color3);
    }
    .jp-icon-alt .jp-icon4[fill] {
      fill: var(--jp-layout-color4);
    }
    
    .jp-icon-alt .jp-icon0[stroke] {
      stroke: var(--jp-layout-color0);
    }
    .jp-icon-alt .jp-icon1[stroke] {
      stroke: var(--jp-layout-color1);
    }
    .jp-icon-alt .jp-icon2[stroke] {
      stroke: var(--jp-layout-color2);
    }
    .jp-icon-alt .jp-icon3[stroke] {
      stroke: var(--jp-layout-color3);
    }
    .jp-icon-alt .jp-icon4[stroke] {
      stroke: var(--jp-layout-color4);
    }
    
    /* alt recolor the accent elements of an icon */
    .jp-icon-alt .jp-icon-accent0[fill] {
      fill: var(--jp-inverse-layout-color0);
    }
    .jp-icon-alt .jp-icon-accent1[fill] {
      fill: var(--jp-inverse-layout-color1);
    }
    .jp-icon-alt .jp-icon-accent2[fill] {
      fill: var(--jp-inverse-layout-color2);
    }
    .jp-icon-alt .jp-icon-accent3[fill] {
      fill: var(--jp-inverse-layout-color3);
    }
    .jp-icon-alt .jp-icon-accent4[fill] {
      fill: var(--jp-inverse-layout-color4);
    }
    
    .jp-icon-alt .jp-icon-accent0[stroke] {
      stroke: var(--jp-inverse-layout-color0);
    }
    .jp-icon-alt .jp-icon-accent1[stroke] {
      stroke: var(--jp-inverse-layout-color1);
    }
    .jp-icon-alt .jp-icon-accent2[stroke] {
      stroke: var(--jp-inverse-layout-color2);
    }
    .jp-icon-alt .jp-icon-accent3[stroke] {
      stroke: var(--jp-inverse-layout-color3);
    }
    .jp-icon-alt .jp-icon-accent4[stroke] {
      stroke: var(--jp-inverse-layout-color4);
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-icon-hoverShow:not(:hover) svg {
      display: none !important;
    }
    
    /**
     * Support for hover colors for icons as inline SVG HTMLElements
     */
    
    /**
     * regular colors
     */
    
    /* recolor the primary elements of an icon */
    .jp-icon-hover :hover .jp-icon0-hover[fill] {
      fill: var(--jp-inverse-layout-color0);
    }
    .jp-icon-hover :hover .jp-icon1-hover[fill] {
      fill: var(--jp-inverse-layout-color1);
    }
    .jp-icon-hover :hover .jp-icon2-hover[fill] {
      fill: var(--jp-inverse-layout-color2);
    }
    .jp-icon-hover :hover .jp-icon3-hover[fill] {
      fill: var(--jp-inverse-layout-color3);
    }
    .jp-icon-hover :hover .jp-icon4-hover[fill] {
      fill: var(--jp-inverse-layout-color4);
    }
    
    .jp-icon-hover :hover .jp-icon0-hover[stroke] {
      stroke: var(--jp-inverse-layout-color0);
    }
    .jp-icon-hover :hover .jp-icon1-hover[stroke] {
      stroke: var(--jp-inverse-layout-color1);
    }
    .jp-icon-hover :hover .jp-icon2-hover[stroke] {
      stroke: var(--jp-inverse-layout-color2);
    }
    .jp-icon-hover :hover .jp-icon3-hover[stroke] {
      stroke: var(--jp-inverse-layout-color3);
    }
    .jp-icon-hover :hover .jp-icon4-hover[stroke] {
      stroke: var(--jp-inverse-layout-color4);
    }
    
    /* recolor the accent elements of an icon */
    .jp-icon-hover :hover .jp-icon-accent0-hover[fill] {
      fill: var(--jp-layout-color0);
    }
    .jp-icon-hover :hover .jp-icon-accent1-hover[fill] {
      fill: var(--jp-layout-color1);
    }
    .jp-icon-hover :hover .jp-icon-accent2-hover[fill] {
      fill: var(--jp-layout-color2);
    }
    .jp-icon-hover :hover .jp-icon-accent3-hover[fill] {
      fill: var(--jp-layout-color3);
    }
    .jp-icon-hover :hover .jp-icon-accent4-hover[fill] {
      fill: var(--jp-layout-color4);
    }
    
    .jp-icon-hover :hover .jp-icon-accent0-hover[stroke] {
      stroke: var(--jp-layout-color0);
    }
    .jp-icon-hover :hover .jp-icon-accent1-hover[stroke] {
      stroke: var(--jp-layout-color1);
    }
    .jp-icon-hover :hover .jp-icon-accent2-hover[stroke] {
      stroke: var(--jp-layout-color2);
    }
    .jp-icon-hover :hover .jp-icon-accent3-hover[stroke] {
      stroke: var(--jp-layout-color3);
    }
    .jp-icon-hover :hover .jp-icon-accent4-hover[stroke] {
      stroke: var(--jp-layout-color4);
    }
    
    /* set the color of an icon to transparent */
    .jp-icon-hover :hover .jp-icon-none-hover[fill] {
      fill: none;
    }
    
    .jp-icon-hover :hover .jp-icon-none-hover[stroke] {
      stroke: none;
    }
    
    /**
     * inverse colors
     */
    
    /* inverse recolor the primary elements of an icon */
    .jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[fill] {
      fill: var(--jp-layout-color0);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[fill] {
      fill: var(--jp-layout-color1);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[fill] {
      fill: var(--jp-layout-color2);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[fill] {
      fill: var(--jp-layout-color3);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[fill] {
      fill: var(--jp-layout-color4);
    }
    
    .jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[stroke] {
      stroke: var(--jp-layout-color0);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[stroke] {
      stroke: var(--jp-layout-color1);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[stroke] {
      stroke: var(--jp-layout-color2);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[stroke] {
      stroke: var(--jp-layout-color3);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[stroke] {
      stroke: var(--jp-layout-color4);
    }
    
    /* inverse recolor the accent elements of an icon */
    .jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[fill] {
      fill: var(--jp-inverse-layout-color0);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[fill] {
      fill: var(--jp-inverse-layout-color1);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[fill] {
      fill: var(--jp-inverse-layout-color2);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[fill] {
      fill: var(--jp-inverse-layout-color3);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[fill] {
      fill: var(--jp-inverse-layout-color4);
    }
    
    .jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[stroke] {
      stroke: var(--jp-inverse-layout-color0);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[stroke] {
      stroke: var(--jp-inverse-layout-color1);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[stroke] {
      stroke: var(--jp-inverse-layout-color2);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[stroke] {
      stroke: var(--jp-inverse-layout-color3);
    }
    .jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[stroke] {
      stroke: var(--jp-inverse-layout-color4);
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-switch {
      display: flex;
      align-items: center;
      padding-left: 4px;
      padding-right: 4px;
      font-size: var(--jp-ui-font-size1);
      background-color: transparent;
      color: var(--jp-ui-font-color1);
      border: none;
      height: 20px;
    }
    
    .jp-switch:hover {
      background-color: var(--jp-layout-color2);
    }
    
    .jp-switch-label {
      margin-right: 5px;
    }
    
    .jp-switch-track {
      cursor: pointer;
      background-color: var(--jp-border-color1);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 34px;
      height: 16px;
      width: 35px;
      position: relative;
    }
    
    .jp-switch-track::before {
      content: '';
      position: absolute;
      height: 10px;
      width: 10px;
      margin: 3px;
      left: 0px;
      background-color: var(--jp-ui-inverse-font-color1);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
    
    .jp-switch[aria-checked='true'] .jp-switch-track {
      background-color: var(--jp-warn-color0);
    }
    
    .jp-switch[aria-checked='true'] .jp-switch-track::before {
      /* track width (35) - margins (3 + 3) - thumb width (10) */
      left: 19px;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /* Sibling imports */
    
    /* Override Blueprint's _reset.scss styles */
    html {
      box-sizing: unset;
    }
    
    *,
    *::before,
    *::after {
      box-sizing: unset;
    }
    
    body {
      color: unset;
      font-family: var(--jp-ui-font-family);
    }
    
    p {
      margin-top: unset;
      margin-bottom: unset;
    }
    
    small {
      font-size: unset;
    }
    
    strong {
      font-weight: unset;
    }
    
    /* Override Blueprint's _typography.scss styles */
    a {
      text-decoration: unset;
      color: unset;
    }
    a:hover {
      text-decoration: unset;
      color: unset;
    }
    
    /* Override Blueprint's _accessibility.scss styles */
    :focus {
      outline: unset;
      outline-offset: unset;
      -moz-outline-radius: unset;
    }
    
    /* Styles for ui-components */
    .jp-Button {
      border-radius: var(--jp-border-radius);
      padding: 0px 12px;
      font-size: var(--jp-ui-font-size1);
    }
    
    /* Use our own theme for hover styles */
    button.jp-Button.bp3-button.bp3-minimal:hover {
      background-color: var(--jp-layout-color2);
    }
    .jp-Button.minimal {
      color: unset !important;
    }
    
    .jp-Button.jp-ToolbarButtonComponent {
      text-transform: none;
    }
    
    .jp-InputGroup input {
      box-sizing: border-box;
      border-radius: 0;
      background-color: transparent;
      color: var(--jp-ui-font-color0);
      box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
    }
    
    .jp-InputGroup input:focus {
      box-shadow: inset 0 0 0 var(--jp-border-width)
          var(--jp-input-active-box-shadow-color),
        inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
    }
    
    .jp-InputGroup input::placeholder,
    input::placeholder {
      color: var(--jp-ui-font-color3);
    }
    
    .jp-BPIcon {
      display: inline-block;
      vertical-align: middle;
      margin: auto;
    }
    
    /* Stop blueprint futzing with our icon fills */
    .bp3-icon.jp-BPIcon > svg:not([fill]) {
      fill: var(--jp-inverse-layout-color3);
    }
    
    .jp-InputGroupAction {
      padding: 6px;
    }
    
    .jp-HTMLSelect.jp-DefaultStyle select {
      background-color: initial;
      border: none;
      border-radius: 0;
      box-shadow: none;
      color: var(--jp-ui-font-color0);
      display: block;
      font-size: var(--jp-ui-font-size1);
      height: 24px;
      line-height: 14px;
      padding: 0 25px 0 10px;
      text-align: left;
      -moz-appearance: none;
      -webkit-appearance: none;
    }
    
    /* Use our own theme for hover and option styles */
    .jp-HTMLSelect.jp-DefaultStyle select:hover,
    .jp-HTMLSelect.jp-DefaultStyle select > option {
      background-color: var(--jp-layout-color2);
      color: var(--jp-ui-font-color0);
    }
    select {
      box-sizing: border-box;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-Collapse {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      border-top: 1px solid var(--jp-border-color2);
      border-bottom: 1px solid var(--jp-border-color2);
    }
    
    .jp-Collapse-header {
      padding: 1px 12px;
      color: var(--jp-ui-font-color1);
      background-color: var(--jp-layout-color1);
      font-size: var(--jp-ui-font-size2);
    }
    
    .jp-Collapse-header:hover {
      background-color: var(--jp-layout-color2);
    }
    
    .jp-Collapse-contents {
      padding: 0px 12px 0px 12px;
      background-color: var(--jp-layout-color1);
      color: var(--jp-ui-font-color1);
      overflow: auto;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Variables
    |----------------------------------------------------------------------------*/
    
    :root {
      --jp-private-commandpalette-search-height: 28px;
    }
    
    /*-----------------------------------------------------------------------------
    | Overall styles
    |----------------------------------------------------------------------------*/
    
    .lm-CommandPalette {
      padding-bottom: 0px;
      color: var(--jp-ui-font-color1);
      background: var(--jp-layout-color1);
      /* This is needed so that all font sizing of children done in ems is
       * relative to this base size */
      font-size: var(--jp-ui-font-size1);
    }
    
    /*-----------------------------------------------------------------------------
    | Modal variant
    |----------------------------------------------------------------------------*/
    
    .jp-ModalCommandPalette {
      position: absolute;
      z-index: 10000;
      top: 38px;
      left: 30%;
      margin: 0;
      padding: 4px;
      width: 40%;
      box-shadow: var(--jp-elevation-z4);
      border-radius: 4px;
      background: var(--jp-layout-color0);
    }
    
    .jp-ModalCommandPalette .lm-CommandPalette {
      max-height: 40vh;
    }
    
    .jp-ModalCommandPalette .lm-CommandPalette .lm-close-icon::after {
      display: none;
    }
    
    .jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-header {
      display: none;
    }
    
    .jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-item {
      margin-left: 4px;
      margin-right: 4px;
    }
    
    .jp-ModalCommandPalette
      .lm-CommandPalette
      .lm-CommandPalette-item.lm-mod-disabled {
      display: none;
    }
    
    /*-----------------------------------------------------------------------------
    | Search
    |----------------------------------------------------------------------------*/
    
    .lm-CommandPalette-search {
      padding: 4px;
      background-color: var(--jp-layout-color1);
      z-index: 2;
    }
    
    .lm-CommandPalette-wrapper {
      overflow: overlay;
      padding: 0px 9px;
      background-color: var(--jp-input-active-background);
      height: 30px;
      box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
    }
    
    .lm-CommandPalette.lm-mod-focused .lm-CommandPalette-wrapper {
      box-shadow: inset 0 0 0 1px var(--jp-input-active-box-shadow-color),
        inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
    }
    
    .jp-SearchIconGroup {
      color: white;
      background-color: var(--jp-brand-color1);
      position: absolute;
      top: 4px;
      right: 4px;
      padding: 5px 5px 1px 5px;
    }
    
    .jp-SearchIconGroup svg {
      height: 20px;
      width: 20px;
    }
    
    .jp-SearchIconGroup .jp-icon3[fill] {
      fill: var(--jp-layout-color0);
    }
    
    .lm-CommandPalette-input {
      background: transparent;
      width: calc(100% - 18px);
      float: left;
      border: none;
      outline: none;
      font-size: var(--jp-ui-font-size1);
      color: var(--jp-ui-font-color0);
      line-height: var(--jp-private-commandpalette-search-height);
    }
    
    .lm-CommandPalette-input::-webkit-input-placeholder,
    .lm-CommandPalette-input::-moz-placeholder,
    .lm-CommandPalette-input:-ms-input-placeholder {
      color: var(--jp-ui-font-color2);
      font-size: var(--jp-ui-font-size1);
    }
    
    /*-----------------------------------------------------------------------------
    | Results
    |----------------------------------------------------------------------------*/
    
    .lm-CommandPalette-header:first-child {
      margin-top: 0px;
    }
    
    .lm-CommandPalette-header {
      border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
      color: var(--jp-ui-font-color1);
      cursor: pointer;
      display: flex;
      font-size: var(--jp-ui-font-size0);
      font-weight: 600;
      letter-spacing: 1px;
      margin-top: 8px;
      padding: 8px 0 8px 12px;
      text-transform: uppercase;
    }
    
    .lm-CommandPalette-header.lm-mod-active {
      background: var(--jp-layout-color2);
    }
    
    .lm-CommandPalette-header > mark {
      background-color: transparent;
      font-weight: bold;
      color: var(--jp-ui-font-color1);
    }
    
    .lm-CommandPalette-item {
      padding: 4px 12px 4px 4px;
      color: var(--jp-ui-font-color1);
      font-size: var(--jp-ui-font-size1);
      font-weight: 400;
      display: flex;
    }
    
    .lm-CommandPalette-item.lm-mod-disabled {
      color: var(--jp-ui-font-color2);
    }
    
    .lm-CommandPalette-item.lm-mod-active {
      color: var(--jp-ui-inverse-font-color1);
      background: var(--jp-brand-color1);
    }
    
    .lm-CommandPalette-item.lm-mod-active .lm-CommandPalette-itemLabel > mark {
      color: var(--jp-ui-inverse-font-color0);
    }
    
    .lm-CommandPalette-item.lm-mod-active .jp-icon-selectable[fill] {
      fill: var(--jp-layout-color0);
    }
    
    .lm-CommandPalette-item.lm-mod-active .lm-CommandPalette-itemLabel > mark {
      color: var(--jp-ui-inverse-font-color0);
    }
    
    .lm-CommandPalette-item.lm-mod-active:hover:not(.lm-mod-disabled) {
      color: var(--jp-ui-inverse-font-color1);
      background: var(--jp-brand-color1);
    }
    
    .lm-CommandPalette-item:hover:not(.lm-mod-active):not(.lm-mod-disabled) {
      background: var(--jp-layout-color2);
    }
    
    .lm-CommandPalette-itemContent {
      overflow: hidden;
    }
    
    .lm-CommandPalette-itemLabel > mark {
      color: var(--jp-ui-font-color0);
      background-color: transparent;
      font-weight: bold;
    }
    
    .lm-CommandPalette-item.lm-mod-disabled mark {
      color: var(--jp-ui-font-color2);
    }
    
    .lm-CommandPalette-item .lm-CommandPalette-itemIcon {
      margin: 0 4px 0 0;
      position: relative;
      width: 16px;
      top: 2px;
      flex: 0 0 auto;
    }
    
    .lm-CommandPalette-item.lm-mod-disabled .lm-CommandPalette-itemIcon {
      opacity: 0.6;
    }
    
    .lm-CommandPalette-item .lm-CommandPalette-itemShortcut {
      flex: 0 0 auto;
    }
    
    .lm-CommandPalette-itemCaption {
      display: none;
    }
    
    .lm-CommandPalette-content {
      background-color: var(--jp-layout-color1);
    }
    
    .lm-CommandPalette-content:empty:after {
      content: 'No results';
      margin: auto;
      margin-top: 20px;
      width: 100px;
      display: block;
      font-size: var(--jp-ui-font-size2);
      font-family: var(--jp-ui-font-family);
      font-weight: lighter;
    }
    
    .lm-CommandPalette-emptyMessage {
      text-align: center;
      margin-top: 24px;
      line-height: 1.32;
      padding: 0px 8px;
      color: var(--jp-content-font-color3);
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) 2014-2017, Jupyter Development Team.
    |
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-Dialog {
      position: absolute;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 0px;
      left: 0px;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: var(--jp-dialog-background);
    }
    
    .jp-Dialog-content {
      display: flex;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      background: var(--jp-layout-color1);
      padding: 24px;
      padding-bottom: 12px;
      min-width: 300px;
      min-height: 150px;
      max-width: 1000px;
      max-height: 500px;
      box-sizing: border-box;
      box-shadow: var(--jp-elevation-z20);
      word-wrap: break-word;
      border-radius: var(--jp-border-radius);
      /* This is needed so that all font sizing of children done in ems is
       * relative to this base size */
      font-size: var(--jp-ui-font-size1);
      color: var(--jp-ui-font-color1);
      resize: both;
    }
    
    .jp-Dialog-button {
      overflow: visible;
    }
    
    button.jp-Dialog-button:focus {
      outline: 1px solid var(--jp-brand-color1);
      outline-offset: 4px;
      -moz-outline-radius: 0px;
    }
    
    button.jp-Dialog-button:focus::-moz-focus-inner {
      border: 0;
    }
    
    button.jp-Dialog-close-button {
      padding: 0;
      height: 100%;
      min-width: unset;
      min-height: unset;
    }
    
    .jp-Dialog-header {
      display: flex;
      justify-content: space-between;
      flex: 0 0 auto;
      padding-bottom: 12px;
      font-size: var(--jp-ui-font-size3);
      font-weight: 400;
      color: var(--jp-ui-font-color0);
    }
    
    .jp-Dialog-body {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      font-size: var(--jp-ui-font-size1);
      background: var(--jp-layout-color1);
      overflow: auto;
    }
    
    .jp-Dialog-footer {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      flex: 0 0 auto;
      margin-left: -12px;
      margin-right: -12px;
      padding: 12px;
    }
    
    .jp-Dialog-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    
    .jp-Dialog-body > .jp-select-wrapper {
      width: 100%;
    }
    
    .jp-Dialog-body > button {
      padding: 0px 16px;
    }
    
    .jp-Dialog-body > label {
      line-height: 1.4;
      color: var(--jp-ui-font-color0);
    }
    
    .jp-Dialog-button.jp-mod-styled:not(:last-child) {
      margin-right: 12px;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) 2014-2016, Jupyter Development Team.
    |
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-HoverBox {
      position: fixed;
    }
    
    .jp-HoverBox.jp-mod-outofview {
      display: none;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-IFrame {
      width: 100%;
      height: 100%;
    }
    
    .jp-IFrame > iframe {
      border: none;
    }
    
  
    body.lm-mod-override-cursor .jp-IFrame {
      position: relative;
    }
    
    body.lm-mod-override-cursor .jp-IFrame:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
    }
    
    .jp-Input-Boolean-Dialog {
      flex-direction: row-reverse;
      align-items: end;
      width: 100%;
    }
    
    .jp-Input-Boolean-Dialog > label {
      flex: 1 1 auto;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) 2014-2016, Jupyter Development Team.
    |
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-MainAreaWidget > :focus {
      outline: none;
    }
    
    /**
     * google-material-color v1.2.6
     * https://github.com/danlevan/google-material-color
     */
    :root {
      --md-red-50: #ffebee;
      --md-red-100: #ffcdd2;
      --md-red-200: #ef9a9a;
      --md-red-300: #e57373;
      --md-red-400: #ef5350;
      --md-red-500: #f44336;
      --md-red-600: #e53935;
      --md-red-700: #d32f2f;
      --md-red-800: #c62828;
      --md-red-900: #b71c1c;
      --md-red-A100: #ff8a80;
      --md-red-A200: #ff5252;
      --md-red-A400: #ff1744;
      --md-red-A700: #d50000;
    
      --md-pink-50: #fce4ec;
      --md-pink-100: #f8bbd0;
      --md-pink-200: #f48fb1;
      --md-pink-300: #f06292;
      --md-pink-400: #ec407a;
      --md-pink-500: #e91e63;
      --md-pink-600: #d81b60;
      --md-pink-700: #c2185b;
      --md-pink-800: #ad1457;
      --md-pink-900: #880e4f;
      --md-pink-A100: #ff80ab;
      --md-pink-A200: #ff4081;
      --md-pink-A400: #f50057;
      --md-pink-A700: #c51162;
    
      --md-purple-50: #f3e5f5;
      --md-purple-100: #e1bee7;
      --md-purple-200: #ce93d8;
      --md-purple-300: #ba68c8;
      --md-purple-400: #ab47bc;
      --md-purple-500: #9c27b0;
      --md-purple-600: #8e24aa;
      --md-purple-700: #7b1fa2;
      --md-purple-800: #6a1b9a;
      --md-purple-900: #4a148c;
      --md-purple-A100: #ea80fc;
      --md-purple-A200: #e040fb;
      --md-purple-A400: #d500f9;
      --md-purple-A700: #aa00ff;
    
      --md-deep-purple-50: #ede7f6;
      --md-deep-purple-100: #d1c4e9;
      --md-deep-purple-200: #b39ddb;
      --md-deep-purple-300: #9575cd;
      --md-deep-purple-400: #7e57c2;
      --md-deep-purple-500: #673ab7;
      --md-deep-purple-600: #5e35b1;
      --md-deep-purple-700: #512da8;
      --md-deep-purple-800: #4527a0;
      --md-deep-purple-900: #311b92;
      --md-deep-purple-A100: #b388ff;
      --md-deep-purple-A200: #7c4dff;
      --md-deep-purple-A400: #651fff;
      --md-deep-purple-A700: #6200ea;
    
      --md-indigo-50: #e8eaf6;
      --md-indigo-100: #c5cae9;
      --md-indigo-200: #9fa8da;
      --md-indigo-300: #7986cb;
      --md-indigo-400: #5c6bc0;
      --md-indigo-500: #3f51b5;
      --md-indigo-600: #3949ab;
      --md-indigo-700: #303f9f;
      --md-indigo-800: #283593;
      --md-indigo-900: #1a237e;
      --md-indigo-A100: #8c9eff;
      --md-indigo-A200: #536dfe;
      --md-indigo-A400: #3d5afe;
      --md-indigo-A700: #304ffe;
    
      --md-blue-50: #e3f2fd;
      --md-blue-100: #bbdefb;
      --md-blue-200: #90caf9;
      --md-blue-300: #64b5f6;
      --md-blue-400: #42a5f5;
      --md-blue-500: #2196f3;
      --md-blue-600: #1e88e5;
      --md-blue-700: #1976d2;
      --md-blue-800: #1565c0;
      --md-blue-900: #0d47a1;
      --md-blue-A100: #82b1ff;
      --md-blue-A200: #448aff;
      --md-blue-A400: #2979ff;
      --md-blue-A700: #2962ff;
    
      --md-light-blue-50: #e1f5fe;
      --md-light-blue-100: #b3e5fc;
      --md-light-blue-200: #81d4fa;
      --md-light-blue-300: #4fc3f7;
      --md-light-blue-400: #29b6f6;
      --md-light-blue-500: #03a9f4;
      --md-light-blue-600: #039be5;
      --md-light-blue-700: #0288d1;
      --md-light-blue-800: #0277bd;
      --md-light-blue-900: #01579b;
      --md-light-blue-A100: #80d8ff;
      --md-light-blue-A200: #40c4ff;
      --md-light-blue-A400: #00b0ff;
      --md-light-blue-A700: #0091ea;
    
      --md-cyan-50: #e0f7fa;
      --md-cyan-100: #b2ebf2;
      --md-cyan-200: #80deea;
      --md-cyan-300: #4dd0e1;
      --md-cyan-400: #26c6da;
      --md-cyan-500: #00bcd4;
      --md-cyan-600: #00acc1;
      --md-cyan-700: #0097a7;
      --md-cyan-800: #00838f;
      --md-cyan-900: #006064;
      --md-cyan-A100: #84ffff;
      --md-cyan-A200: #18ffff;
      --md-cyan-A400: #00e5ff;
      --md-cyan-A700: #00b8d4;
    
      --md-teal-50: #e0f2f1;
      --md-teal-100: #b2dfdb;
      --md-teal-200: #80cbc4;
      --md-teal-300: #4db6ac;
      --md-teal-400: #26a69a;
      --md-teal-500: #009688;
      --md-teal-600: #00897b;
      --md-teal-700: #00796b;
      --md-teal-800: #00695c;
      --md-teal-900: #004d40;
      --md-teal-A100: #a7ffeb;
      --md-teal-A200: #64ffda;
      --md-teal-A400: #1de9b6;
      --md-teal-A700: #00bfa5;
    
      --md-green-50: #e8f5e9;
      --md-green-100: #c8e6c9;
      --md-green-200: #a5d6a7;
      --md-green-300: #81c784;
      --md-green-400: #66bb6a;
      --md-green-500: #4caf50;
      --md-green-600: #43a047;
      --md-green-700: #388e3c;
      --md-green-800: #2e7d32;
      --md-green-900: #1b5e20;
      --md-green-A100: #b9f6ca;
      --md-green-A200: #69f0ae;
      --md-green-A400: #00e676;
      --md-green-A700: #00c853;
    
      --md-light-green-50: #f1f8e9;
      --md-light-green-100: #dcedc8;
      --md-light-green-200: #c5e1a5;
      --md-light-green-300: #aed581;
      --md-light-green-400: #9ccc65;
      --md-light-green-500: #8bc34a;
      --md-light-green-600: #7cb342;
      --md-light-green-700: #689f38;
      --md-light-green-800: #558b2f;
      --md-light-green-900: #33691e;
      --md-light-green-A100: #ccff90;
      --md-light-green-A200: #b2ff59;
      --md-light-green-A400: #76ff03;
      --md-light-green-A700: #64dd17;
    
      --md-lime-50: #f9fbe7;
      --md-lime-100: #f0f4c3;
      --md-lime-200: #e6ee9c;
      --md-lime-300: #dce775;
      --md-lime-400: #d4e157;
      --md-lime-500: #cddc39;
      --md-lime-600: #c0ca33;
      --md-lime-700: #afb42b;
      --md-lime-800: #9e9d24;
      --md-lime-900: #827717;
      --md-lime-A100: #f4ff81;
      --md-lime-A200: #eeff41;
      --md-lime-A400: #c6ff00;
      --md-lime-A700: #aeea00;
    
      --md-yellow-50: #fffde7;
      --md-yellow-100: #fff9c4;
      --md-yellow-200: #fff59d;
      --md-yellow-300: #fff176;
      --md-yellow-400: #ffee58;
      --md-yellow-500: #ffeb3b;
      --md-yellow-600: #fdd835;
      --md-yellow-700: #fbc02d;
      --md-yellow-800: #f9a825;
      --md-yellow-900: #f57f17;
      --md-yellow-A100: #ffff8d;
      --md-yellow-A200: #ffff00;
      --md-yellow-A400: #ffea00;
      --md-yellow-A700: #ffd600;
    
      --md-amber-50: #fff8e1;
      --md-amber-100: #ffecb3;
      --md-amber-200: #ffe082;
      --md-amber-300: #ffd54f;
      --md-amber-400: #ffca28;
      --md-amber-500: #ffc107;
      --md-amber-600: #ffb300;
      --md-amber-700: #ffa000;
      --md-amber-800: #ff8f00;
      --md-amber-900: #ff6f00;
      --md-amber-A100: #ffe57f;
      --md-amber-A200: #ffd740;
      --md-amber-A400: #ffc400;
      --md-amber-A700: #ffab00;
    
      --md-orange-50: #fff3e0;
      --md-orange-100: #ffe0b2;
      --md-orange-200: #ffcc80;
      --md-orange-300: #ffb74d;
      --md-orange-400: #ffa726;
      --md-orange-500: #ff9800;
      --md-orange-600: #fb8c00;
      --md-orange-700: #f57c00;
      --md-orange-800: #ef6c00;
      --md-orange-900: #e65100;
      --md-orange-A100: #ffd180;
      --md-orange-A200: #ffab40;
      --md-orange-A400: #ff9100;
      --md-orange-A700: #ff6d00;
    
      --md-deep-orange-50: #fbe9e7;
      --md-deep-orange-100: #ffccbc;
      --md-deep-orange-200: #ffab91;
      --md-deep-orange-300: #ff8a65;
      --md-deep-orange-400: #ff7043;
      --md-deep-orange-500: #ff5722;
      --md-deep-orange-600: #f4511e;
      --md-deep-orange-700: #e64a19;
      --md-deep-orange-800: #d84315;
      --md-deep-orange-900: #bf360c;
      --md-deep-orange-A100: #ff9e80;
      --md-deep-orange-A200: #ff6e40;
      --md-deep-orange-A400: #ff3d00;
      --md-deep-orange-A700: #dd2c00;
    
      --md-brown-50: #efebe9;
      --md-brown-100: #d7ccc8;
      --md-brown-200: #bcaaa4;
      --md-brown-300: #a1887f;
      --md-brown-400: #8d6e63;
      --md-brown-500: #795548;
      --md-brown-600: #6d4c41;
      --md-brown-700: #5d4037;
      --md-brown-800: #4e342e;
      --md-brown-900: #3e2723;
    
      --md-grey-50: #fafafa;
      --md-grey-100: #f5f5f5;
      --md-grey-200: #eeeeee;
      --md-grey-300: #e0e0e0;
      --md-grey-400: #bdbdbd;
      --md-grey-500: #9e9e9e;
      --md-grey-600: #757575;
      --md-grey-700: #616161;
      --md-grey-800: #424242;
      --md-grey-900: #212121;
    
      --md-blue-grey-50: #eceff1;
      --md-blue-grey-100: #cfd8dc;
      --md-blue-grey-200: #b0bec5;
      --md-blue-grey-300: #90a4ae;
      --md-blue-grey-400: #78909c;
      --md-blue-grey-500: #607d8b;
      --md-blue-grey-600: #546e7a;
      --md-blue-grey-700: #455a64;
      --md-blue-grey-800: #37474f;
      --md-blue-grey-900: #263238;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) 2017, Jupyter Development Team.
    |
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-Spinner {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: var(--jp-layout-color0);
      outline: none;
    }
    
    .jp-SpinnerContent {
      font-size: 10px;
      margin: 50px auto;
      text-indent: -9999em;
      width: 3em;
      height: 3em;
      border-radius: 50%;
      background: var(--jp-brand-color3);
      background: linear-gradient(
        to right,
        #f37626 10%,
        rgba(255, 255, 255, 0) 42%
      );
      position: relative;
      animation: load3 1s infinite linear, fadeIn 1s;
    }
    
    .jp-SpinnerContent:before {
      width: 50%;
      height: 50%;
      background: #f37626;
      border-radius: 100% 0 0 0;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
    }
    
    .jp-SpinnerContent:after {
      background: var(--jp-layout-color0);
      width: 75%;
      height: 75%;
      border-radius: 50%;
      content: '';
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    
    @keyframes load3 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) 2014-2017, Jupyter Development Team.
    |
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    button.jp-mod-styled {
      font-size: var(--jp-ui-font-size1);
      color: var(--jp-ui-font-color0);
      border: none;
      box-sizing: border-box;
      text-align: center;
      line-height: 32px;
      height: 32px;
      padding: 0px 12px;
      letter-spacing: 0.8px;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    
    input.jp-mod-styled {
      background: var(--jp-input-background);
      height: 28px;
      box-sizing: border-box;
      border: var(--jp-border-width) solid var(--jp-border-color1);
      padding-left: 7px;
      padding-right: 7px;
      font-size: var(--jp-ui-font-size2);
      color: var(--jp-ui-font-color0);
      outline: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    
    input[type='checkbox'].jp-mod-styled {
      appearance: checkbox;
      -webkit-appearance: checkbox;
      -moz-appearance: checkbox;
      height: auto;
    }
    
    input.jp-mod-styled:focus {
      border: var(--jp-border-width) solid var(--md-blue-500);
      box-shadow: inset 0 0 4px var(--md-blue-300);
    }
    
    .jp-FileDialog-Checkbox {
      margin-top: 35px;
      display: flex;
      flex-direction: row;
      align-items: end;
      width: 100%;
    }
    
    .jp-FileDialog-Checkbox > label {
      flex: 1 1 auto;
    }
    
    .jp-select-wrapper {
      display: flex;
      position: relative;
      flex-direction: column;
      padding: 1px;
      background-color: var(--jp-layout-color1);
      height: 28px;
      box-sizing: border-box;
      margin-bottom: 12px;
    }
    
    .jp-select-wrapper.jp-mod-focused select.jp-mod-styled {
      border: var(--jp-border-width) solid var(--jp-input-active-border-color);
      box-shadow: var(--jp-input-box-shadow);
      background-color: var(--jp-input-active-background);
    }
    
    select.jp-mod-styled:hover {
      background-color: var(--jp-layout-color1);
      cursor: pointer;
      color: var(--jp-ui-font-color0);
      background-color: var(--jp-input-hover-background);
      box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.5);
    }
    
    select.jp-mod-styled {
      flex: 1 1 auto;
      height: 32px;
      width: 100%;
      font-size: var(--jp-ui-font-size2);
      background: var(--jp-input-background);
      color: var(--jp-ui-font-color0);
      padding: 0 25px 0 8px;
      border: var(--jp-border-width) solid var(--jp-input-border-color);
      border-radius: 0px;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) 2014-2016, Jupyter Development Team.
    |
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    :root {
      --jp-private-toolbar-height: calc(
        28px + var(--jp-border-width)
      ); /* leave 28px for content */
    }
    
    .jp-Toolbar {
      color: var(--jp-ui-font-color1);
      flex: 0 0 auto;
      display: flex;
      flex-direction: row;
      border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
      box-shadow: var(--jp-toolbar-box-shadow);
      background: var(--jp-toolbar-background);
      min-height: var(--jp-toolbar-micro-height);
      padding: 2px;
      z-index: 1;
      overflow-x: auto;
    }
    
    /* Toolbar items */
    
    .jp-Toolbar > .jp-Toolbar-item.jp-Toolbar-spacer {
      flex-grow: 1;
      flex-shrink: 1;
    }
    
    .jp-Toolbar-item.jp-Toolbar-kernelStatus {
      display: inline-block;
      width: 32px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 16px;
    }
    
    .jp-Toolbar > .jp-Toolbar-item {
      flex: 0 0 auto;
      display: flex;
      padding-left: 1px;
      padding-right: 1px;
      font-size: var(--jp-ui-font-size1);
      line-height: var(--jp-private-toolbar-height);
      height: 100%;
    }
    
    /* Toolbar buttons */
    
    /* This is the div we use to wrap the react component into a Widget */
    div.jp-ToolbarButton {
      color: transparent;
      border: none;
      box-sizing: border-box;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      padding: 0px;
      margin: 0px;
    }
    
    button.jp-ToolbarButtonComponent {
      background: var(--jp-layout-color1);
      border: none;
      box-sizing: border-box;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      padding: 0px 6px;
      margin: 0px;
      height: 24px;
      border-radius: var(--jp-border-radius);
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 14px;
      min-width: unset;
      min-height: unset;
    }
    
    button.jp-ToolbarButtonComponent:disabled {
      opacity: 0.4;
    }
    
    button.jp-ToolbarButtonComponent span {
      padding: 0px;
      flex: 0 0 auto;
    }
    
    button.jp-ToolbarButtonComponent .jp-ToolbarButtonComponent-label {
      font-size: var(--jp-ui-font-size1);
      line-height: 100%;
      padding-left: 2px;
      color: var(--jp-ui-font-color1);
    }
    
    #jp-main-dock-panel[data-mode='single-document']
      .jp-MainAreaWidget
      > .jp-Toolbar.jp-Toolbar-micro {
      padding: 0;
      min-height: 0;
    }
    
    #jp-main-dock-panel[data-mode='single-document']
      .jp-MainAreaWidget
      > .jp-Toolbar {
      border: none;
      box-shadow: none;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) 2014-2017, Jupyter Development Team.
    |
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Copyright (c) 2014-2017, PhosphorJS Contributors
    |
    | Distributed under the terms of the BSD 3-Clause License.
    |
    | The full license is in the file LICENSE, distributed with this software.
    |----------------------------------------------------------------------------*/
    
    
    /* <DEPRECATED> */ body.p-mod-override-cursor *, /* </DEPRECATED> */
    body.lm-mod-override-cursor * {
      cursor: inherit !important;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) 2014-2016, Jupyter Development Team.
    |
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-JSONEditor {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    
    .jp-JSONEditor-host {
      flex: 1 1 auto;
      border: var(--jp-border-width) solid var(--jp-input-border-color);
      border-radius: 0px;
      background: var(--jp-layout-color0);
      min-height: 50px;
      padding: 1px;
    }
    
    .jp-JSONEditor.jp-mod-error .jp-JSONEditor-host {
      border-color: red;
      outline-color: red;
    }
    
    .jp-JSONEditor-header {
      display: flex;
      flex: 1 0 auto;
      padding: 0 0 0 12px;
    }
    
    .jp-JSONEditor-header label {
      flex: 0 0 auto;
    }
    
    .jp-JSONEditor-commitButton {
      height: 16px;
      width: 16px;
      background-size: 18px;
      background-repeat: no-repeat;
      background-position: center;
    }
    
    .jp-JSONEditor-host.jp-mod-focused {
      background-color: var(--jp-input-active-background);
      border: 1px solid var(--jp-input-active-border-color);
      box-shadow: var(--jp-input-box-shadow);
    }
    
    .jp-Editor.jp-mod-dropTarget {
      border: var(--jp-border-width) solid var(--jp-input-active-border-color);
      box-shadow: var(--jp-input-box-shadow);
    }
    
    /* BASICS */
    
    .CodeMirror {
      /* Set height, width, borders, and global font properties here */
      font-family: monospace;
      height: 300px;
      color: black;
      direction: ltr;
    }
    
    /* PADDING */
    
    .CodeMirror-lines {
      padding: 4px 0; /* Vertical padding around content */
    }
    .CodeMirror pre.CodeMirror-line,
    .CodeMirror pre.CodeMirror-line-like {
      padding: 0 4px; /* Horizontal padding of content */
    }
    
    .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
      background-color: white; /* The little square between H and V scrollbars */
    }
    
    /* GUTTER */
    
    .CodeMirror-gutters {
      border-right: 1px solid #ddd;
      background-color: #f7f7f7;
      white-space: nowrap;
    }
    .CodeMirror-linenumbers {}
    .CodeMirror-linenumber {
      padding: 0 3px 0 5px;
      min-width: 20px;
      text-align: right;
      color: #999;
      white-space: nowrap;
    }
    
    .CodeMirror-guttermarker { color: black; }
    .CodeMirror-guttermarker-subtle { color: #999; }
    
    /* CURSOR */
    
    .CodeMirror-cursor {
      border-left: 1px solid black;
      border-right: none;
      width: 0;
    }
    /* Shown when moving in bi-directional text */
    .CodeMirror div.CodeMirror-secondarycursor {
      border-left: 1px solid silver;
    }
    .cm-fat-cursor .CodeMirror-cursor {
      width: auto;
      border: 0 !important;
      background: #7e7;
    }
    .cm-fat-cursor div.CodeMirror-cursors {
      z-index: 1;
    }
    .cm-fat-cursor-mark {
      background-color: rgba(20, 255, 20, 0.5);
      -webkit-animation: blink 1.06s steps(1) infinite;
      -moz-animation: blink 1.06s steps(1) infinite;
      animation: blink 1.06s steps(1) infinite;
    }
    .cm-animate-fat-cursor {
      width: auto;
      border: 0;
      -webkit-animation: blink 1.06s steps(1) infinite;
      -moz-animation: blink 1.06s steps(1) infinite;
      animation: blink 1.06s steps(1) infinite;
      background-color: #7e7;
    }
    @-moz-keyframes blink {
      0% {}
      50% { background-color: transparent; }
      100% {}
    }
    @-webkit-keyframes blink {
      0% {}
      50% { background-color: transparent; }
      100% {}
    }
    @keyframes blink {
      0% {}
      50% { background-color: transparent; }
      100% {}
    }
    
    /* Can style cursor different in overwrite (non-insert) mode */
    .CodeMirror-overwrite .CodeMirror-cursor {}
    
    .cm-tab { display: inline-block; text-decoration: inherit; }
    
    .CodeMirror-rulers {
      position: absolute;
      left: 0; right: 0; top: -50px; bottom: 0;
      overflow: hidden;
    }
    .CodeMirror-ruler {
      border-left: 1px solid #ccc;
      top: 0; bottom: 0;
      position: absolute;
    }
    
    /* DEFAULT THEME */
    
    .cm-s-default .cm-header {color: blue;}
    .cm-s-default .cm-quote {color: #090;}
    .cm-negative {color: #d44;}
    .cm-positive {color: #292;}
    .cm-header, .cm-strong {font-weight: bold;}
    .cm-em {font-style: italic;}
    .cm-link {text-decoration: underline;}
    .cm-strikethrough {text-decoration: line-through;}
    
    .cm-s-default .cm-keyword {color: #708;}
    .cm-s-default .cm-atom {color: #219;}
    .cm-s-default .cm-number {color: #164;}
    .cm-s-default .cm-def {color: #00f;}
    .cm-s-default .cm-variable,
    .cm-s-default .cm-punctuation,
    .cm-s-default .cm-property,
    .cm-s-default .cm-operator {}
    .cm-s-default .cm-variable-2 {color: #05a;}
    .cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}
    .cm-s-default .cm-comment {color: #a50;}
    .cm-s-default .cm-string {color: #a11;}
    .cm-s-default .cm-string-2 {color: #f50;}
    .cm-s-default .cm-meta {color: #555;}
    .cm-s-default .cm-qualifier {color: #555;}
    .cm-s-default .cm-builtin {color: #30a;}
    .cm-s-default .cm-bracket {color: #997;}
    .cm-s-default .cm-tag {color: #170;}
    .cm-s-default .cm-attribute {color: #00c;}
    .cm-s-default .cm-hr {color: #999;}
    .cm-s-default .cm-link {color: #00c;}
    
    .cm-s-default .cm-error {color: #f00;}
    .cm-invalidchar {color: #f00;}
    
    .CodeMirror-composing { border-bottom: 2px solid; }
    
    /* Default styles for common addons */
    
    div.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}
    div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}
    .CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }
    .CodeMirror-activeline-background {background: #e8f2ff;}
    
    /* STOP */
    
    /* The rest of this file contains styles related to the mechanics of
       the editor. You probably shouldn't touch them. */
    
    .CodeMirror {
      position: relative;
      overflow: hidden;
      background: white;
    }
    
    .CodeMirror-scroll {
      overflow: scroll !important; /* Things will break if this is overridden */
      /* 50px is the magic margin used to hide the element's real scrollbars */
      /* See overflow: hidden in .CodeMirror */
      margin-bottom: -50px; margin-right: -50px;
      padding-bottom: 50px;
      height: 100%;
      outline: none; /* Prevent dragging from highlighting the element */
      position: relative;
    }
    .CodeMirror-sizer {
      position: relative;
      border-right: 50px solid transparent;
    }
    
    /* The fake, visible scrollbars. Used to force redraw during scrolling
       before actual scrolling happens, thus preventing shaking and
       flickering artifacts. */
    .CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
      position: absolute;
      z-index: 6;
      display: none;
      outline: none;
    }
    .CodeMirror-vscrollbar {
      right: 0; top: 0;
      overflow-x: hidden;
      overflow-y: scroll;
    }
    .CodeMirror-hscrollbar {
      bottom: 0; left: 0;
      overflow-y: hidden;
      overflow-x: scroll;
    }
    .CodeMirror-scrollbar-filler {
      right: 0; bottom: 0;
    }
    .CodeMirror-gutter-filler {
      left: 0; bottom: 0;
    }
    
    .CodeMirror-gutters {
      position: absolute; left: 0; top: 0;
      min-height: 100%;
      z-index: 3;
    }
    .CodeMirror-gutter {
      white-space: normal;
      height: 100%;
      display: inline-block;
      vertical-align: top;
      margin-bottom: -50px;
    }
    .CodeMirror-gutter-wrapper {
      position: absolute;
      z-index: 4;
      background: none !important;
      border: none !important;
    }
    .CodeMirror-gutter-background {
      position: absolute;
      top: 0; bottom: 0;
      z-index: 4;
    }
    .CodeMirror-gutter-elt {
      position: absolute;
      cursor: default;
      z-index: 4;
    }
    .CodeMirror-gutter-wrapper ::selection { background-color: transparent }
    .CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }
    
    .CodeMirror-lines {
      cursor: text;
      min-height: 1px; /* prevents collapsing before first draw */
    }
    .CodeMirror pre.CodeMirror-line,
    .CodeMirror pre.CodeMirror-line-like {
      /* Reset some styles that the rest of the page might have set */
      -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
      border-width: 0;
      background: transparent;
      font-family: inherit;
      font-size: inherit;
      margin: 0;
      white-space: pre;
      word-wrap: normal;
      line-height: inherit;
      color: inherit;
      z-index: 2;
      position: relative;
      overflow: visible;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-variant-ligatures: contextual;
      font-variant-ligatures: contextual;
    }
    .CodeMirror-wrap pre.CodeMirror-line,
    .CodeMirror-wrap pre.CodeMirror-line-like {
      word-wrap: break-word;
      white-space: pre-wrap;
      word-break: normal;
    }
    
    .CodeMirror-linebackground {
      position: absolute;
      left: 0; right: 0; top: 0; bottom: 0;
      z-index: 0;
    }
    
    .CodeMirror-linewidget {
      position: relative;
      z-index: 2;
      padding: 0.1px; /* Force widget margins to stay inside of the container */
    }
    
    .CodeMirror-widget {}
    
    .CodeMirror-rtl pre { direction: rtl; }
    
    .CodeMirror-code {
      outline: none;
    }
    
    /* Force content-box sizing for the elements where we expect it */
    .CodeMirror-scroll,
    .CodeMirror-sizer,
    .CodeMirror-gutter,
    .CodeMirror-gutters,
    .CodeMirror-linenumber {
      -moz-box-sizing: content-box;
      box-sizing: content-box;
    }
    
    .CodeMirror-measure {
      position: absolute;
      width: 100%;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
    
    .CodeMirror-cursor {
      position: absolute;
      pointer-events: none;
    }
    .CodeMirror-measure pre { position: static; }
    
    div.CodeMirror-cursors {
      visibility: hidden;
      position: relative;
      z-index: 3;
    }
    div.CodeMirror-dragcursors {
      visibility: visible;
    }
    
    .CodeMirror-focused div.CodeMirror-cursors {
      visibility: visible;
    }
    
    .CodeMirror-selected { background: #d9d9d9; }
    .CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }
    .CodeMirror-crosshair { cursor: crosshair; }
    .CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }
    .CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }
    
    .cm-searching {
      background-color: #ffa;
      background-color: rgba(255, 255, 0, .4);
    }
    
    /* Used to force a border model for a node */
    .cm-force-border { padding-right: .1px; }
    
    @media print {
      /* Hide the cursor when printing */
      .CodeMirror div.CodeMirror-cursors {
        visibility: hidden;
      }
    }
    
    /* See issue #2901 */
    .cm-tab-wrap-hack:after { content: ''; }
    
    /* Help users use markselection to safely style text background */
    span.CodeMirror-selectedtext { background: none; }
    
    .CodeMirror-dialog {
      position: absolute;
      left: 0; right: 0;
      background: inherit;
      z-index: 15;
      padding: .1em .8em;
      overflow: hidden;
      color: inherit;
    }
    
    .CodeMirror-dialog-top {
      border-bottom: 1px solid #eee;
      top: 0;
    }
    
    .CodeMirror-dialog-bottom {
      border-top: 1px solid #eee;
      bottom: 0;
    }
    
    .CodeMirror-dialog input {
      border: none;
      outline: none;
      background: transparent;
      width: 20em;
      color: inherit;
      font-family: monospace;
    }
    
    .CodeMirror-dialog button {
      font-size: 70%;
    }
    
    .CodeMirror-foldmarker {
      color: blue;
      text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;
      font-family: arial;
      line-height: .3;
      cursor: pointer;
    }
    .CodeMirror-foldgutter {
      width: .7em;
    }
    .CodeMirror-foldgutter-open,
    .CodeMirror-foldgutter-folded {
      cursor: pointer;
    }
   
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .CodeMirror {
      line-height: var(--jp-code-line-height);
      font-size: var(--jp-code-font-size);
      font-family: var(--jp-code-font-family);
      border: 0;
      border-radius: 0;
      height: auto;
      /* Changed to auto to autogrow */
    }
    
    .CodeMirror pre {
      padding: 0 var(--jp-code-padding);
    }
    
    .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-dialog {
      background-color: var(--jp-layout-color0);
      color: var(--jp-content-font-color1);
    }
    
    /* This causes https://github.com/jupyter/jupyterlab/issues/522 */
    /* May not cause it not because we changed it! */
    .CodeMirror-lines {
      padding: var(--jp-code-padding) 0;
    }
    
    .CodeMirror-linenumber {
      padding: 0 8px;
    }
    
    .jp-CodeMirrorEditor {
      cursor: text;
    }
    
    .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
      border-left: var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color);
    }
    
    /* When zoomed out 67% and 33% on a screen of 1440 width x 900 height */
    @media screen and (min-width: 2138px) and (max-width: 4319px) {
      .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
        border-left: var(--jp-code-cursor-width1) solid
          var(--jp-editor-cursor-color);
      }
    }
    
    /* When zoomed out less than 33% */
    @media screen and (min-width: 4320px) {
      .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
        border-left: var(--jp-code-cursor-width2) solid
          var(--jp-editor-cursor-color);
      }
    }
    
    .CodeMirror.jp-mod-readOnly .CodeMirror-cursor {
      display: none;
    }
    
    .CodeMirror-gutters {
      border-right: 1px solid var(--jp-border-color2);
      background-color: var(--jp-layout-color0);
    }
    
    .jp-CollaboratorCursor {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: none;
      border-bottom: 3px solid;
      background-clip: content-box;
      margin-left: -5px;
      margin-right: -5px;
    }
    
    .CodeMirror-selectedtext.cm-searching {
      background-color: var(--jp-search-selected-match-background-color) !important;
      color: var(--jp-search-selected-match-color) !important;
    }
    
    .cm-searching {
      background-color: var(
        --jp-search-unselected-match-background-color
      ) !important;
      color: var(--jp-search-unselected-match-color) !important;
    }
    
    .CodeMirror-focused .CodeMirror-selected {
      background-color: var(--jp-editor-selected-focused-background);
    }
    
    .CodeMirror-selected {
      background-color: var(--jp-editor-selected-background);
    }
    
    .jp-CollaboratorCursor-hover {
      position: absolute;
      z-index: 1;
      transform: translateX(-50%);
      color: white;
      border-radius: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 1px;
      padding-bottom: 1px;
      text-align: center;
      font-size: var(--jp-ui-font-size1);
      white-space: nowrap;
    }
    
    .jp-CodeMirror-ruler {
      border-left: 1px dashed var(--jp-border-color2);
    }
    
    /**
     * Here is our jupyter theme for CodeMirror syntax highlighting
     * This is used in our marked.js syntax highlighting and CodeMirror itself
     * The string "jupyter" is set in ../codemirror/widget.DEFAULT_CODEMIRROR_THEME
     * This came from the classic notebook, which came form highlight.js/GitHub
     */
    
    /**
     * CodeMirror themes are handling the background/color in this way. This works
     * fine for CodeMirror editors outside the notebook, but the notebook styles
     * these things differently.
     */
    .CodeMirror.cm-s-jupyter {
      background: var(--jp-layout-color0);
      color: var(--jp-content-font-color1);
    }
    
    /* In the notebook, we want this styling to be handled by its container */
    .jp-CodeConsole .CodeMirror.cm-s-jupyter,
    .jp-Notebook .CodeMirror.cm-s-jupyter {
      background: transparent;
    }
    
    .cm-s-jupyter .CodeMirror-cursor {
      border-left: var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color);
    }
    .cm-s-jupyter span.cm-keyword {
      color: var(--jp-mirror-editor-keyword-color);
      font-weight: bold;
    }
    .cm-s-jupyter span.cm-atom {
      color: var(--jp-mirror-editor-atom-color);
    }
    .cm-s-jupyter span.cm-number {
      color: var(--jp-mirror-editor-number-color);
    }
    .cm-s-jupyter span.cm-def {
      color: var(--jp-mirror-editor-def-color);
    }
    .cm-s-jupyter span.cm-variable {
      color: var(--jp-mirror-editor-variable-color);
    }
    .cm-s-jupyter span.cm-variable-2 {
      color: var(--jp-mirror-editor-variable-2-color);
    }
    .cm-s-jupyter span.cm-variable-3 {
      color: var(--jp-mirror-editor-variable-3-color);
    }
    .cm-s-jupyter span.cm-punctuation {
      color: var(--jp-mirror-editor-punctuation-color);
    }
    .cm-s-jupyter span.cm-property {
      color: var(--jp-mirror-editor-property-color);
    }
    .cm-s-jupyter span.cm-operator {
      color: var(--jp-mirror-editor-operator-color);
      font-weight: bold;
    }
    .cm-s-jupyter span.cm-comment {
      color: var(--jp-mirror-editor-comment-color);
      font-style: italic;
    }
    .cm-s-jupyter span.cm-string {
      color: var(--jp-mirror-editor-string-color);
    }
    .cm-s-jupyter span.cm-string-2 {
      color: var(--jp-mirror-editor-string-2-color);
    }
    .cm-s-jupyter span.cm-meta {
      color: var(--jp-mirror-editor-meta-color);
    }
    .cm-s-jupyter span.cm-qualifier {
      color: var(--jp-mirror-editor-qualifier-color);
    }
    .cm-s-jupyter span.cm-builtin {
      color: var(--jp-mirror-editor-builtin-color);
    }
    .cm-s-jupyter span.cm-bracket {
      color: var(--jp-mirror-editor-bracket-color);
    }
    .cm-s-jupyter span.cm-tag {
      color: var(--jp-mirror-editor-tag-color);
    }
    .cm-s-jupyter span.cm-attribute {
      color: var(--jp-mirror-editor-attribute-color);
    }
    .cm-s-jupyter span.cm-header {
      color: var(--jp-mirror-editor-header-color);
    }
    .cm-s-jupyter span.cm-quote {
      color: var(--jp-mirror-editor-quote-color);
    }
    .cm-s-jupyter span.cm-link {
      color: var(--jp-mirror-editor-link-color);
    }
    .cm-s-jupyter span.cm-error {
      color: var(--jp-mirror-editor-error-color);
    }
    .cm-s-jupyter span.cm-hr {
      color: #999;
    }
    
    .cm-s-jupyter span.cm-tab {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=);
      background-position: right;
      background-repeat: no-repeat;
    }
    
    .cm-s-jupyter .CodeMirror-activeline-background,
    .cm-s-jupyter .CodeMirror-gutter {
      background-color: var(--jp-layout-color2);
    }
    
    /* Styles for shared cursors (remote cursor locations and selected ranges) */
    .jp-CodeMirrorEditor .remote-caret {
      position: relative;
      border-left: 2px solid black;
      margin-left: -1px;
      margin-right: -1px;
      box-sizing: border-box;
    }
    
    .jp-CodeMirrorEditor .remote-caret > div {
      white-space: nowrap;
      position: absolute;
      top: -1.15em;
      padding-bottom: 0.05em;
      left: -2px;
      font-size: 0.95em;
      background-color: rgb(250, 129, 0);
      font-family: var(--jp-ui-font-family);
      font-weight: bold;
      line-height: normal;
      user-select: none;
      color: white;
      padding-left: 2px;
      padding-right: 2px;
      z-index: 3;
      transition: opacity 0.3s ease-in-out;
    }
    
    .jp-CodeMirrorEditor .remote-caret.hide-name > div {
      transition-delay: 0.7s;
      opacity: 0;
    }
    
    .jp-CodeMirrorEditor .remote-caret:hover > div {
      opacity: 1;
      transition-delay: 0s;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | RenderedText
    |----------------------------------------------------------------------------*/
    
    :root {
      /* This is the padding value to fill the gaps between lines containing spans with background color. */
      --jp-private-code-span-padding: calc(
        (var(--jp-code-line-height) - 1) * var(--jp-code-font-size) / 2
      );
    }
    
    .jp-RenderedText {
      text-align: left;
      padding-left: var(--jp-code-padding);
      line-height: var(--jp-code-line-height);
      font-family: var(--jp-code-font-family);
    }
    
    .jp-RenderedText pre,
    .jp-RenderedJavaScript pre,
    .jp-RenderedHTMLCommon pre {
      color: var(--jp-content-font-color1);
      font-size: var(--jp-code-font-size);
      border: none;
      margin: 0px;
      padding: 0px;
    }
    
    .jp-RenderedText pre a:link {
      text-decoration: none;
      color: var(--jp-content-link-color);
    }
    .jp-RenderedText pre a:hover {
      text-decoration: underline;
      color: var(--jp-content-link-color);
    }
    .jp-RenderedText pre a:visited {
      text-decoration: none;
      color: var(--jp-content-link-color);
    }
    
    /* console foregrounds and backgrounds */
    .jp-RenderedText pre .ansi-black-fg {
      color: #3e424d;
    }
    .jp-RenderedText pre .ansi-red-fg {
      color: #e75c58;
    }
    .jp-RenderedText pre .ansi-green-fg {
      color: #00a250;
    }
    .jp-RenderedText pre .ansi-yellow-fg {
      color: #ddb62b;
    }
    .jp-RenderedText pre .ansi-blue-fg {
      color: #208ffb;
    }
    .jp-RenderedText pre .ansi-magenta-fg {
      color: #d160c4;
    }
    .jp-RenderedText pre .ansi-cyan-fg {
      color: #60c6c8;
    }
    .jp-RenderedText pre .ansi-white-fg {
      color: #c5c1b4;
    }
    
    .jp-RenderedText pre .ansi-black-bg {
      background-color: #3e424d;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-red-bg {
      background-color: #e75c58;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-green-bg {
      background-color: #00a250;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-yellow-bg {
      background-color: #ddb62b;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-blue-bg {
      background-color: #208ffb;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-magenta-bg {
      background-color: #d160c4;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-cyan-bg {
      background-color: #60c6c8;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-white-bg {
      background-color: #c5c1b4;
      padding: var(--jp-private-code-span-padding) 0;
    }
    
    .jp-RenderedText pre .ansi-black-intense-fg {
      color: #282c36;
    }
    .jp-RenderedText pre .ansi-red-intense-fg {
      color: #b22b31;
    }
    .jp-RenderedText pre .ansi-green-intense-fg {
      color: #007427;
    }
    .jp-RenderedText pre .ansi-yellow-intense-fg {
      color: #b27d12;
    }
    .jp-RenderedText pre .ansi-blue-intense-fg {
      color: #0065ca;
    }
    .jp-RenderedText pre .ansi-magenta-intense-fg {
      color: #a03196;
    }
    .jp-RenderedText pre .ansi-cyan-intense-fg {
      color: #258f8f;
    }
    .jp-RenderedText pre .ansi-white-intense-fg {
      color: #a1a6b2;
    }
    
    .jp-RenderedText pre .ansi-black-intense-bg {
      background-color: #282c36;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-red-intense-bg {
      background-color: #b22b31;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-green-intense-bg {
      background-color: #007427;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-yellow-intense-bg {
      background-color: #b27d12;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-blue-intense-bg {
      background-color: #0065ca;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-magenta-intense-bg {
      background-color: #a03196;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-cyan-intense-bg {
      background-color: #258f8f;
      padding: var(--jp-private-code-span-padding) 0;
    }
    .jp-RenderedText pre .ansi-white-intense-bg {
      background-color: #a1a6b2;
      padding: var(--jp-private-code-span-padding) 0;
    }
    
    .jp-RenderedText pre .ansi-default-inverse-fg {
      color: var(--jp-ui-inverse-font-color0);
    }
    .jp-RenderedText pre .ansi-default-inverse-bg {
      background-color: var(--jp-inverse-layout-color0);
      padding: var(--jp-private-code-span-padding) 0;
    }
    
    .jp-RenderedText pre .ansi-bold {
      font-weight: bold;
    }
    .jp-RenderedText pre .ansi-underline {
      text-decoration: underline;
    }
    
    .jp-RenderedText[data-mime-type='application/vnd.jupyter.stderr'] {
      background: var(--jp-rendermime-error-background);
      padding-top: var(--jp-code-padding);
    }
    
    /*-----------------------------------------------------------------------------
    | RenderedLatex
    |----------------------------------------------------------------------------*/
    
    .jp-RenderedLatex {
      color: var(--jp-content-font-color1);
      font-size: var(--jp-content-font-size1);
      line-height: var(--jp-content-line-height);
    }
    
    /* Left-justify outputs.*/
    .jp-OutputArea-output.jp-RenderedLatex {
      padding: var(--jp-code-padding);
      text-align: left;
    }
    
    /*-----------------------------------------------------------------------------
    | RenderedHTML
    |----------------------------------------------------------------------------*/
    
    .jp-RenderedHTMLCommon {
      color: var(--jp-content-font-color1);
      font-family: var(--jp-content-font-family);
      font-size: var(--jp-content-font-size1);
      line-height: var(--jp-content-line-height);
      /* Give a bit more R padding on Markdown text to keep line lengths reasonable */
      padding-right: 20px;
    }
    
    .jp-RenderedHTMLCommon em {
      font-style: italic;
    }
    
    .jp-RenderedHTMLCommon strong {
      font-weight: bold;
    }
    
    .jp-RenderedHTMLCommon u {
      text-decoration: underline;
    }
    
    .jp-RenderedHTMLCommon a:link {
      text-decoration: none;
      color: var(--jp-content-link-color);
    }
    
    .jp-RenderedHTMLCommon a:hover {
      text-decoration: underline;
      color: var(--jp-content-link-color);
    }
    
    .jp-RenderedHTMLCommon a:visited {
      text-decoration: none;
      color: var(--jp-content-link-color);
    }
    
    /* Headings */
    
    .jp-RenderedHTMLCommon h1,
    .jp-RenderedHTMLCommon h2,
    .jp-RenderedHTMLCommon h3,
    .jp-RenderedHTMLCommon h4,
    .jp-RenderedHTMLCommon h5,
    .jp-RenderedHTMLCommon h6 {
      line-height: var(--jp-content-heading-line-height);
      font-weight: var(--jp-content-heading-font-weight);
      font-style: normal;
      margin: var(--jp-content-heading-margin-top) 0
        var(--jp-content-heading-margin-bottom) 0;
    }
    
    .jp-RenderedHTMLCommon h1:first-child,
    .jp-RenderedHTMLCommon h2:first-child,
    .jp-RenderedHTMLCommon h3:first-child,
    .jp-RenderedHTMLCommon h4:first-child,
    .jp-RenderedHTMLCommon h5:first-child,
    .jp-RenderedHTMLCommon h6:first-child {
      margin-top: calc(0.5 * var(--jp-content-heading-margin-top));
    }
    
    .jp-RenderedHTMLCommon h1:last-child,
    .jp-RenderedHTMLCommon h2:last-child,
    .jp-RenderedHTMLCommon h3:last-child,
    .jp-RenderedHTMLCommon h4:last-child,
    .jp-RenderedHTMLCommon h5:last-child,
    .jp-RenderedHTMLCommon h6:last-child {
      margin-bottom: calc(0.5 * var(--jp-content-heading-margin-bottom));
    }
    
    .jp-RenderedHTMLCommon h1 {
      font-size: var(--jp-content-font-size5);
    }
    
    .jp-RenderedHTMLCommon h2 {
      font-size: var(--jp-content-font-size4);
    }
    
    .jp-RenderedHTMLCommon h3 {
      font-size: var(--jp-content-font-size3);
    }
    
    .jp-RenderedHTMLCommon h4 {
      font-size: var(--jp-content-font-size2);
    }
    
    .jp-RenderedHTMLCommon h5 {
      font-size: var(--jp-content-font-size1);
    }
    
    .jp-RenderedHTMLCommon h6 {
      font-size: var(--jp-content-font-size0);
    }
    
    /* Lists */
    
    .jp-RenderedHTMLCommon ul:not(.list-inline),
    .jp-RenderedHTMLCommon ol:not(.list-inline) {
      padding-left: 2em;
    }
    
    .jp-RenderedHTMLCommon ul {
      list-style: disc;
    }
    
    .jp-RenderedHTMLCommon ul ul {
      list-style: square;
    }
    
    .jp-RenderedHTMLCommon ul ul ul {
      list-style: circle;
    }
    
    .jp-RenderedHTMLCommon ol {
      list-style: decimal;
    }
    
    .jp-RenderedHTMLCommon ol ol {
      list-style: upper-alpha;
    }
    
    .jp-RenderedHTMLCommon ol ol ol {
      list-style: lower-alpha;
    }
    
    .jp-RenderedHTMLCommon ol ol ol ol {
      list-style: lower-roman;
    }
    
    .jp-RenderedHTMLCommon ol ol ol ol ol {
      list-style: decimal;
    }
    
    .jp-RenderedHTMLCommon ol,
    .jp-RenderedHTMLCommon ul {
      margin-bottom: 1em;
    }
    
    .jp-RenderedHTMLCommon ul ul,
    .jp-RenderedHTMLCommon ul ol,
    .jp-RenderedHTMLCommon ol ul,
    .jp-RenderedHTMLCommon ol ol {
      margin-bottom: 0em;
    }
    
    .jp-RenderedHTMLCommon hr {
      color: var(--jp-border-color2);
      background-color: var(--jp-border-color1);
      margin-top: 1em;
      margin-bottom: 1em;
    }
    
    .jp-RenderedHTMLCommon > pre {
      margin: 1.5em 2em;
    }
    
    .jp-RenderedHTMLCommon pre,
    .jp-RenderedHTMLCommon code {
      border: 0;
      background-color: var(--jp-layout-color0);
      color: var(--jp-content-font-color1);
      font-family: var(--jp-code-font-family);
      font-size: inherit;
      line-height: var(--jp-code-line-height);
      padding: 0;
      white-space: pre-wrap;
    }
    
    .jp-RenderedHTMLCommon :not(pre) > code {
      background-color: var(--jp-layout-color2);
      padding: 1px 5px;
    }
    
    /* Tables */
    
    .jp-RenderedHTMLCommon table {
      border-collapse: collapse;
      border-spacing: 0;
      border: none;
      color: var(--jp-ui-font-color1);
      font-size: 12px;
      table-layout: fixed;
      margin-left: auto;
      margin-right: auto;
    }
    
    .jp-RenderedHTMLCommon thead {
      border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
      vertical-align: bottom;
    }
    
    .jp-RenderedHTMLCommon td,
    .jp-RenderedHTMLCommon th,
    .jp-RenderedHTMLCommon tr {
      vertical-align: middle;
      padding: 0.5em 0.5em;
      line-height: normal;
      white-space: normal;
      max-width: none;
      border: none;
    }
    
    .jp-RenderedMarkdown.jp-RenderedHTMLCommon td,
    .jp-RenderedMarkdown.jp-RenderedHTMLCommon th {
      max-width: none;
    }
    
    :not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon td,
    :not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon th,
    :not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon tr {
      text-align: right;
    }
    
    .jp-RenderedHTMLCommon th {
      font-weight: bold;
    }
    
    .jp-RenderedHTMLCommon tbody tr:nth-child(odd) {
      background: var(--jp-layout-color0);
    }
    
    .jp-RenderedHTMLCommon tbody tr:nth-child(even) {
      background: var(--jp-rendermime-table-row-background);
    }
    
    .jp-RenderedHTMLCommon tbody tr:hover {
      background: var(--jp-rendermime-table-row-hover-background);
    }
    
    .jp-RenderedHTMLCommon table {
      margin-bottom: 1em;
    }
    
    .jp-RenderedHTMLCommon p {
      text-align: left;
      margin: 0px;
    }
    
    .jp-RenderedHTMLCommon p {
      margin-bottom: 1em;
    }
    
    .jp-RenderedHTMLCommon img {
      -moz-force-broken-image-icon: 1;
    }
    
    /* Restrict to direct children as other images could be nested in other content. */
    .jp-RenderedHTMLCommon > img {
      display: block;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 1em;
    }
    
    /* Change color behind transparent images if they need it... */
    [data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-light-background {
      background-color: var(--jp-inverse-layout-color1);
    }
    [data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-dark-background {
      background-color: var(--jp-inverse-layout-color1);
    }
    /* ...or leave it untouched if they don't */
    [data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-dark-background {
    }
    [data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-light-background {
    }
    
    .jp-RenderedHTMLCommon img,
    .jp-RenderedImage img,
    .jp-RenderedHTMLCommon svg,
    .jp-RenderedSVG svg {
      max-width: 100%;
      height: auto;
    }
    
    .jp-RenderedHTMLCommon img.jp-mod-unconfined,
    .jp-RenderedImage img.jp-mod-unconfined,
    .jp-RenderedHTMLCommon svg.jp-mod-unconfined,
    .jp-RenderedSVG svg.jp-mod-unconfined {
      max-width: none;
    }
    
    .jp-RenderedHTMLCommon .alert {
      padding: var(--jp-notebook-padding);
      border: var(--jp-border-width) solid transparent;
      border-radius: var(--jp-border-radius);
      margin-bottom: 1em;
    }
    
    .jp-RenderedHTMLCommon .alert-info {
      color: var(--jp-info-color0);
      background-color: var(--jp-info-color3);
      border-color: var(--jp-info-color2);
    }
    .jp-RenderedHTMLCommon .alert-info hr {
      border-color: var(--jp-info-color3);
    }
    .jp-RenderedHTMLCommon .alert-info > p:last-child,
    .jp-RenderedHTMLCommon .alert-info > ul:last-child {
      margin-bottom: 0;
    }
    
    .jp-RenderedHTMLCommon .alert-warning {
      color: var(--jp-warn-color0);
      background-color: var(--jp-warn-color3);
      border-color: var(--jp-warn-color2);
    }
    .jp-RenderedHTMLCommon .alert-warning hr {
      border-color: var(--jp-warn-color3);
    }
    .jp-RenderedHTMLCommon .alert-warning > p:last-child,
    .jp-RenderedHTMLCommon .alert-warning > ul:last-child {
      margin-bottom: 0;
    }
    
    .jp-RenderedHTMLCommon .alert-success {
      color: var(--jp-success-color0);
      background-color: var(--jp-success-color3);
      border-color: var(--jp-success-color2);
    }
    .jp-RenderedHTMLCommon .alert-success hr {
      border-color: var(--jp-success-color3);
    }
    .jp-RenderedHTMLCommon .alert-success > p:last-child,
    .jp-RenderedHTMLCommon .alert-success > ul:last-child {
      margin-bottom: 0;
    }
    
    .jp-RenderedHTMLCommon .alert-danger {
      color: var(--jp-error-color0);
      background-color: var(--jp-error-color3);
      border-color: var(--jp-error-color2);
    }
    .jp-RenderedHTMLCommon .alert-danger hr {
      border-color: var(--jp-error-color3);
    }
    .jp-RenderedHTMLCommon .alert-danger > p:last-child,
    .jp-RenderedHTMLCommon .alert-danger > ul:last-child {
      margin-bottom: 0;
    }
    
    .jp-RenderedHTMLCommon blockquote {
      margin: 1em 2em;
      padding: 0 1em;
      border-left: 5px solid var(--jp-border-color2);
    }
    
    a.jp-InternalAnchorLink {
      visibility: hidden;
      margin-left: 8px;
      color: var(--md-blue-800);
    }
    
    h1:hover .jp-InternalAnchorLink,
    h2:hover .jp-InternalAnchorLink,
    h3:hover .jp-InternalAnchorLink,
    h4:hover .jp-InternalAnchorLink,
    h5:hover .jp-InternalAnchorLink,
    h6:hover .jp-InternalAnchorLink {
      visibility: visible;
    }
    
    .jp-RenderedHTMLCommon kbd {
      background-color: var(--jp-rendermime-table-row-background);
      border: 1px solid var(--jp-border-color0);
      border-bottom-color: var(--jp-border-color2);
      border-radius: 3px;
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
      display: inline-block;
      font-size: 0.8em;
      line-height: 1em;
      padding: 0.2em 0.5em;
    }
    
    /* Most direct children of .jp-RenderedHTMLCommon have a margin-bottom of 1.0.
     * At the bottom of cells this is a bit too much as there is also spacing
     * between cells. Going all the way to 0 gets too tight between markdown and
     * code cells.
     */
    .jp-RenderedHTMLCommon > *:last-child {
      margin-bottom: 0.5em;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-MimeDocument {
      outline: none;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Variables
    |----------------------------------------------------------------------------*/
    
    :root {
      --jp-private-filebrowser-button-height: 28px;
      --jp-private-filebrowser-button-width: 48px;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-FileBrowser {
      display: flex;
      flex-direction: column;
      color: var(--jp-ui-font-color1);
      background: var(--jp-layout-color1);
      /* This is needed so that all font sizing of children done in ems is
       * relative to this base size */
      font-size: var(--jp-ui-font-size1);
    }
    
    .jp-FileBrowser-toolbar.jp-Toolbar {
      border-bottom: none;
      height: auto;
      margin: var(--jp-toolbar-header-margin);
      box-shadow: none;
    }
    
    .jp-BreadCrumbs {
      flex: 0 0 auto;
      margin: 8px 12px 8px 12px;
    }
    
    .jp-BreadCrumbs-item {
      margin: 0px 2px;
      padding: 0px 2px;
      border-radius: var(--jp-border-radius);
      cursor: pointer;
    }
    
    .jp-BreadCrumbs-item:hover {
      background-color: var(--jp-layout-color2);
    }
    
    .jp-BreadCrumbs-item:first-child {
      margin-left: 0px;
    }
    
    .jp-BreadCrumbs-item.jp-mod-dropTarget {
      background-color: var(--jp-brand-color2);
      opacity: 0.7;
    }
    
    /*-----------------------------------------------------------------------------
    | Buttons
    |----------------------------------------------------------------------------*/
    
    .jp-FileBrowser-toolbar.jp-Toolbar {
      padding: 0px;
      margin: 8px 12px 0px 12px;
    }
    
    .jp-FileBrowser-toolbar.jp-Toolbar {
      justify-content: flex-start;
    }
    
    .jp-FileBrowser-toolbar.jp-Toolbar .jp-Toolbar-item {
      flex: 0 0 auto;
      padding-left: 0px;
      padding-right: 2px;
    }
    
    .jp-FileBrowser-toolbar.jp-Toolbar .jp-ToolbarButtonComponent {
      width: 40px;
    }
    
    .jp-FileBrowser-toolbar.jp-Toolbar
      .jp-Toolbar-item:first-child
      .jp-ToolbarButtonComponent {
      width: 72px;
      background: var(--jp-brand-color1);
    }
    
    .jp-FileBrowser-toolbar.jp-Toolbar
      .jp-Toolbar-item:first-child
      .jp-ToolbarButtonComponent:focus-visible {
      background-color: var(--jp-brand-color0);
    }
    
    .jp-FileBrowser-toolbar.jp-Toolbar
      .jp-Toolbar-item:first-child
      .jp-ToolbarButtonComponent
      .jp-icon3 {
      fill: white;
    }
    
    /*-----------------------------------------------------------------------------
    | Other styles
    |----------------------------------------------------------------------------*/
    
    .jp-FileDialog.jp-mod-conflict input {
      color: var(--jp-error-color1);
    }
    
    .jp-FileDialog .jp-new-name-title {
      margin-top: 12px;
    }
    
    .jp-LastModified-hidden {
      display: none;
    }
    
    .jp-FileBrowser-filterBox {
      padding: 0px;
      flex: 0 0 auto;
      margin: 8px 12px 0px 12px;
    }
    
    /*-----------------------------------------------------------------------------
    | DirListing
    |----------------------------------------------------------------------------*/
    
    .jp-DirListing {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      outline: 0;
    }
    
    .jp-DirListing:focus-visible {
      border: 1px solid var(--jp-brand-color1);
    }
    
    .jp-DirListing-header {
      flex: 0 0 auto;
      display: flex;
      flex-direction: row;
      overflow: hidden;
      border-top: var(--jp-border-width) solid var(--jp-border-color2);
      border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
      box-shadow: var(--jp-toolbar-box-shadow);
      z-index: 2;
    }
    
    .jp-DirListing-headerItem {
      padding: 4px 12px 2px 12px;
      font-weight: 500;
    }
    
    .jp-DirListing-headerItem:hover {
      background: var(--jp-layout-color2);
    }
    
    .jp-DirListing-headerItem.jp-id-name {
      flex: 1 0 84px;
    }
    
    .jp-DirListing-headerItem.jp-id-modified {
      flex: 0 0 112px;
      border-left: var(--jp-border-width) solid var(--jp-border-color2);
      text-align: right;
    }
    
    .jp-id-narrow {
      display: none;
      flex: 0 0 5px;
      padding: 4px 4px;
      border-left: var(--jp-border-width) solid var(--jp-border-color2);
      text-align: right;
      color: var(--jp-border-color2);
    }
    
    .jp-DirListing-narrow .jp-id-narrow {
      display: block;
    }
    
    .jp-DirListing-narrow .jp-id-modified,
    .jp-DirListing-narrow .jp-DirListing-itemModified {
      display: none;
    }
    
    .jp-DirListing-headerItem.jp-mod-selected {
      font-weight: 600;
    }
    
    /* increase specificity to override bundled default */
    .jp-DirListing-content {
      flex: 1 1 auto;
      margin: 0;
      padding: 0;
      list-style-type: none;
      overflow: auto;
      background-color: var(--jp-layout-color1);
    }
    
    .jp-DirListing-content mark {
      color: var(--jp-ui-font-color0);
      background-color: transparent;
      font-weight: bold;
    }
    
    .jp-DirListing-content .jp-DirListing-item.jp-mod-selected mark {
      color: var(--jp-ui-inverse-font-color0);
    }
    
    /* Style the directory listing content when a user drops a file to upload */
    .jp-DirListing.jp-mod-native-drop .jp-DirListing-content {
      outline: 5px dashed rgba(128, 128, 128, 0.5);
      outline-offset: -10px;
      cursor: copy;
    }
    
    .jp-DirListing-item {
      display: flex;
      flex-direction: row;
      padding: 4px 12px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    .jp-DirListing-item[data-is-dot] {
      opacity: 75%;
    }
    
    .jp-DirListing-item.jp-mod-selected {
      color: var(--jp-ui-inverse-font-color1);
      background: var(--jp-brand-color1);
    }
    
    .jp-DirListing-item.jp-mod-dropTarget {
      background: var(--jp-brand-color3);
    }
    
    .jp-DirListing-item:hover:not(.jp-mod-selected) {
      background: var(--jp-layout-color2);
    }
    
    .jp-DirListing-itemIcon {
      flex: 0 0 20px;
      margin-right: 4px;
    }
    
    .jp-DirListing-itemText {
      flex: 1 0 64px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
    }
    
    .jp-DirListing-itemModified {
      flex: 0 0 125px;
      text-align: right;
    }
    
    .jp-DirListing-editor {
      flex: 1 0 64px;
      outline: none;
      border: none;
    }
    
    .jp-DirListing-item.jp-mod-running .jp-DirListing-itemIcon:before {
      color: var(--jp-success-color1);
      content: 25CF;
      font-size: 8px;
      position: absolute;
      left: -8px;
    }
    
    .jp-DirListing-item.jp-mod-running.jp-mod-selected
      .jp-DirListing-itemIcon:before {
      color: var(--jp-ui-inverse-font-color1);
    }
    
    .jp-DirListing-item.lm-mod-drag-image,
    .jp-DirListing-item.jp-mod-selected.lm-mod-drag-image {
      font-size: var(--jp-ui-font-size1);
      padding-left: 4px;
      margin-left: 4px;
      width: 160px;
      background-color: var(--jp-ui-inverse-font-color2);
      box-shadow: var(--jp-elevation-z2);
      border-radius: 0px;
      color: var(--jp-ui-font-color1);
      transform: translateX(-40%) translateY(-58%);
    }
    
    .jp-DirListing-deadSpace {
      flex: 1 1 auto;
      margin: 0;
      padding: 0;
      list-style-type: none;
      overflow: auto;
      background-color: var(--jp-layout-color1);
    }
    
    .jp-Document {
      min-width: 120px;
      min-height: 120px;
      outline: none;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Private CSS variables
    |----------------------------------------------------------------------------*/
    
    :root {
    }
    
    /*-----------------------------------------------------------------------------
    | Main OutputArea
    | OutputArea has a list of Outputs
    |----------------------------------------------------------------------------*/
    
    .jp-OutputArea {
      overflow-y: auto;
    }
    
    .jp-OutputArea-child {
      display: flex;
      flex-direction: row;
    }
    
    body[data-format='mobile'] .jp-OutputArea-child {
      flex-direction: column;
    }
    
    .jp-OutputPrompt {
      flex: 0 0 var(--jp-cell-prompt-width);
      color: var(--jp-cell-outprompt-font-color);
      font-family: var(--jp-cell-prompt-font-family);
      padding: var(--jp-code-padding);
      letter-spacing: var(--jp-cell-prompt-letter-spacing);
      line-height: var(--jp-code-line-height);
      font-size: var(--jp-code-font-size);
      border: var(--jp-border-width) solid transparent;
      opacity: var(--jp-cell-prompt-opacity);
      /* Right align prompt text, don't wrap to handle large prompt numbers */
      text-align: right;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /* Disable text selection */
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    body[data-format='mobile'] .jp-OutputPrompt {
      flex: 0 0 auto;
      text-align: left;
    }
    
    .jp-OutputArea-output {
      height: auto;
      overflow: auto;
      user-select: text;
      -moz-user-select: text;
      -webkit-user-select: text;
      -ms-user-select: text;
    }
    
    .jp-OutputArea-child .jp-OutputArea-output {
      flex-grow: 1;
      flex-shrink: 1;
    }
    
    body[data-format='mobile'] .jp-OutputArea-child .jp-OutputArea-output {
      margin-left: var(--jp-notebook-padding);
    }
    
    /**
     * Isolated output.
     */
    .jp-OutputArea-output.jp-mod-isolated {
      width: 100%;
      display: block;
    }
    

    
    body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated {
      position: relative;
    }
    
    body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
    }
    
    /* pre */
    
    .jp-OutputArea-output pre {
      border: none;
      margin: 0px;
      padding: 0px;
      overflow-x: auto;
      overflow-y: auto;
      word-break: break-all;
      word-wrap: break-word;
      white-space: pre-wrap;
    }
    
    /* tables */
    
    .jp-OutputArea-output.jp-RenderedHTMLCommon table {
      margin-left: 0;
      margin-right: 0;
    }
    
    /* description lists */
    
    .jp-OutputArea-output dl,
    .jp-OutputArea-output dt,
    .jp-OutputArea-output dd {
      display: block;
    }
    
    .jp-OutputArea-output dl {
      width: 100%;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }
    
    .jp-OutputArea-output dt {
      font-weight: bold;
      float: left;
      width: 20%;
      padding: 0;
      margin: 0;
    }
    
    .jp-OutputArea-output dd {
      float: left;
      width: 80%;
      padding: 0;
      margin: 0;
    }
    
    /* Hide the gutter in case of
     *  - nested output areas (e.g. in the case of output widgets)
     *  - mirrored output areas
     */
    .jp-OutputArea .jp-OutputArea .jp-OutputArea-prompt {
      display: none;
    }
    
    /*-----------------------------------------------------------------------------
    | executeResult is added to any Output-result for the display of the object
    | returned by a cell
    |----------------------------------------------------------------------------*/
    
    .jp-OutputArea-output.jp-OutputArea-executeResult {
      margin-left: 0px;
      flex: 1 1 auto;
    }
    
    /* Text output with the Out[] prompt needs a top padding to match the
     * alignment of the Out[] prompt itself.
     */
    .jp-OutputArea-executeResult .jp-RenderedText.jp-OutputArea-output {
      padding-top: var(--jp-code-padding);
      border-top: var(--jp-border-width) solid transparent;
    }
    
    /*-----------------------------------------------------------------------------
    | The Stdin output
    |----------------------------------------------------------------------------*/
    
    .jp-OutputArea-stdin {
      line-height: var(--jp-code-line-height);
      padding-top: var(--jp-code-padding);
      display: flex;
    }
    
    .jp-Stdin-prompt {
      color: var(--jp-content-font-color0);
      padding-right: var(--jp-code-padding);
      vertical-align: baseline;
      flex: 0 0 auto;
    }
    
    .jp-Stdin-input {
      font-family: var(--jp-code-font-family);
      font-size: inherit;
      color: inherit;
      background-color: inherit;
      width: 42%;
      min-width: 200px;
      /* make sure input baseline aligns with prompt */
      vertical-align: baseline;
      /* padding + margin = 0.5em between prompt and cursor */
      padding: 0em 0.25em;
      margin: 0em 0.25em;
      flex: 0 0 70%;
    }
    
    .jp-Stdin-input:focus {
      box-shadow: none;
    }
    
    /*-----------------------------------------------------------------------------
    | Output Area View
    |----------------------------------------------------------------------------*/
    
    .jp-LinkedOutputView .jp-OutputArea {
      height: 100%;
      display: block;
    }
    
    .jp-LinkedOutputView .jp-OutputArea-output:only-child {
      height: 100%;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    .jp-Collapser {
      flex: 0 0 var(--jp-cell-collapser-width);
      padding: 0px;
      margin: 0px;
      border: none;
      outline: none;
      background: transparent;
      border-radius: var(--jp-border-radius);
      opacity: 1;
    }
    
    .jp-Collapser-child {
      display: block;
      width: 100%;
      box-sizing: border-box;
      /* height: 100% doesn't work because the height of its parent is computed from content */
      position: absolute;
      top: 0px;
      bottom: 0px;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Header/Footer
    |----------------------------------------------------------------------------*/
    
    /* Hidden by zero height by default */
    .jp-CellHeader,
    .jp-CellFooter {
      height: 0px;
      width: 100%;
      padding: 0px;
      margin: 0px;
      border: none;
      outline: none;
      background: transparent;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Input
    |----------------------------------------------------------------------------*/
    
    /* All input areas */
    .jp-InputArea {
      display: flex;
      flex-direction: row;
      overflow: hidden;
    }
    
    body[data-format='mobile'] .jp-InputArea {
      flex-direction: column;
    }
    
    .jp-InputArea-editor {
      flex: 1 1 auto;
      overflow: hidden;
    }
    
    .jp-InputArea-editor {
      /* This is the non-active, default styling */
      border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
      border-radius: 0px;
      background: var(--jp-cell-editor-background);
    }
    
    body[data-format='mobile'] .jp-InputArea-editor {
      margin-left: var(--jp-notebook-padding);
    }
    
    .jp-InputPrompt {
      flex: 0 0 var(--jp-cell-prompt-width);
      color: var(--jp-cell-inprompt-font-color);
      font-family: var(--jp-cell-prompt-font-family);
      padding: var(--jp-code-padding);
      letter-spacing: var(--jp-cell-prompt-letter-spacing);
      opacity: var(--jp-cell-prompt-opacity);
      line-height: var(--jp-code-line-height);
      font-size: var(--jp-code-font-size);
      border: var(--jp-border-width) solid transparent;
      opacity: var(--jp-cell-prompt-opacity);
      /* Right align prompt text, don't wrap to handle large prompt numbers */
      text-align: right;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /* Disable text selection */
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    body[data-format='mobile'] .jp-InputPrompt {
      flex: 0 0 auto;
      text-align: left;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Placeholder
    |----------------------------------------------------------------------------*/
    
    .jp-Placeholder {
      display: flex;
      flex-direction: row;
      flex: 1 1 auto;
    }
    
    .jp-Placeholder-prompt {
      box-sizing: border-box;
    }
    
    .jp-Placeholder-content {
      flex: 1 1 auto;
      border: none;
      background: transparent;
      height: 20px;
      box-sizing: border-box;
    }
    
    .jp-Placeholder-content .jp-MoreHorizIcon {
      width: 32px;
      height: 16px;
      border: 1px solid transparent;
      border-radius: var(--jp-border-radius);
    }
    
    .jp-Placeholder-content .jp-MoreHorizIcon:hover {
      border: 1px solid var(--jp-border-color1);
      box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
      background-color: var(--jp-layout-color0);
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Private CSS variables
    |----------------------------------------------------------------------------*/
    
    :root {
      --jp-private-cell-scrolling-output-offset: 5px;
    }
    
    /*-----------------------------------------------------------------------------
    | Cell
    |----------------------------------------------------------------------------*/
    
    .jp-Cell {
      padding: var(--jp-cell-padding);
      margin: 0px;
      border: none;
      outline: none;
      background: transparent;
    }
    
    /*-----------------------------------------------------------------------------
    | Common input/output
    |----------------------------------------------------------------------------*/
    
    .jp-Cell-inputWrapper,
    .jp-Cell-outputWrapper {
      display: flex;
      flex-direction: row;
      padding: 0px;
      margin: 0px;
      /* Added to reveal the box-shadow on the input and output collapsers. */
      overflow: visible;
    }
    
    /* Only input/output areas inside cells */
    .jp-Cell-inputArea,
    .jp-Cell-outputArea {
      flex: 1 1 auto;
    }
    
    /*-----------------------------------------------------------------------------
    | Collapser
    |----------------------------------------------------------------------------*/
    
    /* Make the output collapser disappear when there is not output, but do so
     * in a manner that leaves it in the layout and preserves its width.
     */
    .jp-Cell.jp-mod-noOutputs .jp-Cell-outputCollapser {
      border: none !important;
      background: transparent !important;
    }
    
    .jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputCollapser {
      min-height: var(--jp-cell-collapser-min-height);
    }
    
    /*-----------------------------------------------------------------------------
    | Output
    |----------------------------------------------------------------------------*/
    
    /* Put a space between input and output when there IS output */
    .jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputWrapper {
      margin-top: 5px;
    }
    
    .jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea {
      overflow-y: auto;
      max-height: 200px;
      box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, 0.3);
      margin-left: var(--jp-private-cell-scrolling-output-offset);
    }
    
    .jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-prompt {
      flex: 0 0
        calc(
          var(--jp-cell-prompt-width) -
            var(--jp-private-cell-scrolling-output-offset)
        );
    }
    
    /*-----------------------------------------------------------------------------
    | CodeCell
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | MarkdownCell
    |----------------------------------------------------------------------------*/
    
    .jp-MarkdownOutput {
      flex: 1 1 auto;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: var(--jp-code-padding);
    }
    
    .jp-MarkdownOutput.jp-RenderedHTMLCommon {
      overflow: auto;
    }
    
    .jp-showHiddenCellsButton {
      margin-left: calc(var(--jp-cell-prompt-width) + 2 * var(--jp-code-padding));
      margin-top: var(--jp-code-padding);
      border: 1px solid var(--jp-border-color2);
      background-color: var(--jp-border-color3) !important;
      color: var(--jp-content-font-color0) !important;
    }
    
    .jp-showHiddenCellsButton:hover {
      background-color: var(--jp-border-color2) !important;
    }
    
    .jp-collapseHeadingButton {
      display: none;
    }
    
    .jp-MarkdownCell:hover .jp-collapseHeadingButton {
      display: flex;
      min-height: var(--jp-cell-collapser-min-height);
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Variables
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    
    /*-----------------------------------------------------------------------------
    | Styles
    |----------------------------------------------------------------------------*/
    
    .jp-NotebookPanel-toolbar {
      padding: 2px;
    }
    
    .jp-Toolbar-item.jp-Notebook-toolbarCellType .jp-select-wrapper.jp-mod-focused {
      border: none;
      box-shadow: none;
    }
    
    .jp-Notebook-toolbarCellTypeDropdown select {
      height: 24px;
      font-size: var(--jp-ui-font-size1);
      line-height: 14px;
      border-radius: 0;
      display: block;
    }
    
    .jp-Notebook-toolbarCellTypeDropdown span {
      top: 5px !important;
    }
    
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Private CSS variables
    |----------------------------------------------------------------------------*/
    
    :root {
      --jp-private-notebook-dragImage-width: 304px;
      --jp-private-notebook-dragImage-height: 36px;
      --jp-private-notebook-selected-color: var(--md-blue-400);
      --jp-private-notebook-active-color: var(--md-green-400);
    }
    
    /*-----------------------------------------------------------------------------
    | Imports
    |----------------------------------------------------------------------------*/
    
    /*-----------------------------------------------------------------------------
    | Notebook
    |----------------------------------------------------------------------------*/
    
    .jp-NotebookPanel {
      display: block;
      height: 100%;
    }
    
    .jp-NotebookPanel.jp-Document {
      min-width: 240px;
      min-height: 120px;
    }
    
    .jp-Notebook {
      padding: var(--jp-notebook-padding);
      outline: none;
      overflow: auto;
      background: var(--jp-layout-color0);
    }
    
    .jp-Notebook.jp-mod-scrollPastEnd::after {
      display: block;
      content: '';
      min-height: var(--jp-notebook-scroll-padding);
    }
    
    .jp-MainAreaWidget-ContainStrict .jp-Notebook * {
      contain: strict;
    }
    
    .jp-Notebook-render * {
      contain: none !important;
    }
    
    .jp-Notebook .jp-Cell {
      overflow: visible;
    }
    
    .jp-Notebook .jp-Cell .jp-InputPrompt {
      cursor: move;
      float: left;
    }
    
    /*-----------------------------------------------------------------------------
    | Notebook state related styling
    |
    | The notebook and cells each have states, here are the possibilities:
    |
    | - Notebook
    |   - Command
    |   - Edit
    | - Cell
    |   - None
    |   - Active (only one can be active)
    |   - Selected (the cells actions are applied to)
    |   - Multiselected (when multiple selected, the cursor)
    |   - No outputs
    |----------------------------------------------------------------------------*/
    
    /* Command or edit modes */
    
    .jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-InputPrompt {
      opacity: var(--jp-cell-prompt-not-active-opacity);
      color: var(--jp-cell-prompt-not-active-font-color);
    }
    
    .jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-OutputPrompt {
      opacity: var(--jp-cell-prompt-not-active-opacity);
      color: var(--jp-cell-prompt-not-active-font-color);
    }
    
    /* cell is active */
    .jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser {
      background: var(--jp-brand-color1);
    }
    
    /* cell is dirty */
    .jp-Notebook .jp-Cell.jp-mod-dirty .jp-InputPrompt {
      color: var(--jp-warn-color1);
    }
    .jp-Notebook .jp-Cell.jp-mod-dirty .jp-InputPrompt:before {
      color: var(--jp-warn-color1);
      content: '•';
    }
    
    .jp-Notebook .jp-Cell.jp-mod-active.jp-mod-dirty .jp-Collapser {
      background: var(--jp-warn-color1);
    }
    
    /* collapser is hovered */
    .jp-Notebook .jp-Cell .jp-Collapser:hover {
      box-shadow: var(--jp-elevation-z2);
      background: var(--jp-brand-color1);
      opacity: var(--jp-cell-collapser-not-active-hover-opacity);
    }
    
    /* cell is active and collapser is hovered */
    .jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser:hover {
      background: var(--jp-brand-color0);
      opacity: 1;
    }
    
    /* Command mode */
    
    .jp-Notebook.jp-mod-commandMode .jp-Cell.jp-mod-selected {
      background: var(--jp-notebook-multiselected-color);
    }
    
    .jp-Notebook.jp-mod-commandMode
      .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {
      background: transparent;
    }
    
    /* Edit mode */
    
    .jp-Notebook.jp-mod-editMode .jp-Cell.jp-mod-active .jp-InputArea-editor {
      border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
      box-shadow: var(--jp-input-box-shadow);
      background-color: var(--jp-cell-editor-active-background);
    }
    
    /*-----------------------------------------------------------------------------
    | Notebook drag and drop
    |----------------------------------------------------------------------------*/
    
    .jp-Notebook-cell.jp-mod-dropSource {
      opacity: 0.5;
    }
    
    .jp-Notebook-cell.jp-mod-dropTarget,
    .jp-Notebook.jp-mod-commandMode
      .jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-dropTarget {
      border-top-color: var(--jp-private-notebook-selected-color);
      border-top-style: solid;
      border-top-width: 2px;
    }
    
    .jp-dragImage {
      display: block;
      flex-direction: row;
      width: var(--jp-private-notebook-dragImage-width);
      height: var(--jp-private-notebook-dragImage-height);
      border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
      background: var(--jp-cell-editor-background);
      overflow: visible;
    }
    
    .jp-dragImage-singlePrompt {
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
    }
    
    .jp-dragImage .jp-dragImage-content {
      flex: 1 1 auto;
      z-index: 2;
      font-size: var(--jp-code-font-size);
      font-family: var(--jp-code-font-family);
      line-height: var(--jp-code-line-height);
      padding: var(--jp-code-padding);
      border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
      background: var(--jp-cell-editor-background-color);
      color: var(--jp-content-font-color3);
      text-align: left;
      margin: 4px 4px 4px 0px;
    }
    
    .jp-dragImage .jp-dragImage-prompt {
      flex: 0 0 auto;
      min-width: 36px;
      color: var(--jp-cell-inprompt-font-color);
      padding: var(--jp-code-padding);
      padding-left: 12px;
      font-family: var(--jp-cell-prompt-font-family);
      letter-spacing: var(--jp-cell-prompt-letter-spacing);
      line-height: 1.9;
      font-size: var(--jp-code-font-size);
      border: var(--jp-border-width) solid transparent;
    }
    
    .jp-dragImage-multipleBack {
      z-index: -1;
      position: absolute;
      height: 32px;
      width: 300px;
      top: 8px;
      left: 8px;
      background: var(--jp-layout-color2);
      border: var(--jp-border-width) solid var(--jp-input-border-color);
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
    }
    
    /*-----------------------------------------------------------------------------
    | Cell toolbar
    |----------------------------------------------------------------------------*/
    
    .jp-NotebookTools {
      display: block;
      min-width: var(--jp-sidebar-min-width);
      color: var(--jp-ui-font-color1);
      background: var(--jp-layout-color1);
      /* This is needed so that all font sizing of children done in ems is
        * relative to this base size */
      font-size: var(--jp-ui-font-size1);
      overflow: auto;
    }
    
    .jp-NotebookTools-tool {
      padding: 0px 12px 0 12px;
    }
    
    .jp-ActiveCellTool {
      padding: 12px;
      background-color: var(--jp-layout-color1);
      border-top: none !important;
    }
    
    .jp-ActiveCellTool .jp-InputArea-prompt {
      flex: 0 0 auto;
      padding-left: 0px;
    }
    
    .jp-ActiveCellTool .jp-InputArea-editor {
      flex: 1 1 auto;
      background: var(--jp-cell-editor-background);
      border-color: var(--jp-cell-editor-border-color);
    }
    
    .jp-ActiveCellTool .jp-InputArea-editor .CodeMirror {
      background: transparent;
    }
    
    .jp-MetadataEditorTool {
      flex-direction: column;
      padding: 12px 0px 12px 0px;
    }
    
    .jp-RankedPanel > :not(:first-child) {
      margin-top: 12px;
    }
    
    .jp-KeySelector select.jp-mod-styled {
      font-size: var(--jp-ui-font-size1);
      color: var(--jp-ui-font-color0);
      border: var(--jp-border-width) solid var(--jp-border-color1);
    }
    
    .jp-KeySelector label,
    .jp-MetadataEditorTool label {
      line-height: 1.4;
    }
    
    .jp-NotebookTools .jp-select-wrapper {
      margin-top: 4px;
      margin-bottom: 0px;
    }
    
    .jp-NotebookTools .jp-Collapse {
      margin-top: 16px;
    }
    
    /*-----------------------------------------------------------------------------
    | Presentation Mode (.jp-mod-presentationMode)
    |----------------------------------------------------------------------------*/
    
    .jp-mod-presentationMode .jp-Notebook {
      --jp-content-font-size1: var(--jp-content-presentation-font-size1);
      --jp-code-font-size: var(--jp-code-presentation-font-size);
    }
    
    .jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-InputPrompt,
    .jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-OutputPrompt {
      flex: 0 0 110px;
    }
    
    /*-----------------------------------------------------------------------------
    | Placeholder
    |----------------------------------------------------------------------------*/
    
    .jp-Cell-Placeholder {
      padding-left: 55px;
    }
    
    .jp-Cell-Placeholder-wrapper {
      background: #fff;
      border: 1px solid;
      border-color: #e5e6e9 #dfe0e4 #d0d1d5;
      border-radius: 4px;
      -webkit-border-radius: 4px;
      margin: 10px 15px;
    }
    
    .jp-Cell-Placeholder-wrapper-inner {
      padding: 15px;
      position: relative;
    }
    
    .jp-Cell-Placeholder-wrapper-body {
      background-repeat: repeat;
      background-size: 50% auto;
    }
    
    .jp-Cell-Placeholder-wrapper-body div {
      background: #f6f7f8;
      background-image: -webkit-linear-gradient(
        left,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );
      background-repeat: no-repeat;
      background-size: 800px 104px;
      height: 104px;
      position: relative;
    }
    
    .jp-Cell-Placeholder-wrapper-body div {
      position: absolute;
      right: 15px;
      left: 15px;
      top: 15px;
    }
    
    div.jp-Cell-Placeholder-h1 {
      top: 20px;
      height: 20px;
      left: 15px;
      width: 150px;
    }
    
    div.jp-Cell-Placeholder-h2 {
      left: 15px;
      top: 50px;
      height: 10px;
      width: 100px;
    }
    
    div.jp-Cell-Placeholder-content-1,
    div.jp-Cell-Placeholder-content-2,
    div.jp-Cell-Placeholder-content-3 {
      left: 15px;
      right: 15px;
      height: 10px;
    }
    
    div.jp-Cell-Placeholder-content-1 {
      top: 100px;
    }
    
    div.jp-Cell-Placeholder-content-2 {
      top: 120px;
    }
    
    div.jp-Cell-Placeholder-content-3 {
      top: 140px;
    }
    
    </style>
    
        <style type="text/css">
    /*-----------------------------------------------------------------------------
    | Copyright (c) Jupyter Development Team.
    | Distributed under the terms of the Modified BSD License.
    |----------------------------------------------------------------------------*/
    
 

    
    :root {
      /* Elevation
       *
       * We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:
       *
       * https://github.com/material-components/material-components-web
       * https://material-components-web.appspot.com/elevation.html
       */
    
      --jp-shadow-base-lightness: 0;
      --jp-shadow-umbra-color: rgba(
        var(--jp-shadow-base-lightness),
        var(--jp-shadow-base-lightness),
        var(--jp-shadow-base-lightness),
        0.2
      );
      --jp-shadow-penumbra-color: rgba(
        var(--jp-shadow-base-lightness),
        var(--jp-shadow-base-lightness),
        var(--jp-shadow-base-lightness),
        0.14
      );
      --jp-shadow-ambient-color: rgba(
        var(--jp-shadow-base-lightness),
        var(--jp-shadow-base-lightness),
        var(--jp-shadow-base-lightness),
        0.12
      );
      --jp-elevation-z0: none;
      --jp-elevation-z1: 0px 2px 1px -1px var(--jp-shadow-umbra-color),
        0px 1px 1px 0px var(--jp-shadow-penumbra-color),
        0px 1px 3px 0px var(--jp-shadow-ambient-color);
      --jp-elevation-z2: 0px 3px 1px -2px var(--jp-shadow-umbra-color),
        0px 2px 2px 0px var(--jp-shadow-penumbra-color),
        0px 1px 5px 0px var(--jp-shadow-ambient-color);
      --jp-elevation-z4: 0px 2px 4px -1px var(--jp-shadow-umbra-color),
        0px 4px 5px 0px var(--jp-shadow-penumbra-color),
        0px 1px 10px 0px var(--jp-shadow-ambient-color);
      --jp-elevation-z6: 0px 3px 5px -1px var(--jp-shadow-umbra-color),
        0px 6px 10px 0px var(--jp-shadow-penumbra-color),
        0px 1px 18px 0px var(--jp-shadow-ambient-color);
      --jp-elevation-z8: 0px 5px 5px -3px var(--jp-shadow-umbra-color),
        0px 8px 10px 1px var(--jp-shadow-penumbra-color),
        0px 3px 14px 2px var(--jp-shadow-ambient-color);
      --jp-elevation-z12: 0px 7px 8px -4px var(--jp-shadow-umbra-color),
        0px 12px 17px 2px var(--jp-shadow-penumbra-color),
        0px 5px 22px 4px var(--jp-shadow-ambient-color);
      --jp-elevation-z16: 0px 8px 10px -5px var(--jp-shadow-umbra-color),
        0px 16px 24px 2px var(--jp-shadow-penumbra-color),
        0px 6px 30px 5px var(--jp-shadow-ambient-color);
      --jp-elevation-z20: 0px 10px 13px -6px var(--jp-shadow-umbra-color),
        0px 20px 31px 3px var(--jp-shadow-penumbra-color),
        0px 8px 38px 7px var(--jp-shadow-ambient-color);
      --jp-elevation-z24: 0px 11px 15px -7px var(--jp-shadow-umbra-color),
        0px 24px 38px 3px var(--jp-shadow-penumbra-color),
        0px 9px 46px 8px var(--jp-shadow-ambient-color);
    
      /* Borders
       *
       * The following variables, specify the visual styling of borders in JupyterLab.
       */
    
      --jp-border-width: 1px;
      --jp-border-color0: var(--md-grey-400);
      --jp-border-color1: var(--md-grey-400);
      --jp-border-color2: var(--md-grey-300);
      --jp-border-color3: var(--md-grey-200);
      --jp-border-radius: 2px;
    
      /* UI Fonts
       *
       * The UI font CSS variables are used for the typography all of the JupyterLab
       * user interface elements that are not directly user generated content.
       *
       * The font sizing here is done assuming that the body font size of --jp-ui-font-size1
       * is applied to a parent element. When children elements, such as headings, are sized
       * in em all things will be computed relative to that body size.
       */
    
      --jp-ui-font-scale-factor: 1.2;
      --jp-ui-font-size0: 0.83333em;
      --jp-ui-font-size1: 13px; /* Base font size */
      --jp-ui-font-size2: 1.2em;
      --jp-ui-font-size3: 1.44em;
    
      --jp-ui-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    
      /*
       * Use these font colors against the corresponding main layout colors.
       * In a light theme, these go from dark to light.
       */
    
      /* Defaults use Material Design specification */
      --jp-ui-font-color0: rgba(0, 0, 0, 1);
      --jp-ui-font-color1: rgba(0, 0, 0, 0.87);
      --jp-ui-font-color2: rgba(0, 0, 0, 0.54);
      --jp-ui-font-color3: rgba(0, 0, 0, 0.38);
    
      /*
       * Use these against the brand/accent/warn/error colors.
       * These will typically go from light to darker, in both a dark and light theme.
       */
    
      --jp-ui-inverse-font-color0: rgba(255, 255, 255, 1);
      --jp-ui-inverse-font-color1: rgba(255, 255, 255, 1);
      --jp-ui-inverse-font-color2: rgba(255, 255, 255, 0.7);
      --jp-ui-inverse-font-color3: rgba(255, 255, 255, 0.5);
    
      /* Content Fonts
       *
       * Content font variables are used for typography of user generated content.
       *
       * The font sizing here is done assuming that the body font size of --jp-content-font-size1
       * is applied to a parent element. When children elements, such as headings, are sized
       * in em all things will be computed relative to that body size.
       */
    
      --jp-content-line-height: 1.6;
      --jp-content-font-scale-factor: 1.2;
      --jp-content-font-size0: 0.83333em;
      --jp-content-font-size1: 14px; /* Base font size */
      --jp-content-font-size2: 1.2em;
      --jp-content-font-size3: 1.44em;
      --jp-content-font-size4: 1.728em;
      --jp-content-font-size5: 2.0736em;
    
      /* This gives a magnification of about 125% in presentation mode over normal. */
      --jp-content-presentation-font-size1: 17px;
    
      --jp-content-heading-line-height: 1;
      --jp-content-heading-margin-top: 1.2em;
      --jp-content-heading-margin-bottom: 0.8em;
      --jp-content-heading-font-weight: 500;
    
      /* Defaults use Material Design specification */
      --jp-content-font-color0: rgba(0, 0, 0, 1);
      --jp-content-font-color1: rgba(0, 0, 0, 0.87);
      --jp-content-font-color2: rgba(0, 0, 0, 0.54);
      --jp-content-font-color3: rgba(0, 0, 0, 0.38);
    
      --jp-content-link-color: var(--md-blue-700);
    
      --jp-content-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
    
      /*
       * Code Fonts
       *
       * Code font variables are used for typography of code and other monospaces content.
       */
    
      --jp-code-font-size: 13px;
      --jp-code-line-height: 1.3077; /* 17px for 13px base */
      --jp-code-padding: 5px; /* 5px for 13px base, codemirror highlighting needs integer px value */
      --jp-code-font-family-default: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
      --jp-code-font-family: var(--jp-code-font-family-default);
    
      /* This gives a magnification of about 125% in presentation mode over normal. */
      --jp-code-presentation-font-size: 16px;
    
      /* may need to tweak cursor width if you change font size */
      --jp-code-cursor-width0: 1.4px;
      --jp-code-cursor-width1: 2px;
      --jp-code-cursor-width2: 4px;
    
      /* Layout
       *
       * The following are the main layout colors use in JupyterLab. In a light
       * theme these would go from light to dark.
       */
    
      --jp-layout-color0: white;
      --jp-layout-color1: white;
      --jp-layout-color2: var(--md-grey-200);
      --jp-layout-color3: var(--md-grey-400);
      --jp-layout-color4: var(--md-grey-600);
    
      /* Inverse Layout
       *
       * The following are the inverse layout colors use in JupyterLab. In a light
       * theme these would go from dark to light.
       */
    
      --jp-inverse-layout-color0: #111111;
      --jp-inverse-layout-color1: var(--md-grey-900);
      --jp-inverse-layout-color2: var(--md-grey-800);
      --jp-inverse-layout-color3: var(--md-grey-700);
      --jp-inverse-layout-color4: var(--md-grey-600);
    
      /* Brand/accent */
    
      --jp-brand-color0: var(--md-blue-900);
      --jp-brand-color1: var(--md-blue-700);
      --jp-brand-color2: var(--md-blue-300);
      --jp-brand-color3: var(--md-blue-100);
      --jp-brand-color4: var(--md-blue-50);
    
      --jp-accent-color0: var(--md-green-900);
      --jp-accent-color1: var(--md-green-700);
      --jp-accent-color2: var(--md-green-300);
      --jp-accent-color3: var(--md-green-100);
    
      /* State colors (warn, error, success, info) */
    
      --jp-warn-color0: var(--md-orange-900);
      --jp-warn-color1: var(--md-orange-700);
      --jp-warn-color2: var(--md-orange-300);
      --jp-warn-color3: var(--md-orange-100);
    
      --jp-error-color0: var(--md-red-900);
      --jp-error-color1: var(--md-red-700);
      --jp-error-color2: var(--md-red-300);
      --jp-error-color3: var(--md-red-100);
    
      --jp-success-color0: var(--md-green-900);
      --jp-success-color1: var(--md-green-700);
      --jp-success-color2: var(--md-green-300);
      --jp-success-color3: var(--md-green-100);
    
      --jp-info-color0: var(--md-cyan-900);
      --jp-info-color1: var(--md-cyan-700);
      --jp-info-color2: var(--md-cyan-300);
      --jp-info-color3: var(--md-cyan-100);
    
      /* Cell specific styles */
    
      --jp-cell-padding: 5px;
    
      --jp-cell-collapser-width: 8px;
      --jp-cell-collapser-min-height: 20px;
      --jp-cell-collapser-not-active-hover-opacity: 0.6;
    
      --jp-cell-editor-background: var(--md-grey-100);
      --jp-cell-editor-border-color: var(--md-grey-300);
      --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300);
      --jp-cell-editor-active-background: var(--jp-layout-color0);
      --jp-cell-editor-active-border-color: var(--jp-brand-color1);
    
      --jp-cell-prompt-width: 64px;
      --jp-cell-prompt-font-family: var(--jp-code-font-family-default);
      --jp-cell-prompt-letter-spacing: 0px;
      --jp-cell-prompt-opacity: 1;
      --jp-cell-prompt-not-active-opacity: 0.5;
      --jp-cell-prompt-not-active-font-color: var(--md-grey-700);
      /* A custom blend of MD grey and blue 600
       * See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex */
      --jp-cell-inprompt-font-color: #307fc1;
      /* A custom blend of MD grey and orange 600
       * https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex */
      --jp-cell-outprompt-font-color: #bf5b3d;
    
      /* Notebook specific styles */
    
      --jp-notebook-padding: 10px;
      --jp-notebook-select-background: var(--jp-layout-color1);
      --jp-notebook-multiselected-color: var(--md-blue-50);
    
      /* The scroll padding is calculated to fill enough space at the bottom of the
      notebook to show one single-line cell (with appropriate padding) at the top
      when the notebook is scrolled all the way to the bottom. We also subtract one
      pixel so that no scrollbar appears if we have just one single-line cell in the
      notebook. This padding is to enable a 'scroll past end' feature in a notebook.
      */
      --jp-notebook-scroll-padding: calc(
        100% - var(--jp-code-font-size) * var(--jp-code-line-height) -
          var(--jp-code-padding) - var(--jp-cell-padding) - 1px
      );
    
      /* Rendermime styles */
    
      --jp-rendermime-error-background: #fdd;
      --jp-rendermime-table-row-background: var(--md-grey-100);
      --jp-rendermime-table-row-hover-background: var(--md-light-blue-50);
    
      /* Dialog specific styles */
    
      --jp-dialog-background: rgba(0, 0, 0, 0.25);
    
      /* Console specific styles */
    
      --jp-console-padding: 10px;
    
      /* Toolbar specific styles */
    
      --jp-toolbar-border-color: var(--jp-border-color1);
      --jp-toolbar-micro-height: 8px;
      --jp-toolbar-background: var(--jp-layout-color1);
      --jp-toolbar-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.24);
      --jp-toolbar-header-margin: 4px 4px 0px 4px;
      --jp-toolbar-active-background: var(--md-grey-300);
    
      /* Statusbar specific styles */
    
      --jp-statusbar-height: 24px;
    
      /* Input field styles */
    
      --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300);
      --jp-input-active-background: var(--jp-layout-color1);
      --jp-input-hover-background: var(--jp-layout-color1);
      --jp-input-background: var(--md-grey-100);
      --jp-input-border-color: var(--jp-border-color1);
      --jp-input-active-border-color: var(--jp-brand-color1);
      --jp-input-active-box-shadow-color: rgba(19, 124, 189, 0.3);
    
      /* General editor styles */
    
      --jp-editor-selected-background: #d9d9d9;
      --jp-editor-selected-focused-background: #d7d4f0;
      --jp-editor-cursor-color: var(--jp-ui-font-color0);
    
      /* Code mirror specific styles */
    
      --jp-mirror-editor-keyword-color: #008000;
      --jp-mirror-editor-atom-color: #88f;
      --jp-mirror-editor-number-color: #080;
      --jp-mirror-editor-def-color: #00f;
      --jp-mirror-editor-variable-color: var(--md-grey-900);
      --jp-mirror-editor-variable-2-color: #05a;
      --jp-mirror-editor-variable-3-color: #085;
      --jp-mirror-editor-punctuation-color: #05a;
      --jp-mirror-editor-property-color: #05a;
      --jp-mirror-editor-operator-color: #aa22ff;
      --jp-mirror-editor-comment-color: #408080;
      --jp-mirror-editor-string-color: #ba2121;
      --jp-mirror-editor-string-2-color: #708;
      --jp-mirror-editor-meta-color: #aa22ff;
      --jp-mirror-editor-qualifier-color: #555;
      --jp-mirror-editor-builtin-color: #008000;
      --jp-mirror-editor-bracket-color: #997;
      --jp-mirror-editor-tag-color: #170;
      --jp-mirror-editor-attribute-color: #00c;
      --jp-mirror-editor-header-color: blue;
      --jp-mirror-editor-quote-color: #090;
      --jp-mirror-editor-link-color: #00c;
      --jp-mirror-editor-error-color: #f00;
      --jp-mirror-editor-hr-color: #999;
    
      /* Vega extension styles */
    
      --jp-vega-background: white;
    
      /* Sidebar-related styles */
    
      --jp-sidebar-min-width: 250px;
    
      /* Search-related styles */
    
      --jp-search-toggle-off-opacity: 0.5;
      --jp-search-toggle-hover-opacity: 0.8;
      --jp-search-toggle-on-opacity: 1;
      --jp-search-selected-match-background-color: rgb(245, 200, 0);
      --jp-search-selected-match-color: black;
      --jp-search-unselected-match-background-color: var(
        --jp-inverse-layout-color0
      );
      --jp-search-unselected-match-color: var(--jp-ui-inverse-font-color0);
    
      /* Icon colors that work well with light or dark backgrounds */
      --jp-icon-contrast-color0: var(--md-purple-600);
      --jp-icon-contrast-color1: var(--md-green-600);
      --jp-icon-contrast-color2: var(--md-pink-600);
      --jp-icon-contrast-color3: var(--md-blue-600);
    }
    </style>
    
    <style type="text/css">
    /* Force rendering true colors when outputing to pdf */
    * {
      -webkit-print-color-adjust: exact;
    }
    
    /* Misc */
    a.anchor-link {
      display: none;
    }
    
    .highlight  {
      margin: 0.4em;
    }
    
    /* Input area styling */
    .jp-InputArea {
      overflow: hidden;
    }
    
    .jp-InputArea-editor {
      overflow: hidden;
    }
    
    .CodeMirror pre {
      margin: 0;
      padding: 0;
    }
    
    /* Using table instead of flexbox so that we can use break-inside property */
    /* CSS rules under this comment should not be required anymore after we move to the JupyterLab 4.0 CSS */
    
    
    .jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-prompt {
      min-width: calc(
        var(--jp-cell-prompt-width) - var(--jp-private-cell-scrolling-output-offset)
      );
    }
    
    .jp-OutputArea-child {
      display: table;
      width: 100%;
    }
    
    .jp-OutputPrompt {
      display: table-cell;
      vertical-align: top;
      min-width: var(--jp-cell-prompt-width);
    }
    
    body[data-format='mobile'] .jp-OutputPrompt {
      display: table-row;
    }
    
    .jp-OutputArea-output {
      display: table-cell;
      width: 100%;
    }
    
    body[data-format='mobile'] .jp-OutputArea-child .jp-OutputArea-output {
      display: table-row;
    }
    
    .jp-OutputArea-output.jp-OutputArea-executeResult {
      width: 100%;
    }
    
    /* Hiding the collapser by default */
    .jp-Collapser {
      display: none;
    }
    
    @media print {
      .jp-Cell-inputWrapper,
      .jp-Cell-outputWrapper {
        display: block;
      }
    
      .jp-OutputArea-child {
        break-inside: avoid-page;
      }
    }
    </style>
    
    <!-- Load mathjax -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_CHTML-full,Safe"> </script>
        <!-- MathJax configuration -->
        <script type="text/x-mathjax-config">
        init_mathjax = function() {
            if (window.MathJax) {
            // MathJax loaded
                MathJax.Hub.Config({
                    TeX: {
                        equationNumbers: {
                        autoNumber: "AMS",
                        useLabelIds: true
                        }
                    },
                    tex2jax: {
                        inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                        displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                        processEscapes: true,
                        processEnvironments: true
                    },
                    displayAlign: 'center',
                    CommonHTML: {
                        linebreaks: {
                        automatic: true
                        }
                    }
                });
    
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            }
        }
        init_mathjax();
        </script>
        <!-- End of mathjax configuration --></head>
    <body class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">
    <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[1]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1"># Importamos la librería de PAndas, numpy y matplotlib</span>
    <span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
    <span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
    <span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[2]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Leemos nuestro archivo .csv y posteriormente creamos un Dataframe</span>
    <span class="n">data</span><span class="o">=</span><span class="n">pd</span><span class="o">.</span><span class="n">read_csv</span><span class="p">(</span><span class="s1">'shopping_trends.csv'</span><span class="p">)</span>
    <span class="n">data</span><span class="o">=</span><span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">data</span><span class="p">)</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div>
    <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h2 id="Comienzo-del-estudio-de-la-data,-donde-encontraremos-los-errores-si-hay-y-demas">Comienzo del estudio de la data, donde encontraremos los errores si hay y demas<a class="anchor-link" href="#Comienzo-del-estudio-de-la-data,-donde-encontraremos-los-errores-si-hay-y-demas">&#182;</a></h2>
    </div>
    </div>
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[10]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Obtenemos el tamaño de la data</span>
    <span class="n">data</span><span class="o">.</span><span class="n">shape</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[10]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>(3900, 18)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[3]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se obtiene toda la informacion de Dataframe, logrando la totalidad de los dtaos en cada columna</span>
    <span class="n">data</span><span class="o">.</span><span class="n">info</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
    <pre>&lt;class &#39;pandas.core.frame.DataFrame&#39;&gt;
    RangeIndex: 3900 entries, 0 to 3899
    Data columns (total 18 columns):
     #   Column                  Non-Null Count  Dtype  
    ---  ------                  --------------  -----  
     0   Customer ID             3900 non-null   int64  
     1   Age                     3900 non-null   int64  
     2   Gender                  3900 non-null   object 
     3   Item Purchased          3900 non-null   object 
     4   Category                3900 non-null   object 
     5   Purchase Amount (USD)   3900 non-null   int64  
     6   Location                3900 non-null   object 
     7   Size                    3900 non-null   object 
     8   Color                   3900 non-null   object 
     9   Season                  3900 non-null   object 
     10  Review Rating           3900 non-null   float64
     11  Subscription Status     3900 non-null   object 
     12  Shipping Type           3900 non-null   object 
     13  Discount Applied        3900 non-null   object 
     14  Promo Code Used         3900 non-null   object 
     15  Previous Purchases      3900 non-null   int64  
     16  Payment Method          3900 non-null   object 
     17  Frequency of Purchases  3900 non-null   object 
    dtypes: float64(1), int64(4), object(13)
    memory usage: 548.6+ KB
    </pre>
    </div>
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[4]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Descripcion de los campos numericos del archivo .csv</span>
    <span class="n">data</span><span class="o">.</span><span class="n">describe</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[4]:</div>
    
    
    
    <div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
    
      <div id="df-c3778b99-76cf-402e-b455-5977f22ab0f2" class="colab-df-container">
        <div>
    <style scoped>
        .dataframe tbody tr th:only-of-type {
            vertical-align: middle;
        }
    
        .dataframe tbody tr th {
            vertical-align: top;
        }
    
        .dataframe thead th {
            text-align: right;
        }
    </style>
    <table border="1" class="dataframe">
      <thead>
        <tr style="text-align: right;">
          <th></th>
          <th>Customer ID</th>
          <th>Age</th>
          <th>Purchase Amount (USD)</th>
          <th>Review Rating</th>
          <th>Previous Purchases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>count</th>
          <td>3900.000000</td>
          <td>3900.000000</td>
          <td>3900.000000</td>
          <td>3900.000000</td>
          <td>3900.000000</td>
        </tr>
        <tr>
          <th>mean</th>
          <td>1950.500000</td>
          <td>44.068462</td>
          <td>59.764359</td>
          <td>3.749949</td>
          <td>25.351538</td>
        </tr>
        <tr>
          <th>std</th>
          <td>1125.977353</td>
          <td>15.207589</td>
          <td>23.685392</td>
          <td>0.716223</td>
          <td>14.447125</td>
        </tr>
        <tr>
          <th>min</th>
          <td>1.000000</td>
          <td>18.000000</td>
          <td>20.000000</td>
          <td>2.500000</td>
          <td>1.000000</td>
        </tr>
        <tr>
          <th>25%</th>
          <td>975.750000</td>
          <td>31.000000</td>
          <td>39.000000</td>
          <td>3.100000</td>
          <td>13.000000</td>
        </tr>
        <tr>
          <th>50%</th>
          <td>1950.500000</td>
          <td>44.000000</td>
          <td>60.000000</td>
          <td>3.700000</td>
          <td>25.000000</td>
        </tr>
        <tr>
          <th>75%</th>
          <td>2925.250000</td>
          <td>57.000000</td>
          <td>81.000000</td>
          <td>4.400000</td>
          <td>38.000000</td>
        </tr>
        <tr>
          <th>max</th>
          <td>3900.000000</td>
          <td>70.000000</td>
          <td>100.000000</td>
          <td>5.000000</td>
          <td>50.000000</td>
        </tr>
      </tbody>
    </table>
    </div>
        <div class="colab-df-buttons">
    
      <div class="colab-df-container">
        <button class="colab-df-convert" onclick="convertToInteractive('df-c3778b99-76cf-402e-b455-5977f22ab0f2')"
                title="Convert this dataframe to an interactive table."
                style="display:none;">
    
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960">
        <path d="M120-120v-720h720v720H120Zm60-500h600v-160H180v160Zm220 220h160v-160H400v160Zm0 220h160v-160H400v160ZM180-400h160v-160H180v160Zm440 0h160v-160H620v160ZM180-180h160v-160H180v160Zm440 0h160v-160H620v160Z"/>
      </svg>
        </button>
    
      <style>
        .colab-df-container {
          display:flex;
          gap: 12px;
        }
    
        .colab-df-convert {
          background-color: #E8F0FE;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: none;
          fill: #1967D2;
          height: 32px;
          padding: 0 0 0 0;
          width: 32px;
        }
    
        .colab-df-convert:hover {
          background-color: #E2EBFA;
          box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15);
          fill: #174EA6;
        }
    
        .colab-df-buttons div {
          margin-bottom: 4px;
        }
    
        [theme=dark] .colab-df-convert {
          background-color: #3B4455;
          fill: #D2E3FC;
        }
    
        [theme=dark] .colab-df-convert:hover {
          background-color: #434B5C;
          box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
          filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
          fill: #FFFFFF;
        }
      </style>
    
        <script>
          const buttonEl =
            document.querySelector('#df-c3778b99-76cf-402e-b455-5977f22ab0f2 button.colab-df-convert');
          buttonEl.style.display =
            google.colab.kernel.accessAllowed ? 'block' : 'none';
    
          async function convertToInteractive(key) {
            const element = document.querySelector('#df-c3778b99-76cf-402e-b455-5977f22ab0f2');
            const dataTable =
              await google.colab.kernel.invokeFunction('convertToInteractive',
                                                        [key], {});
            if (!dataTable) return;
    
            const docLinkHtml = 'Like what you see? Visit the ' +
              '<a target="_blank" href=https://colab.research.google.com/notebooks/data_table.ipynb>data table notebook</a>'
              + ' to learn more about interactive tables.';
            element.innerHTML = '';
            dataTable['output_type'] = 'display_data';
            await google.colab.output.renderOutput(dataTable, element);
            const docLink = document.createElement('div');
            docLink.innerHTML = docLinkHtml;
            element.appendChild(docLink);
          }
        </script>
      </div>
    
    
    <div id="df-c053b310-fedf-4685-83df-c5215a07442c">
      <button class="colab-df-quickchart" onclick="quickchart('df-c053b310-fedf-4685-83df-c5215a07442c')"
                title="Suggest charts"
                style="display:none;">
    
    <svg xmlns="http://www.w3.org/2000/svg" height="24px"viewBox="0 0 24 24"
         width="24px">
        <g>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </g>
    </svg>
      </button>
    
    <style>
      .colab-df-quickchart {
          --bg-color: #E8F0FE;
          --fill-color: #1967D2;
          --hover-bg-color: #E2EBFA;
          --hover-fill-color: #174EA6;
          --disabled-fill-color: #AAA;
          --disabled-bg-color: #DDD;
      }
    
      [theme=dark] .colab-df-quickchart {
          --bg-color: #3B4455;
          --fill-color: #D2E3FC;
          --hover-bg-color: #434B5C;
          --hover-fill-color: #FFFFFF;
          --disabled-bg-color: #3B4455;
          --disabled-fill-color: #666;
      }
    
      .colab-df-quickchart {
        background-color: var(--bg-color);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        fill: var(--fill-color);
        height: 32px;
        padding: 0;
        width: 32px;
      }
    
      .colab-df-quickchart:hover {
        background-color: var(--hover-bg-color);
        box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
        fill: var(--button-hover-fill-color);
      }
    
      .colab-df-quickchart-complete:disabled,
      .colab-df-quickchart-complete:disabled:hover {
        background-color: var(--disabled-bg-color);
        fill: var(--disabled-fill-color);
        box-shadow: none;
      }
    
      .colab-df-spinner {
        border: 2px solid var(--fill-color);
        border-color: transparent;
        border-bottom-color: var(--fill-color);
        animation:
          spin 1s steps(1) infinite;
      }
    
      @keyframes spin {
        0% {
          border-color: transparent;
          border-bottom-color: var(--fill-color);
          border-left-color: var(--fill-color);
        }
        20% {
          border-color: transparent;
          border-left-color: var(--fill-color);
          border-top-color: var(--fill-color);
        }
        30% {
          border-color: transparent;
          border-left-color: var(--fill-color);
          border-top-color: var(--fill-color);
          border-right-color: var(--fill-color);
        }
        40% {
          border-color: transparent;
          border-right-color: var(--fill-color);
          border-top-color: var(--fill-color);
        }
        60% {
          border-color: transparent;
          border-right-color: var(--fill-color);
        }
        80% {
          border-color: transparent;
          border-right-color: var(--fill-color);
          border-bottom-color: var(--fill-color);
        }
        90% {
          border-color: transparent;
          border-bottom-color: var(--fill-color);
        }
      }
    </style>
    
      <script>
        async function quickchart(key) {
          const quickchartButtonEl =
            document.querySelector('#' + key + ' button');
          quickchartButtonEl.disabled = true;  // To prevent multiple clicks.
          quickchartButtonEl.classList.add('colab-df-spinner');
          try {
            const charts = await google.colab.kernel.invokeFunction(
                'suggestCharts', [key], {});
          } catch (error) {
            console.error('Error during call to suggestCharts:', error);
          }
          quickchartButtonEl.classList.remove('colab-df-spinner');
          quickchartButtonEl.classList.add('colab-df-quickchart-complete');
        }
        (() => {
          let quickchartButtonEl =
            document.querySelector('#df-c053b310-fedf-4685-83df-c5215a07442c button');
          quickchartButtonEl.style.display =
            google.colab.kernel.accessAllowed ? 'block' : 'none';
        })();
      </script>
    </div>
        </div>
      </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[8]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Aquí logramos ver la cantidad de datos nulos de algunos campos</span>
    <span class="n">data</span><span class="o">.</span><span class="n">isnull</span><span class="p">()</span><span class="o">.</span><span class="n">sum</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[8]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>Customer ID               0
    Age                       0
    Gender                    0
    Item Purchased            0
    Category                  0
    Purchase Amount (USD)     0
    Location                  0
    Size                      0
    Color                     0
    Season                    0
    Review Rating             0
    Subscription Status       0
    Shipping Type             0
    Discount Applied          0
    Promo Code Used           0
    Previous Purchases        0
    Payment Method            0
    Frequency of Purchases    0
    dtype: int64</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[6]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Aquí se observa los 5 primeros datos</span>
    <span class="n">data</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[6]:</div>
    
    
    
    <div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
    
      <div id="df-44b4583b-498e-48ad-acd6-182ad679c87a" class="colab-df-container">
        <div>
    <style scoped>
        .dataframe tbody tr th:only-of-type {
            vertical-align: middle;
        }
    
        .dataframe tbody tr th {
            vertical-align: top;
        }
    
        .dataframe thead th {
            text-align: right;
        }
    </style>
    <table border="1" class="dataframe">
      <thead>
        <tr style="text-align: right;">
          <th></th>
          <th>Customer ID</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Item Purchased</th>
          <th>Category</th>
          <th>Purchase Amount (USD)</th>
          <th>Location</th>
          <th>Size</th>
          <th>Color</th>
          <th>Season</th>
          <th>Review Rating</th>
          <th>Subscription Status</th>
          <th>Shipping Type</th>
          <th>Discount Applied</th>
          <th>Promo Code Used</th>
          <th>Previous Purchases</th>
          <th>Payment Method</th>
          <th>Frequency of Purchases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>0</th>
          <td>1</td>
          <td>55</td>
          <td>Male</td>
          <td>Blouse</td>
          <td>Clothing</td>
          <td>53</td>
          <td>Kentucky</td>
          <td>L</td>
          <td>Gray</td>
          <td>Winter</td>
          <td>3.1</td>
          <td>Yes</td>
          <td>Express</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>14</td>
          <td>Venmo</td>
          <td>Fortnightly</td>
        </tr>
        <tr>
          <th>1</th>
          <td>2</td>
          <td>19</td>
          <td>Male</td>
          <td>Sweater</td>
          <td>Clothing</td>
          <td>64</td>
          <td>Maine</td>
          <td>L</td>
          <td>Maroon</td>
          <td>Winter</td>
          <td>3.1</td>
          <td>Yes</td>
          <td>Express</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>2</td>
          <td>Cash</td>
          <td>Fortnightly</td>
        </tr>
        <tr>
          <th>2</th>
          <td>3</td>
          <td>50</td>
          <td>Male</td>
          <td>Jeans</td>
          <td>Clothing</td>
          <td>73</td>
          <td>Massachusetts</td>
          <td>S</td>
          <td>Maroon</td>
          <td>Spring</td>
          <td>3.1</td>
          <td>Yes</td>
          <td>Free Shipping</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>23</td>
          <td>Credit Card</td>
          <td>Weekly</td>
        </tr>
        <tr>
          <th>3</th>
          <td>4</td>
          <td>21</td>
          <td>Male</td>
          <td>Sandals</td>
          <td>Footwear</td>
          <td>90</td>
          <td>Rhode Island</td>
          <td>M</td>
          <td>Maroon</td>
          <td>Spring</td>
          <td>3.5</td>
          <td>Yes</td>
          <td>Next Day Air</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>49</td>
          <td>PayPal</td>
          <td>Weekly</td>
        </tr>
        <tr>
          <th>4</th>
          <td>5</td>
          <td>45</td>
          <td>Male</td>
          <td>Blouse</td>
          <td>Clothing</td>
          <td>49</td>
          <td>Oregon</td>
          <td>M</td>
          <td>Turquoise</td>
          <td>Spring</td>
          <td>2.7</td>
          <td>Yes</td>
          <td>Free Shipping</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>31</td>
          <td>PayPal</td>
          <td>Annually</td>
        </tr>
      </tbody>
    </table>
    </div>
        <div class="colab-df-buttons">
    
      <div class="colab-df-container">
        <button class="colab-df-convert" onclick="convertToInteractive('df-44b4583b-498e-48ad-acd6-182ad679c87a')"
                title="Convert this dataframe to an interactive table."
                style="display:none;">
    
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960">
        <path d="M120-120v-720h720v720H120Zm60-500h600v-160H180v160Zm220 220h160v-160H400v160Zm0 220h160v-160H400v160ZM180-400h160v-160H180v160Zm440 0h160v-160H620v160ZM180-180h160v-160H180v160Zm440 0h160v-160H620v160Z"/>
      </svg>
        </button>
    
      <style>
        .colab-df-container {
          display:flex;
          gap: 12px;
        }
    
        .colab-df-convert {
          background-color: #E8F0FE;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: none;
          fill: #1967D2;
          height: 32px;
          padding: 0 0 0 0;
          width: 32px;
        }
    
        .colab-df-convert:hover {
          background-color: #E2EBFA;
          box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15);
          fill: #174EA6;
        }
    
        .colab-df-buttons div {
          margin-bottom: 4px;
        }
    
        [theme=dark] .colab-df-convert {
          background-color: #3B4455;
          fill: #D2E3FC;
        }
    
        [theme=dark] .colab-df-convert:hover {
          background-color: #434B5C;
          box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
          filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
          fill: #FFFFFF;
        }
      </style>
    
        <script>
          const buttonEl =
            document.querySelector('#df-44b4583b-498e-48ad-acd6-182ad679c87a button.colab-df-convert');
          buttonEl.style.display =
            google.colab.kernel.accessAllowed ? 'block' : 'none';
    
          async function convertToInteractive(key) {
            const element = document.querySelector('#df-44b4583b-498e-48ad-acd6-182ad679c87a');
            const dataTable =
              await google.colab.kernel.invokeFunction('convertToInteractive',
                                                        [key], {});
            if (!dataTable) return;
    
            const docLinkHtml = 'Like what you see? Visit the ' +
              '<a target="_blank" href=https://colab.research.google.com/notebooks/data_table.ipynb>data table notebook</a>'
              + ' to learn more about interactive tables.';
            element.innerHTML = '';
            dataTable['output_type'] = 'display_data';
            await google.colab.output.renderOutput(dataTable, element);
            const docLink = document.createElement('div');
            docLink.innerHTML = docLinkHtml;
            element.appendChild(docLink);
          }
        </script>
      </div>
    
    
    <div id="df-f8d2e83f-28a5-4307-9912-f2a0894f8a7f">
      <button class="colab-df-quickchart" onclick="quickchart('df-f8d2e83f-28a5-4307-9912-f2a0894f8a7f')"
                title="Suggest charts"
                style="display:none;">
    
    <svg xmlns="http://www.w3.org/2000/svg" height="24px"viewBox="0 0 24 24"
         width="24px">
        <g>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </g>
    </svg>
      </button>
    
    <style>
      .colab-df-quickchart {
          --bg-color: #E8F0FE;
          --fill-color: #1967D2;
          --hover-bg-color: #E2EBFA;
          --hover-fill-color: #174EA6;
          --disabled-fill-color: #AAA;
          --disabled-bg-color: #DDD;
      }
    
      [theme=dark] .colab-df-quickchart {
          --bg-color: #3B4455;
          --fill-color: #D2E3FC;
          --hover-bg-color: #434B5C;
          --hover-fill-color: #FFFFFF;
          --disabled-bg-color: #3B4455;
          --disabled-fill-color: #666;
      }
    
      .colab-df-quickchart {
        background-color: var(--bg-color);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        fill: var(--fill-color);
        height: 32px;
        padding: 0;
        width: 32px;
      }
    
      .colab-df-quickchart:hover {
        background-color: var(--hover-bg-color);
        box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
        fill: var(--button-hover-fill-color);
      }
    
      .colab-df-quickchart-complete:disabled,
      .colab-df-quickchart-complete:disabled:hover {
        background-color: var(--disabled-bg-color);
        fill: var(--disabled-fill-color);
        box-shadow: none;
      }
    
      .colab-df-spinner {
        border: 2px solid var(--fill-color);
        border-color: transparent;
        border-bottom-color: var(--fill-color);
        animation:
          spin 1s steps(1) infinite;
      }
    
      @keyframes spin {
        0% {
          border-color: transparent;
          border-bottom-color: var(--fill-color);
          border-left-color: var(--fill-color);
        }
        20% {
          border-color: transparent;
          border-left-color: var(--fill-color);
          border-top-color: var(--fill-color);
        }
        30% {
          border-color: transparent;
          border-left-color: var(--fill-color);
          border-top-color: var(--fill-color);
          border-right-color: var(--fill-color);
        }
        40% {
          border-color: transparent;
          border-right-color: var(--fill-color);
          border-top-color: var(--fill-color);
        }
        60% {
          border-color: transparent;
          border-right-color: var(--fill-color);
        }
        80% {
          border-color: transparent;
          border-right-color: var(--fill-color);
          border-bottom-color: var(--fill-color);
        }
        90% {
          border-color: transparent;
          border-bottom-color: var(--fill-color);
        }
      }
    </style>
    
      <script>
        async function quickchart(key) {
          const quickchartButtonEl =
            document.querySelector('#' + key + ' button');
          quickchartButtonEl.disabled = true;  // To prevent multiple clicks.
          quickchartButtonEl.classList.add('colab-df-spinner');
          try {
            const charts = await google.colab.kernel.invokeFunction(
                'suggestCharts', [key], {});
          } catch (error) {
            console.error('Error during call to suggestCharts:', error);
          }
          quickchartButtonEl.classList.remove('colab-df-spinner');
          quickchartButtonEl.classList.add('colab-df-quickchart-complete');
        }
        (() => {
          let quickchartButtonEl =
            document.querySelector('#df-f8d2e83f-28a5-4307-9912-f2a0894f8a7f button');
          quickchartButtonEl.style.display =
            google.colab.kernel.accessAllowed ? 'block' : 'none';
        })();
      </script>
    </div>
        </div>
      </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Aquí obtenemos los tipos de datos del dataframe</span>
    <span class="n">data</span><span class="o">.</span><span class="n">dtypes</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[&nbsp;]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>Customer ID                 int64
    Age                         int64
    Gender                     object
    Item Purchased             object
    Category                   object
    Purchase Amount (USD)       int64
    Location                   object
    Size                       object
    Color                      object
    Season                     object
    Review Rating             float64
    Subscription Status        object
    Shipping Type              object
    Discount Applied           object
    Promo Code Used            object
    Previous Purchases          int64
    Payment Method             object
    Frequency of Purchases     object
    dtype: object</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Obtener una vista de las columnas</span>
    <span class="n">data</span><span class="o">.</span><span class="n">columns</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[&nbsp;]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>Index([&#39;Customer ID&#39;, &#39;Age&#39;, &#39;Gender&#39;, &#39;Item Purchased&#39;, &#39;Category&#39;,
           &#39;Purchase Amount (USD)&#39;, &#39;Location&#39;, &#39;Size&#39;, &#39;Color&#39;, &#39;Season&#39;,
           &#39;Review Rating&#39;, &#39;Subscription Status&#39;, &#39;Shipping Type&#39;,
           &#39;Discount Applied&#39;, &#39;Promo Code Used&#39;, &#39;Previous Purchases&#39;,
           &#39;Payment Method&#39;, &#39;Frequency of Purchases&#39;],
          dtype=&#39;object&#39;)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p><strong>texto en negrita</strong>###Datos únicos de cada campo</p>
    
    </div>
    </div>
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[14]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Age'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[14]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([55, 19, 50, 21, 45, 46, 63, 27, 26, 57, 53, 30, 61, 65, 64, 25, 52,
           66, 31, 56, 18, 38, 54, 33, 36, 35, 29, 70, 69, 67, 20, 39, 42, 68,
           49, 59, 47, 40, 41, 48, 22, 24, 44, 37, 58, 32, 62, 51, 28, 43, 34,
           23, 60])</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[12]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Gender'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[12]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Male&#39;, &#39;Female&#39;], dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[21]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Item Purchased'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[21]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Blouse&#39;, &#39;Sweater&#39;, &#39;Jeans&#39;, &#39;Sandals&#39;, &#39;Sneakers&#39;, &#39;Shirt&#39;,
           &#39;Shorts&#39;, &#39;Coat&#39;, &#39;Handbag&#39;, &#39;Shoes&#39;, &#39;Dress&#39;, &#39;Skirt&#39;,
           &#39;Sunglasses&#39;, &#39;Pants&#39;, &#39;Jacket&#39;, &#39;Hoodie&#39;, &#39;Jewelry&#39;, &#39;T-shirt&#39;,
           &#39;Scarf&#39;, &#39;Hat&#39;, &#39;Socks&#39;, &#39;Backpack&#39;, &#39;Belt&#39;, &#39;Boots&#39;, &#39;Gloves&#39;],
          dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Category'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[&nbsp;]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Clothing&#39;, &#39;Footwear&#39;, &#39;Outerwear&#39;, &#39;Accessories&#39;], dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[22]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Purchase Amount (USD)'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[22]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([ 53,  64,  73,  90,  49,  20,  85,  34,  97,  31,  68,  72,  51,
            81,  36,  38,  48,  62,  37,  88,  22,  25,  56,  94,  79,  67,
            91,  33,  69,  45,  60,  76,  39, 100,  21,  43,  54,  55,  30,
            28,  59,  24,  83,  46,  70,  29,  26,  58,  96,  40,  32,  95,
            41,  47,  99,  87,  92,  98,  89,  35,  75,  65,  86,  84,  77,
            27,  23,  74,  80,  42,  61,  82,  78,  93,  50,  57,  66,  44,
            52,  71,  63])</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[23]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Location'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[23]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Kentucky&#39;, &#39;Maine&#39;, &#39;Massachusetts&#39;, &#39;Rhode Island&#39;, &#39;Oregon&#39;,
           &#39;Wyoming&#39;, &#39;Montana&#39;, &#39;Louisiana&#39;, &#39;West Virginia&#39;, &#39;Missouri&#39;,
           &#39;Arkansas&#39;, &#39;Hawaii&#39;, &#39;Delaware&#39;, &#39;New Hampshire&#39;, &#39;New York&#39;,
           &#39;Alabama&#39;, &#39;Mississippi&#39;, &#39;North Carolina&#39;, &#39;California&#39;,
           &#39;Oklahoma&#39;, &#39;Florida&#39;, &#39;Texas&#39;, &#39;Nevada&#39;, &#39;Kansas&#39;, &#39;Colorado&#39;,
           &#39;North Dakota&#39;, &#39;Illinois&#39;, &#39;Indiana&#39;, &#39;Arizona&#39;, &#39;Alaska&#39;,
           &#39;Tennessee&#39;, &#39;Ohio&#39;, &#39;New Jersey&#39;, &#39;Maryland&#39;, &#39;Vermont&#39;,
           &#39;New Mexico&#39;, &#39;South Carolina&#39;, &#39;Idaho&#39;, &#39;Pennsylvania&#39;,
           &#39;Connecticut&#39;, &#39;Utah&#39;, &#39;Virginia&#39;, &#39;Georgia&#39;, &#39;Nebraska&#39;, &#39;Iowa&#39;,
           &#39;South Dakota&#39;, &#39;Minnesota&#39;, &#39;Washington&#39;, &#39;Wisconsin&#39;, &#39;Michigan&#39;],
          dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Size'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[&nbsp;]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;L&#39;, &#39;S&#39;, &#39;M&#39;, &#39;XL&#39;], dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Color'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[&nbsp;]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Gray&#39;, &#39;Maroon&#39;, &#39;Turquoise&#39;, &#39;White&#39;, &#39;Charcoal&#39;, &#39;Silver&#39;,
           &#39;Pink&#39;, &#39;Purple&#39;, &#39;Olive&#39;, &#39;Gold&#39;, &#39;Violet&#39;, &#39;Teal&#39;, &#39;Lavender&#39;,
           &#39;Black&#39;, &#39;Green&#39;, &#39;Peach&#39;, &#39;Red&#39;, &#39;Cyan&#39;, &#39;Brown&#39;, &#39;Beige&#39;,
           &#39;Orange&#39;, &#39;Indigo&#39;, &#39;Yellow&#39;, &#39;Magenta&#39;, &#39;Blue&#39;], dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Season'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[&nbsp;]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Winter&#39;, &#39;Spring&#39;, &#39;Summer&#39;, &#39;Fall&#39;], dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Review Rating'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[&nbsp;]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([3.1, 3.5, 2.7, 2.9, 3.2, 2.6, 4.8, 4.1, 4.9, 4.5, 4.7, 2.8, 4.6,
           3.3, 4.4, 3.6, 5. , 4. , 3.7, 4.2, 3.9, 3. , 3.8, 3.4, 4.3, 2.5])</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Subscription Status'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[&nbsp;]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Yes&#39;, &#39;No&#39;], dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[15]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Shipping Type'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[15]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Express&#39;, &#39;Free Shipping&#39;, &#39;Next Day Air&#39;, &#39;Standard&#39;,
           &#39;2-Day Shipping&#39;, &#39;Store Pickup&#39;], dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[16]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Discount Applied'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[16]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Yes&#39;, &#39;No&#39;], dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[17]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Promo Code Used'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[17]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Yes&#39;, &#39;No&#39;], dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[18]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Previous Purchases'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[18]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([14,  2, 23, 49, 31, 19,  8,  4, 26, 10, 37, 34, 44, 36, 17, 46, 50,
           22, 32, 40, 16, 13,  7, 41, 45, 38, 48, 18, 15, 25, 39, 35, 29, 21,
           43,  3,  5, 24, 42, 47, 28, 20, 33,  1,  9, 12, 27, 11, 30,  6])</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[20]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">data</span><span class="p">[</span><span class="s1">'Frequency of Purchases'</span><span class="p">]</span><span class="o">.</span><span class="n">unique</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[20]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>array([&#39;Fortnightly&#39;, &#39;Weekly&#39;, &#39;Annually&#39;, &#39;Quarterly&#39;, &#39;Bi-Weekly&#39;,
           &#39;Monthly&#39;, &#39;Every 3 Months&#39;], dtype=object)</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h3 id="Calculando-su-mediana,-media-y-moda">Calculando su mediana, media y moda<a class="anchor-link" href="#Calculando-su-mediana,-media-y-moda">&#182;</a></h3>
    </div>
    </div>
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[25]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la media</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Age'</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[25]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>44.06846153846154</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[26]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la mediana</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Age'</span><span class="p">]</span><span class="o">.</span><span class="n">median</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[26]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>44.0</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[27]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la moda</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Age'</span><span class="p">]</span><span class="o">.</span><span class="n">mode</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[27]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>0    69
    Name: Age, dtype: int64</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[28]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la media</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Purchase Amount (USD)'</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[28]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>59.76435897435898</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[29]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la mediana</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Purchase Amount (USD)'</span><span class="p">]</span><span class="o">.</span><span class="n">median</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[29]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>60.0</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[30]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la moda</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Purchase Amount (USD)'</span><span class="p">]</span><span class="o">.</span><span class="n">mode</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[30]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>0    32
    1    36
    2    94
    Name: Purchase Amount (USD), dtype: int64</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[32]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la media</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Review Rating'</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[32]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>3.7499487179487176</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[33]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la mediana</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Review Rating'</span><span class="p">]</span><span class="o">.</span><span class="n">median</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[33]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>3.7</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[31]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la moda</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Review Rating'</span><span class="p">]</span><span class="o">.</span><span class="n">mode</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[31]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>0    3.4
    Name: Review Rating, dtype: float64</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[34]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la media</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Previous Purchases'</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[34]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>25.35153846153846</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[35]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la mediana</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Previous Purchases'</span><span class="p">]</span><span class="o">.</span><span class="n">median</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[35]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>25.0</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[36]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se calcula la moda</span>
    <span class="n">data</span><span class="p">[</span><span class="s1">'Previous Purchases'</span><span class="p">]</span><span class="o">.</span><span class="n">mode</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[36]:</div>
    
    
    
    
    <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
    <pre>0    31
    Name: Previous Purchases, dtype: int64</pre>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h3 id="Copia-del-dataframe-para-analisis-de-datos-atipicos">Copia del dataframe para analisis de datos atipicos<a class="anchor-link" href="#Copia-del-dataframe-para-analisis-de-datos-atipicos">&#182;</a></h3>
    </div>
    </div>
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[46]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#se hace la copia de la data y se pasaa un dataframe</span>
    <span class="n">c_data</span><span class="o">=</span><span class="n">data</span><span class="o">.</span><span class="n">copy</span><span class="p">()</span>
    
    <span class="n">c_data</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[46]:</div>
    
    
    
    <div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
    
      <div id="df-78a2c806-184b-441c-bbff-1ffa57d9ac83" class="colab-df-container">
        <div>
    <style scoped>
        .dataframe tbody tr th:only-of-type {
            vertical-align: middle;
        }
    
        .dataframe tbody tr th {
            vertical-align: top;
        }
    
        .dataframe thead th {
            text-align: right;
        }
    </style>
    <table border="1" class="dataframe">
      <thead>
        <tr style="text-align: right;">
          <th></th>
          <th>Customer ID</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Item Purchased</th>
          <th>Category</th>
          <th>Purchase Amount (USD)</th>
          <th>Location</th>
          <th>Size</th>
          <th>Color</th>
          <th>Season</th>
          <th>Review Rating</th>
          <th>Subscription Status</th>
          <th>Shipping Type</th>
          <th>Discount Applied</th>
          <th>Promo Code Used</th>
          <th>Previous Purchases</th>
          <th>Payment Method</th>
          <th>Frequency of Purchases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>0</th>
          <td>1</td>
          <td>55</td>
          <td>Male</td>
          <td>Blouse</td>
          <td>Clothing</td>
          <td>53</td>
          <td>Kentucky</td>
          <td>L</td>
          <td>Gray</td>
          <td>Winter</td>
          <td>3.1</td>
          <td>Yes</td>
          <td>Express</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>14</td>
          <td>Venmo</td>
          <td>Fortnightly</td>
        </tr>
        <tr>
          <th>1</th>
          <td>2</td>
          <td>19</td>
          <td>Male</td>
          <td>Sweater</td>
          <td>Clothing</td>
          <td>64</td>
          <td>Maine</td>
          <td>L</td>
          <td>Maroon</td>
          <td>Winter</td>
          <td>3.1</td>
          <td>Yes</td>
          <td>Express</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>2</td>
          <td>Cash</td>
          <td>Fortnightly</td>
        </tr>
        <tr>
          <th>2</th>
          <td>3</td>
          <td>50</td>
          <td>Male</td>
          <td>Jeans</td>
          <td>Clothing</td>
          <td>73</td>
          <td>Massachusetts</td>
          <td>S</td>
          <td>Maroon</td>
          <td>Spring</td>
          <td>3.1</td>
          <td>Yes</td>
          <td>Free Shipping</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>23</td>
          <td>Credit Card</td>
          <td>Weekly</td>
        </tr>
        <tr>
          <th>3</th>
          <td>4</td>
          <td>21</td>
          <td>Male</td>
          <td>Sandals</td>
          <td>Footwear</td>
          <td>90</td>
          <td>Rhode Island</td>
          <td>M</td>
          <td>Maroon</td>
          <td>Spring</td>
          <td>3.5</td>
          <td>Yes</td>
          <td>Next Day Air</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>49</td>
          <td>PayPal</td>
          <td>Weekly</td>
        </tr>
        <tr>
          <th>4</th>
          <td>5</td>
          <td>45</td>
          <td>Male</td>
          <td>Blouse</td>
          <td>Clothing</td>
          <td>49</td>
          <td>Oregon</td>
          <td>M</td>
          <td>Turquoise</td>
          <td>Spring</td>
          <td>2.7</td>
          <td>Yes</td>
          <td>Free Shipping</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>31</td>
          <td>PayPal</td>
          <td>Annually</td>
        </tr>
      </tbody>
    </table>
    </div>
        <div class="colab-df-buttons">
    
      <div class="colab-df-container">
        <button class="colab-df-convert" onclick="convertToInteractive('df-78a2c806-184b-441c-bbff-1ffa57d9ac83')"
                title="Convert this dataframe to an interactive table."
                style="display:none;">
    
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960">
        <path d="M120-120v-720h720v720H120Zm60-500h600v-160H180v160Zm220 220h160v-160H400v160Zm0 220h160v-160H400v160ZM180-400h160v-160H180v160Zm440 0h160v-160H620v160ZM180-180h160v-160H180v160Zm440 0h160v-160H620v160Z"/>
      </svg>
        </button>
    
      <style>
        .colab-df-container {
          display:flex;
          gap: 12px;
        }
    
        .colab-df-convert {
          background-color: #E8F0FE;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: none;
          fill: #1967D2;
          height: 32px;
          padding: 0 0 0 0;
          width: 32px;
        }
    
        .colab-df-convert:hover {
          background-color: #E2EBFA;
          box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15);
          fill: #174EA6;
        }
    
        .colab-df-buttons div {
          margin-bottom: 4px;
        }
    
        [theme=dark] .colab-df-convert {
          background-color: #3B4455;
          fill: #D2E3FC;
        }
    
        [theme=dark] .colab-df-convert:hover {
          background-color: #434B5C;
          box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
          filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
          fill: #FFFFFF;
        }
      </style>
    
        <script>
          const buttonEl =
            document.querySelector('#df-78a2c806-184b-441c-bbff-1ffa57d9ac83 button.colab-df-convert');
          buttonEl.style.display =
            google.colab.kernel.accessAllowed ? 'block' : 'none';
    
          async function convertToInteractive(key) {
            const element = document.querySelector('#df-78a2c806-184b-441c-bbff-1ffa57d9ac83');
            const dataTable =
              await google.colab.kernel.invokeFunction('convertToInteractive',
                                                        [key], {});
            if (!dataTable) return;
    
            const docLinkHtml = 'Like what you see? Visit the ' +
              '<a target="_blank" href=https://colab.research.google.com/notebooks/data_table.ipynb>data table notebook</a>'
              + ' to learn more about interactive tables.';
            element.innerHTML = '';
            dataTable['output_type'] = 'display_data';
            await google.colab.output.renderOutput(dataTable, element);
            const docLink = document.createElement('div');
            docLink.innerHTML = docLinkHtml;
            element.appendChild(docLink);
          }
        </script>
      </div>
    
    
    <div id="df-5f475f9a-b410-4508-b7a3-6a1c3f835584">
      <button class="colab-df-quickchart" onclick="quickchart('df-5f475f9a-b410-4508-b7a3-6a1c3f835584')"
                title="Suggest charts"
                style="display:none;">
    
    <svg xmlns="http://www.w3.org/2000/svg" height="24px"viewBox="0 0 24 24"
         width="24px">
        <g>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </g>
    </svg>
      </button>
    
    <style>
      .colab-df-quickchart {
          --bg-color: #E8F0FE;
          --fill-color: #1967D2;
          --hover-bg-color: #E2EBFA;
          --hover-fill-color: #174EA6;
          --disabled-fill-color: #AAA;
          --disabled-bg-color: #DDD;
      }
    
      [theme=dark] .colab-df-quickchart {
          --bg-color: #3B4455;
          --fill-color: #D2E3FC;
          --hover-bg-color: #434B5C;
          --hover-fill-color: #FFFFFF;
          --disabled-bg-color: #3B4455;
          --disabled-fill-color: #666;
      }
    
      .colab-df-quickchart {
        background-color: var(--bg-color);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        fill: var(--fill-color);
        height: 32px;
        padding: 0;
        width: 32px;
      }
    
      .colab-df-quickchart:hover {
        background-color: var(--hover-bg-color);
        box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
        fill: var(--button-hover-fill-color);
      }
    
      .colab-df-quickchart-complete:disabled,
      .colab-df-quickchart-complete:disabled:hover {
        background-color: var(--disabled-bg-color);
        fill: var(--disabled-fill-color);
        box-shadow: none;
      }
    
      .colab-df-spinner {
        border: 2px solid var(--fill-color);
        border-color: transparent;
        border-bottom-color: var(--fill-color);
        animation:
          spin 1s steps(1) infinite;
      }
    
      @keyframes spin {
        0% {
          border-color: transparent;
          border-bottom-color: var(--fill-color);
          border-left-color: var(--fill-color);
        }
        20% {
          border-color: transparent;
          border-left-color: var(--fill-color);
          border-top-color: var(--fill-color);
        }
        30% {
          border-color: transparent;
          border-left-color: var(--fill-color);
          border-top-color: var(--fill-color);
          border-right-color: var(--fill-color);
        }
        40% {
          border-color: transparent;
          border-right-color: var(--fill-color);
          border-top-color: var(--fill-color);
        }
        60% {
          border-color: transparent;
          border-right-color: var(--fill-color);
        }
        80% {
          border-color: transparent;
          border-right-color: var(--fill-color);
          border-bottom-color: var(--fill-color);
        }
        90% {
          border-color: transparent;
          border-bottom-color: var(--fill-color);
        }
      }
    </style>
    
      <script>
        async function quickchart(key) {
          const quickchartButtonEl =
            document.querySelector('#' + key + ' button');
          quickchartButtonEl.disabled = true;  // To prevent multiple clicks.
          quickchartButtonEl.classList.add('colab-df-spinner');
          try {
            const charts = await google.colab.kernel.invokeFunction(
                'suggestCharts', [key], {});
          } catch (error) {
            console.error('Error during call to suggestCharts:', error);
          }
          quickchartButtonEl.classList.remove('colab-df-spinner');
          quickchartButtonEl.classList.add('colab-df-quickchart-complete');
        }
        (() => {
          let quickchartButtonEl =
            document.querySelector('#df-5f475f9a-b410-4508-b7a3-6a1c3f835584 button');
          quickchartButtonEl.style.display =
            google.colab.kernel.accessAllowed ? 'block' : 'none';
        })();
      </script>
    </div>
        </div>
      </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[38]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Describimos los valores numericos</span>
    <span class="n">c_data</span><span class="o">.</span><span class="n">describe</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[38]:</div>
    
    
    
    <div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
    
      <div id="df-3db2eee0-3728-48e7-ab97-be040faa77d1" class="colab-df-container">
        <div>
    <style scoped>
        .dataframe tbody tr th:only-of-type {
            vertical-align: middle;
        }
    
        .dataframe tbody tr th {
            vertical-align: top;
        }
    
        .dataframe thead th {
            text-align: right;
        }
    </style>
    <table border="1" class="dataframe">
      <thead>
        <tr style="text-align: right;">
          <th></th>
          <th>Customer ID</th>
          <th>Age</th>
          <th>Purchase Amount (USD)</th>
          <th>Review Rating</th>
          <th>Previous Purchases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>count</th>
          <td>3900.000000</td>
          <td>3900.000000</td>
          <td>3900.000000</td>
          <td>3900.000000</td>
          <td>3900.000000</td>
        </tr>
        <tr>
          <th>mean</th>
          <td>1950.500000</td>
          <td>44.068462</td>
          <td>59.764359</td>
          <td>3.749949</td>
          <td>25.351538</td>
        </tr>
        <tr>
          <th>std</th>
          <td>1125.977353</td>
          <td>15.207589</td>
          <td>23.685392</td>
          <td>0.716223</td>
          <td>14.447125</td>
        </tr>
        <tr>
          <th>min</th>
          <td>1.000000</td>
          <td>18.000000</td>
          <td>20.000000</td>
          <td>2.500000</td>
          <td>1.000000</td>
        </tr>
        <tr>
          <th>25%</th>
          <td>975.750000</td>
          <td>31.000000</td>
          <td>39.000000</td>
          <td>3.100000</td>
          <td>13.000000</td>
        </tr>
        <tr>
          <th>50%</th>
          <td>1950.500000</td>
          <td>44.000000</td>
          <td>60.000000</td>
          <td>3.700000</td>
          <td>25.000000</td>
        </tr>
        <tr>
          <th>75%</th>
          <td>2925.250000</td>
          <td>57.000000</td>
          <td>81.000000</td>
          <td>4.400000</td>
          <td>38.000000</td>
        </tr>
        <tr>
          <th>max</th>
          <td>3900.000000</td>
          <td>70.000000</td>
          <td>100.000000</td>
          <td>5.000000</td>
          <td>50.000000</td>
        </tr>
      </tbody>
    </table>
    </div>
        <div class="colab-df-buttons">
    
      <div class="colab-df-container">
        <button class="colab-df-convert" onclick="convertToInteractive('df-3db2eee0-3728-48e7-ab97-be040faa77d1')"
                title="Convert this dataframe to an interactive table."
                style="display:none;">
    
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960">
        <path d="M120-120v-720h720v720H120Zm60-500h600v-160H180v160Zm220 220h160v-160H400v160Zm0 220h160v-160H400v160ZM180-400h160v-160H180v160Zm440 0h160v-160H620v160ZM180-180h160v-160H180v160Zm440 0h160v-160H620v160Z"/>
      </svg>
        </button>
    
      <style>
        .colab-df-container {
          display:flex;
          gap: 12px;
        }
    
        .colab-df-convert {
          background-color: #E8F0FE;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: none;
          fill: #1967D2;
          height: 32px;
          padding: 0 0 0 0;
          width: 32px;
        }
    
        .colab-df-convert:hover {
          background-color: #E2EBFA;
          box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15);
          fill: #174EA6;
        }
    
        .colab-df-buttons div {
          margin-bottom: 4px;
        }
    
        [theme=dark] .colab-df-convert {
          background-color: #3B4455;
          fill: #D2E3FC;
        }
    
        [theme=dark] .colab-df-convert:hover {
          background-color: #434B5C;
          box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
          filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
          fill: #FFFFFF;
        }
      </style>
    
        <script>
          const buttonEl =
            document.querySelector('#df-3db2eee0-3728-48e7-ab97-be040faa77d1 button.colab-df-convert');
          buttonEl.style.display =
            google.colab.kernel.accessAllowed ? 'block' : 'none';
    
          async function convertToInteractive(key) {
            const element = document.querySelector('#df-3db2eee0-3728-48e7-ab97-be040faa77d1');
            const dataTable =
              await google.colab.kernel.invokeFunction('convertToInteractive',
                                                        [key], {});
            if (!dataTable) return;
    
            const docLinkHtml = 'Like what you see? Visit the ' +
              '<a target="_blank" href=https://colab.research.google.com/notebooks/data_table.ipynb>data table notebook</a>'
              + ' to learn more about interactive tables.';
            element.innerHTML = '';
            dataTable['output_type'] = 'display_data';
            await google.colab.output.renderOutput(dataTable, element);
            const docLink = document.createElement('div');
            docLink.innerHTML = docLinkHtml;
            element.appendChild(docLink);
          }
        </script>
      </div>
    
    
    <div id="df-fa70787d-9ab7-40d0-bcc9-95c5a119f13a">
      <button class="colab-df-quickchart" onclick="quickchart('df-fa70787d-9ab7-40d0-bcc9-95c5a119f13a')"
                title="Suggest charts"
                style="display:none;">
    
    <svg xmlns="http://www.w3.org/2000/svg" height="24px"viewBox="0 0 24 24"
         width="24px">
        <g>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </g>
    </svg>
      </button>
    
    <style>
      .colab-df-quickchart {
          --bg-color: #E8F0FE;
          --fill-color: #1967D2;
          --hover-bg-color: #E2EBFA;
          --hover-fill-color: #174EA6;
          --disabled-fill-color: #AAA;
          --disabled-bg-color: #DDD;
      }
    
      [theme=dark] .colab-df-quickchart {
          --bg-color: #3B4455;
          --fill-color: #D2E3FC;
          --hover-bg-color: #434B5C;
          --hover-fill-color: #FFFFFF;
          --disabled-bg-color: #3B4455;
          --disabled-fill-color: #666;
      }
    
      .colab-df-quickchart {
        background-color: var(--bg-color);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        fill: var(--fill-color);
        height: 32px;
        padding: 0;
        width: 32px;
      }
    
      .colab-df-quickchart:hover {
        background-color: var(--hover-bg-color);
        box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
        fill: var(--button-hover-fill-color);
      }
    
      .colab-df-quickchart-complete:disabled,
      .colab-df-quickchart-complete:disabled:hover {
        background-color: var(--disabled-bg-color);
        fill: var(--disabled-fill-color);
        box-shadow: none;
      }
    
      .colab-df-spinner {
        border: 2px solid var(--fill-color);
        border-color: transparent;
        border-bottom-color: var(--fill-color);
        animation:
          spin 1s steps(1) infinite;
      }
    
      @keyframes spin {
        0% {
          border-color: transparent;
          border-bottom-color: var(--fill-color);
          border-left-color: var(--fill-color);
        }
        20% {
          border-color: transparent;
          border-left-color: var(--fill-color);
          border-top-color: var(--fill-color);
        }
        30% {
          border-color: transparent;
          border-left-color: var(--fill-color);
          border-top-color: var(--fill-color);
          border-right-color: var(--fill-color);
        }
        40% {
          border-color: transparent;
          border-right-color: var(--fill-color);
          border-top-color: var(--fill-color);
        }
        60% {
          border-color: transparent;
          border-right-color: var(--fill-color);
        }
        80% {
          border-color: transparent;
          border-right-color: var(--fill-color);
          border-bottom-color: var(--fill-color);
        }
        90% {
          border-color: transparent;
          border-bottom-color: var(--fill-color);
        }
      }
    </style>
    
      <script>
        async function quickchart(key) {
          const quickchartButtonEl =
            document.querySelector('#' + key + ' button');
          quickchartButtonEl.disabled = true;  // To prevent multiple clicks.
          quickchartButtonEl.classList.add('colab-df-spinner');
          try {
            const charts = await google.colab.kernel.invokeFunction(
                'suggestCharts', [key], {});
          } catch (error) {
            console.error('Error during call to suggestCharts:', error);
          }
          quickchartButtonEl.classList.remove('colab-df-spinner');
          quickchartButtonEl.classList.add('colab-df-quickchart-complete');
        }
        (() => {
          let quickchartButtonEl =
            document.querySelector('#df-fa70787d-9ab7-40d0-bcc9-95c5a119f13a button');
          quickchartButtonEl.style.display =
            google.colab.kernel.accessAllowed ? 'block' : 'none';
        })();
      </script>
    </div>
        </div>
      </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h3 id="Diagrama-de-bigotes">Diagrama de bigotes<a class="anchor-link" href="#Diagrama-de-bigotes">&#182;</a></h3>
    </div>
    </div>
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[40]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Diagrama de bigotes para verificar si hay Datos atipicos</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">boxplot</span><span class="p">(</span><span class="n">c_data</span><span class="p">[[</span><span class="s1">'Age'</span><span class="p">]])</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,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
    "
    class="
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[41]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Diagrama de bigotes para verificar si hay Datos atipicos</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">boxplot</span><span class="p">(</span><span class="n">c_data</span><span class="p">[[</span><span class="s1">'Purchase Amount (USD)'</span><span class="p">]])</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAigAAAGdCAYAAAA44ojeAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjcuMSwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/bCgiHAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAfvUlEQVR4nO3dfXST9f3/8VdqaVqgSW0nSSMtVEVTb9C1eiDC3BE7O6YcGD1ueOAMFcXNgoOqzO4ACgOrnE1Yd6BMD6egUD1yHN3wHOFgPZbDsa1QdMcbbjew1ZJwNm3SFhoqze8Pj/n+ouBEr5hPyvNxznUk13Xl0zd/aJ5evZLYIpFIRAAAAAZJSfQAAAAAX0agAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADBOaqIH+Db6+/vV0dGhzMxM2Wy2RI8DAAC+gUgkoq6uLnk8HqWkfP01kqQMlI6ODuXl5SV6DAAA8C20t7dr+PDhX3tOUgZKZmampM//gg6HI8HTAACAbyIUCikvLy/6Ov51kjJQvvi1jsPhIFAAAEgy3+T2DG6SBQAAxiFQAACAcQgUAABgHAIFAAAYh0ABAADGIVAAAIBxCBQAAGAcAgUAABiHQAEAAMY550DZuXOnJk2aJI/HI5vNpvr6+pjjkUhEixcvVm5urjIyMlRSUqJDhw7FnPPJJ59o+vTpcjgcysrK0qxZs9Td3f2d/iIAAGDgOOdA6enp0bXXXqvVq1ef8fiKFStUXV2ttWvXqqWlRUOGDFFpaal6e3uj50yfPl3vv/++duzYoVdeeUU7d+7U7Nmzv/3fAgAADCi2SCQS+dZPttm0ZcsWTZkyRdLnV088Ho8eeughPfzww5KkYDAol8ul9evXa9q0adq3b5+uvPJK7d69W9dff70kadu2bfrZz36mjz76SB6P53/+3FAoJKfTqWAwyHfxAACQJM7l9dvSLws8cuSI/H6/SkpKovucTqfGjBmjpqYmTZs2TU1NTcrKyorGiSSVlJQoJSVFLS0t+vnPf/6VdcPhsMLhcPRxKBSycmwA39GJEye0f/9+S9Y6efKkjh49qpEjRyojI8OSNb1erwYPHmzJWgC+H5YGit/vlyS5XK6Y/S6XK3rM7/dr2LBhsUOkpio7Ozt6zpdVVVVpyZIlVo4KwEL79+9XcXFxosc4q9bWVhUVFSV6DADnwNJAiZfKykpVVFREH4dCIeXl5SVwIgD/P6/Xq9bWVkvW2rdvn2bMmKGNGzeqsLDQkjW9Xq8l6wD4/lgaKG63W5IUCASUm5sb3R8IBHTddddFzzl+/HjM8z777DN98skn0ed/md1ul91ut3JUABYaPHiw5VcoCgsLueoBnMcs/RyUgoICud1uNTQ0RPeFQiG1tLTI5/NJknw+nzo7O2P+b+v1119Xf3+/xowZY+U4AAAgSZ3zFZTu7m4dPnw4+vjIkSN65513lJ2drfz8fM2bN0/Lli3TqFGjVFBQoEWLFsnj8UTf6VNYWKif/vSnuu+++7R27Vr19fVpzpw5mjZt2jd6Bw8AABj4zjlQ9uzZo5tvvjn6+It7Q2bOnKn169drwYIF6unp0ezZs9XZ2anx48dr27ZtSk9Pjz5n06ZNmjNnjm655RalpKSorKxM1dXVFvx1AADAQPCdPgclUfgcFGDg2rt3r4qLi3nnDTAAncvrN9/FAwAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4cQmUrq4uzZs3TyNGjFBGRoZuvPFG7d69O3o8Eolo8eLFys3NVUZGhkpKSnTo0KF4jAIAAJJQXALl3nvv1Y4dO/T888/r3Xff1a233qqSkhJ9/PHHkqQVK1aourpaa9euVUtLi4YMGaLS0lL19vbGYxwAAJBkLA+UkydP6uWXX9aKFSt000036bLLLtPjjz+uyy67TDU1NYpEIlq1apUWLlyoyZMna/To0XruuefU0dGh+vp6q8cBAABJyPJA+eyzz3T69Gmlp6fH7M/IyNCuXbt05MgR+f1+lZSURI85nU6NGTNGTU1NZ1wzHA4rFArFbAAAYOCyPFAyMzPl8/n0hz/8QR0dHTp9+rQ2btyopqYmHTt2TH6/X5LkcrlinudyuaLHvqyqqkpOpzO65eXlWT02AAAwSFzuQXn++ecViUR08cUXy263q7q6WnfeeadSUr7dj6usrFQwGIxu7e3tFk8MAABMEpdAufTSS9XY2Kju7m61t7frrbfeUl9fny655BK53W5JUiAQiHlOIBCIHvsyu90uh8MRswEAgIErrp+DMmTIEOXm5urTTz/V9u3bNXnyZBUUFMjtdquhoSF6XigUUktLi3w+XzzHAQAASSI1Hotu375dkUhEV1xxhQ4fPqxHHnlEXq9Xd999t2w2m+bNm6dly5Zp1KhRKigo0KJFi+TxeDRlypR4jAMAAJJMXAIlGAyqsrJSH330kbKzs1VWVqbly5dr0KBBkqQFCxaop6dHs2fPVmdnp8aPH69t27Z95Z0/AADg/GSLRCKRRA9xrkKhkJxOp4LBIPejAAPM3r17VVxcrNbWVhUVFSV6HAAWOpfXb76LBwAAGIdAAQAAxiFQAACAcQgUAABgHAIFAAAYh0ABAADGIVAAAIBxCBQAAGAcAgUAABiHQAEAAMYhUAAAgHEIFAAAYBwCBQAAGIdAAQAAxiFQAACAcQgUAABgHAIFAAAYh0ABAADGIVAAAIBxCBQAAGAcAgUAABiHQAEAAMYhUAAAgHEIFAAAYBwCBQAAGIdAAQAAxiFQAACAcQgUAABgHAIFAAAYh0ABAADGSU30AAAS69ChQ+rq6kr0GFH79u2L+acpMjMzNWrUqESPAZw3LA+U06dP6/HHH9fGjRvl9/vl8Xh01113aeHChbLZbJKkSCSixx57TM8++6w6Ozs1btw41dTU8C8/8D07dOiQLr/88kSPcUYzZsxI9AhfcfDgQf47BXxPLA+Up556SjU1NdqwYYOuuuoq7dmzR3fffbecTqcefPBBSdKKFStUXV2tDRs2qKCgQIsWLVJpaak++OADpaenWz0SgLP44srJxo0bVVhYmOBpPnfy5EkdPXpUI0eOVEZGRqLHkfT51ZwZM2YYdaUJGOgsD5Q333xTkydP1m233SZJGjlypF544QW99dZbkj6/erJq1SotXLhQkydPliQ999xzcrlcqq+v17Rp06weCcD/UFhYqKKiokSPETVu3LhEjwAgwSy/SfbGG29UQ0ODDh48KEn65z//qV27dmnixImSpCNHjsjv96ukpCT6HKfTqTFjxqipqemMa4bDYYVCoZgNAAAMXJZfQXn00UcVCoXk9Xp1wQUX6PTp01q+fLmmT58uSfL7/ZIkl8sV8zyXyxU99mVVVVVasmSJ1aMCAABDWX4F5aWXXtKmTZtUV1envXv3asOGDfrjH/+oDRs2fOs1KysrFQwGo1t7e7uFEwMAANNYfgXlkUce0aOPPhq9l+Saa67Rhx9+qKqqKs2cOVNut1uSFAgElJubG31eIBDQddddd8Y17Xa77Ha71aMCAABDWX4F5cSJE0pJiV32ggsuUH9/vySpoKBAbrdbDQ0N0eOhUEgtLS3y+XxWjwMAAJKQ5VdQJk2apOXLlys/P19XXXWV3n77bT399NO65557JEk2m03z5s3TsmXLNGrUqOjbjD0ej6ZMmWL1OAAAIAlZHih/+ctftGjRIj3wwAM6fvy4PB6P7r//fi1evDh6zoIFC9TT06PZs2ers7NT48eP17Zt2/gMFAAAICkOgZKZmalVq1Zp1apVZz3HZrNp6dKlWrp0qdU/HgAADAB8WSAAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA41geKCNHjpTNZvvKVl5eLknq7e1VeXm5cnJyNHToUJWVlSkQCFg9BgAASGKWB8ru3bt17Nix6LZjxw5J0h133CFJmj9/vrZu3arNmzersbFRHR0dmjp1qtVjAACAJJZq9YIXXXRRzOMnn3xSl156qX784x8rGAxq3bp1qqur04QJEyRJtbW1KiwsVHNzs8aOHWv1OAAAIAnF9R6UU6dOaePGjbrnnntks9nU2tqqvr4+lZSURM/xer3Kz89XU1PTWdcJh8MKhUIxGwAAGLjiGij19fXq7OzUXXfdJUny+/1KS0tTVlZWzHkul0t+v/+s61RVVcnpdEa3vLy8OE4NAAASLa6Bsm7dOk2cOFEej+c7rVNZWalgMBjd2tvbLZoQAACYyPJ7UL7w4Ycf6rXXXtPf/va36D63261Tp06ps7Mz5ipKIBCQ2+0+61p2u112uz1eowIAAMPE7QpKbW2thg0bpttuuy26r7i4WIMGDVJDQ0N034EDB9TW1iafzxevUQAAQJKJyxWU/v5+1dbWaubMmUpN/b8f4XQ6NWvWLFVUVCg7O1sOh0Nz586Vz+fjHTwAACAqLoHy2muvqa2tTffcc89Xjq1cuVIpKSkqKytTOBxWaWmp1qxZE48xAABAkopLoNx6662KRCJnPJaenq7Vq1dr9erV8fjRAABgAOC7eAAAgHEIFAAAYBwCBQAAGIdAAQAAxiFQAACAcQgUAABgHAIFAAAYh0ABAADGIVAAAIBxCBQAAGAcAgUAABiHQAEAAMYhUAAAgHEIFAAAYBwCBQAAGIdAAQAAxiFQAACAcQgUAABgHAIFAAAYh0ABAADGIVAAAIBxCBQAAGAcAgUAABiHQAEAAMYhUAAAgHEIFAAAYBwCBQAAGIdAAQAAxiFQAACAcQgUAABgHAIFAAAYJy6B8vHHH2vGjBnKyclRRkaGrrnmGu3Zsyd6PBKJaPHixcrNzVVGRoZKSkp06NCheIwCAACSkOWB8umnn2rcuHEaNGiQXn31VX3wwQf605/+pAsvvDB6zooVK1RdXa21a9eqpaVFQ4YMUWlpqXp7e60eBwAAJKFUqxd86qmnlJeXp9ra2ui+goKC6J8jkYhWrVqlhQsXavLkyZKk5557Ti6XS/X19Zo2bZrVIwEAgCRjeaD84x//UGlpqe644w41Njbq4osv1gMPPKD77rtPknTkyBH5/X6VlJREn+N0OjVmzBg1NTWdMVDC4bDC4XD0cSgUsnps4Lxk+6xXP3SnKKPzoNTBLWlnk9F5UD90p8j2GVd5ge+L5YHy73//WzU1NaqoqNDvf/977d69Ww8++KDS0tI0c+ZM+f1+SZLL5Yp5nsvlih77sqqqKi1ZssTqUYHzXnp3m/beP1Taeb+0M9HTmKtQ0t77h2pfd5ukGxM9DnBesDxQ+vv7df311+uJJ56QJP3whz/Ue++9p7Vr12rmzJnfas3KykpVVFREH4dCIeXl5VkyL3A+6x2ar6K/dmvTpk0q9HoTPY6x9u3fr+nTp2vdz/ITPQpw3rA8UHJzc3XllVfG7CssLNTLL78sSXK73ZKkQCCg3Nzc6DmBQEDXXXfdGde02+2y2+1Wjwqc9yKp6Xrb36+TWZdLnusSPY6xTvr79ba/X5HU9ESPApw3LP+l87hx43TgwIGYfQcPHtSIESMkfX7DrNvtVkNDQ/R4KBRSS0uLfD6f1eMAAIAkZPkVlPnz5+vGG2/UE088oV/84hd666239Mwzz+iZZ56RJNlsNs2bN0/Lli3TqFGjVFBQoEWLFsnj8WjKlClWjwMAAJKQ5YFyww03aMuWLaqsrNTSpUtVUFCgVatWafr06dFzFixYoJ6eHs2ePVudnZ0aP368tm3bpvR0Lp8CAIA4BIok3X777br99tvPetxms2np0qVaunRpPH48AABIcnzwAQAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjWB4ojz/+uGw2W8zm9Xqjx3t7e1VeXq6cnBwNHTpUZWVlCgQCVo8BAACSWFyuoFx11VU6duxYdNu1a1f02Pz587V161Zt3rxZjY2N6ujo0NSpU+MxBgAASFKpcVk0NVVut/sr+4PBoNatW6e6ujpNmDBBklRbW6vCwkI1Nzdr7Nix8RgHAAAkmbhcQTl06JA8Ho8uueQSTZ8+XW1tbZKk1tZW9fX1qaSkJHqu1+tVfn6+mpqazrpeOBxWKBSK2QAAwMBleaCMGTNG69ev17Zt21RTU6MjR47oRz/6kbq6uuT3+5WWlqasrKyY57hcLvn9/rOuWVVVJafTGd3y8vKsHhsAABjE8l/xTJw4Mfrn0aNHa8yYMRoxYoReeuklZWRkfKs1KysrVVFREX0cCoWIFAAABrC4v804KytLl19+uQ4fPiy3261Tp06ps7Mz5pxAIHDGe1a+YLfb5XA4YjYAADBwxT1Quru79a9//Uu5ubkqLi7WoEGD1NDQED1+4MABtbW1yefzxXsUAACQJCz/Fc/DDz+sSZMmacSIEero6NBjjz2mCy64QHfeeaecTqdmzZqliooKZWdny+FwaO7cufL5fLyDBwAARFkeKB999JHuvPNO/fe//9VFF12k8ePHq7m5WRdddJEkaeXKlUpJSVFZWZnC4bBKS0u1Zs0aq8cAAABJzPJAefHFF7/2eHp6ulavXq3Vq1db/aMBAMAAwXfxAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADBO3APlySeflM1m07x586L7ent7VV5erpycHA0dOlRlZWUKBALxHgUAACSJuAbK7t279de//lWjR4+O2T9//nxt3bpVmzdvVmNjozo6OjR16tR4jgIAAJJI3AKlu7tb06dP17PPPqsLL7wwuj8YDGrdunV6+umnNWHCBBUXF6u2tlZvvvmmmpub4zUOAABIInELlPLyct12220qKSmJ2d/a2qq+vr6Y/V6vV/n5+WpqajrjWuFwWKFQKGYDAAADV2o8Fn3xxRe1d+9e7d69+yvH/H6/0tLSlJWVFbPf5XLJ7/efcb2qqiotWbIkHqMCAAADWX4Fpb29Xb/97W+1adMmpaenW7JmZWWlgsFgdGtvb7dkXQAAYCbLA6W1tVXHjx9XUVGRUlNTlZqaqsbGRlVXVys1NVUul0unTp1SZ2dnzPMCgYDcbvcZ17Tb7XI4HDEbAAAYuCz/Fc8tt9yid999N2bf3XffLa/Xq9/97nfKy8vToEGD1NDQoLKyMknSgQMH1NbWJp/PZ/U4AAAgCVkeKJmZmbr66qtj9g0ZMkQ5OTnR/bNmzVJFRYWys7PlcDg0d+5c+Xw+jR071upxAHyNEydOSJL27t2b4En+z8mTJ3X06FGNHDlSGRkZiR5HkrRv375EjwCcd+Jyk+z/snLlSqWkpKisrEzhcFilpaVas2ZNIkYBzmv79++XJN13330JniQ5ZGZmJnoE4Lxhi0QikUQPca5CoZCcTqeCwSD3owDfwX/+8x/V19fL6/Vq8ODBiR5H0udXK2bMmKGNGzeqsLAw0eNEZWZmatSoUYkeA0hq5/L6nZArKADM8IMf/ED33ntvosc4o8LCQhUVFSV6DAAJwpcFAgAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4lgdKTU2NRo8eLYfDIYfDIZ/Pp1dffTV6vLe3V+Xl5crJydHQoUNVVlamQCBg9RgAACCJWR4ow4cP15NPPqnW1lbt2bNHEyZM0OTJk/X+++9LkubPn6+tW7dq8+bNamxsVEdHh6ZOnWr1GAAAIImlWr3gpEmTYh4vX75cNTU1am5u1vDhw7Vu3TrV1dVpwoQJkqTa2loVFhaqublZY8eOtXocAACQhOJ6D8rp06f14osvqqenRz6fT62trerr61NJSUn0HK/Xq/z8fDU1NZ11nXA4rFAoFLMBAICBKy6B8u6772ro0KGy2+369a9/rS1btujKK6+U3+9XWlqasrKyYs53uVzy+/1nXa+qqkpOpzO65eXlxWNsAABgiLgEyhVXXKF33nlHLS0t+s1vfqOZM2fqgw8++NbrVVZWKhgMRrf29nYLpwUAAKax/B4USUpLS9Nll10mSSouLtbu3bv15z//Wb/85S916tQpdXZ2xlxFCQQCcrvdZ13PbrfLbrfHY1QAAGCg7+VzUPr7+xUOh1VcXKxBgwapoaEheuzAgQNqa2uTz+f7PkYBAABJwPIrKJWVlZo4caLy8/PV1dWluro6vfHGG9q+fbucTqdmzZqliooKZWdny+FwaO7cufL5fLyDBwAARFkeKMePH9evfvUrHTt2TE6nU6NHj9b27dv1k5/8RJK0cuVKpaSkqKysTOFwWKWlpVqzZo3VYwAAgCRmi0QikUQPca5CoZCcTqeCwaAcDkeixwFgob1796q4uFitra0qKipK9DgALHQur998Fw8AADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADjECgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA41geKFVVVbrhhhuUmZmpYcOGacqUKTpw4EDMOb29vSovL1dOTo6GDh2qsrIyBQIBq0cBAABJyvJAaWxsVHl5uZqbm7Vjxw719fXp1ltvVU9PT/Sc+fPna+vWrdq8ebMaGxvV0dGhqVOnWj0KAABIUqlWL7ht27aYx+vXr9ewYcPU2tqqm266ScFgUOvWrVNdXZ0mTJggSaqtrVVhYaGam5s1duxYq0cCAABJxvJA+bJgMChJys7OliS1traqr69PJSUl0XO8Xq/y8/PV1NR0xkAJh8MKh8PRx6FQKM5TAzgXJ06c0P79+y1Za9++fTH/tILX69XgwYMtWw9A/MU1UPr7+zVv3jyNGzdOV199tSTJ7/crLS1NWVlZMee6XC75/f4zrlNVVaUlS5bEc1QA38H+/ftVXFxs6ZozZsywbK3W1lYVFRVZth6A+ItroJSXl+u9997Trl27vtM6lZWVqqioiD4OhULKy8v7ruMBsIjX61Vra6sla508eVJHjx7VyJEjlZGRYcmaXq/XknUAfH/iFihz5szRK6+8op07d2r48OHR/W63W6dOnVJnZ2fMVZRAICC3233Gtex2u+x2e7xGBfAdDR482NIrFOPGjbNsLQDJyfJ38UQiEc2ZM0dbtmzR66+/roKCgpjjxcXFGjRokBoaGqL7Dhw4oLa2Nvl8PqvHAQAAScjyKyjl5eWqq6vT3//+d2VmZkbvK3E6ncrIyJDT6dSsWbNUUVGh7OxsORwOzZ07Vz6fj3fwAAAASZItEolELF3QZjvj/traWt11112SPv+gtoceekgvvPCCwuGwSktLtWbNmrP+iufLQqGQnE6ngsGgHA6HVaMDAIA4OpfXb8sD5ftAoAAAkHzO5fWb7+IBAADGIVAAAIBxCBQAAGAcAgUAABiHQAEAAMYhUAAAgHEIFAAAYBwCBQAAGIdAAQAAxonbtxnH0xcffhsKhRI8CQAA+Ka+eN3+Jh9in5SB0tXVJUnKy8tL8CQAAOBcdXV1yel0fu05SfldPP39/ero6FBmZuZZv5wQQHIKhULKy8tTe3s737UFDDCRSERdXV3yeDxKSfn6u0ySMlAADFx8GSgAiZtkAQCAgQgUAABgHAIFgFHsdrsee+wx2e32RI8CIIG4BwUAABiHKygAAMA4BAoAADAOgQIAAIxDoAAAAOMQKACMsHPnTk2aNEkej0c2m0319fWJHglAAhEoAIzQ09Oja6+9VqtXr070KAAMkJRfFghg4Jk4caImTpyY6DEAGIIrKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOLyLB4ARuru7dfjw4ejjI0eO6J133lF2drby8/MTOBmARODbjAEY4Y033tDNN9/8lf0zZ87U+vXrv/+BACQUgQIAAIzDPSgAAMA4BAoAADAOgQIAAIxDoAAAAOMQKAAAwDgECgAAMA6BAgAAjEOgAAAA4xAoAADAOAQKAAAwDoECAACMQ6AAAADj/D+eD0eGY6QflwAAAABJRU5ErkJggg==
    "
    class="
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[42]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Diagrama de bigotes para verificar si hay Datos atipicos</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">boxplot</span><span class="p">(</span><span class="n">c_data</span><span class="p">[[</span><span class="s1">'Review Rating'</span><span class="p">]])</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiMAAAGdCAYAAADAAnMpAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjcuMSwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/bCgiHAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAYGklEQVR4nO3df2xV9d3A8c9FXAvadviLChRYAtIiorZbpLiNPVOnjDjYH2YhkLoFyDSYYJaZBWMy0WwlYcaQsDA0cyxBQuaimBiVEBckBjRQIAEEB8v4YaSQLNICssaH9vljWX06KXBpx4eW1ys5wXv6Pfd87l/37enpvYWOjo6OAABIMiB7AADgyiZGAIBUYgQASCVGAIBUYgQASCVGAIBUYgQASCVGAIBUA7MHuBDt7e3xySefRFlZWRQKhexxAIAL0NHRESdOnIhhw4bFgAHdX//oEzHyySefRFVVVfYYAMBFOHz4cIwYMaLbn/eJGCkrK4uIf72Y8vLy5GkAgAvR2toaVVVVne/j3ekTMfLvX82Ul5eLEQDoY853i4UbWAGAVGIEAEglRgCAVGIEAEglRgCAVGIEAEglRgCAVGIEAEglRgCAVEXFyNNPPx2FQqHLVl1dfc5jXnnllaiuro7S0tK47bbb4s033+zRwABA/1L0lZFbb701jhw50rm999573a7dtGlTzJw5M+bMmRPbt2+PGTNmxIwZM2LXrl09GhoA6D+KjpGBAwdGZWVl53bDDTd0u3bp0qXxwAMPxBNPPBE1NTXx7LPPRm1tbSxbtqxHQwMA/UfRX5S3b9++GDZsWJSWlkZ9fX00NjbGyJEjz7p28+bN8bOf/azLvvvvvz/Wrl17znO0tbVFW1tb5+PW1tZixwT+iz777LPYu3dvrzzX6dOn48CBAzF69OgYNGhQj5+vuro6Bg8e3AuTAZdKUTFy1113xcqVK2PcuHFx5MiRWLRoUXzrW9+KXbt2nfXrgZubm2Po0KFd9g0dOjSam5vPeZ7GxsZYtGhRMaMBl9DevXujrq4ue4yzampqitra2uwxgCIUFSNTp07t/O+JEyfGXXfdFaNGjYo//elPMWfOnF4bauHChV2uqLS2tkZVVVWvPT/QM9XV1dHU1NQrz7Vnz56YPXt2rFq1Kmpqanr8fOe7qR64/BT9a5r/76tf/WrccsstsX///rP+vLKyMo4ePdpl39GjR6OysvKcz1tSUhIlJSU9GQ34Lxo8eHCvX32oqalxRQOuUD36nJGTJ0/G3/72t7j55pvP+vP6+vp45513uuxbv3591NfX9+S0AEA/UlSM/PznP4933303Dhw4EJs2bYof/vCHcdVVV8XMmTMjIqKhoSEWLlzYuX7BggXx9ttvx3PPPRd79+6Np59+OrZu3RqPPfZY774KAKDPKurXNB9//HHMnDkz/vGPf8SNN94Y3/zmN+P999+PG2+8MSIiDh06FAMGfNE3kydPjtWrV8dTTz0VTz75ZIwdOzbWrl0bEyZM6N1XAQD0WYWOjo6O7CHOp7W1NSoqKqKlpSXKy8uzxwF60bZt26Kurs5fwUA/dKHv376bBgBIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABI1aMYWbx4cRQKhXj88ce7XbNy5cooFApdttLS0p6cFgDoRwZe7IFbtmyJFStWxMSJE8+7try8PD766KPOx4VC4WJPCwD0Mxd1ZeTkyZMxa9asePHFF2PIkCHnXV8oFKKysrJzGzp06MWcFgDohy4qRubPnx/Tpk2Le++994LWnzx5MkaNGhVVVVUxffr02L179znXt7W1RWtra5cNAOifio6RNWvWxLZt26KxsfGC1o8bNy5eeumleP3112PVqlXR3t4ekydPjo8//rjbYxobG6OioqJzq6qqKnZMAKCPKCpGDh8+HAsWLIiXX375gm9Cra+vj4aGhrjjjjtiypQp8eqrr8aNN94YK1as6PaYhQsXRktLS+d2+PDhYsYEAPqQom5gbWpqimPHjkVtbW3nvjNnzsTGjRtj2bJl0dbWFlddddU5n+Pqq6+OO++8M/bv39/tmpKSkigpKSlmNACgjyoqRu65557YuXNnl30/+clPorq6On7xi1+cN0Qi/hUvO3fujO9///vFTQoA9EtFxUhZWVlMmDChy75rrrkmrr/++s79DQ0NMXz48M57Sp555pmYNGlSjBkzJo4fPx5LliyJgwcPxty5c3vpJQAAfdlFf85Idw4dOhQDBnxxK8qnn34a8+bNi+bm5hgyZEjU1dXFpk2bYvz48b19agCgDyp0dHR0ZA9xPq2trVFRUREtLS1RXl6ePQ7Qi7Zt2xZ1dXXR1NTU5X40oO+70Pdv300DAKQSIwBAKjECAKQSIwBAKjECAKTq9T/tBS5f+/btixMnTmSP0cWePXu6/Hu5KCsri7Fjx2aPAVcEMQJXiH379sUtt9ySPUa3Zs+enT3Cl/z1r38VJHAJiBG4Qvz7isiqVauipqYmeZovnD59Og4cOBCjR4+OQYMGZY8TEf+6SjN79uzL7ioS9FdiBK4wNTU1l92Hi919993ZIwCJ3MAKAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKQSIwBAKjECAKTqUYwsXrw4CoVCPP744+dc98orr0R1dXWUlpbGbbfdFm+++WZPTgsA9CMXHSNbtmyJFStWxMSJE8+5btOmTTFz5syYM2dObN++PWbMmBEzZsyIXbt2XeypAYB+5KJi5OTJkzFr1qx48cUXY8iQIedcu3Tp0njggQfiiSeeiJqamnj22WejtrY2li1bdlEDAwD9y0XFyPz582PatGlx7733nnft5s2bv7Tu/vvvj82bN3d7TFtbW7S2tnbZAID+aWCxB6xZsya2bdsWW7ZsuaD1zc3NMXTo0C77hg4dGs3Nzd0e09jYGIsWLSp2NACgDyrqysjhw4djwYIF8fLLL0dpael/a6ZYuHBhtLS0dG6HDx/+r50LAMhV1JWRpqamOHbsWNTW1nbuO3PmTGzcuDGWLVsWbW1tcdVVV3U5prKyMo4ePdpl39GjR6OysrLb85SUlERJSUkxowEAfVRRV0buueee2LlzZ+zYsaNz+/rXvx6zZs2KHTt2fClEIiLq6+vjnXfe6bJv/fr1UV9f37PJAYB+oagrI2VlZTFhwoQu+6655pq4/vrrO/c3NDTE8OHDo7GxMSIiFixYEFOmTInnnnsupk2bFmvWrImtW7fGCy+80EsvAQDoy3r9E1gPHToUR44c6Xw8efLkWL16dbzwwgtx++23x5///OdYu3btl6IGALgyFf3XNP9pw4YN53wcEfHQQw/FQw891NNTAQD9kO+mAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAIJUYAQBSiREAINXA7AGAS6Pwv/+MOysHxKDjf434xP+HnMug43+NOysHROF//5k9ClwRxAhcIUpPHoptP702YuNPIzZmT3N5q4mIbT+9NvacPBQRk7PHgX5PjMAV4p/XjozaFSfj5Zdfjprq6uxxLmt79u6NWbNmxe+/PzJ7FLgiiBG4QnQMLI3tze1x+qu3RAy7I3ucy9rp5vbY3tweHQNLs0eBK4JfHAMAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJCqqBhZvnx5TJw4McrLy6O8vDzq6+vjrbfe6nb9ypUro1AodNlKS0t7PDQA0H8MLGbxiBEjYvHixTF27Njo6OiIP/7xjzF9+vTYvn173HrrrWc9pry8PD766KPOx4VCoWcTAwD9SlEx8uCDD3Z5/Ktf/SqWL18e77//frcxUigUorKy8uInBAD6tYu+Z+TMmTOxZs2aOHXqVNTX13e77uTJkzFq1KioqqqK6dOnx+7du8/73G1tbdHa2tplAwD6p6JjZOfOnXHttddGSUlJPPLII/Haa6/F+PHjz7p23Lhx8dJLL8Xrr78eq1ativb29pg8eXJ8/PHH5zxHY2NjVFRUdG5VVVXFjgkA9BFFx8i4ceNix44d8cEHH8Sjjz4aDz/8cHz44YdnXVtfXx8NDQ1xxx13xJQpU+LVV1+NG2+8MVasWHHOcyxcuDBaWlo6t8OHDxc7JgDQRxR1z0hExFe+8pUYM2ZMRETU1dXFli1bYunSpecNjIiIq6++Ou68887Yv3//OdeVlJRESUlJsaMBAH1Qjz9npL29Pdra2i5o7ZkzZ2Lnzp1x88039/S0AEA/UdSVkYULF8bUqVNj5MiRceLEiVi9enVs2LAh1q1bFxERDQ0NMXz48GhsbIyIiGeeeSYmTZoUY8aMiePHj8eSJUvi4MGDMXfu3N5/JQBAn1RUjBw7diwaGhriyJEjUVFRERMnTox169bFfffdFxERhw4digEDvrjY8umnn8a8efOiubk5hgwZEnV1dbFp06Zub3gFAK48RcXI73//+3P+fMOGDV0eP//88/H8888XPRQAcOXw3TQAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkGpg9AHBpfPbZZxERsW3btuRJujp9+nQcOHAgRo8eHYMGDcoeJyIi9uzZkz0CXFHECFwh9u7dGxER8+bNS56k7ygrK8seAa4IYgSuEDNmzIiIiOrq6hg8eHDuMP/Pnj17Yvbs2bFq1aqoqanJHqdTWVlZjB07NnsMuCKIEbhC3HDDDTF37tzsMbpVU1MTtbW12WMACdzACgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQKqiYmT58uUxceLEKC8vj/Ly8qivr4+33nrrnMe88sorUV1dHaWlpXHbbbfFm2++2aOBAYD+pagYGTFiRCxevDiamppi69at8d3vfjemT58eu3fvPuv6TZs2xcyZM2POnDmxffv2mDFjRsyYMSN27drVK8MDAH1foaOjo6MnT3DdddfFkiVLYs6cOV/62Y9+9KM4depUvPHGG537Jk2aFHfccUf87ne/u+BztLa2RkVFRbS0tER5eXlPxgUuM9u2bYu6urpoamryoWfQz1zo+/dF3zNy5syZWLNmTZw6dSrq6+vPumbz5s1x7733dtl3//33x+bNm8/53G1tbdHa2tplAwD6p6JjZOfOnXHttddGSUlJPPLII/Haa6/F+PHjz7q2ubk5hg4d2mXf0KFDo7m5+ZznaGxsjIqKis6tqqqq2DEBgD6i6BgZN25c7NixIz744IN49NFH4+GHH44PP/ywV4dauHBhtLS0dG6HDx/u1ecHAC4fRX9R3le+8pUYM2ZMRETU1dXFli1bYunSpbFixYovra2srIyjR4922Xf06NGorKw85zlKSkqipKSk2NEAgD6ox58z0t7eHm1tbWf9WX19fbzzzjtd9q1fv77be0wAgCtPUVdGFi5cGFOnTo2RI0fGiRMnYvXq1bFhw4ZYt25dREQ0NDTE8OHDo7GxMSIiFixYEFOmTInnnnsupk2bFmvWrImtW7fGCy+80PuvBADok4qKkWPHjkVDQ0McOXIkKioqYuLEibFu3bq47777IiLi0KFDMWDAFxdbJk+eHKtXr46nnnoqnnzyyRg7dmysXbs2JkyY0LuvAgDos3r8OSOXgs8Zgf7L54xA//Vf/5wRAIDeIEYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRiBABIJUYAgFRFxUhjY2N84xvfiLKysrjppptixowZ8dFHH53zmJUrV0ahUOiylZaW9mhoAKD/KCpG3n333Zg/f368//77sX79+vj888/je9/7Xpw6deqcx5WXl8eRI0c6t4MHD/ZoaACg/xhYzOK33367y+OVK1fGTTfdFE1NTfHtb3+72+MKhUJUVlZe3IQAQL9WVIz8p5aWloiIuO6668657uTJkzFq1Khob2+P2tra+PWvfx233nprt+vb2tqira2t83Fra2tPxgR62WeffRZ79+7tlefas2dPl397qrq6OgYPHtwrzwVcGoWOjo6Oizmwvb09fvCDH8Tx48fjvffe63bd5s2bY9++fTFx4sRoaWmJ3/zmN7Fx48bYvXt3jBgx4qzHPP3007Fo0aIv7W9paYny8vKLGRfoRdu2bYu6urrsMc6qqakpamtrs8cA4l8XEyoqKs77/n3RMfLoo4/GW2+9Fe+99163UXE2n3/+edTU1MTMmTPj2WefPeuas10ZqaqqEiNwmejNKyOnT5+OAwcOxOjRo2PQoEE9fj5XRuDycaExclG/pnnsscfijTfeiI0bNxYVIhERV199ddx5552xf//+bteUlJRESUnJxYwGXAKDBw/u1asPd999d689F9D3FPXXNB0dHfHYY4/Fa6+9Fn/5y1/ia1/7WtEnPHPmTOzcuTNuvvnmoo8FAPqfoq6MzJ8/P1avXh2vv/56lJWVRXNzc0REVFRUdF5ebWhoiOHDh0djY2NERDzzzDMxadKkGDNmTBw/fjyWLFkSBw8ejLlz5/bySwEA+qKiYmT58uUREfGd73yny/4//OEP8eMf/zgiIg4dOhQDBnxxweXTTz+NefPmRXNzcwwZMiTq6upi06ZNMX78+J5NDgD0Cxd9A+uldKE3wAAAl48Lff/23TQAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQCoxAgCkEiMAQKqL+tbeS+3fHxLb2tqaPAkAcKH+/b59vg977xMxcuLEiYiIqKqqSp4EACjWiRMnoqKiotuf94nvpmlvb49PPvkkysrKolAoZI8D9KLW1taoqqqKw4cP++4p6Gc6OjrixIkTMWzYsC5fovuf+kSMAP2XL8IE3MAKAKQSIwBAKjECpCopKYlf/vKXUVJSkj0KkMQ9IwBAKldGAIBUYgQASCVGAIBUYgQASCVGgBQbN26MBx98MIYNGxaFQiHWrl2bPRKQRIwAKU6dOhW33357/Pa3v80eBUjWJ74oD+h/pk6dGlOnTs0eA7gMuDICAKQSIwBAKjECAKQSIwBAKjECAKTy1zRAipMnT8b+/fs7H//973+PHTt2xHXXXRcjR45MnAy41HxrL5Biw4YN8T//8z9f2v/www/HypUrL/1AQBoxAgCkcs8IAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqcQIAJBKjAAAqf4P276rSqAakdcAAAAASUVORK5CYII=
    "
    class="
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[43]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Diagrama de bigotes para verificar si hay Datos atipicos</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">boxplot</span><span class="p">(</span><span class="n">c_data</span><span class="p">[[</span><span class="s1">'Previous Purchases'</span><span class="p">]])</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,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
    "
    class="
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[54]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="c1">#Se reemplaza el nombre de las columnas para identificarlos mejor</span>
    <span class="n">c_data</span> <span class="o">=</span> <span class="n">c_data</span><span class="o">.</span><span class="n">rename</span><span class="p">(</span><span class="n">columns</span><span class="o">=</span><span class="p">{</span><span class="s1">'Age'</span><span class="p">:</span> <span class="s1">'Edad'</span><span class="p">,</span><span class="s1">'Gender'</span><span class="p">:</span><span class="s1">'Genero'</span><span class="p">,</span><span class="s1">'Item Purchased'</span><span class="p">:</span><span class="s1">'ArtComprado'</span><span class="p">,</span><span class="s1">'Category'</span><span class="p">:</span><span class="s1">'Categoria'</span><span class="p">,</span><span class="s1">'Purchase Amount (USD)'</span><span class="p">:</span><span class="s1">'CntComprada'</span><span class="p">,</span><span class="s1">'Location'</span><span class="p">:</span><span class="s1">'Localizacion'</span><span class="p">,</span><span class="s1">'Size'</span><span class="p">:</span><span class="s1">'Talla'</span><span class="p">,</span><span class="s1">'Color'</span><span class="p">:</span><span class="s1">'Color'</span><span class="p">,</span><span class="s1">'Season'</span><span class="p">:</span><span class="s1">'Temporada'</span><span class="p">,</span><span class="s1">'Review Rating'</span><span class="p">:</span><span class="s1">'Calificacion'</span><span class="p">,</span><span class="s1">'Subscription Status'</span><span class="p">:</span><span class="s1">'Subscrito'</span><span class="p">,</span><span class="s1">'Shipping Type'</span><span class="p">:</span><span class="s1">'Envio'</span><span class="p">,</span><span class="s1">'Discount Applied'</span><span class="p">:</span><span class="s1">'Descuento'</span><span class="p">,</span><span class="s1">'Promo Code Used'</span><span class="p">:</span><span class="s1">'Promocion'</span><span class="p">,</span><span class="s1">'Prevoius Purchases'</span><span class="p">:</span><span class="s1">'CompraAnterior'</span><span class="p">,</span><span class="s1">'Payment Method'</span><span class="p">:</span><span class="s1">'MetodoPago'</span><span class="p">,</span><span class="s1">'Frequency of Purchases'</span><span class="p">:</span><span class="s1">'FrecuenciaCompra'</span><span class="p">})</span>
    <span class="n">c_data</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[54]:</div>
    
    
    
    <div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
    
      <div id="df-4f01e2aa-8cc1-44d7-848c-3cb5d9ae6635" class="colab-df-container">
        <div>
    <style scoped>
        .dataframe tbody tr th:only-of-type {
            vertical-align: middle;
        }
    
        .dataframe tbody tr th {
            vertical-align: top;
        }
    
        .dataframe thead th {
            text-align: right;
        }
    </style>
    <table border="1" class="dataframe">
      <thead>
        <tr style="text-align: right;">
          <th></th>
          <th>Customer ID</th>
          <th>Edad</th>
          <th>Genero</th>
          <th>ArtComprado</th>
          <th>Categoria</th>
          <th>CntComprada</th>
          <th>Localizacion</th>
          <th>Talla</th>
          <th>Color</th>
          <th>Temporada</th>
          <th>Calificacion</th>
          <th>Subscrito</th>
          <th>Envio</th>
          <th>Descuento</th>
          <th>Promocion</th>
          <th>Previous Purchases</th>
          <th>MetodoPago</th>
          <th>FrecuenciaCompra</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>0</th>
          <td>1</td>
          <td>55</td>
          <td>Male</td>
          <td>Blouse</td>
          <td>Clothing</td>
          <td>53</td>
          <td>Kentucky</td>
          <td>L</td>
          <td>Gray</td>
          <td>Winter</td>
          <td>3.1</td>
          <td>Yes</td>
          <td>Express</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>14</td>
          <td>Venmo</td>
          <td>Fortnightly</td>
        </tr>
        <tr>
          <th>1</th>
          <td>2</td>
          <td>19</td>
          <td>Male</td>
          <td>Sweater</td>
          <td>Clothing</td>
          <td>64</td>
          <td>Maine</td>
          <td>L</td>
          <td>Maroon</td>
          <td>Winter</td>
          <td>3.1</td>
          <td>Yes</td>
          <td>Express</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>2</td>
          <td>Cash</td>
          <td>Fortnightly</td>
        </tr>
        <tr>
          <th>2</th>
          <td>3</td>
          <td>50</td>
          <td>Male</td>
          <td>Jeans</td>
          <td>Clothing</td>
          <td>73</td>
          <td>Massachusetts</td>
          <td>S</td>
          <td>Maroon</td>
          <td>Spring</td>
          <td>3.1</td>
          <td>Yes</td>
          <td>Free Shipping</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>23</td>
          <td>Credit Card</td>
          <td>Weekly</td>
        </tr>
        <tr>
          <th>3</th>
          <td>4</td>
          <td>21</td>
          <td>Male</td>
          <td>Sandals</td>
          <td>Footwear</td>
          <td>90</td>
          <td>Rhode Island</td>
          <td>M</td>
          <td>Maroon</td>
          <td>Spring</td>
          <td>3.5</td>
          <td>Yes</td>
          <td>Next Day Air</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>49</td>
          <td>PayPal</td>
          <td>Weekly</td>
        </tr>
        <tr>
          <th>4</th>
          <td>5</td>
          <td>45</td>
          <td>Male</td>
          <td>Blouse</td>
          <td>Clothing</td>
          <td>49</td>
          <td>Oregon</td>
          <td>M</td>
          <td>Turquoise</td>
          <td>Spring</td>
          <td>2.7</td>
          <td>Yes</td>
          <td>Free Shipping</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>31</td>
          <td>PayPal</td>
          <td>Annually</td>
        </tr>
      </tbody>
    </table>
    </div>
        <div class="colab-df-buttons">
    
      <div class="colab-df-container">
        <button class="colab-df-convert" onclick="convertToInteractive('df-4f01e2aa-8cc1-44d7-848c-3cb5d9ae6635')"
                title="Convert this dataframe to an interactive table."
                style="display:none;">
    
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960">
        <path d="M120-120v-720h720v720H120Zm60-500h600v-160H180v160Zm220 220h160v-160H400v160Zm0 220h160v-160H400v160ZM180-400h160v-160H180v160Zm440 0h160v-160H620v160ZM180-180h160v-160H180v160Zm440 0h160v-160H620v160Z"/>
      </svg>
        </button>
    
      <style>
        .colab-df-container {
          display:flex;
          gap: 12px;
        }
    
        .colab-df-convert {
          background-color: #E8F0FE;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: none;
          fill: #1967D2;
          height: 32px;
          padding: 0 0 0 0;
          width: 32px;
        }
    
        .colab-df-convert:hover {
          background-color: #E2EBFA;
          box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15);
          fill: #174EA6;
        }
    
        .colab-df-buttons div {
          margin-bottom: 4px;
        }
    
        [theme=dark] .colab-df-convert {
          background-color: #3B4455;
          fill: #D2E3FC;
        }
    
        [theme=dark] .colab-df-convert:hover {
          background-color: #434B5C;
          box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
          filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
          fill: #FFFFFF;
        }
      </style>
    
        <script>
          const buttonEl =
            document.querySelector('#df-4f01e2aa-8cc1-44d7-848c-3cb5d9ae6635 button.colab-df-convert');
          buttonEl.style.display =
            google.colab.kernel.accessAllowed ? 'block' : 'none';
    
          async function convertToInteractive(key) {
            const element = document.querySelector('#df-4f01e2aa-8cc1-44d7-848c-3cb5d9ae6635');
            const dataTable =
              await google.colab.kernel.invokeFunction('convertToInteractive',
                                                        [key], {});
            if (!dataTable) return;
    
            const docLinkHtml = 'Like what you see? Visit the ' +
              '<a target="_blank" href=https://colab.research.google.com/notebooks/data_table.ipynb>data table notebook</a>'
              + ' to learn more about interactive tables.';
            element.innerHTML = '';
            dataTable['output_type'] = 'display_data';
            await google.colab.output.renderOutput(dataTable, element);
            const docLink = document.createElement('div');
            docLink.innerHTML = docLinkHtml;
            element.appendChild(docLink);
          }
        </script>
      </div>
    
    
    <div id="df-ffceec7a-a9e0-4beb-b62f-226cb7a1a36e">
      <button class="colab-df-quickchart" onclick="quickchart('df-ffceec7a-a9e0-4beb-b62f-226cb7a1a36e')"
                title="Suggest charts"
                style="display:none;">
    
    <svg xmlns="http://www.w3.org/2000/svg" height="24px"viewBox="0 0 24 24"
         width="24px">
        <g>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </g>
    </svg>
      </button>
    
    <style>
      .colab-df-quickchart {
          --bg-color: #E8F0FE;
          --fill-color: #1967D2;
          --hover-bg-color: #E2EBFA;
          --hover-fill-color: #174EA6;
          --disabled-fill-color: #AAA;
          --disabled-bg-color: #DDD;
      }
    
      [theme=dark] .colab-df-quickchart {
          --bg-color: #3B4455;
          --fill-color: #D2E3FC;
          --hover-bg-color: #434B5C;
          --hover-fill-color: #FFFFFF;
          --disabled-bg-color: #3B4455;
          --disabled-fill-color: #666;
      }
    
      .colab-df-quickchart {
        background-color: var(--bg-color);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        fill: var(--fill-color);
        height: 32px;
        padding: 0;
        width: 32px;
      }
    
      .colab-df-quickchart:hover {
        background-color: var(--hover-bg-color);
        box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
        fill: var(--button-hover-fill-color);
      }
    
      .colab-df-quickchart-complete:disabled,
      .colab-df-quickchart-complete:disabled:hover {
        background-color: var(--disabled-bg-color);
        fill: var(--disabled-fill-color);
        box-shadow: none;
      }
    
      .colab-df-spinner {
        border: 2px solid var(--fill-color);
        border-color: transparent;
        border-bottom-color: var(--fill-color);
        animation:
          spin 1s steps(1) infinite;
      }
    
      @keyframes spin {
        0% {
          border-color: transparent;
          border-bottom-color: var(--fill-color);
          border-left-color: var(--fill-color);
        }
        20% {
          border-color: transparent;
          border-left-color: var(--fill-color);
          border-top-color: var(--fill-color);
        }
        30% {
          border-color: transparent;
          border-left-color: var(--fill-color);
          border-top-color: var(--fill-color);
          border-right-color: var(--fill-color);
        }
        40% {
          border-color: transparent;
          border-right-color: var(--fill-color);
          border-top-color: var(--fill-color);
        }
        60% {
          border-color: transparent;
          border-right-color: var(--fill-color);
        }
        80% {
          border-color: transparent;
          border-right-color: var(--fill-color);
          border-bottom-color: var(--fill-color);
        }
        90% {
          border-color: transparent;
          border-bottom-color: var(--fill-color);
        }
      }
    </style>
    
      <script>
        async function quickchart(key) {
          const quickchartButtonEl =
            document.querySelector('#' + key + ' button');
          quickchartButtonEl.disabled = true;  // To prevent multiple clicks.
          quickchartButtonEl.classList.add('colab-df-spinner');
          try {
            const charts = await google.colab.kernel.invokeFunction(
                'suggestCharts', [key], {});
          } catch (error) {
            console.error('Error during call to suggestCharts:', error);
          }
          quickchartButtonEl.classList.remove('colab-df-spinner');
          quickchartButtonEl.classList.add('colab-df-quickchart-complete');
        }
        (() => {
          let quickchartButtonEl =
            document.querySelector('#df-ffceec7a-a9e0-4beb-b62f-226cb7a1a36e button');
          quickchartButtonEl.style.display =
            google.colab.kernel.accessAllowed ? 'block' : 'none';
        })();
      </script>
    </div>
        </div>
      </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h3 id="Histogramas">Histogramas<a class="anchor-link" href="#Histogramas">&#182;</a></h3>
    </div>
    </div>
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[56]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="n">c_data</span><span class="p">[</span><span class="s1">'Temporada'</span><span class="p">],</span> <span class="n">bins</span><span class="o">=</span><span class="mi">20</span><span class="p">,</span> <span class="n">edgecolor</span><span class="o">=</span><span class="s1">'black'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Histograma de Datos'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Temporada'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Cantidad'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAAHHCAYAAABeLEexAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjcuMSwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/bCgiHAAAACXBIWXMAAA9hAAAPYQGoP6dpAABAUklEQVR4nO3dZ3QV5f728Wun90ZJiIZmkCIgGgSCSI0EKaJiQZGTcHLAgxQjRzjwly4YQUoEKZYjRAULig0FjXQhUoKAIoQuKCaAkIQESZ3nhYt53AQUQsqG+X7WmkXmnnvu+c3OrORiWmyGYRgCAACwMKfKLgAAAKCyEYgAAIDlEYgAAIDlEYgAAIDlEYgAAIDlEYgAAIDlEYgAAIDlEYgAAIDlEYgAAIDlEYiA61jt2rUVGxtb2WVYEp89cG0hEAHXiIULF8pms2nr1q0XXd6+fXs1btz4qrfzxRdfaPz48Vc9DspW+/btZbPZZLPZ5OTkJD8/P9WvX199+/ZVcnLyVY09d+5cLVy4sGwKBa5RLpVdAIDyk5aWJienK/t/zxdffKE5c+YQihzQjTfeqISEBElSbm6u9u/fr6VLl+rtt9/Www8/rLfffluurq5XPO7cuXNVtWpVzmjB0ghEwHXM3d29sku4Yrm5ufL29q7sMhySv7+/Hn/8cbu2F154QUOHDtXcuXNVu3ZtTZkypZKqA65tXDIDrmMX3sdSUFCgCRMmqF69evLw8FCVKlXUpk0b85JLbGys5syZI0nm5RmbzWaun5ubq//85z8KCwuTu7u76tevr2nTpskwDLvt/v777xo6dKiqVq0qX19f3Xvvvfrll19ks9nszjyNHz9eNptNP/74ox577DEFBgaqTZs2kqSdO3cqNjZWdevWlYeHh0JCQvTPf/5Tv/32m922zo+xd+9ePf744/L391e1atU0ZswYGYaho0ePqmfPnvLz81NISIimT59ut35+fr7Gjh2riIgI+fv7y9vbW3fddZdWr159WZ+xYRiaNGmSbrzxRnl5ealDhw7atWvXRftmZmYqPj7e/PzCw8M1ZcoUFRcXX9a2LsbZ2VmzZs1So0aN9PLLLysrK8tctmDBAnXs2FHVq1eXu7u7GjVqpHnz5tmtX7t2be3atUtr1641v9/t27c3lx88eFAPPfSQgoKC5OXlpVatWunzzz8vUcfs2bN1yy23yMvLS4GBgWrevLkWL15c6v0CKhpniIBrTFZWlk6ePFmivaCg4G/XHT9+vBISEvSvf/1LLVq0UHZ2trZu3apt27bp7rvv1hNPPKFjx44pOTlZb731lt26hmHo3nvv1erVqxUXF6dmzZrpyy+/1PDhw/XLL79o5syZZt/Y2Fi9//776tu3r1q1aqW1a9eqW7dul6zroYceUr169fT888+b4So5OVkHDx5Uv379FBISol27dunVV1/Vrl279O2339oFNUl65JFH1LBhQ73wwgv6/PPPNWnSJAUFBemVV15Rx44dNWXKFC1atEjPPPOM7rjjDrVt21aSlJ2drddff12PPvqo+vfvrzNnzuh///ufoqOjtXnzZjVr1uwvP9OxY8dq0qRJ6tq1q7p27apt27apc+fOys/Pt+t39uxZtWvXTr/88oueeOIJ1axZUxs3btSoUaP066+/KjEx8e++fZfk7OysRx99VGPGjNE333xjftbz5s3TLbfconvvvVcuLi767LPP9OSTT6q4uFiDBg2SJCUmJmrIkCHy8fHRs88+K0kKDg6WJGVkZKh169Y6e/ashg4dqipVqigpKUn33nuvPvjgA91///2SpNdee01Dhw7Vgw8+qKeeekrnzp3Tzp07tWnTJj322GOl3i+gQhkArgkLFiwwJP3ldMstt9itU6tWLSMmJsacv/XWW41u3br95XYGDRpkXOxHw8cff2xIMiZNmmTX/uCDDxo2m83Yv3+/YRiGkZqaakgy4uPj7frFxsYakoxx48aZbePGjTMkGY8++miJ7Z09e7ZE2zvvvGNIMtatW1dijAEDBphthYWFxo033mjYbDbjhRdeMNtPnz5teHp62n0mhYWFRl5ent12Tp8+bQQHBxv//Oc/S9TwZ8ePHzfc3NyMbt26GcXFxWb7//3f/xmS7Lbz3HPPGd7e3sbevXvtxhg5cqTh7OxsHDly5C+31a5duxLf3z/76KOPDEnGSy+9ZLZd7DOMjo426tata9d2yy23GO3atSvRNz4+3pBkrF+/3mw7c+aMUadOHaN27dpGUVGRYRiG0bNnz7+sDbgWcMkMuMbMmTNHycnJJaamTZv+7boBAQHatWuX9u3bd8Xb/eKLL+Ts7KyhQ4fatf/nP/+RYRhavny5JGnFihWSpCeffNKu35AhQy459r///e8SbZ6enubX586d08mT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Kzpy5IjqN2ioc7+fLZfxPTy9lLZnN6EIAOTAgSgkJESSlJGRoRo1apjtGRkZatasmdnn+PHjdusVFhbq1KlT5vohISHKyMiw63N+/nyfC7m7u8vd3b1M9gMorZMnT+rc72dVpft/5FqlbAN5wW9H9duy6Tp58iSBCADkwIGoTp06CgkJ0cqVK80AlJ2drU2bNmngwIGSpMjISGVmZio1NVURERGSpFWrVqm4uFgtW7Y0+zz77LMqKCiQq6urJCk5OVn169e/6OUywNG4VgmTe0h4ZZcBANe1Sr2pOicnR9u3b9f27dsl/XEj9fbt23XkyBHZbDbFx8dr0qRJ+vTTT/X999/rH//4h0JDQ3XfffdJkho2bKguXbqof//+2rx5szZs2KDBgwerd+/eCg0NlSQ99thjcnNzU1xcnHbt2qX33ntPL730kt0lMQAAYG2VeoZo69at6tChgzl/PqTExMRo4cKFGjFihHJzczVgwABlZmaqTZs2WrFihTw8PMx1Fi1apMGDB6tTp05ycnJSr169NGvWLHO5v7+/vvrqKw0aNEgRERGqWrWqxo4da/euIgAAYG02wzCMyi7C0WVnZ8vf319ZWVny8/Or7HJgEdu2bVNERIRCYhLL/JJZXvp+pSfFKzU1VbfffnuZjg0AjuJKfn877HuIAAAAKorD3lQNAAAcy/X8bjQCEQAA+FvX+7vRCEQOoLwSd2WnbQDA9eN6fzcagaiSlWfiruy0DQC4/lyv70YjEFWy8krcjpC2AQC4VhCIHMT1mrgBALgW8Ng9AACwPM4QAQDsXM+PVgOXQiACAJiu90ergUshEAEATNf7o9XApRCIAAAl8KAHrIabqgEAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOURiAAAgOU5dCAqKirSmDFjVKdOHXl6euqmm27Sc889J8MwzD6GYWjs2LGqUaOGPD09FRUVpX379tmNc+rUKfXp00d+fn4KCAhQXFyccnJyKnp3AACAg3LoQDRlyhTNmzdPL7/8snbv3q0pU6Zo6tSpmj17ttln6tSpmjVrlubPn69NmzbJ29tb0dHROnfunNmnT58+2rVrl5KTk7Vs2TKtW7dOAwYMqIxdAgAADsilsgv4Kxs3blTPnj3VrVs3SVLt2rX1zjvvaPPmzZL+ODuUmJio0aNHq2fPnpKkN998U8HBwfr444/Vu3dv7d69WytWrNCWLVvUvHlzSdLs2bPVtWtXTZs2TaGhoZWzcwAAwGE49Bmi1q1ba+XKldq7d68kaceOHfrmm290zz33SJIOHTqk9PR0RUVFmev4+/urZcuWSklJkSSlpKQoICDADEOSFBUVJScnJ23atOmi283Ly1N2drbdBAAArl8OfYZo5MiRys7OVoMGDeTs7KyioiJNnjxZffr0kSSlp6dLkoKDg+3WCw4ONpelp6erevXqdstdXFwUFBRk9rlQQkKCJkyYUNa7AwAAHJRDnyF6//33tWjRIi1evFjbtm1TUlKSpk2bpqSkpHLd7qhRo5SVlWVOR48eLdftAQCAyuXQZ4iGDx+ukSNHqnfv3pKkJk2a6KefflJCQoJiYmIUEhIiScrIyFCNGjXM9TIyMtSsWTNJUkhIiI4fP243bmFhoU6dOmWufyF3d3e5u7uXwx4BAABH5NBniM6ePSsnJ/sSnZ2dVVxcLEmqU6eOQkJCtHLlSnN5dna2Nm3apMjISElSZGSkMjMzlZqaavZZtWqViouL1bJlywrYCwAA4Ogc+gxRjx49NHnyZNWsWVO33HKLvvvuO82YMUP//Oc/JUk2m03x8fGaNGmS6tWrpzp16mjMmDEKDQ3VfffdJ0lq2LChunTpov79+2v+/PkqKCjQ4MGD1bt3b54wAwAAkhw8EM2ePVtjxozRk08+qePHjys0NFRPPPGExo4da/YZMWKEcnNzNWDAAGVmZqpNmzZasWKFPDw8zD6LFi3S4MGD1alTJzk5OalXr16aNWtWZewSAABwQA4diHx9fZWYmKjExMRL9rHZbJo4caImTpx4yT5BQUFavHhxOVQIAACuBw59DxEAAEBFIBABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLIxABAADLc/hA9Msvv+jxxx9XlSpV5OnpqSZNmmjr1q3mcsMwNHbsWNWoUUOenp6KiorSvn377MY4deqU+vTpIz8/PwUEBCguLk45OTkVvSsAAMBBOXQgOn36tO688065urpq+fLl+vHHHzV9+nQFBgaafaZOnapZs2Zp/vz52rRpk7y9vRUdHa1z586Zffr06aNdu3YpOTlZy5Yt07p16zRgwIDK2CUAAOCAXCq7gL8yZcoUhYWFacGCBWZbnTp1zK8Nw1BiYqJGjx6tnj17SpLefPNNBQcH6+OPP1bv3r21e/durVixQlu2bFHz5s0lSbNnz1bXrl01bdo0hYaGVuxOAQAAh3PZgWjYsGGXPeiMGTNKVcyFPv30U0VHR+uhhx7S2rVrdcMNN+jJJ59U//79JUmHDh1Senq6oqKizHX8/f3VsmVLpaSkqHfv3kpJSVFAQIAZhiQpKipKTk5O2rRpk+6///4S283Ly1NeXp45n52dXSb7AwAAHNNlB6LvvvvObn7btm0qLCxU/fr1JUl79+6Vs7OzIiIiyqy4gwcPat68eRo2bJj+7//+T1u2bNHQoUPl5uammJgYpaenS5KCg4Pt1gsODjaXpaenq3r16nbLXVxcFBQUZPa5UEJCgiZMmFBm+wEAABzbZQei1atXm1/PmDFDvr6+SkpKMu/nOX36tPr166e77rqrzIorLi5W8+bN9fzzz0uSbrvtNv3www+aP3++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48ePV3ZpAACgklkmEM2YMUP9+/dXv3791KhRI82fP19eXl564403Krs0AABQySwRiPLz85WamqqoqCizzcnJSVFRUUpJSanEygAAgCNwqewCKsLJkydVVFSk4OBgu/bg4GDt2bOnRP+8vDzl5eWZ81lZWZKk7OzsMq8tJyfnj22m71dx/rkyG7fg1M+SpNTUVHMbZcnJyUnFxcVlPm55jn2t1ZyWliap7I8NqXyPj2vtcy7Pcctz7PIal+Ou4sa+1mquiGMjJyenTH/Xnh/LMIy/72xYwC+//GJIMjZu3GjXPnz4cKNFixYl+o8bN86QxMTExMTExHQdTEePHv3brGCJM0RVq1aVs7OzMjIy7NozMjIUEhJSov+oUaM0bNgwc764uFinTp1SlSpVZLPZyrS27OxshYWF6ejRo/Lz8yvTsWFdHFcoLxxbKA/ldVwZhqEzZ84oNDT0b/taIhC5ubkpIiJCK1eu1H333Sfpj5CzcuVKDR48uER/d3d3ubu727UFBASUa41+fn78cEGZ47hCeeHYQnkoj+PK39//svpZIhBJ0rBhwxQTE6PmzZurRYsWSkxMVG5urvr161fZpQEAgEpmmUD0yCOP6MSJExo7dqzS09PVrFkzrVixosSN1gAAwHosE4gkafDgwRe9RFaZ3N3dNW7cuBKX6ICrwXGF8sKxhfLgCMeVzTAu51k0AACA65clXswIAADwVwhEAADA8ghEAADA8ghE5WjNmjWy2WzKzMys7FJgYQsXLiz392gBQFm78GfX+PHj1axZs3LbHoHoMs2fP1++vr4qLCw023JycuTq6qr27dvb9T0fhGrUqKFff/31sl8KJUmxsbHmyyNhLSdOnNDAgQNVs2ZNubu7KyQkRNHR0dqwYcNVjfvII49o7969ZVQlHFF5HTtAWYiNjZXNZisx7d+/v7JLs2Opx+6vRocOHZSTk6OtW7eqVatWkqT169crJCREmzZt0rlz5+Th4SFJWr16tWrWrKn69etXWr35+flyc3OrtO3jyvXq1Uv5+flKSkpS3bp1lZGRoZUrV+q3334r9ZgFBQXy9PSUp6dnGVYKR1Mex44j4efZta9Lly5asGCBXVu1atUqqZqL4wzRZapfv75q1KihNWvWmG1r1qxRz549VadOHX377bd27R06dChxyez86b8vv/xSDRs2lI+Pj7p06aJff/1V0h+nA5OSkvTJJ5+YCfr89o4ePaqHH35YAQEBCgoKUs+ePXX48GFzm+fPLE2ePFmhoaGVGsZw5TIzM7V+/XpNmTJFHTp0UK1atdSiRQuNGjVK9957ryTJZrNp3rx5uueee+Tp6am6devqgw8+MMc4fPiwbDab3nvvPbVr104eHh5atGjRJU87v/XWW6pdu7b8/f3Vu3dvnTlzxuxz5swZ9enTR97e3qpRo4Zmzpyp9u3bKz4+vqI+Elymvzt2zh8X27dvt1vnzz9fzv+s+vLLL3XbbbfJ09NTHTt21PHjx7V8+XI1bNhQfn5+euyxx3T27FlznPbt22vIkCGKj49XYGCggoOD9dprr5l/BcDX11fh4eFavny5Xc0//PCD7rnnHvn4+Cg4OFh9+/bVyZMn7cYdPHiw4uPjVbVqVUVHR5frZ4jyd/7M5Z+nl156SU2aNJG3t7fCwsL05JNPKicnp9JqJBBdgQ4dOmj16tXm/OrVq9W+fXu1a9fObP/999+1adMmdejQ4aJjnD17VtOmTdNbb72ldevW6ciRI3rmmWckSc8884wefvhhMyT9+uuvat26tQoKChQdHS1fX1+tX79eGzZsMMNUfn6+OfbKlSuVlpam5ORkLVu2rBw/CZQ1Hx8f+fj46OOPP1ZeXt4l+40ZM0a9evXSjh071KdPH/Xu3Vu7d++26zNy5Eg99dRT2r179yV/kRw4cEAff/yxli1bpmXLlmnt2rV64YUXzOXDhg3Thg0b9Omnnyo5OVnr16/Xtm3bymZnUaYu99i5HOPHj9fLL7+sjRs3mv8JS0xM1OLFi/X555/rq6++0uzZs+3WSUpKUtWqVbV582YNGTJEAwcO1EMPPaTWrVtr27Zt6ty5s/r27WsGqczMTHXs2FG33Xabtm7dqhUrVigjI0MPP/xwiXHd3Ny0YcMGzZ8//6r2C47JyclJs2bN0q5du5SUlKRVq1ZpxIgRlVeQgcv22muvGd7e3kZBQYGRnZ1tuLi4GMePHzcWL15stG3b1jAMw1i5cqUhyfjpp5+M1atXG5KM06dPG4ZhGAsWLDAkGfv37zfHnDNnjhEcHGzOx8TEGD179rTb7ltvvWXUr1/fKC4uNtvy8vIMT09P48svvzTXCw4ONvLy8spp71HePvjgAyMwMNDw8PAwWrdubYwaNcrYsWOHuVyS8e9//9tunZYtWxoDBw40DMMwDh06ZEgyEhMT7fosWLDA8Pf3N+fHjRtneHl5GdnZ2Wbb8OHDjZYtWxqGYRjZ2dmGq6ursWTJEnN5Zmam4eXlZTz11FNltbsoQ3917Jw/Lr777juz/+nTpw1JxurVqw3DMMyfVV9//bXZJyEhwZBkHDhwwGx74oknjOjoaHO+Xbt2Rps2bcz5wsJCw9vb2+jbt6/Z9uuvvxqSjJSUFMMwDOO5554zOnfubFf/0aNHDUlGWlqaOe5tt912lZ8KHEVMTIzh7OxseHt7m9ODDz5Yot+SJUuMKlWqmPMX+9l16623lludnCG6Au3bt1dubq62bNmi9evX6+abb1a1atXUrl078z6iNWvWqG7duqpZs+ZFx/Dy8tJNN91kzteoUUPHjx//y+3u2LFD+/fvl6+vr/m/waCgIJ07d04HDhww+zVp0oTr7NewXr166dixY/r000/VpUsXrVmzRrfffrsWLlxo9omMjLRbJzIyssQZoubNm//ttmrXri1fX19z/s/H4cGDB1VQUKAWLVqYy/39/bkM68Au59i5HE2bNjW/Dg4OlpeXl+rWrWvXduHPqz+v4+zsrCpVqqhJkyZ260gy19uxY4dWr15t/izz8fFRgwYNJMnu51lERMQV1Q7H1qFDB23fvt2cZs2apa+//lqdOnXSDTfcIF9fX/Xt21e//fab3WXZisRN1VcgPDxcN954o1avXq3Tp0+rXbt2kqTQ0FCFhYVp48aNWr16tTp27HjJMVxdXe3mbTabjL/56yk5OTmKiIjQokWLSiz7801p3t7eV7I7cEAeHh66++67dffdd2vMmDH617/+pXHjxik2Nvayx7ic4+Bix2FxcfGVlgsHcqljZ/369ZJk93OmoKDgomP8+biw2WyXdZxcrM+F40gy18vJyVGPHj00ZcqUEtuvUaOG+TU/z64v3t7eCg8PN+cPHz6s7t27a+DAgZo8ebKCgoL0zTffKC4uTvn5+fLy8qrwGjlDdIXO3yy9Zs0au8ft27Ztq+XLl2vz5s2XvH/ocri5uamoqMiu7fbbb9e+fftUvXp1hYeH201X8kg/rj2NGjVSbm6uOf/nm/fPzzds2LBMt1m3bl25urpqy5YtZltWVhaP7l9jzh875//TdP7hDUl2N1hXtNtvv127du1S7dq1S/w8IwRZR2pqqoqLizV9+nS1atVKN998s44dO1apNRGIrlCHDh30zTffaPv27eYZIklq166dXnnlFeXn519VIKpdu7Z27typtLQ0nTx5UgUFBerTp4+qVq2qnj17av369Tp06JDWrFmjoUOH6ueffy6L3UIl++2339SxY0e9/fbb2rlzpw4dOqQlS5Zo6tSp6tmzp9lvyZIleuONN7R3716NGzdOmzdv1uDBg8u0Fl9fX8XExGj48OFavXq1du3apbi4ODk5OZn/24fj+Ltjx9PTU61atdILL7yg3bt3a+3atRo9enSl1Tto0CCdOnVKjz76qLZs2aIDBw7oyy+/VL9+/Ur8ZxDXr/DwcBUUFGj27Nk6ePCg3nrrrUq/eZ5AdIU6dOig33//XeHh4ea1cemPQHTmzBnz8fzS6t+/v+rXr6/mzZurWrVq2rBhg7y8vLRu3TrVrFlTDzzwgBo2bKi4uDidO3dOfn5+ZbFbqGQ+Pj5q2bKlZs6cqbZt26px48YaM2aM+vfvr5dfftnsN2HCBL377rtq2rSp3nzzTb3zzjtq1KhRmdczY8YMRUZGqnv37oqKitKdd96phg0bmu/aguO4nGPnjTfeUGFhoSIiIhQfH69JkyZVWr2hoaHasGGDioqK1LlzZzVp0kTx8fEKCAiQkxO/kqzi1ltv1YwZMzRlyhQ1btxYixYtUkJCQqXWZDP+7gYWAA7BZrPpo48+qpQ3mefm5uqGG27Q9OnTFRcXV+HbB4Dyxk3VAEr47rvvtGfPHrVo0UJZWVmaOHGiJNldvgOA6wmBCMBFTZs2TWlpaXJzc1NERITWr1+vqlWrVnZZAFAuuGQGAAAsjzvYAACA5RGIAACA5RGIAACA5RGIAACA5RGIAKCC1a5dW4mJiZVdBoA/IRABqDA2m+0vp/Hjx1d2iQAsivcQAagwf/4Do++9957Gjh2rtLQ0s83Hx6cyyrpihmGoqKhILi78CAWuF5whAlBhQkJCzMnf3182m82u7d133zX/ZlqDBg00d+5cc93Dhw/LZrPp/fff11133SVPT0/dcccd2rt3r7Zs2aLmzZvLx8dH99xzj06cOGGuFxsbq/vuu08TJkxQtWrV5Ofnp3//+9/Kz883++Tl5Wno0KGqXr26PDw81KZNG23ZssVcvmbNGtlsNi1fvlwRERFyd3fXN998owMHDqhnz54KDg6Wj4+P7rjjDn399dd2+3z8+HH16NFDnp6eqlOnjhYtWlTic5kxY4aaNGkib29vhYWF6cknn1ROTk5ZfvQA/gaBCIBDWLRokcaOHavJkydr9+7dev755zVmzBglJSXZ9Rs3bpxGjx6tbdu2ycXFRY899phGjBihl156SevXr9f+/fs1duxYu3VWrlyp3bt3a82aNXrnnXe0dOlSTZgwwVw+YsQIffjhh0pKStK2bdsUHh6u6OhonTp1ym6ckSNHmn81vmnTpsrJyVHXrl21cuVKfffdd+rSpYt69OihI0eOmOvExsbq6NGjWr16tT744APNnTtXx48ftxvXyclJs2bN0q5du5SUlKRVq1ZpxIgRZfXRArgcBgBUggULFhj+/v7m/E033WQsXrzYrs9zzz1nREZGGoZhGIcOHTIkGa+//rq5/J133jEkGStXrjTbEhISjPr165vzMTExRlBQkJGbm2u2zZs3z/Dx8TGKioqMnJwcw9XV1Vi0aJG5PD8/3wgNDTWmTp1qGIZhrF692pBkfPzxx3+7X7fccosxe/ZswzAMIy0tzZBkbN682Vy+e/duQ5Ixc+bMS46xZMkSo0qVKn+7LQBlhwvgACpdbm6uDhw4oLi4OPXv399sLywslL+/v13fpk2bml8HBwdLkpo0aWLXduEZmFtvvVVeXl7mfGRkpHJycnT06FFlZWWpoKBAd955p7nc1dVVLVq00O7du+3Gad68ud18Tk6Oxo8fr88//1y//vqrCgsL9fvvv5tniHbv3i0XFxdFRESY6zRo0EABAQF243z99ddKSEjQnj17lJ2drcLCQp07d05nz561qxtA+SEQAah05++Xee2119SyZUu7Zc7Oznbzrq6u5tc2m+2ibcXFxeVSp7e3t938M888o+TkZE2bNk3h4eHy9PTUgw8+aHd/0t85fPiwunfvroEDB2ry5MkKCgrSN998o7i4OOXn5xOIgApCIAJQ6YKDgxUaGqqDBw+qT58+ZT7+jh079Pvvv8vT01OS9O2338rHx0dhYWGqWrWq3NzctGHDBtWqVUuSVFBQoC1btig+Pv4vx92wYYNiY2N1//33S/oj2B0+fNhc3qBBAxUWFio1NVV33HGHJCktLU2ZmZlmn9TUVBUXF2v69Olycvrjts7333+/jPYcwOUiEAFwCBMmTNDQoUPl7++vLl26KC8vT1u3btXp06c1bNiwqxo7Pz9fcXFxGj16tA4fPqxx48Zp8ODBcnJykre3twYOHKjhw4crKChINWvW1NSpU3X27FnFxcX95bj16tXT0qVL1aNHD9lsNo0ZM8bu7FT9+vXVpUsXPfHEE5o3b55cXFwUHx9vBjNJCg8PV0FBgWbPnq0ePXpow4YNmj9//lXtL4Arx1NmABzCv/71L73++utasGCBmjRponbt2mnhwoWqU6fOVY/dqVMn1atXT23bttUjjzyie++91+4lkC+88IJ69eqlvn376vbbb9f+/fv15ZdfKjAw8C/HnTFjhgIDA9W6dWv16NFD0dHRuv322+36LFiwQKGhoWrXrp0eeOABDRgwQNWrVzeX33rrrZoxY4amTJmixo0ba9GiRUpISLjqfQZwZWyGYRiVXQQAlJfY2FhlZmbq448/ruxSADgwzhABAADLIxABAADL45IZAACwPM4QAQAAyyMQAQAAyyMQAQAAyyMQAQAAyyMQAQAAyyMQAQAAyyMQAQAAyyMQAQAAyyMQAQAAy/t/kVrfhA5fo2EAAAAASUVORK5CYII=
    "
    class="
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[58]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="n">c_data</span><span class="p">[</span><span class="s1">'Edad'</span><span class="p">],</span> <span class="n">bins</span><span class="o">=</span><span class="mi">20</span><span class="p">,</span> <span class="n">edgecolor</span><span class="o">=</span><span class="s1">'black'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Histograma de Datos'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Edades'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Cantidad'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjsAAAHHCAYAAABZbpmkAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjcuMSwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/bCgiHAAAACXBIWXMAAA9hAAAPYQGoP6dpAAA5u0lEQVR4nO3deVxVdf7H8fdFBBRZVbZE3BdyHXEhzSUZcatMKzV1xEzLAU0tU6fcysKs1CzUKRu1Ucex0kpHLVzCaURNG8c0cyESS3EXBBUQzu+PHt5fV3CDi/dyej0fj/MY7vd87/d+zvfexvc927UYhmEIAADApFwcXQAAAEBpIuwAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAZViNGjUUExPj6DJ+l5h7oOwg7ABOYvHixbJYLNq1a1eR6zt27KhGjRqV+HXWrVunqVOnlngc2FfHjh1lsVhksVjk4uIib29v1a9fX4MGDVJiYmKJxp43b54WL15sn0KBMsjV0QUAKL6DBw/KxeXOvrOsW7dOCQkJBB4nVK1aNcXHx0uSsrOzdeTIEa1atUpLly7V448/rqVLl6p8+fJ3PO68efNUpUoV9kThd4uwA5Rh7u7uji7hjmVnZ8vT09PRZTglHx8fDRw40KZtxowZGjVqlObNm6caNWro9ddfd1B1QNnFYSygDLv+vJG8vDxNmzZNdevWlYeHhypXrqx27dpZD4PExMQoISFBkqyHTCwWi/X52dnZeu655xQaGip3d3fVr19fb775pgzDsHndy5cva9SoUapSpYq8vLz00EMP6ZdffpHFYrHZYzR16lRZLBZ9//33euKJJ+Tn56d27dpJkvbu3auYmBjVqlVLHh4eCgoK0pNPPqmzZ8/avNa1MQ4dOqSBAwfKx8dHVatW1aRJk2QYho4dO6aHH35Y3t7eCgoK0ltvvWXz/NzcXE2ePFktWrSQj4+PPD09df/992vLli23NceGYWj69OmqVq2aKlasqE6dOmn//v1F9r1w4YJGjx5tnb86dero9ddfV0FBwW29VlHKlSunuXPnKjw8XO+++64yMjKs6xYtWqQHHnhAAQEBcnd3V3h4uObPn2/z/Bo1amj//v1KSkqyvt8dO3a0rv/xxx/12GOPyd/fXxUrVlSbNm30r3/9q1Ad77zzju69915VrFhRfn5+ioiI0PLly4u9XcDdxJ4dwMlkZGTozJkzhdrz8vJu+dypU6cqPj5eTz31lFq1aqXMzEzt2rVL3377rf74xz/q6aef1vHjx5WYmKi///3vNs81DEMPPfSQtmzZoqFDh6pZs2b64osvNG7cOP3yyy+aPXu2tW9MTIxWrlypQYMGqU2bNkpKSlKPHj1uWNdjjz2munXr6rXXXrMGp8TERP34448aMmSIgoKCtH//fr333nvav3+/tm/fbhPCJKlv375q2LChZsyYoX/961+aPn26/P399de//lUPPPCAXn/9dS1btkzPP/+8WrZsqfbt20uSMjMztXDhQvXv31/Dhg3TxYsX9cEHHyg6Olo7d+5Us2bNbjqnkydP1vTp09W9e3d1795d3377rbp06aLc3FybfpcuXVKHDh30yy+/6Omnn1b16tW1bds2TZw4USdOnNCcOXNu9fbdULly5dS/f39NmjRJX3/9tXWu58+fr3vvvVcPPfSQXF1dtWbNGv35z39WQUGBYmNjJUlz5szRyJEjValSJb344ouSpMDAQEnSyZMndd999+nSpUsaNWqUKleurCVLluihhx7Sxx9/rEceeUSS9P7772vUqFF69NFH9eyzz+rKlSvau3evduzYoSeeeKLY2wXcNQYAp7Bo0SJD0k2Xe++91+Y5YWFhxuDBg62PmzZtavTo0eOmrxMbG2sU9Z/+p59+akgypk+fbtP+6KOPGhaLxThy5IhhGIaxe/duQ5IxevRom34xMTGGJGPKlCnWtilTphiSjP79+xd6vUuXLhVq+8c//mFIMrZu3VpojOHDh1vbrl69alSrVs2wWCzGjBkzrO3nz583KlSoYDMnV69eNXJycmxe5/z580ZgYKDx5JNPFqrht06dOmW4ubkZPXr0MAoKCqztf/nLXwxJNq/zyiuvGJ6ensahQ4dsxpgwYYJRrlw5Iy0t7aav1aFDh0Lv72+tXr3akGS8/fbb1rai5jA6OtqoVauWTdu9995rdOjQoVDf0aNHG5KMf//739a2ixcvGjVr1jRq1Khh5OfnG4ZhGA8//PBNawOcHYexACeTkJCgxMTEQkuTJk1u+VxfX1/t379fhw8fvuPXXbduncqVK6dRo0bZtD/33HMyDEPr16+XJG3YsEGS9Oc//9mm38iRI2849jPPPFOorUKFCta/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JuXUYed6tWrVUpUqVXTkyBF17txZQUFBOnXqlE2fq1ev6ty5czc8z0f69Tyg6090BgDAnriFh/MoU2Hn559/1tmzZxUcHCxJioyM1IULF7R79261aNFCkrR582YVFBSodevWjiwVAPA7xS08nI9Dw05WVpaOHDlifZyamqo9e/bI399f/v7+mjZtmvr06aOgoCClpKTohRdeUJ06dRQdHS1Jatiwobp27aphw4ZpwYIFysvLU1xcnPr168eVWL9DfIuyxXzAEfg9L27h4YxuO+z89hyXW5k1a9Zt9du1a5c6depU6DUGDx6s+fPna+/evVqyZIkuXLigkJAQdenSRa+88orNIahly5YpLi5OnTt3tt5UcO7cubddK8o+vkXZYj7gCHzuCuMWHs7jtsPOf//7X5vH3377ra5evar69etLkg4dOqRy5cpZDyfdjo4dO8owjBuu/+KLL245hr+/PzcQ/J3jW5Qt5gOOwO95wZnddtjZsmWL9e9Zs2bJy8tLS5YskZ+fnyTp/PnzGjJkiO6//377VwncBr5F2WI+4Aj8nhecUbHus/PWW28pPj7eGnQkyc/PT9OnT9dbb71lt+IAAABKqlhhJzMzU6dPny7Ufvr0aV28eLHERQEAANhLscLOI488oiFDhmjVqlX6+eef9fPPP+uTTz7R0KFDb/iDngAAAI5QrEvPFyxYoOeff15PPPGE8vLyfh3I1VVDhw7VG2+8YdcCAQAASqJYYadixYqaN2+e3njjDaWkpEiSateuLU9PT7sWBwAAUFIluqmgp6enmjRpYq9aAAAA7K7YYWfXrl1auXKl0tLSlJuba7Nu1apVJS4MAADAHop1gvKKFSt033336cCBA1q9erXy8vK0f/9+bd68WT4+PvauEQAAoNiKFXZee+01zZ49W2vWrJGbm5vefvtt/fDDD3r88cdVvXp1e9cIAABQbMUKOykpKerRo4ckyc3NTdnZ2bJYLBozZozee+89uxYIAABQEsUKO35+ftabB95zzz3at2+fJOnChQu6dOmS/aoDAAAooWKdoNy+fXslJiaqcePGeuyxx/Tss89q8+bNSkxMVOfOne1dIwAAQLEVK+y8++67unLliiTpxRdfVPny5bVt2zb16dNHL730kl0LBAAAKIlihR1/f3/r3y4uLpowYYLdCgIAALCn2w47mZmZtz2ot7d3sYoBAACwt9sOO76+vrJYLLfVNz8/v9gFAQAA2NNth50tW7ZY//7pp580YcIExcTEKDIyUpKUnJysJUuWKD4+3v5VAgAAFNNth50OHTpY/3755Zc1a9Ys9e/f39r20EMPqXHjxnrvvfc0ePBg+1YJAABQTMW6z05ycrIiIiIKtUdERGjnzp0lLgoAAMBeihV2QkND9f777xdqX7hwoUJDQ0tcFAAAgL0U69Lz2bNnq0+fPlq/fr1at24tSdq5c6cOHz6sTz75xK4FAgAAlESx9ux0795dhw4d0oMPPqhz587p3LlzevDBB3Xo0CF1797d3jUCAAAUW7H27Ei/Hsp67bXX7FkLAACA3d122Nm7d68aNWokFxcX7d2796Z9mzRpUuLCAAAA7OG2w06zZs2Unp6ugIAANWvWTBaLRYZhFOpnsVi4qSAAAHAatx12UlNTVbVqVevfAAAAZcFth52wsDDr30ePHtV9990nV1fbp1+9elXbtm2z6QsAAOBIxboaq1OnTjp37lyh9oyMDHXq1KnERQEAANhLscKOYRhF/ijo2bNn5enpWeKiAAAA7OWOLj3v3bu3pF9PQo6JiZG7u7t1XX5+vvbu3av77rvPvhUCAACUwB2FHR8fH0m/7tnx8vJShQoVrOvc3NzUpk0bDRs2zL4VAgAAlMAdhZ1FixZJkmrUqKHnn3+eQ1YAAMDpFesOylOmTLF3HQAAAKWiWCconzx5UoMGDVJISIhcXV1Vrlw5mwUAAMBZFGvPTkxMjNLS0jRp0iQFBwcXeWUWAACAMyhW2Pn666/173//W82aNbNzOQAAAPZVrMNYoaGhRf4uFgAAgLMpVtiZM2eOJkyYoJ9++snO5QAAANhXsQ5j9e3bV5cuXVLt2rVVsWJFlS9f3mZ9UT8lAQAA4AjFCjtz5syxcxkAAAClo1hhZ/DgwfauAwAAoFQUK+z81pUrV5Sbm2vT5u3tXdJhAQAA7KJYJyhnZ2crLi5OAQEB8vT0lJ+fn80CAADgLIoVdl544QVt3rxZ8+fPl7u7uxYuXKhp06YpJCREH374ob1rBAAAKLZiHcZas2aNPvzwQ3Xs2FFDhgzR/fffrzp16igsLEzLli3TgAED7F0nAABAsRRrz865c+dUq1YtSb+en3PtUvN27dpp69at9qsOAACghIoVdmrVqqXU1FRJUoMGDbRy5UpJv+7x8fX1tVtxAAAAJVWssDNkyBD973//kyRNmDBBCQkJ8vDw0OjRozVu3Di7FggAAFASxTpnZ8yYMda/o6Ki9MMPP2j37t2qW7euGjdubLfiAAAASuqO9uxs3rxZ4eHhyszMtGkPCwtT586d1a9fP/373/+2a4EAAAAlcUdhZ86cORo2bFiRNw308fHR008/rVmzZtmtOAAAgJK6o7Dzv//9T127dr3h+i5dumj37t0lLgoAAMBe7ijsnDx5stAvnP+Wq6urTp8+XeKiAAAA7OWOws4999yjffv23XD93r17FRwcXOKiAAAA7OWOwk737t01adIkXblypdC6y5cva8qUKerZs6fdigMAACipO7r0/KWXXtKqVatUr149xcXFqX79+pKkH374QQkJCcrPz9eLL75YKoUCAAAUxx2FncDAQG3btk0jRozQxIkTZRiGJMlisSg6OloJCQkKDAwslUIBAACK445vKhgWFqZ169bp/PnzOnLkiAzDUN26deXn51ca9QEAAJRIse6gLEl+fn5q2bKlPWsBAACwu2L9NhYAAEBZQdgBAACm5tCws3XrVj344IMKCQmRxWLRp59+arPeMAxNnjxZwcHBqlChgqKionT48GGbPufOndOAAQPk7e0tX19fDR06VFlZWXdxKwAAgDNzaNjJzs5W06ZNlZCQUOT6mTNnau7cuVqwYIF27NghT09PRUdH29znZ8CAAdq/f78SExO1du1abd26VcOHD79bmwAAAJxcsU9Qtodu3bqpW7duRa4zDENz5szRSy+9pIcffliS9OGHHyowMFCffvqp+vXrpwMHDmjDhg365ptvFBERIUl655131L17d7355psKCQm5a9sCAACck9Oes5Oamqr09HRFRUVZ23x8fNS6dWslJydLkpKTk+Xr62sNOpIUFRUlFxcX7dix44Zj5+TkKDMz02YBAADm5LRhJz09XZIK3aQwMDDQui49PV0BAQE2611dXeXv72/tU5T4+Hj5+PhYl9DQUDtXDwAAnIXThp3SNHHiRGVkZFiXY8eOObokAABQSpw27AQFBUmSTp48adN+8uRJ67qgoCCdOnXKZv3Vq1d17tw5a5+iuLu7y9vb22YBAADm5LRhp2bNmgoKCtKmTZusbZmZmdqxY4ciIyMlSZGRkbpw4YJ2795t7bN582YVFBSodevWd71mAADgfBx6NVZWVpaOHDlifZyamqo9e/bI399f1atX1+jRozV9+nTVrVtXNWvW1KRJkxQSEqJevXpJkho2bKiuXbtq2LBhWrBggfLy8hQXF6d+/fpxJRYAAJDk4LCza9cuderUyfp47NixkqTBgwdr8eLFeuGFF5Sdna3hw4frwoULateunTZs2CAPDw/rc5YtW6a4uDh17txZLi4u6tOnj+bOnXvXtwUAADgnh4adjh07yjCMG663WCx6+eWX9fLLL9+wj7+/v5YvX14a5QEAABNw2nN2AAAA7IGwAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATI2wAwAATM2pw87UqVNlsVhslgYNGljXX7lyRbGxsapcubIqVaqkPn366OTJkw6sGAAAOBunDjuSdO+99+rEiRPW5euvv7auGzNmjNasWaOPPvpISUlJOn78uHr37u3AagEAgLNxdXQBt+Lq6qqgoKBC7RkZGfrggw+0fPlyPfDAA5KkRYsWqWHDhtq+fbvatGlzt0sFAABOyOn37Bw+fFghISGqVauWBgwYoLS0NEnS7t27lZeXp6ioKGvfBg0aqHr16kpOTr7pmDk5OcrMzLRZAACAOTl12GndurUWL16sDRs2aP78+UpNTdX999+vixcvKj09XW5ubvL19bV5TmBgoNLT0286bnx8vHx8fKxLaGhoKW4FAABwJKc+jNWtWzfr302aNFHr1q0VFhamlStXqkKFCsUed+LEiRo7dqz1cWZmJoEHAACTcuo9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1q9fr40bN+rxxx9XVFSUPv7442LVDeDuIOwAcGoNGzbUsWPHdOLECQUHB0uStm/fbtNn27ZtCgsL04svvmhtO3r0aKFxduzYoT/96U/Wtt+OExgYqJCQEP34448aMGDADevx9vZW37591bdvXz366KPq2rWrzp07J39//xJtJ4DSQ9gB4BRycnKUnp5u0+bq6qqoqCjVq1dPgwcP1htvvKHMzEybUCNJdevWVVpamlasWKGWLVvqX//6l1avXm3T59lnn1VMTIwiIiLUtm1bLVu2TPv377c5QXnatGkaNWqUfHx81LVrV+Xk5GjXrl06f/68xo4dq1mzZik4OFjNmzeXi4uLPvroIwUFBcnX17fU5gVAyXHpOQCnsGHDBgUHB9ss7dq1k4uLi1avXq3Lly+rVatWeuqpp/Tqq6/aPPehhx7SmDFjFBcXp2bNmmnbtm2aNGmSTZ++fftq0qRJeuGFF9SiRQsdPXpUI0aMsOnz1FNPaeHChVq0aJEaN26sDh06aPHixapZs6akX6/4mjlzpiIiItSyZUv99NNPWrdunVxc+L9SwJlxNRYAADA1vo4AAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABT+z/IFmK7BQOzmgAAAABJRU5ErkJggg==
    "
    class="
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[60]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="n">c_data</span><span class="p">[</span><span class="s1">'Genero'</span><span class="p">],</span> <span class="n">bins</span><span class="o">=</span><span class="mi">20</span><span class="p">,</span> <span class="n">edgecolor</span><span class="o">=</span><span class="s1">'black'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Histograma de Datos'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Genero'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Cantidad'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkYAAAHHCAYAAABa2ZeMAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjcuMSwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/bCgiHAAAACXBIWXMAAA9hAAAPYQGoP6dpAAA7GUlEQVR4nO3deVxU9f7H8fewCzogKlshLpiKa2IquSeBiqZli0umZtmCmXrV8lou6ZWyXFpQ27WbttyyzR2X1JRSKTVNKUlDM3BBQVAE4fz+6DA/R9QQEVBfz8fjPJrz/X7P93zO0KN5d5YZi2EYhgAAACCHsi4AAACgvCAYAQAAmAhGAAAAJoIRAACAiWAEAABgIhgBAACYCEYAAAAmghEAAICJYAQAAGAiGAHXsRo1amjgwIFlXcYNifceuDYRjIBrxLx582SxWLR169YL9nfo0EENGza84v0sXbpUEydOvOJ5ULI6dOggi8Uii8UiBwcHWa1W1a1bV/3791dcXNwVzT179mzNmzevZAoFrnFOZV0AgKsnMTFRDg6X9/8/S5cuVWxsLOGoHLr55psVExMjScrKytLevXu1aNEiffjhh7r//vv14YcfytnZ+bLnnT17tqpWrcoZLkAEI+C65urqWtYlXLasrCx5eHiUdRnlkqenpx588EG7thdffFHDhg3T7NmzVaNGDb300ktlVB1wfeBSGnAdO/8+l9zcXE2aNEl16tSRm5ubqlSpojZt2tguxQwcOFCxsbGSZLtsY7FYbNtnZWXpX//6lwIDA+Xq6qq6devqlVdekWEYdvs9ffq0hg0bpqpVq6pSpUq666679Oeff8pisdidiZo4caIsFot++eUX9e3bV5UrV1abNm0kSTt27NDAgQNVq1Ytubm5yc/PTw8//LCOHTtmt6+COX799Vc9+OCD8vT0VLVq1fT888/LMAwdOHBAPXr0kNVqlZ+fn6ZPn263fU5OjsaPH6/Q0FB5enrKw8NDbdu21dq1a4v0HhuGoSlTpujmm2+Wu7u7OnbsqF27dl1w7IkTJzR8+HDb+xccHKyXXnpJ+fn5RdrXhTg6Ouq1115TSEiI3njjDaWnp9v63n//fd1xxx3y8fGRq6urQkJCNGfOHLvta9SooV27dmndunW2v3eHDh1s/b///rvuu+8+eXt7y93dXa1atdKSJUsK1fH666+rQYMGcnd3V+XKldW8eXMtXLiw2McFlBXOGAHXmPT0dB09erRQe25u7j9uO3HiRMXExOiRRx5RixYtlJGRoa1bt+rHH3/UnXfeqccee0yHDh1SXFyc/vvf/9ptaxiG7rrrLq1du1aDBw9W06ZNtWLFCo0ePVp//vmnZs6caRs7cOBAffrpp+rfv79atWqldevWKSoq6qJ13XfffapTp46mTp1qC1lxcXH6/fffNWjQIPn5+WnXrl166623tGvXLn3//fd2gU2SHnjgAdWvX18vvviilixZoilTpsjb21tvvvmm7rjjDr300ktasGCBRo0apdtuu03t2rWTJGVkZOidd95Rnz599Oijj+rkyZN69913FRkZqc2bN6tp06aXfE/Hjx+vKVOmqGvXruratat+/PFHRUREKCcnx27cqVOn1L59e/3555967LHHVL16dW3atEljx47VX3/9pVmzZv3Tn++iHB0d1adPHz3//PP67rvvbO/1nDlz1KBBA911111ycnLSN998oyeffFL5+fmKjo6WJM2aNUtPPfWUKlasqHHjxkmSfH19JUmpqam6/fbbderUKQ0bNkxVqlTR/Pnzddddd+mzzz7T3XffLUl6++23NWzYMN177716+umnlZ2drR07duiHH35Q3759i31cQJkwAFwT3n//fUPSJZcGDRrYbRMUFGQMGDDAtt6kSRMjKirqkvuJjo42LvSfhi+//NKQZEyZMsWu/d577zUsFouxd+9ewzAMIyEhwZBkDB8+3G7cwIEDDUnGhAkTbG0TJkwwJBl9+vQptL9Tp04Vavvoo48MScb69esLzTFkyBBb29mzZ42bb77ZsFgsxosvvmhrP378uFGhQgW79+Ts2bPGmTNn7PZz/Phxw9fX13j44YcL1XCuw4cPGy4uLkZUVJSRn59va//3v/9tSLLbz+TJkw0PDw/j119/tZvj2WefNRwdHY3k5ORL7qt9+/aF/r7n+uKLLwxJxquvvmpru9B7GBkZadSqVcuurUGDBkb79u0LjR0+fLghydiwYYOt7eTJk0bNmjWNGjVqGHl5eYZhGEaPHj0uWRtwLeFSGnCNiY2NVVxcXKGlcePG/7itl5eXdu3apd9+++2y97t06VI5Ojpq2LBhdu3/+te/ZBiGli1bJklavny5JOnJJ5+0G/fUU09ddO7HH3+8UFuFChVsr7Ozs3X0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z6P6AACgkCIHo7Vr19pe79+/X88++6wGDhyosLAwSX8/Fj9//nzFxMQUeecdOnSQYRgX7V+xYsU/zuHt7a2FCxdeckzjxo21YcOGItcFAABuTEUORu3bt7e9fuGFFzRjxgz16dPH1nbXXXepUaNGeuuttzRgwICSrRIAAKAUFOuptPj4eLsvVSzQvHlzbd68+YqLAgAAKAvFCkaBgYF6++23C7W/8847CgwMvOKiAAAAykKxHtefOXOmevXqpWXLltkei9+8ebN+++03ff755yVaIAAAQGkp1hmjrl276tdff1X37t2VlpamtLQ0de/eXb/++qu6du1a0jUCAACUimKdMZL+vpw2derUkqwFAACgTBU5GO3YsUMNGzaUg4ODduzYccmxjRs3vuLCAAAASluRg1HTpk1tv2bftGlTWSyWC34HkcViKfIXPAIAAJQnRQ5G+/btU7Vq1WyvAQAArjdFDkZBQUG213/88Yduv/12OTnZb3727Flt2rTJbiwAAMC1olhPpXXs2FFpaWmF2tPT0+1++wwAAOBaUqxgZBjGBX9Q9tixY/Lw8LjiogAAAMrCZT2uf88990j6+wbrgQMH2v3KfV5ennbs2KHbb7+9ZCsEAAAoJZcVjDw9PSX9fcaoUqVKqlChgq3PxcVFrVq10qOPPlqyFQIAAJSSywpG77//viSpRo0aGjVqFJfNAADAdaVY33w9YcKEkq4DAACgzBXr5uvU1FT1799fAQEBcnJykqOjo90CAABwLSrWGaOBAwcqOTlZzz//vPz9/S/4hBoAAMC1pljB6LvvvtOGDRvUtGnTEi4HAACg7BTrUlpgYOAFfycNAADgWlasYDRr1iw9++yz2r9/fwmXAwAAUHaKdSntgQce0KlTp1S7dm25u7vL2dnZrv9CPxcCAABQ3hUrGM2aNauEywAAACh7xQpGAwYMKOk6AAAAylyxgtG5srOzlZOTY9dmtVqvdFoAAIBSV6ybr7OysjR06FD5+PjIw8NDlStXtlsAAACuRcU6YzRmzBitXbtWc+bMUf/+/RUbG6s///xTb775pl588cWSrhEAAJQDycnJOnr06FWZu2rVqqpevfpVmftyFCsYffPNN/rggw/UoUMHDRo0SG3btlVwcLCCgoK0YMEC9evXr6TrBAAAZSg5OVl169VX9ulTV2V+twruStyzu8zDUbGC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wsPDQ8HBwXZtmZmZmjRpku65555C493c3GyvnZ2dba8tFstF2wpOFowaNUpxcXF65ZVXFBwcrAoVKujee++95Gelv7+/vv3220J9Xl5eRTtAEYyuis6dOysnJ0cWi0WRkZF2fceOHVNiYqLefvtttW3bVpL03XffXXK+Zs2a6fPPP1eNGjXk5MSfDABQfjRr1kyJiYmFAtOV2rhxowYOHKi7775b0t/BZ//+/ZesIyUlRU5OTqpRo0ax98vN11eBo6Ojdu/erV9++UWOjo52fZUrV1aVKlX01ltvae/evVqzZo1Gjhx5yfmio6OVlpamPn36aMuWLUpKStKKFSs0aNAg5eXlXc1DAQDgksaPH68PPvhAkyZN0q5du7R79259/PHHeu65565o3jp16mjRokXatm2btm/frr59+170ISVJCg8PV1hYmHr27KmVK1dq//792rRpk8aNG6etW7cWeb8Eo6vEarXKarUWandwcNDHH3+shIQENWzYUCNGjNDLL798ybkCAgK0ceNG5eXlKSIiQo0aNdLw4cPl5eUlBwf+hACAshMZGanFixdr5cqVuu2229SqVSvNnDlTQUFBVzTvjBkzVLlyZd1+++3q3r27IiMj1axZs4uOt1gsWrp0qdq1a6dBgwbplltuUe/evfXHH3/Y7mkqCot5tzgAAMANj9MNAAAAJoIRAACAiWAEAABgIhgBAACYCEYAAAAmghEAAICJYAQAAGAiGAEAAJgIRgCuGSkpKXr66acVHBwsNzc3+fr6qnXr1pozZ45OnTpV1uUBuA7wi6QArgm///67WrduLS8vL02dOlWNGjWSq6urfv75Z7311lu66aabdNddd5VJbYZhKC8vjx95Bq4DnDECcE148skn5eTkpK1bt+r+++9X/fr1VatWLfXo0UNLlixR9+7dJUknTpzQI488omrVqslqteqOO+7Q9u3bbfNMnDhRTZs21X//+1/VqFFDnp6e6t27t06ePGkbk5+fr5iYGNWsWVMVKlRQkyZN9Nlnn9n6v/32W1ksFi1btkyhoaFydXXVd999pzNnzmjYsGHy8fGRm5ub2rRpoy1btpTemwTgihGMAJR7x44d08qVKxUdHS0PD48LjrFYLJKk++67T4cPH9ayZcuUkJCgZs2aqVOnTkpLS7ONTUpK0pdffqnFixdr8eLFWrdunV588UVbf0xMjD744APNnTtXu3bt0ogRI/Tggw9q3bp1dvt89tln9eKLL2r37t1q3LixxowZo88//1zz58/Xjz/+qODgYEVGRtrtG0A5ZwBAOff9998bkoxFixbZtVepUsXw8PAwPDw8jDFjxhgbNmwwrFarkZ2dbTeudu3axptvvmkYhmFMmDDBcHd3NzIyMmz9o0ePNlq2bGkYhmFkZ2cb7u7uxqZNm+zmGDx4sNGnTx/DMAxj7dq1hiTjyy+/tPVnZmYazs7OxoIFC2xtOTk5RkBAgDFt2rQSeBcAlAYuiAO4Zm3evFn5+fnq16+fzpw5o+3btyszM1NVqlSxG3f69GklJSXZ1mvUqKFKlSrZ1v39/XX48GFJ0t69e3Xq1CndeeeddnPk5OTo1ltvtWtr3ry57XVSUpJyc3PVunVrW5uzs7NatGih3bt3X/nBAigVBCMA5V5wcLAsFosSExPt2mvVqiVJqlChgiQpMzNT/v7++vbbbwvN4eXlZXvt7Oxs12exWJSfn2+bQ5KWLFmim266yW6cq6ur3frFLusBuHYRjACUe1WqVNGdd96pN954Q0899dRFA0mzZs2UkpIiJycn1ahRo1j7CgkJkaurq5KTk9W+ffsib1e7dm25uLho48aNCgoKkiTl5uZqy5YtGj58eLFqAVD6CEYArgmzZ89W69at1bx5c02cOFGNGzeWg4ODtmzZoj179ig0NFTh4eEKCwtTz549NW3aNN1yyy06dOiQlixZorvvvtvu0tfFVKpUSaNGjdKIESOUn5+vNm3aKD09XRs3bpTVatWAAQMuuJ2Hh4eeeOIJjR49Wt7e3qpevbqmTZumU6dOafDgwSX9dgC4SghGAK4JtWvX1k8//aSpU6dq7NixOnjwoFxdXRUSEqJRo0bpySeflMVi0dKlSzVu3DgNGjRIR44ckZ+fn9q1aydfX98i72vy5MmqVq2aYmJi9Pvvv8vLy0vNmjXTv//970tu9+KLLyo/P1/9+/fXyZMn1bx5c61YsUKVK1e+0sMHUEoshmEYZV0EAABAecD3GAEAAJgIRgAAACaCEQAAgIlgBAAAYCIYAQAAmAhGAAAAJoIRAACAiWAEAABgIhgBAACYCEYAAAAmghEAAICJYAQAAGD6PzsNZDURBcQaAAAAAElFTkSuQmCC
    "
    class="
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[63]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="n">c_data</span><span class="p">[</span><span class="s1">'Categoria'</span><span class="p">],</span> <span class="n">bins</span><span class="o">=</span><span class="mi">20</span><span class="p">,</span> <span class="n">edgecolor</span><span class="o">=</span><span class="s1">'black'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Histograma de Datos'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Categorias'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Cantidad'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,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riyjRo2S69evP/T5I3rR6ETuOddORPQUREZGom7duvjxxx/Rt2/foh4OEdFTwTlWRKS5W7du5SubPXs2TExMlDueExG9iDjHiog0N336dERERKBly5YoVaoU1q9fj/Xr12PQoEFwd3cv6uERET01vBRIRJoLCwvDhAkTcPz4caSlpaF8+fLo168fPvvsM5QqxX/PEdGLi8GKiIiISCOcY0VERESkEQYrIiIiIo1wssMjyM3Nxfnz52Ftbf1INzckIiKioiciuHHjBtzc3JQb2j5tDFaP4Pz58/wmExERUTF19uxZlCtX7pnsi8HqEeT9JMPZs2eV3+EiIiKi51tqairc3d2f6U8rMVg9grzLfzY2NgxWRERExcyznMbDyetEREREGmGwIiIiItIIgxURERGRRhisiIiIiDTCYEVERESkEQYrIiIiIo0wWBERERFphMGKiIiISCNFGqx27NiBjh07ws3NDTqdDmvWrFHV63S6ApcZM2YobSpUqJCvftq0aap+oqKi0KxZM5ibm8Pd3R3Tp09/FodHREREJUyRBqv09HTUrl0boaGhBdYnJSWplsWLF0On06F79+6qdhMnTlS1GzJkiFKXmpqKNm3awMPDAxEREZgxYwbGjx+PBQsWPNVjIyIiopKnSH/Spl27dmjXrt19641Go2r9jz/+QMuWLVGpUiVVubW1db62eZYvX47MzEwsXrwYer0eNWvWRGRkJEJCQjBo0KAnPwgiIiKi/6/YzLG6cOEC/v77bwwYMCBf3bRp0+Do6Ii6detixowZyM7OVurCw8PRvHlz6PV6pczf3x8xMTG4evVqgfvKyMhAamqqaiEiIiJ6mGLzI8w//PADrK2t0a1bN1X50KFDUa9ePTg4OGD37t0IDg5GUlISQkJCAADJycmoWLGiahsXFxelzt7ePt++pk6digkTJjylIyEiIqIXVbEJVosXL0bfvn1hbm6uKh8xYoTy2MfHB3q9Hu+++y6mTp0Kg8FQqH0FBwer+k1NTYW7u3vhBk5EREQlRrEIVjt37kRMTAx++eWXh7Zt1KgRsrOzkZCQAC8vLxiNRly4cEHVJm/9fvOyDAZDoUNZYSQmJuLy5cua9+vk5ITy5ctr3i8REREVrFgEq0WLFqF+/fqoXbv2Q9tGRkbCxMQEzs7OAABfX1989tlnyMrKgpmZGQAgLCwMXl5eBV4GfNYSExPhVa06bt+6qXnf5haWiDkRzXBFRET0jBRpsEpLS0NsbKyyHh8fj8jISDg4OChhIDU1Fb/99htmzpyZb/vw8HDs3bsXLVu2hLW1NcLDwzF8+HC8+eabSmjq06cPJkyYgAEDBmD06NE4evQo5syZg1mzZj2bg3yIy5cv4/atm3B87SOYOWp3uTEr5SxS1s7E5cuXGayIiIiekSINVgcOHEDLli2V9bx5TQEBAVi6dCkA4Oeff4aIoHfv3vm2NxgM+PnnnzF+/HhkZGSgYsWKGD58uGp+lK2tLTZu3IigoCDUr18fTk5OGDt27HN3qwUzR3cYjJ5FPQwiIiJ6AkUarPz8/CAiD2wzaNCg+4agevXqYc+ePQ/dj4+PD3bu3FmoMRIRERE9qmJzHysiIiKi5x2DFREREZFGGKyIiIiINMJgRURERKQRBisiIiIijTBYEREREWmEwYqIiIhIIwxWRERERBphsCIiIiLSCIMVERERkUYYrIiIiIg0wmBFREREpBEGKyIiIiKNMFgRERERaYTBioiIiEgjDFZEREREGmGwIiIiItIIgxURERGRRhisiIiIiDTCYEVERESkEQYrIiIiIo0wWBERERFphMGKiIiISCMMVkREREQaYbAiIiIi0giDFREREZFGGKyIiIiINMJgRURERKQRBisiIiIijTBYEREREWmEwYqIiIhIIwxWRERERBphsCIiIiLSCIMVERERkUYYrIiIiIg0wmBFREREpBEGKyIiIiKNMFgRERERaYTBioiIiEgjRRqsduzYgY4dO8LNzQ06nQ5r1qxR1QcGBkKn06mWtm3bqtpcuXIFffv2hY2NDezs7DBgwACkpaWp2kRFRaFZs2YwNzeHu7s7pk+f/rQPjYiIiEqgIg1W6enpqF27NkJDQ+/bpm3btkhKSlKWn376SVXft29fHDt2DGFhYVi7di127NiBQYMGKfWpqalo06YNPDw8EBERgRkzZmD8+PFYsGDBUzsuIiIiKplKFeXO27Vrh3bt2j2wjcFggNFoLLAuOjoaGzZswP79+9GgQQMAwNy5c9G+fXt89dVXcHNzw/Lly5GZmYnFixdDr9ejZs2aiIyMREhIiCqAERERET2p536O1bZt2+Ds7AwvLy+8//77SElJUerCw8NhZ2enhCoAaN26NUxMTLB3716lTfPmzaHX65U2/v7+iImJwdWrV5/dgRAREdELr0jPWD1M27Zt0a1bN1SsWBFxcXH49NNP0a5dO4SHh8PU1BTJyclwdnZWbVOqVCk4ODggOTkZAJCcnIyKFSuq2ri4uCh19vb2+fabkZGBjIwMZT01NVXrQyMiIqIX0HMdrHr16qU89vb2ho+PDypXroxt27ahVatWT22/U6dOxYQJE55a/0RERPRieu4vBd6tUqVKcHJyQmxsLADAaDTi4sWLqjbZ2dm4cuWKMi/LaDTiwoULqjZ56/ebuxUcHIzr168ry9mzZ7U+FCIiInoBFatgde7cOaSkpMDV1RUA4Ovri2vXriEiIkJps2XLFuTm5qJRo0ZKmx07diArK0tpExYWBi8vrwIvAwJ3Jszb2NioFiIiIqKHKdJglZaWhsjISERGRgIA4uPjERkZicTERKSlpWHUqFHYs2cPEhISsHnzZnTu3Bmenp7w9/cHAFSvXh1t27bFwIEDsW/fPuzatQuDBw9Gr1694ObmBgDo06cP9Ho9BgwYgGPHjuGXX37BnDlzMGLEiKI6bCIiInpBFWmwOnDgAOrWrYu6desCAEaMGIG6deti7NixMDU1RVRUFDp16oSqVatiwIABqF+/Pnbu3AmDwaD0sXz5clSrVg2tWrVC+/bt0bRpU9U9qmxtbbFx40bEx8ejfv36+OijjzB27FjeaoGIiIg0V6ST1/38/CAi963/559/HtqHg4MDVqxY8cA2Pj4+2Llz52OPj4iIiOhxFKs5VkRERETPMwYrIiIiIo0wWBERERFphMGKiIiISCMMVkREREQaYbAiIiIi0giDFREREZFGGKyIiIiINMJgRURERKQRBisiIiIijTBYEREREWmEwYqIiIhIIwxWRERERBphsCIiIiLSCIMVERERkUYYrIiIiIg0wmBFREREpBEGKyIiIiKNMFgRERERaYTBioiIiEgjDFZEREREGmGwIiIiItIIgxURERGRRhisiIiIiDTCYEVERESkEQYrIiIiIo0wWBERERFphMGKiIiISCMMVkREREQaYbAiIiIi0giDFREREZFGGKyIiIiINMJgRURERKQRBisiIiIijTBYEREREWmEwYqIiIhIIwxWRERERBphsCIiIiLSCIMVERERkUYYrIiIiIg0UqTBaseOHejYsSPc3Nyg0+mwZs0apS4rKwujR4+Gt7c3rKys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dPu8bzISERERPU3FZo4VERER0fOOwYqIiIhIIwxWRERERBphsCIiIiLSCIMVERERkUYYrIiIiIg0wmBFREREpBEGKyIiIiKNMFgRERERaYTBioiIiEgjDFZEREREGmGwIiIiItIIgxURERGRRhisiIiIiDTCYEVERESkEQYrIiIiIo0wWBERERFphMGKiIiISCMMVkREREQaYbAiIiIi0giDFREREZFGGKyIiIiINMJgRURERKSRUkU9ACK6v8TERFy+fPmp9O3k5ITy5cs/lb6JiEoqBiui51RiYiK8qlXH7Vs3n0r/5haWiDkRzXBFRKQhBiui59Tly5dx+9ZNOL72Ecwc3TXtOyvlLFLWzsTly5cZrIiINMRgRfScM3N0h8HoWdTDICKiR8DJ60REREQaYbAiIiIi0giDFREREZFGGKyIiIiINMJgRURERKQRBisiIiIijTBYEREREWmEwYqIiIhIIwxWRERERBphsCIiIiLSCIMVERERkUYYrIiIiIg0wmBFREREpJHnOliNHz8eOp1OtVSrVk2pv337NoKCguDo6IjSpUuje/fuuHDhgqqPxMREdOjQAZaWlnB2dsaoUaOQnZ39rA+FiIiISoBSRT2Ah6lZsyY2bdqkrJcq9X9DHj58OP7++2/89ttvsLW1xeDBg9GtWzfs2rULAJCTk4MOHTrAaDRi9+7dSEpKwltvvQUzMzNMmTLlmR8LERERvdie+2BVqlQpGI3GfOXXr1/HokWLsGLFCrzyyisAgCVLlqB69erYs2cPXn75ZWzcuBHHjx/Hpk2b4OLigjp16uCLL77A6NGjMX78eOj1+md9OERERPQCe64vBQLAqVOn4ObmhkqVKqFv375ITEwEAERERCArKwutW7dW2larVg3ly5dHeHg4ACA8PBze3t5wcXFR2vj7+yM1NRXHjh277z4zMjKQmpqqWoiIiIge5rkOVo0aNcLSpUuxYcMGzJ8/H/Hx8WjWrBlu3LiB5ORk6PV62NnZqbZxcXFBcnIyACA5OVkVqvLq8+ruZ+rUqbC1tVUWd3d3bQ+MiIiIXkjP9aXAdu3aKY99fHzQqFEjeHh44Ndff4WFhcVT229wcDBGjBihrKempjJcERER0UM912es7mVnZ4eqVasiNjYWRqMRmZmZuHbtmqrNhQsXlDlZRqMx37cE89YLmreVx2AwwMbGRrUQERERPUyxClZpaWmIi4uDq6sr6tevDzMzM2zevFmpj4mJQWJiInx9fQEAvr6+OHLkCC5evKi0CQsLg42NDWrUqPHMx09EREQvtuf6UuDIkSPRsWNHeHh44Pz58xg3bhxMTU3Ru3dv2NraYsCAARgxYgQcHBxgY2ODIUOGwNfXFy+//DIAoE2bNqhRowb69euH6dOnIzk5GWPGjEFQUBAMBkMRHx0RERG9aJ7rYHXu3Dn07t0bKSkpKFOmDJo2bYo9e/agTJkyAIBZs2bBxMQE3bt3R0ZGBvz9/TFv3jxle1NTU6xduxbvv/8+fH19YWVlhYCAAEycOLGoDomIiIheYM91sPr5558fWG9ubo7Q0FCEhobet42HhwfWrVun9dCIiIiI8ilWc6yIiIiInmcMVkREREQaYbAiIiIi0giDFREREZFGGKyIiIiINMJgRURERKQRBisiIiIijTBYEREREWmEwYqIiIhIIwxWRERERBphsCIiIiLSCIMVERERkUYYrIiIiIg0wmBFREREpBEGKyIiIiKNMFgRERERaYTBioiIiEgjDFZEREREGmGwIiIiItIIgxURERGRRhisiIiIiDTCYEVERESkEQYrIiIiIo0wWBERERFphMGKiIiISCMMVkREREQaYbAiIiIi0giDFREREZFGShX1AIiI6PmSmJiIy5cvP5W+nZycUL58+afSN9HzgMGKiIgUiYmJ8KpWHbdv3Xwq/ZtbWCLmRDTDFb2wGKyIiEhx+fJl3L51E46vfQQzR3dN+85KOYuUtTNx+fJlBit6YTFYERFRPmaO7jAYPYt6GETFDievExEREWmEwYqIiIhIIwxWRERERBphsCIiIiLSCIMVERERkUYYrIiIiIg0wmBFREREpBEGKyIiIiKNPNfBaurUqXjppZdgbW0NZ2dndOnSBTExMao2fn5+0Ol0quW9995TtUlMTESHDh1gaWkJZ2dnjBo1CtnZ2c/yUIiIiKgEeK7vvL59+3YEBQXhpZdeQnZ2Nj799FO0adMGx48fh5WVldJu4MCBmDhxorJuaWmpPM7JyUGHDh1gNBqxe/duJCUl4a233oKZmRmmTJnyTI+HiIiIXmzPdbDasGGDan3p0qVwdnZGREQEmjdvrpRbWlrCaDQW2MfGjRtx/PhxbNq0CS4uLqhTpw6++OILjB49GuPHj4der3+qx0BEREQlx3N9KfBe169fBwA4ODioypcvXw4nJyfUqlULwcHBuHnz/36VPTw8HN7e3nBxcVHK/P39kZqaimPHjhW4n4yMDKSmpqoWIiIiood5rs9Y3S03NxfDhg1DkyZNUKtWLaW8T58+8PDwgJubG6KiojB69GjExMRg1apVAIDk5GRVqAKgrCcnJxe4r6lTp2LChAlP6UiIiIjoRVVsglVQUBCOHj2Kf//9V1U+aNAg5bG3tzdcXV3RqlUrxMXFoXLlyoXaV3BwMEaMGKGsp6amwt3dvXADJyIiohKjWFwKHDx4MNauXYutW7eiXLlyD2zbqFEjAEBsbCwAwGg04sKFC6o2eev3m5dlMBhgY2OjWoiIiIge5rkOViKCwYMHY/Xq1diyZQsqVqz40G0iIyMBAK6urgAAX19fHDlyBBcvXlTahIWFwcbGBjVq1Hgq4yYiIqKS6bm+FBgUFIQVK1bgjz/+gLW1tTInytbWFhYWFoiLi8OKFSvQvn17ODo6IioqCsOHD0fz5s3h4+MDAGjTpg1q1KiBfv36Yfr06UhOTsaYMWMQFBQEg8FQlIdHREREL5jn+ozV/Pnzcf36dfj5+cHV1VVZfvnlFwCAXq/Hpk2b0KZNG1SrVg0fffQRunfvjr/++kvpw9TUFGvXroWpqSl8fX3x5ptv4q233lLd94qIiIhIC8/1GSsReWC9u7s7tm/f/tB+PDw8sG7dOq2GRURERFSg5/qMFREREVFxwmBFREREpBEGKyIiIiKNMFgRERERaYTBioiIiEgjDFZEREREGmGwIiIiItIIgxURERGRRhisiIiIiDTCYEVERESkEQYrIiIiIo0wWBERERFphMGKiIiISCMMVkREREQaYbAiIiIi0giDFREREZFGGKyIiIiINMJgRURERKQRBisiIiIijTBYEREREWmEwYqIiIhIIwxWRERERBphsCIiIiLSCIMVERERkUYYrIiIiIg0wmBFREREpBEGKyIiIiKNMFgRERERaYTBioiIiEgjDFZEREREGmGwIiIiItIIgxURERGRRhisiIiIiDTCYEVERESkEQYrIiIiIo0wWBERERFphMGKiIiISCMMVkREREQaYbAiIiIi0kiJClahoaGoUKECzM3N0ahRI+zbt6+oh0REREQvkBITrH755ReMGDEC48aNw8GDB1G7dm34+/vj4sWL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
    "
    class="
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[64]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="n">c_data</span><span class="p">[</span><span class="s1">'Calificacion'</span><span class="p">],</span> <span class="n">bins</span><span class="o">=</span><span class="mi">20</span><span class="p">,</span> <span class="n">edgecolor</span><span class="o">=</span><span class="s1">'black'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Histograma de Datos'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Calificaciones'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Cantidad'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,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lJKSombNWyjn10t2b9urmreOHjnssMBD2AEAADpz5oxyfr2kWnc8LvdaIXZrN//sCZ1d97LOnDlD2AEAAI7nXitEnsFhju6GXTFAGQAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBqPnlewipqNUnL8jJQAAFQFhJ0KVJGzUUqOn5ESAICqgLBTgSpqNkrJOWakBACgKiDsVAIzzkYJAEBVwQBlAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgaoQdAABgag4NO/Hx8brllltUo0YNBQYGasCAATp69KhNnZycHMXGxqpWrVqqXr26Bg4cqLS0NJs6KSkp6tevn7y9vRUYGKiJEyfq8uXLlbkrAADASTk07Gzfvl2xsbHatWuXEhISlJ+fr169eik7O9taZ/z48Vq7dq3ee+89bd++XadOndI999xjXV9QUKB+/fopLy9PO3fu1IoVK7R8+XJNmTLFEbsEAACcjJsjN75x40ab98uXL1dgYKCSkpLUtWtXZWRk6K233tLKlSvVo0cPSdKyZcvUokUL7dq1Sx07dtTmzZt16NAhffLJJwoKClLbtm01c+ZMPfXUU5o2bZo8PDwcsWsAAMBJONWYnYyMDElSQECAJCkpKUn5+fmKjo621mnevLkaNGigxMRESVJiYqJat26toKAga52YmBhlZmbq4MGDldh7AADgjBx6Zef3CgsLNW7cOHXu3FmtWrWSJKWmpsrDw0P+/v42dYOCgpSammqt8/ugc2X9lXXFyc3NVW5urvV9ZmamvXYDAAA4Gae5shMbG6sDBw5o1apVFb6t+Ph4+fn5WZeQkJAK3yYAAHCMEl/ZmTBhQokbfeWVV0rVibi4OK1bt047duxQ/fr1reXBwcHKy8vThQsXbK7upKWlKTg42Frnq6++smnvytNaV+r80eTJk232JzMzk8ADAIBJlTjsfPPNNzbvv/76a12+fFnNmjWTJH333XdydXVVZGRkiTduGIbGjBmjNWvWaNu2bWrUqJHN+sjISLm7u2vLli0aOHCgJOno0aNKSUlRVFSUJCkqKkrPP/+80tPTFRgYKElKSEiQr6+v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nwEAgPNx6JWda0lNTZUkBQUF2ZQHBQVZ16WmpiowMNBmvZubmwICAqx1ipObm6vc3Fzr+8zMTHt1GwAAOBmnvbJTkeLj4+Xn52ddQkJCHN0lAABQQZw27AQHB0uS0tLSbMrT0tKs64KDg5Wenm6z/vLlyzp37py1TnEmT56sjIwM63LixAk79x4AADgLpw07jRo1UnBwsLZs2WIty8zM1JdffqmoqChJUlRUlC5cuKCkpCRrnU8//VSFhYXq0KHDVdv29PSUr6+vzQIAAMzJoWN2srKydOzYMev748ePa+/evQoICFCDBg00btw4zZo1S02bNlWjRo303HPPqV69ehowYIAkqUWLFurdu7dGjRqlJUuWKD8/X3FxcRo0aBBPYgEAAEkODjt79uzRbbfdZn0/YcIESdKwYcO0fPlyPfnkk8rOztbDDz+sCxcuqEuXLtq4caO8vLysn3nnnXcUFxennj17ysXFRQMHDtRrr71W6fsCAACck0PDTvfu3WUYxlXXWywWzZgxQzNmzLhqnYCAAK1cubIiugcAAEzAacfsAAAA2ANhBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmBphBwAAmJpTh51p06bJYrHYLM2bN7euz8nJUWxsrGrVqqXq1atr4MCBSktLc2CPAQCAs3HqsCNJLVu21OnTp63L559/bl03fvx4rV27Vu+99562b9+uU6dO6Z577nFgbwEAgLNxc3QHrsfNzU3BwcFFyjMyMvTWW29p5cqV6tGjhyRp2bJlatGihXbt2qWOHTtWdlcBAIATcvorO99//73q1aunxo0ba8iQIUpJSZEkJSUlKT8/X9HR0da6zZs3V4MGDZSYmHjNNnNzc5WZmWmzAAAAc3LqsNOhQwctX75cGzdu1OLFi3X8+HHdeuutunjxolJTU+Xh4SF/f3+bzwQFBSk1NfWa7cbHx8vPz8+6hISEVOBeAAAAR3Lq21h9+vSxvo6IiFCHDh0UGhqqd999V9WqVStzu5MnT9aECROs7zMzMwk8AACYlFNf2fkjf39/3XjjjTp27JiCg4OVl5enCxcu2NRJS0srdozP73l6esrX19dmAQAA5lSlwk5WVpaSk5NVt25dRUZGyt3dXVu2bLGuP3r0qFJSUhQVFeXAXgIAAGfi1LexnnjiCfXv31+hoaE6deqUpk6dKldXVw0ePFh+fn4aOXKkJkyYoICAAPn6+mrMmDGKioriSSwAAGDl1GHn5MmTGjx4sM6ePas6deqoS5cu2rVrl+rUqSNJmjdvnlxcXDRw4EDl5uYqJiZGixYtcnCvAQCAM3HqsLNq1aprrvfy8tLChQu1cOHCSuoRAACoaqrUmB0AAIDSIuwAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTI+wAAABTM03YWbhwoRo2bCgvLy916NBBX331laO7BAAAnIApws5///tfTZgwQVOnTtXXX3+tNm3aKCYmRunp6Y7uGgAAcDBThJ1XXnlFo0aN0ogRIxQeHq4lS5bI29tb//znPx3dNQAA4GBVPuzk5eUpKSlJ0dHR1jIXFxdFR0crMTHRgT0DAADOwM3RHSivM2fOqKCgQEFBQTblQUFBOnLkSLGfyc3NVW5urvV9RkaGJCkzM9OufcvKyvpte6nHVJiXY9e288+eqJC2K6rdimybPlf9tulz5bRNnyun7arY54psO//cSUm//Zto739nr7RnGMa1KxpV3M8//2xIMnbu3GlTPnHiRKN9+/bFfmbq1KmGJBYWFhYWFhYTLCdOnLhmVqjyV3Zq164tV1dXpaWl2ZSnpaUpODi42M9MnjxZEyZMsL4vLCzUuXPnVKtWLVksFrv1LTMzUyEhITpx4oR8fX3t1i5scZwrD8e6cnCcKwfHuXJU5HE2DEMXL15UvXr1rlmvyocdDw8PRUZGasuWLRowYICk38LLli1bFBcXV+xnPD095enpaVPm7+9fYX309fXlP6RKwHGuPBzrysFxrhwc58pRUcfZz8/vunWqfNiRpAkTJmjYsGFq166d2rdvr/nz5ys7O1sjRoxwdNcAAICDmSLs3H///frll180ZcoUpaamqm3bttq4cWORQcsAAODPxxRhR5Li4uKuetvKUTw9PTV16tQit8xgXxznysOxrhwc58rBca4cznCcLYZxvee1AAAAqq4qP6kgAADAtRB2AACAqRF2AACAqRF2AACAqRF2yig+Pl633HKLatSoocDAQA0YMEBHjx695meWL18ui8Vis3h5eVVSj6uuxYsXKyIiwjohVVRUlDZs2HDNz7z33ntq3ry5vLy81Lp1a61fv76Selt1lfY4cz6X35w5c2SxWDRu3Lhr1uN8Lr+SHGvO6dKbNm1akWPWvHnza37GEeczYaeMtm/frtjYWO3atUsJCQnKz89Xr169lJ2dfc3P+fr66vTp09blp59+qqQeV13169fXnDlzlJSUpD179qhHjx666667dPDgwWLr79y5U4MHD9bIkSP1zTffaMCAARowYIAOHDhQyT2vWkp7nCXO5/LYvXu3li5dqoiIiGvW43wuv5Iea4lzuixatmxpc8w+//zzq9Z12Plsn5/jRHp6uiHJ2L59+1XrLFu2zPDz86u8TplYzZo1jTfffLPYdffdd5/Rr18/m7IOHToYjzzySGV0zVSudZw5n8vu4sWLRtOmTY2EhASjW7duxmOPPXbVupzP5VOaY805XXpTp0412rRpU+L6jjqfubJjJxkZGZKkgICAa9bLyspSaGioQkJCrvutGUUVFBRo1apVys7OVlRUVLF1EhMTFR0dbVMWExOjxMTEyuiiKZTkOEucz2UVGxurfv36FTlPi8P5XD6lOdYS53RZfP/996pXr54aN26sIUOGKCUl5ap1HXU+m2YGZUcqLCzUuHHj1LlzZ7Vq1eqq9Zo1a6Z//vOfioiIUEZGhl566SV16tRJBw8eVP369Suxx1XP/v37FRUVpZycHFWvXl1r1qxReHh4sXVTU1OL/FRIUFCQUlNTK6OrVVppjjPnc9msWrVKX3/9tXbv3l2i+pzPZVfaY805XXodOnTQ8uXL1axZM50+fVrTp0/XrbfeqgMHDqhGjRpF6jvqfCbs2EFsbKwOHDhwzfuUkhQVFWXzLblTp05q0aKFli5dqpkzZ1Z0N6u0Zs2aae/evcrIyND777+vYcOGafv27Vf9hxhlU5rjzPlceidOnNBjjz2mhIQEBr5WsLIca87p0uvTp4/1dUREhDp06KDQ0FC9++67GjlypAN7ZouwU05xcXFat26dduzYUerk7+7urptuuknHjh2roN6Zh4eHh8LCwiRJkZGR2r17t1599VUtXbq0SN3g4GClpaXZlKWlpSk4OLhS+lqVleY4/xHn8/UlJSUpPT1dN998s7WsoKBAO3bs0IIFC5SbmytXV1ebz3A+l01ZjvUfcU6Xnr+/v2688carHjNHnc+M2SkjwzAUFxenNWvW6NNPP1WjRo1K3UZBQYH279+vunXrVkAPza2wsFC5ubnFrouKitKWLVtsyhISEq459gTFu9Zx/iPO5+vr2bOn9u/fr71791qXdu3aaciQIdq7d2+x//hyPpdNWY71H3FOl15WVpaSk5Oveswcdj5X6PBnExs9erTh5+dnbNu2zTh9+rR1uXTpkrXO0KFDjUmTJlnfT58+3di0aZORnJxsJCUlGYMGDTK8vLyMgwcPOmIXqoxJkyYZ27dvN44fP27s27fPmDRpkmGxWIzNmzcbhlH0OH/xxReGm5ub8dJLLxmHDx82pk6dari7uxv79+931C5UCaU9zpzP9vHHJ4Q4nyvO9Y4153TpPf7448a2bduM48ePG1988YURHR1t1K5d20hPTzcMw3nOZ25jldHixYslSd27d7cpX7ZsmYYPHy5JSklJkYvL/188O3/+vEaNGqXU1FTVrFlTkZGR2rlzJ+NOriM9PV0PPfSQTp8+LT8/P0VERGjTpk26/fbbJRU9zp06ddLKlSv17LPP6umnn1bTpk314YcfXnPwOEp/nDmfKwbnc+XhnC6/kydPavDgwTp79qzq1KmjLl26aNeuXapTp44k5zmfLYZhGBW6BQAAAAdizA4AADA1wg4AADA1wg4AADA1wg4AADA1wg4AADA1wg4AADA1wg4AADA1wg4AADA1wg4Ap5CamqrHHntMYWFh8vLyUlBQkDp37qzFixfr0qVLju4egCqMn4sA4HA//PCDOnfuLH9/f82ePVutW7eWp6en9u/frzfeeEM33HCD7rzzTof0zTAMFRQUyM2N/7sEqiqu7ABwuEcffVRubm7as2eP7rvvPrVo0UKNGzfWXXfdpY8//lj9+/eXJF24cEF/+9vfVKdOHfn6+qpHjx769ttvre1MmzZNbdu21b///W81bNhQfn5+GjRokC5evGitU1hYqPj4eDVq1EjVqlVTmzZt9P7771vXb9u2TRaLRRs2bFBkZKQ8PT31+eefKzc3V2PHjlVgYKC8vLzUpUsX7d69u/IOEoAyI+wAcKizZ89q8+bNio2NlY+PT7F1LBaLJOnee+9Venq6NmzYoKSkJN18883q2bOnzp07Z62bnJysDz/8UOvWrdO6deu0fft2zZkzx7o+Pj5e//rXv7RkyRIdPHhQ48eP14MPPqjt27fbbHPSpEmaM2eODh8+rIiICD355JP64IMPtGLFCn399dcKCwtTTEyMzbYBOKkK/U11ALiOXbt2GZKM1atX25TXqlXL8PHxMXx8fIwnn3zS+OyzzwxfX18jJyfHpl6TJk2MpUuXGoZhGFOnTjW8vb2NzMxM6/qJEycaHTp0MAzDMHJycgxvb29j586dNm2MHDnSGDx4sGEYhrF161ZDkvHhhx9a12dlZRnu7u7GO++8Yy3Ly8sz6tWrZ8ydO9cORwFAReImNACn9NVXX6mwsFBDhgxRbm6uvv32W2VlZalWrVo29X799VclJydb3zds2FA1atSwvq9bt67S09MlSceOHdOlS5d0++2327SRl5enm266yaasXbt21tfJycnKz89X586drWXu7u5q3769Dh8+XP6dBVChCDsAHCosLEwWi0VHjx61KW/cuLEkqVq1apKkrKws1a1bV9u2bSvShr+/v/W1u7u7zTqLxaLCwkJrG5L08ccf64YbbrCp5+npafP+arfUAFQ9hB0ADlWrVi3dfvvtWrBggcaMGXPVkHHzzTcrNTVVbm5uatiwYZm2FR4eLk9PT6WkpKhbt24l/lyTJk3k4eGhL774QqGhoZKk/Px87d69W+PGjStTXwBUHsIOAIdbtGiROnfurHbt2mnatGmKiIiQi4uLdu/erSNHjigyMlLR0dGKiorSgAEDNHfuXN144406deqUPv74Y9199902t52upkaNGnriiSc0fvx4FRYWqkuXLsrIyNAXX3whX19fDRs2rNjP+fj4aPTo0Zo4caICAgLUoEEDzZ07V5cuXdLIkSPtfTgA2BlhB4DDNWnSRN98841mz56tyZMn6+TJk/L09FR4eLieeOIJPfroo7JYLFq/fr2eeeYZjRgxQr/88ouCg4PVtWtXBQUFlXhbM2fOVJ06dRQfH68ffvhB/v7+uvnmm/X0009f83Nz5sxRYWGhhg4dqosXL6pdu3batGmTatasWd7dB1DBLIZhGI7uBAAAQEVhnh0AAGBqhB0AAGBqhB0AAGBqhB0AAGBqhB0AAGBqhB0AAGBqhB0AAGBqhB0AAGBqhB0AAGBqhB0AAGBqhB0AAGBqhB0AAGBq/wdgVLLoIXOvZgAAAABJRU5ErkJggg==
    "
    class="
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[66]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-python"><pre><span></span><span class="n">plt</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="n">c_data</span><span class="p">[</span><span class="s1">'FrecuenciaCompra'</span><span class="p">],</span> <span class="n">bins</span><span class="o">=</span><span class="mi">20</span><span class="p">,</span> <span class="n">edgecolor</span><span class="o">=</span><span class="s1">'black'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s1">'Histograma de Datos'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'Frecuencia de Compras'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">'Cantidad'</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
    </div>
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAAHHCAYAAABnS/bqAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjcuMSwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/bCgiHAAAACXBIWXMAAA9hAAAPYQGoP6dpAABYeElEQVR4nO3dd1QUV8MG8GdpS69KU4oKFmwoRMWGKBGUGDUYS4gBa14DGnv0i4otoiaoSUSNxqC+1iRqErvYC9g7KvZgA1QUBKXf7w8P87oCUmRcwed3zhzdO3dm7szsDs/O3JlVCCEEiIiIiKjcaai7AURERESVFYMWERERkUwYtIiIiIhkwqBFREREJBMGLSIiIiKZMGgRERERyYRBi4iIiEgmDFpEREREMmHQIiIiIpIJgxZRBebo6IigoCB1N+O9xG1PRCXBoEX0jli2bBkUCgVOnDhR6Ph27dqhQYMGb7ycrVu3YvLkyW88Hypf7dq1g0KhgEKhgIaGBoyNjVGnTh307dsXUVFRbzTvBQsWYNmyZeXTUCIqFS11N4CIyi4uLg4aGqX7vrR161ZEREQwbL2DqlevjrCwMABAeno6rl27hg0bNmDlypXo2bMnVq5cCW1t7VLPd8GCBahSpQrPwBGpAYMWUQWmVCrV3YRSS09Ph4GBgbqb8U4yMTHB559/rlI2c+ZMDBs2DAsWLICjoyNmzZqlptYRUVnw0iFRBfZqP6Hs7GxMmTIFzs7O0NXVhYWFBVq3bi1degoKCkJERAQASJepFAqFNH16ejpGjRoFOzs7KJVK1KlTBz/88AOEECrLff78OYYNG4YqVarAyMgIH3/8Me7evQuFQqFypmzy5MlQKBS4ePEiPvvsM5iZmaF169YAgHPnziEoKAg1a9aErq4urK2t0b9/fzx69EhlWfnzuHLlCj7//HOYmJigatWqmDhxIoQQuH37Nrp27QpjY2NYW1sjPDxcZfqsrCxMmjQJbm5uMDExgYGBAdq0aYO9e/eWaBsLITB9+nRUr14d+vr68PLyQmxsbKF1nzx5guHDh0vbz8nJCbNmzUJeXl6JllUYTU1N/PTTT3BxccH8+fORkpIijYuMjET79u1haWkJpVIJFxcXLFy4UGV6R0dHxMbGYv/+/dL+bteunTT+xo0b+PTTT2Fubg59fX20aNECW7ZsKdCOn3/+GfXr14e+vj7MzMzg7u6O1atXl3m9iN4XPKNF9I5JSUnBw4cPC5RnZ2cXO+3kyZMRFhaGgQMHolmzZkhNTcWJEydw6tQpfPjhh/jyyy9x7949REVF4b///a/KtEIIfPzxx9i7dy8GDBgAV1dX7NixA2PGjMHdu3cxd+5cqW5QUBB+//139O3bFy1atMD+/fvh5+dXZLs+/fRTODs7Y8aMGVJoi4qKwo0bN9CvXz9YW1sjNjYWixcvRmxsLI4cOaISAAGgV69eqFevHmbOnIktW7Zg+vTpMDc3xy+//IL27dtj1qxZWLVqFUaPHo0PPvgAbdu2BQCkpqbi119/RZ8+fTBo0CA8ffoUS5cuhY+PD44dOwZXV9fXbtNJkyZh+vTp6Ny5Mzp37oxTp06hY8eOyMrKUqn37NkzeHp64u7du/jyyy9hb2+P6OhojB8/Hvfv38e8efOK231F0tTURJ8+fTBx4kQcOnRI2tYLFy5E/fr18fHHH0NLSwubNm3CV199hby8PAQHBwMA5s2bh6FDh8LQ0BDffvstAMDKygoAkJiYiJYtW+LZs2cYNmwYLCwssHz5cnz88cf4888/0b17dwDAkiVLMGzYMPTo0QNff/01MjIycO7cORw9ehSfffZZmdeL6L0giOidEBkZKQC8dqhfv77KNA4ODiIwMFB63bhxY+Hn5/fa5QQHB4vCPvp//fWXACCmT5+uUt6jRw+hUCjEtWvXhBBCnDx5UgAQw4cPV6kXFBQkAIjQ0FCpLDQ0VAAQffr0KbC8Z8+eFShbs2aNACAOHDhQYB6DBw+WynJyckT16tWFQqEQM2fOlMofP34s9PT0VLZJTk6OyMzMVFnO48ePhZWVlejfv3+BNrwsKSlJ6OjoCD8/P5GXlyeV/9///Z8AoLKcadOmCQMDA3HlyhWVeYwbN05oamqK+Pj41y7L09OzwP592caNGwUA8eOPP0plhW1DHx8fUbNmTZWy+vXrC09PzwJ1hw8fLgCIgwcPSmVPnz4VNWrUEI6OjiI3N1cIIUTXrl1f2zYiKhovHRK9YyIiIhAVFVVgaNSoUbHTmpqaIjY2FlevXi31crdu3QpNTU0MGzZMpXzUqFEQQmDbtm0AgO3btwMAvvrqK5V6Q4cOLXLe//nPfwqU6enpSf/PyMjAw4cP0aJFCwDAqVOnCtQfOHCg9H9NTU24u7tDCIEBAwZI5aampqhTpw5u3LihUldHRwcAkJeXh+TkZOTk5MDd3b3Q5bxs165dyMrKwtChQ1XOsA0fPrxA3T/++ANt2rSBmZkZHj58KA3e3t7Izc3FgQMHXrus4hgaGgIAnj59KpW9vA3zz4R6enrixo0bKpcYi7J161Y0a9ZMupybv5zBgwfj1q1buHjxIoAX2/XOnTs4fvz4G60D0fuIlw6J3jHNmjWDu7t7gfL8P+CvM3XqVHTt2hW1a9dGgwYN4Ovri759+5YopP3777+wtbWFkZGRSnm9evWk8fn/amhooEaNGir1nJycipz3q3UBIDk5GVOmTMHatWuRlJSkMq6wkGBvb6/y2sTEBLq6uqhSpUqB8lf7eS1fvhzh4eG4fPmyyiXYwtr1svx1dnZ2VimvWrUqzMzMVMquXr2Kc+fOoWrVqoXO69V1LK20tDQAUNk/hw8fRmhoKGJiYvDs2TOV+ikpKTAxMXntPP/99180b968QPnL+7xBgwb45ptvsGvXLjRr1gxOTk7o2LEjPvvsM7Rq1eqN1onofcCgRVSJtG3bFtevX8fff/+NnTt34tdff8XcuXOxaNEilTNCb9vLZ17y9ezZE9HR0RgzZgxcXV1haGiIvLw8+Pr6Ftp5XFNTs0RlAFQ6769cuRJBQUHo1q0bxowZA0tLS2hqaiIsLAzXr19/g7VSlZeXhw8//BBjx44tdHzt2rXfaP4XLlwA8L9Ae/36dXTo0AF169bFnDlzYGdnBx0dHWzduhVz5859ow74r6pXrx7i4uKwefNmbN++HevXr8eCBQswadIkTJkypdyWQ1QZMWgRVTLm5ubo168f+vXrh7S0NLRt2xaTJ0+WgtarnczzOTg4YNeuXXj69KnKWZPLly9L4/P/zcvLw82bN1XO9Fy7dq3EbXz8+DF2796NKVOmYNKkSVJ5WS55FufPP/9EzZo1sWHDBpV1Dw0NLXba/HW+evUqatasKZU/ePAAjx8/Vqlbq1YtpKWlwdvbu5xa/j+5ublYvXo19PX1pct8mzZtQmZmJv755x+Vs32F3U35un0eFxdXoPzVfQ4ABgYG6NWrF3r16oWsrCx88skn+O677zB+/Hjo6uq+0foRVWbso0VUibx6yczQ0BBOTk7IzMyUyvKfYfXkyROVup07d0Zubi7mz5+vUj537lwoFAp06tQJAODj4wPgxUMwX/bzzz+XuJ35Z6LEK4+NeJM780qzrKNHjyImJqbYab29vaGtrY2ff/5ZZfrC2tmzZ0/ExMRgx44dBcY9efIEOTk5ZWj9i5A1bNgwXLp0CcOGDYOxsTGAwtcrJSUFkZGRBeZhYGBQYH8DL/b5sWPHVLZFeno6Fi9eDEdHR7i4uAAo+L7S0dGBi4sLhBAluhuW6H3GM1pElYiLiwvatWsHNzc3mJub48SJE/jzzz8REhIi1XFzcwMADBs2DD4+PtDU1ETv3r3RpUsXeHl54dtvv8WtW7fQuHFj7Ny5E3///TeGDx+OWrVqSdP7+/tj3rx5ePTokfR4hytXrgAo+uzJy4yNjdG2bVvMnj0b2dnZqFatGnbu3ImbN2+W+zb56KOPsGHDBnTv3h1+fn64efMmFi1aBBcXF6nfU1GqVq2K0aNHIywsDB999BE6d+6M06dPY9u2bQX6ho0ZMwb//PMPPvroIwQFBcHNzQ3p6ek4f/48/vzzT9y6davANK9KSUnBypUrAbx4XET+k+GvX7+O3r17Y9q0aVLdjh07QkdHB126dMGXX36JtLQ0LFmyBJaWlrh//77KfN3c3LBw4UJMnz4dTk5OsLS0RPv27TFu3DisWbMGnTp1wrBhw2Bubo7ly5fj5s2bWL9+vfSrAx07doS1tTVatWoFKysrXLp0CfPnz4efn1+BPn1E9Ar13fBIRC/Lf7zD8ePHCx1f2O3/rz7eYfr06aJZs2bC1NRU6Onpibp164rvvvtOZGVlSXVycnLE0KFDRdWqVYVCoVB51MPTp0/FiBEjhK2trdDW1hbOzs7i+++/V3m0gRBCpKeni+DgYGFubi4MDQ1Ft27dRFxcnACg8riF/EczPHjwoMD63LlzR3Tv3l2YmpoKExMT8emnn4p79+4V+YiIV+cRGBgoDAwMit1OeXl5YsaMGcLBwUEolUrRpEkTsXnzZhEYGCgcHBwK3dYvy83NFVOmTBE2NjZCT09PtGvXTly4cKHAts/ffuPHjxdOTk5CR0dHVKlSRbRs2VL88MMPKvugMJ6eniqP8jA0NBTOzs7i888/Fzt37ix0mn/++Uc0atRI6OrqCkdHRzFr1izx22+/CQDi5s2bUr2EhATh5+cnjIyMBACVRz1cv35d9OjRQ5iamgpdXV3RrFkzsXnzZpXl/PLLL6Jt27bCwsJCKJVKUatWLTFmzBiRkpJS7PYjet8phHjl3D0RURmcOXMGTZo0wcqVKxEQEKDu5hARvRPYR4uISu358+cFyubNmwcNDQ3piexERMQ+WkRUBrNnz8bJkyfh5eUFLS0tbNu2Ddu2bcPgwYNhZ2en7uYREb0zeOmQiEotKioKU6ZMwcWLF5GWlgZ7e3v07dsX3377LbS0+P2NiCgfgxYRERGRTNhHi4iIiEgmDFpEREREMmFnCrz4jbJ79+7ByMioRA9bJCIiIvUTQuDp06ewtbWVHrD7rmHQAnDv3j3eKUVERFRB3b59G9WrV1d3MwrFoAVIPyFx+/Zt6XfEiIiI6N2WmpoKOzu7d/qnoBi08L/fZjM2NmbQIiIiqmDe5W4/7+YFTSIiIqJKQO1B6+7du/j8889hYWEBPT09NGzYECdOnJDGCyEwadIk2NjYQE9PD97e3rh69arKPJKTkxEQEABjY2OYmppiwIABSEtLe9urQkRERKRCrUHr8ePHaNWqFbS1tbFt2zZcvHgR4eHhMDMzk+rMnj0bP/30ExYtWoSjR4/CwMAAPj4+yMjIkOoEBAQgNjYWUVFR2Lx5Mw4cOIDBgwerY5WIiIiIJGp9Mvy4ceNw+PBhHDx4sNDxQgjY2tpi1KhRGD16NAAgJSUFVlZWWLZsGXr37o1Lly7BxcUFx48fh7u7OwBg+/bt6Ny5M+7cuQNbW9ti25GamgoTExOkpKSwjxYREVEFURH+fqv1jNY///wDd3d3fPrpp7C0tESTJk2wZMkSafzNmzeRkJAAb29vqczExATNmzdHTEwMACAmJgampqZSyAIAb29vaGho4OjRo4UuNzMzE6mpqSoDERERUXlTa9C6ceMGFi5cCGdnZ+zYsQNDhgzBsGHDsHz5cgBAQkICAMDKykplOisrK2lcQkICLC0tVcZraWnB3NxcqvOqsLAwmJiYSAOfoUVERERyUGvQysvLQ9OmTTFjxgw0adIEgwcPxqBBg7Bo0SJZlzt+/HikpKRIw+3bt2VdHhEREb2f1Bq0bGxs4OLiolJWr149xMfHAwCsra0BAImJiSp1EhMTpXHW1tZISkpSGZ+Tk4Pk5GSpzquUSqX0zCw+O4uIiIjkotag1apVK8TFxamUXblyBQ4ODgCAGjVqwNraGrt375bGp6am4ujRo/Dw8AAAeHh44MmTJzh58qRUZ8+ePcjLy0Pz5s3fwloQERERFU6tT4YfMWIEWrZsiRkzZqBnz544duwYFi9ejMWLFwN48aTX4cOHY/r06XB2dkaNGjUwceJE2Nraolu3bgBenAHz9fWVLjlmZ2cjJCQEvXv3LtEdh0RERERyUevjHQBg8+bNGD9+PK5evYoaNWpg5MiRGDRokDReCIHQ0FAsXrwYT548QevWrbFgwQLUrl1bqpOcnIyQkBBs2rQJGhoa8Pf3x08//QRDQ8MStaEi3B5KREREqirC32+1B613QUXYUURERKSqIvz9VvtP8BARERFVVgxaRERERDJRa2d4IiIienfEx8fj4cOH5T7fKlWqwN7evtznWxEwaBERERHi4+NRp249ZDx/Vu7z1tXTR9zlS+9l2GLQIiIiIjx8+BAZz5/B4qNR0LYov5+my350G482h+Phw4cMWkRERPR+07awg9LaSd3NqDTYGZ6IiIhIJgxaRERERDJh0CIiIiKSCftoEamJXLdRA+/3rdRERO8SBi0iNZDzNmrg/b6VmojoXcKgRaQGct1GDfBWaiKidwmDFpEa8TZqIqLKjZ3hiYiIiGTCM1pEVOnx99uISF0YtIioUuPvtxGROjFoEVGlxt9vIyJ1YtAiovcCbzwgInVgZ3giIiIimTBoEREREcmElw6JiOi9xTtSSW4MWkRE9F7iHan0NjBoERHRe4l3pNLbwKBFRETvNd6RSnJi0CIieo/I1ScJYL8kosIwaBERvSfk7JMEsF8SUWEYtIiI3hNy9UkC2C+JqCgMWjLjaXoietewTxLR28OgJSOepiciInq/MWjJiKfpC+LDAYmI6H3CoPUW8DT9C3w4IBERvW8YtOit4cMBiYjofcOgRW8dz/AREdH7QkPdDSAiIiKqrBi0iIiIiGTCoEVEREQkEwYtIiIiIpkwaBERERHJhEGLiIiISCYMWkREREQyYdAiIiIikgmDFhEREZFMGLSIiIiIZMKgRURERCQTBi0iIiIimTBoEREREcmEQYuIiIhIJgxaRERERDJh0CIiIiKSiVqD1uTJk6FQKFSGunXrSuMzMjIQHBwMCwsLGBoawt/fH4mJiSrziI+Ph5+fH/T19WFpaYkxY8YgJyfnba8KERERUQFa6m5A/fr1sWvXLum1ltb/mjRixAhs2bIFf/zxB0xMTBASEoJPPvkEhw8fBgDk5ubCz88P1tbWiI6Oxv379/HFF19AW1sbM2bMeOvrQkRERPQytQctLS0tWFtbFyhPSUnB0qVLsXr1arRv3x4AEBkZiXr16uHIkSNo0aIFdu7ciYsXL2LXrl2wsrKCq6srpk2bhm+++QaTJ0+Gjo7O214dIiIiIona+2hdvXoVtra2qFmzJgICAhAfHw8AOHnyJLKzs+Ht7S3VrVu3Luzt7RETEwMAiImJQcOGDWFlZSXV8fHxQWpqKmJjY4tcZmZmJlJTU1UGIiIiovKm1qDVvHlzLFu2DNu3b8fChQtx8+ZNtGnTBk+fPkVCQgJ0dHRgamqqMo2VlRUSEhIAAAkJCSohK398/riihIWFwcTERBrs7OzKd8WIiIiIoOZLh506dZL+36hRIzRv3hwODg74/fffoaenJ9tyx48fj5EjR0qvU1NTGbaIiIio3Kn90uHLTE1NUbt2bVy7dg3W1tbIysrCkydPVOokJiZKfbqsra0L3IWY/7qwfl/5lEoljI2NVQYiIiKi8vZOBa20tDRcv34dNjY2cHNzg7a2Nnbv3i2Nj4uLQ3x8PDw8PAAAHh4eOH/+PJKSkqQ6UVFRMDY2houLy1tvPxEREdHL1HrpcPTo0ejSpQscHBxw7949hIaGQlNTE3369IGJiQkGDBiAkSNHwtzcHMbGxhg6dCg8PDzQokULAEDHjh3h4uKCvn37Yvbs2UhISMCECRMQHBwMpVKpzlUjIiIiUm/QunPnDvr06YNHjx6hatWqaN26NY4cOYKqVasCAObOnQsNDQ34+/sjMzMTPj4+WLBggTS9pqYmNm/ejCFDhsDDwwMGBgYIDAzE1KlT1bVKRERERBK1Bq21a9e+dryuri4iIiIQERFRZB0HBwds3bq1vJtGRERE9MbeqT5aRERERJUJgxYRERGRTBi0iIiIiGTCoEVEREQkEwYtIiIiIpkwaBERERHJhEGLiIiISCYMWkREREQyYdAiIiIikgmDFhEREZFMGLSIiIiIZMKgRURERCQTBi0iIiIimTBoEREREcmEQYuIiIhIJgxaRERERDJh0CIiIiKSCYMWERERkUwYtIiIiIhkwqBFREREJBMGLSIiIiKZMGgRERERyYRBi4iIiEgmDFpEREREMmHQIiIiIpIJgxYRERGRTBi0iIiIiGTCoEVEREQkEwYtIiIiIpkwaBERERHJhEGLiIiISCYMWkREREQyYdAiIiIikgmDFhEREZFMGLSIiIiIZMKgRURERCQTBi0iIiIimTBoEREREcmEQYuIiIhIJgxaRERERDJh0CIiIiKSCYMWERERkUwYtIiIiIhkwqBFREREJBMGLSIiIiKZMGgRERERyYRBi4iIiEgmDFpEREREMmHQIiIiIpLJOxO0Zs6cCYVCgeHDh0tlGRkZCA4OhoWFBQwNDeHv74/ExESV6eLj4+Hn5wd9fX1YWlpizJgxyMnJecutJyIiIironQhax48fxy+//IJGjRqplI8YMQKbNm3CH3/8gf379+PevXv45JNPpPG5ubnw8/NDVlYWoqOjsXz5cixbtgyTJk1626tAREREVIDag1ZaWhoCAgKwZMkSmJmZSeUpKSlYunQp5syZg/bt28PNzQ2RkZGIjo7GkSNHAAA7d+7ExYsXsXLlSri6uqJTp06YNm0aIiIikJWVpa5VIiIiIgLwDgSt4OBg+Pn5wdvbW6X85MmTyM7OVimvW7cu7O3tERMTAwCIiYlBw4YNYWVlJdXx8fFBamoqYmNj384KEBERERVBS50LX7t2LU6dOoXjx48XGJeQkAAdHR2YmpqqlFtZWSEhIUGq83LIyh+fP64omZmZyMzMlF6npqaWdRWIiIiIiqS2M1q3b9/G119/jVWrVkFXV/etLjssLAwmJibSYGdn91aXT0RERO8HtQWtkydPIikpCU2bNoWWlha0tLSwf/9+/PTTT9DS0oKVlRWysrLw5MkTlekSExNhbW0NALC2ti5wF2L+6/w6hRk/fjxSUlKk4fbt2+W7ckRERERQY9Dq0KEDzp8/jzNnzkiDu7s7AgICpP9ra2tj9+7d0jRxcXGIj4+Hh4cHAMDDwwPnz59HUlKSVCcqKgrGxsZwcXEpctlKpRLGxsYqAxEREVF5U1sfLSMjIzRo0EClzMDAABYWFlL5gAEDMHLkSJibm8PY2BhDhw6Fh4cHWrRoAQDo2LEjXFxc0LdvX8yePRsJCQmYMGECgoODoVQq3/o6EREREb1MrZ3hizN37lxoaGjA398fmZmZ8PHxwYIFC6Txmpqa2Lx5M4YMGQIPDw8YGBggMDAQU6dOVWOriYiIiF54p4LWvn37VF7r6uoiIiICERERRU7j4OCArVu3ytwyIiIiotJT+3O0iIiIiCorBi0iIiIimTBoEREREcmEQYuIiIhIJgxaRERERDJh0CIiIiKSCYMWERERkUwYtIiIiIhkwqBFREREJBMGLSIiIiKZMGgRERERyYRBi4iIiEgmDFpEREREMmHQIiIiIpIJgxYRERGRTBi0iIiIiGTCoEVEREQkEwYtIiIiIpkwaBERERHJhEGLiIiISCYMWkREREQyYdAiIiIikolWSSuOHDmyxDOdM2dOmRpDREREVJmUOGidPn1a5fWpU6eQk5ODOnXqAACuXLkCTU1NuLm5lW8LiYiIiCqoEgetvXv3Sv+fM2cOjIyMsHz5cpiZmQEAHj9+jH79+qFNmzbl30oiIiKiCqhMfbTCw8MRFhYmhSwAMDMzw/Tp0xEeHl5ujSMiIiKqyMoUtFJTU/HgwYMC5Q8ePMDTp0/fuFFERERElUGZglb37t3Rr18/bNiwAXfu3MGdO3ewfv16DBgwAJ988kl5t5GIiIioQipxH62XLVq0CKNHj8Znn32G7OzsFzPS0sKAAQPw/fffl2sDiYiIiCqqMgUtfX19LFiwAN9//z2uX78OAKhVqxYMDAzKtXFEREREFVmZglY+AwMDNGrUqLzaQkRERFSplDlonThxAr///jvi4+ORlZWlMm7Dhg1v3DAiIiKiiq5MneHXrl2Lli1b4tKlS9i4cSOys7MRGxuLPXv2wMTEpLzbSERERFQhlSlozZgxA3PnzsWmTZugo6ODH3/8EZcvX0bPnj1hb29f3m0kIiIiqpDKFLSuX78OPz8/AICOjg7S09OhUCgwYsQILF68uFwbSERERFRRlSlomZmZSQ8mrVatGi5cuAAAePLkCZ49e1Z+rSMiIiKqwMrUGb5t27aIiopCw4YN8emnn+Lrr7/Gnj17EBUVhQ4dOpR3G4mIiIgqpDIFrfnz5yMjIwMA8O2330JbWxvR0dHw9/fHhAkTyrWBRERERBVVmYKWubm59H8NDQ2MGzeu3BpEREREVFmUOGilpqaWeKbGxsZlagwRERFRZVLioGVqagqFQlGiurm5uWVuEBEREVFlUeKgtXfvXun/t27dwrhx4xAUFAQPDw8AQExMDJYvX46wsLDybyURERFRBVTioOXp6Sn9f+rUqZgzZw769OkjlX388cdo2LAhFi9ejMDAwPJtJREREVEFVKbnaMXExMDd3b1Aubu7O44dO/bGjSIiIiKqDMoUtOzs7LBkyZIC5b/++ivs7OzeuFFERERElUGZHu8wd+5c+Pv7Y9u2bWjevDkA4NixY7h69SrWr19frg0kIiIiqqjKdEarc+fOuHLlCrp06YLk5GQkJyejS5cuuHLlCjp37lzebSQiIiKqkMp0Rgt4cflwxowZ5dkWIiIiokqlxEHr3LlzaNCgATQ0NHDu3LnX1m3UqNEbN4yIiIiooitx0HJ1dUVCQgIsLS3h6uoKhUIBIUSBegqFgg8sJSIiIkIp+mjdvHkTVatWlf5/48YN3Lx5s8Bw48aNEi984cKFaNSoEYyNjWFsbAwPDw9s27ZNGp+RkYHg4GBYWFjA0NAQ/v7+SExMVJlHfHw8/Pz8oK+vD0tLS4wZMwY5OTklbgMRERGRXEp8RsvBwUH6/7///ouWLVtCS0t18pycHERHR6vUfZ3q1atj5syZcHZ2hhACy5cvR9euXXH69GnUr18fI0aMwJYtW/DHH3/AxMQEISEh+OSTT3D48GEAL37qx8/PD9bW1oiOjsb9+/fxxRdfQFtbm/3HiIiISO3KdNehl5cXkpOTC5SnpKTAy8urxPPp0qULOnfuDGdnZ9SuXRvfffcdDA0NceTIEaSkpGDp0qWYM2cO2rdvDzc3N0RGRiI6OhpHjhwBAOzcuRMXL17EypUr4erqik6dOmHatGmIiIhAVlZWWVaNiIiIqNyUKWgJIQr9gelHjx7BwMCgTA3Jzc3F2rVrkZ6eDg8PD5w8eRLZ2dnw9vaW6tStWxf29vaIiYkB8OIJ9Q0bNoSVlZVUx8fHB6mpqYiNjS1yWZmZmUhNTVUZiIiIiMpbqR7v8MknnwB40eE9KCgISqVSGpebm4tz586hZcuWpWrA+fPn4eHhgYyMDBgaGmLjxo1wcXHBmTNnoKOjA1NTU5X6VlZWSEhIAAAkJCSohKz88fnjihIWFoYpU6aUqp1EREREpVWqoGViYgLgxRktIyMj6OnpSeN0dHTQokULDBo0qFQNqFOnDs6cOYOUlBT8+eefCAwMxP79+0s1j9IaP348Ro4cKb1OTU3lTwcRERFRuStV0IqMjAQAODo6YvTo0WW+TPgyHR0dODk5AQDc3Nxw/Phx/Pjjj+jVqxeysrLw5MkTlbNaiYmJsLa2BgBYW1sX+BHr/LsS8+sURqlUqpyNIyIiIpJDmfpohYaGlkvIKkxeXh4yMzPh5uYGbW1t7N69WxoXFxeH+Ph4eHh4AAA8PDxw/vx5JCUlSXWioqJgbGwMFxcXWdpHREREVFJl+gmexMREjB49Grt370ZSUlKBB5eW9IGl48ePR6dOnWBvb4+nT59i9erV2LdvH3bs2AETExMMGDAAI0eOhLm5OYyNjTF06FB4eHigRYsWAICOHTvCxcUFffv2xezZs5GQkIAJEyYgODiYZ6yIiIhI7coUtIKCghAfH4+JEyfCxsam0DsQSyIpKQlffPEF7t+/DxMTEzRq1Ag7duzAhx9+CACYO3cuNDQ04O/vj8zMTPj4+GDBggXS9Jqamti8eTOGDBkCDw8PGBgYIDAwEFOnTi1Te4iIiIjKU5mC1qFDh3Dw4EG4urq+0cKXLl362vG6urqIiIhAREREkXUcHBywdevWN2oHERERkRzK1EfLzs6u0N85JCIiIqL/KVPQmjdvHsaNG4dbt26Vc3OIiIiIKo8yXTrs1asXnj17hlq1akFfXx/a2toq4wv7eR4iIiKi902Zgta8efPKuRlERERElU+ZglZgYGB5t4OIiIio0ilT0HpZRkYGsrKyVMqMjY3fdLZEREREFV6ZOsOnp6cjJCQElpaWMDAwgJmZmcpARERERGUMWmPHjsWePXuwcOFCKJVK/Prrr5gyZQpsbW2xYsWK8m4jERERUYVUpkuHmzZtwooVK9CuXTv069cPbdq0gZOTExwcHLBq1SoEBASUdzuJiIiIKpwyndFKTk5GzZo1Abzoj5X/OIfWrVvjwIED5dc6IiIiogqsTEGrZs2auHnzJgCgbt26+P333wG8ONNlampabo0jIiIiqsjKFLT69euHs2fPAgDGjRuHiIgI6OrqYvjw4RgzZky5NpCIiIiooipTH60RI0ZI//f29sbly5dx8uRJODs7o2HDhuXWOCIiIqKKrFRntPbs2QMXFxekpqaqlDs4OKBDhw7o3bs3Dh48WK4NJCIiIqqoShW05s2bh0GDBhX6QFITExN8+eWXmDNnTrk1joiIiKgiK1XQOnv2LHx9fYsc37FjR5w8efKNG0VERERUGZQqaCUmJkJbW7vI8VpaWnjw4MEbN4qIiIioMihV0KpWrRouXLhQ5Phz587BxsbmjRtFREREVBmUKmh17twZEydOREZGRoFxz58/R2hoKD766KNyaxwRERFRRVaqxztMmDABGzZsQO3atRESEoI6deoAAC5fvoyIiAjk5ubi22+/laWhRERERBVNqYKWlZUVoqOjMWTIEIwfPx5CCACAQqGAj48PIiIiYGVlJUtDiYiIiCqaUj+w1MHBAVu3bsXjx49x7do1CCHg7OwMMzMzOdpHREREVGGV6cnwAGBmZoYPPvigPNtCREREVKmU6bcOiYiIiKh4DFpEREREMmHQIiIiIpIJgxYRERGRTBi0iIiIiGTCoEVEREQkEwYtIiIiIpkwaBERERHJhEGLiIiISCYMWkREREQyYdAiIiIikgmDFhEREZFMGLSIiIiIZMKgRURERCQTBi0iIiIimTBoEREREcmEQYuIiIhIJgxaRERERDJh0CIiIiKSCYMWERERkUwYtIiIiIhkwqBFREREJBMGLSIiIiKZMGgRERERyYRBi4iIiEgmDFpEREREMlFr0AoLC8MHH3wAIyMjWFpaolu3boiLi1Opk5GRgeDgYFhYWMDQ0BD+/v5ITExUqRMfHw8/Pz/o6+vD0tISY8aMQU5OzttcFSIiIqIC1Bq09u/fj+DgYBw5cgRRUVHIzs5Gx44dkZ6eLtUZMWIENm3ahD/++AP79+/HvXv38Mknn0jjc3Nz4efnh6ysLERHR2P58uVYtmwZJk2apI5VIiIiIpJoqXPh27dvV3m9bNkyWFpa4uTJk2jbti1SUlKwdOlSrF69Gu3btwcAREZGol69ejhy5AhatGiBnTt34uLFi9i1axesrKzg6uqKadOm4ZtvvsHkyZOho6OjjlUjIiIierf6aKWkpAAAzM3NAQAnT55EdnY2vL29pTp169aFvb09YmJiAAAxMTFo2LAhrKyspDo+Pj5ITU1FbGxsocvJzMxEamqqykBERERU3t6ZoJWXl4fhw4ejVatWaNCgAQAgISEBOjo6MDU1ValrZWWFhIQEqc7LISt/fP64woSFhcHExEQa7OzsynltiIiIiN6hoBUcHIwLFy5g7dq1si9r/PjxSElJkYbbt2/LvkwiIiJ6/6i1j1a+kJAQbN68GQcOHED16tWlcmtra2RlZeHJkycqZ7USExNhbW0t1Tl27JjK/PLvSsyv8yqlUgmlUlnOa0FERESkSq1ntIQQCAkJwcaNG7Fnzx7UqFFDZbybmxu0tbWxe/duqSwuLg7x8fHw8PAAAHh4eOD8+fNISkqS6kRFRcHY2BguLi5vZ0WIiIiICqHWM1rBwcFYvXo1/v77bxgZGUl9qkxMTKCnpwcTExMMGDAAI0eOhLm5OYyNjTF06FB4eHigRYsWAICOHTvCxcUFffv2xezZs5GQkIAJEyYgODiYZ62IiIhIrdQatBYuXAgAaNeunUp5ZGQkgoKCAABz586FhoYG/P39kZmZCR8fHyxYsECqq6mpic2bN2PIkCHw8PCAgYEBAgMDMXXq1Le1GkRERESFUmvQEkIUW0dXVxcRERGIiIgoso6DgwO2bt1ank0jIiIiemPvzF2HRERERJUNgxYRERGRTBi0iIiIiGTCoEVEREQkEwYtIiIiIpkwaBERERHJhEGLiIiISCYMWkREREQyYdAiIiIikgmDFhEREZFMGLSIiIiIZMKgRURERCQTBi0iIiIimTBoEREREcmEQYuIiIhIJgxaRERERDJh0CIiIiKSCYMWERERkUwYtIiIiIhkwqBFREREJBMGLSIiIiKZMGgRERERyYRBi4iIiEgmDFpEREREMmHQIiIiIpIJgxYRERGRTBi0iIiIiGTCoEVEREQkEwYtIiIiIpkwaBERERHJhEGLiIiISCYMWkREREQyYdAiIiIikgmDFhEREZFMGLSIiIiIZMKgRURERCQTBi0iIiIimTBoEREREcmEQYuIiIhIJgxaRERERDJh0CIiIiKSCYMWERERkUwYtIiIiIhkwqBFREREJBMGLSIiIiKZMGgRERERyYRBi4iIiEgmDFpEREREMmHQIiIiIpKJWoPWgQMH0KVLF9ja2kKhUOCvv/5SGS+EwKRJk2BjYwM9PT14e3vj6tWrKnWSk5MREBAAY2NjmJqaYsCAAUhLS3uLa0FERERUOLUGrfT0dDRu3BgRERGFjp89ezZ++uknLFq0CEePHoWBgQF8fHyQkZEh1QkICEBsbCyioqKwefNmHDhwAIMHD35bq0BERERUJC11LrxTp07o1KlToeOEEJg3bx4mTJiArl27AgBWrFgBKysr/PXXX+jduzcuXbqE7du34/jx43B3dwcA/Pzzz+jcuTN++OEH2NravrV1ISIiInrVO9tH6+bNm0hISIC3t7dUZmJigubNmyMmJgYAEBMTA1NTUylkAYC3tzc0NDRw9OjRIuedmZmJ1NRUlYGIiIiovL2zQSshIQEAYGVlpVJuZWUljUtISIClpaXKeC0tLZibm0t1ChMWFgYTExNpsLOzK+fWExEREb3DQUtO48ePR0pKijTcvn1b3U0iIiKiSuidDVrW1tYAgMTERJXyxMREaZy1tTWSkpJUxufk5CA5OVmqUxilUgljY2OVgYiIiKi8vbNBq0aNGrC2tsbu3bulstTUVBw9ehQeHh4AAA8PDzx58gQnT56U6uzZswd5eXlo3rz5W28zERER0cvUetdhWloarl27Jr2+efMmzpw5A3Nzc9jb22P48OGYPn06nJ2dUaNGDUycOBG2trbo1q0bAKBevXrw9fXFoEGDsGjRImRnZyMkJAS9e/fmHYdERESkdmoNWidOnICXl5f0euTIkQCAwMBALFu2DGPHjkV6ejoGDx6MJ0+eoHXr1ti+fTt0dXWlaVatWoWQkBB06NABGhoa8Pf3x08//fTW14WIiIjoVWoNWu3atYMQosjxCoUCU6dOxdSpU4usY25ujtWrV8vRPCIiIqI38s720SIiIiKq6Bi0iIiIiGTCoEVEREQkEwYtIiIiIpkwaBERERHJhEGLiIiISCYMWkREREQyYdAiIiIikgmDFhEREZFMGLSIiIiIZMKgRURERCQTBi0iIiIimTBoEREREcmEQYuIiIhIJgxaRERERDJh0CIiIiKSCYMWERERkUwYtIiIiIhkwqBFREREJBMGLSIiIiKZMGgRERERyYRBi4iIiEgmDFpEREREMmHQIiIiIpIJgxYRERGRTBi0iIiIiGTCoEVEREQkEwYtIiIiIpkwaBERERHJhEGLiIiISCYMWkREREQyYdAiIiIikgmDFhEREZFMGLSIiIiIZMKgRURERCQTBi0iIiIimTBoEREREcmEQYuIiIhIJgxaRERERDJh0CIiIiKSCYMWERERkUwYtIiIiIhkwqBFREREJBMGLSIiIiKZMGgRERERyYRBi4iIiEgmDFpEREREMmHQIiIiIpIJgxYRERGRTCpN0IqIiICjoyN0dXXRvHlzHDt2TN1NIiIiovdcpQha69atw8iRIxEaGopTp06hcePG8PHxQVJSkrqbRkRERO+xShG05syZg0GDBqFfv35wcXHBokWLoK+vj99++03dTSMiIqL3WIUPWllZWTh58iS8vb2lMg0NDXh7eyMmJkaNLSMiIqL3nZa6G/CmHj58iNzcXFhZWamUW1lZ4fLly4VOk5mZiczMTOl1SkoKACA1NbVc25aWlvZieQnXkJeVUa7zzk6+AwA4efKktJzyoqGhgby8vHKdJwDExcUBKP/tIee2AOTZHnJtC6Bibg8558v33f9U1Pcd3xuqKur2SEtLK/e/s/nzE0KU63zLlajg7t69KwCI6OholfIxY8aIZs2aFTpNaGioAMCBAwcOHDhwqATD7du330bkKJMKf0arSpUq0NTURGJiokp5YmIirK2tC51m/PjxGDlypPQ6Ly8PycnJsLCwgEKhKLe2paamws7ODrdv34axsXG5zbcy4rYqHW6vkuO2Kjluq5Ljtio5ObeVEAJPnz6Fra1tuc63PFX4oKWjowM3Nzfs3r0b3bp1A/AiOO3evRshISGFTqNUKqFUKlXKTE1NZWujsbExP4glxG1VOtxeJcdtVXLcViXHbVVycm0rExOTcp9nearwQQsARo4cicDAQLi7u6NZs2aYN28e0tPT0a9fP3U3jYiIiN5jlSJo9erVCw8ePMCkSZOQkJAAV1dXbN++vUAHeSIiIqK3qVIELQAICQkp8lKhuiiVSoSGhha4TEkFcVuVDrdXyXFblRy3VclxW5Xc+76tFEK8y/dEEhEREVVcFf6BpURERETvKgYtIiIiIpkwaBERERHJhEFLRu3atcPw4cNLNY1CocBff/31VpZVURS3bkFBQdIz1Oj1li1bpvLMuMmTJ8PV1VVt7anIyvpZfRO3bt2CQqHAmTNn3upyS8LR0RHz5s0rcnxlPkYVpbj3yL59+6BQKPDkyZO31iYqSO7PcqULWkFBQVAoFAWGa9eulXmeZd0JGzZswLRp08q83MKo84O5aNEiGBkZIScnRypLS0uDtrY22rVrp1I3v53Xr19/y61Un5iYGGhqasLPz0/dTXkn3b59G/3794etrS10dHTg4OCAr7/+Go8ePXory68If+hfPX5ZWFjA19cX586dAwDY2dnh/v37aNCgQaHTjxs3DnXr1lUpu3z5MhQKBYKCglTKly1bBqVSiefPn8uyLuqUvx3/85//FBgXHBxc6PZ4E+X9haWov2O+vr7ltozyNHnyZNStWxcGBgYwMzODt7c3jh49+tpp3vY+ym+nOr5YVrqgBQC+vr64f/++ylCjRo1SzycrK+uN2mFubg4jI6M3mse7xMvLC2lpaThx4oRUdvDgQVhbW+Po0aPIyPjfj5Du3bsX9vb2qFWrljqaqhZLly7F0KFDceDAAdy7d0/dzXmn3LhxA+7u7rh69SrWrFmDa9euYdGiRdi9ezc8PDyQnJws27Lf9HMs9/xe9fLxa/fu3dDS0sJHH30EANDU1IS1tTW0tAp/Mo+Xlxfi4uKQkJAgle3duxd2dnbYt2+fSt29e/eiRYsW0NPTk21d1MnOzg5r165VCZIZGRlYvXo17O3t1diykins79iaNWtkW54QQuVLdGnUrl0b8+fPx/nz53Ho0CE4OjqiY8eOePDgwWunq+j7qKQqZdBSKpWwtrZWGTQ1NbF//340a9YMSqUSNjY2GDdunMobq127dggJCcHw4cNRpUoV+Pj4wNHREQDQvXt3KBQK6XV+Mv7vf/8LR0dHmJiYoHfv3nj69KnK/F7+Bn3//n34+flBT08PNWrUwOrVqws93f7w4UN0794d+vr6cHZ2xj///APgxWUDLy8vAICZmVmRiX/q1KmFfuN1dXXFxIkTy7BFX6hTpw5sbGxUDtj79u1D165dUaNGDRw5ckSl3MvLC3l5eQgLC0ONGjWgp6eHxo0b488//1SZ74ULF9CpUycYGhrCysoKffv2xcOHD4tsx5YtW2BiYoJVq1YVGLdixQpYWFggMzNTpbxbt27o27dvGde8eGlpaVi3bh2GDBkCPz8/LFu2TBqXf3Zv9+7dcHd3h76+Plq2bIm4uDipTkneT4W9V1xdXTF58mTp9Zw5c9CwYUMYGBjAzs4OX331FdLS0kq0DgcOHIC2trbKH2kAGD58ONq0aVPyjVGI4OBg6OjoYOfOnfD09IS9vT06deqEXbt24e7du/j2228BFH722NTUVGV7fvPNN6hduzb09fVRs2ZNTJw4EdnZ2dL4/G3566+/okaNGtDV1UVQUBD279+PH3/8UTo7cOvWLQDFv/8KOy68qn379gWe4/fgwQPo6Ohg9+7dpdpWLx+/XF1dMW7cONy+fRsPHjwo9tJh69atoa2tXeAzGhwcjOTkZGmd88vzjyeZmZkYPXo0qlWrBgMDAzRv3rxAMDt06BDatGkDPT092NnZYdiwYUhPTy9yPX799VeYmpoWuv5yHaNe1rRpU9jZ2WHDhg1S2YYNG2Bvb48mTZpIZZmZmRg2bBgsLS2hq6uL1q1b4/jx49L44j6/y5Ytw5QpU3D27FnpvfXy+7Wo4/mr0tPTYWxsLB0f898HR44cQa1ataSzRQDw2WefoVevXirTZ2dno0qVKlixYgUAFHvszV+vbdu2wc3NDUqlEitXroSGhobKl2kAmDdvHhwcHJCXl1do2z/77DN4e3ujZs2aqF+/PubMmYPU1FTpTGxRSrqPAPXup8ePHyMgIABVq1aFnp4enJ2dERkZ+dp1e1mlDFqFuXv3Ljp37owPPvgAZ8+excKFC7F06VJMnz5dpd7y5cuho6ODw4cPY9GiRdKOjIyMxP3791V27PXr1/HXX39h8+bN2Lx5M/bv34+ZM2cW2YYvvvgC9+7dw759+7B+/XosXrwYSUlJBepNmTIFPXv2xLlz59C5c2cEBAQgOTkZdnZ2WL9+PQAgLi4O9+/fx48//lhg+v79++PSpUsqbT19+jTOnTv3xj9L5OXlhb1790qv9+7di3bt2sHT01Mqf/78OY4ePQovLy+EhYVhxYoVWLRoEWJjYzFixAh8/vnn2L9/PwDgyZMnaN++PZo0aYITJ05g+/btSExMRM+ePQtd/urVq9GnTx+sWrUKAQEBBcZ/+umnyM3NVfmQJCUlYcuWLejfv/8brfvr/P7776hbty7q1KmDzz//HL/99htefUTdt99+i/DwcJw4cQJaWloF2lPa91NhNDQ08NNPPyE2NhbLly/Hnj17MHbs2BJN27ZtW9SsWRP//e9/pbLs7GysWrXqjbZdcnIyduzYga+++qrA2RNra2sEBARg3bp1BbZXUYyMjLBs2TJcvHgRP/74I5YsWYK5c+eq1Ll27RrWr1+PDRs24MyZM/jxxx/h4eGBQYMGSWcH7OzsSvz+e/W48KqBAwdi9erVKgF/5cqVqFatGtq3b1/STVVAWloaVq5cCScnJ1hYWBRb38DAAB988IHKZ3Tfvn3o0KEDWrVqJZXfuHED8fHxUtAKCQlBTEwM1q5di3PnzuHTTz+Fr68vrl69CuDFe9PX1xf+/v44d+4c1q1bh0OHDhX5kOjZs2dj3Lhx2LlzJzp06FBgvJzHqFeX8/IfxN9++63A/MeOHYv169dj+fLlOHXqFJycnODj41PgLGtRn99evXph1KhRqF+/vvTeejkEFXU8f5WBgQF69+5d4A94ZGQkevTooXJ1JCAgAJs2bVL5ErVjxw48e/YM3bt3B4Bij735xo0bh5kzZ+LSpUv4+OOP4e3tXWgbgoKCoKFRfGTIysrC4sWLYWJigsaNGxdbvyT7CFDvfpo4cSIuXryIbdu24dKlS1i4cCGqVKlS7LpJRCUTGBgoNDU1hYGBgTT06NFD/N///Z+oU6eOyMvLk+pGREQIQ0NDkZubK4QQwtPTUzRp0qTAPAGIjRs3qpSFhoYKfX19kZqaKpWNGTNGNG/eXHrt6ekpvv76ayGEEJcuXRIAxPHjx6XxV69eFQDE3LlzVZY1YcIE6XVaWpoAILZt2yaEEGLv3r0CgHj8+LFKe15elhBCdOrUSQwZMkR6PXToUNGuXbsitlrJLVmyRBgYGIjs7GyRmpoqtLS0RFJSkli9erVo27atEEKI3bt3CwDi1q1bQl9fX0RHR6vMY8CAAaJPnz5CCCGmTZsmOnbsqDL+9u3bAoCIi4tTWbf58+cLExMTsW/fPpX6gYGBomvXrtLrIUOGiE6dOkmvw8PDRc2aNVX2fXlr2bKlmDdvnhBCiOzsbFGlShWxd+9eIcT/9tmuXbuk+lu2bBEAxPPnz4UQJXs/OTg4qLxXhBCicePGIjQ0tMh2/fHHH8LCwkJ6HRkZKUxMTKTXoaGhonHjxtLrWbNmiXr16kmv169fLwwNDUVaWlqx26AoR44cKfQzlG/OnDkCgEhMTCy0nomJiYiMjCxy/t9//71wc3OTXoeGhgptbW2RlJSkUu/Vz4gQJX//FXdceP78uTAzMxPr1q2Txjdq1EhMnjy5yHYX5tXjFwBhY2MjTp48KYQQ4ubNmwKAOH36dJHz+Pbbb0Xt2rWFEELExsYKY2NjkZOTI2bMmCG++OILIYQQS5cuFbq6uiIjI0P8+++/QlNTU9y9e1dlPh06dBDjx48XQrz4zA4ePFhl/MGDB4WGhob0Hs5/f44dO1bY2NiICxcuqNR/W8coIf53TEhKShJKpVLcunVL3Lp1S+jq6ooHDx6Irl27isDAQJGWlia0tbXFqlWrpGmzsrKEra2tmD17thCi5J/flz9H+Up7PD969KjQ1NQUPXv2FJqamkJfX18AELq6usLAwEB89913Qoj/HWNWrFghzbtPnz6iV69eQgghMjIyij325i/7r7/+Uqmzbt06YWZmJjIyMoQQQpw8eVIoFApx8+bN127zTZs2CQMDA6FQKIStra04duzYa+uXdB/lbzd17qcuXbqIfv36vXZ9XqdSntHy8vLCmTNnpOGnn37CpUuX4OHhAYVCIdVr1aoV0tLScOfOHanMzc2txMtxdHRU+ZZhY2NT6Bkq4MUZKC0tLTRt2lQqc3Jykk4Fv6xRo0bS/w0MDGBsbFzkfIsyaNAgrFmzBhkZGcjKysLq1avL5YxOu3btkJ6ejuPHj+PgwYOoXbs2qlatCk9PT6mf1r59+1CzZk2kpaXh2bNn+PDDD2FoaCgNK1askDrJnz17Fnv37lUZn9+Z9+WO9H/++SdGjBiBqKgoeHp6FrvuO3fuxN27dwG8OGWc3/FSDnFxcTh27Bj69OkDANDS0kKvXr2wdOlSlXov71cbGxsAUNmvpXk/FWXXrl3o0KEDqlWrBiMjI/Tt2xePHj3Cs2fPSjR9UFAQrl27Jl0GXrZsGXr27AkDA4NStaMwopgzVjo6OiWaz7p169CqVStYW1vD0NAQEyZMQHx8vEodBwcHVK1atdh5lfT9V9xxQVdXF3379sVvv/0GADh16hQuXLhQps68Lx+/jh07Bh8fH3Tq1An//vtvgbr169eX2t2pUycALz6jV65cwf3797Fv3z60bt0ampqa8PT0lC4H7tu3Dy1btoRSqcT58+eRm5uL2rVrq2yH/fv3q3xOly1bpjLex8cHeXl5uHnzptSe8PBwLFmyBIcOHUL9+vVfu55yHaNeVrVqVelSfmRkJPz8/FTORFy/fh3Z2dlo1aqVVKatrY1mzZrh0qVLKvMq7vNblNIcz5s1a4b69evj2rVr8PLywtdffw17e3ucO3cOZ86ckTqOa2lpoWfPnlL3ifT0dPz999/SWf5r164Ve+zN5+7urvK6W7du0NTUxMaNGwG8OAZ4eXlJ3WaKkv++jY6Ohq+vL3r27Fmi7VPcPgLUv5+GDBmCtWvXwtXVFWPHjkV0dHSx83tZpfmtw5cZGBjAycmpzNOWlLa2tsprhUJR5DXs0iiP+Xbp0gVKpRIbN26Ejo4OsrOz0aNHjzdum5OTE6pXr469e/fi8ePHUuixtbWFnZ0doqOjsXfvXrRv3146rb1lyxZUq1ZNZT75v3mVlpaGLl26YNasWQWWlf8hAYAmTZrg1KlT+O233+Du7v7a0NSkSRM0btwYK1asQMeOHREbG4stW7a88boXZenSpcjJyYGtra1UJoSAUqnE/PnzpbKX92t++1/er8Xtdw0NjQJh5eW+Sbdu3cJHH32EIUOG4LvvvoO5uTkOHTqEAQMGICsrC/r6+sWui6WlJbp06YLIyEjUqFED27ZtK9BXp7ScnJygUChw6dIl6bLGyy5duoSqVavC1NQUCoXitesYExODgIAATJkyBT4+PjAxMcHatWsRHh6uMk1JP8clff+VZH4DBw6Eq6sr7ty5g8jISLRv3x4ODg4lasfLXj1+/frrrzAxMcGSJUswcOBAlbpbt26Vtk/+ZdlWrVpBR0cHe/fuxd69e6XP6AcffICHDx/ixo0b2LdvH7788ksAL7aBpqYmTp48CU1NTZX5GxoaSnW+/PJLDBs2rEB7X+603KZNG2zZsgW///47xo0b99r1lOsY9ar+/ftLlzgjIiLKPJ/iPr8lmS5/2tdNN3DgQEyYMAFeXl7YtGkTBg8eDGdn5wL1AgIC4OnpiaSkJERFRUFPT0+6K7Ekx958r763dXR08MUXXyAyMhKffPIJVq9eXWgXlVflv2+dnJzQokULODs7Y+nSpRg/fnyx05bXPgLk2U/5X3S2bt2KqKgodOjQAcHBwfjhhx9K1KZKGbQKU69ePaxfvx5CCGnjHz58GEZGRqhevfprp9XW1kZubu4bLb9OnTrIycnB6dOnpW/H165dw+PHj0s1n/xv/cW1R0tLC4GBgYiMjISOjg569+5dbncXeXl5Yd++fXj8+DHGjBkjlbdt2xbbtm3DsWPHMGTIELi4uECpVCI+Pr7Is1BNmzbF+vXr4ejoWOSdVABQq1YthIeHo127dtDU1FQJMIUZOHAg5s2bh7t378Lb2xt2dnZlW9li5OTkYMWKFQgPD0fHjh1VxnXr1g1r1qwpcLt9WVWtWhX379+XXqempqqcTTh58iTy8vIQHh4u9aX4/fffS72cgQMHok+fPqhevTpq1aql8i2yLCwsLPDhhx9iwYIFGDFihMr7MCEhAatWrUJwcDCAgut49epVlbNx0dHRcHBwkDrPAyj0TE9hdHR0CnxuSvr+K4mGDRvC3d0dS5YswerVq4t9j5aUQqGAhoZGoY9hKCzI6enpSZ3Z9+/fL31GtbW10aJFCyxduhS3b9+W+mc1adIEubm5SEpKKvKmh6ZNm+LixYvFfoFt1qwZQkJC4OvrCy0tLYwePbrIunIeo17m6+uLrKwsKBSKAjcy1KpVS+p7l78ts7Ozcfz48VI9CqSw91ZZff755xg+fDhu3LiBixcvIjAwsNB6LVu2hJ2dHdatW4dt27bh008/lcJCSY69rzNw4EA0aNAACxYsQE5ODj755JNSzyMvL6/ATUlFed0+At6N/VS1alUEBgYiMDAQbdq0wZgxYxi0XvXVV19h3rx5GDp0KEJCQhAXF4fQ0FCMHDmy2A5+jo6O2L17N1q1agWlUlno5b7i1K1bF97e3hg8eDAWLlwIbW1tjBo1Cnp6eqW6pOXg4ACFQoHNmzejc+fO0NPTk751vmrgwIGoV68egBehsrx4eXkhODgY2dnZKh9iT09PhISEICsrC15eXjAyMsLo0aMxYsQI5OXloXXr1khJScHhw4dhbGyMwMBABAcHY8mSJejTpw/Gjh0Lc3NzXLt2DWvXrsWvv/6q8g27du3aUud7LS2t1z4c8bPPPsPo0aOxZMkS6S4cOWzevBmPHz/GgAEDYGJiojLO398fS5cuxffff18uy2rfvj2WLVuGLl26wNTUFJMmTVLZPk5OTsjOzsbPP/+MLl26FNlxuzg+Pj4wNjbG9OnTMXXq1HJp+/z589GyZUv4+Phg+vTpqFGjBmJjYzFmzBjUrl0bkyZNktZx/vz58PDwQG5uLr755huVb5rOzs6Ij4/H2rVr8cEHH2DLli3SJY7iODo64ujRo7h16xYMDQ1hbm5eqvdfSQwcOBAhISEwMDAo9OxdSWRmZkp3fj5+/Bjz58+XzryVlJeXl3SDwMvdFTw9PfHDDz9IneaBF5+rgIAAfPHFFwgPD0eTJk3w4MED7N69G40aNYKfnx+++eYbtGjRAiEhIRg4cCAMDAxw8eJFREVFFQiULVu2xNatW9GpUydoaWm99g+hXMeol2lqakqXl17dnwYGBhgyZAjGjBkDc3Nz2NvbY/bs2Xj27BkGDBhQ4mU4Ojri5s2bOHPmDKpXrw4jI6MCZ45KyszMDA4ODrhw4YJ0rMt/P2hpaalcVvvss8+waNEiXLlyReUGiJIce1+nXr16aNGiBb755hv079//tQE4PT0d3333HT7++GPY2Njg4cOHiIiIwN27d/Hpp5+WaJ1ft48A9e+nSZMmwc3NDfXr10dmZiY2b94svW9LolL20SpMtWrVsHXrVhw7dgyNGzfGf/7zHwwYMAATJkwodtrw8HBERUXBzs6uwC2npbFixQpYWVmhbdu26N69OwYNGgQjIyPo6uqWaj2mTJmCcePGwcrKqsi7foAXf5RatmyJunXronnz5mVu96u8vLzw/PlzODk5wcrKSir39PTE06dPpcdAAMC0adMwceJEhIWFoV69evD19cWWLVuk55rZ2tri8OHDyM3NRceOHdGwYUMMHz4cpqamhQbgOnXqYM+ePVizZg1GjRpVZBtNTEzg7+8PQ0NDWZ8av3TpUnh7excIWcCLoHXixIlib3EuqfHjx8PT0xMfffQR/Pz80K1bN5XnlDVu3Bhz5szBrFmz0KBBA6xatQphYWGlXo6GhgaCgoKQm5uLL774olza7uzsjOPHj6NmzZro2bMnHBwc0KlTJ9SuXRuHDx+WviyEh4fDzs4Obdq0kcLyy5c8P/74Y4wYMQIhISFwdXVFdHR0iR8HMHr0aGhqasLFxQVVq1ZFfHx8qd9/xenTpw+0tLTQp0+fUn2uX7Z9+3bY2NjAxsYGzZs3x/Hjx/HHH38UeCjw63h5eeHp06do1aqVypm6/M9o/mMg8kVGRuKLL77AqFGjUKdOHXTr1g3Hjx+XLgs2atQI+/fvx5UrV9CmTRs0adIEkyZNUrlc/rLWrVtjy5YtmDBhAn7++eci2ynXMepVxsbGMDY2LnTczJkz4e/vj759+6Jp06a4du0aduzYUaov1P7+/vD19YWXlxeqVq36xs+7cnZ2hhACe/fuld4LNjY2aN26tUq9gIAAXLx4EdWqVStw5rm4Y29x8rscFNdvTlNTE5cvX4a/vz9q166NLl264NGjRzh48GCx/fRe9rp9BKh3P+no6GD8+PFo1KgR2rZtC01NTaxdu7bEy610dx1WJPl3N718l0R5ysvLE7Vq1RLh4eGyzP9d1759ezF06FB1N6NC6t+/v+jSpYusy5g0aZIwNDQUMTExsi7nbbp586bQ0NCQ7hKk13vfj1FFWbFihbCwsBCZmZlqa8PUqVNFw4YN1bb8yuS9uXT4LtizZw/S0tLQsGFD3L9/H2PHjoWjoyPatm1b7st68OAB1q5di4SEhHJ9Lk1F8PjxY+zbtw/79u3DggUL1N2cCiUlJQXnz5/H6tWri3ywYnmZMmUKHB0dceTIETRr1qxMZ5DeFdnZ2Xj06BEmTJiAFi1aqFyuo8K9z8eoojx79gz379/HzJkz8eWXX5b4TtzylJaWhlu3bmH+/PkFnjNJZaTupPc+2b59u6hfv77Q09MTlpaWolu3buLWrVuyLAuAqFKlispzR94XDg4OwtjYWHz//ffqbkqF4+npKfT09MTw4cPV3ZQKJf8ZPrVr1xbnzp1Td3MqhPf5GFWU0NBQoaWlJdq3by+ePn2qljYEBgYKHR0d0bNnT5GTk6OWNlQ2CiFK+DhmIiIiIiqVinuunoiIiOgdx6BFREREJBMGLSIiIiKZMGgRERERyYRBi4jeSZMnT4arq2u5zzcoKEjWh9gSEb2MQYvoHRcUFASFQlFguHbtmrqbJqvRo0dj9+7d6m5Gka5du4Z+/fqhevXqUCqVqFGjBvr06YMTJ06ou2lE9A5h0CKqAHx9fXH//n2VobCf0sjKylJD6+RhaGgICwsLdTejUCdOnICbmxuuXLmCX375BRcvXsTGjRtRt27d1/40lLoIIZCTk6PuZhC9lxi0iCoApVIJa2trlUFTUxPt2rVDSEgIhg8fjipVqsDHxwcAcOHCBXTq1AmGhoawsrJC37598fDhQ2l+eXl5mD17NpycnKBUKmFvb4/vvvsOALBv3z4oFAo8efJEqn/mzBkoFArcunVLKjt06BDatGkDPT092NnZYdiwYUhPT5fGOzo6YsaMGejfvz+MjIxgb2+PxYsXq6zXnTt30KdPH5ibm8PAwADu7u44evQogIKXDo8fP44PP/wQVapUgYmJCTw9PXHq1KnXbrfc3FyMHDkSpqamsLCwwNixY/HqowPz8vIQFhaGGjVqQE9PD40bN8aff/5Z5DyFEAgKCoKzszMOHjwIPz8/1KpVC66urggNDcXff/8t1T1//jzat28PPT09WFhYYPDgwUhLS5PG51/GnDFjBqysrGBqaoqpU6ciJydH+gHd6tWrIzIyUprm1q1bUCgUWLt2LVq2bAldXV00aNAA+/fvl+rk78Nt27bBzc0NSqUShw4dwvXr19G1a1dYWVnB0NAQH3zwAXbt2qWyfgsWLICzszN0dXVhZWWFHj16vHYbE9HrMWgRVXDLly+Hjo4ODh8+jEWLFuHJkydo3749mjRpghMnTmD79u1ITExEz549pWnGjx+PmTNnYuLEibh48SJWr16t8gPhxbl+/Tp8fX3h7++Pc+fOYd26dTh06FCBHzkPDw+Hu7s7Tp8+ja+++gpDhgxBXFwcgBc/9eHp6Ym7d+/in3/+wdmzZzF27Fjk5eUVusynT58iMDAQhw4dwpEjR+Ds7IzOnTvj6dOnRbYzPDwcy5Ytw2+//YZDhw4hOTkZGzduVKkTFhaGFStWYNGiRYiNjcWIESPw+eefqwSXl505cwaxsbEYNWpUoT8bZGpqCgBIT0+Hj48PzMzMpB+G3rVrV4FttGfPHty7dw8HDhzAnDlzEBoaio8++ghmZmY4evQo/vOf/+DLL7/EnTt3VKYbM2YMRo0ahdOnT8PDw0P6Md+XjRs3DjNnzsSlS5fQqFEjpKWloXPnzti9ezdOnz4NX19fdOnSBfHx8QBenKkbNmwYpk6diri4OGzfvl2Wnwgjeq+o9bn0RFSswMBAoampKQwMDKShR48eQogXP5nTpEkTlfrTpk0THTt2VCnL/wHzuLg4kZqaKpRKpViyZEmhy8v/OZnHjx9LZadPnxYAxM2bN4UQQgwYMEAMHjxYZbqDBw8KDQ0N8fz5cyHEi59C+vzzz6XxeXl5wtLSUixcuFAIIcQvv/wijIyMxKNHjwptR2hoqGjcuHGR2yU3N1cYGRmJTZs2FVnHxsZGzJ49W3qdnZ0tqlevLrp27SqEECIjI0Po6+uL6OholekGDBgg+vTpU+g8161bJwCIU6dOFblcIYRYvHixMDMzE2lpaVLZli1bhIaGhkhISBBCvNi3Dg4OIjc3V6pTp04d0aZNG+l1Tk6OMDAwEGvWrBFCvPjhagBi5syZBdZr1qxZQoj/7cO//vrrtW0UQoj69euLn3/+WQghxPr164WxsbFITU0tdjoiKhn+qDRRBeDl5YWFCxdKrw0MDKT/u7m5qdQ9e/Ys9u7dC0NDwwLzuX79Op48eYLMzEx06NChzO05e/Yszp07h1WrVkllQgjk5eXh5s2bqFevHgCgUaNG0niFQgFra2skJSUBeHFmqEmTJjA3Ny/RMhMTEzFhwgTs27cPSUlJyM3NxbNnz6SzMa9KSUnB/fv30bx5c6lMS0sL7u7u0uXDa9eu4dmzZ/jwww9Vps3KykKTJk0Kna8o4a+WXbp0CY0bN1bZV61atUJeXh7i4uKkM4j169dXOTNmZWWFBg0aSK81NTVhYWEhbbd8Hh4eBdbr0qVLKnXc3d1VXqelpWHy5MnYsmUL7t+/j5ycHDx//lzahh9++CEcHBxQs2ZN+Pr6wtfXF927d4e+vn6J1pmICmLQIqoADAwM4OTkVOS4l6WlpaFLly6YNWtWgbo2Nja4cePGa5eV/0f/5UCRnZ1dYBlffvklhg0bVmB6e3t76f/a2toq4xQKhXRpUE9P77XteFVgYCAePXqEH3/8EQ4ODlAqlfDw8HijGwDy+0tt2bIF1apVUxmnVCoLnaZ27doAgMuXLxcZxkqjsG30uu1WGq++N0aPHo2oqCj88MMPcHJygp6eHnr06CFtQyMjI5w6dQr79u3Dzp07MWnSJEyePBnHjx+XLokSUemwjxZRJdO0aVPExsbC0dERTk5OKoOBgQGcnZ2hp6dX5KMTqlatCgC4f/++VHbmzJkCy7h48WKB+Ts5OUFHR6dE7WzUqBHOnDmD5OTkEtU/fPgwhg0bhs6dO6N+/fpQKpUqHfxfZWJiAhsbG6lzPQDk5OTg5MmT0msXFxcolUrEx8cXWA87O7tC5+vq6goXFxeEh4cXGn7ybyKoV68ezp49q3KDwOHDh6GhoYE6deqUaJ1f58iRIwXWK/9MYlEOHz6MoKAgdO/eHQ0bNoS1tbXKDQ7Ai7Nj3t7emD17Ns6dO4dbt25hz549b9xeovcVgxZRJRMcHIzk5GT06dMHx48fx/Xr17Fjxw7069cPubm50NXVxTfffIOxY8dixYoVuH79Oo4cOYKlS5cCgBQyJk+ejKtXr2LLli0IDw9XWcY333yD6OhohISE4MyZM7h69Sr+/vvvAh29X6dPnz6wtrZGt27dcPjwYdy4cQPr169HTExMofWdnZ3x3//+F5cuXcLRo0cREBBQ7Fmxr7/+GjNnzsRff/2Fy5cv46uvvlK5m9LIyAijR4/GiBEjsHz5cly/fh2nTp3Czz//jOXLlxc6T4VCgcjISFy5cgVt2rTB1q1bcePGDZw7dw7fffcdunbtCgAICAiArq4uAgMDceHCBezduxdDhw5F3759S3XjQVEiIiKwceNGXL58GcHBwXj8+DH69+//2mmcnZ2xYcMGnDlzBmfPnsVnn32mEhY3b96Mn376CWfOnMG///6LFStWIC8vr1yCIdH7ikGLqJKxtbXF4cOHkZubi44dO6Jhw4YYPnw4TE1NpcuCEydOxKhRozBp0iTUq1cPvXr1kvoAaWtrY82aNbh8+TIaNWqEWbNmYfr06SrLaNSoEfbv3y+FjSZNmmDSpEmwtbUtcTt1dHSwc+dOWFpaonPnzmjYsCFmzpwJTU3NQusvXboUjx8/RtOmTdG3b18MGzYMlpaWr13GqFGj0LdvXwQGBsLDwwNGRkbo3r27Sp1p06Zh4sSJCAsLQ7169eDr64stW7YU+pyyfM2aNcOJEyfg5OSEQYMGoV69evj4448RGxuLefPmAQD09fWxY8cOJCcn44MPPkCPHj3QoUMHzJ8/v8Tb6HVmzpyJmTNnonHjxjh06BD++ecfVKlS5bXTzJkzB2ZmZmjZsiW6dOkCHx8fNG3aVBpvamqKDRs2oH379qhXrx4WLVqENWvWoH79+uXSZqL3kUKUtGcnERGp3a1bt1CjRg2cPn1alp8oIqLyxTNaRERERDJh0CIiIiKSCS8dEhEREcmEZ7SIiIiIZMKgRURERCQTBi0iIiIimTBoEREREcmEQYuIiIhIJgxaRERERDJh0CIiIiKSCYMWERERkUwYtIiIiIhk8v9KI0Ded6E1bwAAAABJRU5ErkJggg==
    "
    class="
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
    </div>
    <div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
  
    </pre>
    </div>
    </div>
    
    </div>
    
    </div>
    
    </div>
    </body>
    
    </html>
    
    
  `;
    return (
        <>
            <BarraAdmin />
            <div className="white">
                <h1>Mostrar Resultado</h1>
                <div dangerouslySetInnerHTML={{ __html: codigoHTML }} />



            </div>
        </>
    );
}