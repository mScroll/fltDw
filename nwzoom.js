/*
 * 1.1.0.0
 * COPYRIGHT (c) 2017 mScroll
 */



(function (){

"use strict";

var _WINDOW = window;
var _LOG = _WINDOW.Math.log;
var _LENGTH = "length";
var _BASE1_2 = _LOG(1.2);
var _NULL = null;

var _Nw;
var _Nw_window;
var _Scale;
var _Ptr = 4;

if ("nw" in _WINDOW)
   {
   _Nw = _WINDOW.nw;
   _Nw_window = _Nw.Window.get();
   _Scale = [50, 57.1428, 66.6666, 80, 100, 114.286, 133.333, 160, 200];

   _Nw.mScrollNwZoom = function (Reset_)
      {
      if (arguments[_LENGTH] === 1 && Reset_)
         {
         _Ptr = 4;
         }
      else
         {
         ++ _Ptr;

         if (_Ptr >= _Scale[_LENGTH])
            {
            _Ptr = 0;
            }
         }

      _Nw_window.zoomLevel = _LOG(_Scale[_Ptr] / 100) / _BASE1_2;
      };
   }
else
   {
   _Nw = {};
   _Nw_window = _NULL;
   _Scale = _NULL;

   _Nw.mScrollNwZoom = function ()
      {
      };

   _WINDOW.nw = _Nw;
   }

})();



/* EOF */