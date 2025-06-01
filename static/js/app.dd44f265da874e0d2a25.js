webpackJsonp([1], {
	38: function(n, e, t) {
		t(84);
		var r = t(23)(t(40), t(96), "data-v-bd26cd6c", null);
		n.exports = r.exports
	},
	40: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(24),
			o = t.n(r),
			i = t(45),
			a = t.n(i),
			s = t(44),
			l = t.n(s),
			u = t(93),
			c = t.n(u),
			d = t(92),
			f = t.n(d),
			m = t(81),
			h = (t.n(m), function() {
				for (var n = navigator.userAgent, e = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], t = !
						0, r = 0; r < e.length; r++)
					if (n.indexOf(e[r]) > 0) {
						t = !1;
						break
					} return t
			}()),
			g = function(n, e) {
				var t = new Date(Date.parse(n.replace(/-/g, "/"))).getTime(),
					r = new Date(Date.parse(e.replace(/-/g, "/"))).getTime();
				return Math.abs(t - r) / 864e5
			};
		e.default = {
			name: "app",
			components: {
				StyleEditor: c.a,
				ResumeEditor: f.a
			},
			data: function() {
				return {
					interval: 27,
					currentStyle: "",
					enableHtml: !1,
					fullStyle: [
						"/*\n* 这几天想了很多，\n* 最后想着用我自己的方式和你说几句话。\n* 你知道我是一个前端程序员，\n* 主要负责网站、APP等用户界面的开发和维护。\n* 比如这个页面，就是个空的网页。\n* 我的工作就是给它加点儿东西。\n* 虽然你也是个准程序员，\n* 但我也知道你不太会写代码，\n* 所以只要静静地享受这如魔术一般变化的过程就好。\n* 嗯。说起来手机和电脑还得区分一下。\n* 我能够识别出来，你现在正在使用" +
						(h ? "电脑。" : "手机。") +
						"\n* 那么，我要开始了。\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景有点太单调，你应该喜欢花里胡哨一点的 */\nhtml {\n  color: rgb(255,255,255);\n  background-color: rgb(27,160,255);\n  background: linear-gradient(156deg, #f694e6, #1ba0ff); \n}\n/* 更改一下文字的格式 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  " +
						(h ? "width: 48%;height: 96%;" : "width: 96%;height: 50%;") +
						"\n  font-size: 18px;\n  line-height:1.5;\n}\n/* 让我来增加一些语法高亮 */\n.token.selector{ color: rgb(241,255,33) }\n.token.property{ color: rgb(208,255,229) }\n.token.punctuation{ color: yellow }\n.token.function{ color: rgb(63,255,240) }\n.token.comment{ color: rgb(115, 255, 89);font-weight: bolder; }\n/* 加个 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  " +
						(h ? "left: 0;" : "left:0;right:0;margin:auto;") +
						"\n  top: 0; \n  -webkit-transition: none; \n  transition: none;   \n  " + (h ?
							"-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;" :
							"-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;") +
						"\n  " + (h ? "" : "-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;") +
						"\n}\n\n/* 再来一张好看的照片 */\n.resumeEditor{\n  position: fixed; \n  " + (h ? "right: 0;" :
							"left:0;right:0;margin:auto;") + "\n  " + (h ? "top: 0;" : "bottom:2%;") + "\n  padding: .5em;  \n  " + (h ?
							"margin: .5em;" : "") + "\n  " + (h ? "width: 48%;height: 96%;" : "width: 96%;height: 50%;") +
						"\n  border: 1px solid;\n  color: #222;\n  overflow: auto;\n  font-size: 20px;\n  line-height: 1.5;\n  " + (
							h ?
							"-webkit-transform: rotateY(-10deg) translateZ(-100px) ;\n  transform: rotateY(-10deg) translateZ(-100px) ;" :
							"-webkit-transform: rotateX(10deg) translateZ(-100px) ;\n  transform: rotateX(10deg) translateZ(-100px) ;") +
						"\n    " + (h ? "" : "-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;") +
						"\n  }\n/* 那么，接下来我要开始写了 */\n\n\n",
						"\n/* 是不是看着很简陋粗糙？\n * 因为这是 Markdown 格式的\n * 就是我教你写笔记的那种\n * 你肯定忘了\n * 现在只需要将Markdown转化一下\n * 转化为网页使用的HTML就可以啦\n * 都是知识点赶紧学！\n */\n",
						'\n/* 再加点样式 */\n.resumeEditor{\n  padding: 2em;\n  line-height:1.8;\n}\n.resumeEditor div{\n  width: 115%;\n  position: relative;\n  left: -6%;\n  padding: 0 32px;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size:24px;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n}\n\n/* 这便是最终的作品了 */\n'
					],
					currentMarkdown: "",
					fullMarkdown: `致湘湘子：\n----\n\n- 去年那天 偶然的机缘巧合让我们相识
					\n从初见的生疏，到熟知的热烈，是一场岁月的相逢
					\n是缘分或是天意？让我们的心灵如此贴近
					\n原本完全陌生的彼此，羁绊却不断地加深
					\n虽然你的过去我没有参与，但我希望未来有你
					\n- “高山上盖庙还嫌低，面对面坐着还想你”
					\n你知道这句话为什么听起来有点土吗
					\n因为这是陕北民歌信天游的歌词
					\n带着一种质朴的情感
					\n就像我对你一样
					\n两个人在一起总是会遇到很多问题
					\n但是我们之间的都是小事
					\n这次吵架不知道你是怎么想的
					\n至少我觉得错不全在我
					\n我是因为你和别的男生走的过近
					\n问你两句还不耐烦而生气
					\n虽然我也知道你其实对我很包容了
					\n但我有时候在气头上控制不住自己
					\n我从没想过彻底不理你
					\n我愿意慢慢和你经营这段关系
					\n因为我真的非常珍惜
					\n
					\n『隐约雷鸣，阴霾天空』
					\n『但盼风雨来，能留你在此』
					\n『隐约雷鸣，阴霾天空』
					\n『即使天无雨，我亦留此地』`
				}
			},
			created: function() {
				var div1 = document.createElement("div");
				document.body.style.background = 'black'
				document.body.prepend(div1)
				this.$nextTick(() => {
					document.querySelector('#app').style.display = 'none'
				})

				var audio = document.createElement("audio");
				audio.src = "../../M5000019ErSb0DTPZG-[AudioTrimmer.com].mp3";
				audio.loop = true

				const text1 = '<p style="margin-left: 30px; color: white;">准备好了吗，点击确认，一键开启奇妙旅程</p> <br>'
				div1.innerHTML = text1
				div1.append(audio)

				div1.style.width = '350px'
				div1.style.borderRadius = '0'
				div1.style.padding = '300px 0px'
				div1.style.height = '150px'
				div1.style.zIndex = '999'

				const btn1 = document.createElement("button");
				btn1.style.outline = 'none'
				btn1.style.border = '0'
				btn1.style.borderRadius = '20px'
				btn1.style.width = '80px'
				btn1.style.height = '30px'
				btn1.style.display = 'block'
				btn1.style.margin = '10px 160px'
				btn1.innerText = '确定'
				div1.appendChild(btn1)

				btn1.onclick = () => {
					audio.play();
					console.log('sdfkljskldjkl')
					div1.style.display = 'none'
					document.body.style.background = ''
					document.querySelector('#app').style.display = ''
					this.makeResume()
				}



			},
			methods: {
				makeResume: function() {
					function n() {
						return e.apply(this, arguments)
					}
					var e = l()(a.a.mark(function n() {
						return a.a.wrap(function(n) {
							for (;;) switch (n.prev = n.next) {
								case 0:
									return n.next = 2, this.progressivelyShowStyle(0);
								case 2:
									return n.next = 4, this.progressivelyShowResume();
								case 4:
									return n.next = 6, this.progressivelyShowStyle(1);
								case 6:
									return n.next = 8, this.showHtml();
								case 8:
									return n.next = 10, this.progressivelyShowStyle(2);
								case 10:
								case "end":
									return n.stop()
							}
						}, n, this)
					}));
					return n
				}(),
				showHtml: function() {
					var n = this;
					return new o.a(function(e, t) {
						n.enableHtml = !0, e()
					})
				},
				progressivelyShowStyle: function(n) {
					var e = this;
					return new o.a(function(t, r) {
						var o = e.interval,
							i = l()(a.a.mark(function e() {
								var r, s, l, u, c, d = this;
								return a.a.wrap(function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (r = this.fullStyle[n]) {
												e.next = 3;
												break
											}
											return e.abrupt("return");
										case 3:
											s = this.fullStyle.filter(function(e, t) {
												return t <= n
											}).map(function(n) {
												return n.length
											}).reduce(function(n, e) {
												return n + e
											}, 0), l = s - r.length, this.currentStyle.length < s ? (u = this.currentStyle.length - l, c =
												r.substring(u, u + 1) || " ", this.currentStyle += c, "\n" === r.substring(u - 1, u) && this.$refs
												.styleEditor && this.$nextTick(function() {
													d.$refs.styleEditor.goBottom()
												}), setTimeout(i, o)) : t();
										case 6:
										case "end":
											return e.stop()
									}
								}, e, this)
							})).bind(e);
						i()
					})
				},
				progressivelyShowResume: function() {
					var n = this;
					return new o.a(function(e, t) {
						var r = n.fullMarkdown.length,
							o = n.interval;
						! function t() {
							if (n.currentMarkdown.length < r) {
								n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
								n.currentMarkdown[n.currentMarkdown.length - 1];
								"\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function() {
									return n.$refs.resumeEditor.goBottom()
								}), setTimeout(t, o)
							} else e()
						}()
					})
				}
			}
		}
	},
	41: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(85),
			o = t.n(r);
		e.default = {
			props: ["markdown", "enableHtml"],
			name: "ResumeEditor",
			computed: {
				result: function() {
					return this.enableHtml ? o()(this.markdown) : this.markdown
				}
			},
			methods: {
				goBottom: function() {
					this.$refs.container.scrollTop = 1e5
				}
			}
		}
	},
	42: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(86),
			o = t.n(r);
		e.default = {
			name: "Editor",
			props: ["code"],
			computed: {
				highlightedCode: function() {
					return o.a.highlight(this.code, o.a.languages.css)
				},
				codeInStyleTag: function() {
					return "<style>" + this.code + "</style>"
				}
			},
			methods: {
				goBottom: function() {
					this.$refs.container.scrollTop = 1e5
				}
			}
		}
	},
	43: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(39),
			o = t(38),
			i = t.n(o);
		new r.a({
			el: "#app",
			render: function(n) {
				return n(i.a)
			}
		})
	},
	81: function(n, e) {},
	82: function(n, e) {},
	83: function(n, e) {},
	84: function(n, e) {},
	92: function(n, e, t) {
		t(83);
		var r = t(23)(t(41), t(95), "data-v-3539023c", null);
		n.exports = r.exports
	},
	93: function(n, e, t) {
		t(82);
		var r = t(23)(t(42), t(94), "data-v-23b5cc2c", null);
		n.exports = r.exports
	},
	94: function(n, e) {
		n.exports = {
			render: function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					ref: "container",
					staticClass: "styleEditor"
				}, [t("div", {
					staticClass: "code",
					domProps: {
						innerHTML: n._s(n.codeInStyleTag)
					}
				}), n._v(" "), t("pre", {
					domProps: {
						innerHTML: n._s(n.highlightedCode)
					}
				})])
			},
			staticRenderFns: []
		}
	},
	95: function(n, e) {
		n.exports = {
			render: function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					ref: "container",
					staticClass: "resumeEditor",
					class: {
						htmlMode: n.enableHtml
					}
				}, [n.enableHtml ? t("div", {
					domProps: {
						innerHTML: n._s(n.result)
					}
				}) : t("pre", [n._v(n._s(n.result))])])
			},
			staticRenderFns: []
		}
	},
	96: function(n, e) {
		n.exports = {
			render: function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					attrs: {
						id: "app"
					}
				}, [t("StyleEditor", {
					ref: "styleEditor",
					attrs: {
						code: n.currentStyle
					}
				}), n._v(" "), t("ResumeEditor", {
					ref: "resumeEditor",
					attrs: {
						markdown: n.currentMarkdown,
						enableHtml: n.enableHtml
					}
				})], 1)
			},
			staticRenderFns: []
		}
	}
}, [43]);
