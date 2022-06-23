(function(){"use strict";var e={675:function(e,t,n){var _=n(963),a=n(252),l=n(577);const s=(0,a._)("div",{class:"in_zone"},null,-1),i=(0,a._)("div",{class:"out_zone"},null,-1),r=(0,a._)("span",null,"a_table: ",-1),o=(0,a._)("span",null," active_a_table_index: ",-1),c=(0,a._)("span",null,"b_table: ",-1),b=(0,a._)("span",null," active_b_table_index: ",-1),u=(0,a._)("option",{disabled:"",value:""},"Please select one",-1),m=["onUpdate:modelValue"],E=["onUpdate:modelValue"],h=["onUpdate:modelValue"];function p(e,t,n,A,p,d){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("button",{onClick:t[0]||(t[0]=e=>{d.sample(),d.click_for_initialize()}),class:"init"},"init"),s,i,(0,a._)("button",{class:"attach_table_name",onClick:t[1]||(t[1]=(...e)=>d.attach_table_name&&d.attach_table_name(...e))},"attach_table_name"),(0,a._)("button",{class:"detach_table_name",onClick:t[2]||(t[2]=(...e)=>d.detach_table_name&&d.detach_table_name(...e))},"detach_table_name"),(0,a._)("div",null,[r,(0,a._)("span",null,(0,l.zw)(p.table_name_list[p.a_table]),1),o,(0,a._)("span",null,(0,l.zw)(p.a_table),1)]),(0,a._)("div",null,[c,(0,a._)("span",null,(0,l.zw)(p.table_name_list[p.b_table]),1),b,(0,a._)("span",null,(0,l.zw)(p.b_table),1)]),(0,a.wy)((0,a._)("select",{class:"select","onUpdate:modelValue":t[3]||(t[3]=e=>p.selected=e),onChange:t[4]||(t[4]=e=>d.set_a_b_table(e))},[u,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.table_all_combination,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{key:e},(0,l.zw)(e.name[0]+"+"+e.name[1]),1)))),128))],544),[[_.bM,p.selected]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.table_column_numbering_list,((e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e},[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t=>p.table_name_list[e]=t,placeholder:"table_name_list[table_column_numbering]",type:"text",onInput:t[5]||(t[5]=(...e)=>d.save&&d.save(...e)),onChange:t[6]||(t[6]=(...e)=>d.save&&d.save(...e))},null,40,m),[[_.nr,p.table_name_list[e]]]),(0,a.wy)((0,a._)("textarea",{class:(0,l.C_)(["",{a_table:d.is_a_table(n),b_table:d.is_b_table(n)}]),"onUpdate:modelValue":t=>p.column_names_list[e]=t,placeholder:"column_names_list[table_column_numbering]_one",name:"column_names_list[table_column_numbering]",id:"column_names_list[table_column_numbering]",cols:"30",rows:"10",onInput:t[7]||(t[7]=(...e)=>d.save&&d.save(...e)),onChange:t[8]||(t[8]=(...e)=>d.save&&d.save(...e))},null,42,E),[[_.nr,p.column_names_list[e]]])],64)))),128)),(0,a._)("button",{class:"add_table_column_numbering_list",onClick:t[9]||(t[9]=(...e)=>d.add_table_column_numbering_list&&d.add_table_column_numbering_list(...e))},"add_table_column_numbering_list"),(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":t[10]||(t[10]=e=>p.parameters=e),placeholder:"parameters_one",name:"parameters",id:"parameters",cols:"30",rows:"10",onInput:t[11]||(t[11]=(...e)=>d.save&&d.save(...e)),onChange:t[12]||(t[12]=(...e)=>d.save&&d.save(...e))},null,544),[[_.nr,p.parameters]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.res_list,((e,n,l)=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("textarea",{"onUpdate:modelValue":e=>p.res_list[n]=e,placeholder:"res",name:"res",id:"res",cols:"30",rows:"10",onInput:t[13]||(t[13]=(...e)=>d.save&&d.save(...e)),onChange:t[14]||(t[14]=(...e)=>d.save&&d.save(...e))},null,40,h)),[[_.nr,p.res_list[n]]]))),256)),(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":t[15]||(t[15]=e=>p.res_all=e),placeholder:"res_all",name:"res_all",id:"res_all",cols:"30",rows:"10",onInput:t[16]||(t[16]=(...e)=>d.save&&d.save(...e)),onChange:t[17]||(t[17]=(...e)=>d.save&&d.save(...e))},null,544),[[_.nr,p.res_all]])],64)}const d={select:"const SELECT = () => {\n    try {\n        return db.prepare('SELECT rowid, * FROM !!!THIS_IS_CHANGEABLE_TABLE_NAME!!!').all();\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",insert:"const INSERT = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\n    try {\n        return db.prepare('INSERT INTO !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! ( !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! ) VALUES ( !!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!! )').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",update:"const UPDATE = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\n    try {\n        return db.prepare('UPDATE !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! SET !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",delete:"const DELETE = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\n    try {\n        return db.prepare('DELETE FROM !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! WHERE !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! = ?').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",create:'const CREATE = () => CREATE TABLE IF NOT EXISTS !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! (\n!!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!\n// I recommend GitHub Copilot writing the SQLite3 code for you. like this,\n// vue_instance.$data copy & paste\n// const vue_instance = {\n//     "article": "foo0",\n//     "comment_text": "foo2 is FOO2",\n//     "new_tag": "",\n//     "star_count": 3,\n// }\n// CREATE TABLE IF NOT EXISTS table_name ( Abracadabra...\n// CREATE TABLE IF NOT EXISTS vue_instance (\n//     article TEXT,\n//     comment_text TEXT,\n//     new_tag TEXT,\n//     star_count INTEGER\n// );\n);',drop:'const DROP = () => {\n    db.prepare("DROP TABLE !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! ").run();\n};',create_cross_table:'const CREATE_!!!CROSS_TABLE!!! = () => {\n    try {\n        return db.prepare("CREATE TABLE IF NOT EXISTS !!!A_TABLE!!!_!!!B_TABLE!!! (\nid IT,\n!!!A_TABLE!!!_id INT,\n!!!B_TABLE!!!_id INT)")\n        .run();\n    ;\n    } catch (ERROR) {\n        return ERROR;\n    }\n}',select_table_join:'const SELECT_!!!A_TABLE!!!_JOIN_!!!B_TABLE!!! = () => {\n    try {\n        db.prepare("SELECT *\nFROM !!!A_TABLE!!!\nJOIN !!!B_TABLE!!!\nWHERE !!!A_TABLE!!!.id = !!!B_TABLE!!!.!!!A_TABLE!!!_id\n        ").all();\n    } catch (err) {\n        console.table(err);\n    }\n};',select_cross_table:'const SELECT_CROSS_!!!CROSS_TABLE!!! = () => {\n    try {\n        db.prepare("SELECT *\nFROM !!!A_TABLE!!!\nJOIN !!!CROSS_TABLE!!!\n    ON\n        !!!A_TABLE!!!.id = !!!CROSS_TABLE!!!.!!!A_TABLE!!!_id\nJOIN !!!B_TABLE!!!\n    ON\n        !!!CROSS_TABLE!!!.!!!B_TABLE!!!_id = !!!B_TABLE!!!.id\n        ").all();\n    } catch (err) {\n        console.table(err);\n    }\n};'},T=e=>e.split("\n").join(", "),S=e=>e.split("\n").map((e=>"?")).join(", "),L=(e,t,n)=>e.replaceAll(t,n),R=(e,t,n,_,a,l,s)=>e.replaceAll(t,_).replaceAll(n,a).replaceAll(l,s),I=Object.keys(d).reduce(((e,t)=>({...e,[t]:""})),{});function O(e,t){return e.reduce(((n,_,a)=>{const l=t.reduce(((t,n)=>(t.push([e[a],n]),t)),B=[]);return n.push(...l),n}),A=[])}function C(e,t){return[...Array(t-e)].reduce(((t,n,_)=>(t.push(e+_),t)),A=[])}var N={data(){return{a_table:0,b_table:1,res_list:I,res_all:"",table_name:"",column_names:"",table_name_list:[],column_names_list:[],parameters:"",check:!0,table_all_combination:null,res:null,selected:null,table_column_numbering_list:[]}},methods:{save(){this.res_list.select=L(d["select"],"!!!THIS_IS_CHANGEABLE_TABLE_NAME!!!",this.table_name_list[this.a_table]),this.debug(),this.res_list.insert=this.replace_statement_string(d["insert"],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters),this.res_list.update=this.replace_statement_string(d["update"],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters),this.res_list.delete=this.replace_statement_string(d["delete"],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters),this.res_list.create=this.replace_statement_string(d["create"],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters),this.res_list.drop=this.replace_statement_string(d["drop"],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters),this.res_all="",this.res_list.create_cross_table=R(d["create_cross_table"],"!!!A_TABLE!!!","!!!B_TABLE!!!",this.table_name_list[this.a_table],this.table_name_list[this.b_table],"!!!CROSS_TABLE!!!",this.table_name_list[this.a_table]+"_"+this.table_name_list[this.b_table]),this.res_list.select_table_join=R(d["select_table_join"],"!!!A_TABLE!!!","!!!B_TABLE!!!",this.table_name_list[this.a_table],this.table_name_list[this.b_table],"!!!CROSS_TABLE!!!",this.table_name_list[this.a_table]+"_"+this.table_name_list[this.b_table]),this.res_list.select_cross_table=R(d["select_cross_table"],"!!!A_TABLE!!!","!!!B_TABLE!!!",this.table_name_list[this.a_table],this.table_name_list[this.b_table],"!!!CROSS_TABLE!!!",this.table_name_list[this.a_table]+"_"+this.table_name_list[this.b_table]),Object.entries(this.res_list).forEach((([e,t])=>this.res_all+=t+"\n\n"));try{this.choose_table_cobination()}catch(e){console.log(e)}},replace_statement_string(e,t,n,_){let a="";return a=L(e,"!!!THIS_IS_CHANGEABLE_TABLE_NAME!!!",t),a=L(a,"!!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!",T(n)),a=L(a,"!!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!!",S(n)),a=L(a,"!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!",T(_)),a},vue_map(e){return Object.keys(e).map((t=>e[t]))},choose_table_cobination(){console.log("FOO");try{const e=C(0,this.table_name_list.length);let t=O(this.vue_map(e),this.vue_map(e)).filter((e=>e[0]!==e[1]));const n=t.map((e=>{let t={};return Object.assign(t,{name:[e[0],e[1]]}),t}));this.table_all_combination=n}catch(e){return null}},set_a_b_table(e){[this.a_table,this.b_table]=e.target.value.split("+"),[this.a_table,this.b_table]=[Number(this.a_table),Number(this.b_table)],this.save()},add_table_column_numbering_list(){this.table_column_numbering_list.push(this.table_column_numbering_list.length),this.table_name_list.push("table_name"+this.table_column_numbering_list.length),this.column_names_list.push(`${this.table_column_numbering_list.length}COLUMN_NAME1\n${this.table_column_numbering_list.length}COLUMN_NAME2\n${this.table_column_numbering_list.length}COLUMN_NAME3`),this.choose_table_cobination(),this.save()},sample(){this.parameters="PARAM1\nPARAM2\nPARAM3"},debug(){console.log([this.a_table,this.b_table,this.res_list,this.res_all,this.table_name,this.column_names,this.table_name_list,this.column_names_list,this.parameters,this.check,this.table_all_combination,this.res,this.selected,this.table_column_numbering_list])},click_for_initialize(){document.querySelector(".add_table_column_numbering_list").click(),document.querySelector(".add_table_column_numbering_list").click(),document.querySelector(".add_table_column_numbering_list").click(),document.querySelector(".add_table_column_numbering_list").click(),this.attach_table_name()},is_a_table(e){return e===this.a_table||""},is_b_table(e){return e===this.b_table||""},attach_table_name(){this.column_names_list=this.vue_map(this.column_names_list).map(((e,t)=>e.split("\n").map((e=>!1===e.includes(".")?this.table_name_list[t]+"."+e:e)).join("\n")))},detach_table_name(){this.column_names_list=this.vue_map(this.column_names_list).map(((e,t)=>e.split("\n").map((e=>e.split(".")[1]?e.split(".")[1]:e)).join("\n")))}}},g=n(744);const v=(0,g.Z)(N,[["render",p]]);var H=v;(0,_.ri)(H).mount("#app")}},t={};function n(_){var a=t[_];if(void 0!==a)return a.exports;var l=t[_]={exports:{}};return e[_](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,_,a,l){if(!_){var s=1/0;for(c=0;c<e.length;c++){_=e[c][0],a=e[c][1],l=e[c][2];for(var i=!0,r=0;r<_.length;r++)(!1&l||s>=l)&&Object.keys(n.O).every((function(e){return n.O[e](_[r])}))?_.splice(r--,1):(i=!1,l<s&&(s=l));if(i){e.splice(c--,1);var o=a();void 0!==o&&(t=o)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[_,a,l]}}(),function(){n.d=function(e,t){for(var _ in t)n.o(t,_)&&!n.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:t[_]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,_){var a,l,s=_[0],i=_[1],r=_[2],o=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(r)var c=r(n)}for(t&&t(_);o<s.length;o++)l=s[o],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},_=self["webpackChunkvue_test3"]=self["webpackChunkvue_test3"]||[];_.forEach(t.bind(null,0)),_.push=t.bind(null,_.push.bind(_))}();var _=n.O(void 0,[998],(function(){return n(675)}));_=n.O(_)})();
//# sourceMappingURL=app.378d495b.js.map