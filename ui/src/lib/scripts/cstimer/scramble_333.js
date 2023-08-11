/*

scramble_333.js

3x3x3 Solver / Scramble Generator in Javascript.

The core 3x3x3 code is from a min2phase solver by Shuang Chen.
Compiled to Javascript using GWT.
(There may be a lot of redundant code right now, but it's still really fast.)

 */
"use strict";

import { mathlib } from "./mathlib";
import { min2phase } from "./min2phase";

export var scramble_333 = (function(getNPerm, setNPerm, set8Perm, getNParity, rn, rndEl) {

	function CubieCube_$$init(obj) {
		obj.cp = [0, 1, 2, 3, 4, 5, 6, 7];
		obj.co = [0, 0, 0, 0, 0, 0, 0, 0];
		obj.ep = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		obj.eo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}

	function $setFlip(obj, idx) {
		var i, parity;
		parity = 0;
		for (i = 10; i >= 0; --i) {
			parity ^= obj.eo[i] = (idx & 1);
			idx >>= 1;
		}
		obj.eo[11] = parity;
	}

	function $setTwist(obj, idx) {
		var i, twst;
		twst = 0;
		for (i = 6; i >= 0; --i) {
			twst += obj.co[i] = idx % 3;
			idx = ~~(idx / 3);
		}
		obj.co[7] = (15 - twst) % 3;
	}

	function CornMult(a, b, prod) {
		var corn, ori, oriA, oriB;
		for (corn = 0; corn < 8; ++corn) {
			prod.cp[corn] = a.cp[b.cp[corn]];
			oriA = a.co[b.cp[corn]];
			oriB = b.co[corn];
			ori = oriA;
			ori += oriA < 3 ? oriB : 6 - oriB;
			ori %= 3;
			((oriA >= 3) !== (oriB >= 3)) && (ori += 3);
			prod.co[corn] = ori;
		}
	}

	function CubieCube() {
		CubieCube_$$init(this);
	}

	function CubieCube1(cperm, twist, eperm, flip) {
		CubieCube_$$init(this);
		set8Perm(this.cp, cperm);
		$setTwist(this, twist);
		setNPerm(this.ep, eperm, 12);
		$setFlip(this, flip);
	}

	function EdgeMult(a, b, prod) {
		var ed;
		for (ed = 0; ed < 12; ++ed) {
			prod.ep[ed] = a.ep[b.ep[ed]];
			prod.eo[ed] = b.eo[ed] ^ a.eo[b.ep[ed]];
		}
	}

	function initMove() {
        initMove = function() {};
		var a, p;
		moveCube[0] = new CubieCube1(15120, 0, 119750400, 0);
		moveCube[3] = new CubieCube1(21021, 1494, 323403417, 0);
		moveCube[6] = new CubieCube1(8064, 1236, 29441808, 550);
		moveCube[9] = new CubieCube1(9, 0, 5880, 0);
		moveCube[12] = new CubieCube1(1230, 412, 2949660, 0);
		moveCube[15] = new CubieCube1(224, 137, 328552, 137);
		for (a = 0; a < 18; a += 3) {
			for (p = 0; p < 2; ++p) {
				moveCube[a + p + 1] = new CubieCube;
				EdgeMult(moveCube[a + p], moveCube[a], moveCube[a + p + 1]);
				CornMult(moveCube[a + p], moveCube[a], moveCube[a + p + 1]);
			}
		}
	}

	var _ = CubieCube1.prototype = CubieCube.prototype;
	var moveCube = [];
	var cornerFacelet = [
		[8, 9, 20],
		[6, 18, 38],
		[0, 36, 47],
		[2, 45, 11],
		[29, 26, 15],
		[27, 44, 24],
		[33, 53, 42],
		[35, 17, 51]
	];
	var edgeFacelet = [
		[5, 10],
		[7, 19],
		[3, 37],
		[1, 46],
		[32, 16],
		[28, 25],
		[30, 43],
		[34, 52],
		[23, 12],
		[21, 41],
		[50, 39],
		[48, 14]
	];

	function toFaceCube(cc) {
		var c, e, f, i, j, n, ori, ts;
		f = [];
		ts = [85, 82, 70, 68, 76, 66];
		for (i = 0; i < 54; ++i) {
			f[i] = ts[~~(i / 9)];
		}
		for (c = 0; c < 8; ++c) {
			j = cc.cp[c];
			ori = cc.co[c];
			for (n = 0; n < 3; ++n)
				f[cornerFacelet[c][(n + ori) % 3]] = ts[~~(cornerFacelet[j][n] / 9)];
		}
		for (e = 0; e < 12; ++e) {
			j = cc.ep[e];
			ori = cc.eo[e];
			for (n = 0; n < 2; ++n)
				f[edgeFacelet[e][(n + ori) % 2]] = ts[~~(edgeFacelet[j][n] / 9)];
		}
		return String.fromCharCode.apply(null, f);
	}

	function getRandomScramble() {
		return getAnyScramble(0xffffffffffff, 0xffffffffffff, 0xffffffff, 0xffffffff);
	}

	function cntU(b) {
		for (var c = 0, a = 0; a < b.length; a++) - 1 == b[a] && c++;
		return c
	}

	function fixOri(arr, cntU, base) {
		var sum = 0;
		var idx = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != -1) {
				sum += arr[i];
			}
		}
		sum %= base;
		for (var i = 0; i < arr.length - 1; i++) {
			if (arr[i] == -1) {
				if (cntU-- == 1) {
					arr[i] = ((base << 4) - sum) % base;
				} else {
					arr[i] = rn(base);
					sum += arr[i];
				}
			}
			idx *= base;
			idx += arr[i];
		}
		return idx;
	}

	function fixPerm(arr, cntU, parity) {
		var val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != -1) {
				val[arr[i]] = -1;
			}
		}
		for (var i = 0, j = 0; i < val.length; i++) {
			if (val[i] != -1) {
				val[j++] = val[i];
			}
		}
		var last;
		for (var i = 0; i < arr.length && cntU > 0; i++) {
			if (arr[i] == -1) {
				var r = rn(cntU);
				arr[i] = val[r];
				for (var j = r; j < 11; j++) {
					val[j] = val[j + 1];
				}
				if (cntU-- == 2) {
					last = i;
				}
			}
		}
		if (getNParity(getNPerm(arr, arr.length), arr.length) == 1 - parity) {
			var temp = arr[i - 1];
			arr[i - 1] = arr[last];
			arr[last] = temp;
		}
		return getNPerm(arr, arr.length);
	}

	//arr: 53 bit integer
	function parseMask(arr, length) {
		if ('number' !== typeof arr) {
			return arr;
		}
		var ret = [];
		for (var i = 0; i < length; i++) {
			var val = arr & 0xf; // should use "/" instead of ">>" to avoid unexpected type conversion
			ret[i] = val == 15 ? -1 : val;
			arr /= 16;
		}
		return ret;
	}

	var emptysuff = [
		[]
	];

	/**
	 * 
	 * @param {*} _ep 0xba9876543210 means solved, and f means any.
	 * @param {*} _eo 0 = oriented, 1 = misoriented, f = any.
	 * @param {*} _cp 0x76543210 means solved, and f means any.
	 * @param {*} _co 0 = oriented, 1 = twisted cw, 2 = twisted ccw, f = any.
	 * @returns 
	 */
	function getAnyScramble(_ep, _eo, _cp, _co, _rndapp, _rndpre, firstAxisFilter, lastAxisFilter) {
		initMove();
		_rndapp = _rndapp || emptysuff;
		_rndpre = _rndpre || emptysuff;
		_ep = parseMask(_ep, 12);
		_eo = parseMask(_eo, 12);
		_cp = parseMask(_cp, 8);
		_co = parseMask(_co, 8);
		var solution = "";
        var probeMax = 1e9;
		do {
			var eo = _eo.slice();
			var ep = _ep.slice();
			var co = _co.slice();
			var cp = _cp.slice();
			var neo = fixOri(eo, cntU(eo), 2);
			var nco = fixOri(co, cntU(co), 3);
			var nep, ncp;
			var ue = cntU(ep);
			var uc = cntU(cp);
			if (ue == 1) {
				fixPerm(ep, ue, -1);
				ue = 0;
			}
			if (uc == 1) {
				fixPerm(cp, uc, -1);
				uc = 0;
			}
			if (ue == 0 && uc == 0) {
				nep = getNPerm(ep, 12);
				ncp = getNPerm(cp, 8);
			} else if (ue != 0 && uc == 0) {
				ncp = getNPerm(cp, 8);
				nep = fixPerm(ep, ue, getNParity(ncp, 8));
			} else if (ue == 0 && uc != 0) {
				nep = getNPerm(ep, 12);
				ncp = fixPerm(cp, uc, getNParity(nep, 12));
			} else {
				nep = fixPerm(ep, ue, -1);
				ncp = fixPerm(cp, uc, getNParity(nep, 12));
			}
			if (ncp + nco + nep + neo == 0) {
				continue;
			}
			var cc = new CubieCube1(ncp, nco, nep, neo);
			var cc2 = new CubieCube;
			var rndpre = rndEl(_rndpre);
			var rndapp = rndEl(_rndapp);
			for (var i = 0; i < rndpre.length; i++) {
				CornMult(moveCube[rndpre[i]], cc, cc2);
				EdgeMult(moveCube[rndpre[i]], cc, cc2);
				var tmp = cc2;
				cc2 = cc;
				cc = tmp;
			}
			for (var i = 0; i < rndapp.length; i++) {
				CornMult(cc, moveCube[rndapp[i]], cc2);
				EdgeMult(cc, moveCube[rndapp[i]], cc2);
				var tmp = cc2;
				cc2 = cc;
				cc = tmp;
			}
			var posit = toFaceCube(cc);
			var search0 = new min2phase.Search();
			solution = search0.solution(posit, 21, probeMax, 1, 2, lastAxisFilter, firstAxisFilter);
		} while (solution.length <= 3);

		return solution;
	}

	return {
		getAnyScramble: getAnyScramble,
		getRandomScramble: getRandomScramble,
	};

})(mathlib.getNPerm, mathlib.setNPerm, mathlib.set8Perm, mathlib.getNParity, mathlib.rn, mathlib.rndEl);