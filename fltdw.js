/*
 * mScrollFltDw
 * 1.1.92.0
 * COPYRIGHT (c) 2017 mScroll
 */



var fltdw = {};

(function (fltdw){

"use strict";

var __s;
var __t;

var _WINDOW = window;
var _STRING = _WINDOW.String;
var _FROMCHARCODE = _STRING.fromCharCode;
var _MATH = _WINDOW.Math;
var _CEIL = _MATH.ceil;
var _FLOOR = _MATH.floor;
var _DATE = _WINDOW.Date;
var _UINT8ARRAY = _WINDOW.Uint8Array;
var _IMAGE = _WINDOW.Image;
var _DOCUMENT = _WINDOW.document;
var _BODY = _DOCUMENT.body;
var _CHARAT = "charAt";
var _CHARCODEAT = "charCodeAt";
var _SUBSTRING = "substring";
var _LASTINDEXOF = "lastIndexOf";
var _GETTIME = "getTime";
var _GETFULLYEAR = "getFullYear";
var _GETMONTH = "getMonth";
var _GETDATE = "getDate";
var _GETHOURS = "getHours";
var _GETMINUTES = "getMinutes";
var _GETSECONDS = "getSeconds";
var _TAGNAME = "tagName";
var _FOCUS = "focus";
var _LENGTH = "length";
var _VALUE = "value";
var _TYPE = "type";
var _DISABLED = "disabled";
var _PLACEHOLDER = "placeholder";
var _ACCEPT = "accept";
var _BUFFER = "buffer";
var _BYTEOFFSET = "byteOffset";
var _BYTELENGTH = "byteLength";
var _ONLOAD = "onload";
var _ONMOUSEDOWN = "onmousedown";
var _ONMOUSEMOVE = "onmousemove";
var _ONMOUSEUP = "onmouseup";
var _ONCLICK = "onclick";
var _ONFOCUS = "onfocus";
var _ONBLUR = "onblur";
var _ONCHANGE = "onchange";
var _ONCONTEXTMENU = "oncontextmenu";
var _ONSELECTSTART = "onselectstart";
var _INPUT = "INPUT";
var _TEXT = "text";
var _PAGEX = "pageX";
var _PAGEY = "pageY";
var _BUTTON = "button";
var _GETRANDOMVALUES = "getRandomValues";
var _SRC0 = "src";
var _UNDEFINED = _WINDOW.undefined;
var _NULL = null;

var _STD = std;
var _TO_HEX = _STD.to_hex;
var _TO_DEC = _STD.to_dec;
var _ENUMS = _STD.enums;
var _VECTOR = _STD.vector;
var _HTON = _STD.hton;
var _ZLIB = _STD.zlib;
var _DEFLATE = _ZLIB.deflate;
var _INFLATE = _ZLIB.inflate;
var _CRC32 = _ZLIB.crc32;
var _STD_HTML = _STD.html;
var _WEBKIT = _STD_HTML.webkit;
var _MSIE_VERSION = _STD_HTML.msie_version;
var _MS_EDGE = _STD_HTML.ms_edge;
var _POSITION = _STD_HTML.position;
var _WIDTH = _STD_HTML.width;
var _HEIGHT = _STD_HTML.height;
var _TOP = _STD_HTML.top;
var _RIGHT = _STD_HTML.right;
var _BOTTOM = _STD_HTML.bottom;
var _LEFT = _STD_HTML.left;
var _FONT_SIZE = _STD_HTML.font_size;
var _FONT_WEIGHT = _STD_HTML.font_weight;
var _COLOR = _STD_HTML.color;
var _BORDER_TOP_WIDTH = _STD_HTML.border_top_width;
var _BORDER_TOP_STYLE = _STD_HTML.border_top_style;
var _BORDER_TOP_COLOR = _STD_HTML.border_top_color;
var _BORDER_RIGHT_WIDTH = _STD_HTML.border_right_width;
var _BORDER_RIGHT_STYLE = _STD_HTML.border_right_style;
var _BORDER_RIGHT_COLOR = _STD_HTML.border_right_color;
var _BORDER_BOTTOM_WIDTH = _STD_HTML.border_bottom_width;
var _BORDER_BOTTOM_STYLE = _STD_HTML.border_bottom_style;
var _BORDER_BOTTOM_COLOR = _STD_HTML.border_bottom_color;
var _BORDER_LEFT_WIDTH = _STD_HTML.border_left_width;
var _BORDER_LEFT_STYLE = _STD_HTML.border_left_style;
var _BORDER_LEFT_COLOR = _STD_HTML.border_left_color;
var _Z_INDEX = _STD_HTML.z_index;
var _VISIBILITY = _STD_HTML.visibility;
var _DISPLAY = _STD_HTML.display;
var _LINE_HEIGHT = _STD_HTML.line_height;
var _TEXT_DECORATION = _STD_HTML.text_decoration;
var _OVERFLOW = _STD_HTML.overflow;
var _BACKGROUND_COLOR = _STD_HTML.background_color;
var _CURSOR = _STD_HTML.cursor;
var _SRC = _STD_HTML.src;
var _INNERHTML = _STD_HTML.innerHTML;
var _ABSOLUTE = _STD_HTML.absolute;
var _BOLD = _STD_HTML.bold;
var _NONE = _STD_HTML.none;
var _SOLID = _STD_HTML.solid;
var _SCROLL = _STD_HTML.scroll;
var _UNDERLINE = _STD_HTML.underline;
var _HIDDEN = _STD_HTML.hidden;
var _AUTO = _STD_HTML.auto;
var _DEFAULT = _STD_HTML.cssDefault;
var _CROSSHAIR = _STD_HTML.crosshair;
var _MOVE = _STD_HTML.move;
var _NS_RESIZE = _STD_HTML.ns_resize;
var _NWSE_RESIZE = _STD_HTML.nwse_resize;
var _EW_RESIZE = _STD_HTML.ew_resize;
var _NESW_RESIZE = _STD_HTML.nesw_resize;
var _START = _STD_HTML.start;
var _EXTEND = _STD_HTML.extend;
var _REGISTER_INPUT = _STD_HTML.register_input;
var _PREVENT_TRANSFER = _STD_HTML.prevent_transfer;
var _USE_KUPROC = _STD_HTML.use_kuproc;
var _ALLOW_DEFAULT = _STD_HTML.allow_default;
var _PREVENT_DEFAULT = _STD_HTML.prevent_default;
var _SPAN = _STD_HTML.span;
var _IMG = _STD_HTML.img;
var _A = _STD_HTML.a;
var _LABEL = _STD_HTML.label;
var _INPUT_TEXT = _STD_HTML.input_text;
var _INPUT_FILE = _STD_HTML.input_file;
var _CANVAS = _STD_HTML.canvas;
var _FLUSH = _STD_HTML.flush;
var _NTH_ELEMENT = _STD_HTML.nth_element;
var _SETVALUE = _STD_HTML.setvalue;
var _GETVALUE = _STD_HTML.getvalue;

var _CRYPTO = _MS_EDGE || _MSIE_VERSION === 0 ? _WINDOW.crypto : _WINDOW.msCrypto;
var _TARGET = _MS_EDGE || _MSIE_VERSION === 0 ? "target" : "srcElement";

var _INTF = intf;
var _PNG = _INTF.png;
var _ZIP = _INTF.zip;
var _JPG = _INTF.jpg;
var _ICO = _INTF.ico;
var _CUR = _INTF.cur;
var _FORMAT = _INTF.format;
var _REGISTER_PARSER = _INTF.register_parser;
var _REGISTER_READER = _INTF.register_reader;
var _READY = _INTF.ready;
var _FILE = _INTF.file;
var _CLEAR = _INTF.clear;
var _PARSE = _INTF.parse;
var _READ = _INTF.read;
var _BASE64 = _INTF.base64;
var _UTF8 = _INTF.utf8;
var _UTF16 = _INTF.utf16;
var _TO_MSCFB = _INTF.to_mscfb;
var _FROM_MSCFB = _INTF.from_mscfb;
var _PARSE_PNG = _INTF.parse_png;
var _PARSE_ZIP = _INTF.parse_zip;
var _GETDATA = _INTF.getdata;
var _SETDATA = _INTF.setdata;
var _SETFILE = _INTF.setfile;
var _MS_DOWNLOAD = _INTF.ms_download;
var _AES256I = _INTF.aes256i;
var _AES256A = _INTF.aes256a;

var _EMPTY = "";
var _EOF = -1;
var _CRLF = _FROMCHARCODE(0x0D, 0x0A);
var _SP = _FROMCHARCODE(0x20);
var _E0 = "0";
var _SL = "/";
var _CO = ":";
var _QT = '"';
var _LF = 0x1;
var _RT = 0x2;
var _TP = 0x4;
var _BT = 0x8;
var _X = 0;
var _Y = 1;
var _S = 0;
var _F = 1;
var _CX = 0;
var _CY = 1;
var _TS = 2;
var _LS = 3;
var _BS = 4;
var _RS = 5;
var _NM = 6;
var _XL = 0;
var _YC = 1;
var _XR = 2;
var _YO = 3;
var _T = 0;
var _L = 1;
var _B = 2;
var _R = 3;
var _MX = 2;
var _MY = 3;
var _SX = 4;
var _SY = 5;
var _SW = 6;
var _SH = 7;
var _SCX = 8;
var _SCY = 9;
var _BX = 10;
var _BY = 11;
var _LCOL = 0x100;
var _RCOL = 0x101;
var _CL = 11;
var _CL4 = _CL * 4;
var _PCL = _CL * 16 + 1;
var _PCL4 = _PCL * 4;
var _PCL44 = _PCL4 + 4;
var _PCH = _PCL4 * _CL;
var _PCA = _PCL4 * _PCL;
var _NM_L = 8;
var _NM_L2 = _NM_L + 4;
var _BUF_L = 3;
var _LSL = 3;
var _LS1 = _LSL - 1;
var _LS2 = _FLOOR(_LSL / 2);
var _BTNS_L = 45;
var _NAV_L = 265;
var _HUE_L = 207;
var _SAT_L = 218;
var _LUM_L = 14;
var _HUE_L1 = _HUE_L + 20 + 9;
var _SAT_L2 = _SAT_L - 2;
var _LUM_L2 = _LUM_L - 2;
var _PNGCUROFFSET1 = _NULL;
var _PNGCUROFFSET2 = _NULL;
var _PNGCUROFFSET3 = _NULL;
var _CUREXT = ".cur";
var _IMG_CACHE = [];

   fltdw._cache = _IMG_CACHE;

var _CACHE = function (Src_)
   {
   var u = new _IMAGE();

   u[_SRC0] = Src_;
   _IMG_CACHE[_IMG_CACHE[_LENGTH]] = u;

   return (Src_);
   };

var _D3 = [];

   for (__s = 0; __s <= 768; ++ __s)
      {
      _D3[__s] = _FLOOR(__s / 3);
      }

var _D7 = [];

   for (__s = 0; __s < 256; ++ __s)
      {
      _D7[__s] = [];

      for (_D7[__s][0] = 40 , __t = 1; __t < 256; ++ __t)
         {
         _D7[__s][__t] = __s < __t ? _FLOOR(__s / __t * 40) : 40;
         }
      }

var _D70 = [];

   for (__s = 0; __s < 256; ++ __s)
      {
      _D70[__s] = [];

      for (_D70[__s][0] = 240 , __t = 1; __t < 256; ++ __t)
         {
         _D70[__s][__t] = __s < __t ? _FLOOR(__s / __t * 240) : 240;
         }
      }

var _M = [];

   for (__s = 0; __s < 256; ++ __s)
      {
      _M[__s] = [];

      for (__t = 0; __t < 256; ++ __t)
         {
         _M[__s][__t] = __s * __t;
         }
      }

var _M3 = _M[3];
var _M4 = _M[4];
var _M7 = [];

   for (__s = 0; __s <= 40; ++ __s)
      {
      _M7[__s] = [];

      for (__t = 0; __t < 256; ++ __t)
         {
         _M7[__s][__t] = _FLOOR(__s / 40 * __t);
         }
      }

var _M87 = [];

   for (__s = 0; __s < 256; ++ __s)
      {
      _M87[__s] = _FLOOR(__s / 255 * 240);
      }

var _M287 = [];

   for (__s = 0; __s <= 510; ++ __s)
      {
      _M287[__s] = _FLOOR(__s / 510 * 240);
      }

var _M78 = [];

   for (__s = 0; __s <= 240; ++ __s)
      {
      _M78[__s] = _FLOOR(__s / 240 * 255);
      }

var _M278 = [];

   for (__s = 0; __s <= 120; ++ __s)
      {
      _M278[__s] = _CEIL(__s / 120 * 255);
      }

var _M778 = [];

   for (__s = 0; __s <= 240; ++ __s)
      {
      _M778[__s] = [];

      for (__t = 0; __t <= 240; ++ __t)
         {
         _M778[__s][__t] = _FLOOR(_M[__s][__t] / 57600 * 255);
         }
      }

var _M8 = [];

   for (__s = 0; __s < 256; ++ __s)
      {
      _M8[__s] = [];

      for (__t = 0; __t < 256; ++ __t)
         {
         _M8[__s][__t] = _FLOOR(_M[__s][__t] / 255);
         }
      }

var _C = [];

   for (__s = 0; __s < 256; ++ __s)
      {
      _C[__s] = ~__s & 0xFF;
      }

var _PREV = [2, 0, 1];
var _PREV2 = [1, 2, 0];
var _CP =
   [
   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 1,
   1, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 1,
   1, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 1,
   1, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 1,
   1, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 1,
   1, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 1,
   1, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 1,
   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
   ];
var _BC =
   [
   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
   1, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   1, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   1, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 1,
   1, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 1,
   1, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   1, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   1, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 1,
   1, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 1,
   1, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   1, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
   ];
var _CS =
   [
   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
   1, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 1, 0, 0, 0, 0, 0,
   1, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 1, 0, 0, 0, 0, 0,
   1, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 1, 0, 0, 0, 0, 0,
   1, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 1, 0, 0, 0, 0, 0,
   1, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1,
   1, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 1, 4, 4, 5, 5, 1,
   1, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 1, 4, 4, 5, 5, 1,
   1, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 1, 5, 5, 4, 4, 1,
   1, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 1, 5, 5, 4, 4, 1,
   1, 2, 2, 3, 3, 2, 2, 3, 3, 2, 2, 1, 4, 4, 5, 5, 1,
   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 5, 5, 1,
   0, 0, 0, 0, 0, 1, 4, 4, 5, 5, 4, 4, 5, 5, 4, 4, 1,
   0, 0, 0, 0, 0, 1, 4, 4, 5, 5, 4, 4, 5, 5, 4, 4, 1,
   0, 0, 0, 0, 0, 1, 5, 5, 4, 4, 5, 5, 4, 4, 5, 5, 1,
   0, 0, 0, 0, 0, 1, 5, 5, 4, 4, 5, 5, 4, 4, 5, 5, 1,
   0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
   ];
var _PT =
   [
   2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 1,
   0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 1,
   2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 1,
   0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 1,
   2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1,
   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
   ];
var _UC = ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"];
var _LC =
   [
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
   "_", "."
   ];
var _HEX_U =
   [
   "０", "１", "２", "３", "４", "５", "６", "７", "８", "９",
   "Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ",
   "ａ", "ｂ", "ｃ", "ｄ", "ｅ", "ｆ",
   "a", "b", "c", "d", "e", "f"
   ];
var _HEX_L =
   [
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
   "A", "B", "C", "D", "E", "F",
   "A", "B", "C", "D", "E", "F",
   "A", "B", "C", "D", "E", "F"
   ];
var _HEX = "#";
var _EXT = ".";
var _EXT2 = "_";
var _ZEROTIME = new _DATE(1980, 0, 1, 0, 0, 0, 0)[_GETTIME]();
var _PX = "px";
var _PNGSTR = ".png";
var _ZIPSTR = ".zip";
var _TXTSTR = ".txt";
var _JPGSTR = ".jpg";
var _ICOSTR = ".ico";
var _CURSTR = ".cur";
var _FLTDWSTR = ".fltdw";
var _BLACK = "#000000";
var _WHITE = "#FFFFFF";
var _GRAY = "#C0C0C0";
var _BLUE = "#0080FF";
var _SWSTR =
   [
   "表示",
   "非表示"
   ];
var _ZCMPSTR =
   [
   "圧縮しない",
   "圧縮する"
   ];
var _STORESTR =
   [
   "すべてのファイル情報を保存する",
   "ファイル名の拡張子を置き換える",
   "ファイル名を保存しない",
   "ファイル名と日付を保存しない",
   "ファイルを展開する"
   ];
var _RCRCSTR =
   [
   "AES",
   "AES (CRC 付き)",
   "ZipCrypto",
   "Deflate",
   "MS-CFB"
   ];
var _CHARSETSTR =
   [
   "Shift_JIS (CP932)",
   "UTF-8",
   "UTF-8 (置き換え)"
   ];
var _COLCMD =
   [
   "変更",
   "選択"
   ];
var _COLTYPESTR =
   [
   "パレット",
   "透明度付きパレット",
   "True Color",
   "透明度付き True Color"
   ];
var _COLTYPEIMG =
   [
   _CACHE("img/na.png"),
   _CACHE("img/a.png"),
   "img/na.png",
   "img/a.png"
   ];
var _FILEIMG =
   [
   _CACHE("img/file0.png"),
   _CACHE("img/file2.png")
   ];
var _LINEIMG =
   [
   _CACHE("img/line0.png"),
   _CACHE("img/line2.png")
   ];
var _FILLIMG =
   [
   _CACHE("img/fill0.png"),
   _CACHE("img/fill2.png")
   ];
var _RECTIMG =
   [
   _CACHE("img/sel0b.png"),
   _CACHE("img/sel2b.png"),
   _CACHE("img/sel0.png"),
   _CACHE("img/sel2.png")
   ];
var _CURIMGS =
   [
   "img/ptr.png",
   _CACHE("img/cr.png"),
   _CACHE("img/vt.png"),
   _CACHE("img/rl.png"),
   _CACHE("img/hz.png"),
   _CACHE("img/lr.png"),
   "img/vt.png",
   "img/rl.png",
   "img/hz.png",
   "img/lr.png"
   ];
var _CURIMG =
   [
   "img/dw" + _CUREXT,
   _CACHE("img/cr" + _CUREXT),
   _CACHE("img/vt" + _CUREXT),
   _CACHE("img/rl" + _CUREXT),
   _CACHE("img/hz" + _CUREXT),
   _CACHE("img/lr" + _CUREXT),
   "img/vt" + _CUREXT,
   "img/rl" + _CUREXT,
   "img/hz" + _CUREXT,
   "img/lr" + _CUREXT
   ];
var _CURIMG64 =
   [
   "img/dw64" + _CUREXT,
   _CACHE("img/cr64" + _CUREXT),
   _CACHE("img/vt64" + _CUREXT),
   _CACHE("img/rl64" + _CUREXT),
   _CACHE("img/hz64" + _CUREXT),
   _CACHE("img/lr64" + _CUREXT),
   "img/vt64" + _CUREXT,
   "img/rl64" + _CUREXT,
   "img/hz64" + _CUREXT,
   "img/lr64" + _CUREXT
   ];
var _CURIMG0 =
   [
   _CROSSHAIR,
   _MOVE,
   _NS_RESIZE,
   _NWSE_RESIZE,
   _EW_RESIZE,
   _NESW_RESIZE,
   _NS_RESIZE,
   _NWSE_RESIZE,
   _EW_RESIZE,
   _NESW_RESIZE
   ];
var _PLTEIMG =
   [
   _CACHE("img/plte0.png"),
   _CACHE("img/plte2.png")
   ];
var _UNDOIMG =
   [
   _CACHE("img/undo3.png"),
   _CACHE("img/undo0.png")
   ];
var _REDOIMG =
   [
   _CACHE("img/redo3.png"),
   _CACHE("img/redo0.png")
   ];
var _LBIMG = [];

   for (__s = 0; __s < _LSL; ++ __s)
      {
      _LBIMG[__s] =
         [
         _CACHE("img/l" + (__s + 1) + "0.png"),
         _CACHE("img/l" + (__s + 1) + "2.png")
         ];
      }

   _LBIMG[_LSL] =
      [
      _CACHE("img/ll0.png"),
      _CACHE("img/ll2.png")
      ];
var _RULEOF = " / ";
var _DWCUR = _CACHE("img/dw" + _CUREXT);
var _PTCUR = _CACHE("img/pt" + _CUREXT);
var _PHCUR = _CACHE("img/ph" + _CUREXT);
var _DW64CUR = _CACHE("img/dw64" + _CUREXT);
var _PT64CUR = _CACHE("img/pt64" + _CUREXT);
var _PH64CUR = _CACHE("img/ph64" + _CUREXT);
var _DW0CUR = _CROSSHAIR;
var _PT0CUR = _CROSSHAIR;
var _PH0CUR = _DEFAULT;
var _CURSCLIMG =
   [
   _CACHE("img/cur32a.png"),
   _CACHE("img/cur32b.png")
   ];
var _CURSCLIMG64 =
   [
   _CACHE("img/cur64a.png"),
   _CACHE("img/cur64b.png")
   ];
var _PTRCUR = _CACHE("img/ptr.png");
var _COMMA = " , ";
var _RECT_L = "[ ";
var _RECT_R = " ]";
var _OUT = "-- , --";
var _OUT2 = "[ -- , -- ]";
var _CPY = _CACHE("img/copy.png");
var _CPY2 = _CACHE("img/copy2.png");

var _TYPE_IX = _ENUMS(0);
var _A_ICO1 = _ENUMS();
var _TYPE_IX_A = _ENUMS();
var _TYPE_TR = _ENUMS();
var _A_ICO2 = _ENUMS();
var _TYPE_TR_A = _ENUMS();

var _NEWMSG = _ENUMS();
var _NEWMSG_N = _ENUMS();
var _NEWMSG_Y = _ENUMS();

var _JPGQCLB = _ENUMS();
var _JPGQC = _ENUMS();
var _JPGMAKE = _ENUMS();

var _CRYPTOPWLB = _ENUMS();
var _CRYPTOPW = _ENUMS();
var _CRYPTOCOL = _ENUMS();
var _CRYPTOZCMPLB = _ENUMS();
var _CRYPTOZCMP = _ENUMS();
var _CRYPTOSTORELB = _ENUMS();
var _CRYPTOSTORE = _ENUMS();
var _CRYPTORCRCLB = _ENUMS();
var _CRYPTORCRC = _ENUMS();
var _CRYPTOCSLB = _ENUMS();
var _CRYPTOCS = _ENUMS();
var _CRYPTOZIDXLB = _ENUMS();
var _CRYPTOZIDX = _ENUMS();
var _CRYPTOSET = _ENUMS();

var _SAVESTATUS = _ENUMS();
var _SAVEAS = _ENUMS();

var _CTYPELB = _ENUMS();
var _CTYPELB1 = _ENUMS();
var _CTYPELB2 = _ENUMS();
var _A_ICOCTY = _ENUMS();
var _CTYPE = _ENUMS();
var _CTYPELB22 = _ENUMS();
var _PLT_OPT = _ENUMS();

var _CVSSIZELB = _ENUMS();
var _CVSSIZELB2 = _ENUMS();
var _CVSSIZE_WLB = _ENUMS();
var _CVSSIZE_W = _ENUMS();
var _CVSSIZE_HLB = _ENUMS();
var _CVSSIZE_H = _ENUMS();
var _CVSSIZE = _ENUMS();

var _A_ICOBGC = _ENUMS();
var _BGCOLORLB = _ENUMS();
var _BGCOLORLB2 = _ENUMS();
var _BGCOLOR = _ENUMS();
var _BGCOLORNUM = _ENUMS();

var _PNGTYPELB = _ENUMS();
var _PNGTYPELB2 = _ENUMS();
var _A_ICOPNG = _ENUMS();
var _PNGTYPE = _ENUMS();

var _FRMSIZELB = _ENUMS();
var _FRMSIZELB2 = _ENUMS();
var _FRMSIZEIMG = _ENUMS();
var _FRMSIZE_TS = _ENUMS();
var _FRMSIZE_LS = _ENUMS();
var _FRMSIZE_BS = _ENUMS();
var _FRMSIZE_RS = _ENUMS();
var _FRMSIZE_CAST = _ENUMS();

var _FILECMD = _ENUMS();

var _NEWFLTDW = _ENUMS();
var _OPENFLTDW = _ENUMS();
var _SAVEFLTDW = _ENUMS();
var _SAVEPNG = _ENUMS();
var _SAVEPNG2 = _ENUMS();
var _SAVEJPG = _ENUMS();
var _SAVEFD = _ENUMS();
var _BASE64TXT = _ENUMS();
var _SETCRYPTO = _ENUMS();
var _AESCRYPTO = _ENUMS();
var _DECRYPTO = _ENUMS();
var _SAVEICO = _ENUMS();
var _SAVECUR = _ENUMS();

var _POPUPCOV = _ENUMS();
var _TYPEBOX = _ENUMS();
var _NEWBOX = _ENUMS();
var _JPGBOX = _ENUMS();
var _CRYPTOBOX = _ENUMS();
var _SAVEBOX = _ENUMS();

var _COLORS = _ENUMS();
var _R_COLLB = _ENUMS();
var _R_COL = _ENUMS();
var _G_COLLB = _ENUMS();
var _G_COL = _ENUMS();
var _B_COLLB = _ENUMS();
var _B_COL = _ENUMS();
var _H_COLLB = _ENUMS();
var _H_COL = _ENUMS();
var _S_COLLB = _ENUMS();
var _S_COL = _ENUMS();
var _L_COLLB = _ENUMS();
var _L_COL = _ENUMS();
var _A_ICOCOL = _ENUMS();
var _A_COLLB = _ENUMS();
var _A_COL = _ENUMS();
var _HEX_COLLB = _ENUMS();
var _HEX_COL = _ENUMS();
var _COLCHANGE = _ENUMS();
var _COLADD = _ENUMS();
var _DISCARD = _ENUMS();
var _UNDO = _ENUMS();

var _COLORTITLE = _ENUMS();
var _HUE_SAT_PTR = _ENUMS();
var _HUE_SAT = _ENUMS();
var _LUM_PTR = _ENUMS();
var _LUMGAUGE = _ENUMS();
var _COLORFORM = _ENUMS();

var _PLTLB = _ENUMS();
var _PLTCVS = _ENUMS();
var _PLTFN = _ENUMS();
var _PLTFNLB = _ENUMS();

var _CMD_COPY = _ENUMS();
var _CMD_PASTE = _ENUMS();
var _CMD_DEL = _ENUMS();
var _CMD_ROTATE = _ENUMS();
var _CMD_HZ = _ENUMS();
var _CMD_VT = _ENUMS();
var _CMD_PLUS = _ENUMS();
var _CMD_MINUS = _ENUMS();
var _CMD32 = _ENUMS();
var _CMD64 = _ENUMS();
var _CMD_CUR = _ENUMS();

var _BTNS_CMD = _ENUMS();
var _POS_XY = _ENUMS();
var _RECT_WH = _ENUMS();
var _BTN_FILL = _ENUMS();
var _BTN_LINE = _ENUMS();
var _BTN_RECT = _ENUMS();
var _BTN_COL = _ENUMS();
var _BTN_LYR = _ENUMS();
var _BTN_PLT = _ENUMS();
var _BUF_NUM = _ENUMS();
var _BTN_REDO = _ENUMS();
var _BTN_UNDO = _ENUMS();

var _FLTDWLOGO = _ENUMS();
var _BTNS = _ENUMS();
var _BTN_FILE = _ENUMS();

var _RULENAME = _ENUMS();
var _RECTLAYOUT = _ENUMS();
var _RULE_CX = _ENUMS();
var _RULE_CY = _ENUMS();
var _RULE_TS = _ENUMS();
var _RULE_LS = _ENUMS();
var _RULE_BS = _ENUMS();
var _RULE_RS = _ENUMS();
var _RULEPREV = _ENUMS();
var _RULENEXT = _ENUMS();
var _RULEINSERT = _ENUMS();
var _RULEDEL = _ENUMS();

var _RULES = _ENUMS();
var _RULENO = _ENUMS();
var _RULEFORM = _ENUMS();
var _RULEADD = _ENUMS();
var _RULENONE = _ENUMS();

var _LYREDIT = _ENUMS();
var _LYRHIDDEN = _ENUMS();
var _LYRVISIBLE = _ENUMS();
var _LYRVSLB = _ENUMS();
var _LYRFWD = _ENUMS();
var _LYRIMG = _ENUMS();
var _LYRBM = _ENUMS();
var _ICPASTE = _ENUMS();
var _SELECTALL = _ENUMS();

var _LYRLB = _ENUMS();
var _LYRRECTBTN = _ENUMS();
var _LYR1BTN = _ENUMS();
var _LYR2BTN = _ENUMS();
var _LYR3BTN = _ENUMS();
var _LYRCMD = _ENUMS();
var _LYRRECTBG = _ENUMS();

var _MENUBG = _ENUMS();
var _SCL_T = _ENUMS();
var _SCL_V = _ENUMS();
var _SCL_B = _ENUMS();
var _SCL_L = _ENUMS();
var _SCL_H = _ENUMS();
var _SCL_R = _ENUMS();
var _CDT = _ENUMS();
var _PLTBG = _ENUMS();
var _LYRBG = _ENUMS();
var _FILEBG = _ENUMS();
var _COLORCOV = _ENUMS();
var _COLORBG = _ENUMS();

var _FLTDWFILE = _ENUMS();
var _PNGFILE = _ENUMS();
var _IMGFILE = _ENUMS();
var _BASE64TXTFILE = _ENUMS();
var _AESCRYPTOFILE = _ENUMS();
var _DECRYPTOFILE = _ENUMS();

var _P_COLPT = _ENUMS(0);
var _P_COLCS = _ENUMS();
var _P_COLBC = _ENUMS();
var _P_NEW = _ENUMS();
var _P_FILE = _ENUMS();
var _P_CTY = _ENUMS();
var _P_PNG = _ENUMS();
var _P_CONFIRM = _ENUMS();
var _P_JPG = _ENUMS();
var _P_CRYPTO = _ENUMS();
var _P_SAVE = _ENUMS();
var _P_FILE_ACCESS = _ENUMS();
var _P_LINE = _ENUMS();
var _P_FILL = _ENUMS();
var _P_RECT = _ENUMS();
var _P_EXTRCT = _ENUMS();

var _Lc;
var _Rc;
var _Bg;
var _W;
var _H;
var _Clp;
var _Fp;
var _Fa;
var _Bc;
var _Ps;
var _Pt;
var _As;
var _Ac;
var _Lp;
var _Lvs;
var _Lyr;
var _St;
var _Sl;
var _Sb;
var _Sr;
var _Addix;
var _Rl;
var _Rn;
var _Rnbuf;
var _Ubl;
var _Lpbuf;
var _Lyrbuf;
var _Psbuf;
var _Ptbuf;
var _Asbuf;
var _Acbuf;
var _Wbuf;
var _Hbuf;
var _Rbl;
var _Lpbuf2;
var _Lyrbuf2;
var _Psbuf2;
var _Ptbuf2;
var _Asbuf2;
var _Acbuf2;
var _Wbuf2;
var _Hbuf2;
var _Cw;
var _Ch;
var _Sw;
var _Sh;
var _Mtx;
var _Curimg;
var _Dwcur;
var _Ptcur;
var _Phcur;
var _Cur;
var _Auto;
var _Rs;
var _Rf;
var _Dt;
var _Rd;
var _Cdt;
var _Ccp;
var _Cbc;
var _Ccs;
var _Cpt;
var _Csat;
var _Clum;
var _Sat_w;
var _Sat_h;
var _Lum_w;
var _Lum_h;
var _Mg;
var _Mode;
var _Rcnt;
var _Sp;
var _Qc;
var _Jpg;
var _Sp0;
var _Sa;
var _Bc_r;
var _Bc_g;
var _Bc_b;
var _Bc_a;
var _Bc_a0;
var _Sbc;
var _Sr1;
var _Sb1;
var _Inc;
var _Nrl;
var _Cmp;
var _Dt_w;
var _Hplt;
var _Htrs;
var _Fdat;
var _Fnam;
var _Fx;
var _Fy;
var _Fpng;
var _Zs;
var _Fdm;
var _Fdp;
var _Fds;
var _Fdl;
var _Pw;
var _Ks;
var _Zcmp;
var _Store;
var _Rcrc;
var _Cs;
var _Zidx;
var _Filename;
var _File;
var _Filetime;
var _Fltdw_name;
var _Pen;
var _Penbuf;
var _Lcol;
var _Rcol;
var _Cbuf;
var _Cnew;
var _Cidx;
var _Pcscr;
var _Clw;
var _Clh;
var _C_r;
var _C_g;
var _C_b;
var _C_h;
var _C_s;
var _C_l;
var _C_a;
var _C_hex;
var _C_al;
var _Flk;
var _Cu;
var _Plt;
var _Lm;
var _O_cdt;
var _O_sclv;
var _Cx;
var _Cy;
var _Cdt_a;
var _Cdt_t;
var _Ctl;
var _Sdx;
var _Sdy;
var _Scrl;
var _Scrl2;
var _Scrl_d;
var _Sd;
var _Rect;
var _Rect2;
var _Rect_b;
var _Rect_d;
var _Rect_o;
var _Rect_s;
var _Rect_f;
var _Tmp;
var _Tmp_w;
var _Tmp_h;
var _Cpy;
var _Cpy_w;
var _Cpy_h;
var _Line_o;
var _New;

var _Load = true;

var _INV = function (P_)
   {
   var u = 4 * (P_[_X] + _W * P_[_Y]);
   var v = u + 1;
   var w = u + 2;
   var x = _HSL(_Rd[u], _Rd[v], _Rd[w]);
   var y = x >>> 16;
   var z = x & 0xFF;
   var r = z > 120;

   if ((x >>> 8 & 0xFF) < 120 ?
         (r ? z >= 150 ? 100 : 80 : 60) <= y && y <= (r ? 180 : z < 30 ? 160 : 140)
         : (r ? z >= 150 ? 140 : 70 : 50) <= y && y <= (r ? 190 : z < 30 ? 170 : 100))
      {
      if (r)
         {
         _Rd[u] = 0x00;
         _Rd[v] = 0x00;
         _Rd[w] = 0x00;
         _Rd[u + 3] = 0xFF;
         }
      else
         {
         _Rd[u] = 0xFF;
         _Rd[v] = 0xFF;
         _Rd[w] = 0xFF;
         _Rd[u + 3] = 0xFF;
         }
      }
   else
      {
      _Rd[u] = ~_Rd[u];
      _Rd[v] = ~_Rd[v];
      _Rd[w] = ~_Rd[w];
      _Rd[u + 3] = 0xFF;
      }
   };

var _COL = function (Ix_)
   {
   if (_Fp)
      {
      return (Ix_);
      }
   else
      {
      return (Ix_ === _LCOL ? _Lcol : _Rcol);
      }
   };

var _GETPX = function (Arr_, W_, P_, Col_)
   {
   var u;

   if (_Fp)
      {
      u = Arr_[P_[_X] + W_ * P_[_Y]];
      }
   else
      {
      if (Col_ !== _NULL)
         {
         Col_ = _COL(Col_);
         }

      u = (_Fa ? 4 : 3) * (P_[_X] + W_ * P_[_Y]);
      u = (Arr_[u] | Arr_[u + 1] << 8 | Arr_[u + 2] << 16 | (_Fa ? Arr_[u + 3] : 0xFF) << 24) >>> 0;
      }

   return (Col_ === u ? _NULL : u);
   };

var _PLOT = function (P_, Col_)
   {
   var u;
   var v;

   if (Col_ !== _NULL)
      {
      if (_Fp)
         {
         _Lyr[_Lp][P_[_X] + _W * P_[_Y]] = Col_;
         }
      else
         {
         u = _Lyr[_Lp];
         v = (_Fa ? 4 : 3) * (P_[_X] + _W * P_[_Y]);
         u[v] = Col_;
         u[v + 1] = Col_ >>> 8;
         u[v + 2] = Col_ >>> 16;

         if (_Fa)
            {
            u[v + 3] = Col_ >>> 24;
            }
         }
      }
   };

var _PLOT2 = function (Arr_, W_, P_, Col_)
   {
   var u;

   if (_Fp)
      {
      Arr_[P_[_X] + W_ * P_[_Y]] = Col_;
      }
   else
      {
      u = (_Fa ? 4 : 3) * (P_[_X] + W_ * P_[_Y]);
      Arr_[u] = Col_;
      Arr_[u + 1] = Col_ >>> 8;
      Arr_[u + 2] = Col_ >>> 16;

      if (_Fa)
         {
         Arr_[u + 3] = Col_ >>> 24;
         }
      }
   };

var _SQCD = function (P_)
   {
   return (
      (P_[_Y] < _Clp[_T] ? _TP : 0)
      | (P_[_X] < _Clp[_L] ? _LF : 0)
      | (P_[_Y] > _Clp[_B] ? _BT : 0)
      | (P_[_X] > _Clp[_R] ? _RT : 0)
      );
   };

var _CLCLP = function (Crd_, S_, F_, E_, P_)
   {
   var u = Crd_ === _X;
   var v = u ? _Y : _X;
   var w = (F_[v] - S_[v]) * (_Clp[E_] - S_[Crd_]) / (F_[Crd_] - S_[Crd_]) + S_[v];
   var x = u ? _T : _L;

   if (w >= _Clp[x] && w <= _Clp[x + 2])
      {
      P_[Crd_] = _Clp[E_];
      P_[v] = w;

      return (true);
      }

   return (false);
   };

var _CLCLPA = function (Sqcd_, S_, F_, P_)
   {
   if ((Sqcd_ & _LF) !== 0 && _CLCLP(_X, S_, F_, _L, P_))
      {
      return (true);
      }

   if ((Sqcd_ & _RT) !== 0 && _CLCLP(_X, S_, F_, _R, P_))
      {
      return (true);
      }

   if ((Sqcd_ & _TP) !== 0 && _CLCLP(_Y, S_, F_, _T, P_))
      {
      return (true);
      }

   if ((Sqcd_ & _BT) !== 0 && _CLCLP(_Y, S_, F_, _B, P_))
      {
      return (true);
      }

   return (false);
   };

var _CLP = function (S_, F_)
   {
   var u = _SQCD(S_);
   var v = _SQCD(F_);

   if ((u | v) === 0)
      {
      return (0);
      }
   else if ((u & v) !== 0)
      {
      return (-1);
      }

   if (u !== 0 && ! _CLCLPA(u, [S_[_X], S_[_Y]], F_, S_))
      {
      return (-1);
      }

   if (v !== 0 && ! _CLCLPA(v, S_, [F_[_X], F_[_Y]], F_))
      {
      return (-1);
      }

   return (1);
   };

var _LINE = function (S_, F_)
   {
   var u = _Lyrbuf[_Ubl - 1];
   var v = _Lyr[_Lp];
   var w;
   var x;
   var y;
   var z;
   var r;
   var q = [S_[_X], S_[_Y]];
   var p = [F_[_X], F_[_Y]];
   var o;
   var l;
   var s;

   for (s = 0; s < u[_LENGTH]; ++ s)
      {
      v[s] = u[s];
      }

   if (_CLP(q, p) > -1)
      {
      if (p[_X] > q[_X])
         {
         u = p[_Y] > q[_Y] ?
               (v = [1, 1] , [p[_X] - q[_X], p[_Y] - q[_Y]])
            :
               (v = [1, -1] , [p[_X] - q[_X], q[_Y] - p[_Y]]);
         }
      else
         {
         u = p[_Y] > q[_Y] ?
               (v = [-1, 1] , [q[_X] - p[_X], p[_Y] - q[_Y]])
            :
               (v = [-1, -1] , [q[_X] - p[_X], q[_Y] - p[_Y]]);
         }

      if (u[_X] > u[_Y])
         {
         w = _X;
         x = _Y;
         }
      else
         {
         w = _Y;
         x = _X;
         }

      y = -u[w];
      z = _FLOOR((u[w] + 1) / 2);
      r = 2 * u[x];
      o = 2 * u[w];
      l = _COL(_Lc);

      for (s = 0; s < z; ++ s)
         {
         _PLOT(q, l);
         _PLOT(p, l);
         q[w] += v[w];
         p[w] -= v[w];
         y += r;

         if (y >= 0)
            {
            q[x] += v[x];
            p[x] -= v[x];
            y -= o;
            }
         }

      if (u[w] % 2 === 0)
         {
         _PLOT(q, l);
         }
      }
   };

var _COPY = function ()
   {
   var s;

   _Rd = new _UINT8ARRAY(_Dt[_LENGTH]);

   for (s = 0; s < _Rd[_LENGTH]; ++ s)
      {
      _Rd[s] = _Dt[s];
      }
   };

var _RECT = function (S_, F_, Rd_)
   {
   var u = [
      F_[_X] > S_[_X] ? 1 : -1,
      F_[_Y] > S_[_Y] ? 1 : -1
      ];
   var v = [S_[_X], S_[_Y]];
   var w = [S_[_X], S_[_Y] + u[_Y] * (F_[_Y] - S_[_Y])];
   var x = 0;
   var y = S_[_Y] !== F_[_Y];
   var z = ! Rd_;
   var s;

   if (Rd_)
      {
      if (_Rd === _Dt)
         {
         _Rd = new _UINT8ARRAY(_Dt[_LENGTH]);
         }

      for (s = 0; s < _Rd[_LENGTH]; ++ s)
         {
         _Rd[s] = _Dt[s];
         }

      _Rs = [];
      _Rf = [];
      _Rs[_X] =
         S_[_X] <= F_[_X] ?
            S_[_Y] <= F_[_Y] ?
               (_Rf[_Y] = F_[_Y] , _Rf[_X] = F_[_X] , _Rs[_Y] = S_[_Y] , S_[_X])
            :
               (_Rf[_Y] = S_[_Y] , _Rf[_X] = F_[_X] , _Rs[_Y] = F_[_Y] , S_[_X])
         :
            S_[_Y] <= F_[_Y] ?
               (_Rf[_Y] = F_[_Y] , _Rf[_X] = S_[_X] , _Rs[_Y] = S_[_Y] , F_[_X])
            :
               (_Rf[_Y] = S_[_Y] , _Rf[_X] = S_[_X] , _Rs[_Y] = F_[_Y] , F_[_X]);
      }

   for (s = _X; s <= _Y; ++ s)
      {
      if (s === _Y)
         {
         _INV(v);

         if (y)
            {
            _INV(w);
            v = [S_[_X], S_[_Y] + 1];
            w = [S_[_X] + u[_X] * (F_[_X] - S_[_X]), v[_Y]];
            x = 2;
            y = S_[_X] !== F_[_X];
            }
         else
            {
            break;
            }
         }

      for (; v[s] !== F_[s]; )
         {
         if (z || x <= 1)
            {
            _INV(v);

            if (y)
               {
               _INV(w);
               }
            }

         v[s] += u[s];
         w[s] += u[s];

         if (x < 3)
            {
            ++ x;
            }
         else
            {
            x = 0;
            }
         }
      }
   };

var _CUR_PTR = function (X_, Y_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;

   X_ += _Mtx[_SCX] - 4;
   Y_ += _Mtx[_SCY] - _O_cdt;
   v =
      _Rs[_X] < _Rf[_X] ?
         _Rs[_Y] < _Rf[_Y] ?
            (y = _Rf[_Y] * _Mg , x = _Rs[_Y] * _Mg , w = _Rf[_X] * _Mg , _Rs[_X] * _Mg)
         :
            (y = _Rs[_Y] * _Mg , x = _Rf[_Y] * _Mg , w = _Rf[_X] * _Mg , _Rs[_X] * _Mg)
      :
         _Rs[_Y] < _Rf[_Y] ?
            (y = _Rf[_Y] * _Mg , x = _Rs[_Y] * _Mg , w = _Rs[_X] * _Mg , _Rf[_X] * _Mg)
         :
            (y = _Rs[_Y] * _Mg , x = _Rf[_Y] * _Mg , w = _Rs[_X] * _Mg , _Rf[_X] * _Mg);
   u = v - 3;
   z = v + _Mg;
   r = w - 1;
   q = w + _Mg + 2;
   v = x - 3;
   w = x + _Mg;
   x = y - 1;
   y = y + _Mg + 2;

   if (z > r)
      {
      p = z;
      z = r;
      r = p;
      }

   if (w > x)
      {
      p = w;
      w = x;
      x = p;
      }

   p = u <= X_ && X_ <= q;
   o = v <= Y_ && Y_ <= y;
   u = u <= X_ && X_ <= z;
   q = r <= X_ && X_ <= q;
   v = v <= Y_ && Y_ <= w;
   y = x <= Y_ && Y_ <= y;
   l = r - z < 2 && z <= X_ && X_ <= r;
   j = x - w < 2 && w <= Y_ && Y_ <= x;
   i = z < X_ && X_ < r;
   h = w < Y_ && Y_ < x;

   if (i && h || i && j || h && l || l && j)
      {
      return (_Cur = 1);
      }

   if (u)
      {
      if (v)
         {
         return (_Cur = 3);
         }

      if (y)
         {
         return (_Cur = 5);
         }
      }

   if (q)
      {
      if (y)
         {
         return (_Cur = 7);
         }

      if (v)
         {
         return (_Cur = 9);
         }
      }

   if (v && p)
      {
      return (_Cur = 2);
      }

   if (u && o)
      {
      return (_Cur = 4);
      }

   if (y && p)
      {
      return (_Cur = 6);
      }

   if (q && o)
      {
      return (_Cur = 8);
      }

   return (_Cur = 0);
   };

var _STORE = function (Plt_)
   {
   var u = _Lyr[_Lp];
   var v;
   var s;

   _CLEAR_R();
   _PUSH(_Lp, true, true, false, Plt_, false);
   v = new _UINT8ARRAY(u[_LENGTH]);

   for (s = 0; s < u[_LENGTH]; ++ s)
      {
      v[s] = u[s];
      }

   _Lyr[_Lp] = v;

   if (Plt_)
      {
      v = new _UINT8ARRAY(768);

      for (s = 0; s < 768; ++ s)
         {
         v[s] = _Pt[s];
         }

      _Pt = v;
      v = new _UINT8ARRAY(256);

      for (s = 0; s < 256; ++ s)
         {
         v[s] = _Ac[s];
         }

      _Ac = v;
      }
   };

var _CNVT = function (Arr_, W0_, W_, H_, E_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var s;
   var t;
   var r;
   var q;
   var p;

   if (_Fp)
      {
      _Tmp_w = W_;
      _Tmp_h = H_;
      _Tmp = new _UINT8ARRAY(W_ * H_);
      W0_ *= 4;
      v = _D3[_Ps];

      for (r = 0 , t = 0 , p = 0; p < H_; r += W0_ , ++ p)
         {
         for (s = r , q = 0; q < W_; s += 4 , ++ t , ++ q)
            {
            x = s + 1;
            y = s + 2;
            w = _Fa ? Arr_[s + 3] : 0xFF;
            u = _FIND(Arr_[s], Arr_[x], Arr_[y], w);

            if (u === _EOF)
               {
               if (v < 256)
                  {
                  _Pt[_Ps] = Arr_[s];
                  _Pt[_Ps + 1] = Arr_[x];
                  _Pt[_Ps + 2] = Arr_[y];
                  _Ac[v] = w;
                  _Tmp[t] = v;

                  if (_Ac[v] !== 0xFF)
                     {
                     _As = v + 1;
                     }

                  _Ps += 3;
                  ++ v;
                  }
               else
                  {
                  v = _Ubl - 1;
                  u = _Ptbuf[v];

                  for (s = 0; s < 768; ++ s)
                     {
                     _Pt[s] = u[s];
                     }

                  _Ps = _Psbuf[v];
                  u = _Acbuf[v];

                  for (s = 0; s < 256; ++ s)
                     {
                     _Ac[s] = u[s];
                     }

                  _As = _Asbuf[v];

                  return (false);
                  }
               }
            else
               {
               _Tmp[t] = u;
               }
            }
         }
      }
   else
      {
      W0_ *= E_;
      v = E_ === 4;
      _Tmp_w = W_;
      _Tmp_h = H_;
      u = _Fa ? 4 : 3;
      _Tmp = new _UINT8ARRAY(W_ * H_ * u);

      for (r = 0 , t = 0 , p = 0; p < H_; r += W0_ , ++ p)
         {
         for (s = r , q = 0; q < W_; s += E_ , t += u , ++ q)
            {
            _Tmp[t] = Arr_[s];
            _Tmp[t + 1] = Arr_[s + 1];
            _Tmp[t + 2] = Arr_[s + 2];

            if (_Fa)
               {
               _Tmp[t + 3] = v ? Arr_[s + 3] : 0xFF;
               }
            }
         }
      }

   return (true);
   };

var _PUT = function (Del_, Us_, Uf_, O_)
   {
   var u = _Lyrbuf[_Ubl - 1];
   var v = _Lyr[_Lp];
   var w;
   var s;
   var t;

   for (s = 0; s < u[_LENGTH]; ++ s)
      {
      v[s] = u[s];
      }

   if (Del_)
      {
      u = _Fp ? _Rc : _Rcol;
      s = [Us_[_X], Us_[_Y]];

      for (; s[_Y] <= Uf_[_Y]; ++ s[_Y])
         {
         for (; s[_X] <= Uf_[_X]; ++ s[_X])
            {
            _PLOT(s, u);
            }

         s[_X] = Us_[_X];
         }
      }

   if (arguments[_LENGTH] === 4)
      {
      s = [O_[_X], O_[_Y]];
      t = [0, 0];
      u = _Bg ? _Rc : _NULL;
      v = s[_X] + _Tmp_w;
      v = v > _W ? _W : v;
      w = s[_Y] + _Tmp_h;
      w = w > _H ? _H : w;

      for (; s[_Y] < w; ++ s[_Y] , ++ t[_Y])
         {
         for (; s[_X] < v; ++ s[_X] , ++ t[_X])
            {
            _PLOT(s, _GETPX(_Tmp, _Tmp_w, t, u));
            }

         s[_X] = O_[_X];
         t[_X] = 0;
         }
      }
   };

var _SZING = function (W_, H_)
   {
   var u;
   var v = W_ !== _Tmp_w;
   var w = H_ !== _Tmp_h;
   var s;
   var t;

   if (v || w)
      {
      u = new _UINT8ARRAY(_Fp ? W_ * H_ : W_ * H_ * (_Fa ? 4 : 3));
      v = v && W_ > 1;
      w = w && H_ > 1;
      s = [0, 0];
      t = [];

      for (; s[_Y] < H_; ++ s[_Y])
         {
         t[_Y] = w ? _FLOOR(s[_Y] / H_ * _Tmp_h) : s[_Y];

         for (; s[_X] < W_; ++ s[_X])
            {
            t[_X] = v ? _FLOOR(s[_X] / W_ * _Tmp_w) : s[_X];
            _PLOT2(u, W_, s, _GETPX(_Tmp, _Tmp_w, t, _NULL));
            }

         s[_X] = 0;
         }

      _Tmp = u;
      _Tmp_w = W_;
      _Tmp_h = H_;
      }
   };

var _RVRS = function (Crd_)
   {
   var u;
   var v;
   var w;
   var x;
   var s = [0, 0];
   var t = [];

   u = Crd_ === _X ?
         (v = _Tmp_h , w = _Tmp_w - 1 , _Y)
      :
         (v = _Tmp_w , w = _Tmp_h - 1 , _X);

   for (t[u] = 0; s[u] < v; ++ s[u] , ++ t[u])
      {
      for (t[Crd_] = w; s[Crd_] < t[Crd_]; ++ s[Crd_] , -- t[Crd_])
         {
         x = _GETPX(_Tmp, _Tmp_w, t, _NULL);
         _PLOT2(_Tmp, _Tmp_w, t, _GETPX(_Tmp, _Tmp_w, s, _NULL));
         _PLOT2(_Tmp, _Tmp_w, s, x);
         }

      s[Crd_] = 0;
      }
   };

var _ROTATE = function ()
   {
   var u = new _UINT8ARRAY(_Tmp[_LENGTH]);
   var s = [];
   var t = [];

   s[_Y] = 0;
   t[_X] = 0;

   for (; s[_Y] < _Tmp_h; )
      {
      s[_X] = 0;
      t[_Y] = 0;

      for (; s[_X] < _Tmp_w; )
         {
         _PLOT2(u, _Tmp_h, t, _GETPX(_Tmp, _Tmp_w, s, _NULL));
         ++ s[_X];
         ++ t[_Y];
         }

      ++ s[_Y];
      ++ t[_X];
      }

   _Tmp = u;
   u = _Tmp_w;
   _Tmp_w = _Tmp_h;
   _Tmp_h = u;
   _RVRS(_X);
   };

var _SCAN = function (Buf_, P_, Xr_, Yo_, Col_)
   {
   var u;

   for (; P_[_X] <= Xr_; )
      {
      for (; P_[_X] < Xr_; ++ P_[_X])
         {
         if (_GETPX(_Lyr[_Lp], _W, P_, _NULL) === Col_)
            {
            break;
            }
         }

      if (_GETPX(_Lyr[_Lp], _W, P_, _NULL) !== Col_)
         {
         break;
         }

      u = [];
      u[_XL] = P_[_X];

      for (; P_[_X] <= Xr_; ++ P_[_X])
         {
         if (_GETPX(_Lyr[_Lp], _W, P_, _NULL) !== Col_)
            {
            break;
            }
         }

      u[_YC] = P_[_Y];
      u[_XR] = P_[_X] - 1;
      u[_YO] = Yo_;
      Buf_[Buf_[_LENGTH]] = u;
      }
   };

var _POP = function (Buf_)
   {
   var u = Buf_[0];
   var s;

   for (s = 0; s < Buf_[_LENGTH]; ++ s)
      {
      Buf_[s] = Buf_[s + 1];
      }

   -- Buf_[_LENGTH];

   return (u);
   };

var _FILL = function (P_)
   {
   var u = _GETPX(_Lyr[_Lp], _W, P_, _NULL);
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o = _COL(_Lc);
   var s;

   if (u === o)
      {
      return;
      }

   v = [];
   v[v[_LENGTH]] = [P_[_X], P_[_Y], P_[_X], P_[_Y]];
   s = [];

   for (; v[_LENGTH] > 0; )
      {
      z = _POP(v);

      if (_GETPX(_Lyr[_Lp], _W, z, _NULL) === u)
         {
         r = z[_XL];
         q = z[_YC];
         p = z[_XR];
         w = z[_YO];
         x = z[_XL] - 1;
         y = z[_XR] + 1;
         s[_Y] = z[_YC];

         for (s[_X] = p + 1; s[_X] <= _Clp[_R]; ++ s[_X])
            {
            if (_GETPX(_Lyr[_Lp], _W, s, _NULL) !== u)
               {
               break;
               }
            }

         p = s[_X] - 1;

         for (s[_X] = r - 1; _Clp[_L] <= s[_X]; -- s[_X])
            {
            if (_GETPX(_Lyr[_Lp], _W, s, _NULL) !== u)
               {
               break;
               }
            }

         ++ s[_X];
         r = s[_X];

         for (; s[_X] <= p; ++ s[_X])
            {
            _PLOT(s, o);
            }

         z = q - 1;
         s[_X] = r;
         s[_Y] = z;

         if (z >= _Clp[_T])
            {
            if (z === w)
               {
               _SCAN(v, s, x, q, u);
               s[_X] = y;
               _SCAN(v, s, p, q, u);
               }
            else
               {
               _SCAN(v, s, p, q, u);
               }
            }

         z += 2;
         s[_X] = r;
         s[_Y] = z;

         if (z <= _Clp[_B])
            {
            if (z === w)
               {
               _SCAN(v, s, x, q, u);
               s[_X] = y;
               _SCAN(v, s, p, q, u);
               }
            else
               {
               _SCAN(v, s, p, q, u);
               }
            }
         }
      }
   };

var _FWD = function (Ix_)
   {
   var u = Ix_ === _LS1 ? 0 : Ix_ + 1;
   var v;
   var w;
   var s;

   if (_Lp === Ix_)
      {
      _Lp = u;
      }
   else if (_Lp === u)
      {
      _Lp = Ix_;
      }

   v = _Lvs[Ix_];
   _Lvs[Ix_] = _Lvs[u];
   _Lvs[u] = v;
   v = _Lyr[Ix_];
   _Lyr[Ix_] = _Lyr[u];
   _Lyr[u] = v;

   for (s = 0; s < _Ubl; ++ s)
      {
      if (_Lpbuf[s] === Ix_)
         {
         _Lpbuf[s] = u;
         }
      else if (_Lpbuf[s] === u)
         {
         _Lpbuf[s] = Ix_;
         }
      else if (_Lpbuf[s] === _EOF)
         {
         v = _Lyrbuf[s];
         w = v[Ix_];
         v[Ix_] = v[u];
         v[u] = w;
         }
      }

   for (s = 0; s < _Rbl; ++ s)
      {
      if (_Lpbuf2[s] === Ix_)
         {
         _Lpbuf2[s] = u;
         }
      else if (_Lpbuf2[s] === u)
         {
         _Lpbuf2[s] = Ix_;
         }
      else if (_Lpbuf2[s] === _EOF)
         {
         v = _Lyrbuf2[s];
         w = v[Ix_];
         v[Ix_] = v[u];
         v[u] = w;
         }
      }
   };

var _BLEND = function ()
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var s;
   var t;
   var r;

   if (_Fa)
      {
      if (_Fp)
         {
         v = _Bc & 0xFF;
         w = _Bc >>> 8 & 0xFF;
         x = _Bc >>> 16 & 0xFF;

         for (s = 0; s !== _LS1; ++ s)
            {
            if (_Lvs[s])
               {
               break;
               }
            }

         j = _Lyr[s ++];
         u = _Dt[_LENGTH];

         if ((y = _Bc >>> 24) === 0x00)
            {
            for (t = r = 0; t !== u; )
               {
               if ((p = _Ac[i = j[r ++]]) === 0x00)
                  {
                  _Dt[t ++] = v;
                  _Dt[t ++] = w;
                  _Dt[t ++] = x;
                  _Dt[t ++] = 0x00;
                  }
               else
                  {
                  _Dt[t ++] = _Pt[z = _M3[i]];
                  _Dt[t ++] = _Pt[++ z];
                  _Dt[t ++] = _Pt[++ z];
                  _Dt[t ++] = p;
                  }
               }
            }
         else if (y === 0xFF)
            {
            for (t = r = 0; t !== u; )
               {
               if ((p = _Ac[i = j[r ++]]) === 0x00)
                  {
                  _Dt[t ++] = v;
                  _Dt[t ++] = w;
                  _Dt[t ++] = x;
                  _Dt[t ++] = 0xFF;
                  }
               else if (p === 0xFF)
                  {
                  _Dt[t ++] = _Pt[z = _M3[i]];
                  _Dt[t ++] = _Pt[++ z];
                  _Dt[t ++] = _Pt[++ z];
                  _Dt[t ++] = 0xFF;
                  }
               else
                  {
                  _Dt[t ++] = (q = _M8[p])[_Pt[z = _M3[i]]] + (o = _M8[_C[p]])[v];
                  _Dt[t ++] = q[_Pt[++ z]] + o[w];
                  _Dt[t ++] = q[_Pt[++ z]] + o[x];
                  _Dt[t ++] = 0xFF;
                  }
               }
            }
         else
            {
            h = _M8[y];

            for (t = r = 0; t !== u; )
               {
               if ((p = _Ac[i = j[r ++]]) === 0x00)
                  {
                  _Dt[t ++] = v;
                  _Dt[t ++] = w;
                  _Dt[t ++] = x;
                  _Dt[t ++] = y;
                  }
               else if (p === 0xFF)
                  {
                  _Dt[t ++] = _Pt[z = _M3[i]];
                  _Dt[t ++] = _Pt[++ z];
                  _Dt[t ++] = _Pt[++ z];
                  _Dt[t ++] = 0xFF;
                  }
               else
                  {
                  _Dt[t ++] = ((q = _M[p])[_Pt[z = _M3[i]]] + (o = _M[l = h[_C[p]]])[v]) / (l += p);
                  _Dt[t ++] = (q[_Pt[++ z]] + o[w]) / l;
                  _Dt[t ++] = (q[_Pt[++ z]] + o[x]) / l;
                  _Dt[t ++] = l;
                  }
               }
            }

         for (; s !== _LSL; )
            {
            if (_Lvs[s])
               {
               j = _Lyr[s ++];

               for (t = r = 0; t !== u; )
                  {
                  if ((p = _Ac[i = j[r ++]]) !== 0x00)
                     {
                     if (p === 0xFF)
                        {
                        _Dt[t ++] = _Pt[z = _M3[i]];
                        _Dt[t ++] = _Pt[++ z];
                        _Dt[t ++] = _Pt[++ z];
                        _Dt[t ++] = 0xFF;
                        }
                     else if ((y = _Dt[t + 3]) === 0x00)
                        {
                        _Dt[t ++] = _Pt[z = _M3[i]];
                        _Dt[t ++] = _Pt[++ z];
                        _Dt[t ++] = _Pt[++ z];
                        _Dt[t ++] = p;
                        }
                     else if (y === 0xFF)
                        {
                        _Dt[t] = (q = _M8[p])[_Pt[z = _M3[i]]] + (o = _M8[_C[p]])[_Dt[t ++]];
                        _Dt[t] = q[_Pt[++ z]] + o[_Dt[t ++]];
                        _Dt[t] = q[_Pt[++ z]] + o[_Dt[t ++]];
                        _Dt[t ++] = 0xFF;
                        }
                     else
                        {
                        _Dt[t] = ((q = _M[p])[_Pt[z = _M3[i]]] + (o = _M[l = _M8[y][_C[p]]])[_Dt[t ++]]) / (l += p);
                        _Dt[t] = (q[_Pt[++ z]] + o[_Dt[t ++]]) / l;
                        _Dt[t] = (q[_Pt[++ z]] + o[_Dt[t ++]]) / l;
                        _Dt[t ++] = l;
                        }
                     }
                  else
                     {
                     t += 4;
                     }
                  }
               }
            else
               {
               ++ s;
               }
            }
         }
      else
         {
         v = _Bc & 0xFF;
         w = _Bc >>> 8 & 0xFF;
         x = _Bc >>> 16 & 0xFF;

         for (s = 0; s !== _LS1; ++ s)
            {
            if (_Lvs[s])
               {
               break;
               }
            }

         j = _Lyr[s ++];
         u = _Dt[_LENGTH];

         if ((y = _Bc >>> 24) === 0x00)
            {
            for (t = u; 0 !== t; )
               {
               if ((p = j[-- t]) === 0x00)
                  {
                  _Dt[t] = 0x00;
                  _Dt[-- t] = x;
                  _Dt[-- t] = w;
                  _Dt[-- t] = v;
                  }
               else
                  {
                  _Dt[t] = p;
                  _Dt[-- t] = j[t];
                  _Dt[-- t] = j[t];
                  _Dt[-- t] = j[t];
                  }
               }
            }
         else if (y === 0xFF)
            {
            for (t = u; 0 !== t; )
               {
               if ((p = j[-- t]) === 0x00)
                  {
                  _Dt[t] = 0xFF;
                  _Dt[-- t] = x;
                  _Dt[-- t] = w;
                  _Dt[-- t] = v;
                  }
               else if (p === 0xFF)
                  {
                  _Dt[t] = 0xFF;
                  _Dt[-- t] = j[t];
                  _Dt[-- t] = j[t];
                  _Dt[-- t] = j[t];
                  }
               else
                  {
                  _Dt[t] = 0xFF;
                  _Dt[-- t] = (q = _M8[p])[j[t]] + (o = _M8[_C[p]])[x];
                  _Dt[-- t] = q[j[t]] + o[w];
                  _Dt[-- t] = q[j[t]] + o[v];
                  }
               }
            }
         else
            {
            h = _M8[y];

            for (t = u; 0 !== t; )
               {
               if ((p = j[-- t]) === 0x00)
                  {
                  _Dt[t] = y;
                  _Dt[-- t] = x;
                  _Dt[-- t] = w;
                  _Dt[-- t] = v;
                  }
               else if (p === 0xFF)
                  {
                  _Dt[t] = 0xFF;
                  _Dt[-- t] = j[t];
                  _Dt[-- t] = j[t];
                  _Dt[-- t] = j[t];
                  }
               else
                  {
                  _Dt[t] = l = p + (z = h[_C[p]]);
                  _Dt[-- t] = ((q = _M[p])[j[t]] + (o = _M[z])[x]) / l;
                  _Dt[-- t] = (q[j[t]] + o[w]) / l;
                  _Dt[-- t] = (q[j[t]] + o[v]) / l;
                  }
               }
            }

         for (; s !== _LSL; )
            {
            if (_Lvs[s])
               {
               j = _Lyr[s ++];

               for (t = u; 0 !== t; )
                  {
                  if ((p = j[-- t]) !== 0x00)
                     {
                     if (p === 0xFF)
                        {
                        _Dt[t] = 0xFF;
                        _Dt[-- t] = j[t];
                        _Dt[-- t] = j[t];
                        _Dt[-- t] = j[t];
                        }
                     else if ((y = _Dt[t]) === 0x00)
                        {
                        _Dt[t] = p;
                        _Dt[-- t] = j[t];
                        _Dt[-- t] = j[t];
                        _Dt[-- t] = j[t];
                        }
                     else if (y === 0xFF)
                        {
                        _Dt[t] = 0xFF;
                        _Dt[-- t] = (q = _M8[p])[j[t]] + (o = _M8[_C[p]])[_Dt[t]];
                        _Dt[-- t] = q[j[t]] + o[_Dt[t]];
                        _Dt[-- t] = q[j[t]] + o[_Dt[t]];
                        }
                     else
                        {
                        _Dt[t] = l = p + (z = _M8[y][_C[p]]);
                        _Dt[-- t] = ((q = _M[p])[j[t]] + (o = _M[z])[_Dt[t]]) / l;
                        _Dt[-- t] = (q[j[t]] + o[_Dt[t]]) / l;
                        _Dt[-- t] = (q[j[t]] + o[_Dt[t]]) / l;
                        }
                     }
                  else
                     {
                     t -= 3;
                     }
                  }
               }
            else
               {
               ++ s;
               }
            }
         }
      }
   else
      {
      for (s = _LSL; -- s !== 0 && ! _Lvs[s]; )
         {
         }

      v = _Lyr[s];

      if (_Fp)
         {
         u = _Dt[_LENGTH];

         for (s = t = 0; s !== u; )
            {
            _Dt[s ++] = _Pt[w = _M3[v[t ++]]];
            _Dt[s ++] = _Pt[++ w];
            _Dt[s ++] = _Pt[++ w];
            _Dt[s ++] = 0xFF;
            }
         }
      else
         {
         for (s = _Dt[_LENGTH] , t = v[_LENGTH]; 0 !== s; )
            {
            _Dt[-- s] = 0xFF;
            _Dt[-- s] = v[-- t];
            _Dt[-- s] = v[-- t];
            _Dt[-- s] = v[-- t];
            }
         }
      }

   _Rd = _Dt;

   if (_Plt || _Lm !== _LSL)
      {
      if (_Pen !== _P_RECT)
         {
         _Tmp = _NULL;
         }

      if (_Pen !== _P_LINE)
         {
         _Line_o = _NULL;
         }
      }
   else
      {
      _Tmp = _NULL;
      _Line_o = _NULL;
      }
   };

var _CAST = function ()
   {
   var u;
   var v;
   var w;
   var x;
   var y;

   if (_Pcscr)
      {
      u = _W * _Mg;
      v = _Clw - 15 - _NAV_L;
      w = v - 7;
      _Cw = u > w ? w : u;
      y = 1 + _BTNS_L;
      u = _H * _Mg;
      x = _Clh - y;
      w = x - 20;
      _Ch = u > w ? w : u;
      u = false;

      if (_Cw < 1)
         {
         _Cw = 1;
         u = true;
         }

      if (_Ch < 1)
         {
         _Ch = 1;
         u = true;
         }

      _SETVALUE(_CDT,
         _VISIBILITY, u ? _HIDDEN : _NULL);
      _Cdt = _GETDATA(_CDT, _Cw, _Ch);
      v -= 17 * 2;
      x -= 17 * 2;
      _Sw = v < 0 ? 0 : v;
      _Sh = x < 0 ? 0 : x;
      _O_sclv = y + 17;
      _O_cdt = y + 3;
      }
   else
      {
      u = _W * _Mg;
      v = _Clw - 14;
      w = v - 7;
      _Cw = u > w ? w : u;
      y = 1 + _BTNS_L * 2;
      u = _H * _Mg;
      x = _Clh - y - 1 - _NAV_L;
      w = x - 20;
      _Ch = u > w ? w : u;
      u = false;

      if (_Cw < 1)
         {
         _Cw = 1;
         u = true;
         }

      if (_Ch < 1)
         {
         _Ch = 1;
         u = true;
         }

      _SETVALUE(_CDT,
         _VISIBILITY, u ? _HIDDEN : _NULL);
      _Cdt = _GETDATA(_CDT, _Cw, _Ch);
      v -= 17 * 2;
      x -= 17 * 2;
      _Sw = v < 0 ? 0 : v;
      _Sh = x < 0 ? 0 : x;
      _O_sclv = y + 17;
      _O_cdt = y + 3;
      }
   };

var _TLSLT = function (X_, Y_, Minus_)
   {
   var u = ((X_ - 4 + _Mtx[_MX]) / _Mg >> 0) + _Mtx[_X];
   var v = ((Y_ - _O_cdt + _Mtx[_MY]) / _Mg >> 0) + _Mtx[_Y];

   return (Minus_ ?
         [u, v]
      :
         [u < 0 ? 0 : u >= _W ? _Clp[_R] : u, v < 0 ? 0 : v >= _H ? _Clp[_B] : v]);
   };

var _SCALE = function (P_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var e;
   var s;
   var t;

   x = _Mtx[_BX] = P_[_X];
   y = _Mtx[_BY] = P_[_Y];
   o = _W * _Mg;
   l = _H * _Mg;
   u = _Mtx[_X] =
      (x = _Mg * x + (j = _Mg >>> 1)) <= (u = _Cw >>> 1) ? (q = false , s = false , z = _Mtx[_MX] = _Mtx[_SCX] = 0) :
      (w = _Mtx[_SCX] = o - _Cw , w + u) <= x ? (q = true , s = false , z = _Mtx[_MX] = w % _Mg , w / _Mg >>> 0) :
      (w = _Mtx[_SCX] = x - u , q = false , s = true , z = _Mtx[_MX] = w % _Mg , w / _Mg >>> 0);
   v = _Mtx[_Y] =
      (y = _Mg * y + j) <= (v = _Ch >>> 1) ? (p = false , t = false , r = _Mtx[_MY] = _Mtx[_SCY] = 0) :
      (w = _Mtx[_SCY] = l - _Ch , w + v) <= y ? (p = true , t = false , r = _Mtx[_MY] = w % _Mg , w / _Mg >>> 0) :
      (w = _Mtx[_SCY] = y - v , p = false , t = true , r = _Mtx[_MY] = w % _Mg , w / _Mg >>> 0);
   w = i = _Mtx[_SW] = (w = _Cw / o * _Sw >>> 0) !== _Sw && w > (j = _Sw > 1 ? _Sw - 2 : 0) ? j : w;
   g = _Mtx[_SX] = (j = u / _Clp[_R] * _Sw >>> 0) === 0 && s ? 1 : q ? _Sw - w : j;
   o = h = _Mtx[_SH] = (o = _Ch / l * _Sh >>> 0) !== _Sh && o > (j = _Sh > 1 ? _Sh - 2 : 0) ? j : o;
   e = _Mtx[_SY] = (j = v / _Clp[_B] * _Sh >>> 0) === 0 && t ? 1 : p ? _Sh - o : j;
   x = y = p = 0;
   w = _Cw << 2;
   v *= l = _W << 2;
   v += u << 2;

   for (s = r; y !== _Ch; )
      {
      j = (r = (u = (q = v) + 1) + 1) + 1;
      o = p;

      for (t = z; x !== _Cw; )
         {
         _Cdt[o ++] = _Rd[q];
         _Cdt[o ++] = _Rd[u];
         _Cdt[o ++] = _Rd[r];
         _Cdt[o ++] = _Rd[j];

         if (++ t === _Mg)
            {
            t = 0;
            j = (r = (u = (q += 4) + 1) + 1) + 1;
            }

         ++ x;
         }

      x = 0;
      p += w;

      if (++ s === _Mg)
         {
         s = 0;
         v += l;
         }

      ++ y;
      }

   if (_Scrl2 === _EOF)
      {
      _SETVALUE(_SCL_H,
         _WIDTH, i,
         _LEFT, 17 + g);
      _SETVALUE(_SCL_V,
         _HEIGHT, h,
         _TOP, _O_sclv + e);
      }
   else
      {
      _SETVALUE(_SCL_H,
         _WIDTH, i);
      _SETVALUE(_SCL_V,
         _HEIGHT, h);
      }

   _SETDATA(_CDT);
   };

var _SPLIT = function (Cmp_, Qc_)
   {
   _Mode = 0;
   _Hplt = [];
   _Htrs = [];
   _Fnam = [];
   _Fx = [];
   _Fy = [];
   _Fdat = [];
   _Fpng = [];
   _Jpg = Qc_ !== 0;
   _Qc = _Jpg ? Qc_ : _Qc;
   _Sp0 = _Sp && ! _Jpg;
   _Inc = _Sp0 ? 1 : _Sa ? 4 : 3;
   _Dt_w = 4 * _W;
   _Bc_r = _Bc;
   _Bc_g = _Bc >>> 8;
   _Bc_b = _Bc >>> 16;
   _Bc_a = _Sa ? _Bc >>> 24 : 0xFF;
   _Bc_a0 = _Bc_a === 0x00;
   _Sbc = (_Bc_r | _Bc_g << 8 | _Bc_b << 16 | _Bc_a << 24) >>> 0;
   _Sr1 = 1 + _Sr;
   _Sb1 = 1 + _Sb;
   _Rcnt = 0;

   if (_Rl[_LENGTH] === 0)
      {
      _Nrl = true;
      _Rl[_Rcnt] = [_Sl, _St, _St, _Sl, _Sb, _Sr,
         _ADDSTR(new _DATE()[_GETTIME]() + _EMPTY, _PNGSTR)];
      }
   else
      {
      _Nrl = false;
      }

   _Cmp = Cmp_;
   };

var _SPLIT_PROC = function ()
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var h;
   var g;
   var e;
   var f;
   var s;
   var t;
   var o;
   var l;
   var j;
   var i;

   if (_Mode === 0)
      {
      if (_Sp0)
         {
         h = {};
         g = [];
         e = [];
         f = _EOF;
         }

      u = _Rl[_Rcnt];
      w = _Sl - u[_LS];
      x = _St - u[_TS];

      if (w <= 0)
         {
         w = 0;
         p = u[_RS] < _Sr;
         o = u[_LS] + 1;
         z = o + u[_RS];
         o += p ? _Sr : u[_RS];
         }
      else
         {
         p = true;
         z = 1 + u[_RS];
         o = _Sl + (u[_RS] < _Sr ? _Sr1 : z);
         z += u[_LS];
         }

      if (x <= 0)
         {
         x = 0;
         j = u[_BS] < _Sb;
         p = p || j;
         l = u[_TS] + 1;
         q = l + u[_BS];
         l += j ? _Sb : u[_BS];
         }
      else
         {
         p = true;
         q = 1 + u[_BS];
         l = _St + (u[_BS] < _Sb ? _Sb1 : q);
         q += u[_TS];
         }

      r = (u[_CX] - u[_LS] + _W * (u[_CY] - u[_TS])) * 4;

      if (_Jpg)
         {
         u = u[_NM];
         u = u[_SUBSTRING](0, u[_LENGTH] - 4);
         u += _JPGSTR;
         _Fnam[_Rcnt] = u;
         }
      else
         {
         _Fnam[_Rcnt] = u[_NM];
         }

      _Fx[_Rcnt] = o;
      _Fy[_Rcnt] = l;
      u = o * _Inc;
      y = (w + o * x) * _Inc;
      v = new _UINT8ARRAY(u * l);

      if (p)
         {
         if (_Sp0)
            {
            h[_Sbc] = 0;
            g[0] = _Sbc;

            if (_Sa && f === _EOF && _Bc_a0)
               {
               f = 0;
               }

            e[0] = o * l - z * q;
            }
         else
            {
            for (s = 0; s < v[_LENGTH]; s += _Inc)
               {
               v[s] = _Bc_r;
               v[s + 1] = _Bc_g;
               v[s + 2] = _Bc_b;

               if (_Sa)
                  {
                  v[s + 3] = _Bc_a;
                  }
               }
            }
         }

      for (s = r , t = y , o = 0; o < q; s += _Dt_w , t += u , ++ o)
         {
         for (l = s , j = t , i = 0; i < z; l += 4 , j += _Inc , ++ i)
            {
            if (_Sp0)
               {
               x = _Sa ? _Dt[l + 3] : 0xFF;
               w = (_Dt[l] | _Dt[l + 1] << 8 | _Dt[l + 2] << 16 | x << 24) >>> 0;

               if (! (w in h))
                  {
                  if (g[_LENGTH] < 256)
                     {
                     h[w] = g[_LENGTH];
                     g[h[w]] = w;
                     e[h[w]] = 1;

                     if (f === _EOF && x === 0x00)
                        {
                        f = h[w];
                        }
                     }
                  else
                     {
                     _Hplt = _NULL;
                     _Htrs = _NULL;
                     _Fnam = _NULL;
                     _Fx = _NULL;
                     _Fy = _NULL;
                     _Fdat = _NULL;
                     _Fpng = _NULL;

                     if (_Nrl)
                        {
                        _Rl[_LENGTH] = 0;
                        }

                     _Mode = _EOF;
                     _Pen = _P_FILE;
                     _SETVALUE(_SAVESTATUS,
                        _VISIBILITY, _HIDDEN);
                     _SETVALUE(_SAVEAS,
                        _VISIBILITY, _HIDDEN);
                     _SETVALUE(_SAVEBOX,
                        _DISPLAY, _NONE);
                     _SETVALUE(_POPUPCOV,
                        _VISIBILITY, _HIDDEN);

                     return (false);
                     }
                  }
               else
                  {
                  ++ e[h[w]];
                  }
               }
            else
               {
               v[j] = _Dt[l];
               v[j + 1] = _Dt[l + 1];
               v[j + 2] = _Dt[l + 2];

               if (_Sa)
                  {
                  v[j + 3] = _Dt[l + 3];
                  }
               }
            }
         }

      if (_Sp0)
         {
         if (f !== _EOF)
            {
            if (f !== 0)
               {
               h[g[f]] = 0;
               h[g[0]] = f;
               w = g[0];
               g[0] = g[f];
               g[f] = w;
               w = e[0];
               e[0] = e[f];
               e[f] = w;
               }

            _SORT(true, e, g, h);
            }
         else
            {
            _SORT(false, e, g, h);
            }

         w = new _UINT8ARRAY(g[_LENGTH] * 3);
         _Hplt[_Rcnt] = w;

         for (s = 0 , t = 0; t < g[_LENGTH]; s += 3 , ++ t)
            {
            w[s] = g[t];
            w[s + 1] = g[t] >>> 8;
            w[s + 2] = g[t] >>> 16;
            }

         f = _EOF;

         for (s = 0; s < g[_LENGTH]; ++ s)
            {
            if (g[s] >>> 24 !== 0xFF)
               {
               f = s;
               }
            }

         ++ f;

         if (f > 0)
            {
            x = new _UINT8ARRAY(f);
            _Htrs[_Rcnt] = x;

            for (s = 0; s < f; ++ s)
               {
               x[s] = g[s] >>> 24;
               }
            }
         else
            {
            _Htrs[_Rcnt] = _NULL;
            }

         if (p)
            {
            for (s = 0; s < v[_LENGTH]; ++ s)
               {
               v[s] = h[_Sbc];
               }
            }

         for (s = r , t = y , o = 0; o < q; s += _Dt_w , t += u , ++ o)
            {
            for (l = s , j = t , i = 0; i < z; l += 4 , ++ j , ++ i)
               {
               v[j] = h[(_Dt[l] | _Dt[l + 1] << 8 | _Dt[l + 2] << 16 | (_Sa ? _Dt[l + 3] : 0xFF) << 24) >>> 0];
               }
            }
         }

      _Fdat[_Rcnt] = v;
      ++ _Rcnt;

      if (_Rcnt === _Rl[_LENGTH])
         {
         ++ _Mode;
         _Rcnt = 0;
         }
      }
   else if (_Mode === 1)
      {
      if (_Nrl || _Rl[_LENGTH] === 1)
         {
         if (_Sp0)
            {
            if (_Htrs[_Rcnt] !== _NULL)
               {
               _SETFILE(_SAVEAS,
                  _Fnam[_Rcnt],
                  _FORMAT(_PNG, _Cmp,
                  _Fx[_Rcnt], _Fy[_Rcnt],
                  _Hplt[_Rcnt], _Htrs[_Rcnt],
                  _Fdat[_Rcnt]).data());
               }
            else
               {
               _SETFILE(_SAVEAS,
                  _Fnam[_Rcnt],
                  _FORMAT(_PNG, _Cmp,
                  _Fx[_Rcnt], _Fy[_Rcnt],
                  _Hplt[_Rcnt],
                  _Fdat[_Rcnt]).data());
               }
            }
         else if (_Jpg)
            {
            _SETFILE(_SAVEAS,
               _Fnam[_Rcnt],
               _FORMAT(_JPG, _Qc,
               _Fx[_Rcnt], _Fy[_Rcnt],
               _Fdat[_Rcnt]).data());
            }
         else
            {
            _SETFILE(_SAVEAS,
               _Fnam[_Rcnt],
               _FORMAT(_PNG, _Cmp,
               _Fx[_Rcnt], _Fy[_Rcnt],
               _Fdat[_Rcnt]).data());
            }

         _Hplt = _NULL;
         _Htrs = _NULL;
         _Fdat = _NULL;
         _Fnam = _NULL;
         _Fx = _NULL;
         _Fy = _NULL;
         _Fpng = _NULL;

         if (_Nrl)
            {
            _Rl[_LENGTH] = 0;
            }

         _Mode = _EOF;
         _Pen = _P_SAVE;
         _SETVALUE(_SAVESTATUS,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_SAVEAS,
            _VISIBILITY, _NULL);

         return (false);
         }
      else
         {
         if (_Sp0)
            {
            if (_Htrs[_Rcnt] !== _NULL)
               {
               _Fpng[_Rcnt] = _FORMAT(_PNG, _Cmp,
                  _Fx[_Rcnt], _Fy[_Rcnt],
                  _Hplt[_Rcnt], _Htrs[_Rcnt],
                  _Fdat[_Rcnt]).data();
               _Htrs[_Rcnt] = _NULL;
               }
            else
               {
               _Fpng[_Rcnt] = _FORMAT(_PNG, _Cmp,
                  _Fx[_Rcnt], _Fy[_Rcnt],
                  _Hplt[_Rcnt],
                  _Fdat[_Rcnt]).data();
               }

            _Hplt[_Rcnt] = _NULL;
            _Fdat[_Rcnt] = _NULL;
            }
         else if (_Jpg)
            {
            _Fpng[_Rcnt] = _FORMAT(_JPG, _Qc,
               _Fx[_Rcnt], _Fy[_Rcnt],
               _Fdat[_Rcnt]).data();
            _Fdat[_Rcnt] = _NULL;
            }
         else
            {
            _Fpng[_Rcnt] = _FORMAT(_PNG, _Cmp,
               _Fx[_Rcnt], _Fy[_Rcnt],
               _Fdat[_Rcnt]).data();
            _Fdat[_Rcnt] = _NULL;
            }

         ++ _Rcnt;

         if (_Rcnt === _Rl[_LENGTH])
            {
            ++ _Mode;
            _Hplt = _NULL;
            _Htrs = _NULL;
            _Fx = _NULL;
            _Fy = _NULL;
            _Fdat = _NULL;

            return (false);
            }
         }
      }

   return (true);
   };

var _SPLIT_SYNC = function (Mime_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var e;
   var n;
   var m;
   var k;
   var d;
   var c;
   var b;
   var a;
   var uu;
   var uv;
   var uw;
   var ux;
   var uy;
   var uz;
   var ur;
   var uq;
   var up;
   var uo;
   var ul;
   var uj;
   var ui;
   var s;
   var t;
   var f;

   if (_Rl[_LENGTH] > 0)
      {
      Mime_ = Mime_ === _CUR;
      u = true;
      v = [];
      w = [];
      x = [];
      y = [];
      z = [];
      r = [];
      q = [];
      p = [];

      for (s = 0; s < _Rl[_LENGTH]; ++ s)
         {
         o = _Rl[s];
         v[s] = o[_LS] + 1 + o[_RS];
         w[s] = o[_TS] + 1 + o[_BS];

         if (v[s] > 256 || w[s] > 256)
            {
            u = false;

            break;
            }

         l = o[_NM];

         if (l[_LENGTH] < 6)
            {
            u = false;

            break;
            }

         l = l[_SUBSTRING](l[_LENGTH] - 6, l[_LENGTH] - 4);
         j = l[_CHARAT](0);
         l = l[_CHARAT](1);
         ux = _Fa && j === _LC[1];
         l = j === _LC[0] || ux ?
               l === _LC[1] ?
                  (uu = 2 , 1)
               : l === _LC[4] ?
                  (uu = 16 , 4)
               : l === _LC[8] ?
                  (uu = 256 , 8)
               :
                  0
            : j === _LC[2] && l === _LC[4] ?
               24
            : j === _LC[3] && l === _LC[2] ?
               32
            :
               0;

         if (l === 0)
            {
            u = false;

            break;
            }

         p[s] = l;
         ul = ux && l === 1;
         l = l <= 8;
         j = _W * 4;
         uq = o[_CX] - o[_LS] + _W * (o[_CY] - o[_TS]);
         i = uq * 4;
         h = i + v[s] * 4;
         e = new _UINT8ARRAY(l ? v[s] * w[s] : v[s] * w[s] * (_Fa ? 4 : 3));

         if (l)
            {
            if (ux)
               {
               p[s] = new _UINT8ARRAY(e[_LENGTH]);
               uy = p[s];
               uz = _Lyr[_LS1];
               }

            n = new _UINT8ARRAY(uu * 3);
            m = new _UINT8ARRAY(uu);
            k = {};
            d = 0;
            b = 0;
            a = 0;

            if (ul)
               {
               up = _Lyr[0];
               uo = new _UINT8ARRAY(6);

               if (_Fp)
                  {
                  uo[0] = _Pt[_M3[up[0]]];
                  uo[1] = _Pt[_M3[up[0]] + 1];
                  uo[2] = _Pt[_M3[up[0]] + 2];
                  ++ d;
                  b += 3;
                  ui = (uo[0] | uo[1] << 8 | uo[2] << 16 | 0xFF000000) >>> 0;
                  k[ui] = 0;

                  if (_W > 1 || _H > 1)
                     {
                     uo[3] = _Pt[_M3[up[1]]];
                     uo[4] = _Pt[_M3[up[1]] + 1];
                     uo[5] = _Pt[_M3[up[1]] + 2];
                     uj = (uo[3] | uo[4] << 8 | uo[5] << 16 | 0xFF000000) >>> 0;

                     if (uj !== ui)
                        {
                        ++ d;
                        b += 3;
                        k[uj] = 1;
                        }
                     }
                  }
               else
                  {
                  uo[0] = up[0];
                  uo[1] = up[1];
                  uo[2] = up[2];
                  ++ d;
                  b += 3;
                  ui = (uo[0] | uo[1] << 8 | uo[2] << 16 | 0xFF000000) >>> 0;
                  k[ui] = 0;

                  if (_W > 1 || _H > 1)
                     {
                     uo[3] = up[4];
                     uo[4] = up[5];
                     uo[5] = up[6];
                     uj = (uo[3] | uo[4] << 8 | uo[5] << 16 | 0xFF000000) >>> 0;

                     if (uj !== ui)
                        {
                        ++ d;
                        b += 3;
                        k[uj] = 1;
                        }
                     }
                  }
               }

            for (t = 0; t < e[_LENGTH]; i += j , h += j , uq += _W)
               {
               for (f = i , ur = uq; f < h; f += 4 , ++ ur , ++ t)
                  {
                  uv = _Dt[f + 1];
                  uw = _Dt[f + 2];
                  g = f + 3;
                  c = (_Dt[f] | uv << 8 | uw << 16 | _Dt[g] << 24) >>> 0;

                  if (! (c in k))
                     {
                     if (ul || d === uu)
                        {
                        u = false;

                        break;
                        }

                     k[c] = d;
                     n[b] = _Dt[f];
                     n[b + 1] = uv;
                     n[b + 2] = uw;

                     if (_Dt[g] !== 0xFF)
                        {
                        for (; a < d; ++ a)
                           {
                           m[a] = 0xFF;
                           }

                        m[a] = _Dt[g];
                        ++ a;
                        }

                     ++ d;
                     b += 3;
                     }

                  e[t] = k[c];

                  if (ux)
                     {
                     uy[t] = _Fp ? _Ac[uz[ur]] : uz[g];
                     }
                  }

               if (! u)
                  {
                  break;
                  }
               }

            if (! u)
               {
               break;
               }

            z[s] = ul ? uo : n;

            if (a > 0)
               {
               r[s] = new _UINT8ARRAY(m[_BUFFER], m[_BYTEOFFSET], a);
               }
            }
         else
            {
            for (t = 0; t < e[_LENGTH]; i += j , h += j)
               {
               for (f = i; f < h; f += 4)
                  {
                  e[t] = _Dt[f];
                  e[t + 1] = _Dt[f + 1];
                  e[t + 2] = _Dt[f + 2];

                  if (_Fa)
                     {
                     e[t + 3] = _Dt[f + 3];
                     t += 4;
                     }
                  else
                     {
                     t += 3;
                     }
                  }
               }
            }

         if (Mime_)
            {
            x[s] = o[_LS];
            y[s] = o[_TS];
            }

         q[s] = e;
         }

      if (u)
         {
         _Pen = _P_SAVE;
         _Mode = _EOF;
         _SETVALUE(_SAVESTATUS,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_SAVEAS,
            _VISIBILITY, _NULL);

         if (Mime_)
            {
            _SETFILE(_SAVEAS,
               _ADDSTR(new _DATE()[_GETTIME]() + _EMPTY, _CURSTR),
               _FORMAT(_CUR, v, w, x, y, z, r, q, p).data());
            }
         else
            {
            _SETFILE(_SAVEAS,
               _ADDSTR(new _DATE()[_GETTIME]() + _EMPTY, _ICOSTR),
               _FORMAT(_ICO, v, w, z, r, q, p).data());
            }

         return;
         }
      }

   _Mode = _EOF;
   _Pen = _P_FILE;
   _SETVALUE(_SAVESTATUS,
      _VISIBILITY, _HIDDEN);
   _SETVALUE(_SAVEAS,
      _VISIBILITY, _HIDDEN);
   _SETVALUE(_SAVEBOX,
      _DISPLAY, _NONE);
   _SETVALUE(_POPUPCOV,
      _VISIBILITY, _HIDDEN);
   };

var _SPLIT_ICO = function ()
   {
   _SPLIT_SYNC(_ICO);

   return (false);
   };

var _SPLIT_CUR = function ()
   {
   _SPLIT_SYNC(_CUR);

   return (false);
   };

var _MAKE_ZIP = function ()
   {
   if (_Mode === _EOF)
      {
      return (true);
      }
   else if (_Mode === 0)
      {
      _EXTEND(_SPLIT_PROC);
      }
   else if (_Mode === 2)
      {
      _Zs = _FORMAT(_ZIP, false, _Fnam, _Fpng);
      _Fnam = _NULL;
      _Fpng = _NULL;
      ++ _Mode;
      }
   else if (_Mode === 3)
      {
      _Pen = _P_SAVE;
      _Mode = _EOF;
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _NULL);
      _SETFILE(_SAVEAS,
         _ADDSTR(new _DATE()[_GETTIME]() + _EMPTY, _ZIPSTR),
         _Zs.data());
      _Zs = _NULL;
      }
   else if (_Mode === 4)
      {
      _EXTEND(_MAKE);
      }
   else if (_Mode === 5)
      {
      _EXTEND(_MAKE2);
      }
   else if (_Mode === 6)
      {
      _EXTEND(_MAKE64);
      }
   else if (_Mode === 7)
      {
      if (_Store < 4)
         {
         _Zs = _FORMAT(_ZIP,
            _Zcmp,
            [_Store < 2 ? _Store === 0 ? _Filename : _REPLACE(_Filename, _EMPTY, false) : _E0],
            [_File],
            _Rcrc < 2 ?
                  [_Cs !== 0, _Store < 3 ? _Filetime : _ZEROTIME, _EMPTY, _CIPHER(_CLONE(_Pw), _Ks), _Rcrc !== 0]
               : _Rcrc === 2 ?
                  [_Cs !== 0, _Store < 3 ? _Filetime : _ZEROTIME, _CIPHER(_CLONE(_Pw), _Ks), _EMPTY, true]
               :
                  [_Cs !== 0, _Store < 3 ? _Filetime : _ZEROTIME, _EMPTY, _EMPTY, true]);
         _Mode = 8;
         }
      else
         {
         _File = _CREATE_LIST(_File, _Cs, _Pw, _Ks, _Rcrc);

         if (_File !== _NULL)
            {
            _Zs = _FORMAT(_ZIP, _Zcmp, _File[0], _File[1], _File[2]);
            _Mode = 8;
            }
         else
            {
            _Mode = 9;
            }
         }

      _File = _NULL;
      _Filetime = 0;
      }
   else if (_Mode === 8)
      {
      _Mode = _EOF;
      _Pen = _P_SAVE;
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _NULL);
      _SETFILE(_SAVEAS,
         _REPLACE(_Filename, _ZIPSTR, true),
         _Zs.data());
      _Filename = _EMPTY;
      _Zs = _NULL;
      }
   else if (_Mode === 9)
      {
      _Mode = _EOF;
      _Pen = _P_FILE;
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _DISPLAY, _NONE);
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      _Filename = _EMPTY;
      _Zs = _NULL;
      }
   else if (_Mode === 10)
      {
      _File =
         _Zidx < 0xFFFF ?
            _PARSE_ZIP(_File, _Zidx, _CIPHER(_CLONE(_Pw), _Ks))
         :
            _CREATE_LIST(_File, _Filename);
      _Filename = _EMPTY;
      _Mode = _File !== _NULL ? 11 : 9;
      }
   else if (_Mode === 11)
      {
      _Mode = _EOF;
      _Pen = _P_SAVE;
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _NULL);
      _SETFILE(_SAVEAS,
         _File[1] !== _EMPTY ? _File[1] : new _DATE()[_GETTIME]() + _EMPTY,
         _File[2]);
      _File = _NULL;
      }
   else if (_Mode === 12)
      {
      _EXTEND(_SPLIT_ICO);
      }
   else if (_Mode === 13)
      {
      _EXTEND(_SPLIT_CUR);
      }
   else if (_Mode === 14 || _Mode === 15)
      {
      _EXTEND(_MAKECFB);
      }

   return (false);
   };

var _BM = function (Png_)
   {
   var u;
   var v = Png_[0] * Png_[1] * 4;
   var w;
   var x;
   var s;
   var t;
   var r;
   var q;

   if (Png_[_LENGTH] === 5)
      {
      w = Png_[2];
      x = Png_[3];
      u = Png_[4];
      v = new _UINT8ARRAY(v);

      for (s = 0 , t = 0 , q = 0; q < Png_[1]; ++ q)
         {
         for (r = 0; r < Png_[0]; ++ s , t += 4 , ++ r)
            {
            v[t] = w[_M3[u[s]]];
            v[t + 1] = w[_M3[u[s]] + 1];
            v[t + 2] = w[_M3[u[s]] + 2];
            v[t + 3] = u[s] < x[_LENGTH] ? x[u[s]] : 0xFF;
            }
         }
      }
   else if (Png_[_LENGTH] === 4)
      {
      w = Png_[2];
      u = Png_[3];
      v = new _UINT8ARRAY(v);

      for (s = 0 , t = 0 , q = 0; q < Png_[1]; ++ q)
         {
         for (r = 0; r < Png_[0]; ++ s , t += 4 , ++ r)
            {
            v[t] = w[_M3[u[s]]];
            v[t + 1] = w[_M3[u[s]] + 1];
            v[t + 2] = w[_M3[u[s]] + 2];
            v[t + 3] = 0xFF;
            }
         }
      }
   else
      {
      u = Png_[2];

      if (u[_LENGTH] !== v)
         {
         v = new _UINT8ARRAY(v);

         for (s = 0 , t = 0 , q = 0; q < Png_[1]; ++ q)
            {
            for (r = 0; r < Png_[0]; s += 3 , t += 4 , ++ r)
               {
               v[t] = u[s];
               v[t + 1] = u[s + 1];
               v[t + 2] = u[s + 2];
               v[t + 3] = 0xFF;
               }
            }
         }
      else
         {
         v = u;
         }
      }

   return ([Png_[0], Png_[1], v]);
   };

var _RGB = function (H_, S_, L_)
   {
   var u;
   var v;

   u = _M778[S_][L_ < 120 ? L_ : 240 - L_];
   v = _M78[L_] - u;
   u += _M78[L_];

   return (
      H_ < 120 ?
         H_ < 40 ?
            u | v + _M7[H_][u - v] << 8 | v << 16
         :
            H_ < 80 ?
               v + _M7[80 - H_][u - v] | u << 8 | v << 16
            :
               v | u << 8 | v + _M7[H_ - 80][u - v] << 16
      :
         H_ < 160 ?
            v | v + _M7[160 - H_][u - v] << 8 | u << 16
         :
            H_ < 200 ?
               v + _M7[H_ - 160][u - v] | v << 8 | u << 16
            :
               u | v << 8 | v + _M7[240 - H_][u - v] << 16);
   };

var _HSL = function (R_, G_, B_)
   {
   var u = 0x00;
   var v = 0xFF;
   var w;
   var x;
   var y;
   var s;

   for (s = 0; s < 3; ++ s)
      {
      if (arguments[s] > u)
         {
         u = arguments[s];
         }

      if (arguments[s] < v)
         {
         v = arguments[s];
         w = s;
         }
      }

   if (u === v)
      {
      return (160 | _M87[u] << 16);
      }

   x = arguments[_PREV[w]] - arguments[_PREV2[w]];
   y = u - v;

   if (x < 0)
      {
      w = -_D7[-x][y]
         + (w === 0 ? 120 : w === 1 ? 200 : 40);
      }
   else
      {
      w = _D7[x][y]
         + (w === 0 ? 120 : w === 1 ? 200 : 40);
      }

   if (w >= 240)
      {
      w -= 240;
      }

   x = _M287[u + v];

   return (w | _D70[y][_M278[x < 120 ? x : 240 - x]] << 8 | x << 16);
   };

var _DWSAT = function (W_, H_)
   {
   var u = W_ + 2;
   var v = u * 4;
   var w;
   var s;
   var t;
   var r;

   for (s = 0 , t = 0; s < u; ++ s , t += 4)
      {
      _Csat[t] = 0x00;
      _Csat[t + 1] = 0x00;
      _Csat[t + 2] = 0x00;
      _Csat[t + 3] = 0xFF;
      }

   for (s = 0 , t = (H_ + 1) * v; s < u; ++ s , t += 4)
      {
      _Csat[t] = 0x00;
      _Csat[t + 1] = 0x00;
      _Csat[t + 2] = 0x00;
      _Csat[t + 3] = 0xFF;
      }

   for (s = 0 , t = v; s < H_; ++ s , t += v)
      {
      _Csat[t] = 0x00;
      _Csat[t + 1] = 0x00;
      _Csat[t + 2] = 0x00;
      _Csat[t + 3] = 0xFF;
      }

   for (s = 0 , t = 2 * v - 4; s < H_; ++ s , t += v)
      {
      _Csat[t] = 0x00;
      _Csat[t + 1] = 0x00;
      _Csat[t + 2] = 0x00;
      _Csat[t + 3] = 0xFF;
      }

   for (r = v + 4 , v = H_ > 1 ? H_ - 1 : 1 , s = 0; s < H_; ++ s)
      {
      w = _FLOOR((v - s) / v * 240);

      for (t = 0; t < W_; ++ t , r += 4)
         {
         u = _RGB(_FLOOR(t / W_ * 240), w, 120);
         _Csat[r] = u;
         _Csat[r + 1] = u >>> 8;
         _Csat[r + 2] = u >>> 16;
         _Csat[r + 3] = 0xFF;
         }

      r += 8;
      }

   _Sat_w = W_ + 1;
   _Sat_h = H_ + 1;
   _SETDATA(_HUE_SAT);
   };

var _DWLUM = function (Hue_, Sat_, W_, H_)
   {
   var u = W_ + 2;
   var v = u * 4;
   var w;
   var x;
   var s;
   var t;
   var r;

   for (s = 0 , t = 0; s < u; ++ s , t += 4)
      {
      _Clum[t] = 0x00;
      _Clum[t + 1] = 0x00;
      _Clum[t + 2] = 0x00;
      _Clum[t + 3] = 0xFF;
      }

   for (s = 0 , t = (H_ + 1) * v; s < u; ++ s , t += 4)
      {
      _Clum[t] = 0x00;
      _Clum[t + 1] = 0x00;
      _Clum[t + 2] = 0x00;
      _Clum[t + 3] = 0xFF;
      }

   for (s = 0 , t = v; s < H_; ++ s , t += v)
      {
      _Clum[t] = 0x00;
      _Clum[t + 1] = 0x00;
      _Clum[t + 2] = 0x00;
      _Clum[t + 3] = 0xFF;
      }

   for (s = 0 , t = 2 * v - 4; s < H_; ++ s , t += v)
      {
      _Clum[t] = 0x00;
      _Clum[t + 1] = 0x00;
      _Clum[t + 2] = 0x00;
      _Clum[t + 3] = 0xFF;
      }

   for (r = v + 4 , v = H_ > 1 ? H_ - 1 : 1 , s = 0; s < H_; ++ s)
      {
      u = _RGB(Hue_, Sat_, _FLOOR((v - s) / v * 240));
      w = u >>> 8;
      x = u >>> 16;

      for (t = 0; t < W_; ++ t , r += 4)
         {
         _Clum[r] = u;
         _Clum[r + 1] = w;
         _Clum[r + 2] = x;
         _Clum[r + 3] = 0xFF;
         }

      r += 8;
      }

   _Lum_w = W_ + 1;
   _Lum_h = H_ + 1;
   _SETDATA(_LUMGAUGE);
   };

var _HUE = function (X_, Y_)
   {
   if (0 <= X_ && 0 <= Y_
         && X_ <= _Sat_w && Y_ <= _Sat_h
         && X_ % _Sat_w !== 0 && Y_ % _Sat_h !== 0)
      {
      return (_FLOOR((X_ - 1) / (_Sat_w - 1) * 240));
      }

   return (_EOF);
   };

var _SAT = function (X_, Y_)
   {
   if (0 <= X_ && 0 <= Y_
         && X_ <= _Sat_w && Y_ <= _Sat_h
         && X_ % _Sat_w !== 0 && Y_ % _Sat_h !== 0)
      {
      return (_FLOOR(240 - (Y_ - 1) / (_Sat_h > 2 ? _Sat_h - 2 : 1) * 240));
      }

   return (_EOF);
   };

var _LUM = function (X_, Y_)
   {
   if (0 <= X_ && 0 <= Y_
         && X_ <= _Lum_w && Y_ <= _Lum_h
         && X_ % _Lum_w !== 0 && Y_ % _Lum_h !== 0)
      {
      return (_FLOOR(240 - (Y_ - 1) / (_Lum_h > 2 ? _Lum_h - 2 : 1) * 240));
      }

   return (_EOF);
   };

var _HUE_SAT_XY = function (H_, S_)
   {
   return ([_FLOOR(H_ / 239 * (_Sat_w - 2)), _FLOOR((240 - S_) / 240 * (_Sat_h - 2))]);
   };

var _LUM_XY = function (L_)
   {
   return (_FLOOR((240 - L_) / 240 * (_Lum_h - 2)));
   };

var _DWRULE = function (Ix_)
   {
   var u = _Rl[Ix_];
   var v = [u[_CX] - u[_LS], u[_CY] - u[_TS]];
   var w = [u[_CX] + u[_RS], u[_CY] + u[_BS]];

   _RECT(v, w, true);
   v[_X] = 0;
   v[_Y] = u[_CY];
   w[_X] = _Clp[_R];
   w[_Y] = u[_CY];
   _RECT(v, w, false);
   v[_X] = u[_CX];
   v[_Y] = 0;
   w[_X] = u[_CX];
   w[_Y] = _Clp[_B];
   _RECT(v, w, false);
   };

var _DWCP = function (R_, G_, B_, A_, Rn_, Gn_, Bn_, An_)
   {
   var u = _M8[_C[A_]];
   var v = _M8[_C[An_]];
   var w = _M8[A_];
   var x = w[R_];
   var y = w[G_];
   var z = w[B_];
   var r = _M8[An_];
   var s;
   var t;

   w = [];

   for (s = 0 , t = 0; s < 5; ++ s , t += 3)
      {
      if (s <= 1)
         {
         if (s === 0)
            {
            w[t] = x + u[0xFF];
            w[t + 1] = y + u[0xFF];
            w[t + 2] = z + u[0xFF];
            }
         else
            {
            w[t] = 0x00;
            w[t + 1] = 0x00;
            w[t + 2] = 0x00;
            }
         }
      else if (s === 2)
         {
         w[t] = x + u[0xC0];
         w[t + 1] = y + u[0xC0];
         w[t + 2] = z + u[0xC0];
         }
      else if (s === 3)
         {
         w[t] = r[Rn_] + v[0xFF];
         w[t + 1] = r[Gn_] + v[0xFF];
         w[t + 2] = r[Bn_] + v[0xFF];
         }
      else
         {
         w[t] = r[Rn_] + v[0xC0];
         w[t + 1] = r[Gn_] + v[0xC0];
         w[t + 2] = r[Bn_] + v[0xC0];
         }
      }

   for (s = 0 , t = 0; s < _CP[_LENGTH]; ++ s , t += 4)
      {
      _Ccp[t] = w[_M3[_CP[s]]];
      _Ccp[t + 1] = w[_M3[_CP[s]] + 1];
      _Ccp[t + 2] = w[_M3[_CP[s]] + 2];
      _Ccp[t + 3] = 0xFF;
      }

   _SETDATA(_COLORS);
   };

var _DWBC = function ()
   {
   var u = _Bc & 0xFF;
   var v = _Bc >>> 8 & 0xFF;
   var w = _Bc >>> 16 & 0xFF;
   var x = _Bc >>> 24;
   var y = _M8[x];
   var z = _M8[_C[x]];
   var s;
   var t;

   x = [];

   for (s = 0 , t = 0; s < 3; ++ s , t += 3)
      {
      if (s === 0)
         {
         x[t] = y[u] + z[0xFF];
         x[t + 1] = y[v] + z[0xFF];
         x[t + 2] = y[w] + z[0xFF];
         }
      else if (s === 1)
         {
         x[t] = 0x00;
         x[t + 1] = 0x00;
         x[t + 2] = 0x00;
         }
      else
         {
         x[t] = y[u] + z[0xC0];
         x[t + 1] = y[v] + z[0xC0];
         x[t + 2] = y[w] + z[0xC0];
         }
      }

   for (s = 0 , t = 0; s < _CS[_LENGTH]; ++ s , t += 4)
      {
      _Cbc[t] = x[_M3[_BC[s]]];
      _Cbc[t + 1] = x[_M3[_BC[s]] + 1];
      _Cbc[t + 2] = x[_M3[_BC[s]] + 2];
      _Cbc[t + 3] = 0xFF;
      }

   _SETDATA(_BGCOLOR);
   };

var _DWCS = function ()
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var s;
   var t;

   if (_Fp)
      {
      v = _M8[_C[_Ac[_Lc]]];
      w = _M8[_C[_Ac[_Rc]]];
      u = _M8[_Ac[_Lc]];
      x = u[_Pt[_M3[_Lc]]];
      y = u[_Pt[_M3[_Lc] + 1]];
      z = u[_Pt[_M3[_Lc] + 2]];
      u = _M8[_Ac[_Rc]];
      r = u[_Pt[_M3[_Rc]]];
      q = u[_Pt[_M3[_Rc] + 1]];
      p = u[_Pt[_M3[_Rc] + 2]];
      }
   else
      {
      v = _Lcol >>> 24;
      w = _Rcol >>> 24;
      u = _M8[v];
      x = u[_Lcol & 0xFF];
      y = u[_Lcol >>> 8 & 0xFF];
      z = u[_Lcol >>> 16 & 0xFF];
      u = _M8[w];
      r = u[_Rcol & 0xFF];
      q = u[_Rcol >>> 8 & 0xFF];
      p = u[_Rcol >>> 16 & 0xFF];
      v = _M8[_C[v]];
      w = _M8[_C[w]];
      }

   u = [];

   for (s = 0 , t = 0; s < 6; ++ s , t += 4)
      {
      if (s <= 2)
         {
         if (s === 0)
            {
            u[t] = 0x00;
            u[t + 1] = 0x00;
            u[t + 2] = 0x00;
            u[t + 3] = 0x00;
            }
         else if (s === 1)
            {
            u[t] = 0x00;
            u[t + 1] = 0x00;
            u[t + 2] = 0x00;
            u[t + 3] = 0xFF;
            }
         else
            {
            u[t] = x + v[0xC0];
            u[t + 1] = y + v[0xC0];
            u[t + 2] = z + v[0xC0];
            u[t + 3] = 0xFF;
            }
         }
      else if (s === 3)
         {
         u[t] = x + v[0xFF];
         u[t + 1] = y + v[0xFF];
         u[t + 2] = z + v[0xFF];
         u[t + 3] = 0xFF;
         }
      else if (s === 4)
         {
         u[t] = r + w[0xFF];
         u[t + 1] = q + w[0xFF];
         u[t + 2] = p + w[0xFF];
         u[t + 3] = 0xFF;
         }
      else
         {
         u[t] = r + w[0xC0];
         u[t + 1] = q + w[0xC0];
         u[t + 2] = p + w[0xC0];
         u[t + 3] = 0xFF;
         }
      }

   for (s = 0 , t = 0; s < _CS[_LENGTH]; ++ s , t += 4)
      {
      _Ccs[t] = u[_M4[_CS[s]]];
      _Ccs[t + 1] = u[_M4[_CS[s]] + 1];
      _Ccs[t + 2] = u[_M4[_CS[s]] + 2];
      _Ccs[t + 3] = u[_M4[_CS[s]] + 3];
      }

   _SETDATA(_BTN_COL);
   };

var _DWPT = function ()
   {
   var u;
   var v;
   var w = [];
   var x;
   var y;
   var z;
   var s;
   var t;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;

   for (s = 0; s < _PCL4; s += 4)
      {
      _Cpt[s] = 0x00;
      _Cpt[s + 1] = 0x00;
      _Cpt[s + 2] = 0x00;
      _Cpt[s + 3] = 0xFF;
      }

   for (s = _PCL4; s < _PCA; s += _PCL4)
      {
      _Cpt[s] = 0x00;
      _Cpt[s + 1] = 0x00;
      _Cpt[s + 2] = 0x00;
      _Cpt[s + 3] = 0xFF;
      }

   for (s = 0 , t = 0 , r = 16 , q = _PCL44; s < 256; r += 16 , q += _PCH)
      {
      for (l = q , j = q; s < r; ++ s , t += 3 , l += _CL4 , j = l)
         {
         u = _M8[_Ac[s]];
         v = _M8[_C[_Ac[s]]];
         x = u[_Pt[t]];
         y = u[_Pt[t + 1]];
         z = u[_Pt[t + 2]];

         for (p = 0 , o = 0; p < 3; ++ p , o += 3)
            {
            if (p === 0)
               {
               w[o] = x + v[0xFF];
               w[o + 1] = y + v[0xFF];
               w[o + 2] = z + v[0xFF];
               }
            else if (p === 1)
               {
               w[o] = 0x00;
               w[o + 1] = 0x00;
               w[o + 2] = 0x00;
               }
            else
               {
               w[o] = x + v[0xC0];
               w[o + 1] = y + v[0xC0];
               w[o + 2] = z + v[0xC0];
               }
            }

         for (p = 0 , o = _CL; p < _PT[_LENGTH]; j += _PCL4 , o += _CL)
            {
            for (i = j; p < o; ++ p , i += 4)
               {
               _Cpt[i] = w[_M3[_PT[p]]];
               _Cpt[i + 1] = w[_M3[_PT[p]] + 1];
               _Cpt[i + 2] = w[_M3[_PT[p]] + 2];
               _Cpt[i + 3] = 0xFF;
               }
            }
         }
      }

   _SETDATA(_PLTCVS);
   };

var _INDEX = function (X_, Y_)
   {
   var u;

   if (X_ < _PCL && Y_ < _PCL
         && X_ % _CL !== 0 && Y_ % _CL !== 0)
      {
      u = _FLOOR(X_ / _CL) + _FLOOR(Y_ / _CL) * 16;

      return (_M3[u] >= _Ps ? _D3[_Ps] : u);
      }

   return (_EOF);
   };

var _ADD = function (Addix_, R_, G_, B_, A_)
   {
   if (A_ !== 0xFF && Addix_ >= _As)
      {
      _As = Addix_ + 1;
      }

   _Ac[Addix_] = A_;

   if (_M3[Addix_] >= _Ps)
      {
      _Ps = _M3[Addix_] + 3;
      }

   _Pt[_M3[Addix_]] = R_;
   _Pt[_M3[Addix_] + 1] = G_;
   _Pt[_M3[Addix_] + 2] = B_;
   };

var _CHHEX = function (Str_)
   {
   var u;
   var v = false;
   var w;
   var s;
   var t;

   Str_ += _EMPTY;

   if (Str_ === _EMPTY)
      {
      return (_TO_HEX(0, 8));
      }
   else if (Str_[_LENGTH] > 8)
      {
      Str_ = Str_[_SUBSTRING](0, 8);
      }

   for (s = 0; s < Str_[_LENGTH]; ++ s)
      {
      u = Str_[_CHARAT](s);
      w = s + 1;

      for (t = 0; t < _HEX_U[_LENGTH]; ++ t)
         {
         if (u === _HEX_U[t])
            {
            Str_ = Str_[_SUBSTRING](0, s) + _HEX_L[t] + Str_[_SUBSTRING](w, Str_[_LENGTH]);
            v = true;
            break;
            }

         if (u === _HEX_L[t])
            {
            v = true;
            break;
            }
         }

      if (! v)
         {
         return (_TO_HEX(0, 8));
         }

      v = false;
      }

   return (_TO_HEX(_TO_DEC(Str_), 8));
   };

var _HEXSTR = function (Col_)
   {
   var u = _HEX;

   return (u += _TO_HEX(_HTON(Col_), 8));
   };

var _CHVAL = function (Str_, Max_, Min_)
   {
   var u = false;
   var v;
   var w;
   var s;
   var t;

   Str_ += _EMPTY;

   if (Str_ === _EMPTY)
      {
      return (Min_ > 0 ? Min_ : 0);
      }

   for (s = 0; s < Str_[_LENGTH]; ++ s)
      {
      v = Str_[_CHARAT](s);
      w = s + 1;

      for (t = +(s === 0 && Str_[_LENGTH] > 1); t < 10; ++ t)
         {
         if (v === _UC[t])
            {
            Str_ = Str_[_SUBSTRING](0, s) + _LC[t] + Str_[_SUBSTRING](w, Str_[_LENGTH]);
            u = true;
            break;
            }

         if (v === _LC[t])
            {
            u = true;
            break;
            }
         }

      if (! u)
         {
         return (Min_ > 0 ? Min_ : 0);
         }

      u = false;
      }

   Str_ = +Str_;

   if (Str_ < Min_)
      {
      Str_ = Min_;
      }

   if (Str_ > Max_)
      {
      Str_ = Max_;
      }

   return (Str_);
   };

var _ADDSTR = function (Str_, Ext_)
   {
   if (Str_[_LENGTH] > Ext_[_LENGTH]
         && Str_[_LASTINDEXOF](Ext_, Str_[_LENGTH] - 1) === Str_[_LENGTH] - Ext_[_LENGTH])
      {
      return (Str_);
      }

   return (Str_ += Ext_);
   };

var _CHSTR = function (Ix_, Str_, Ext_)
   {
   var u;
   var v;
   var w;
   var x = Ix_ === _EOF;
   var s;
   var t;

   Str_ += _EMPTY;

   if (Str_[_LENGTH] > 0 &&
         (Str_[_LENGTH] <= _NM_L
         || Str_[_LENGTH] <= _NM_L + Ext_[_LENGTH]
         && Str_[_LASTINDEXOF](Ext_, Str_[_LENGTH] - 1)
         === Str_[_LENGTH] - Ext_[_LENGTH]))
      {
      u = false;
      w = Str_[_LENGTH] > _NM_L ? _NM_L : Str_[_LENGTH];

      for (s = 0; s < w; ++ s)
         {
         v = Str_[_CHARAT](s);

         for (t = 0; t < _LC[_LENGTH]; ++ t)
            {
            if (v === _LC[t])
               {
               u = true;
               break;
               }
            }

         if (! u)
            {
            return (x ? _EMPTY : _Rl[Ix_][_NM]);
            }

         u = false;
         }

      Str_ = _ADDSTR(Str_, Ext_);

      for (s = 0; s < _Rl[_LENGTH]; ++ s)
         {
         if (s !== Ix_ && _Rl[s][_NM] === Str_)
            {
            return (x ? _EMPTY : _Rl[Ix_][_NM]);
            }
         }

      return (Str_);
      }

   return (x ? _EMPTY : _Rl[Ix_][_NM]);
   };

var _DEL_RULE = function (Ix_)
   {
   var u = _Rl[_LENGTH] - 1;

   for (; Ix_ < u; ++ Ix_)
      {
      _Rl[Ix_] = _Rl[Ix_ + 1];
      }

   -- _Rl[_LENGTH];

   if (_Rl[_LENGTH] === 0)
      {
      _St = 0;
      _Sl = 0;
      _Sb = _Clp[_B];
      _Sr = _Clp[_R];
      }
   };

var _FIX_FRM = function ()
   {
   var u;
   var v;
   var s;

   if (_Rl[_LENGTH] === 0)
      {
      _St = 0;
      _Sl = 0;
      _Sb = _Clp[_B];
      _Sr = _Clp[_R];
      }
   else
      {
      if (_Sl + _Sr >= _W)
         {
         if (_Sl >= _W)
            {
            _Sr = 0;
            _Sl = _Clp[_R];
            }
         else
            {
            _Sr = _Clp[_R] - _Sl;
            }
         }

      if (_St + _Sb >= _H)
         {
         if (_St >= _H)
            {
            _Sb = 0;
            _St = _Clp[_B];
            }
         else
            {
            _Sb = _Clp[_B] - _St;
            }
         }

      for (s = 0; s < _Rl[_LENGTH]; ++ s)
         {
         u = _Rl[s];
         v = true;

         if (u[_CX] + u[_RS] >= _W)
            {
            if (u[_CX] >= _W)
               {
               _DEL_RULE(s);
               -- s;
               v = false;
               }
            else
               {
               u[_RS] = _Clp[_R] - u[_CX];
               }
            }

         if (v && u[_CY] + u[_BS] >= _H)
            {
            if (u[_CY] >= _H)
               {
               _DEL_RULE(s);
               -- s;
               }
            else
               {
               u[_BS] = _Clp[_B] - u[_CY];
               }
            }
         }
      }
   };

var _FIX = function ()
   {
   var u;
   var s;

   if (_Rl[_LENGTH] > 0)
      {
      _St = 0;
      _Sl = 0;
      _Sb = 0;
      _Sr = 0;

      for (s = 0; s < _Rl[_LENGTH]; ++ s)
         {
         u = _Rl[s];

         if (_St < u[_TS])
            {
            _St = u[_TS];
            }

         if (_Sl < u[_LS])
            {
            _Sl = u[_LS];
            }

         if (_Sb < u[_BS])
            {
            _Sb = u[_BS];
            }

         if (_Sr < u[_RS])
            {
            _Sr = u[_RS];
            }
         }
      }
   };

var _PUSH = function (Ln_, Ur_, Lu_, All_, Pu_, Su_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var s;

   if (Ur_)
      {
      v = _Lpbuf;
      w = _Lyrbuf;
      x = _Psbuf;
      y = _Ptbuf;
      z = _Asbuf;
      r = _Acbuf;
      q = _Ubl;
      p = _Wbuf;
      o = _Hbuf;
      }
   else
      {
      v = _Lpbuf2;
      w = _Lyrbuf2;
      x = _Psbuf2;
      y = _Ptbuf2;
      z = _Asbuf2;
      r = _Acbuf2;
      q = _Rbl;
      p = _Wbuf2;
      o = _Hbuf2;
      }

   if (q === _BUF_L)
      {
      -- q;

      for (s = 0; s < q; ++ s)
         {
         u = s + 1;
         v[s] = v[u];
         w[s] = w[u];
         x[s] = x[u];
         y[s] = y[u];
         z[s] = z[u];
         r[s] = r[u];
         p[s] = p[u];
         o[s] = o[u];
         }
      }

   if (Lu_)
      {
      if (All_)
         {
         v[q] = _EOF;
         u = [];

         for (s = 0; s < _LSL; ++ s)
            {
            u[s] = _Lyr[s];
            }

         w[q] = u;
         }
      else
         {
         v[q] = Ln_;
         w[q] = _Lyr[Ln_];
         }
      }
   else
      {
      v[q] = _NULL;
      w[q] = _NULL;
      }

   if (Pu_)
      {
      x[q] = _Ps;
      y[q] = _Pt;
      z[q] = _As;
      r[q] = _Ac;
      }
   else
      {
      x[q] = _NULL;
      y[q] = _NULL;
      z[q] = _NULL;
      r[q] = _NULL;
      }

   if (Su_)
      {
      p[q] = _W;
      o[q] = _H;
      }
   else
      {
      p[q] = _NULL;
      o[q] = _NULL;
      }

   ++ q;

   if (Ur_)
      {
      _Ubl = q;
      }
   else
      {
      _Rbl = q;
      }
   };

var _TAKE = function (Ur_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var s;

   if (Ur_)
      {
      v = _Lpbuf;
      w = _Lyrbuf;
      x = _Psbuf;
      y = _Ptbuf;
      z = _Asbuf;
      r = _Acbuf;
      q = _Ubl;
      j = false;
      i = _Wbuf;
      h = _Hbuf;
      }
   else
      {
      v = _Lpbuf2;
      w = _Lyrbuf2;
      x = _Psbuf2;
      y = _Ptbuf2;
      z = _Asbuf2;
      r = _Acbuf2;
      q = _Rbl;
      j = true;
      i = _Wbuf2;
      h = _Hbuf2;
      }

   if (q > 0)
      {
      -- q;
      p = v[q] !== _NULL;
      o = v[q] === _EOF;
      l = x[q] !== _NULL;
      g = i[q] !== _NULL;
      _PUSH(v[q], j, p, o, l, g);

      if (p)
         {
         if (o)
            {
            for (s = 0; s < _LSL; ++ s)
               {
               u = w[q];
               _Lyr[s] = u[s];
               }
            }
         else
            {
            _Lyr[v[q]] = w[q];
            }

         v[q] = _NULL;
         w[q] = _NULL;
         }

      if (l)
         {
         _Ps = x[q];
         _Pt = y[q];
         _As = z[q];
         _Ac = r[q];

         if (_Fp)
            {
            if (_M3[_Lc] >= _Ps)
               {
               _Lc = 0;
               }

            if (_M3[_Rc] >= _Ps)
               {
               _Rc = 0;
               }
            }

         x[q] = _NULL;
         y[q] = _NULL;
         z[q] = _NULL;
         r[q] = _NULL;
         }

      if (g)
         {
         _W = i[q];
         _H = h[q];
         _Clp[_R] = _W - 1;
         _Clp[_B] = _H - 1;
         _Dt = new _UINT8ARRAY(_W * _H * 4);
         _FIX_FRM();
         i[q] = _NULL;
         h[q] = _NULL;
         }

      if (Ur_)
         {
         _Ubl = q;
         }
      else
         {
         _Rbl = q;
         }
      }
   };

var _CLEAR_R = function ()
   {
   if (_Rbl > 0)
      {
      _Rbl = 0;
      _Lpbuf2 = [];
      _Lyrbuf2 = [];
      _Psbuf2 = [];
      _Ptbuf2 = [];
      _Asbuf2 = [];
      _Acbuf2 = [];
      _Wbuf2 = [];
      _Hbuf2 = [];
      }
   };

var _FIND = function (R_, G_, B_, A_)
   {
   var s;
   var t;

   for (s = t = 0; s !== _As; ++ s , t += 2)
      {
      if (_Pt[t ++] === R_ && _Pt[t] === G_ && _Pt[t + 1] === B_ && _Ac[s] === A_)
         {
         return (s);
         }
      }

   if (A_ === 0xFF)
      {
      for (; t !== _Ps; ++ s , t += 2)
         {
         if (_Pt[t ++] === R_ && _Pt[t] === G_ && _Pt[t + 1] === B_)
            {
            return (s);
            }
         }
      }

   return (_EOF);
   };

var _RESIZE = function (W_, H_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var j;
   var i;
   var h;
   var g;
   var e;
   var f;
   var s;
   var t;
   var r;
   var q;
   var p;
   var o;
   var l;

   w = W_ > _W ? _W : W_;
   x = H_ > _H ? _H : H_;
   _CLEAR_R();
   _PUSH(_Lp, true, true, true, false, true);

   if (_Fp)
      {
      u = new _UINT8ARRAY(768);
      v = new _UINT8ARRAY(256);

      for (s = 0; s < 768; ++ s)
         {
         u[s] = _Pt[s];
         }

      for (s = 0; s < 256; ++ s)
         {
         v[s] = _Ac[s];
         }

      _Pt = u;
      _Ac = v;
      f = W_ * H_;
      j = f;

      for (s = 0; s < _LSL; ++ s)
         {
         u = _Lyr[s];
         v = new _UINT8ARRAY(j);

         for (t = 0 , q = 0 , o = 0; o < x; t += W_ , q += _W , ++ o)
            {
            for (r = t , p = q , l = 0; l < w; ++ r , ++ p , ++ l)
               {
               v[r] = u[p];
               }

            for (; l < W_; ++ r , ++ l)
               {
               v[r] = _Rc;
               }
            }

         for (; o < H_; t += W_ , ++ o)
            {
            for (r = t , l = 0; l < W_; ++ r , ++ l)
               {
               v[r] = _Rc;
               }
            }

         _Lyr[s] = v;
         }
      }
   else
      {
      i = 3 + +_Fa;
      y = _W * i;
      z = W_ * i;
      f = W_ * H_;
      j = z * H_;
      h = _Rcol >>> 8;
      g = _Rcol >>> 16;

      if (_Fa)
         {
         e = _Rcol >>> 24;

         for (s = 0; s < _LSL; ++ s)
            {
            u = _Lyr[s];
            v = new _UINT8ARRAY(j);

            for (t = 0 , q = 0 , o = 0; o < x; t += z , q += y , ++ o)
               {
               for (r = t , p = q , l = 0; l < w; r += i , p += i , ++ l)
                  {
                  v[r] = u[p];
                  v[r + 1] = u[p + 1];
                  v[r + 2] = u[p + 2];
                  v[r + 3] = u[p + 3];
                  }

               for (; l < W_; r += i , ++ l)
                  {
                  v[r] = _Rcol;
                  v[r + 1] = h;
                  v[r + 2] = g;
                  v[r + 3] = e;
                  }
               }

            for (; o < H_; t += z , ++ o)
               {
               for (r = t , l = 0; l < W_; r += i , ++ l)
                  {
                  v[r] = _Rcol;
                  v[r + 1] = h;
                  v[r + 2] = g;
                  v[r + 3] = e;
                  }
               }

            _Lyr[s] = v;
            }
         }
      else
         {
         for (s = 0; s < _LSL; ++ s)
            {
            u = _Lyr[s];
            v = new _UINT8ARRAY(j);

            for (t = 0 , q = 0 , o = 0; o < x; t += z , q += y , ++ o)
               {
               for (r = t , p = q , l = 0; l < w; r += i , p += i , ++ l)
                  {
                  v[r] = u[p];
                  v[r + 1] = u[p + 1];
                  v[r + 2] = u[p + 2];
                  }

               for (; l < W_; r += i , ++ l)
                  {
                  v[r] = _Rcol;
                  v[r + 1] = h;
                  v[r + 2] = g;
                  }
               }

            for (; o < H_; t += z , ++ o)
               {
               for (r = t , l = 0; l < W_; r += i , ++ l)
                  {
                  v[r] = _Rcol;
                  v[r + 1] = h;
                  v[r + 2] = g;
                  }
               }

            _Lyr[s] = v;
            }
         }
      }

   _W = W_;
   _H = H_;
   _Clp[_R] = W_ - 1;
   _Clp[_B] = H_ - 1;
   _Dt = new _UINT8ARRAY(f * 4);
   };

var _MERGE = function (Ap_, L1_, L2r1_, R2_, Bp_, Cp_)
   {
   var u;
   var v;
   var w;
   var s;
   var t;
   var r;

   if (L2r1_ < Ap_[_LENGTH])
      {
      if (R2_ > Ap_[_LENGTH])
         {
         R2_ = Ap_[_LENGTH];
         }

      u = [];
      v = [];

      for (s = L1_ , t = L2r1_ , r = 0; s < L2r1_ && t < R2_; ++ r)
         {
         if (Ap_[s] >= Ap_[t])
            {
            u[r] = Ap_[s];
            v[r] = Bp_[s];
            ++ s;
            }
         else
            {
            u[r] = Ap_[t];
            v[r] = Bp_[t];
            ++ t;
            }
         }

      if (s === L2r1_)
         {
         for (; t < R2_; ++ t , ++ r)
            {
            u[r] = Ap_[t];
            v[r] = Bp_[t];
            }
         }
      else
         {
         for (; s < L2r1_; ++ s , ++ r)
            {
            u[r] = Ap_[s];
            v[r] = Bp_[s];
            }
         }

      for (s = 0; s < r; ++ s)
         {
         w = L1_ + s;
         Ap_[w] = u[s];
         Bp_[w] = v[s];
         Cp_[Bp_[w]] = w;
         }
      }
   };

var _SORT = function (One_, Ap_, Bp_, Cp_)
   {
   var u;
   var v;
   var w = +One_;
   var s;
   var t;

   for (s = 1; s < Ap_[_LENGTH]; s += s)
      {
      for (t = w; t < Ap_[_LENGTH]; t = v)
         {
         u = t + s;
         v = u + s;
         _MERGE(Ap_, t, u, v, Bp_, Cp_);
         }
      }
   };

var _SHRINK = function ()
   {
   var u = [];
   var v = [];
   var w = [];
   var x;
   var y;
   var z = _EOF;
   var r = true;
   var s;
   var t;

   for (s = 0; s < _LSL; ++ s)
      {
      x = _Lyr[s];

      for (t = 0; t < x[_LENGTH]; ++ t)
         {
         if (! (x[t] in u))
            {
            u[x[t]] = v[_LENGTH];
            v[u[x[t]]] = x[t];
            w[u[x[t]]] = 1;

            if (r && _Ac[x[t]] === 0x00)
               {
               r = false;
               z = x[t];
               }
            }
         else
            {
            ++ w[u[x[t]]];
            }
         }
      }

   if (z !== _EOF)
      {
      if (u[z] !== 0)
         {
         y = u[z];
         u[z] = 0;
         u[v[0]] = y;
         x = v[0];
         v[0] = z;
         v[y] = x;
         x = w[0];
         w[0] = w[y];
         w[y] = x;
         }

      _SORT(true, w, v, u);
      }
   else
      {
      _SORT(false, w, v, u);
      }

   w = new _UINT8ARRAY(768);
   x = new _UINT8ARRAY(256);
   z = 0;

   for (s = 0 , t = 0; s < v[_LENGTH]; ++ s , t += 3)
      {
      w[t] = _Pt[_M3[v[s]]];
      w[t + 1] = _Pt[_M3[v[s]] + 1];
      w[t + 2] = _Pt[_M3[v[s]] + 2];
      x[s] = _Ac[v[s]];

      if (_Ac[v[s]] !== 0xFF)
         {
         z = s;
         }
      }

   _CLEAR_R();
   _PUSH(_Lp, true, true, true, true, false);
   _Ps = t;
   _Pt = w;
   _As = _Fa ? z + 1 : 0;
   _Ac = x;

   for (; t < 768; ++ t)
      {
      w[t] = 0xFF;
      }

   for (; s < 256; ++ s)
      {
      x[s] = 0xFF;
      }

   y = _Lyr[0][_LENGTH];

   for (s = 0; s < _LSL; ++ s)
      {
      x = _Lyr[s];
      z = new _UINT8ARRAY(y);

      for (t = 0; t < y; ++ t)
         {
         z[t] = u[x[t]];
         }

      _Lyr[s] = z;
      }
   };

var _REPLACE = function (Filename_, Ext_, Add_)
   {
   var u = Filename_[_LASTINDEXOF](_EXT, Filename_[_LENGTH] - 1);

   if (u === _EOF)
      {
      return (Add_ ? Filename_ + Ext_ : Filename_);
      }
   else
      {
      return (Filename_[_SUBSTRING](0, u)
         + _EXT2
         + Filename_[_SUBSTRING](u + 1, Filename_[_LENGTH])
         + (Add_ ? Ext_ : _EMPTY));
      }
   };

var _CREATE_LIST = function (Zipfile_, T, Pw_, Ks_, Rcrc_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var s;

   if (arguments[_LENGTH] === 2)
      {
      Zipfile_ = _PARSE_ZIP(Zipfile_, _EOF);

      if (Zipfile_ !== _NULL)
         {
         u = _EMPTY;
         v = Zipfile_[_LENGTH] - 1;

         for (s = 0; s < Zipfile_[_LENGTH]; ++ s)
            {
            w = Zipfile_[s];
            u += s;
            u += _SP;
            u += _QT;
            u += w[0];
            u += _QT;
            u += _SP;
            u += w[1];
            u += _SP;
            u += _TO_HEX(w[2], 8);
            u += _SP;
            u += _QT;
            w = new _DATE(w[3]);
            u += w[_GETFULLYEAR]();
            u += _SL;
            x = w[_GETMONTH]() + 1;
            u += x < 10 ? _E0 + x : x;
            u += _SL;
            x = w[_GETDATE]();
            u += x < 10 ? _E0 + x: x;
            u += _SP;
            u += w[_GETHOURS]();
            u += _CO;
            x = w[_GETMINUTES]();
            u += x < 10 ? _E0 + x : x;
            u += _CO;
            x = w[_GETSECONDS]();
            u += x < 10 ? _E0 + x : x;
            u += _QT;

            if (s < v)
               {
               u += _CRLF;
               }
            }

         return ([_EMPTY, _REPLACE(T, _TXTSTR, true), _UTF8(u, true, true), 0]);
         }

      return (_NULL);
      }
   else
      {
      u = _PARSE_ZIP(Zipfile_);

      if (u !== _NULL)
         {
         v = [[], [], []];
         w = v[0];
         x = v[1];
         y = v[2];
         r = Pw_ !== _NULL;

         if (r)
            {
            q = _CIPHER(_CLONE(Pw_), Ks_);
            }

         p = Rcrc_ < 2;
         o = Rcrc_ === 2;

         for (s = 0; s < u; ++ s)
            {
            z = r ? _PARSE_ZIP(Zipfile_, s, q) : _PARSE_ZIP(Zipfile_, s);

            if (z !== _NULL)
               {
               w[w[_LENGTH]] = z[0] + z[1];
               x[x[_LENGTH]] = z[2];
               y[y[_LENGTH]] = p ? [T !== 0, z[3], _EMPTY, q, Rcrc_ !== 0]
                  : o ? [T !== 0, z[3], q, _EMPTY, true]
                  : [T !== 0, z[3], _EMPTY, _EMPTY, true];
               }
            }

         if (w[_LENGTH] > 0)
            {
            return (v);
            }
         }

      return (_NULL);
      }
   };

var _KS = function (K_)
   {
   var u;

   u = new _UINT8ARRAY(32);
   _CRYPTO[_GETRANDOMVALUES](u);
   _AES256I(K_, u);
   };

var _CLONE = function (T_)
   {
   var u;
   var s;

   u = new _UINT8ARRAY(T_[_LENGTH]);

   for (s = 0; s < T_[_LENGTH]; ++ s)
      {
      u[s] = T_[s];
      }

   return (u);
   };

var _CIPHER = function (T_, K_)
   {
   var u;
   var v;
   var w;
   var s;
   var t;

   u = 16;
   v = new _UINT8ARRAY(16);
   w = new _UINT8ARRAY(16);

   for (s = 0; s < T_[_LENGTH]; ++ s)
      {
      if (u === 16)
         {
         u = 0;

         for (t = 0; t < 8 && (++ v[t] , v[t] === 0x00); ++ t)
            {
            }

         _AES256A(w, v, 0, K_);
         }

      T_[s] ^= w[u];
      ++ u;
      }

   return (_UTF16(T_));
   };

var _MAKE64 = function ()
   {
   _Pen = _P_SAVE;
   _Mode = _EOF;
   _SETVALUE(_SAVESTATUS,
      _VISIBILITY, _HIDDEN);
   _SETVALUE(_SAVEAS,
      _VISIBILITY, _NULL);
   _SETFILE(_SAVEAS,
      _REPLACE(_Filename, _TXTSTR, true),
      _BASE64(_File));
   _Filename = _EMPTY;
   _File = _NULL;

   return (false);
   };

var _MAKECFB = function ()
   {
   var u = _CIPHER(_CLONE(_Pw), _Ks);

   if (_Mode === 14)
      {
      u = _TO_MSCFB(_File, u);
      }
   else if (_Mode === 15)
      {
      u = _FROM_MSCFB(_File, u);
      }

   if (u !== _NULL)
      {
      _Pen = _P_SAVE;
      _Mode = _EOF;
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _NULL);
      _SETFILE(_SAVEAS,
         _Filename,
         u);
      }
   else
      {
      _Pen = _P_FILE;
      _Mode = _EOF;
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _DISPLAY, _NONE);
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      }

   _Filename = _EMPTY;
   _File = _NULL;
   _Filetime = 0;

   return (false);
   };

var _SAVE = function ()
   {
   _Mode = 4;
   };

var _SAVE2 = function ()
   {
   _Mode = 5;
   _Fdm = 0;
   _Fdp = 0;
   _Fds = new _VECTOR();
   _Fdl = 35;
   };

var _MAKE = function ()
   {
   var u = 44 + _Lyr[0][_LENGTH] * _LSL;
   var v = 0;
   var w;
   var x = _Rl[_LENGTH];
   var y;
   var s;
   var t;

   if (_Fp)
      {
      u += 1 + _Ps;

      if (_Fa)
         {
         u += 1 + _As;
         }
      }

   for (s = 0; s < x; )
      {
      u += (w = _Rl[s ++][_NM][_LENGTH]) >= _NM_L2 ? 24 + _NM_L2 : 25 + w;
      }

   u = new _UINT8ARRAY(u);
   u[v ++] = 0x46;
   u[v ++] = 0x4C;
   u[v ++] = 0x54;
   u[v ++] = 0x44;
   u[v ++] = 0x57;
   u[v ++] = 0x08;
   u[v ++] = _W;
   u[v ++] = _W >>> 8;
   u[v ++] = _W >>> 16;
   u[v ++] = _W >>> 24;
   u[v ++] = _H;
   u[v ++] = _H >>> 8;
   u[v ++] = _H >>> 16;
   u[v ++] = _H >>> 24;
   u[v ++] = _Bc;
   u[v ++] = _Bc >>> 8;
   u[v ++] = _Bc >>> 16;
   u[v ++] = _Bc >>> 24;
   u[v ++] = _St;
   u[v ++] = _St >>> 8;
   u[v ++] = _St >>> 16;
   u[v ++] = _St >>> 24;
   u[v ++] = _Sl;
   u[v ++] = _Sl >>> 8;
   u[v ++] = _Sl >>> 16;
   u[v ++] = _Sl >>> 24;
   u[v ++] = _Sb;
   u[v ++] = _Sb >>> 8;
   u[v ++] = _Sb >>> 16;
   u[v ++] = _Sb >>> 24;
   u[v ++] = _Sr;
   u[v ++] = _Sr >>> 8;
   u[v ++] = _Sr >>> 16;
   u[v ++] = _Sr >>> 24;
   w = 0;

   for (s = _LS1; 0 <= s; )
      {
      w <<= 1;
      w |= +_Lvs[s --];
      }

   u[v ++] = +_Fp | +_Fa << 1 | w << 2 | _Lp << 5;

   for (s = 0; s < _LSL; )
      {
      y = (w = _Lyr[s ++])[_LENGTH];

      for (t = 0; t < y; )
         {
         u[v ++] = w[t ++];
         }
      }

   if (_Fp)
      {
      u[v ++] = _D3[_Ps] - 1;

      for (s = 0; s < _Ps; )
         {
         u[v ++] = _Pt[s ++];
         }

      if (_Fa)
         {
         u[v ++] = _As - 1;

         for (s = 0; s < _As; )
            {
            u[v ++] = _Ac[s ++];
            }
         }
      }

   u[v ++] = x;
   u[v ++] = x >>> 8;
   u[v ++] = x >>> 16;
   u[v ++] = x >>> 24;

   for (s = 0; s < x; )
      {
      w = _Rl[s ++];

      for (t = _CX; t < _NM; )
         {
         y = w[t ++];
         u[v ++] = y;
         u[v ++] = y >>> 8;
         u[v ++] = y >>> 16;
         u[v ++] = y >>> 24;
         }

      w = w[_NM];
      y = w[_LENGTH];

      for (t = 0; t < y; )
         {
         u[v ++] = w[_CHARCODEAT](t ++);
         }

      if (y < _NM_L2)
         {
         u[v ++] = 0x00;
         }
      }

   u[v ++] = 0x98;
   w = _CRC32(u, 0, u[_LENGTH] - 4);
   u[v ++] = w;
   u[v ++] = w >>> 8;
   u[v ++] = w >>> 16;
   u[v] = w >>> 24;
   _Pen = _P_SAVE;
   _Mode = _EOF;
   _SETVALUE(_SAVESTATUS,
      _VISIBILITY, _HIDDEN);
   _SETVALUE(_SAVEAS,
      _VISIBILITY, _NULL);
   _SETFILE(_SAVEAS,
      _Fltdw_name === _EMPTY ?
         _ADDSTR(new _DATE()[_GETTIME]() + _EMPTY, _FLTDWSTR)
      :
         _Fltdw_name,
      u);

   return (false);
   };

var _MAKE2 = function ()
   {
   var u;
   var v;
   var s;
   var t;

   if (_Fdm === 0)
      {
      _Fds.ate(0x544C46, 24);
      _Fds.ate(0x085744, 24);
      _Fds.ate(_W, 32);
      _Fds.ate(_H, 32);
      _Fds.ate(_Bc, 32);
      _Fds.ate(_St, 32);
      _Fds.ate(_Sl, 32);
      _Fds.ate(_Sb, 32);
      _Fds.ate(_Sr, 32);
      u = 0;

      for (s = _LS1; 0 <= s; -- s)
         {
         u <<= 1;
         u |= +_Lvs[s];
         }

      _Fds.ate(+_Fp | +_Fa << 1 | u << 2 | _Lp << 5 | 0x80, 8);
      ++ _Fdm;
      }
   else if (_Fdm <= _LSL)
      {
      if (_Fdp === 0)
         {
         _Fdl = _Fds.length();
         _Fds.ate(0, 32);
         }

      u = _Lyr[_Fdm - 1];
      v = u[_LENGTH] - _Fdp;

      if (v > 1048576)
         {
         _DEFLATE(new _UINT8ARRAY(u[_BUFFER], u[_BYTEOFFSET] + _Fdp, 1048576), _Fds, true);
         _Fds.end();
         _Fdp += 1048576;
         }
      else
         {
         _DEFLATE(new _UINT8ARRAY(u[_BUFFER], u[_BYTEOFFSET] + _Fdp, v), _Fds, true);
         _Fds.end();
         _Fds.fill(_Fdl, 4, _Fds.length() - _Fdl - 4);
         _Fds.ate(_CRC32(u, 0, u[_LENGTH]), 32);
         _Fdp = 0;
         ++ _Fdm;
         }
      }
   else
      {
      if (_Fp)
         {
         _Fds.ate(_D3[_Ps] - 1, 8);

         for (s = 0; s < _Ps; ++ s)
            {
            _Fds.ate(_Pt[s], 8);
            }

         if (_Fa)
            {
            _Fds.ate(_As - 1, 8);

            for (s = 0; s < _As; ++ s)
               {
               _Fds.ate(_Ac[s], 8);
               }
            }
         }

      _Fds.ate(_Rl[_LENGTH], 32);

      for (s = 0; s < _Rl[_LENGTH]; ++ s)
         {
         u = _Rl[s];

         for (t = _CX; t < _NM; ++ t)
            {
            _Fds.ate(u[t], 32);
            }

         u = u[_NM];

         for (t = 0; t < u[_LENGTH]; ++ t)
            {
            _Fds.ate(u[_CHARCODEAT](t), 8);
            }

         if (u[_LENGTH] < _NM_L2)
            {
            _Fds.ate(0x00, 8);
            }
         }

      _Fds.ate(0x98, 8);
      _Fds.ate(_CRC32(_Fds, 0, _Fds.length()), 32);
      _Pen = _P_SAVE;
      _Mode = _EOF;
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _NULL);
      _SETFILE(_SAVEAS,
         _Fltdw_name === _EMPTY ?
            _ADDSTR(new _DATE()[_GETTIME]() + _EMPTY, _FLTDWSTR)
         :
            _Fltdw_name,
         _Fds.data());
      _Fds = _NULL;

      return (false);
      }

   return (true);
   };

var _LOAD = function (Filename_, Fltdw_)
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var s;
   var t;
   var g;
   var e;

   var W_;
   var H_;
   var Bc_;
   var St_;
   var Sl_;
   var Sb_;
   var Sr_;
   var Fp_;
   var Fa_;
   var Lvs_;
   var Lp_;
   var Lyr_;
   var Ps_;
   var Pt_;
   var As_;
   var Ac_;
   var Rl_;

   if ((u = Fltdw_[_LENGTH]) > 50
         && (Fltdw_[0] | Fltdw_[1] << 8 | Fltdw_[2] << 16) === 0x544C46
         && (Fltdw_[3] | Fltdw_[4] << 8 | Fltdw_[5] << 16) === 0x085744
         && Fltdw_[u - 5] === 0x98
         && (Fltdw_[v = u - 4] | Fltdw_[u - 3] << 8
         | Fltdw_[u - 2] << 16 | Fltdw_[u - 1] << 24) >>> 0
         === _CRC32(Fltdw_, 0, v))
      {
      if ((W_ = (Fltdw_[6] | Fltdw_[7] << 8 | Fltdw_[8] << 16 | Fltdw_[9] << 24) >>> 0) === 0
            || W_ > 2048)
         {
         return (false);
         }

      if ((H_ = (Fltdw_[10] | Fltdw_[11] << 8 | Fltdw_[12] << 16 | Fltdw_[13] << 24) >>> 0) === 0
            || H_ > 2048)
         {
         return (false);
         }

      Bc_ = (Fltdw_[14] | Fltdw_[15] << 8 | Fltdw_[16] << 16 | (v = Fltdw_[17]) << 24) >>> 0;

      if ((St_ = (Fltdw_[18] | Fltdw_[19] << 8 | Fltdw_[20] << 16 | Fltdw_[21] << 24) >>> 0) > 2047)
         {
         return (false);
         }

      if ((Sl_ = (Fltdw_[22] | Fltdw_[23] << 8 | Fltdw_[24] << 16 | Fltdw_[25] << 24) >>> 0) > 2047)
         {
         return (false);
         }

      if ((Sb_ = (Fltdw_[26] | Fltdw_[27] << 8 | Fltdw_[28] << 16 | Fltdw_[29] << 24) >>> 0) > 2047 - St_)
         {
         return (false);
         }

      if ((Sr_ = (Fltdw_[30] | Fltdw_[31] << 8 | Fltdw_[32] << 16 | Fltdw_[33] << 24) >>> 0) > 2047 - Sl_)
         {
         return (false);
         }

      Fp_ = ((w = Fltdw_[34]) & 1) === 1;

      if (! (Fa_ = (x = (w >>>= 1) & 1) === 1) && v !== 0xFF)
         {
         return (false);
         }

      Lvs_ = [];

      for (s = 0; s !== _LSL; )
         {
         Lvs_[s ++] = ((w >>>= 1) & 1) === 1;
         }

      if ((Lp_ = (w >>>= 1) & 0x3) === _LSL || ! Lvs_[Lp_])
         {
         return (false);
         }

      v = (Fltdw_ = new _VECTOR(
         new _UINT8ARRAY(Fltdw_[_BUFFER], Fltdw_[_BYTEOFFSET] + 35, Fltdw_[_BYTELENGTH] - 35))).read;
      p = Fltdw_.getptr;
      Lyr_ = [];

      if ((w >>>= 2) === 0)
         {
         x = Fp_ ? (w = W_ * H_) : (w = W_ * H_) * (3 + x);

         for (s = 0; s !== _LSL; )
            {
            Lyr_[s ++] = y = new _UINT8ARRAY(x);

            for (t = 0; t !== x; )
               {
               y[t ++] = v(8);
               }
            }
         }
      else
         {
         x = Fp_ ? (w = W_ * H_) : (w = W_ * H_) * (3 + x);
         y = Fltdw_.seek;

         for (s = 0; s !== _LSL; )
            {
            z = v(32) + p();
            r = new _VECTOR();

            for (; ; )
               {
               if (_INFLATE(Fltdw_, r))
                  {
                  y();

                  if ((q = p()) === z)
                     {
                     break;
                     }
                  else if (q > z)
                     {
                     return (false);
                     }
                  }
               else
                  {
                  return (false);
                  }
               }

            if ((Lyr_[s ++] = r = r.data())[_LENGTH] !== x || v(32) !== _CRC32(r, 0, x))
               {
               return (false);
               }
            }
         }

      if (Fp_)
         {
         Ps_ = v(8);

         for (s = 0; s !== _LSL; )
            {
            y = Lyr_[s ++];

            for (t = 0; t !== x; )
               {
               if (y[t ++] > Ps_)
                  {
                  return (false);
                  }
               }
            }

         Ps_ = (x = ++ Ps_) * 3;
         Pt_ = new _UINT8ARRAY(768);

         for (s = 0; s !== Ps_; )
            {
            Pt_[s ++] = v(8);
            }

         for (; s !== 768; )
            {
            Pt_[s ++] = 0xFF;
            }

         if (Fa_)
            {
            if ((As_ = v(8) + 1) > x)
               {
               return (false);
               }

            Ac_ = new _UINT8ARRAY(256);

            for (s = 0; s !== As_; )
               {
               Ac_[s ++] = v(8);
               }

            for (; s !== 256; )
               {
               Ac_[s ++] = 0xFF;
               }

            for (s = 3 , t = 1; s !== Ps_; )
               {
               x = (Pt_[g = s ++] | Pt_[s ++] << 8 | Pt_[s ++] << 16 | Ac_[e = t ++] << 24) >>> 0;

               for (; 0 !== e; )
                  {
                  if ((Ac_[-- e] << 24 | Pt_[-- g] << 16 | Pt_[-- g] << 8 | Pt_[-- g]) >>> 0 === x)
                     {
                     return (false);
                     }
                  }
               }
            }
         else
            {
            for (s = 3; s !== Ps_; )
               {
               x = Pt_[t = s ++] | Pt_[s ++] << 8 | Pt_[s ++] << 16;

               for (; 0 !== t; )
                  {
                  if ((Pt_[-- t] << 16 | Pt_[-- t] << 8 | Pt_[-- t]) === x)
                     {
                     return (false);
                     }
                  }
               }
            }
         }

      if ((x = v(32)) > 0xFFFF)
         {
         return (false);
         }

      i = W_ - 1;
      h = H_ - 1;

      if (x === 0 && (St_ !== 0 || Sl_ !== 0 || Sb_ !== h || Sr_ !== i))
         {
         return (false);
         }

      Rl_ = [];
      q = _LC[_LENGTH];

      for (s = 0; s !== x; )
         {
         if ((y = v(32)) > i)
            {
            return (false);
            }

         if ((z = v(32)) > h)
            {
            return (false);
            }

         if ((r = v(32)) > z)
            {
            return (false);
            }

         if ((o = v(32)) > y)
            {
            return (false);
            }

         if ((l = v(32)) > h - z)
            {
            return (false);
            }

         if ((j = v(32)) > i - y)
            {
            return (false);
            }

         y = [y, z, r, o, l, j, z = _EMPTY];

         for (t = 0; t !== _NM_L2; ++ t)
            {
            if ((r = v(8)) === 0x00)
               {
               if (t < 5)
                  {
                  return (false);
                  }

               break;
               }

            r = _FROMCHARCODE(r);

            for (g = 0; g !== q; ++ g)
               {
               if (r === _LC[g])
                  {
                  break;
                  }
               }

            if (g === q)
               {
               return (false);
               }

            z += r;
            }

         if (z[_LASTINDEXOF](_PNGSTR, t - 1) !== t - 4)
            {
            return (false);
            }

         for (g = 0; g !== s; )
            {
            if (z === Rl_[g ++][_NM])
               {
               return (false);
               }
            }

         (Rl_[s ++] = y)[_NM] = z;
         }

      if (p() !== u - 40)
         {
         return (false);
         }

      p = r = y = v = Fltdw_ = _NULL;
      _Fltdw_name = Filename_;
      _Clp = [0, 0, (_H = H_) - 1, (_W = W_) - 1];
      _Bc = Bc_;
      _St = St_;
      _Sl = Sl_;
      _Sb = Sb_;
      _Sr = Sr_;
      _Fp = Fp_;
      _Fa = Fa_;
      _Sp = _Fp;
      _Qc = 90;
      _Pw = _NULL;
      _Ks = _NULL;
      _Zcmp = false;
      _Store = 0;
      _Rcrc = 0;
      _Cs = 1;
      _INTF.sjis = true;
      _Zidx = 0;
      _NTH_ELEMENT(_DECRYPTOFILE)[_ACCEPT] = _ZIPSTR;
      _SETVAL(_CRYPTOPW, _EMPTY);
      _SETVALUE(_CRYPTOPW,
         _COLOR, _WHITE);
      _SETVALUE(_CRYPTOCOL,
         _INNERHTML, _SWSTR[0]);
      _SETVALUE(_CRYPTOZCMP,
         _INNERHTML, _ZCMPSTR[0]);
      _SETVALUE(_CRYPTOSTORE,
         _INNERHTML, _STORESTR[0]);
      _SETVALUE(_CRYPTORCRC,
         _INNERHTML, _RCRCSTR[0]);
      _SETVALUE(_CRYPTOCS,
         _INNERHTML, _CHARSETSTR[1]);
      _SETVAL(_CRYPTOZIDX, 0);
      _SETVALUE(_AESCRYPTO,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_DECRYPTO,
         _VISIBILITY, _HIDDEN);
      _Sa = _Fa;
      _Lvs = Lvs_;
      _Lp = Lp_;
      _Dt = new _UINT8ARRAY(w * 4);
      _Lyr = Lyr_;
      _Cpy = _NULL;
      _Ubl = 0;
      _Lpbuf = [];
      _Lyrbuf = [];
      _Psbuf = [];
      _Ptbuf = [];
      _Asbuf = [];
      _Acbuf = [];
      _Wbuf = [];
      _Hbuf = [];
      _Rbl = 0;
      _Lpbuf2 = [];
      _Lyrbuf2 = [];
      _Psbuf2 = [];
      _Ptbuf2 = [];
      _Asbuf2 = [];
      _Acbuf2 = [];
      _Wbuf2 = [];
      _Hbuf2 = [];
      _Bg = false;

      if (_Fp)
         {
         _Lc = (_Ps = Ps_) !== 3 ? 1 : 0;
         _Rc = 0;
         _Pt = Pt_;

         if (_Fa)
            {
            _As = As_;
            _Ac = Ac_;
            }
         else
            {
            s = _As = 0;
            _Ac = new _UINT8ARRAY(256);

            for (; s !== 256; )
               {
               _Ac[s ++] = 0xFF;
               }
            }
         }
      else
         {
         _Lc = _LCOL;
         _Rc = _RCOL;
         s = _Ps = 6;
         _Pt = new _UINT8ARRAY(768);
         _Lcol = 0xFF000000;

         if (_Fa)
            {
            _Rcol = 0x00000000;
            }
         else
            {
            _Rcol = 0xFFFFFFFF;
            _Pt[2] = _Pt[1] = _Pt[0] = 0xFF;
            }

         for (; s !== 768; )
            {
            _Pt[s ++] = 0xFF;
            }

         s = _As = _Fa ? 1 : 0;
         _Ac = new _UINT8ARRAY(256);

         for (; s !== 256; )
            {
            _Ac[s ++] = 0xFF;
            }
         }

      _Rl = Rl_;
      _Rn = 0;
      _DWBC();
      _DWCS();
      _DWPT();
      _BLEND();
      _Mg = 1;
      _CAST();
      _Scrl2 = _EOF;
      _SCALE([0, 0]);
      _Mode = _EOF;
      _Pen = _P_LINE;
      _Cu = _Plt = true;
      _Lm = _Lp;
      _SWLB();
      _Ctl = _New = true;
      _Curimg = _CURIMG;
      _Dwcur = _DWCUR;
      _Ptcur = _PTCUR;
      _Phcur = _PHCUR;
      _Cur = 0;
      _Auto = true;
      _Scrl = _EOF;
      _Line_o = _NULL;
      _Cdt_a = false;
      _SETVALUE(_FILEBG,
         _DISPLAY, _NONE);
      _SETVALUE(_CTYPELB1,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CTYPELB2,
         _VISIBILITY, _NULL);
      _SETVALUE(_CTYPELB22,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_PLT_OPT,
         _VISIBILITY, _Fp ? _NULL : _HIDDEN);
      _SETVALUE(_SAVEFLTDW,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEPNG,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEPNG2,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEJPG,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEFD,
         _VISIBILITY, _NULL);
      _SETVALUE(_BASE64TXT,
         _VISIBILITY, _NULL);
      _SETVALUE(_SETCRYPTO,
         _VISIBILITY, _NULL);
      _SETVALUE(_AESCRYPTO,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_DECRYPTO,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEICO,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVECUR,
         _VISIBILITY, _NULL);
      _SETVALUE(_FLTDWLOGO,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_COPY,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_PASTE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_DEL,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_ROTATE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_HZ,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_VT,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_BTNS_CMD,
         _DISPLAY, _NULL);
      _SETVALUE(_BTNS,
         _DISPLAY, _NULL);
      _SETVALUE(_BTN_FILE,
         _SRC, _FILEIMG[0],
         _VISIBILITY, _NULL);
      _SETVALUE(_CTYPE,
         _COLOR, _BLACK,
         _TEXT_DECORATION, _NONE);
      _SETVALUE(_LYRBG,
         _DISPLAY, _NONE);
      _SETVALUE(_LYRCMD,
         _DISPLAY, _NULL);
      _SETVALUE(_LYRRECTBG,
         _DISPLAY, _NONE);
      _SETVALUE(_CMD32,
         _SRC, _CURSCLIMG[1]);
      _SETVALUE(_CMD64,
         _SRC, _CURSCLIMG64[0]);
      _SETVALUE(_HUE_SAT_PTR,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SETVALUE(_HUE_SAT,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SETVALUE(_LUM_PTR,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SETVALUE(_LUMGAUGE,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SWCMD();

      return (true);
      }

   return (false);
   };

var _SWLB = function ()
   {
   var u;
   var v;
   var s;

   if (_Plt)
      {
      if (_Rn === _EOF)
         {
         _Rn = _Rnbuf;
         }

      _SETVALUE(_LYRBG,
         _DISPLAY, _NONE);
      _SETVALUE(_LYRCMD,
         _DISPLAY, _NULL);
      _SETVALUE(_LYRRECTBG,
         _DISPLAY, _NULL);
      _SETVALUE(_RULEFORM,
         _VISIBILITY, _HIDDEN);

      if (_Rd !== _Dt)
         {
         _Rd = _Dt;
         _Tmp = _Pen === _P_RECT && (_Plt || _Lm !== _LSL) ? _Tmp : _NULL;
         _Line_o = _Pen === _P_LINE && (_Plt || _Lm !== _LSL) ? _Line_o : _NULL;
         _SCALE([_Mtx[_BX], _Mtx[_BY]]);
         }
      }
   else
      {
      _SETVALUE(_LYRBG,
         _DISPLAY, _NULL);

      if (_Lm === _LSL)
         {
         _SETVALUE(_LYRCMD,
            _DISPLAY, _NONE);
         _SETVALUE(_LYRRECTBG,
            _DISPLAY, _NULL);
         _SETVALUE(_RULEFORM,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_LYRRECTBTN,
            _SRC, _LBIMG[_Lm][1]);
         _SETVALUE(_LYR1BTN,
            _SRC, _LBIMG[0][0]);
         _SETVALUE(_LYR2BTN,
            _SRC, _LBIMG[1][0]);
         _SETVALUE(_LYR3BTN,
            _SRC, _LBIMG[2][0]);
         v = _Rn !== _EOF;

         if (v && _Rl[_LENGTH] === 0)
            {
            _SETVALUE(_RULES,
               _VISIBILITY, _HIDDEN);
            _SETVALUE(_RULENONE,
               _VISIBILITY, _NULL);
            _SETVALUE(_RULENO,
               _INNERHTML, _EMPTY);

            if (_Rd !== _Dt)
               {
               _Rd = _Dt;
               _Tmp = _Pen === _P_RECT && (_Plt || _Lm !== _LSL) ? _Tmp : _NULL;
               _Line_o = _Pen === _P_LINE && (_Plt || _Lm !== _LSL) ? _Line_o : _NULL;
               _SCALE([_Mtx[_BX], _Mtx[_BY]]);
               }
            }
         else
            {
            _SETVALUE(_RULES,
               _VISIBILITY, _NULL);
            _SETVALUE(_RULENONE,
               _VISIBILITY, _HIDDEN);

            if (v)
               {
               if (_Rn >= _Rl[_LENGTH])
                  {
                  _Rn = _Rl[_LENGTH] - 1;
                  }

               u = (_Rn + 1) + _RULEOF;
               u += _Rl[_LENGTH];
               _SETVALUE(_RULENO,
                  _INNERHTML, u);
               u = _Rl[_Rn];
               _SETVAL(_RULENAME, u[_NM]);
               _SETVAL(_RULE_CX, u[_CX]);
               _SETVAL(_RULE_CY, u[_CY]);
               _SETVAL(_RULE_TS, u[_TS]);
               _SETVAL(_RULE_LS, u[_LS]);
               _SETVAL(_RULE_BS, u[_BS]);
               _SETVAL(_RULE_RS, u[_RS]);
               _ENABLE(_RULE_CX, true);
               _ENABLE(_RULE_CY, true);
               _ENABLE(_RULE_TS, true);
               _ENABLE(_RULE_LS, true);
               _ENABLE(_RULE_BS, true);
               _ENABLE(_RULE_RS, true);
               v = _Rl[_LENGTH] > 1;
               u = v && _Rn > 0;
               v = v && _Rn < _Rl[_LENGTH] - 1;
               _SETVALUE(_RULEPREV,
                  _COLOR, u ? _BLUE : _GRAY,
                  _TEXT_DECORATION, u ? _UNDERLINE : _NONE);
               _SETVALUE(_RULENEXT,
                  _COLOR, v ? _BLUE : _GRAY,
                  _TEXT_DECORATION, v ? _UNDERLINE : _NONE);
               _SETVALUE(_RULEDEL,
                  _COLOR, _BLUE,
                  _TEXT_DECORATION, _UNDERLINE);
               _DWRULE(_Rn);
               _SCALE([_Mtx[_BX], _Mtx[_BY]]);
               }
            else
               {
               _SETVALUE(_RULENO,
                  _INNERHTML, _EMPTY);
               _SETVAL(_RULE_CX, 0);
               _SETVAL(_RULE_CY, 0);
               _SETVAL(_RULE_TS, 0);
               _SETVAL(_RULE_LS, 0);
               _SETVAL(_RULE_BS, 0);
               _SETVAL(_RULE_RS, 0);
               _ENABLE(_RULE_CX, false);
               _ENABLE(_RULE_CY, false);
               _ENABLE(_RULE_TS, false);
               _ENABLE(_RULE_LS, false);
               _ENABLE(_RULE_BS, false);
               _ENABLE(_RULE_RS, false);
               _SETVALUE(_RULEPREV,
                  _COLOR, _GRAY,
                  _TEXT_DECORATION, _NONE);
               _SETVALUE(_RULENEXT,
                  _COLOR, _GRAY,
                  _TEXT_DECORATION, _NONE);
               _SETVALUE(_RULEDEL,
                  _COLOR, _GRAY,
                  _TEXT_DECORATION, _NONE);

               if (_Rd !== _Dt)
                  {
                  _Rd = _Dt;
                  _Tmp = _Pen === _P_RECT && (_Plt || _Lm !== _LSL) ? _Tmp : _NULL;
                  _Line_o = _Pen === _P_LINE && (_Plt || _Lm !== _LSL) ? _Line_o : _NULL;
                  _SCALE([_Mtx[_BX], _Mtx[_BY]]);
                  }
               }
            }
         }
      else
         {
         if (_Rn === _EOF)
            {
            _Rn = _Rnbuf;
            }

         _SETVALUE(_LYRCMD,
            _DISPLAY, _NULL);
         _SETVALUE(_LYRRECTBG,
            _DISPLAY, _NONE);
         _SETVALUE(_RULEFORM,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_LYRRECTBTN,
            _SRC, _LBIMG[_LSL][0]);

         for (s = 0; s < _LSL; ++ s)
            {
            _SETVALUE(_LYR1BTN + s,
               _SRC, _LBIMG[s][s === _Lm ? 1 : 0]);
            }

         if (_Lm === _Lp)
            {
            _SETVALUE(_LYREDIT,
               _VISIBILITY, _HIDDEN);
            _SETVALUE(_LYRHIDDEN,
               _VISIBILITY, _HIDDEN);
            _SETVALUE(_LYRVISIBLE,
               _VISIBILITY, _HIDDEN);
            _SETVALUE(_LYRVSLB,
               _VISIBILITY, _NULL);
            _SETVALUE(_LYRIMG,
               _VISIBILITY, _NULL);
            _SETVALUE(_LYRBM,
               _VISIBILITY, _NULL);
            _SETVALUE(_ICPASTE,
               _VISIBILITY, _Cpy !== _NULL ? _NULL : _HIDDEN);
            _SETVALUE(_SELECTALL,
               _VISIBILITY, _NULL);
            }
         else
            {
            _SETVALUE(_LYREDIT,
               _VISIBILITY, _Lvs[_Lm] ? _NULL : _HIDDEN);
            _SETVALUE(_LYRHIDDEN,
               _VISIBILITY, _Lvs[_Lm] ? _NULL : _HIDDEN);
            _SETVALUE(_LYRVISIBLE,
               _VISIBILITY, _Lvs[_Lm] ? _HIDDEN : _NULL);
            _SETVALUE(_LYRVSLB,
               _VISIBILITY, _HIDDEN);
            _SETVALUE(_LYRIMG,
               _VISIBILITY, _HIDDEN);
            _SETVALUE(_LYRBM,
               _VISIBILITY, _HIDDEN);
            _SETVALUE(_ICPASTE,
               _VISIBILITY, _HIDDEN);
            _SETVALUE(_SELECTALL,
               _VISIBILITY, _HIDDEN);
            }

         if (_Rd !== _Dt)
            {
            _Rd = _Dt;
            _Tmp = _Pen === _P_RECT && (_Plt || _Lm !== _LSL) ? _Tmp : _NULL;
            _Line_o = _Pen === _P_LINE && (_Plt || _Lm !== _LSL) ? _Line_o : _NULL;
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }
         }
      }
   };

var _ENABLE = function (Elemid_, Bool_)
   {
   _NTH_ELEMENT(Elemid_)[_DISABLED] = ! Bool_;
   };

var _STR = function (Val1_)
   {
   var u = _EMPTY;
   var s;

   for (s = 0; s < arguments[_LENGTH]; ++ s)
      {
      u += arguments[s];
      }

   return (u);
   };

var _SETVAL = function (Elemid_, T, X_)
   {
   var u;

   if (arguments[_LENGTH] === 2)
      {
      _NTH_ELEMENT(Elemid_)[_VALUE] = _STR(T);
      }
   else
      {
      _SETVALUE(Elemid_,
         _TOP, T + 3,
         _LEFT, X_);
      }
   };

var _GETVAL = function (Elemid_)
   {
   return (_STR(_NTH_ELEMENT(Elemid_)[_VALUE]));
   };

var _SETHDL = function (Elemid_, Func_)
   {
   var u = _NTH_ELEMENT(Elemid_);

   u[_ONFOCUS] = _FOCUS_FUNC;
   u[_ONBLUR] = Func_;
   };

var _SETPH = function (Elemid_, Ph_)
   {
   _NTH_ELEMENT(Elemid_)[_PLACEHOLDER] = _STR(Ph_);
   };

var _OPEN_COLEDIT = function (Al_, Cl_)
   {
   var u;
   var v;
   var w;
   var x;

   _Cu = true;
   _SETVALUE(_COLORCOV,
      _DISPLAY, _NULL);
   _SETVALUE(_COLORBG,
      _DISPLAY, _NULL);
   _C_al = Al_;
   _ENABLE(_A_COL, _C_al);

   if (_C_al)
      {
      _SETVALUE(_A_COLLB,
         _COLOR, _NULL);
      }
   else
      {
      _SETVALUE(_A_COLLB,
         _COLOR, _GRAY);
      }

   if (_Pen === _P_COLBC)
      {
      _SETVALUE(_COLADD,
         _VISIBILITY, _HIDDEN);
      }
   else
      {
      _SETVALUE(_COLADD,
         _VISIBILITY, _NULL);
      }

   _Cbuf = Cl_;
   _Cnew = _FROM_RGB(_Cbuf);
   };

var _CMDSTL = function (R_, G_, B_, A_)
   {
   if (_Pen !== _P_COLBC)
      {
      _Cidx = _FIND(R_, G_, B_, A_);

      if (_Cidx === _EOF)
         {
         if (_Pen === _P_COLCS && _Cbuf !== (R_ | G_ << 8 | B_ << 16 | A_ << 24) >>> 0
               || _Pen === _P_COLPT && _M3[_Addix] < _Ps)
            {
            _SETVALUE(_COLCHANGE,
               _INNERHTML, _COLCMD[0],
               _COLOR, _BLUE,
               _TEXT_DECORATION, _UNDERLINE);
            }
         else
            {
            _SETVALUE(_COLCHANGE,
               _INNERHTML, _COLCMD[0],
               _COLOR, _GRAY,
               _TEXT_DECORATION, _NONE);
            }

         if (_Ps < 768)
            {
            _SETVALUE(_COLADD,
               _COLOR, _BLUE,
               _TEXT_DECORATION, _UNDERLINE);
            }
         else
            {
            _SETVALUE(_COLADD,
               _COLOR, _GRAY,
               _TEXT_DECORATION, _NONE);
            }
         }
      else
         {
         _SETVALUE(_COLCHANGE,
            _INNERHTML, _COLCMD[1],
            _COLOR, _BLUE,
            _TEXT_DECORATION, _UNDERLINE);
         _SETVALUE(_COLADD,
            _COLOR, _GRAY,
            _TEXT_DECORATION, _NONE);
         }
      }
   else if ((R_ | G_ << 8 | B_ << 16 | A_ << 24) >>> 0 !== _Cbuf)
      {
      _SETVALUE(_COLCHANGE,
         _INNERHTML, _COLCMD[0],
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      }
   else
      {
      _SETVALUE(_COLCHANGE,
         _INNERHTML, _COLCMD[0],
         _COLOR, _GRAY,
         _TEXT_DECORATION, _NONE);
      }
   };

var _FROM_RGB = function (Col_)
   {
   var u = Col_ & 0xFF;
   var v = Col_ >>> 8 & 0xFF;
   var w = Col_ >>> 16 & 0xFF;
   var x = _C_al ? Col_ >>> 24 : (Col_ = (Col_ | 0xFF000000) >>> 0 , 0xFF);

   _C_r = u;
   _C_g = v;
   _C_b = w;
   _C_a = x;
   _C_hex = _TO_HEX(_HTON(Col_), 8);
   _SETVAL(_R_COL, u);
   _SETVAL(_G_COL, v);
   _SETVAL(_B_COL, w);
   _SETVAL(_A_COL, x);
   _SETVAL(_HEX_COL, _C_hex);
   _DWCP(_Cbuf & 0xFF, _Cbuf >>> 8 & 0xFF, _Cbuf >>> 16 & 0xFF, _Cbuf >>> 24,
      u, v, w, x);
   _CMDSTL(u, v, w, x);
   u = _HSL(u, v, w);
   v = u & 0xFF;
   w = u >>> 8 & 0xFF;
   x = u >>> 16;
   _C_h = v;
   _C_s = w;
   _C_l = x;
   _SETVAL(_H_COL, v);
   _SETVAL(_S_COL, w);
   _SETVAL(_L_COL, x);
   u = _HUE_SAT_XY(v, w);
   _SETVALUE(_HUE_SAT_PTR,
      _TOP, 15 + 15 + 10 + 1 + u[_Y] - 8,
      _LEFT, 20 + 1 + u[_X] - 8);
   _DWLUM(v, w, _LUM_L2, _SAT_L2);
   _SETVALUE(_LUM_PTR,
      _TOP, 15 + 15 + 10 + 1 + _LUM_XY(x) - 5);

   return (Col_);
   };

var _FROM_HSL = function (Col_)
   {
   var u = Col_ & 0xFF;
   var v = Col_ >>> 8 & 0xFF;
   var w = Col_ >>> 16;
   var x;
   var y = _CHVAL(_GETVAL(_A_COL), 255, _C_al ? 0 : 255);
   var z;

   _C_h = u;
   _C_s = v;
   _C_l = w;
   _SETVAL(_H_COL, u);
   _SETVAL(_S_COL, v);
   _SETVAL(_L_COL, w);
   x = _HUE_SAT_XY(u, v);
   _SETVALUE(_HUE_SAT_PTR,
      _TOP, 15 + 15 + 10 + 1 + x[_Y] - 8,
      _LEFT, 20 + 1 + x[_X] - 8);
   _DWLUM(u, v, _LUM_L2, _SAT_L2);
   _SETVALUE(_LUM_PTR,
      _TOP, 15 + 15 + 10 + 1 + _LUM_XY(w) - 5);
   x = _RGB(u, v, w);
   z = (x | y << 24) >>> 0;
   _C_hex = _TO_HEX(_HTON(z), 8);
   _SETVAL(_HEX_COL, _C_hex);
   u = x & 0xFF;
   v = x >>> 8 & 0xFF;
   w = x >>> 16;
   _C_r = u;
   _C_g = v;
   _C_b = w;
   _SETVAL(_R_COL, u);
   _SETVAL(_G_COL, v);
   _SETVAL(_B_COL, w);
   _DWCP(_Cbuf & 0xFF, _Cbuf >>> 8 & 0xFF, _Cbuf >>> 16 & 0xFF, _Cbuf >>> 24,
      u, v, w, y);
   _CMDSTL(u, v, w, y);

   return (z);
   };

var _FROM_XY = function (X_, Y_)
   {
   var u = (_Pcscr ? X_ - (_Clw - _NAV_L) : X_) - 20;
   var v = (_Pcscr ? Y_ - _BTNS_L - 1 : Y_ - (_Clh - _NAV_L)) - 15 - 15 - 10;
   var w = _HUE(u, v);
   var x = _SAT(u, v);
   var y;

   if (w !== _EOF && x !== _EOF)
      {
      _SETVALUE(_HUE_SAT_PTR,
         _TOP, 15 + 15 + 10 + v - 8,
         _LEFT, 20 + u - 8);
      _DWLUM(w, x, _LUM_L2, _SAT_L2);
      _C_h = w;
      _C_s = x;
      _SETVAL(_H_COL, w);
      _SETVAL(_S_COL, x);
      u = _RGB(w, x, _CHVAL(_GETVAL(_L_COL), 240, 0));
      v = u & 0xFF;
      w = u >>> 8 & 0xFF;
      x = u >>> 16;
      _C_r = v;
      _C_g = w;
      _C_b = x;
      _SETVAL(_R_COL, v);
      _SETVAL(_G_COL, w);
      _SETVAL(_B_COL, x);
      y = _CHVAL(_GETVAL(_A_COL), 255, _C_al ? 0 : 255);
      u = (u | y << 24) >>> 0;
      _C_hex = _TO_HEX(_HTON(u), 8);
      _SETVAL(_HEX_COL, _C_hex);
      _DWCP(_Cbuf & 0xFF, _Cbuf >>> 8 & 0xFF, _Cbuf >>> 16 & 0xFF, _Cbuf >>> 24,
         v, w, x, y);
      _CMDSTL(v, w, x, y);

      return (u);
      }

   return (_Cnew);
   };

var _FROM_Y = function (X_, Y_)
   {
   var u = (_Pcscr ? X_ - (_Clw - _NAV_L) : X_) - _HUE_L1;
   var v = (_Pcscr ? Y_ - _BTNS_L - 1 : Y_ - (_Clh - _NAV_L)) - 15 - 15 - 10;
   var w = _LUM(u, v);
   var x;
   var y;

   if (w !== _EOF)
      {
      _SETVALUE(_LUM_PTR,
         _TOP, 15 + 15 + 10 + v - 5);
      _C_l = w;
      _SETVAL(_L_COL, w);
      u = _RGB(_CHVAL(_GETVAL(_H_COL), 239, 0), _CHVAL(_GETVAL(_S_COL), 240, 0), w);
      v = u & 0xFF;
      w = u >>> 8 & 0xFF;
      x = u >>> 16;
      _C_r = v;
      _C_g = w;
      _C_b = x;
      _SETVAL(_R_COL, v);
      _SETVAL(_G_COL, w);
      _SETVAL(_B_COL, x);
      y = _CHVAL(_GETVAL(_A_COL), 255, _C_al ? 0 : 255);
      u = (u | y << 24) >>> 0;
      _C_hex = _TO_HEX(_HTON(u), 8);
      _SETVAL(_HEX_COL, _C_hex);
      _DWCP(_Cbuf & 0xFF, _Cbuf >>> 8 & 0xFF, _Cbuf >>> 16 & 0xFF, _Cbuf >>> 24,
         v, w, x, y);
      _CMDSTL(v, w, x, y);

      return (u);
      }

   return (_Cnew);
   };

var _FROM_A = function (A_)
   {
   var u = _CHVAL(_GETVAL(_R_COL), 255, 0);
   var v = _CHVAL(_GETVAL(_G_COL), 255, 0);
   var w = _CHVAL(_GETVAL(_B_COL), 255, 0);
   var x;

   if (! _C_al)
      {
      A_ = 255;
      }

   _C_a = A_;
   x = (u | v << 8 | w << 16 | A_ << 24) >>> 0;
   _C_hex = _TO_HEX(_HTON(x), 8);
   _SETVAL(_A_COL, A_);
   _SETVAL(_HEX_COL, _C_hex);
   _DWCP(_Cbuf & 0xFF, _Cbuf >>> 8 & 0xFF, _Cbuf >>> 16 & 0xFF, _Cbuf >>> 24,
      u, v, w, A_);
   _CMDSTL(u, v, w, A_);

   return (x);
   };

var _POS_H = function ()
   {
   var u;
   var v;

   _SETVALUE(_POPUPCOV,
      _WIDTH, _Clw < 480 ? 480 : _Clw,
      _HEIGHT, _Clh < 650 ? 650 : _Clh);
   _SETVALUE(_COLORFORM,
      _TOP, 15 + 15 + 10 + 222,
      _LEFT, 20);
   u = 132 + 30 * 2 + 13 + 30 * 5 + 60;
   _SETVALUE(_BTNS_CMD,
      _WIDTH, _Clw < u ? 0 : _Clw - u,
      _TOP, -1,
      _LEFT, u);
   _SETVALUE(_POS_XY,
      _TOP, 6,
      _LEFT, 132 + 30 * 2 + 13 + 30 * 5 + 90);
   _SETVALUE(_RECT_WH,
      _TOP, 6 + 17,
      _LEFT, 132 + 30 * 2 + 13 + 30 * 5 + 90);
   _SETVALUE(_RULES,
      _TOP, 20,
      _LEFT, 0);
   _SETVALUE(_RULENONE,
      _TOP, 24,
      _LEFT, 0);
   u = 1 + _BTNS_L;
   v = _Clh > u ? _Clh - u : 0;
   _SETVALUE(_SCL_T,
      _TOP, u,
      _RIGHT, _NAV_L);
   _SETVALUE(_SCL_V,
      _RIGHT, _NAV_L);
   _SETVALUE(_SCL_B,
      _RIGHT, _NAV_L,
      _BOTTOM, 0);
   _SETVALUE(_SCL_L,
      _BOTTOM, 0);
   _SETVALUE(_SCL_H,
      _BOTTOM, 0);
   _SETVALUE(_SCL_R,
      _RIGHT, _NAV_L + 15,
      _BOTTOM, 0);
   _SETVALUE(_PLTBG,
      _WIDTH, _NAV_L,
      _HEIGHT, v,
      _TOP, u,
      _RIGHT, 0,
      _BOTTOM, _NULL,
      _LEFT, _NULL);
   _SETVALUE(_MENUBG,
      _WIDTH, _Clw);
   _SETVALUE(_LYRBG,
      _WIDTH, _NAV_L,
      _HEIGHT, v,
      _TOP, u,
      _RIGHT, 0,
      _BOTTOM, _NULL,
      _LEFT, _NULL);
   _SETVALUE(_FILEBG,
      _WIDTH, _Clw,
      _HEIGHT, v);
   _SETVALUE(_COLORCOV,
      _WIDTH, _Clw,
      _HEIGHT, _Clh);
   _SETVALUE(_COLORBG,
      _WIDTH, _NAV_L,
      _HEIGHT, v,
      _TOP, u,
      _RIGHT, 0,
      _BOTTOM, _NULL,
      _LEFT, _NULL);
   _SETVALUE(_CDT,
      _TOP, _O_cdt);
   };

var _POS_V = function ()
   {
   var u;
   var v;

   _SETVALUE(_POPUPCOV,
      _WIDTH, _Clw < 480 ? 480 : _Clw,
      _HEIGHT, _Clh < 650 ? 650 : _Clh);
   _SETVALUE(_COLORFORM,
      _TOP, 15 + 15 + 10,
      _LEFT, 275);
   _SETVALUE(_BTNS_CMD,
      _WIDTH, _Clw,
      _TOP, _BTNS_L - 1,
      _LEFT, 0);
   _SETVALUE(_POS_XY,
      _TOP, 6 + _BTNS_L,
      _LEFT, 30);
   _SETVALUE(_RECT_WH,
      _TOP, 6 + 17 + _BTNS_L,
      _LEFT, 30);
   _SETVALUE(_RULES,
      _TOP, -32,
      _LEFT, 190);
   _SETVALUE(_RULENONE,
      _TOP, -28,
      _LEFT, 190);
   u = 1 + _NAV_L;
   v = 1 + _BTNS_L;
   _SETVALUE(_SCL_T,
      _TOP, 1 + _BTNS_L * 2,
      _RIGHT, -1);
   _SETVALUE(_SCL_V,
      _RIGHT, -1);
   _SETVALUE(_SCL_B,
      _RIGHT, -1,
      _BOTTOM, u);
   _SETVALUE(_SCL_L,
      _BOTTOM, u);
   _SETVALUE(_SCL_H,
      _BOTTOM, u);
   _SETVALUE(_SCL_R,
      _RIGHT, 14,
      _BOTTOM, u);
   _SETVALUE(_PLTBG,
      _WIDTH, _Clw,
      _HEIGHT, _NAV_L,
      _TOP, _NULL,
      _RIGHT, _NULL,
      _BOTTOM, 0,
      _LEFT, 0);
   _SETVALUE(_MENUBG,
      _WIDTH, _Clw);
   _SETVALUE(_LYRBG,
      _WIDTH, _Clw,
      _HEIGHT, _NAV_L,
      _TOP, _NULL,
      _RIGHT, _NULL,
      _BOTTOM, 0,
      _LEFT, 0);
   _SETVALUE(_FILEBG,
      _WIDTH, _Clw,
      _HEIGHT, _Clh > v ? _Clh - v : 0);
   _SETVALUE(_COLORCOV,
      _WIDTH, _Clw,
      _HEIGHT, _Clh);
   _SETVALUE(_COLORBG,
      _WIDTH, _Clw,
      _HEIGHT, _NAV_L,
      _TOP, _NULL,
      _RIGHT, _NULL,
      _BOTTOM, 0,
      _LEFT, 0);
   _SETVALUE(_CDT,
      _TOP, _O_cdt);
   };

var _EXTRCT = function (Lc_)
   {
   var u;
   var v;

   if (_Flk && _Pen >= _P_LINE && _Ctl && _Cdt_a)
      {
      _Cu = true;

      if (_Fp)
         {
         if (Lc_)
            {
            _Lc = _Lyr[_Lp][_Cdt_t[_X] + _Cdt_t[_Y] * _W];
            }
         else
            {
            _Rc = _Lyr[_Lp][_Cdt_t[_X] + _Cdt_t[_Y] * _W];
            }
         }
      else
         {
         u = (_Cdt_t[_X] + _Cdt_t[_Y] * _W) * (_Fa ? 4 : 3);
         v = _Lyr[_Lp];

         if (Lc_)
            {
            _Lcol = (v[u] | v[u + 1] << 8 | v[u + 2] << 16 | (_Fa ? v[u + 3] : 0xFF) << 24) >>> 0;
            }
         else
            {
            _Rcol = (v[u] | v[u + 1] << 8 | v[u + 2] << 16 | (_Fa ? v[u + 3] : 0xFF) << 24) >>> 0;
            }
         }

      _DWCS();

      if (_Pen === _P_RECT && _Rd !== _Dt && (_Plt || _Lm !== _LSL) && _Rect && ! _Rect_b)
         {
         _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);
         _BLEND();
         _RECT(_Rs, _Rf, true);
         _SCALE([_Mtx[_BX], _Mtx[_BY]]);
         }

      _SWCMD();
      }
   };

var _SWCMD = function (Cpy2_)
   {
   var u = false;

   if (_Plt)
      {
      _SETVALUE(_BTN_LYR,
         _SRC, _LBIMG[_Lp][0]);
      _SETVALUE(_BTN_PLT,
         _SRC, _PLTEIMG[1]);
      }
   else
      {
      _SETVALUE(_BTN_LYR,
         _SRC, _LBIMG[_Lm === _LSL ? (u = true , _Lm) : _Lp][1]);
      _SETVALUE(_BTN_PLT,
         _SRC, _PLTEIMG[0]);
      }

   if (_Pen === _P_LINE)
      {
      _SETVALUE(_BTN_LINE,
         _SRC, _LINEIMG[1]);
      _SETVALUE(_BTN_FILL,
         _SRC, _FILLIMG[0]);
      _SETVALUE(_BTN_RECT,
         _SRC, _RECTIMG[0 + (_Bg ? 2 : 0)]);
      }
   else if (_Pen === _P_FILL)
      {
      _SETVALUE(_BTN_LINE,
         _SRC, _LINEIMG[0]);
      _SETVALUE(_BTN_FILL,
         _SRC, _FILLIMG[1]);
      _SETVALUE(_BTN_RECT,
         _SRC, _RECTIMG[0 + (_Bg ? 2 : 0)]);
      }
   else if (_Pen === _P_RECT)
      {
      _SETVALUE(_BTN_LINE,
         _SRC, _LINEIMG[0]);
      _SETVALUE(_BTN_FILL,
         _SRC, _FILLIMG[0]);
      _SETVALUE(_BTN_RECT,
         _SRC, _RECTIMG[1 + (_Bg ? 2 : 0)]);
      }
   else if (_Pen === _P_EXTRCT)
      {
      _SETVALUE(_BTN_LINE,
         _SRC, _LINEIMG[0]);
      _SETVALUE(_BTN_FILL,
         _SRC, _FILLIMG[0]);
      _SETVALUE(_BTN_RECT,
         _SRC, _RECTIMG[0 + (_Bg ? 2 : 0)]);
      }

   if (! u && _Pen === _P_RECT && _Rd !== _Dt && _Rect)
      {
      _SETVALUE(_CMD_COPY,
         _VISIBILITY, _NULL);
      _SETVALUE(_CMD_PASTE,
         _VISIBILITY, _Cpy !== _NULL ? _NULL : _HIDDEN);
      _SETVALUE(_CMD_DEL,
         _VISIBILITY, _NULL);
      _SETVALUE(_CMD_ROTATE,
         _VISIBILITY, _NULL);
      _SETVALUE(_CMD_HZ,
         _VISIBILITY, _NULL);
      _SETVALUE(_CMD_VT,
         _VISIBILITY, _NULL);
      }
   else
      {
      _SETVALUE(_CMD_COPY,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_PASTE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_DEL,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_ROTATE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_HZ,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CMD_VT,
         _VISIBILITY, _HIDDEN);
      }

   if (_Ubl > 0)
      {
      _SETVALUE(_BTN_UNDO,
         _SRC, _UNDOIMG[1]);
      }
   else
      {
      _SETVALUE(_BTN_UNDO,
         _SRC, _UNDOIMG[0]);
      }

   if (_Rbl > 0)
      {
      _SETVALUE(_BTN_REDO,
         _SRC, _REDOIMG[1]);
      }
   else
      {
      _SETVALUE(_BTN_REDO,
         _SRC, _REDOIMG[0]);
      }

   _SETVALUE(_BUF_NUM,
      _INNERHTML, _Rbl > 0 ? _Rbl : _EMPTY);

   if (_Auto || _Rd === _Dt || (! u && ! _Rect))
      {
      _SETVALUE(_CMD_CUR,
         _SRC, _PTRCUR);
      }
   else
      {
      _SETVALUE(_CMD_CUR,
         _SRC, _CURIMGS[_Cur]);
      _SETVALUE(_CDT,
         _CURSOR, _Curimg[_Cur], _PNGCUROFFSET1, _PNGCUROFFSET1);
      }

   if (u || _Pen === _P_RECT)
      {
      if (_Rd !== _Dt)
         {
         if (_Ctl && _Auto)
            {
            _SETVALUE(_CDT,
               _CURSOR, _Curimg[_Cur], _PNGCUROFFSET1, _PNGCUROFFSET1);
            }
         }
      else
         {
         _SETVALUE(_CDT,
            _CURSOR, _Curimg[0], _PNGCUROFFSET1, _PNGCUROFFSET1);
         }
      }
   else if (_Pen === _P_LINE)
      {
      _SETVALUE(_CDT,
         _CURSOR, _Dwcur, _PNGCUROFFSET1, _PNGCUROFFSET1);
      }
   else if (_Pen === _P_FILL)
      {
      _SETVALUE(_CDT,
         _CURSOR, _Ptcur, _PNGCUROFFSET2, _PNGCUROFFSET3);
      }
   else if (_Pen === _P_EXTRCT)
      {
      _SETVALUE(_CDT,
         _CURSOR, _Phcur, _PNGCUROFFSET1, _PNGCUROFFSET1);
      }

   if (arguments[_LENGTH] === 1 && Cpy2_)
      {
      _SETVALUE(_CMD_COPY,
         _SRC, _CPY2);
      }
   else
      {
      _SETVALUE(_CMD_COPY,
         _SRC, _CPY);
      }
   };

var _RESIZE_FUNC = function (Width_, Height_)
   {
   _Clw = Width_;
   _Clh = Height_;
   _Pcscr = _Clw > 600 && _Clw > _Clh;

   if (_New)
      {
      _CAST();
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      }
   else
      {
      _O_cdt = 1 + (_Pcscr ? _BTNS_L : _BTNS_L * 2) + 3;
      }

   (_Pcscr ? _POS_H : _POS_V)();
   };

var _FOCUS_FUNC = function ()
   {
   _Flk = false;
   };

var _NEWFLTDW_FUNC = function ()
   {
   var u;
   var v;
   var w;
   var s;
   var t;

   if (_Flk)
      {
      if (_Pen === _P_NEW)
         {
         _Fltdw_name = _EMPTY;
         _W = 500;
         _H = 300;
         _Clp = [0, 0, _H - 1, _W - 1];
         _Bc = 0xFFFFFFFF;
         _St = 0;
         _Sl = 0;
         _Sb = _Clp[_B];
         _Sr = _Clp[_R];
         _Sp = _Fp;
         _Qc = 90;
         _Pw = _NULL;
         _Ks = _NULL;
         _Zcmp = false;
         _Store = 0;
         _Rcrc = 0;
         _Cs = 1;
         _INTF.sjis = true;
         _Zidx = 0;
         _NTH_ELEMENT(_DECRYPTOFILE)[_ACCEPT] = _ZIPSTR;
         _SETVAL(_CRYPTOPW, _EMPTY);
         _SETVALUE(_CRYPTOPW,
            _COLOR, _WHITE);
         _SETVALUE(_CRYPTOCOL,
            _INNERHTML, _SWSTR[0]);
         _SETVALUE(_CRYPTOZCMP,
            _INNERHTML, _ZCMPSTR[0]);
         _SETVALUE(_CRYPTOSTORE,
            _INNERHTML, _STORESTR[0]);
         _SETVALUE(_CRYPTORCRC,
            _INNERHTML, _RCRCSTR[0]);
         _SETVALUE(_CRYPTOCS,
            _INNERHTML, _CHARSETSTR[1]);
         _SETVAL(_CRYPTOZIDX, 0);
         _SETVALUE(_AESCRYPTO,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_DECRYPTO,
            _VISIBILITY, _HIDDEN);
         _Sa = _Fa;
         _Lvs = [];

         for (s = 0; s < _LSL; ++ s)
            {
            _Lvs[s] = true;
            }

         _Lp = _Fa ? _LS2 : _LS1;
         _Dt = new _UINT8ARRAY(_W * _H * 4);
         u = _Fp ? _W * _H : _Fa ? _W * _H * 4 : _W * _H * 3;
         _Lyr = [];

         if (_Fp || _Fa)
            {
            for (s = 0; s < _LSL; ++ s)
               {
               _Lyr[s] = new _UINT8ARRAY(u);
               }
            }
         else
            {
            for (s = 0; s < _LSL; ++ s)
               {
               v = new _UINT8ARRAY(u);

               for (t = 0; t < u; ++ t)
                  {
                  v[t] = 0xFF;
                  }

               _Lyr[s] = v;
               }
            }

         _Cpy = _NULL;
         _Ubl = 0;
         _Lpbuf = [];
         _Lyrbuf = [];
         _Psbuf = [];
         _Ptbuf = [];
         _Asbuf = [];
         _Acbuf = [];
         _Wbuf = [];
         _Hbuf = [];
         _Rbl = 0;
         _Lpbuf2 = [];
         _Lyrbuf2 = [];
         _Psbuf2 = [];
         _Ptbuf2 = [];
         _Asbuf2 = [];
         _Acbuf2 = [];
         _Wbuf2 = [];
         _Hbuf2 = [];
         _Bg = false;
         _Pt = new _UINT8ARRAY(768);
         _Ac = new _UINT8ARRAY(256);

         if (_Fp)
            {
            _Lc = 1;
            _Rc = 0;
            _Ps = 6;

            if (! _Fa)
               {
               _Pt[0] = 0xFF;
               _Pt[1] = 0xFF;
               _Pt[2] = 0xFF;
               }

            for (s = _Ps; s < 768; ++ s)
               {
               _Pt[s] = 0xFF;
               }

            _As = _Fa ? 1 : 0;

            for (s = _As; s < 256; ++ s)
               {
               _Ac[s] = 0xFF;
               }
            }
         else
            {
            _Lc = _LCOL;
            _Rc = _RCOL;
            _Lcol = 0xFF000000;
            _Rcol = _Fa ? 0x00000000 : 0xFFFFFFFF;
            _Ps = 6;
            _Pt[0] = _Rcol;
            _Pt[1] = _Rcol >>> 8;
            _Pt[2] = _Rcol >>> 16;

            for (s = _Ps; s < 768; ++ s)
               {
               _Pt[s] = 0xFF;
               }

            _As = _Fa ? 1 : 0;

            for (s = _As; s < 256; ++ s)
               {
               _Ac[s] = 0xFF;
               }
            }

         _Rl = [];
         _Rn = 0;
         _DWBC();
         _DWCS();
         _DWPT();
         _BLEND();
         _Mg = 1;
         _CAST();
         _Scrl2 = _EOF;
         _SCALE([0, 0]);
         _Mode = _EOF;
         _Pen = _P_LINE;
         _Plt = true;
         _Cu = true;
         _Lm = _Lp;
         _SWLB();
         _New = true;
         _Ctl = true;
         _Curimg = _CURIMG;
         _Dwcur = _DWCUR;
         _Ptcur = _PTCUR;
         _Phcur = _PHCUR;
         _Cur = 0;
         _Auto = true;
         _Scrl = _EOF;
         _Line_o = _NULL;
         _Cdt_a = false;
         _SETVALUE(_FILEBG,
            _DISPLAY, _NONE);
         _SETVALUE(_CTYPELB1,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_CTYPELB2,
            _VISIBILITY, _NULL);
         _SETVALUE(_CTYPELB22,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_PLT_OPT,
            _VISIBILITY, _Fp ? _NULL : _HIDDEN);
         _SETVALUE(_SAVEFLTDW,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVEPNG,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVEPNG2,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVEJPG,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVEFD,
            _VISIBILITY, _NULL);
         _SETVALUE(_BASE64TXT,
            _VISIBILITY, _NULL);
         _SETVALUE(_SETCRYPTO,
            _VISIBILITY, _NULL);
         _SETVALUE(_AESCRYPTO,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_DECRYPTO,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_SAVEICO,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVECUR,
            _VISIBILITY, _NULL);
         _SETVALUE(_FLTDWLOGO,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_CMD_COPY,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_CMD_PASTE,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_CMD_DEL,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_CMD_ROTATE,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_CMD_HZ,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_CMD_VT,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_BTNS_CMD,
            _DISPLAY, _NULL);
         _SETVALUE(_BTNS,
            _DISPLAY, _NULL);
         _SETVALUE(_BTN_FILE,
            _SRC, _FILEIMG[0],
            _VISIBILITY, _NULL);
         _SETVALUE(_CTYPE,
            _COLOR, _BLACK,
            _TEXT_DECORATION, _NONE);
         _SETVALUE(_LYRBG,
            _DISPLAY, _NONE);
         _SETVALUE(_LYRCMD,
            _DISPLAY, _NULL);
         _SETVALUE(_LYRRECTBG,
            _DISPLAY, _NONE);
         _SETVALUE(_CMD32,
            _SRC, _CURSCLIMG[1]);
         _SETVALUE(_CMD64,
            _SRC, _CURSCLIMG64[0]);
         _SETVALUE(_HUE_SAT_PTR,
            _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
         _SETVALUE(_HUE_SAT,
            _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
         _SETVALUE(_LUM_PTR,
            _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
         _SETVALUE(_LUMGAUGE,
            _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
         _SWCMD();
         }
      else if (_Pen === _P_FILE)
         {
         _Pen = _P_CONFIRM;
         _SETVALUE(_POPUPCOV,
            _VISIBILITY, _NULL);
         _SETVALUE(_NEWBOX,
            _VISIBILITY, _NULL);
         }
      }
   };

var _NEWMSG_N_FUNC = function ()
   {
   if (_Flk && _Pen === _P_CONFIRM)
      {
      _Pen = _P_FILE;
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_NEWBOX,
         _VISIBILITY, _HIDDEN);
      }
   };

var _NEWMSG_Y_FUNC = function ()
   {
   if (_Flk && _Pen === _P_CONFIRM)
      {
      _Pen = _P_NEW;
      _New = false;
      _Fp = false;
      _Fa = false;
      _Pw = _NULL;
      _Ks = _NULL;
      _Zcmp = false;
      _Store = 0;
      _Rcrc = 0;
      _Cs = 1;
      _INTF.sjis = true;
      _Zidx = 0;
      _NTH_ELEMENT(_DECRYPTOFILE)[_ACCEPT] = _ZIPSTR;
      _SETVAL(_CRYPTOPW, _EMPTY);
      _SETVALUE(_CRYPTOPW,
         _COLOR, _WHITE);
      _SETVALUE(_CRYPTOCOL,
         _INNERHTML, _SWSTR[0]);
      _SETVALUE(_CRYPTOZCMP,
         _INNERHTML, _ZCMPSTR[0]);
      _SETVALUE(_CRYPTOSTORE,
         _INNERHTML, _STORESTR[0]);
      _SETVALUE(_CRYPTORCRC,
         _INNERHTML, _RCRCSTR[0]);
      _SETVALUE(_CRYPTOCS,
         _INNERHTML, _CHARSETSTR[1]);
      _SETVAL(_CRYPTOZIDX, 0);
      _SETVALUE(_AESCRYPTO,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_DECRYPTO,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CTYPELB1,
         _VISIBILITY, _NULL);
      _SETVALUE(_CTYPELB2,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CTYPELB22,
         _VISIBILITY, _NULL);
      _SETVALUE(_PLT_OPT,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_A_ICOCTY,
         _SRC, _COLTYPEIMG[2]);
      _SETVALUE(_CTYPE,
         _INNERHTML, _COLTYPESTR[2],
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _SETVALUE(_SAVEFLTDW,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEPNG,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEPNG2,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEJPG,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEFD,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_BASE64TXT,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SETCRYPTO,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_AESCRYPTO,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_DECRYPTO,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEICO,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVECUR,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_BTN_FILE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_FILECMD,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_NEWBOX,
         _VISIBILITY, _HIDDEN);
      }
   };

var _BTN_FILE_FUNC = function ()
   {
   var u;

   if (_Flk)
      {
      if (_Pen >= _P_LINE && _Ctl)
         {
         if (_Pen === _P_RECT && _Rd !== _Dt && (_Plt || _Lm !== _LSL))
            {
            _Rd = _Dt;
            _Tmp = _NULL;
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }

         if (_Pen !== _P_EXTRCT)
            {
            _Penbuf = _Pen;
            }

         _Pen = _P_FILE;
         _Cu = true;
         _Pw = _NULL;
         _Ks = _NULL;
         _Zcmp = false;
         _Store = 0;
         _Rcrc = 0;
         _Cs = 1;
         _INTF.sjis = true;
         _Zidx = 0;
         _NTH_ELEMENT(_DECRYPTOFILE)[_ACCEPT] = _ZIPSTR;
         _SETVAL(_CRYPTOPW, _EMPTY);
         _SETVALUE(_CRYPTOPW,
            _COLOR, _WHITE);
         _SETVALUE(_CRYPTOCOL,
            _INNERHTML, _SWSTR[0]);
         _SETVALUE(_CRYPTOZCMP,
            _INNERHTML, _ZCMPSTR[0]);
         _SETVALUE(_CRYPTOSTORE,
            _INNERHTML, _STORESTR[0]);
         _SETVALUE(_CRYPTORCRC,
            _INNERHTML, _RCRCSTR[0]);
         _SETVALUE(_CRYPTOCS,
            _INNERHTML, _CHARSETSTR[1]);
         _SETVAL(_CRYPTOZIDX, 0);
         _SETVALUE(_AESCRYPTO,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_DECRYPTO,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_BTN_FILE,
            _SRC, _FILEIMG[1]);
         _SETVALUE(_FILEBG,
            _DISPLAY, _NULL);
         _SETVALUE(_FILECMD,
            _VISIBILITY, _NULL);
         _DWBC();
         _SETVALUE(_BGCOLORNUM,
            _INNERHTML, _HEXSTR(_Bc));
         _SETVALUE(_BTNS_CMD,
            _DISPLAY, _NONE);
         _SETVALUE(_BTNS,
            _DISPLAY, _NONE);
         _SETVALUE(_FLTDWLOGO,
            _VISIBILITY, _NULL);
         u = +! _Fp << 1 | _Fa;
         _SETVALUE(_A_ICOCTY,
            _SRC, _COLTYPEIMG[u]);
         _SETVALUE(_CTYPE,
            _INNERHTML, _COLTYPESTR[u]);
         u = +! _Sp << 1 | _Sa;
         _SETVALUE(_A_ICOPNG,
            _SRC, _COLTYPEIMG[u]);
         _SETVALUE(_PNGTYPE,
            _INNERHTML, _COLTYPESTR[u]);
         u = +! _Fp << 1 | +_Fa;
         _SETVALUE(_CTYPE,
            _INNERHTML, _COLTYPESTR[u]);
         _SETVALUE(_PLT_OPT,
            _COLOR, _BLUE,
            _TEXT_DECORATION, _UNDERLINE);
         _SETVALUE(_A_ICOCTY,
            _SRC, _COLTYPEIMG[u]);
         _SETVAL(_CVSSIZE_W, _W);
         _SETVAL(_CVSSIZE_H, _H);
         _SETVALUE(_CVSSIZE,
            _COLOR, _GRAY,
            _TEXT_DECORATION, _NONE);
         _SETVAL(_FRMSIZE_TS, _St);
         _SETVAL(_FRMSIZE_LS, _Sl);
         _SETVAL(_FRMSIZE_BS, _Sb);
         _SETVAL(_FRMSIZE_RS, _Sr);

         if (_Rl[_LENGTH] === 0)
            {
            _ENABLE(_FRMSIZE_TS, false);
            _ENABLE(_FRMSIZE_LS, false);
            _ENABLE(_FRMSIZE_BS, false);
            _ENABLE(_FRMSIZE_RS, false);
            _SETVALUE(_FRMSIZE_CAST,
               _COLOR, _GRAY,
               _TEXT_DECORATION, _NONE);
            }
         else
            {
            _ENABLE(_FRMSIZE_TS, true);
            _ENABLE(_FRMSIZE_LS, true);
            _ENABLE(_FRMSIZE_BS, true);
            _ENABLE(_FRMSIZE_RS, true);
            _SETVALUE(_FRMSIZE_CAST,
               _COLOR, _BLUE,
               _TEXT_DECORATION, _UNDERLINE);
            }
         }
      else if (_Pen === _P_FILE)
         {
         _Pen = _Penbuf;
         _Pw = _NULL;
         _Ks = _NULL;
         _Zcmp = false;
         _Store = 0;
         _Rcrc = 0;
         _Cs = 1;
         _INTF.sjis = true;
         _Zidx = 0;
         _NTH_ELEMENT(_DECRYPTOFILE)[_ACCEPT] = _ZIPSTR;
         _SETVAL(_CRYPTOPW, _EMPTY);
         _SETVALUE(_CRYPTOPW,
            _COLOR, _WHITE);
         _SETVALUE(_CRYPTOCOL,
            _INNERHTML, _SWSTR[0]);
         _SETVALUE(_CRYPTOZCMP,
            _INNERHTML, _ZCMPSTR[0]);
         _SETVALUE(_CRYPTOSTORE,
            _INNERHTML, _STORESTR[0]);
         _SETVALUE(_CRYPTORCRC,
            _INNERHTML, _RCRCSTR[0]);
         _SETVALUE(_CRYPTOCS,
            _INNERHTML, _CHARSETSTR[1]);
         _SETVAL(_CRYPTOZIDX, 0);
         _SETVALUE(_AESCRYPTO,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_DECRYPTO,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_BTN_FILE,
            _SRC, _FILEIMG[0]);
         _SETVALUE(_FILEBG,
            _DISPLAY, _NONE);
         _SETVALUE(_FILECMD,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_BTNS_CMD,
            _DISPLAY, _NULL);
         _SETVALUE(_BTNS,
            _DISPLAY, _NULL);
         _SETVALUE(_FLTDWLOGO,
            _VISIBILITY, _HIDDEN);
         _SWCMD();
         }
      }
   };

var _PLT_OPT_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE && _Fp && _GETVALUE(_PLT_OPT, _COLOR) === _BLUE)
      {
      _SETVALUE(_PLT_OPT,
         _COLOR, _GRAY,
         _TEXT_DECORATION, _NONE);
      _SHRINK();

      if (_M3[_Lc] >= _Ps)
         {
         _Lc = 0;
         }

      if (_M3[_Rc] >= _Ps)
         {
         _Rc = 0;
         }

      _DWCS();
      _DWPT();
      _BLEND();
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWLB();
      }
   };

var _BGCOLORNUM_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE)
      {
      _Pen = _P_COLBC;
      _OPEN_COLEDIT(_Fa, _Bc);
      }
   };

var _COLCHANGE_FUNC = function ()
   {
   var u;
   var s;

   if (_Flk && _GETVALUE(_COLCHANGE, _COLOR) === _BLUE)
      {
      if (_Pen === _P_COLBC)
         {
         _Pen = _P_FILE;
         _Bc = _Cnew;
         _DWBC();
         _BLEND();
         _SCALE([_Mtx[_BX], _Mtx[_BY]]);
         _SWLB();
         _SETVALUE(_COLORCOV,
            _DISPLAY, _NONE);
         _SETVALUE(_COLORBG,
            _DISPLAY, _NONE);
         _SETVALUE(_BGCOLORNUM,
            _INNERHTML, _HEXSTR(_Bc));
         }
      else if (_Pen === _P_COLCS)
         {
         _Pen = _Penbuf;
         _Lcol = _Cnew;
         _DWCS();
         _SETVALUE(_COLORCOV,
            _DISPLAY, _NONE);
         _SETVALUE(_COLORBG,
            _DISPLAY, _NONE);
         _SWCMD();
         }
      else if (_Pen === _P_COLPT)
         {
         _Pen = _Penbuf;

         if (_GETVALUE(_COLCHANGE, _INNERHTML) === _COLCMD[0])
            {
            if (_Fp)
               {
               _CLEAR_R();
               _PUSH(_Lp, true, false, false, true, false);
               u = new _UINT8ARRAY(768);

               for (s = 0; s < _Ps; ++ s)
                  {
                  u[s] = _Pt[s];
                  }

               for (; s < 768; ++ s)
                  {
                  u[s] = 0xFF;
                  }

               _Pt = u;
               u = new _UINT8ARRAY(256);

               for (s = 0; s < _As; ++ s)
                  {
                  u[s] = _Ac[s];
                  }

               for (; s < 256; ++ s)
                  {
                  u[s] = 0xFF;
                  }

               _Ac = u;
               _Lc = _Addix;
               }
            else
               {
               _Lcol = _Cnew;
               }

            _ADD(_Addix, _Cnew & 0xFF, _Cnew >>> 8 & 0xFF, _Cnew >>> 16 & 0xFF, _Cnew >>> 24);
            _DWCS();
            _DWPT();

            if (_Fp)
               {
               _BLEND();
               _SCALE([_Mtx[_BX], _Mtx[_BY]]);
               _SWLB();
               }
            }
         else
            {
            if (_Fp)
               {
               _Lc = _Cidx;
               }
            else
               {
               _Lcol = _Cnew;
               }

            _DWCS();
            }

         _SETVALUE(_COLORCOV,
            _DISPLAY, _NONE);
         _SETVALUE(_COLORBG,
            _DISPLAY, _NONE);
         _SWCMD();
         }
      }
   };

var _COLADD_FUNC = function ()
   {
   if (_Flk && _GETVALUE(_COLADD, _COLOR) === _BLUE)
      {
      if (_Pen === _P_COLCS)
         {
         _Pen = _Penbuf;
         _Lcol = _Cnew;
         _Addix = _D3[_Ps];
         _ADD(_Addix, _Cnew & 0xFF, _Cnew >>> 8 & 0xFF, _Cnew >>> 16 & 0xFF, _Cnew >>> 24);
         _DWCS();
         _DWPT();
         _SETVALUE(_COLORCOV,
            _DISPLAY, _NONE);
         _SETVALUE(_COLORBG,
            _DISPLAY, _NONE);
         _SWCMD();
         }
      else if (_Pen === _P_COLPT)
         {
         _Pen = _Penbuf;
         _Addix = _D3[_Ps];
         _ADD(_Addix, _Cnew & 0xFF, _Cnew >>> 8 & 0xFF, _Cnew >>> 16 & 0xFF, _Cnew >>> 24);

         if (_Fp)
            {
            _Lc = _Addix;
            }
         else
            {
            _Lcol = _Cnew;
            }

         _DWCS();
         _DWPT();
         _SETVALUE(_COLORCOV,
            _DISPLAY, _NONE);
         _SETVALUE(_COLORBG,
            _DISPLAY, _NONE);
         _SWCMD();
         }
      }
   };

var _DISCARD_FUNC = function ()
   {
   if (_Flk)
      {
      if (_Pen === _P_COLBC)
         {
         _Pen = _P_FILE;
         _SETVALUE(_COLORCOV,
            _DISPLAY, _NONE);
         _SETVALUE(_COLORBG,
            _DISPLAY, _NONE);
         }
      else if (_Pen === _P_COLCS)
         {
         _Pen = _Penbuf;
         _SETVALUE(_COLORCOV,
            _DISPLAY, _NONE);
         _SETVALUE(_COLORBG,
            _DISPLAY, _NONE);
         _SWCMD();
         }
      else if (_Pen === _P_COLPT)
         {
         _Pen = _Penbuf;
         _SETVALUE(_COLORCOV,
            _DISPLAY, _NONE);
         _SETVALUE(_COLORBG,
            _DISPLAY, _NONE);
         _SWCMD();
         }
      }
   };

var _UNDO_FUNC = function ()
   {
   if (_Flk &&
         (_Pen === _P_COLPT || _Pen === _P_COLCS || _Pen === _P_COLBC))
      {
      _Cnew = _FROM_RGB(_Cbuf);
      }
   };

var _CVSSIZE_WH_FUNC = function ()
   {
   var u;
   var v;

   if (! _Flk && _Pen === _P_FILE)
      {
      u = _CHVAL(_GETVAL(_CVSSIZE_W), 2048, 1);
      v = _CHVAL(_GETVAL(_CVSSIZE_H), 2048, 1);
      _SETVAL(_CVSSIZE_W, u);
      _SETVAL(_CVSSIZE_H, v);

      if (u !== _W || v !== _H)
         {
         _SETVALUE(_CVSSIZE,
            _COLOR, _BLUE,
            _TEXT_DECORATION, _UNDERLINE);
         }
      else
         {
         _SETVALUE(_CVSSIZE,
            _COLOR, _GRAY,
            _TEXT_DECORATION, _NONE);
         }
      }

   _Flk = true;
   };

var _CVSSIZE_FUNC = function ()
   {
   var u;
   var v;

   if (_Flk && _Pen === _P_FILE && _GETVALUE(_CVSSIZE, _COLOR) === _BLUE)
      {
      u = _CHVAL(_GETVAL(_CVSSIZE_W), 2048, 1);
      v = _CHVAL(_GETVAL(_CVSSIZE_H), 2048, 1);
      _RESIZE(
         u,
         v);
      _SETVAL(_CVSSIZE_W, u);
      _SETVAL(_CVSSIZE_H, v);
      _SETVALUE(_CVSSIZE,
         _COLOR, _GRAY,
         _TEXT_DECORATION, _NONE);
      _SETVALUE(_PLT_OPT,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _FIX_FRM();
      _SETVAL(_FRMSIZE_TS, _St);
      _SETVAL(_FRMSIZE_LS, _Sl);
      _SETVAL(_FRMSIZE_BS, _Sb);
      _SETVAL(_FRMSIZE_RS, _Sr);

      if (_Rl[_LENGTH] === 0)
         {
         _ENABLE(_FRMSIZE_TS, false);
         _ENABLE(_FRMSIZE_LS, false);
         _ENABLE(_FRMSIZE_BS, false);
         _ENABLE(_FRMSIZE_RS, false);
         _SETVALUE(_FRMSIZE_CAST,
            _COLOR, _GRAY,
            _TEXT_DECORATION, _NONE);
         }
      else
         {
         _ENABLE(_FRMSIZE_TS, true);
         _ENABLE(_FRMSIZE_LS, true);
         _ENABLE(_FRMSIZE_BS, true);
         _ENABLE(_FRMSIZE_RS, true);
         _SETVALUE(_FRMSIZE_CAST,
            _COLOR, _BLUE,
            _TEXT_DECORATION, _UNDERLINE);
         }

      _BLEND();
      _CAST();
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWLB();
      }
   };

var _FRMSIZE_TLBRS_FUNC = function ()
   {
   if (! _Flk && _Pen === _P_FILE)
      {
      if (_Rl[_LENGTH] > 0)
         {
         _St = _CHVAL(_GETVAL(_FRMSIZE_TS), 2047, 0);
         _Sl = _CHVAL(_GETVAL(_FRMSIZE_LS), 2047, 0);
         _Sb = _CHVAL(_GETVAL(_FRMSIZE_BS), 2047 - _St, 0);
         _Sr = _CHVAL(_GETVAL(_FRMSIZE_RS), 2047 - _Sl, 0);
         _SETVALUE(_FRMSIZE_CAST,
            _COLOR, _BLUE,
            _TEXT_DECORATION, _UNDERLINE);
         }

      _SETVAL(_FRMSIZE_TS, _St);
      _SETVAL(_FRMSIZE_LS, _Sl);
      _SETVAL(_FRMSIZE_BS, _Sb);
      _SETVAL(_FRMSIZE_RS, _Sr);
      }

   _Flk = true;
   };

var _FRMSIZE_CAST_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE
         && _GETVALUE(_FRMSIZE_CAST, _COLOR) === _BLUE)
      {
      _SETVALUE(_FRMSIZE_CAST,
         _COLOR, _GRAY,
         _TEXT_DECORATION, _NONE);
      _FIX();
      _SETVAL(_FRMSIZE_TS, _St);
      _SETVAL(_FRMSIZE_LS, _Sl);
      _SETVAL(_FRMSIZE_BS, _Sb);
      _SETVAL(_FRMSIZE_RS, _Sr);
      }
   };

var _POPUPCOV_FUNC = function ()
   {
   var u;

   if (_Flk &&
         ((u = _Pen === _P_CTY , u) || _Pen === _P_PNG
         || _Pen === _P_CONFIRM || _Pen === _P_JPG || _Pen === _P_CRYPTO
         || _Pen === _P_SAVE))
      {
      _Pen = u ? _P_NEW : _P_FILE;
      _SETVAL(_CRYPTOPW, _EMPTY);
      _SETVALUE(_CRYPTOPW,
         _COLOR, _WHITE);
      _SETVALUE(_CRYPTOCOL,
         _INNERHTML, _SWSTR[0]);
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_TYPEBOX,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_NEWBOX,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_JPGBOX,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CRYPTOBOX,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _DISPLAY, _NONE);
      }
   };

var _CTYPE_FUNC = function ()
   {
   if (_Flk && _Pen === _P_NEW)
      {
      _Pen = _P_CTY;
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _NULL);
      _SETVALUE(_TYPEBOX,
         _TOP, 15 + 17 * 2 - 2 - 1,
         _VISIBILITY, _NULL);
      }
   };

var _PNGTYPE_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE)
      {
      _Pen = _P_PNG;
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _NULL);
      _SETVALUE(_TYPEBOX,
         _TOP, 258 + 28 + 17 * 4 - 2 - 1,
         _VISIBILITY, _NULL);
      }
   };

var _TYPE_IX_FUNC = function ()
   {
   var u;

   if (_Flk && ((u = _Pen === _P_CTY , u) || _Pen === _P_PNG))
      {
      _Pen = u ? _P_NEW : _P_FILE;

      if (u)
         {
         _Fp = true;
         _Fa = false;
         }
      else
         {
         _Sp = true;
         _Sa = false;
         }

      _SETVALUE(u ? _CTYPE : _PNGTYPE,
         _INNERHTML, _COLTYPESTR[0]);
      _SETVALUE(u ? _A_ICOCTY : _A_ICOPNG,
         _SRC, _COLTYPEIMG[0]);
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_TYPEBOX,
         _VISIBILITY, _HIDDEN);
      }
   };

var _TYPE_IX_A_FUNC = function ()
   {
   var u;

   if (_Flk && ((u = _Pen === _P_CTY , u) || _Pen === _P_PNG))
      {
      _Pen = u ? _P_NEW : _P_FILE;

      if (u)
         {
         _Fp = true;
         _Fa = true;
         }
      else
         {
         _Sp = true;
         _Sa = true;
         }

      _SETVALUE(u ? _CTYPE : _PNGTYPE,
         _INNERHTML, _COLTYPESTR[1]);
      _SETVALUE(u ? _A_ICOCTY : _A_ICOPNG,
         _SRC, _COLTYPEIMG[1]);
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_TYPEBOX,
         _VISIBILITY, _HIDDEN);
      }
   };

var _TYPE_TR_FUNC = function ()
   {
   var u;

   if (_Flk && ((u = _Pen === _P_CTY , u) || _Pen === _P_PNG))
      {
      _Pen = u ? _P_NEW : _P_FILE;

      if (u)
         {
         _Fp = false;
         _Fa = false;
         }
      else
         {
         _Sp = false;
         _Sa = false;
         }

      _SETVALUE(u ? _CTYPE : _PNGTYPE,
         _INNERHTML, _COLTYPESTR[2]);
      _SETVALUE(u ? _A_ICOCTY : _A_ICOPNG,
         _SRC, _COLTYPEIMG[2]);
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_TYPEBOX,
         _VISIBILITY, _HIDDEN);
      }
   };

var _TYPE_TR_A_FUNC = function ()
   {
   var u;

   if (_Flk && ((u = _Pen === _P_CTY , u) || _Pen === _P_PNG))
      {
      _Pen = u ? _P_NEW : _P_FILE;

      if (u)
         {
         _Fp = false;
         _Fa = true;
         }
      else
         {
         _Sp = false;
         _Sa = true;
         }

      _SETVALUE(u ? _CTYPE : _PNGTYPE,
         _INNERHTML, _COLTYPESTR[3]);
      _SETVALUE(u ? _A_ICOCTY : _A_ICOPNG,
         _SRC, _COLTYPEIMG[3]);
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_TYPEBOX,
         _VISIBILITY, _HIDDEN);
      }
   };

var _BTN_PLT_FUNC = function ()
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl)
      {
      _Plt = true;
      _Cu = true;
      _SWLB();
      _SETVALUE(_LYRBG,
         _DISPLAY, _NONE);
      _SETVALUE(_LYRCMD,
         _DISPLAY, _NULL);
      _SETVALUE(_LYRRECTBG,
         _DISPLAY, _NONE);
      _SWCMD();
      }
   };

var _BTN_LYR_FUNC = function ()
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl)
      {
      if (_Lm === _LSL && _Plt)
         {
         _Cur = 0;
         _Auto = true;
         }

      _Plt = false;
      _Cu = true;
      _SWLB();
      _SETVALUE(_LYRBG,
         _DISPLAY, _NULL);
      _SETVALUE(_LYRCMD,
         _DISPLAY, _Lm === _LSL ? _NONE : _NULL);
      _SETVALUE(_LYRRECTBG,
         _DISPLAY, _Lm === _LSL ? _NULL : _NONE);
      _SWCMD();
      }
   };

var _BTN_LINE_FUNC = function ()
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl)
      {
      if (_Pen === _P_RECT && _Rd !== _Dt && (_Plt || _Lm !== _LSL))
         {
         _Rd = _Dt;
         _Tmp = _NULL;
         _SCALE([_Mtx[_BX], _Mtx[_BY]]);
         }

      _Pen = _P_LINE;
      _Cu = true;
      _SWCMD();
      }
   };

var _BTN_FILL_FUNC = function ()
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl)
      {
      if (_Pen === _P_RECT && _Rd !== _Dt && (_Plt || _Lm !== _LSL))
         {
         _Rd = _Dt;
         _Tmp = _NULL;
         _SCALE([_Mtx[_BX], _Mtx[_BY]]);
         }

      _Pen = _P_FILL;
      _Cu = true;
      _SWCMD();
      }
   };

var _BTN_RECT_FUNC = function ()
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl)
      {
      if (_Pen === _P_RECT)
         {
         _Bg = ! _Bg;

         if (_Rd !== _Dt && (_Plt || _Lm !== _LSL) && _Rect && ! _Rect_b)
            {
            _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);
            _BLEND();
            _RECT(_Rs, _Rf, true);
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }
         }

      _Pen = _P_RECT;
      _Cu = true;
      _SWCMD();
      }
   };

var _BTN_COL_FUNC = function ()
   {
   if (_Flk && _Ctl)
      {
      if (_Pen === _P_EXTRCT)
         {
         if (_Fp)
            {
            _Pen = _P_COLPT;
            _Addix = _Lc;
            _OPEN_COLEDIT(_Fa,
               (_Pt[_M3[_Addix]] | _Pt[_M3[_Addix] + 1] << 8
               | _Pt[_M3[_Addix] + 2] << 16 | _Ac[_Addix] << 24) >>> 0);
            }
         else
            {
            _Pen = _P_COLCS;
            _OPEN_COLEDIT(_Fa, _Lcol);
            }
         }
      else if (_Pen >= _P_LINE)
         {
         if (_Pen === _P_RECT && _Rd !== _Dt && (_Plt || _Lm !== _LSL))
            {
            _Rd = _Dt;
            _Tmp = _NULL;
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }

         _Penbuf = _Pen;
         _Pen = _P_EXTRCT;
         _Cu = true;
         _SWCMD();
         }
      }
   };

var _PLTCVS_FUNC = function (T)
   {
   var u;

   if (_Flk && _Plt && _Pen >= _P_LINE && _Ctl)
      {
      u = _INDEX(
         (_Pcscr ? T[_PAGEX] - (_Clw - _NAV_L) : T[_PAGEX]) - 20,
         (_Pcscr ? T[_PAGEY] - _BTNS_L - 1 : T[_PAGEY] - (_Clh - _NAV_L)) - 15 - 15 - 10);

      if (u !== _EOF)
         {
         if (_Cu || _Addix !== u)
            {
            _Cu = false;
            _Addix = u;

            if (_M3[u] < _Ps)
               {
               if (_Fp)
                  {
                  _Lc = _Addix;
                  }
               else
                  {
                  _Lcol = (_Pt[_M3[_Addix]] | _Pt[_M3[_Addix] + 1] << 8
                     | _Pt[_M3[_Addix] + 2] << 16 | _Ac[_Addix] << 24) >>> 0;
                  }
               }

            _DWCS();
            _SWCMD();
            }
         else
            {
            if (_Pen !== _P_EXTRCT)
               {
               _Penbuf = _Pen;
               }

            _Pen = _P_COLPT;
            _OPEN_COLEDIT(_Fa,
               (_Pt[_M3[_Addix]] | _Pt[_M3[_Addix] + 1] << 8
               | _Pt[_M3[_Addix] + 2] << 16 | _Ac[_Addix] << 24) >>> 0);
            }
         }
      }
   };

var _PLTFNLB_FUNC = function ()
   {
   var u;

   if (_Flk && _Pen >= _P_LINE && _Ctl)
      {
      _Cu = true;

      if (_Fp)
         {
         u = _Lc;
         _Lc = _Rc;
         _Rc = u;
         }
      else
         {
         u = _Lcol;
         _Lcol = _Rcol;
         _Rcol = u;
         }

      _DWCS();

      if (_Pen === _P_RECT && _Rd !== _Dt && (_Plt || _Lm !== _LSL) && _Rect && ! _Rect_b)
         {
         _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);
         _BLEND();
         _RECT(_Rs, _Rf, true);
         _SCALE([_Mtx[_BX], _Mtx[_BY]]);
         }

      _SWCMD();
      }
   };

var _RULENAME_FUNC = function ()
   {
   var u;

   if (! _Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm === _LSL)
      {
      if (_Rn !== _EOF)
         {
         if (_Rl[_LENGTH] > 0)
            {
            u = _CHSTR(_Rn, _GETVAL(_RULENAME), _PNGSTR);
            _Rl[_Rn][_NM] = u;
            _SETVAL(_RULENAME, u);
            }
         else
            {
            _SETVAL(_RULENAME, _EMPTY);
            }
         }
      else
         {
         _SETVAL(_RULENAME, _CHSTR(_EOF, _GETVAL(_RULENAME), _PNGSTR));
         }

      _SWLB();
      }

   _Flk = true;
   };

var _RULE_CXY_FUNC = function ()
   {
   var u;

   if (! _Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm === _LSL)
      {
      if (_Rl[_LENGTH] > 0 && _Rn !== _EOF)
         {
         u = _Rl[_Rn];
         u[_TS] = _CHVAL(_GETVAL(_RULE_TS), _Clp[_B], 0);
         u[_LS] = _CHVAL(_GETVAL(_RULE_LS), _Clp[_R], 0);
         u[_BS] = _CHVAL(_GETVAL(_RULE_BS), _Clp[_B] - u[_TS], 0);
         u[_RS] = _CHVAL(_GETVAL(_RULE_RS), _Clp[_R] - u[_LS], 0);
         u[_CX] = _CHVAL(_GETVAL(_RULE_CX), _Clp[_R] - u[_RS], u[_LS]);
         u[_CY] = _CHVAL(_GETVAL(_RULE_CY), _Clp[_B] - u[_BS], u[_TS]);
         _SETVAL(_RULE_CX, u[_CX]);
         _SETVAL(_RULE_CY, u[_CY]);
         _SETVAL(_RULE_TS, u[_TS]);
         _SETVAL(_RULE_LS, u[_LS]);
         _SETVAL(_RULE_BS, u[_BS]);
         _SETVAL(_RULE_RS, u[_RS]);
         }
      else
         {
         _SETVAL(_RULE_CX, 0);
         _SETVAL(_RULE_CY, 0);
         _SETVAL(_RULE_TS, 0);
         _SETVAL(_RULE_LS, 0);
         _SETVAL(_RULE_BS, 0);
         _SETVAL(_RULE_RS, 0);
         }

      _SWLB();
      }

   _Flk = true;
   };

var _RULE_TLBRS_FUNC = function ()
   {
   var u;

   if (! _Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm === _LSL)
      {
      if (_Rl[_LENGTH] > 0 && _Rn !== _EOF)
         {
         u = _Rl[_Rn];
         u[_CX] = _CHVAL(_GETVAL(_RULE_CX), _Clp[_R], 0);
         u[_CY] = _CHVAL(_GETVAL(_RULE_CY), _Clp[_B], 0);
         u[_TS] = _CHVAL(_GETVAL(_RULE_TS), u[_CY], 0);
         u[_LS] = _CHVAL(_GETVAL(_RULE_LS), u[_CX], 0);
         u[_BS] = _CHVAL(_GETVAL(_RULE_BS), _Clp[_B] - u[_CY], 0);
         u[_RS] = _CHVAL(_GETVAL(_RULE_RS), _Clp[_R] - u[_CX], 0);
         _SETVAL(_RULE_CX, u[_CX]);
         _SETVAL(_RULE_CY, u[_CY]);
         _SETVAL(_RULE_TS, u[_TS]);
         _SETVAL(_RULE_LS, u[_LS]);
         _SETVAL(_RULE_BS, u[_BS]);
         _SETVAL(_RULE_RS, u[_RS]);
         }
      else
         {
         _SETVAL(_RULE_CX, 0);
         _SETVAL(_RULE_CY, 0);
         _SETVAL(_RULE_TS, 0);
         _SETVAL(_RULE_LS, 0);
         _SETVAL(_RULE_BS, 0);
         _SETVAL(_RULE_RS, 0);
         }

      _SWLB();
      }

   _Flk = true;
   };

var _RULENO_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm === _LSL
         && _Rl[_LENGTH] > 0 && _Rn !== _EOF
         && _GETVALUE(_RULEFORM, _VISIBILITY) === _HIDDEN
         && _GETVALUE(_RULENO, _INNERHTML) !== _EMPTY)
      {
      _SETVALUE(_RULENO,
         _INNERHTML, _EMPTY);
      _SETVAL(_RULEFORM, _Rn + 1);
      _SETVALUE(_RULEFORM,
         _VISIBILITY, _NULL);
      _NTH_ELEMENT(_RULEFORM)[_FOCUS]();
      }
   };

var _RULEFORM_FUNC = function ()
   {
   if (! _Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm === _LSL
         && _Rl[_LENGTH] > 0 && _Rn !== _EOF
         && _GETVALUE(_RULEFORM, _VISIBILITY) !== _HIDDEN
         && _GETVALUE(_RULENO, _INNERHTML) === _EMPTY)
      {
      _Rn = _CHVAL(_GETVAL(_RULEFORM), _Rl[_LENGTH], 1) - 1;
      _Cur = 0;
      _Auto = true;
      _SWLB();
      _SWCMD();
      }

   _Flk = true;
   };

var _RULEADD_FUNC = function ()
   {
   var u;
   var v;

   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm === _LSL)
      {
      if (_Rn !== _EOF)
         {
         if (_Rl[_LENGTH] < 0xFFFF)
            {
            _Rnbuf = _Rn;
            _Rn = _EOF;
            _SETVAL(_RULENAME, _EMPTY);
            }
         }
      else
         {
         v = _CHSTR(_EOF, _GETVAL(_RULENAME), _PNGSTR);

         if (v !== _EMPTY)
            {
            _Rn = _Rl[_LENGTH];
            u = [];
            u[_TS] = 0;
            u[_LS] = 0;
            u[_BS] = 0;
            u[_RS] = 0;
            u[_CX] = _CHVAL(_Mtx[_X], _Clp[_R] - u[_RS], u[_LS]);
            u[_CY] = _CHVAL(_Mtx[_Y], _Clp[_B] - u[_BS], u[_TS]);
            u[_NM] = v;
            _Rl[_Rn] = u;
            _Cur = 0;
            _Auto = true;
            }
         else
            {
            _Rn = _Rnbuf;
            }
         }

      _SWLB();
      _SWCMD();
      }
   };

var _RULEINSERT_FUNC = function ()
   {
   var u;
   var v;

   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm === _LSL)
      {
      if (_Rn !== _EOF)
         {
         if (_Rl[_LENGTH] < 0xFFFF)
            {
            _Rnbuf = _Rn;
            _Rn = _EOF;
            _SETVAL(_RULENAME, _EMPTY);
            }
         }
      else
         {
         v = _CHSTR(_EOF, _GETVAL(_RULENAME), _PNGSTR);

         if (v !== _EMPTY)
            {
            _Rn = _Rl[_LENGTH];
            u = [];
            u[_TS] = 0;
            u[_LS] = 0;
            u[_BS] = 0;
            u[_RS] = 0;
            u[_CX] = _CHVAL(_Mtx[_X], _Clp[_R] - u[_RS], u[_LS]);
            u[_CY] = _CHVAL(_Mtx[_Y], _Clp[_B] - u[_BS], u[_TS]);
            u[_NM] = v;

            for (; _Rnbuf < _Rn; -- _Rn)
               {
               _Rl[_Rn] = _Rl[_Rn - 1];
               }

            _Rl[_Rn] = u;
            _Cur = 0;
            _Auto = true;
            }
         else
            {
            _Rn = _Rnbuf;
            }
         }

      _SWLB();
      _SWCMD();
      }
   };

var _RULEPREV_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm === _LSL
         && _Rl[_LENGTH] > 0 && _Rn !== _EOF
         && _GETVALUE(_RULEPREV, _COLOR) === _BLUE)
      {
      -- _Rn;

      if (_Rn >= _Rl[_LENGTH])
         {
         _Rn = _Rl[_LENGTH] - 1;
         }

      if (_Rn < 0)
         {
         _Rn = 0;
         }

      _Cur = 0;
      _Auto = true;
      _SWLB();
      _SWCMD();
      }
   };

var _RULENEXT_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm === _LSL
         && _Rl[_LENGTH] > 0 && _Rn !== _EOF
         && _GETVALUE(_RULENEXT, _COLOR) === _BLUE)
      {
      ++ _Rn;

      if (_Rn >= _Rl[_LENGTH])
         {
         _Rn = _Rl[_LENGTH] - 1;
         }

      if (_Rn < 0)
         {
         _Rn = 0;
         }

      _Cur = 0;
      _Auto = true;
      _SWLB();
      _SWCMD();
      }
   };

var _RULEDEL_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm === _LSL
         && _Rl[_LENGTH] > 0 && _Rn !== _EOF
         && _GETVALUE(_RULEDEL, _COLOR) === _BLUE)
      {
      _DEL_RULE(_Rn);

      if (_Rn >= _Rl[_LENGTH])
         {
         _Rn = _Rl[_LENGTH] - 1;
         }

      if (_Rn < 0)
         {
         _Rn = 0;
         }

      _Cur = 0;
      _Auto = true;
      _SWLB();
      _SWCMD();
      }
   };

var _LYRFWD_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm !== _LSL
         && _GETVALUE(_LYRFWD, _COLOR) === _BLUE)
      {
      _FWD(_Lm);
      _Lm = _Lm === _LS1 ? 0 : _Lm + 1;
      _BLEND();
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWLB();
      _SWCMD();
      }
   };

var _LYREDIT_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm !== _LSL && _Lm !== _Lp
         && _GETVALUE(_LYREDIT, _COLOR) === _BLUE)
      {
      _Lp = _Lm;
      _SWLB();
      _SWCMD();
      }
   };

var _LYRVISIBLE_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm !== _LSL && _Lm !== _Lp
         && _GETVALUE(_LYRVISIBLE, _COLOR) === _BLUE)
      {
      _Lvs[_Lm] = true;
      _BLEND();
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWLB();
      _SWCMD();
      }
   };

var _LYRHIDDEN_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl && _Lm !== _LSL && _Lm !== _Lp
         && _GETVALUE(_LYRHIDDEN, _COLOR) === _BLUE)
      {
      _Lvs[_Lm] = false;
      _BLEND();
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWLB();
      _SWCMD();
      }
   };

var _LYRRECTBTN_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl)
      {
      if (_Lm !== _LSL)
         {
         _Cur = 0;
         _Auto = true;
         }

      _Lm = _LSL;
      _SWLB();
      _SWCMD();
      }
   };

var _LYR1BTN_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl)
      {
      _Lm = 0;
      _SWLB();
      _SWCMD();
      }
   };

var _LYR2BTN_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl)
      {
      _Lm = 1;
      _SWLB();
      _SWCMD();
      }
   };

var _LYR3BTN_FUNC = function ()
   {
   if (_Flk && ! _Plt && _Pen >= _P_LINE && _Ctl)
      {
      _Lm = 2;
      _SWLB();
      _SWCMD();
      }
   };

var _HUE_SAT_FUNC = function (T)
   {
   if (_Flk
         && (_Pen === _P_COLPT || _Pen === _P_COLCS || _Pen === _P_COLBC))
      {
      _Cnew = _FROM_XY(T[_PAGEX], T[_PAGEY]);
      }
   };

var _LUMGAUGE_FUNC = function (T)
   {
   if (_Flk
         && (_Pen === _P_COLPT || _Pen === _P_COLCS || _Pen === _P_COLBC))
      {
      _Cnew = _FROM_Y(T[_PAGEX], T[_PAGEY]);
      }
   };

var _RGB_COL_FUNC = function ()
   {
   var u;
   var v;
   var w;

   if (! _Flk && (_Pen === _P_COLPT || _Pen === _P_COLCS || _Pen === _P_COLBC))
      {
      u = _CHVAL(_GETVAL(_R_COL), 255, 0);
      v = _CHVAL(_GETVAL(_G_COL), 255, 0);
      w = _CHVAL(_GETVAL(_B_COL), 255, 0);

      if (u !== _C_r || v !== _C_g || w !== _C_b)
         {
         _Cnew = _FROM_RGB(
            (u
            | v << 8
            | w << 16
            | _CHVAL(_GETVAL(_A_COL), 255, _C_al ? 0 : 255) << 24) >>> 0);
         }
      else
         {
         _SETVAL(_R_COL, u);
         _SETVAL(_G_COL, v);
         _SETVAL(_B_COL, w);
         }
      }

   _Flk = true;
   };

var _HSL_COL_FUNC = function ()
   {
   var u;
   var v;
   var w;

   if (! _Flk && (_Pen === _P_COLPT || _Pen === _P_COLCS || _Pen === _P_COLBC))
      {
      u = _CHVAL(_GETVAL(_H_COL), 239, 0);
      v = _CHVAL(_GETVAL(_S_COL), 240, 0);
      w = _CHVAL(_GETVAL(_L_COL), 240, 0);

      if (u !== _C_h || v !== _C_s || w !== _C_l)
         {
         _Cnew = _FROM_HSL(
            u
            | v << 8
            | w << 16);
         }
      else
         {
         _SETVAL(_H_COL, u);
         _SETVAL(_S_COL, v);
         _SETVAL(_L_COL, w);
         }
      }

   _Flk = true;
   };

var _HEX_COL_FUNC = function ()
   {
   var u;

   if (! _Flk && (_Pen === _P_COLPT || _Pen === _P_COLCS || _Pen === _P_COLBC))
      {
      u = _CHHEX(_GETVAL(_HEX_COL));

      if (u !== _C_hex)
         {
         _Cnew = _FROM_RGB(_HTON(_TO_DEC(u)));
         }
      else
         {
         _SETVAL(_HEX_COL, u);
         }
      }

   _Flk = true;
   };

var _A_COL_FUNC = function ()
   {
   var u;

   if (! _Flk && (_Pen === _P_COLPT || _Pen === _P_COLCS || _Pen === _P_COLBC))
      {
      u = _CHVAL(_GETVAL(_A_COL), 255, _C_al ? 0 : 255);

      if (u !== _C_a)
         {
         _Cnew = _FROM_A(u);
         }
      else
         {
         _SETVAL(_A_COL, u);
         }
      }

   _Flk = true;
   };

var _BTN_UNDO_FUNC = function ()
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl && _Ubl > 0)
      {
      _Cu = true;
      _TAKE(true);
      _DWCS();
      _DWPT();
      _BLEND();
      _CAST();
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWLB();
      _SWCMD();
      }
   };

var _BTN_REDO_FUNC = function ()
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl && _Rbl > 0)
      {
      _Cu = true;
      _TAKE(false);
      _DWCS();
      _DWPT();
      _BLEND();
      _CAST();
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWLB();
      _SWCMD();
      }
   };

var _CMD_COPY_FUNC = function ()
   {
   var s;
   var t;
   var r;
   var q;

   if (_Flk && _Ctl && _Pen === _P_RECT && (_Plt || _Lm !== _LSL) && _Rd !== _Dt && _Rect)
      {
      _Cu = true;
      _Cpy_w = _Rf[_X] - _Rs[_X] + 1;
      _Cpy_h = _Rf[_Y] - _Rs[_Y] + 1;

      if (_Fp)
         {
         _Cpy = new _UINT8ARRAY(_Cpy_w * _Cpy_h * 4);

         for (s = 0 , t = 0 , r = _Rs[_Y]; r <= _Rf[_Y]; ++ r)
            {
            for (q = _Rs[_X]; q <= _Rf[_X]; ++ s , t += 4 , ++ q)
               {
               _Cpy[t] = _Pt[_M3[_Tmp[s]]];
               _Cpy[t + 1] = _Pt[_M3[_Tmp[s]] + 1];
               _Cpy[t + 2] = _Pt[_M3[_Tmp[s]] + 2];
               _Cpy[t + 3] = _Ac[_Tmp[s]];
               }
            }
         }
      else
         {
         _Cpy = new _UINT8ARRAY(_Cpy_w * _Cpy_h * (_Fa ? 4 : 3));

         for (s = 0; s < _Tmp[_LENGTH]; ++ s)
            {
            _Cpy[s] = _Tmp[s];
            }
         }

      _SWCMD(true);

      if (! _Plt && _Lm === _Lp)
         {
         _SETVALUE(_ICPASTE,
            _VISIBILITY, _Cpy !== _NULL ? _NULL : _HIDDEN);
         }
      }
   };

var _CMD_PASTE_FUNC = function ()
   {
   if (_Flk && _Ctl && _Pen === _P_RECT && (_Plt || _Lm !== _LSL) && _Rd !== _Dt && _Rect
         && _Cpy !== _NULL)
      {
      _Cu = true;
      _STORE(_Fp);
      _Rect_b = false;
      _Rect_d = false;
      _Rf = [_Rs[_X] + _Cpy_w - 1, _Rs[_Y] + _Cpy_h - 1];
      _Rf[_X] = _Rf[_X] > _Clp[_R] ? _Clp[_R] : _Rf[_X];
      _Rf[_Y] = _Rf[_Y] > _Clp[_B] ? _Clp[_B] : _Rf[_Y];
      _Rect_s = [_Rs[_X], _Rs[_Y]];
      _Rect_f = [_Rf[_X], _Rf[_Y]];

      if (_CNVT(_Cpy, _Cpy_w,
            _Rf[_X] - _Rs[_X] + 1, _Rf[_Y] - _Rs[_Y] + 1, 3 + +_Fa))
         {
         _Auto = true;
         _Cur = 0;
         _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);

         if (_Fp)
            {
            _DWCS();
            _DWPT();
            }

         _BLEND();
         _RECT(_Rs, _Rf, true);
         }
      else
         {
         _Rd = _Dt;
         _Tmp = _NULL;
         }

      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWCMD();
      }
   };

var _CMD_DEL_FUNC = function ()
   {
   if (_Flk && _Ctl && _Pen === _P_RECT && (_Plt || _Lm !== _LSL) && _Rd !== _Dt && _Rect)
      {
      _Cu = true;

      if (_Rect_b)
         {
         _Rect_b = false;
         _Rect_d = true;
         _STORE(false);
         }

      _PUT(_Rect_d, _Rect_s, _Rect_f);
      _Tmp = _NULL;
      _BLEND();
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWCMD();
      }
   };

var _CMD_ROTATE_FUNC = function ()
   {
   var u;

   if (_Flk && _Ctl && _Pen === _P_RECT && (_Plt || _Lm !== _LSL) && _Rd !== _Dt && _Rect)
      {
      _Cu = true;

      if (_Rect_b)
         {
         _Rect_b = false;
         _Rect_d = true;
         _Rect_s = [_Rs[_X], _Rs[_Y]];
         _Rect_f = [_Rf[_X], _Rf[_Y]];
         _STORE(false);
         }

      u = [_Rs[_X] + _Tmp_h - 1, _Rs[_Y] + _Tmp_w - 1];
      u[_X] = u[_X] > _Clp[_R] ? _Clp[_R] : u[_X];
      u[_Y] = u[_Y] > _Clp[_B] ? _Clp[_B] : u[_Y];
      _ROTATE();
      _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);
      _BLEND();
      _RECT(_Rs, u, true);
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWCMD();
      }
   };

var _CMD_HZ_FUNC = function ()
   {
   if (_Flk && _Ctl && _Pen === _P_RECT && (_Plt || _Lm !== _LSL) && _Rd !== _Dt && _Rect)
      {
      _Cu = true;

      if (_Rect_b)
         {
         _Rect_b = false;
         _Rect_d = true;
         _Rect_s = [_Rs[_X], _Rs[_Y]];
         _Rect_f = [_Rf[_X], _Rf[_Y]];
         _STORE(false);
         }

      _RVRS(_X);
      _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);
      _BLEND();
      _RECT(_Rs, _Rf, true);
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWCMD();
      }
   };

var _CMD_VT_FUNC = function ()
   {
   if (_Flk && _Ctl && _Pen === _P_RECT && (_Plt || _Lm !== _LSL) && _Rd !== _Dt && _Rect)
      {
      _Cu = true;

      if (_Rect_b)
         {
         _Rect_b = false;
         _Rect_d = true;
         _Rect_s = [_Rs[_X], _Rs[_Y]];
         _Rect_f = [_Rf[_X], _Rf[_Y]];
         _STORE(false);
         }

      _RVRS(_Y);
      _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);
      _BLEND();
      _RECT(_Rs, _Rf, true);
      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWCMD();
      }
   };

var _SCL_H_FUNC = function (T)
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl && _Scrl2 === _EOF && T[_BUTTON] === 0)
      {
      _Cu = true;
      _Scrl2 = _X;
      _Cx = T[_PAGEX];
      _Scrl_d = _Cx - _GETVALUE(_SCL_H, _LEFT);
      }
   };

var _SCL_V_FUNC = function (T)
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl && _Scrl2 === _EOF && T[_BUTTON] === 0)
      {
      _Cu = true;
      _Scrl2 = _Y;
      _Cy = T[_PAGEY];
      _Scrl_d = _Cy - _GETVALUE(_SCL_V, _TOP);
      }
   };

var _SCL_T_FUNC = function (T)
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl && _Scrl === _EOF && T[_BUTTON] === 0)
      {
      _Cu = true;
      _Scrl = _T;
      _Sd = 0;
      }
   };

var _SCL_B_FUNC = function (T)
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl && _Scrl === _EOF && T[_BUTTON] === 0)
      {
      _Cu = true;
      _Scrl = _B;
      _Sd = 0;
      }
   };

var _SCL_L_FUNC = function (T)
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl && _Scrl === _EOF && T[_BUTTON] === 0)
      {
      _Cu = true;
      _Scrl = _L;
      _Sd = 0;
      }
   };

var _SCL_R_FUNC = function (T)
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl && _Scrl === _EOF && T[_BUTTON] === 0)
      {
      _Cu = true;
      _Scrl = _R;
      _Sd = 0;
      }
   };

var _CMD_PLUS_FUNC = function ()
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl)
      {
      _Cu = true;

      if (_Mg < 10)
         {
         ++ _Mg;
         _CAST();

         if (_Cdt_a)
            {
            _SCALE([_Cdt_t[_X], _Cdt_t[_Y]]);
            }
         else
            {
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }
         }
      }
   };

var _CMD_MINUS_FUNC = function ()
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl)
      {
      _Cu = true;

      if (_Mg > 1)
         {
         -- _Mg;
         _CAST();

         if (_Cdt_a)
            {
            _SCALE([_Cdt_t[_X], _Cdt_t[_Y]]);
            }
         else
            {
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }
         }
      }
   };

var _CMD32_FUNC = function ()
   {
   if (_Flk && _Ctl && _Pen >= _P_LINE)
      {
      if (_Curimg !== _CURIMG)
         {
         _Curimg = _CURIMG;
         _Dwcur = _DWCUR;
         _Ptcur = _PTCUR;
         _Phcur = _PHCUR;
         _SETVALUE(_CMD32,
            _SRC, _CURSCLIMG[1]);
         }
      else
         {
         _Curimg = _CURIMG0;
         _Dwcur = _DW0CUR;
         _Ptcur = _PT0CUR;
         _Phcur = _PH0CUR;
         _SETVALUE(_CMD32,
            _SRC, _CURSCLIMG[0]);
         }

      _SETVALUE(_CMD64,
         _SRC, _CURSCLIMG64[0]);
      _SETVALUE(_HUE_SAT_PTR,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SETVALUE(_HUE_SAT,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SETVALUE(_LUM_PTR,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SETVALUE(_LUMGAUGE,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SWCMD();
      }
   };

var _CMD64_FUNC = function ()
   {
   if (_Flk && _Ctl && _Pen >= _P_LINE)
      {
      if (_Curimg !== _CURIMG64)
         {
         _Curimg = _CURIMG64;
         _Dwcur = _DW64CUR;
         _Ptcur = _PT64CUR;
         _Phcur = _PH64CUR;
         _SETVALUE(_CMD64,
            _SRC, _CURSCLIMG64[1]);
         }
      else
         {
         _Curimg = _CURIMG0;
         _Dwcur = _DW0CUR;
         _Ptcur = _PT0CUR;
         _Phcur = _PH0CUR;
         _SETVALUE(_CMD64,
            _SRC, _CURSCLIMG64[0]);
         }

      _SETVALUE(_CMD32,
         _SRC, _CURSCLIMG[0]);
      _SETVALUE(_HUE_SAT_PTR,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SETVALUE(_HUE_SAT,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SETVALUE(_LUM_PTR,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SETVALUE(_LUMGAUGE,
         _CURSOR, _Dwcur, _UNDEFINED, _UNDEFINED);
      _SWCMD();
      }
   };

var _CMD_CUR_FUNC = function ()
   {
   if (_Flk && _Ctl && _Pen >= _P_LINE
         && _Rd !== _Dt && (! _Plt && _Lm === _LSL || _Rect))
      {
      _Cu = true;

      if (_Cur >= _Curimg[_LENGTH] - 1)
         {
         _Auto = true;
         _Cur = 0;
         }
      else
         {
         if (_Auto)
            {
            _Cur = 0;
            }

         _Auto = false;
         ++ _Cur;
         }

      _SWCMD();
      }
   };

var _CDT_FUNC = function (T)
   {
   var u = _Flk && _Ctl && _Pen >= _P_LINE && T[_BUTTON] === 0;
   var v;

   if (u)
      {
      _Cx = T[_PAGEX];
      _Cy = T[_PAGEY];
      _Cdt_t = _TLSLT(_Cx, _Cy, false);

      if (4 <= _Cx && _Cx < _Cw + 4
            && _O_cdt <= _Cy && _Cy < _Ch + _O_cdt
            && _GETVALUE(_CDT, _VISIBILITY) !== _HIDDEN)
         {
         _Cdt_a = true;
         }
      else
         {
         _Cdt_a = false;
         }
      }

   if (u && _Cdt_a)
      {
      if (_Rd !== _Dt)
         {
         if (_Auto && (! _Plt && _Lm === _LSL || _Pen === _P_RECT && _Rect))
            {
            _SETVALUE(_CDT,
               _CURSOR, _Curimg[_CUR_PTR(_Cx, _Cy)], _PNGCUROFFSET1, _PNGCUROFFSET1);
            }

         if (_Cur > 0)
            {
            if (_Cur === 1)
               {
               if (! _Plt && _Lm === _LSL)
                  {
                  _Ctl = false;
                  u = _Rl[_Rn];
                  _Sdx = _Cdt_t[_X] - u[_CX];
                  _Sdy = _Cdt_t[_Y] - u[_CY];
                  }
               else if (_Pen === _P_RECT && _Rect)
                  {
                  _Ctl = false;
                  _Rect2 = 1;
                  _Sdx = _Cdt_t[_X] - _Rs[_X];
                  _Sdy = _Cdt_t[_Y] - _Rs[_Y];

                  if (_Rect_b)
                     {
                     _Rect_b = false;
                     _Rect_d = true;
                     _STORE(false);
                     }

                  _SWCMD();
                  }
               }
            else if (! _Plt && _Lm === _LSL)
               {
               _Ctl = false;
               u = _Rl[_Rn];
               _Sdx = _Cdt_t[_X] - (
                  _Cur === 3 || _Cur === 4 || _Cur === 5 ?
                     u[_CX] - u[_LS]
                  : _Cur === 7 || _Cur === 8 || _Cur === 9 ?
                     u[_CX] + u[_RS]
                  :
                     0);
               _Sdy = _Cdt_t[_Y] - (
                  _Cur === 2 || _Cur === 3 || _Cur === 9 ?
                     u[_CY] - u[_TS]
                  : _Cur === 5 || _Cur === 6 || _Cur === 7 ?
                     u[_CY] + u[_BS]
                  :
                     0);
               }
            else if (_Pen === _P_RECT && _Rect)
               {
               _Ctl = false;
               _Rect2 = 2;
               _Sdx = _Cdt_t[_X] - (
                  _Cur === 3 || _Cur === 4 || _Cur === 5 ?
                     _Rs[_X]
                  : _Cur === 7 || _Cur === 8 || _Cur === 9 ?
                     _Rf[_X]
                  :
                     0);
               _Sdy = _Cdt_t[_Y] - (
                  _Cur === 2 || _Cur === 3 || _Cur === 9 ?
                     _Rs[_Y]
                  : _Cur === 5 || _Cur === 6 || _Cur === 7 ?
                     _Rf[_Y]
                  :
                     0);

               if (_Rect_b)
                  {
                  _Rect_b = false;
                  _Rect_d = true;
                  _STORE(false);
                  }

               _SWCMD();
               }
            }
         else if (_Pen === _P_RECT && (_Plt || _Lm !== _LSL))
            {
            _Rd = _Dt;
            _Tmp = _NULL;
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            _SWCMD();
            }
         }
      else if (_Plt || _Lm !== _LSL)
         {
         if (_Pen === _P_EXTRCT)
            {
            _Pen = _Penbuf;

            if (_Fp)
               {
               _Lc = _Lyr[_Lp][_Cdt_t[_X] + _Cdt_t[_Y] * _W];
               }
            else
               {
               u = (_Cdt_t[_X] + _Cdt_t[_Y] * _W) * (_Fa ? 4 : 3);
               v = _Lyr[_Lp];
               _Lcol = (v[u] | v[u + 1] << 8 | v[u + 2] << 16 | (_Fa ? v[u + 3] : 0xFF) << 24) >>> 0;
               }

            _DWCS();
            _SWCMD();
            }
         else if (_Pen === _P_RECT)
            {
            _Ctl = false;
            _Cur = 10;
            _Rect = false;
            _Sdx = 0;
            _Sdy = 0;
            _Rect_o = [_Cdt_t[_X], _Cdt_t[_Y]];
            _Tmp = _NULL;
            _RECT(_Rect_o, _Rect_o, true);
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }
         else if (_Pen === _P_LINE)
            {
            _Ctl = false;
            _Line_o = [_Cdt_t[_X], _Cdt_t[_Y]];
            _STORE(false);
            _SWCMD();
            _LINE(_Line_o, _Cdt_t);
            _BLEND();
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }
         else if (_Pen === _P_FILL)
            {
            _STORE(false);
            _FILL(_Cdt_t);
            _BLEND();
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            _SWCMD();
            }
         }

      _Cu = true;
      }
   };

var _MOUSEUP_FUNC = function ()
   {
   var u;
   var s;
   var t;

   _Ctl = true;
   _Scrl = _EOF;
   _Scrl2 = _EOF;
   _Line_o = _NULL;

   if (_Flk && _Pen === _P_RECT && _Rd !== _Dt && (_Plt || _Lm !== _LSL))
      {
      if (_Rect)
         {
         if (_Rect2 === 1)
            {
            u = [_Rs[_X] + _Tmp_w - 1, _Rs[_Y] + _Tmp_h - 1];
            u[_X] = u[_X] > _Clp[_R] ? _Clp[_R] : u[_X];
            u[_Y] = u[_Y] > _Clp[_B] ? _Clp[_B] : u[_Y];
            _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);
            _BLEND();
            _RECT(_Rs, u, true);
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }
         else if (_Rect2 === 2)
            {
            _SZING(_Rf[_X] - _Rs[_X] + 1, _Rf[_Y] - _Rs[_Y] + 1);
            _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);
            _BLEND();
            _RECT(_Rs, _Rf, true);
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }

         _Rect2 = 0;
         }
      else
         {
         _Rect = true;
         _Rect2 = 0;
         _Cur = 0;
         _Auto = true;
         _Rect_b = true;
         _Rect_s = [_Rs[_X], _Rs[_Y]];
         _Rect_f = [_Rf[_X], _Rf[_Y]];
         _Tmp_w = _Rf[_X] - _Rs[_X] + 1;
         _Tmp_h = _Rf[_Y] - _Rs[_Y] + 1;
         _Tmp = new _UINT8ARRAY(_Fp ? _Tmp_w * _Tmp_h : _Tmp_w * _Tmp_h * (_Fa ? 4 : 3));
         s = [_Rs[_X], _Rs[_Y]];
         t = [0, 0];

         for (; s[_Y] <= _Rf[_Y]; ++ s[_Y] , ++ t[_Y])
            {
            for (; s[_X] <= _Rf[_X]; ++ s[_X] , ++ t[_X])
               {
               _PLOT2(_Tmp, _Tmp_w, t, _GETPX(_Lyr[_Lp], _W, s, _NULL));
               }

            s[_X] = _Rs[_X];
            t[_X] = 0;
            }

         _SWCMD();
         }
      }
   };

var _MOUSEMOVE_FUNC = function (T)
   {
   _Cx = T[_PAGEX];
   _Cy = T[_PAGEY];
   };

var _FRMS = function ()
   {
   var u;
   var v;
   var w;
   var x;

   if (_MAKE_ZIP() && _Flk && _Pen >= _P_LINE)
      {
      if (_Scrl2 === _X)
         {
         w = _Sw - _Mtx[_SW];

         if (w > 0)
            {
            v = _Cx - _Scrl_d - 17;
            u = _FLOOR(_FLOOR(_Cw / _Mg) / 2)
               + _FLOOR(_FLOOR(v / w * (_W * _Mg - _Cw)) / _Mg);
            _SCALE([u < 0 ? 0 : u > _Clp[_R] ? _Clp[_R] : u, _Mtx[_BY]]);
            _SETVALUE(_SCL_H,
               _LEFT, 17 + (v < 0 ? 0 : v > w ? w : v));
            }
         }
      else if (_Scrl2 === _Y)
         {
         w = _Sh - _Mtx[_SH];

         if (w > 0)
            {
            v = _Cy - _Scrl_d - _O_sclv;
            u = _FLOOR(_FLOOR(_Ch / _Mg) / 2)
               + _FLOOR(_FLOOR(v / w * (_H * _Mg - _Ch)) / _Mg);
            _SCALE([_Mtx[_BX], u < 0 ? 0 : u > _Clp[_B] ? _Clp[_B] : u]);
            _SETVALUE(_SCL_V,
               _TOP, _O_sclv + (v < 0 ? 0 : v > w ? w : v));
            }
         }
      else if (_Scrl === _T)
         {
         if (_Sd < 4)
            {
            ++ _Sd;
            v = +(_Sd % 2 !== 0) * _Sd;
            }
         else if (_Sd < 128)
            {
            _Sd += 3;
            v = _Sd;
            }
         else
            {
            _Sd = 128;
            v = _Sd;
            }

         w = _FLOOR(_Ch / _Mg);
         u = _H - w + _FLOOR(w / 2);

         if (_Mtx[_BY] >= u)
            {
            u -= v;
            }
         else
            {
            u = _Mtx[_BY] - v;
            }

         v = _FLOOR(w / 2) - +(w % 2 === 0);
         _SCALE([_Mtx[_BX], u < v ? v : u]);
         }
      else if (_Scrl === _L)
         {
         if (_Sd < 4)
            {
            ++ _Sd;
            v = +(_Sd % 2 !== 0) * _Sd;
            }
         else if (_Sd < 128)
            {
            _Sd += 3;
            v = _Sd;
            }
         else
            {
            _Sd = 128;
            v = _Sd;
            }

         w = _FLOOR(_Cw / _Mg);
         u = _W - w + _FLOOR(w / 2);

         if (_Mtx[_BX] >= u)
            {
            u -= v;
            }
         else
            {
            u = _Mtx[_BX] - v;
            }

         v = _FLOOR(w / 2) - +(w % 2 === 0);
         _SCALE([u < v ? v : u, _Mtx[_BY]]);
         }
      else if (_Scrl === _B)
         {
         if (_Sd < 4)
            {
            ++ _Sd;
            v = +(_Sd % 2 !== 0) * _Sd;
            }
         else if (_Sd < 128)
            {
            _Sd += 3;
            v = _Sd;
            }
         else
            {
            _Sd = 128;
            v = _Sd;
            }

         w = _FLOOR(_Ch / _Mg);
         u = _FLOOR(w / 2) - +(w % 2 === 0);

         if (_Mtx[_BY] <= u)
            {
            u += v;
            }
         else
            {
            u = _Mtx[_BY] + v;
            }

         v = _H - w + _FLOOR(w / 2);
         _SCALE([_Mtx[_BX], u > v ? v : u]);
         }
      else if (_Scrl === _R)
         {
         if (_Sd < 4)
            {
            ++ _Sd;
            v = +(_Sd % 2 !== 0) * _Sd;
            }
         else if (_Sd < 128)
            {
            _Sd += 3;
            v = _Sd;
            }
         else
            {
            _Sd = 128;
            v = _Sd;
            }

         w = _FLOOR(_Cw / _Mg);
         u = _FLOOR(w / 2) - +(w % 2 === 0);

         if (_Mtx[_BX] <= u)
            {
            u += v;
            }
         else
            {
            u = _Mtx[_BX] + v;
            }

         v = _W - w + _FLOOR(w / 2);
         _SCALE([u > v ? v : u, _Mtx[_BY]]);
         }

      _Cdt_t = _TLSLT(_Cx, _Cy, false);

      if (4 <= _Cx && _Cx < _Cw + 4
            && _O_cdt <= _Cy && _Cy < _Ch + _O_cdt
            && _GETVALUE(_CDT, _VISIBILITY) !== _HIDDEN)
         {
         _Cdt_a = true;
         _SETVALUE(_POS_XY,
            _INNERHTML, _Cdt_t[_X] + _COMMA + _Cdt_t[_Y]);
         }
      else
         {
         _Cdt_a = false;
         _SETVALUE(_POS_XY,
            _INNERHTML, _OUT);
         }

      if (_Rd !== _Dt)
         {
         if (_Ctl)
            {
            if (_Auto)
               {
               _SETVALUE(_CDT,
                  _CURSOR, _Curimg[_CUR_PTR(_Cx, _Cy)], _PNGCUROFFSET1, _PNGCUROFFSET1);
               }
            }
         else if (_Cur === 1)
            {
            if (! _Plt && _Lm === _LSL)
               {
               v = _TLSLT(_Cx, _Cy, true);
               u = _Rl[_Rn];
               u[_TS] = _CHVAL(_GETVAL(_RULE_TS), _Clp[_B], 0);
               u[_LS] = _CHVAL(_GETVAL(_RULE_LS), _Clp[_R], 0);
               u[_BS] = _CHVAL(_GETVAL(_RULE_BS), _Clp[_B] - u[_TS], 0);
               u[_RS] = _CHVAL(_GETVAL(_RULE_RS), _Clp[_R] - u[_LS], 0);
               u[_CX] = _CHVAL(v[_X] - _Sdx, _Clp[_R] - u[_RS], u[_LS]);
               u[_CY] = _CHVAL(v[_Y] - _Sdy, _Clp[_B] - u[_BS], u[_TS]);
               _SETVAL(_RULE_CX, u[_CX]);
               _SETVAL(_RULE_CY, u[_CY]);
               _SETVAL(_RULE_TS, u[_TS]);
               _SETVAL(_RULE_LS, u[_LS]);
               _SETVAL(_RULE_BS, u[_BS]);
               _SETVAL(_RULE_RS, u[_RS]);
               _SWLB();
               }
            else if (_Pen === _P_RECT)
               {
               w = _TLSLT(_Cx, _Cy, true);
               x = _Rf[_X] - _Rs[_X];
               v = _Clp[_R] - x;
               u = w[_X] - _Sdx;
               u = u < 0 ? 0 : u > v ? v : u;
               _Rs[_X] = u;
               _Rf[_X] = u + x;
               x = _Rf[_Y] - _Rs[_Y];
               v = _Clp[_B] - x;
               u = w[_Y] - _Sdy;
               u = u < 0 ? 0 : u > v ? v : u;
               _Rs[_Y] = u;
               _Rf[_Y] = u + x;
               _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);
               _BLEND();
               _COPY();
               _SCALE([_Mtx[_BX], _Mtx[_BY]]);
               }
            }
         else if (_Cur > 1)
            {
            if (! _Plt && _Lm === _LSL)
               {
               v = _TLSLT(_Cx, _Cy, true);
               u = _Rl[_Rn];
               u[_CX] = _CHVAL(_GETVAL(_RULE_CX), _Clp[_R], 0);
               u[_CY] = _CHVAL(_GETVAL(_RULE_CY), _Clp[_B], 0);
               u[_TS] = _CHVAL(_Cur === 2 || _Cur === 3 || _Cur === 9 ?
                  -(v[_Y] - _Sdy - u[_CY]) : _GETVAL(_RULE_TS), u[_CY], 0);
               u[_LS] = _CHVAL(_Cur === 3 || _Cur === 4 || _Cur === 5 ?
                  -(v[_X] - _Sdx - u[_CX]) : _GETVAL(_RULE_LS), u[_CX], 0);
               u[_BS] = _CHVAL(_Cur === 5 || _Cur === 6 || _Cur === 7 ?
                  v[_Y] - _Sdy - u[_CY] : _GETVAL(_RULE_BS), _Clp[_B] - u[_CY], 0);
               u[_RS] = _CHVAL(_Cur === 7 || _Cur === 8 || _Cur === 9 ?
                  v[_X] - _Sdx - u[_CX] : _GETVAL(_RULE_RS), _Clp[_R] - u[_CX], 0);
               _SETVAL(_RULE_CX, u[_CX]);
               _SETVAL(_RULE_CY, u[_CY]);
               _SETVAL(_RULE_TS, u[_TS]);
               _SETVAL(_RULE_LS, u[_LS]);
               _SETVAL(_RULE_BS, u[_BS]);
               _SETVAL(_RULE_RS, u[_RS]);
               _SWLB();
               }
            else if (_Pen === _P_RECT)
               {
               if (_Rect)
                  {
                  u = _TLSLT(_Cx, _Cy, true);
                  v = u[_X] - _Sdx;

                  if (_Cur === 3 || _Cur === 4 || _Cur === 5)
                     {
                     _Rs[_X] = v < 0 ? 0 : v > _Rf[_X] ? _Rf[_X] : v;
                     }
                  else if (_Cur === 7 || _Cur === 8 || _Cur === 9)
                     {
                     _Rf[_X] = v < _Rs[_X] ? _Rs[_X] : v > _Clp[_R] ? _Clp[_R] : v;
                     }

                  w = u[_Y] - _Sdy;

                  if (_Cur === 2 || _Cur === 3 || _Cur === 9)
                     {
                     _Rs[_Y] = w < 0 ? 0 : w > _Rf[_Y] ? _Rf[_Y] : w;
                     }
                  else if (_Cur === 5 || _Cur === 6 || _Cur === 7)
                     {
                     _Rf[_Y] = w < _Rs[_Y] ? _Rs[_Y] : w > _Clp[_B] ? _Clp[_B] : w;
                     }

                  _RECT(_Rs, _Rf, true);
                  _SCALE([_Mtx[_BX], _Mtx[_BY]]);
                  }
               else
                  {
                  u = _TLSLT(_Cx, _Cy, true);
                  v = u[_X] - _Sdx;
                  v = v < 0 ? 0 : v > _Clp[_R] ? _Clp[_R] : v;
                  w = u[_Y] - _Sdy;
                  w = w < 0 ? 0 : w > _Clp[_B] ? _Clp[_B] : w;
                  u = [v, w];
                  v = [];
                  w = [];
                  v[_X] =
                     _Rect_o[_X] <= u[_X] ?
                        _Rect_o[_Y] <= u[_Y] ?
                           (w[_Y] = u[_Y] , w[_X] = u[_X] , v[_Y] = _Rect_o[_Y] , _Rect_o[_X])
                        :
                           (w[_Y] = _Rect_o[_Y] , w[_X] = u[_X] , v[_Y] = u[_Y] , _Rect_o[_X])
                     :
                        _Rect_o[_Y] <= u[_Y] ?
                           (w[_Y] = u[_Y] , w[_X] = _Rect_o[_X] , v[_Y] = _Rect_o[_Y] , u[_X])
                        :
                           (w[_Y] = _Rect_o[_Y] , w[_X] = _Rect_o[_X] , v[_Y] = u[_Y] , u[_X]);
                  _RECT(v, w, true);
                  _SCALE([_Mtx[_BX], _Mtx[_BY]]);
                  }
               }
            }

         u = _Rf[_X] - _Rs[_X];
         u = u < 0 ? -(u - 1)  : u + 1;
         v = _Rf[_Y] - _Rs[_Y];
         v = v < 0 ? -(v - 1) : v + 1;
         _SETVALUE(_RECT_WH,
            _INNERHTML, _RECT_L + u + _COMMA + v + _RECT_R);
         }
      else if (_Line_o !== _NULL)
         {
         _LINE(_Line_o, _Cdt_t);
         _BLEND();
         _SCALE([_Mtx[_BX], _Mtx[_BY]]);
         u = _Cdt_t[_X] - _Line_o[_X];
         u = u < 0 ? -(u - 1)  : u + 1;
         v = _Cdt_t[_Y] - _Line_o[_Y];
         v = v < 0 ? -(v - 1) : v + 1;
         _SETVALUE(_RECT_WH,
            _INNERHTML, _RECT_L + u + _COMMA + v + _RECT_R);
         }
      else
         {
         _SETVALUE(_RECT_WH,
            _INNERHTML, _OUT2);
         }
      }
   };

var _EXCEPTION = function (E_)
   {
   throw (E_);
   };

var _KEYDOWN_FUNC = function (K_)
   {
   if (K_ === 83)
      {
      _PLTFNLB_FUNC();
      }
   else if (K_ === 65)
      {
      _EXTRCT(true);
      }
   else if (K_ === 68)
      {
      _EXTRCT(false);
      }
   else if (K_ === 69)
      {
      if (_Flk && _Pen >= _P_LINE && _Ctl
            && _Rd !== _Dt && (! _Plt && _Lm === _LSL || _Rect))
         {
         _Cu = true;
         _Auto = true;
         _Cur = 0;
         _SWCMD();
         }
      }
   else if (K_ === 87)
      {
      _CMD_CUR_FUNC();
      }
   else if (K_ >= 48 && K_ <= 57)
      {
      if (_Flk && _Pen >= _P_LINE)
         {
         _Cu = true;
         _Mg = K_ === 48 ? 10 : K_ - 48;
         _CAST();

         if (_Cdt_a)
            {
            _SCALE([_Cdt_t[_X], _Cdt_t[_Y]]);
            }
         else
            {
            _SCALE([_Mtx[_BX], _Mtx[_BY]]);
            }
         }
      }
   else if (K_ >= 37 && K_ <= 40)
      {
      if (_Flk && _Pen >= _P_LINE && _Ctl && _Scrl === _EOF)
         {
         _Cu = true;
         _Scrl = K_ === 37 ? _L : K_ === 38 ? _T : K_ === 39 ? _R : _B;
         _Sd = 0;
         }
      }
   else if (K_ === 66)
      {
      if (_Flk)
         {
         nw.mScrollNwZoom(true);
         }
      }
   else if (K_ === 78)
      {
      if (_Flk)
         {
         nw.mScrollNwZoom();
         }
      }
   };

var _KEYUP_FUNC = function (K_)
   {
   if (K_ >= 37 && K_ <= 40)
      {
      _Scrl = _EOF;
      }
   else if (K_ === 76)
      {
      if (_Flk)
         {
         nw.mScrollNwOpen("fltdw.htm", 900, 675);
         }
      }
   };

var _SAVEFLTDW_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE)
      {
      _Pen = _P_FILE_ACCESS;
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _TOP, 15 + 17 * 2 + 6 * 2 - 2 - 1,
         _DISPLAY, _NULL);
      _SAVE();
      }
   };

var _SAVEPNG_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE)
      {
      _Pen = _P_FILE_ACCESS;
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _TOP, 15 + 17 * 5 + 6 * 2 - 2 - 1,
         _DISPLAY, _NULL);
      _SPLIT(true, 0);
      }
   };

var _SAVEPNG2_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE)
      {
      _Pen = _P_FILE_ACCESS;
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _TOP, 15 + 17 * 6 + 6 * 2 + 8 - 2 - 1,
         _DISPLAY, _NULL);
      _SPLIT(false, 0);
      }
   };

var _SAVEJPG_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE)
      {
      _Pen = _P_JPG;
      _SETVAL(_JPGQC, _CHVAL(_Qc, 100, 1));
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _NULL);
      _SETVALUE(_JPGBOX,
         _VISIBILITY, _NULL);
      }
   };

var _JPGQC_FUNC = function ()
   {
   if (! _Flk && _Pen === _P_JPG)
      {
      _SETVAL(_JPGQC, _CHVAL(_GETVAL(_JPGQC), 100, 1));
      }

   _Flk = true;
   };

var _JPGMAKE_FUNC = function ()
   {
   if (_Flk && _Pen === _P_JPG)
      {
      _Pen = _P_FILE_ACCESS;
      _SETVALUE(_JPGBOX,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _TOP, 15 + 17 * 7 + 6 * 2 + 8 * 2 - 2 - 1,
         _DISPLAY, _NULL);
      _SPLIT(true, _CHVAL(_GETVAL(_JPGQC), 100, 1));
      }
   };

var _SAVEFD_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE)
      {
      _Pen = _P_FILE_ACCESS;
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _TOP, 15 + 17 * 8 + 6 * 2 + 8 * 3 - 2 - 1,
         _DISPLAY, _NULL);
      _SAVE2();
      }
   };

var _SETCRYPTO_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE)
      {
      _Pen = _P_CRYPTO;
      _SETVAL(_CRYPTOPW, _EMPTY);
      _SETVALUE(_CRYPTOPW,
         _COLOR, _WHITE);
      _SETVALUE(_CRYPTOCOL,
         _INNERHTML, _SWSTR[0]);
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _NULL);
      _SETVALUE(_CRYPTOBOX,
         _VISIBILITY, _NULL);
      }
   };

var _CRYPTOPW_FUNC = function ()
   {
   if (! _Flk && _Pen === _P_CRYPTO)
      {
      }

   _Flk = true;
   };

var _CRYPTOCOL_FUNC = function ()
   {
   var u;

   if (_Flk && _Pen === _P_CRYPTO)
      {
      u = _GETVALUE(_CRYPTOPW, _COLOR) === _WHITE;
      _SETVALUE(_CRYPTOPW,
         _COLOR, u ? _NULL : _WHITE);
      _SETVALUE(_CRYPTOCOL,
         _INNERHTML, _SWSTR[u ? 1 : 0]);
      }
   };

var _CRYPTOZCMP_FUNC = function ()
   {
   if (_Flk && _Pen === _P_CRYPTO)
      {
      _Zcmp = ! _Zcmp;
      _SETVALUE(_CRYPTOZCMP,
         _INNERHTML, _ZCMPSTR[+_Zcmp]);
      }
   };

var _CRYPTOSTORE_FUNC = function ()
   {
   if (_Flk && _Pen === _P_CRYPTO)
      {
      ++ _Store;

      if (_Store >= _STORESTR[_LENGTH])
         {
         _Store = 0;
         }

      _SETVALUE(_CRYPTOSTORE,
         _INNERHTML, _STORESTR[_Store]);
      }
   };

var _CRYPTORCRC_FUNC = function ()
   {
   if (_Flk && _Pen === _P_CRYPTO)
      {
      ++ _Rcrc;

      if (_Rcrc >= _RCRCSTR[_LENGTH])
         {
         _Rcrc = 0;
         }

      _SETVALUE(_CRYPTORCRC,
         _INNERHTML, _RCRCSTR[_Rcrc]);

      if (_Rcrc < 4)
         {
         _NTH_ELEMENT(_DECRYPTOFILE)[_ACCEPT] = _ZIPSTR;
         }
      else
         {
         _NTH_ELEMENT(_DECRYPTOFILE)[_ACCEPT] = _EMPTY;
         }
      }
   };

var _CRYPTOCS_FUNC = function ()
   {
   if (_Flk && _Pen === _P_CRYPTO)
      {
      ++ _Cs;

      if (_Cs >= _CHARSETSTR[_LENGTH])
         {
         _Cs = 0;
         }

      _INTF.sjis = _Cs !== 2;
      _SETVALUE(_CRYPTOCS,
         _INNERHTML, _CHARSETSTR[_Cs]);
      }
   };

var _CRYPTOZIDX_FUNC = function ()
   {
   if (! _Flk && _Pen === _P_CRYPTO)
      {
      _Zidx = _CHVAL(_GETVAL(_CRYPTOZIDX), 0xFFFF, 0);
      _SETVAL(_CRYPTOZIDX, _Zidx);
      }

   _Flk = true;
   };

var _CRYPTOSET_FUNC = function ()
   {
   if (_Flk && _Pen === _P_CRYPTO)
      {
      _Pen = _P_FILE;
      _Pw = _UTF8(_GETVAL(_CRYPTOPW));

      if (_Pw[_LENGTH] === 0)
         {
         _Pw = _NULL;
         _Ks = _NULL;
         }
      else
         {
         _Ks = [];
         _KS(_Ks);
         _CIPHER(_Pw, _Ks);
         }

      _SETVAL(_CRYPTOPW, _EMPTY);
      _SETVALUE(_CRYPTOPW,
         _COLOR, _WHITE);
      _SETVALUE(_CRYPTOCOL,
         _INNERHTML, _SWSTR[0]);
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CRYPTOBOX,
         _VISIBILITY, _HIDDEN);

      if (_Pw === _NULL)
         {
         _SETVALUE(_AESCRYPTO,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_DECRYPTO,
            _VISIBILITY, _HIDDEN);
         }
      else
         {
         _SETVALUE(_AESCRYPTO,
            _VISIBILITY, _NULL);
         _SETVALUE(_DECRYPTO,
            _VISIBILITY, _NULL);
         }
      }
   };

var _SAVEICO_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE)
      {
      _Pen = _P_FILE_ACCESS;
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _TOP, 15 + 17 * 17 + 6 * 2 + 8 * 6 - 2 - 1,
         _DISPLAY, _NULL);
      _Mode = 12;
      }
   };

var _SAVECUR_FUNC = function ()
   {
   if (_Flk && _Pen === _P_FILE)
      {
      _Pen = _P_FILE_ACCESS;
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVESTATUS,
         _VISIBILITY, _NULL);
      _SETVALUE(_SAVEAS,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _TOP, 15 + 17 * 18 + 6 * 2 + 8 * 7 - 2 - 1,
         _DISPLAY, _NULL);
      _Mode = 13;
      }
   };

var _SAVEAS_FUNC = function ()
   {
   if (_Flk && _Pen === _P_SAVE)
      {
      _Pen = _P_FILE;
      _SETVALUE(_POPUPCOV,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _DISPLAY, _NONE);
      _MS_DOWNLOAD();
      }
   else
      {
      return (false);
      }
   };

var _FLTDWFILE_FUNC = function ()
   {
   var u;

   if (_Flk && (_Pen === _P_NEW || _Pen === _P_FILE) && _READY())
      {
      u = _FILE(_FLTDWFILE);

      if (u !== _NULL)
         {
         _Pen = _P_FILE_ACCESS;
         _REGISTER_READER(_FLTDWFILE_PARSER);
         _READ(u);
         }
      }

   _CLEAR(_FLTDWFILE);
   };

var _PNGFILE_FUNC = function ()
   {
   var u;

   if (_Flk && _Pen >= _P_LINE && _Ctl && ! _Plt && _Lm !== _LSL && _READY())
      {
      u = _FILE(_PNGFILE);

      if (u !== _NULL)
         {
         if (_Pen !== _P_EXTRCT)
            {
            _Penbuf = _Pen;
            }

         _Pen = _P_FILE_ACCESS;
         _REGISTER_READER(_PNGFILE_PARSER);
         _READ(u);
         }
      }

   _CLEAR(_PNGFILE);
   };

var _IMGFILE_FUNC = function ()
   {
   var u;

   if (_Flk && _Pen >= _P_LINE && _Ctl && ! _Plt && _Lm !== _LSL && _READY())
      {
      u = _FILE(_IMGFILE);

      if (u !== _NULL)
         {
         if (_Pen !== _P_EXTRCT)
            {
            _Penbuf = _Pen;
            }

         _Pen = _P_FILE_ACCESS;
         _REGISTER_PARSER(_IMGFILE_PARSER);
         _PARSE(u);
         }
      }

   _CLEAR(_IMGFILE);
   };

var _BASE64TXTFILE_FUNC = function ()
   {
   var u;

   if (_Flk && _Pen === _P_FILE && _READY())
      {
      u = _FILE(_BASE64TXTFILE);

      if (u !== _NULL)
         {
         _Pen = _P_FILE_ACCESS;
         _REGISTER_READER(_BASE64TXT_PROC);
         _READ(u);
         }
      }

   _CLEAR(_BASE64TXTFILE);
   };

var _AESCRYPTOFILE_FUNC = function ()
   {
   var u;

   if (_Flk && _Pen === _P_FILE && _Pw !== _NULL && _READY())
      {
      u = _FILE(_AESCRYPTOFILE);

      if (u !== _NULL)
         {
         _Pen = _P_FILE_ACCESS;
         _REGISTER_READER(_AESCRYPTO_PROC);
         _READ(u);
         }
      }

   _CLEAR(_AESCRYPTOFILE);
   };

var _DECRYPTOFILE_FUNC = function ()
   {
   var u;

   if (_Flk && _Pen === _P_FILE && _Pw !== _NULL && _READY())
      {
      u = _FILE(_DECRYPTOFILE);

      if (u !== _NULL)
         {
         _Pen = _P_FILE_ACCESS;
         _REGISTER_READER(_DECRYPTO_PROC);
         _READ(u);
         }
      }

   _CLEAR(_DECRYPTOFILE);
   };

var _ICPASTE_FUNC = function ()
   {
   if (_Flk && _Pen >= _P_LINE && _Ctl && ! _Plt && _Lm !== _LSL
         && _Cpy !== _NULL)
      {
      _STORE(_Fp);

      if (_Pen !== _P_RECT || _Rd === _Dt)
         {
         _Pen = _P_RECT;
         _Rs = [_Mtx[_X], _Mtx[_Y]];
         }

      _Rect_b = false;
      _Rect_d = false;
      _Rf = [_Rs[_X] + _Cpy_w - 1, _Rs[_Y] + _Cpy_h - 1];
      _Rf[_X] = _Rf[_X] > _Clp[_R] ? _Clp[_R] : _Rf[_X];
      _Rf[_Y] = _Rf[_Y] > _Clp[_B] ? _Clp[_B] : _Rf[_Y];
      _Rect_s = [_Rs[_X], _Rs[_Y]];
      _Rect_f = [_Rf[_X], _Rf[_Y]];

      if (_CNVT(_Cpy, _Cpy_w,
            _Rf[_X] - _Rs[_X] + 1, _Rf[_Y] - _Rs[_Y] + 1, 3 + +_Fa))
         {
         _Rect = true;
         _Auto = true;
         _Cur = 0;
         _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);

         if (_Fp)
            {
            _DWCS();
            _DWPT();
            }

         _BLEND();
         _RECT(_Rs, _Rf, true);
         }
      else
         {
         _Rd = _Dt;
         _Tmp = _NULL;
         }

      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWCMD();
      }
   };

var _SELECTALL_FUNC = function ()
   {
   var s;
   var t;

   if (_Flk && _Pen >= _P_LINE && _Ctl && ! _Plt && _Lm !== _LSL)
      {
      _Pen = _P_RECT;
      _RECT([0, 0], [_Clp[_R], _Clp[_B]], true);
      _Rect = true;
      _Rect2 = 0;
      _Cur = 0;
      _Auto = true;
      _Rect_b = true;
      _Rect_s = [_Rs[_X], _Rs[_Y]];
      _Rect_f = [_Rf[_X], _Rf[_Y]];
      _Tmp_w = _Rf[_X] - _Rs[_X] + 1;
      _Tmp_h = _Rf[_Y] - _Rs[_Y] + 1;
      _Tmp = new _UINT8ARRAY(_Fp ? _Tmp_w * _Tmp_h : _Tmp_w * _Tmp_h * (_Fa ? 4 : 3));
      s = [_Rs[_X], _Rs[_Y]];
      t = [0, 0];

      for (; s[_Y] <= _Rf[_Y]; ++ s[_Y] , ++ t[_Y])
         {
         for (; s[_X] <= _Rf[_X]; ++ s[_X] , ++ t[_X])
            {
            _PLOT2(_Tmp, _Tmp_w, t, _GETPX(_Lyr[_Lp], _W, s, _NULL));
            }

         s[_X] = _Rs[_X];
         t[_X] = 0;
         }

      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWCMD();
      }
   };

var _FLTDWFILE_PARSER = function (Filename_, Fltdw_)
   {
   if (_Pen === _P_FILE_ACCESS)
      {
      if (Filename_ !== _EMPTY && _LOAD(Filename_, Fltdw_))
         {
         }
      else
         {
         _Pen = _New ? _P_FILE : _P_NEW;
         }
      }
   };

var _PNGFILE_PARSER = function (Filename_, Png_)
   {
   var u;

   if (_Pen === _P_FILE_ACCESS)
      {
      _Pen = _Penbuf;
      _STORE(_Fp);
      u = false;

      if (Filename_ !== _EMPTY)
         {
         Png_ = _PARSE_PNG(Png_);

         if (Png_ !== _NULL)
            {
            Png_ = _BM(Png_);

            if (_Pen !== _P_RECT || _Rd === _Dt)
               {
               _Pen = _P_RECT;
               _Rs = [_Mtx[_X], _Mtx[_Y]];
               }

            _Rect_b = false;
            _Rect_d = false;
            _Rf = [_Rs[_X] + Png_[0] - 1, _Rs[_Y] + Png_[1] - 1];
            _Rf[_X] = _Rf[_X] > _Clp[_R] ? _Clp[_R] : _Rf[_X];
            _Rf[_Y] = _Rf[_Y] > _Clp[_B] ? _Clp[_B] : _Rf[_Y];
            _Rect_s = [_Rs[_X], _Rs[_Y]];
            _Rect_f = [_Rf[_X], _Rf[_Y]];
            u = _CNVT(Png_[2], Png_[0],
               _Rf[_X] - _Rs[_X] + 1, _Rf[_Y] - _Rs[_Y] + 1, 4);
            }
         }

      if (u)
         {
         _Rect = true;
         _Auto = true;
         _Cur = 0;
         _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);

         if (_Fp)
            {
            _DWCS();
            _DWPT();
            }

         _BLEND();
         _RECT(_Rs, _Rf, true);
         }
      else
         {
         _Rd = _Dt;
         _Tmp = _NULL;
         }

      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWCMD();
      }
   };

var _IMGFILE_PARSER = function (W_, H_, Bm_)
   {
   var u;

   if (_Pen === _P_FILE_ACCESS)
      {
      _Pen = _Penbuf;
      _STORE(_Fp);
      u = false;

      if (W_ !== 0)
         {
         if (_Pen !== _P_RECT || _Rd === _Dt)
            {
            _Pen = _P_RECT;
            _Rs = [_Mtx[_X], _Mtx[_Y]];
            }

         _Rect_b = false;
         _Rect_d = false;
         _Rf = [_Rs[_X] + W_ - 1, _Rs[_Y] + H_ - 1];
         _Rf[_X] = _Rf[_X] > _Clp[_R] ? _Clp[_R] : _Rf[_X];
         _Rf[_Y] = _Rf[_Y] > _Clp[_B] ? _Clp[_B] : _Rf[_Y];
         _Rect_s = [_Rs[_X], _Rs[_Y]];
         _Rect_f = [_Rf[_X], _Rf[_Y]];
         u = _CNVT(Bm_, W_,
            _Rf[_X] - _Rs[_X] + 1, _Rf[_Y] - _Rs[_Y] + 1, 4);
         }

      if (u)
         {
         _Rect = true;
         _Auto = true;
         _Cur = 0;
         _PUT(_Rect_d, _Rect_s, _Rect_f, _Rs);

         if (_Fp)
            {
            _DWCS();
            _DWPT();
            }

         _BLEND();
         _RECT(_Rs, _Rf, true);
         }
      else
         {
         _Rd = _Dt;
         _Tmp = _NULL;
         }

      _SCALE([_Mtx[_BX], _Mtx[_BY]]);
      _SWCMD();
      }
   };

var _BASE64TXT_PROC = function (Filename_, File_)
   {
   if (_Pen === _P_FILE_ACCESS)
      {
      if (Filename_ !== _EMPTY)
         {
         _Mode = 6;
         _Filename = Filename_;
         _File = File_;
         _SETVALUE(_POPUPCOV,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVESTATUS,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVEAS,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_SAVEBOX,
            _TOP, 15 + 17 * 11 + 6 * 2 + 8 * 3 - 2 - 1,
            _DISPLAY, _NULL);
         }
      else
         {
         _Pen = _P_FILE;
         }
      }
   };

var _AESCRYPTO_PROC = function (Filename_, File_, Filetime_)
   {
   if (_Pen === _P_FILE_ACCESS)
      {
      if (Filename_ !== _EMPTY)
         {
         _Mode = _Rcrc < 4 ? 7 : 14;
         _Filename = Filename_;
         _File = File_;
         _Filetime = Filetime_;
         _SETVALUE(_POPUPCOV,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVESTATUS,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVEAS,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_SAVEBOX,
            _TOP, 15 + 17 * 13 + 6 * 2 + 8 * 5 - 2 - 1,
            _DISPLAY, _NULL);
         }
      else
         {
         _Pen = _P_FILE;
         }
      }
   };

var _DECRYPTO_PROC = function (Filename_, File_)
   {
   if (_Pen === _P_FILE_ACCESS)
      {
      if (Filename_ !== _EMPTY)
         {
         _Mode = _Rcrc < 4 ? 10 : 15;
         _Filename = Filename_;
         _File = File_;
         _SETVALUE(_POPUPCOV,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVESTATUS,
            _VISIBILITY, _NULL);
         _SETVALUE(_SAVEAS,
            _VISIBILITY, _HIDDEN);
         _SETVALUE(_SAVEBOX,
            _TOP, 15 + 17 * 14 + 6 * 2 + 8 * 6 - 2 - 1,
            _DISPLAY, _NULL);
         }
      else
         {
         _Pen = _P_FILE;
         }
      }
   };

var _FUNLOCK = function (T)
   {
   T = T[_TARGET];

   if (_Flk || T[_TAGNAME] !== _INPUT || T[_TYPE] !== _TEXT)
      {
      return (false);
      }
   };

fltdw.load = function ()
   {
   var u;
   var v;
   var w;
   var x;
   var y;
   var z;
   var r;
   var q;
   var p;
   var o;
   var l;
   var j;
   var i;
   var h;
   var g;
   var t;
   var e;
   var f;
   var s;

   if (_Load)
      {
      _Load = false;

      v = _SPAN(_TYPE_IX, "パレット");
      v += _IMG(_A_ICO1);
      v += _SPAN(_TYPE_IX_A, "透明度付きパレット");
      v += _SPAN(_TYPE_TR, _COLTYPESTR[2]);
      v += _IMG(_A_ICO2);
      v += _SPAN(_TYPE_TR_A, "透明度付き True Color");

      o = "新規作成しますか？";
      o += "<br>変更は保存されません";
      s = _SPAN(_NEWMSG, o);
      s += _SPAN(_NEWMSG_N, "いいえ");
      s += _SPAN(_NEWMSG_Y, "はい");

      t = _SPAN(_JPGQCLB, "品質:");
      t += _INPUT_TEXT(_JPGQC);
      t += _SPAN(_JPGMAKE, "作成");

      f = _SPAN(_CRYPTOPWLB, "パスワード:");
      f += _INPUT_TEXT(_CRYPTOPW);
      f += _SPAN(_CRYPTOCOL, "");
      f += _SPAN(_CRYPTOZCMPLB, "ファイルの圧縮:");
      f += _SPAN(_CRYPTOZCMP, "");
      f += _SPAN(_CRYPTOSTORELB, "ファイルの情報:");
      f += _SPAN(_CRYPTOSTORE, "");
      f += _SPAN(_CRYPTORCRCLB, "暗号化の方法:");
      f += _SPAN(_CRYPTORCRC, "");
      f += _SPAN(_CRYPTOCSLB, "文字エンコード:");
      f += _SPAN(_CRYPTOCS, "");
      f += _SPAN(_CRYPTOZIDXLB, "復号エントリ:");
      f += _INPUT_TEXT(_CRYPTOZIDX);
      f += _SPAN(_CRYPTOSET, "パスワードを設定する");

      x = _SPAN(_SAVESTATUS, "ファイルを作成しています");
      x += _A(_SAVEAS, "名前を付けて保存");

      w = _SPAN(_CTYPELB, "色の構成方法:");
      w += _SPAN(_CTYPELB1, "色の構成方法を選択してください。[新規作成] から開始します");
      w += _SPAN(_CTYPELB2, "この fltDw では、以下の方法で色が構成されています");
      w += _IMG(_A_ICOCTY);
      w += _SPAN(_CTYPE, "True Color");
      o = "<br>■　編集時の色数が未定の場合、True Color を選択してください";
      o += "<br>■　透明/半透明を使用する場合、透明度付きを選択してください";
      o += "<br><br>注意:　この項目は後で変更することができません";
      w += _SPAN(_CTYPELB22, o);
      w += _SPAN(_PLT_OPT, "パレットの最適化");

      e = _SPAN(_CVSSIZELB, "キャンバスの大きさ:");
      o = "キャンバスの大きさを変更する場合は、以下の値を書き換えて";
      o += "<br>[変更] を押下してください";
      e += _SPAN(_CVSSIZELB2, o);
      e += _SPAN(_CVSSIZE_WLB, "幅:");
      e += _INPUT_TEXT(_CVSSIZE_W);
      e += _SPAN(_CVSSIZE_HLB, "高さ:");
      e += _INPUT_TEXT(_CVSSIZE_H);
      e += _SPAN(_CVSSIZE, "変更");

      e += _IMG(_A_ICOBGC);
      e += _SPAN(_BGCOLORLB, "合成用の基礎色:");
      o = "PNG の生成時、各レイヤーは次の色から順番に合成されます。";
      o += "<br>フレームの余白もこの色で塗りつぶされます";
      o += "<br>■　非表示のレイヤーは合成されません";
      e += _SPAN(_BGCOLORLB2, o);
      e += _CANVAS(_BGCOLOR);
      e += _SPAN(_BGCOLORNUM, "#FFFFFFFF");

      e += _SPAN(_PNGTYPELB, "カラータイプ:");
      o = "PNG の色を構成する方法を選択してください。";
      o += "<br>色数は合成によって変動するため、パレットを指定する場合は";
      o += "<br>その数が 256 以下となるように編集する必要があります";
      e += _SPAN(_PNGTYPELB2, o);
      e += _IMG(_A_ICOPNG);
      e += _SPAN(_PNGTYPE, "True Color");

      e += _SPAN(_FRMSIZELB, "フレームのレイアウト:");
      o = "PNG は、罫線によって分割されたフレームとして出力されます";
      o += "<br>■　フレームの中心点は、罫線のものと一致しています";
      e += _SPAN(_FRMSIZELB2, o);
      e += _IMG(_FRMSIZEIMG);
      e += _INPUT_TEXT(_FRMSIZE_TS);
      e += _INPUT_TEXT(_FRMSIZE_LS);
      e += _INPUT_TEXT(_FRMSIZE_BS);
      e += _INPUT_TEXT(_FRMSIZE_RS);
      e += _SPAN(_FRMSIZE_CAST, "罫線領域の最大値を使用");

      w += _SPAN(_FILECMD, e);

      w += _SPAN(_NEWFLTDW, "新規作成");
      w += _LABEL(_OPENFLTDW, _FLTDWFILE, "開く");
      w += _SPAN(_SAVEFLTDW, "fltDw を保存");
      w += _SPAN(_SAVEPNG, "PNG を保存");
      w += _SPAN(_SAVEPNG2, "非圧縮で保存");
      w += _SPAN(_SAVEJPG, "JPEG 保存");
      w += _SPAN(_SAVEFD, "fltDw を圧縮");
      w += _LABEL(_BASE64TXT, _BASE64TXTFILE, "Base64 変換");
      w += _SPAN(_SETCRYPTO, "暗号化の設定");
      w += _LABEL(_AESCRYPTO, _AESCRYPTOFILE, "暗号化");
      w += _LABEL(_DECRYPTO, _DECRYPTOFILE, "復号");
      w += _SPAN(_SAVEICO, "ICO を作成");
      w += _SPAN(_SAVECUR, "CUR を作成");

      w += _IMG(_POPUPCOV);
      w += _SPAN(_TYPEBOX, v);
      w += _SPAN(_NEWBOX, s);
      w += _SPAN(_JPGBOX, t);
      w += _SPAN(_CRYPTOBOX, f);
      w += _SPAN(_SAVEBOX, x);

      h = _CANVAS(_COLORS);
      h += _SPAN(_R_COLLB, "R:");
      h += _INPUT_TEXT(_R_COL);
      h += _SPAN(_G_COLLB, "G:");
      h += _INPUT_TEXT(_G_COL);
      h += _SPAN(_B_COLLB, "B:");
      h += _INPUT_TEXT(_B_COL);
      h += _SPAN(_H_COLLB, "H:");
      h += _INPUT_TEXT(_H_COL);
      h += _SPAN(_S_COLLB, "S:");
      h += _INPUT_TEXT(_S_COL);
      h += _SPAN(_L_COLLB, "L:");
      h += _INPUT_TEXT(_L_COL);
      h += _IMG(_A_ICOCOL);
      h += _SPAN(_A_COLLB, "a:");
      h += _INPUT_TEXT(_A_COL);
      h += _SPAN(_HEX_COLLB, "#");
      h += _INPUT_TEXT(_HEX_COL);
      h += _SPAN(_COLCHANGE, "変更");
      h += _SPAN(_COLADD, "追加");
      h += _SPAN(_DISCARD, "閉じる");
      h += _SPAN(_UNDO, "元に戻す");

      y = _SPAN(_COLORTITLE, "色の編集");
      y += _IMG(_HUE_SAT_PTR);
      y += _CANVAS(_HUE_SAT);
      y += _IMG(_LUM_PTR);
      y += _CANVAS(_LUMGAUGE);
      y += _SPAN(_COLORFORM, h);

      z = _SPAN(_PLTLB, "パレット");
      z += _CANVAS(_PLTCVS);
      z += _IMG(_PLTFN);
      z += _SPAN(_PLTFNLB, "描画色と背景色を交換");

      i = _IMG(_CMD_COPY);
      i += _IMG(_CMD_PASTE);
      i += _IMG(_CMD_DEL);
      i += _IMG(_CMD_ROTATE);
      i += _IMG(_CMD_HZ);
      i += _IMG(_CMD_VT);
      i += _IMG(_CMD_PLUS);
      i += _IMG(_CMD_MINUS);
      i += _IMG(_CMD32);
      i += _IMG(_CMD64);
      i += _IMG(_CMD_CUR);

      g = _SPAN(_BTNS_CMD, i);
      g += _SPAN(_POS_XY, _OUT);
      g += _SPAN(_RECT_WH, _OUT2);
      g += _IMG(_BTN_FILL);
      g += _IMG(_BTN_LINE);
      g += _IMG(_BTN_RECT);
      g += _CANVAS(_BTN_COL);
      g += _IMG(_BTN_LYR);
      g += _IMG(_BTN_PLT);
      g += _SPAN(_BUF_NUM, "");
      g += _IMG(_BTN_REDO);
      g += _IMG(_BTN_UNDO);

      r = _IMG(_FLTDWLOGO);
      r += _SPAN(_BTNS, g);
      r += _IMG(_BTN_FILE);

      j = _INPUT_TEXT(_RULENAME);
      j += _IMG(_RECTLAYOUT);
      j += _INPUT_TEXT(_RULE_CX);
      j += _INPUT_TEXT(_RULE_CY);
      j += _INPUT_TEXT(_RULE_TS);
      j += _INPUT_TEXT(_RULE_LS);
      j += _INPUT_TEXT(_RULE_BS);
      j += _INPUT_TEXT(_RULE_RS);
      j += _SPAN(_RULEPREV, "前へ");
      j += _SPAN(_RULENEXT, "次へ");
      j += _SPAN(_RULEINSERT, "挿入");
      j += _SPAN(_RULEDEL, "削除");

      p = _SPAN(_RULES, j);
      p += _SPAN(_RULENO, "");
      p += _INPUT_TEXT(_RULEFORM);
      p += _SPAN(_RULEADD, "追加");
      p += _SPAN(_RULENONE, "罫線がありません");

      l = _SPAN(_LYREDIT, "編集");
      l += _SPAN(_LYRHIDDEN, "非表示");
      l += _SPAN(_LYRVISIBLE, "表示");
      l += _SPAN(_LYRVSLB, "このレイヤーは編集中です");
      l += _SPAN(_LYRFWD, "前面へ移動");
      l += _LABEL(_LYRIMG, _IMGFILE, "画像の貼り付け");
      l += _LABEL(_LYRBM, _PNGFILE, "PNG の貼り付け");
      l += _SPAN(_ICPASTE, "貼り付け");
      l += _SPAN(_SELECTALL, "すべて選択");

      q = _SPAN(_LYRLB, "レイヤーと罫線");
      q += _IMG(_LYRRECTBTN);
      q += _IMG(_LYR1BTN);
      q += _IMG(_LYR2BTN);
      q += _IMG(_LYR3BTN);
      q += _SPAN(_LYRCMD, l);
      q += _SPAN(_LYRRECTBG, p);

      u = _SPAN(_MENUBG, r);
      u += _IMG(_SCL_T);
      u += _SPAN(_SCL_V);
      u += _IMG(_SCL_B);
      u += _IMG(_SCL_L);
      u += _SPAN(_SCL_H);
      u += _IMG(_SCL_R);
      u += _CANVAS(_CDT);
      u += _SPAN(_PLTBG, z);
      u += _SPAN(_LYRBG, q);
      u += _SPAN(_FILEBG, w);
      u += _IMG(_COLORCOV);
      u += _SPAN(_COLORBG, y);

      u += _INPUT_FILE(_FLTDWFILE);
      u += _INPUT_FILE(_PNGFILE);
      u += _INPUT_FILE(_IMGFILE);
      u += _INPUT_FILE(_BASE64TXTFILE);
      u += _INPUT_FILE(_AESCRYPTOFILE);
      u += _INPUT_FILE(_DECRYPTOFILE);

      _FLUSH("fltDw", u, _RESIZE_FUNC);

      _SETVALUE(_TYPE_IX,
         _POSITION, _ABSOLUTE,
         _TOP, 2,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_TYPE_IX)[_ONCLICK] = _TYPE_IX_FUNC;
      _SETVALUE(_A_ICO1,
         _SRC, "img/a.png",
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17,
         _LEFT, 8 + 1);
      _SETVALUE(_TYPE_IX_A,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_TYPE_IX_A)[_ONCLICK] = _TYPE_IX_A_FUNC;
      _SETVALUE(_TYPE_TR,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 2,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_TYPE_TR)[_ONCLICK] = _TYPE_TR_FUNC;
      _SETVALUE(_A_ICO2,
         _SRC, "img/a.png",
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 3,
         _LEFT, 8 + 1);
      _SETVALUE(_TYPE_TR_A,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 3,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_TYPE_TR_A)[_ONCLICK] = _TYPE_TR_A_FUNC;

      _SETVALUE(_NEWMSG,
         _POSITION, _ABSOLUTE,
         _TOP, 2,
         _LEFT, 8);
      _SETVALUE(_NEWMSG_N,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 2,
         _LEFT, 8 + 66 + 44,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_NEWMSG_N)[_ONCLICK] = _NEWMSG_N_FUNC;
      _SETVALUE(_NEWMSG_Y,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 2,
         _LEFT, 8 + 66,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_NEWMSG_Y)[_ONCLICK] = _NEWMSG_Y_FUNC;

      _SETVALUE(_JPGQCLB,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 8,
         _LEFT, 8);
      _SETVALUE(_JPGQC,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_JPGQC,
         2 + 8 - 3,
         8 + 55);
      _SETHDL(_JPGQC, _JPGQC_FUNC);
      _SETVALUE(_JPGMAKE,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 2,
         _LEFT, 8 + 66 + 55,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_JPGMAKE)[_ONCLICK] = _JPGMAKE_FUNC;

      _SETVALUE(_CRYPTOPWLB,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 8,
         _LEFT, 8);
      _SETVALUE(_CRYPTOPW,
         _POSITION, _ABSOLUTE,
         _WIDTH, 235,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_CRYPTOPW,
         2 + 8 - 3,
         8 + 88);
      _SETHDL(_CRYPTOPW, _CRYPTOPW_FUNC);
      _SETVALUE(_CRYPTOCOL,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 8,
         _LEFT, 8 + 66 + 55 + 218,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_CRYPTOCOL)[_ONCLICK] = _CRYPTOCOL_FUNC;
      _SETVALUE(_CRYPTOZCMPLB,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 3 - 8,
         _LEFT, 8);
      _SETVALUE(_CRYPTOZCMP,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 3 - 8,
         _LEFT, 8 + 100,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_CRYPTOZCMP)[_ONCLICK] = _CRYPTOZCMP_FUNC;
      _SETVALUE(_CRYPTOSTORELB,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 4 - 8 + 4,
         _LEFT, 8);
      _SETVALUE(_CRYPTOSTORE,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 4 - 8 + 4,
         _LEFT, 8 + 100,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_CRYPTOSTORE)[_ONCLICK] = _CRYPTOSTORE_FUNC;
      _SETVALUE(_CRYPTORCRCLB,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 5 - 8 + 4 * 2,
         _LEFT, 8);
      _SETVALUE(_CRYPTORCRC,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 5 - 8 + 4 * 2,
         _LEFT, 8 + 100,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_CRYPTORCRC)[_ONCLICK] = _CRYPTORCRC_FUNC;
      _SETVALUE(_CRYPTOCSLB,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 6 - 8 + 4 * 3,
         _LEFT, 8);
      _SETVALUE(_CRYPTOCS,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 6 - 8 + 4 * 3,
         _LEFT, 8 + 100,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_CRYPTOCS)[_ONCLICK] = _CRYPTOCS_FUNC;
      _SETVALUE(_CRYPTOZIDXLB,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 7 + 20,
         _LEFT, 8);
      _SETVALUE(_CRYPTOZIDX,
         _POSITION, _ABSOLUTE,
         _WIDTH, 70,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_CRYPTOZIDX,
         2 + 17 * 7 + 20 - 3,
         8 + 110);
      _SETHDL(_CRYPTOZIDX, _CRYPTOZIDX_FUNC);
      _SETVALUE(_CRYPTOSET,
         _POSITION, _ABSOLUTE,
         _TOP, 2 + 17 * 7 + 20,
         _LEFT, 8 + 66 + 55 + 141,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_CRYPTOSET)[_ONCLICK] = _CRYPTOSET_FUNC;

      _SETVALUE(_SAVESTATUS,
         _POSITION, _ABSOLUTE,
         _TOP, 2,
         _LEFT, 8,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEAS,
         _POSITION, _ABSOLUTE,
         _TOP, 2,
         _LEFT, 8,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _NULL);
      _NTH_ELEMENT(_SAVEAS)[_ONCLICK] = _SAVEAS_FUNC;

      _SETVALUE(_CTYPELB,
         _POSITION, _ABSOLUTE,
         _TOP, 15,
         _LEFT, 140,
         _FONT_WEIGHT, _BOLD);
      _SETVALUE(_CTYPELB1,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17,
         _LEFT, 140,
         _VISIBILITY, _NULL);
      _SETVALUE(_CTYPELB2,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17,
         _LEFT, 140,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_A_ICOCTY,
         _SRC, ("img/na.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 2,
         _LEFT, 140 + 1);
      _SETVALUE(_CTYPE,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 2,
         _LEFT, 140 + 22,
         _COLOR, (_BLUE),
         _TEXT_DECORATION, (_UNDERLINE));
      _NTH_ELEMENT(_CTYPE)[_ONCLICK] = _CTYPE_FUNC;
      _SETVALUE(_CTYPELB22,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 3,
         _LEFT, 140,
         _VISIBILITY, _NULL);
      _SETVALUE(_PLT_OPT,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 3,
         _LEFT, 140 + 145 + 85,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_PLT_OPT)[_ONCLICK] = _PLT_OPT_FUNC;

      _SETVALUE(_CVSSIZELB,
         _POSITION, _ABSOLUTE,
         _TOP, 66 + 28,
         _LEFT, 140,
         _FONT_WEIGHT, _BOLD);
      _SETVALUE(_CVSSIZELB2,
         _POSITION, _ABSOLUTE,
         _TOP, 66 + 28 + 17,
         _LEFT, 140);
      _SETVALUE(_CVSSIZE_WLB,
         _POSITION, _ABSOLUTE,
         _TOP, 66 + 28 + 17 * 3,
         _LEFT, 140);
      _SETVALUE(_CVSSIZE_W,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_CVSSIZE_W,
         66 + 28 + 17 * 3 - 3,
         140 + 25 + 5);
      _SETHDL(_CVSSIZE_W, _CVSSIZE_WH_FUNC);
      _SETVALUE(_CVSSIZE_HLB,
         _POSITION, _ABSOLUTE,
         _TOP, 66 + 28 + 17 * 3,
         _LEFT, 140 + 25 + 5 + 47 + 7);
      _SETVALUE(_CVSSIZE_H,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_CVSSIZE_H,
         66 + 28 + 17 * 3 - 3,
         140 + 25 + 5 + 47 + 7 + 35 + 5);
      _SETHDL(_CVSSIZE_H, _CVSSIZE_WH_FUNC);
      _SETVALUE(_CVSSIZE,
         _POSITION, _ABSOLUTE,
         _TOP, 66 + 28 + 17 * 4,
         _LEFT, 140 + 145 + 150,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_CVSSIZE)[_ONCLICK] = _CVSSIZE_FUNC;

      _SETVALUE(_A_ICOBGC,
         _SRC, "img/a.png",
         _POSITION, _ABSOLUTE,
         _TOP, 162 + 28,
         _LEFT, 140 - 15);
      _SETVALUE(_BGCOLORLB,
         _POSITION, _ABSOLUTE,
         _TOP, 162 + 28,
         _LEFT, 140,
         _FONT_WEIGHT, _BOLD);
      _SETVALUE(_BGCOLORLB2,
         _POSITION, _ABSOLUTE,
         _TOP, 162 + 28 + 17,
         _LEFT, 140);
      _Cbc = _GETDATA(_BGCOLOR, 12, 12);
      _SETVALUE(_BGCOLOR,
         _POSITION, _ABSOLUTE,
         _TOP, 162 + 28 + 17 * 4 + 2,
         _LEFT, 140 + 1);
      _SETVALUE(_BGCOLORNUM,
         _POSITION, _ABSOLUTE,
         _TOP, 162 + 28 + 17 * 4,
         _LEFT, 140 + 22,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_BGCOLORNUM)[_ONCLICK] = _BGCOLORNUM_FUNC;

      _SETVALUE(_PNGTYPELB,
         _POSITION, _ABSOLUTE,
         _TOP, 258 + 28,
         _LEFT, 140,
         _FONT_WEIGHT, _BOLD);
      _SETVALUE(_PNGTYPELB2,
         _POSITION, _ABSOLUTE,
         _TOP, 258 + 28 + 17,
         _LEFT, 140);
      _SETVALUE(_A_ICOPNG,
         _SRC, ("img/na.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 258 + 28 + 17 * 4,
         _LEFT, 140 + 1);
      _SETVALUE(_PNGTYPE,
         _POSITION, _ABSOLUTE,
         _TOP, 258 + 28 + 17 * 4,
         _LEFT, 140 + 22,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_PNGTYPE)[_ONCLICK] = _PNGTYPE_FUNC;

      _SETVALUE(_FRMSIZELB,
         _POSITION, _ABSOLUTE,
         _TOP, 354 + 28,
         _LEFT, 140,
         _FONT_WEIGHT, _BOLD);
      _SETVALUE(_FRMSIZELB2,
         _POSITION, _ABSOLUTE,
         _TOP, 354 + 28 + 17,
         _LEFT, 140);
      _SETVALUE(_FRMSIZEIMG,
         _SRC, "img/layout.png",
         _POSITION, _ABSOLUTE,
         _TOP, 354 + 28 + 17 * 3,
         _LEFT, 140);
      _SETVALUE(_FRMSIZE_TS,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_FRMSIZE_TS,
         354 + 28 + 17 * 3 + 18,
         140 + 77);
      _SETHDL(_FRMSIZE_TS, _FRMSIZE_TLBRS_FUNC);
      _SETVALUE(_FRMSIZE_LS,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_FRMSIZE_LS,
         354 + 28 + 17 * 3 + 42,
         140 + 37);
      _SETHDL(_FRMSIZE_LS, _FRMSIZE_TLBRS_FUNC);
      _SETVALUE(_FRMSIZE_BS,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_FRMSIZE_BS,
         354 + 28 + 17 * 3 + 66,
         140 + 77);
      _SETHDL(_FRMSIZE_BS, _FRMSIZE_TLBRS_FUNC);
      _SETVALUE(_FRMSIZE_RS,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_FRMSIZE_RS,
         354 + 28 + 17 * 3 + 42,
         140 + 116);
      _SETHDL(_FRMSIZE_RS, _FRMSIZE_TLBRS_FUNC);
      _SETVALUE(_FRMSIZE_CAST,
         _POSITION, _ABSOLUTE,
         _TOP,  354 + 28 + 17 * 3 + 110,
         _LEFT, 140 + 145 + 50,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_FRMSIZE_CAST)[_ONCLICK] = _FRMSIZE_CAST_FUNC;

      _SETVALUE(_FILECMD,
         _POSITION, _ABSOLUTE,
         _TOP, 0,
         _LEFT, 0,
         _VISIBILITY, _HIDDEN);

      _SETVALUE(_NEWFLTDW,
         _POSITION, _ABSOLUTE,
         _TOP, 15,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_NEWFLTDW)[_ONCLICK] = _NEWFLTDW_FUNC;
      _SETVALUE(_OPENFLTDW,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 + 6,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _SETVALUE(_SAVEFLTDW,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 2 + 6 * 2,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_SAVEFLTDW)[_ONCLICK] = _SAVEFLTDW_FUNC;
      _SETVALUE(_SAVEPNG,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 5 + 6 * 2,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_SAVEPNG)[_ONCLICK] = _SAVEPNG_FUNC;
      _SETVALUE(_SAVEPNG2,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 6 + 6 * 2 + 8,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_SAVEPNG2)[_ONCLICK] = _SAVEPNG2_FUNC;
      _SETVALUE(_SAVEJPG,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 7 + 6 * 2 + 8 * 2,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_SAVEJPG)[_ONCLICK] = _SAVEJPG_FUNC;
      _SETVALUE(_SAVEFD,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 8 + 6 * 2 + 8 * 3,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_SAVEFD)[_ONCLICK] = _SAVEFD_FUNC;
      _SETVALUE(_BASE64TXT,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 11 + 6 * 2 + 8 * 3,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SETCRYPTO,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 12 + 6 * 2 + 8 * 4,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_SETCRYPTO)[_ONCLICK] = _SETCRYPTO_FUNC;
      _SETVALUE(_AESCRYPTO,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 13 + 6 * 2 + 8 * 5,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_DECRYPTO,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 14 + 6 * 2 + 8 * 6,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEICO,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 17 + 6 * 2 + 8 * 6,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_SAVEICO)[_ONCLICK] = _SAVEICO_FUNC;
      _SETVALUE(_SAVECUR,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 17 * 18 + 6 * 2 + 8 * 7,
         _LEFT, 30,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_SAVECUR)[_ONCLICK] = _SAVECUR_FUNC;

      _SETVALUE(_POPUPCOV,
         _SRC, "img/na.png",
         _POSITION, _ABSOLUTE,
         _TOP, -_BTNS_L - 1,
         _LEFT, 0,
         _Z_INDEX, 1000,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_POPUPCOV)[_ONCLICK] = _POPUPCOV_FUNC;
      _SETVALUE(_TYPEBOX,
         _POSITION, _ABSOLUTE,
         _WIDTH, 215,
         _HEIGHT, 5 + 17 * 3 + 16,
         _TOP, (15 + 17 * 2 - 2 - 1),
         _LEFT, 140 - 8 - 1,
         _BORDER_TOP_WIDTH, 1,
         _BORDER_TOP_STYLE, _SOLID,
         _BORDER_TOP_COLOR, _BLACK,
         _BORDER_RIGHT_WIDTH, 1,
         _BORDER_RIGHT_STYLE, _SOLID,
         _BORDER_RIGHT_COLOR, _BLACK,
         _BORDER_BOTTOM_WIDTH, 1,
         _BORDER_BOTTOM_STYLE, _SOLID,
         _BORDER_BOTTOM_COLOR, _BLACK,
         _BORDER_LEFT_WIDTH, 1,
         _BORDER_LEFT_STYLE, _SOLID,
         _BORDER_LEFT_COLOR, _BLACK,
         _Z_INDEX, 2000,
         _BACKGROUND_COLOR, _WHITE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_NEWBOX,
         _POSITION, _ABSOLUTE,
         _WIDTH, 160,
         _HEIGHT, 5 + 17 * 2 + 16,
         _TOP, 15 - 2 - 1,
         _LEFT, 30 - 8 - 1,
         _BORDER_TOP_WIDTH, 1,
         _BORDER_TOP_STYLE, _SOLID,
         _BORDER_TOP_COLOR, _BLACK,
         _BORDER_RIGHT_WIDTH, 1,
         _BORDER_RIGHT_STYLE, _SOLID,
         _BORDER_RIGHT_COLOR, _BLACK,
         _BORDER_BOTTOM_WIDTH, 1,
         _BORDER_BOTTOM_STYLE, _SOLID,
         _BORDER_BOTTOM_COLOR, _BLACK,
         _BORDER_LEFT_WIDTH, 1,
         _BORDER_LEFT_STYLE, _SOLID,
         _BORDER_LEFT_COLOR, _BLACK,
         _Z_INDEX, 2000,
         _BACKGROUND_COLOR, _WHITE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_JPGBOX,
         _POSITION, _ABSOLUTE,
         _WIDTH, 160,
         _HEIGHT, 5 + 17 * 2 + 16,
         _TOP, 15 + 17 * 7 + 6 * 2 + 8 * 2 - 2 - 1,
         _LEFT, 30 - 8 - 1,
         _BORDER_TOP_WIDTH, 1,
         _BORDER_TOP_STYLE, _SOLID,
         _BORDER_TOP_COLOR, _BLACK,
         _BORDER_RIGHT_WIDTH, 1,
         _BORDER_RIGHT_STYLE, _SOLID,
         _BORDER_RIGHT_COLOR, _BLACK,
         _BORDER_BOTTOM_WIDTH, 1,
         _BORDER_BOTTOM_STYLE, _SOLID,
         _BORDER_BOTTOM_COLOR, _BLACK,
         _BORDER_LEFT_WIDTH, 1,
         _BORDER_LEFT_STYLE, _SOLID,
         _BORDER_LEFT_COLOR, _BLACK,
         _Z_INDEX, 2000,
         _BACKGROUND_COLOR, _WHITE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_CRYPTOBOX,
         _POSITION, _ABSOLUTE,
         _WIDTH, 389,
         _HEIGHT, 5 + 17 * 7 + 16 * 2 + 12,
         _TOP, 15 + 17 * 12 + 6 * 2 + 8 * 4 - 2 - 1,
         _LEFT, 30 - 8 - 1,
         _BORDER_TOP_WIDTH, 1,
         _BORDER_TOP_STYLE, _SOLID,
         _BORDER_TOP_COLOR, _BLACK,
         _BORDER_RIGHT_WIDTH, 1,
         _BORDER_RIGHT_STYLE, _SOLID,
         _BORDER_RIGHT_COLOR, _BLACK,
         _BORDER_BOTTOM_WIDTH, 1,
         _BORDER_BOTTOM_STYLE, _SOLID,
         _BORDER_BOTTOM_COLOR, _BLACK,
         _BORDER_LEFT_WIDTH, 1,
         _BORDER_LEFT_STYLE, _SOLID,
         _BORDER_LEFT_COLOR, _BLACK,
         _Z_INDEX, 2000,
         _BACKGROUND_COLOR, _WHITE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_SAVEBOX,
         _POSITION, _ABSOLUTE,
         _WIDTH, 160,
         _HEIGHT, 5 + 16,
         _TOP, (15 + 17 * 2 + 6 * 2 - 2 - 1),
         _LEFT, 30 - 8 - 1,
         _BORDER_TOP_WIDTH, 1,
         _BORDER_TOP_STYLE, _SOLID,
         _BORDER_TOP_COLOR, _BLACK,
         _BORDER_RIGHT_WIDTH, 1,
         _BORDER_RIGHT_STYLE, _SOLID,
         _BORDER_RIGHT_COLOR, _BLACK,
         _BORDER_BOTTOM_WIDTH, 1,
         _BORDER_BOTTOM_STYLE, _SOLID,
         _BORDER_BOTTOM_COLOR, _BLACK,
         _BORDER_LEFT_WIDTH, 1,
         _BORDER_LEFT_STYLE, _SOLID,
         _BORDER_LEFT_COLOR, _BLACK,
         _Z_INDEX, 2000,
         _BACKGROUND_COLOR, _WHITE,
         _DISPLAY, _NONE);

      _Ccp = _GETDATA(_COLORS, 42, 22);
      _SETVALUE(_COLORS,
         _POSITION, _ABSOLUTE,
         _TOP, 68,
         _LEFT, 0);
      _SETVALUE(_R_COLLB,
         _POSITION, _ABSOLUTE,
         _TOP, 3,
         _LEFT, 50);
      _SETVALUE(_R_COL,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_R_COL,
         3 - 3,
         50 + 25);
      _SETHDL(_R_COL, _RGB_COL_FUNC);
      _SETVALUE(_G_COLLB,
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17,
         _LEFT, 50);
      _SETVALUE(_G_COL,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_G_COL,
         3 + 17 - 3,
         50 + 25);
      _SETHDL(_G_COL, _RGB_COL_FUNC);
      _SETVALUE(_B_COLLB,
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17 * 2,
         _LEFT, 50);
      _SETVALUE(_B_COL,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_B_COL,
         3 + 17 * 2 - 3,
         50 + 25);
      _SETHDL(_B_COL, _RGB_COL_FUNC);
      _SETVALUE(_H_COLLB,
         _POSITION, _ABSOLUTE,
         _TOP, 3,
         _LEFT, 50 + 25 + 47 + 5);
      _SETVALUE(_H_COL,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_H_COL,
         3 - 3,
         50 + 25 + 47 + 5 + 25);
      _SETHDL(_H_COL, _HSL_COL_FUNC);
      _SETVALUE(_S_COLLB,
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17,
         _LEFT, 50 + 25 + 47 + 5);
      _SETVALUE(_S_COL,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_S_COL,
         3 + 17 - 3,
         50 + 25 + 47 + 5 + 25);
      _SETHDL(_S_COL, _HSL_COL_FUNC);
      _SETVALUE(_L_COLLB,
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17 * 2,
         _LEFT, 50 + 25 + 47 + 5);
      _SETVALUE(_L_COL,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_L_COL,
         3 + 17 * 2 - 3,
         50 + 25 + 47 + 5 + 25);
      _SETHDL(_L_COL, _HSL_COL_FUNC);
      _SETVALUE(_A_ICOCOL,
         _SRC, "img/a.png",
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17 * 3,
         _LEFT, 50 + 25 + 47 + 5 - 15);
      _SETVALUE(_A_COLLB,
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17 * 3,
         _LEFT, 50 + 25 + 47 + 5);
      _SETVALUE(_A_COL,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_A_COL,
         3 + 17 * 3 - 3,
         50 + 25 + 47 + 5 + 25);
      _SETHDL(_A_COL, _A_COL_FUNC);
      _SETVALUE(_HEX_COLLB,
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17 * 4,
         _LEFT, 50);
      _SETVALUE(_HEX_COL,
         _POSITION, _ABSOLUTE,
         _WIDTH, 135,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_HEX_COL,
         3 + 17 * 4 - 3,
         50 + 15);
      _SETHDL(_HEX_COL, _HEX_COL_FUNC);
      _SETVALUE(_COLCHANGE,
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17 * 6,
         _LEFT, 0,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_COLCHANGE)[_ONCLICK] = _COLCHANGE_FUNC;
      _SETVALUE(_COLADD,
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17 * 6,
         _LEFT, 45,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _NULL);
      _NTH_ELEMENT(_COLADD)[_ONCLICK] = _COLADD_FUNC;
      _SETVALUE(_DISCARD,
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17 * 6,
         _LEFT, 45 + 45,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_DISCARD)[_ONCLICK] = _DISCARD_FUNC;
      _SETVALUE(_UNDO,
         _POSITION, _ABSOLUTE,
         _TOP, 3 + 17 * 6,
         _LEFT, 45 + 45 + 51,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_UNDO)[_ONCLICK] = _UNDO_FUNC;

      _SETVALUE(_COLORTITLE,
         _POSITION, _ABSOLUTE,
         _TOP, 15 - 2,
         _LEFT, 20,
         _FONT_SIZE, 15,
         _LINE_HEIGHT, 21);
      _SETVALUE(_HUE_SAT_PTR,
         _SRC, "img/sat.png",
         _TOP, (15 + 15 + 10 + 1 + 0 - 8),
         _LEFT, (20 + 1 + 0 - 8),
         _POSITION, _ABSOLUTE,
         _Z_INDEX, 100,
         _CURSOR, _DWCUR, _PNGCUROFFSET1, _PNGCUROFFSET1);
      _NTH_ELEMENT(_HUE_SAT_PTR)[_ONCLICK] = _HUE_SAT_FUNC;
      _Csat = _GETDATA(_HUE_SAT, _HUE_L, _SAT_L);
      _DWSAT(_HUE_L - 2, _SAT_L2);
      _SETVALUE(_HUE_SAT,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10,
         _LEFT, 20,
         _CURSOR, _DWCUR, _PNGCUROFFSET1, _PNGCUROFFSET1);
      _NTH_ELEMENT(_HUE_SAT)[_ONCLICK] = _HUE_SAT_FUNC;
      _SETVALUE(_LUM_PTR,
         _SRC, "img/lum.png",
         _TOP, (15 + 15 + 10 + 1 + 0 - 5),
         _LEFT, 20 + _HUE_L + 9 - 2,
         _POSITION, _ABSOLUTE,
         _Z_INDEX, 100,
         _CURSOR, _DWCUR, _PNGCUROFFSET1, _PNGCUROFFSET1);
      _NTH_ELEMENT(_LUM_PTR)[_ONCLICK] = _LUMGAUGE_FUNC;
      _Clum = _GETDATA(_LUMGAUGE, _LUM_L, _SAT_L);
      _SETVALUE(_LUMGAUGE,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10,
         _LEFT, 20 + _HUE_L + 9,
         _CURSOR, _DWCUR, _PNGCUROFFSET1, _PNGCUROFFSET1);
      _NTH_ELEMENT(_LUMGAUGE)[_ONCLICK] = _LUMGAUGE_FUNC;
      _SETVALUE(_COLORFORM,
         _POSITION, _ABSOLUTE);

      _SETVALUE(_PLTLB,
         _POSITION, _ABSOLUTE,
         _TOP, 15 - 2,
         _LEFT, 20,
         _FONT_SIZE, 15,
         _LINE_HEIGHT, 21);
      _Cpt = _GETDATA(_PLTCVS, _PCL, _PCL);
      _SETVALUE(_PLTCVS,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10,
         _LEFT, 20);
      _NTH_ELEMENT(_PLTCVS)[_ONCLICK] = _PLTCVS_FUNC;
      _SETVALUE(_PLTFN,
         _SRC, "img/fn1.png",
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10 + 188 + 3,
         _LEFT, 20);
      _SETVALUE(_PLTFNLB,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10 + 188,
         _LEFT, 40,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_PLTFNLB)[_ONCLICK] = _PLTFNLB_FUNC;

      _SETVALUE(_CMD_COPY,
         _SRC, "img/copy.png",
         _POSITION, _ABSOLUTE,
         _TOP, 17,
         _LEFT, 145,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_CMD_COPY)[_ONCLICK] = _CMD_COPY_FUNC;
      _SETVALUE(_CMD_PASTE,
         _SRC, "img/paste.png",
         _POSITION, _ABSOLUTE,
         _TOP, 17,
         _LEFT, 145 + 20,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_CMD_PASTE)[_ONCLICK] = _CMD_PASTE_FUNC;
      _SETVALUE(_CMD_DEL,
         _SRC, "img/del.png",
         _POSITION, _ABSOLUTE,
         _TOP, 17,
         _LEFT, 145 + 20 * 2,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_CMD_DEL)[_ONCLICK] = _CMD_DEL_FUNC;
      _SETVALUE(_CMD_ROTATE,
         _SRC, "img/r.png",
         _POSITION, _ABSOLUTE,
         _TOP, 17,
         _LEFT, 145 + 20 * 3,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_CMD_ROTATE)[_ONCLICK] = _CMD_ROTATE_FUNC;
      _SETVALUE(_CMD_HZ,
         _SRC, "img/h.png",
         _POSITION, _ABSOLUTE,
         _TOP, 17,
         _LEFT, 145 + 20 * 4,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_CMD_HZ)[_ONCLICK] = _CMD_HZ_FUNC;
      _SETVALUE(_CMD_VT,
         _SRC, "img/v.png",
         _POSITION, _ABSOLUTE,
         _TOP, 17,
         _LEFT, 145 + 20 * 5,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_CMD_VT)[_ONCLICK] = _CMD_VT_FUNC;
      _SETVALUE(_CMD_PLUS,
         _SRC, "img/plus.png",
         _POSITION, _ABSOLUTE,
         _TOP, 17,
         _LEFT, 145 + 20 * 7);
      _NTH_ELEMENT(_CMD_PLUS)[_ONCLICK] = _CMD_PLUS_FUNC;
      _SETVALUE(_CMD_MINUS,
         _SRC, "img/minus.png",
         _POSITION, _ABSOLUTE,
         _TOP, 17,
         _LEFT, 145 + 20 * 8);
      _NTH_ELEMENT(_CMD_MINUS)[_ONCLICK] = _CMD_MINUS_FUNC;
      _SETVALUE(_CMD32,
         _SRC, "img/cur32b.png",
         _POSITION, _ABSOLUTE,
         _TOP, 15,
         _LEFT, 145 + 20 * 10);
      _NTH_ELEMENT(_CMD32)[_ONCLICK] = _CMD32_FUNC;
      _SETVALUE(_CMD64,
         _SRC, "img/cur64a.png",
         _POSITION, _ABSOLUTE,
         _TOP, 15,
         _LEFT, 145 + 20 * 11);
      _NTH_ELEMENT(_CMD64)[_ONCLICK] = _CMD64_FUNC;
      _SETVALUE(_CMD_CUR,
         _SRC, "img/ptr.png",
         _POSITION, _ABSOLUTE,
         _TOP, 15,
         _LEFT, 145 + 20 * 12 + 34);
      _NTH_ELEMENT(_CMD_CUR)[_ONCLICK] = _CMD_CUR_FUNC;

      _SETVALUE(_BTNS_CMD,
         _POSITION, _ABSOLUTE,
         _HEIGHT, _BTNS_L + 1,
         _BORDER_BOTTOM_WIDTH, 1,
         _BORDER_BOTTOM_STYLE, _SOLID,
         _BORDER_BOTTOM_COLOR, _GRAY,
         _BACKGROUND_COLOR, _WHITE,
         _DISPLAY, _NONE);
      _SETVALUE(_POS_XY,
         _POSITION, _ABSOLUTE,
         _Z_INDEX, 500);
      _SETVALUE(_RECT_WH,
         _POSITION, _ABSOLUTE,
         _Z_INDEX, 500);
      _SETVALUE(_BTN_FILL,
         _SRC, ("img/fill0.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 9,
         _LEFT, 132 + 30 * 2 + 13 + 30 * 5);
      _NTH_ELEMENT(_BTN_FILL)[_ONCLICK] = _BTN_FILL_FUNC;
      _SETVALUE(_BTN_LINE,
         _SRC, ("img/line2.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 9,
         _LEFT, 132 + 30 * 2 + 13 + 30 * 4);
      _NTH_ELEMENT(_BTN_LINE)[_ONCLICK] = _BTN_LINE_FUNC;
      _SETVALUE(_BTN_RECT,
         _SRC, ("img/sel0b.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 9,
         _LEFT, 132 + 30 * 2 + 13 + 30 * 3);
      _NTH_ELEMENT(_BTN_RECT)[_ONCLICK] = _BTN_RECT_FUNC;
      _Ccs = _GETDATA(_BTN_COL, 17, 17);
      _SETVALUE(_BTN_COL,
         _POSITION, _ABSOLUTE,
         _TOP, 9 + 5,
         _LEFT, 132 + 30 * 2 + 13 + 30 * 2 + 5);
      _NTH_ELEMENT(_BTN_COL)[_ONCLICK] = _BTN_COL_FUNC;
      _Lp = 1;
      _SETVALUE(_BTN_LYR,
         _SRC, ("img/l20.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 9,
         _LEFT, 132 + 30 * 2 + 13 + 30);
      _NTH_ELEMENT(_BTN_LYR)[_ONCLICK] = _BTN_LYR_FUNC;
      _SETVALUE(_BTN_PLT,
         _SRC, ("img/plte2.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 9,
         _LEFT, 132 + 30 * 2 + 13);
      _NTH_ELEMENT(_BTN_PLT)[_ONCLICK] = _BTN_PLT_FUNC;
      _SETVALUE(_BUF_NUM,
         _POSITION, _ABSOLUTE,
         _TOP, 15,
         _LEFT, 106 + 59);
      _SETVALUE(_BTN_REDO,
         _SRC, ("img/redo3.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 9,
         _LEFT, 106 + 30);
      _NTH_ELEMENT(_BTN_REDO)[_ONCLICK] = _BTN_REDO_FUNC;
      _SETVALUE(_BTN_UNDO,
         _SRC, ("img/undo3.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 9,
         _LEFT, 106);
      _NTH_ELEMENT(_BTN_UNDO)[_ONCLICK] = _BTN_UNDO_FUNC;

      _SETVALUE(_FLTDWLOGO,
         _SRC, "img/fltdw.png",
         _POSITION, _ABSOLUTE,
         _TOP, 15,
         _RIGHT, 30,
         _VISIBILITY, _NULL);
      _SETVALUE(_BTNS,
         _POSITION, _ABSOLUTE,
         _TOP, 0,
         _LEFT, 0,
         _DISPLAY, _NONE);
      _SETVALUE(_BTN_FILE,
         _SRC, ("img/file0.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 9,
         _LEFT, 30,
         _Z_INDEX, 500,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_BTN_FILE)[_ONCLICK] = _BTN_FILE_FUNC;

      _SETVALUE(_RULENAME,
         _POSITION, _ABSOLUTE,
         _WIDTH, 135,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_RULENAME,
         0,
         0);
      _SETHDL(_RULENAME, _RULENAME_FUNC);
      _SETPH(_RULENAME, "PNG のファイル名");
      _SETVALUE(_RECTLAYOUT,
         _SRC, "img/layout.png",
         _POSITION, _ABSOLUTE,
         _TOP, 17 + 17,
         _LEFT, 0);
      _SETVALUE(_RULE_CX,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_RULE_CX,
         17,
         106);
      _SETHDL(_RULE_CX, _RULE_CXY_FUNC);
      _SETVALUE(_RULE_CY,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_RULE_CY,
         17,
         156);
      _SETHDL(_RULE_CY, _RULE_CXY_FUNC);
      _SETVALUE(_RULE_TS,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_RULE_TS,
         17 + 17 + 18,
         77);
      _SETHDL(_RULE_TS, _RULE_TLBRS_FUNC);
      _SETVALUE(_RULE_LS,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_RULE_LS,
         17 + 17 + 42,
         37);
      _SETHDL(_RULE_LS, _RULE_TLBRS_FUNC);
      _SETVALUE(_RULE_BS,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_RULE_BS,
         17 + 17 + 66,
         77);
      _SETHDL(_RULE_BS, _RULE_TLBRS_FUNC);
      _SETVALUE(_RULE_RS,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500);
      _SETVAL(_RULE_RS,
         17 + 17 + 42,
         116);
      _SETHDL(_RULE_RS, _RULE_TLBRS_FUNC);
      _SETVALUE(_RULEPREV,
         _POSITION, _ABSOLUTE,
         _TOP, 17 + 130,
         _LEFT, 0,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_RULEPREV)[_ONCLICK] = _RULEPREV_FUNC;
      _SETVALUE(_RULENEXT,
         _POSITION, _ABSOLUTE,
         _TOP, 17 + 130,
         _LEFT, 35,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_RULENEXT)[_ONCLICK] = _RULENEXT_FUNC;
      _SETVALUE(_RULEINSERT,
         _POSITION, _ABSOLUTE,
         _TOP, 17 + 130,
         _LEFT, 70,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_RULEINSERT)[_ONCLICK] = _RULEINSERT_FUNC;
      _SETVALUE(_RULEDEL,
         _POSITION, _ABSOLUTE,
         _TOP, 17 + 130,
         _LEFT, 150,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_RULEDEL)[_ONCLICK] = _RULEDEL_FUNC;

      _SETVALUE(_RULES,
         _POSITION, _ABSOLUTE,
         _VISIBILITY, _HIDDEN);
      _SETVALUE(_RULENO,
         _POSITION, _ABSOLUTE,
         _TOP, 0,
         _LEFT, 0,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_RULENO)[_ONCLICK] = _RULENO_FUNC;
      _SETVALUE(_RULEFORM,
         _POSITION, _ABSOLUTE,
         _WIDTH, 45,
         _HEIGHT, 15,
         _Z_INDEX, 500,
         _VISIBILITY, _HIDDEN);
      _SETVAL(_RULEFORM,
         -3,
         -1);
      _SETHDL(_RULEFORM, _RULEFORM_FUNC);
      _SETVALUE(_RULEADD,
         _POSITION, _ABSOLUTE,
         _TOP, 0,
         _LEFT, 150,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_RULEADD)[_ONCLICK] = _RULEADD_FUNC;
      _SETVALUE(_RULENONE,
         _POSITION, _ABSOLUTE,
         _VISIBILITY, _NULL);

      _SETVALUE(_LYREDIT,
         _POSITION, _ABSOLUTE,
         _TOP, 0,
         _LEFT, 0,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_LYREDIT)[_ONCLICK] = _LYREDIT_FUNC;
      _SETVALUE(_LYRHIDDEN,
         _POSITION, _ABSOLUTE,
         _TOP, 0,
         _LEFT, 60,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_LYRHIDDEN)[_ONCLICK] = _LYRHIDDEN_FUNC;
      _SETVALUE(_LYRVISIBLE,
         _POSITION, _ABSOLUTE,
         _TOP, 0,
         _LEFT, 0,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _HIDDEN);
      _NTH_ELEMENT(_LYRVISIBLE)[_ONCLICK] = _LYRVISIBLE_FUNC;
      _SETVALUE(_LYRVSLB,
         _POSITION, _ABSOLUTE,
         _TOP, 0,
         _LEFT, 0,
         _VISIBILITY, _NULL);
      _SETVALUE(_LYRFWD,
         _POSITION, _ABSOLUTE,
         _TOP, 17 + 8,
         _LEFT, 0,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_LYRFWD)[_ONCLICK] = _LYRFWD_FUNC;
      _SETVALUE(_LYRIMG,
         _POSITION, _ABSOLUTE,
         _TOP, 17 * 2 + 8 * 2,
         _LEFT, 0,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _NULL);
      _SETVALUE(_LYRBM,
         _POSITION, _ABSOLUTE,
         _TOP, 17 * 3 + 8 * 3,
         _LEFT, 0,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _NULL);
      _SETVALUE(_ICPASTE,
         _POSITION, _ABSOLUTE,
         _TOP, 17 * 4 + 8 * 4,
         _LEFT, 0,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _NULL);
      _NTH_ELEMENT(_ICPASTE)[_ONCLICK] = _ICPASTE_FUNC;
      _SETVALUE(_SELECTALL,
         _POSITION, _ABSOLUTE,
         _TOP, 17 * 5 + 8 * 5,
         _LEFT, 0,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE,
         _VISIBILITY, _NULL);
      _NTH_ELEMENT(_SELECTALL)[_ONCLICK] = _SELECTALL_FUNC;

      _SETVALUE(_LYRLB,
         _POSITION, _ABSOLUTE,
         _TOP, 15 - 2,
         _LEFT, 20,
         _FONT_SIZE, 15,
         _LINE_HEIGHT, 21);
      _SETVALUE(_LYRRECTBTN,
         _SRC, ("img/ll0.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10,
         _LEFT, 20);
      _NTH_ELEMENT(_LYRRECTBTN)[_ONCLICK] = _LYRRECTBTN_FUNC;
      _SETVALUE(_LYR1BTN,
         _SRC, ("img/l10.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10,
         _LEFT, 20 + 30);
      _NTH_ELEMENT(_LYR1BTN)[_ONCLICK] = _LYR1BTN_FUNC;
      _SETVALUE(_LYR2BTN,
         _SRC, ("img/l22.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10,
         _LEFT, 20 + 30 + 30);
      _NTH_ELEMENT(_LYR2BTN)[_ONCLICK] = _LYR2BTN_FUNC;
      _SETVALUE(_LYR3BTN,
         _SRC, ("img/l30.png"),
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10,
         _LEFT, 20 + 30 + 30 + 30);
      _NTH_ELEMENT(_LYR3BTN)[_ONCLICK] = _LYR3BTN_FUNC;
      _SETVALUE(_LYRCMD,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10 + 35,
         _LEFT, 20,
         _DISPLAY, _NULL);
      _SETVALUE(_LYRRECTBG,
         _POSITION, _ABSOLUTE,
         _TOP, 15 + 15 + 10 + 35,
         _LEFT, 20,
         _DISPLAY, _NONE);

      _SETVALUE(_MENUBG,
         _POSITION, _ABSOLUTE,
         _HEIGHT, _BTNS_L,
         _TOP, 0,
         _LEFT, 0,
         _Z_INDEX, 400,
         _BORDER_BOTTOM_WIDTH, 1,
         _BORDER_BOTTOM_STYLE, _SOLID,
         _BORDER_BOTTOM_COLOR, _GRAY,
         _BACKGROUND_COLOR, _WHITE);
      _SETVALUE(_SCL_T,
         _SRC, "img/up1.png",
         _POSITION, _ABSOLUTE,
         _Z_INDEX, 50);
      _NTH_ELEMENT(_SCL_T)[_ONMOUSEDOWN] = _SCL_T_FUNC;
      _SETVALUE(_SCL_V,
         _POSITION, _ABSOLUTE,
         _WIDTH, 13,
         _HEIGHT, (0),
         _TOP, (_BTNS_L + 1 + 17),
         _BORDER_RIGHT_WIDTH, 1,
         _BORDER_RIGHT_STYLE, _SOLID,
         _BORDER_RIGHT_COLOR, _GRAY,
         _BORDER_LEFT_WIDTH, 1,
         _BORDER_LEFT_STYLE, _SOLID,
         _BORDER_LEFT_COLOR, _GRAY,
         _Z_INDEX, 50,
         _BACKGROUND_COLOR, _WHITE);
      _NTH_ELEMENT(_SCL_V)[_ONMOUSEDOWN] = _SCL_V_FUNC;
      _SETVALUE(_SCL_B,
         _SRC, "img/down1.png",
         _POSITION, _ABSOLUTE,
         _Z_INDEX, 50);
      _NTH_ELEMENT(_SCL_B)[_ONMOUSEDOWN] = _SCL_B_FUNC;
      _SETVALUE(_SCL_L,
         _SRC, "img/left1.png",
         _POSITION, _ABSOLUTE,
         _LEFT, 0,
         _Z_INDEX, 50);
      _NTH_ELEMENT(_SCL_L)[_ONMOUSEDOWN] = _SCL_L_FUNC;
      _SETVALUE(_SCL_H,
         _POSITION, _ABSOLUTE,
         _WIDTH, (0),
         _HEIGHT, 13,
         _LEFT, (17),
         _BORDER_TOP_WIDTH, 1,
         _BORDER_TOP_STYLE, _SOLID,
         _BORDER_TOP_COLOR, _GRAY,
         _Z_INDEX, 50,
         _BACKGROUND_COLOR, _WHITE);
      _NTH_ELEMENT(_SCL_H)[_ONMOUSEDOWN] = _SCL_H_FUNC;
      _SETVALUE(_SCL_R,
         _SRC, "img/right1.png",
         _POSITION, _ABSOLUTE,
         _Z_INDEX, 50);
      _NTH_ELEMENT(_SCL_R)[_ONMOUSEDOWN] = _SCL_R_FUNC;
      _Cdt = _GETDATA(_CDT, 1, 1);
      _SETVALUE(_CDT,
         _POSITION, _ABSOLUTE,
         _LEFT, 4,
         _Z_INDEX, 0,
         _VISIBILITY, _NULL);
      _NTH_ELEMENT(_CDT)[_ONMOUSEDOWN] = _CDT_FUNC;
      _SETVALUE(_PLTBG,
         _POSITION, _ABSOLUTE,
         _Z_INDEX, 200,
         _BACKGROUND_COLOR, _WHITE);
      _SETVALUE(_LYRBG,
         _POSITION, _ABSOLUTE,
         _Z_INDEX, 300,
         _BACKGROUND_COLOR, _WHITE,
         _DISPLAY, _NONE);
      _SETVALUE(_FILEBG,
         _POSITION, _ABSOLUTE,
         _TOP, _BTNS_L + 1,
         _LEFT, 0,
         _Z_INDEX, 500,
         _BACKGROUND_COLOR, _WHITE,
         _DISPLAY, _NULL,
         _OVERFLOW, _SCROLL);
      _SETVALUE(_COLORCOV,
         _SRC, "img/na.png",
         _POSITION, _ABSOLUTE,
         _TOP, 0,
         _LEFT, 0,
         _Z_INDEX, 900,
         _DISPLAY, _NONE);
      _SETVALUE(_COLORBG,
         _POSITION, _ABSOLUTE,
         _Z_INDEX, 1000,
         _BACKGROUND_COLOR, _WHITE,
         _DISPLAY, _NONE);

      _SETVALUE(_FLTDWFILE,
         _POSITION, _ABSOLUTE,
         _DISPLAY, _NONE);
      _NTH_ELEMENT(_FLTDWFILE)[_ONCHANGE] = _FLTDWFILE_FUNC;
      _NTH_ELEMENT(_FLTDWFILE)[_ACCEPT] = ".fltdw";
      _SETVALUE(_PNGFILE,
         _POSITION, _ABSOLUTE,
         _DISPLAY, _NONE);
      _NTH_ELEMENT(_PNGFILE)[_ONCHANGE] = _PNGFILE_FUNC;
      _NTH_ELEMENT(_PNGFILE)[_ACCEPT] = ".png";
      _SETVALUE(_IMGFILE,
         _POSITION, _ABSOLUTE,
         _DISPLAY, _NONE);
      _NTH_ELEMENT(_IMGFILE)[_ONCHANGE] = _IMGFILE_FUNC;
      _NTH_ELEMENT(_IMGFILE)[_ACCEPT] = "image/*";
      _SETVALUE(_BASE64TXTFILE,
         _POSITION, _ABSOLUTE,
         _DISPLAY, _NONE);
      _NTH_ELEMENT(_BASE64TXTFILE)[_ONCHANGE] = _BASE64TXTFILE_FUNC;
      _SETVALUE(_AESCRYPTOFILE,
         _POSITION, _ABSOLUTE,
         _DISPLAY, _NONE);
      _NTH_ELEMENT(_AESCRYPTOFILE)[_ONCHANGE] = _AESCRYPTOFILE_FUNC;
      _SETVALUE(_DECRYPTOFILE,
         _POSITION, _ABSOLUTE,
         _DISPLAY, _NONE);
      _NTH_ELEMENT(_DECRYPTOFILE)[_ONCHANGE] = _DECRYPTOFILE_FUNC;
      _NTH_ELEMENT(_DECRYPTOFILE)[_ACCEPT] = _ZIPSTR;

      _Flk = true;
      _Mtx = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      _Pen = _P_NEW;
      _New = false;
      _Fp = false;
      _Fa = false;
      _Cx = 0;
      _Cy = 0;

      _BODY[_ONMOUSEMOVE] = _MOUSEMOVE_FUNC;
      _BODY[_ONMOUSEUP] = _MOUSEUP_FUNC;
      _REGISTER_INPUT(_KEYDOWN_FUNC);
      _DOCUMENT[_ONCONTEXTMENU] = _FUNLOCK;
      _DOCUMENT[_ONSELECTSTART] = _FUNLOCK;
      _PREVENT_TRANSFER();
      _USE_KUPROC(_KEYUP_FUNC);
      _ALLOW_DEFAULT();
      _PREVENT_DEFAULT(9);
      _START(_FRMS, _EXCEPTION);
      }
   };

_WINDOW[_ONLOAD] = fltdw.load;

})(fltdw);