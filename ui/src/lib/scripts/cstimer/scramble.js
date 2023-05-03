"use strict";

import { mathlib } from "./mathlib";

export var scrMgr = (function(rn, rndEl) {

	function mega(turns, suffixes, length) {
		turns = turns || [[""]];
		suffixes = suffixes || [""];
		length = length || 0;
		var donemoves = 0;
		var lastaxis = -1;
		var s = [];
		var first, second;
		for (var i = 0; i < length; i++) {
			do {
				first = rn(turns.length);
				second = rn(turns[first].length);
				if (first != lastaxis) {
					donemoves = 0;
					lastaxis = first;
				}
			} while (((donemoves >> second) & 1) != 0);
			donemoves |= 1 << second;
            if (Array.isArray(turns[first][second])) {
				s.push(rndEl(turns[first][second]) + rndEl(suffixes));
			} else {
				s.push(turns[first][second] + rndEl(suffixes));
			}
		}
		return s.join(' ');
	}

	/**
	 *	{type: callback(type, length, state)}
	 *	callback return: scramble string or undefined means delay
	 */
	var scramblers = {
		"blank": function() {
			return "N/A";
		}
	};

	/**
	 *	{type: [str1, str2, ..., strN]}
	 */
	var filters = {};

	/**
	 *	{type: [prob1, prob2, ..., probN]}
	 */
	var probs = {};

	/**
	 *	{type: imgGen(case, canvas)}
	 */
	var imgGens = {};

	/**
	 *	filter_and_probs: [[str1, ..., strN], [prob1, ..., probN], imgGen]
	 */
	function regScrambler(type, callback, filter_and_probs) {
        if (Array.isArray(type)) {
			for (var i = 0; i < type.length; i++) {
				scramblers[type[i]] = callback;
			}
		} else {
			scramblers[type] = callback;
			if (filter_and_probs != undefined) {
				filters[type] = filter_and_probs[0];
				probs[type] = filter_and_probs[1];
				imgGens[type] = filter_and_probs[2]; // may be undefined
			}
		}
		return regScrambler;
	}

	/**
	 *	format string,
	 *		${args} => scramblers[scrType](scrType, scrArg)
	 *		#{args} => mega(args)
	 */
	function formatScramble(str) {
		var repfunc = function(match, p1) {
			if (match[0] == '$') {
				var args = [p1];
				if (p1[0] == '[') {
					args = JSON.parse(p1);
				}
				return scramblers[args[0]].apply(this, args);
			} else if (match[0] == '#') {
				return mega.apply(this, JSON.parse('[' + p1 + ']'));
			} else {
				return '';
			}
		};
		var re1 = /[$#]\{([^\}]+)\}/g;
		return str.replace(re1, repfunc);
	}

	function rndState(filter, probs) {
		if (probs == undefined) {
			return undefined;
		}
		var ret = probs.slice();
		if (filter == undefined) {
			filter = ret;
		}
		if (probs[0] == 0) {
			return filter.slice();
		}
		for (var i = 0; i < filter.length; i++) {
			if (!filter[i]) {
				ret[i] = 0;
			}
		}
		return mathlib.rndProb(ret);
	}

	function fixCase(cases, probs) {
		return cases == undefined ? mathlib.rndProb(probs) : cases;
	}

	return {
		reg: regScrambler,
		scramblers: scramblers,
		filters: filters,
		probs: probs,
		imgGens: imgGens,
		mega: mega,
		formatScramble: formatScramble,
		rndState: rndState,
		fixCase: fixCase
	}
})(mathlib.rn, mathlib.rndEl);
