(function(){"use strict";var e={142:function(e,t,n){var a=n(963),_=n(252),l=n(577);const s={class:"parent"},i={class:"in_zone"},r=(0,_._)("span",null,"a_table: ",-1),o=(0,_._)("span",null," active_a_table_index: ",-1),c=(0,_._)("span",null,"b_table: ",-1),u=(0,_._)("span",null," active_b_table_index: ",-1),m=(0,_._)("option",{disabled:"",value:""},"Please select one",-1),E=["onUpdate:modelValue"],b=["onUpdate:modelValue"],A={class:"out_zone"},d=["onUpdate:modelValue"];function p(e,t,n,p,h,T){return(0,_.wg)(),(0,_.iD)("div",s,[(0,_._)("div",i,[((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(h.template_data,((e,t,n)=>((0,_.wg)(),(0,_.iD)("div",null,(0,l.zw)(t),1)))),256)),(0,_._)("button",{onClick:t[0]||(t[0]=(...e)=>T.foo&&T.foo(...e))},"foo_click"),(0,_.wy)((0,_._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>h.template_key_data=e),placeholder:"template_key",name:"template_key",id:"template_key"},null,512),[[a.nr,h.template_key_data]]),(0,_.wy)((0,_._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>h.template_value_data=e),placeholder:"template_value_data",name:"foo",id:"foo",cols:"30",rows:"10"},null,512),[[a.nr,h.template_value_data]]),(0,_.wy)((0,_._)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>h.template_result_data=e),placeholder:"template_result_data",name:"foo",id:"foo",cols:"30",rows:"10"},null,512),[[a.nr,h.template_result_data]]),(0,_._)("button",{onClick:t[4]||(t[4]=e=>{T.sample(),T.click_for_initialize()}),class:"sample"},"sample"),(0,_._)("button",{class:"attach_table_name",onClick:t[5]||(t[5]=(...e)=>T.attach_table_name&&T.attach_table_name(...e))},"attach_table_name"),(0,_._)("button",{class:"detach_table_name",onClick:t[6]||(t[6]=(...e)=>T.detach_table_name&&T.detach_table_name(...e))},"detach_table_name"),(0,_._)("div",null,[r,(0,_._)("span",null,(0,l.zw)(h.table_name_list[h.a_table]),1),o,(0,_._)("span",null,(0,l.zw)(h.a_table),1)]),(0,_._)("div",null,[c,(0,_._)("span",null,(0,l.zw)(h.table_name_list[h.b_table]),1),u,(0,_._)("span",null,(0,l.zw)(h.b_table),1)]),(0,_.wy)((0,_._)("select",{class:"select","onUpdate:modelValue":t[7]||(t[7]=e=>h.selected=e),onChange:t[8]||(t[8]=e=>T.set_a_b_table(e))},[m,((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(h.table_all_combination,((e,t)=>((0,_.wg)(),(0,_.iD)("option",{key:e},(0,l.zw)(e.name[0]+"+"+e.name[1]),1)))),128))],544),[[a.bM,h.selected]]),((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(h.table_column_numbering_list,((e,n)=>((0,_.wg)(),(0,_.iD)(_.HY,{key:e},[(0,_.wy)((0,_._)("input",{"onUpdate:modelValue":t=>h.table_name_list[e]=t,placeholder:"table_name_list[table_column_numbering]",type:"text",onInput:t[9]||(t[9]=(...e)=>T.save&&T.save(...e)),onChange:t[10]||(t[10]=(...e)=>T.save&&T.save(...e))},null,40,E),[[a.nr,h.table_name_list[e]]]),(0,_.wy)((0,_._)("textarea",{class:(0,l.C_)(["",{a_table:T.is_a_table(n),b_table:T.is_b_table(n)}]),"onUpdate:modelValue":t=>h.column_names_list[e]=t,placeholder:"column_names_list[table_column_numbering]_one",name:"column_names_list[table_column_numbering]",id:"column_names_list[table_column_numbering]",cols:"30",rows:"10",onInput:t[11]||(t[11]=(...e)=>T.save&&T.save(...e)),onChange:t[12]||(t[12]=(...e)=>T.save&&T.save(...e))},null,42,b),[[a.nr,h.column_names_list[e]]])],64)))),128)),(0,_._)("button",{class:"add_table_column_numbering_list",onClick:t[13]||(t[13]=(...e)=>T.add_table_column_numbering_list&&T.add_table_column_numbering_list(...e))},"add_table_column_numbering_list"),(0,_.wy)((0,_._)("textarea",{"onUpdate:modelValue":t[14]||(t[14]=e=>h.parameters=e),placeholder:"parameters_one",name:"parameters",id:"parameters",cols:"30",rows:"10",onInput:t[15]||(t[15]=(...e)=>T.save&&T.save(...e)),onChange:t[16]||(t[16]=(...e)=>T.save&&T.save(...e))},null,544),[[a.nr,h.parameters]])]),(0,_._)("div",A,[((0,_.wg)(!0),(0,_.iD)(_.HY,null,(0,_.Ko)(h.res_list,((e,n,l)=>(0,_.wy)(((0,_.wg)(),(0,_.iD)("textarea",{"onUpdate:modelValue":e=>h.res_list[n]=e,placeholder:"res",name:"res",id:"res",cols:"30",rows:"10",onInput:t[17]||(t[17]=(...e)=>T.save&&T.save(...e)),onChange:t[18]||(t[18]=(...e)=>T.save&&T.save(...e))},null,40,d)),[[a.nr,h.res_list[n]]]))),256)),(0,_.wy)((0,_._)("textarea",{"onUpdate:modelValue":t[19]||(t[19]=e=>h.res_all=e),placeholder:"res_all",name:"res_all",id:"res_all",cols:"30",rows:"10",onInput:t[20]||(t[20]=(...e)=>T.save&&T.save(...e)),onChange:t[21]||(t[21]=(...e)=>T.save&&T.save(...e))},null,544),[[a.nr,h.res_all]])])])}const h=e=>e,T=e=>e.split("\n").join(", "),S=e=>e.split("\n").map((e=>"?")).join(", "),L={just_replace:h,new_lined_string_to_join_comma_string:T,new_lined_string_to_question_symbol_comma_string:S},O=[["!!!A_TABLE!!!","just_replace","TABLE_NAME"],["!!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!","new_lined_string_to_join_comma_string","COLUMN_NAMES"],["!!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!!","new_lined_string_to_question_symbol_comma_string","COLUMN_NAMES"],["!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!","new_lined_string_to_question_symbol_comma_string","PARAMETERS"]];let B={select:"const SELECT = () => {\n    try {\n        return db.prepare('SELECT rowid, * FROM !!!A_TABLE!!!').all();\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",insert:"const INSERT = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\n    try {\n        return db.prepare('INSERT INTO !!!A_TABLE!!! ( !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! ) VALUES ( !!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!! )').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",update:"const UPDATE = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\n    try {\n        return db.prepare('UPDATE !!!A_TABLE!!! SET !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",delete:"const DELETE = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\n    try {\n        return db.prepare('DELETE FROM !!!A_TABLE!!! WHERE !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! = ?').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",create:'const CREATE = () => CREATE TABLE IF NOT EXISTS !!!A_TABLE!!! (\n!!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!\n// I recommend GitHub Copilot writing the SQLite3 code for you. like this,\n// vue_instance.$data copy & paste\n// const vue_instance = {\n//     "article": "foo0",\n//     "comment_text": "foo2 is FOO2",\n//     "new_tag": "",\n//     "star_count": 3,\n// }\n// CREATE TABLE IF NOT EXISTS table_name ( Abracadabra...\n// CREATE TABLE IF NOT EXISTS vue_instance (\n//     article TEXT,\n//     comment_text TEXT,\n//     new_tag TEXT,\n//     star_count INTEGER\n// );\n);',drop:'const DROP = () => {\n    db.prepare("DROP TABLE !!!A_TABLE!!! ").run();\n};',create_cross_table:'const CREATE_!!!CROSS_TABLE!!! = () => {\n    try {\n        return db.prepare("CREATE TABLE IF NOT EXISTS !!!A_TABLE!!!_!!!B_TABLE!!! (\nid IT,\n!!!A_TABLE!!!_id INT,\n!!!B_TABLE!!!_id INT)")\n        .run();\n    ;\n    } catch (ERROR) {\n        return ERROR;\n    }\n}',select_table_join:'const SELECT_!!!A_TABLE!!!_JOIN_!!!B_TABLE!!! = () => {\n    try {\n        db.prepare("SELECT *\nFROM !!!A_TABLE!!!\nJOIN !!!B_TABLE!!!\nWHERE !!!A_TABLE!!!.id = !!!B_TABLE!!!.!!!A_TABLE!!!_id\n        ").all();\n    } catch (err) {\n        console.table(err);\n    }\n};',select_cross_table:'const SELECT_CROSS_!!!CROSS_TABLE!!! = () => {\n    try {\n        db.prepare("SELECT *\nFROM !!!A_TABLE!!!\nJOIN !!!CROSS_TABLE!!!\n    ON\n        !!!A_TABLE!!!.id = !!!CROSS_TABLE!!!.!!!A_TABLE!!!_id\nJOIN !!!B_TABLE!!!\n    ON\n        !!!CROSS_TABLE!!!.!!!B_TABLE!!!_id = !!!B_TABLE!!!.id\n        ").all();\n    } catch (err) {\n        console.table(err);\n    }\n};'};const g=Object.keys(B).reduce(((e,t)=>({...e,[t]:""})),{});var C={data(){return{template_data:B,a_table:0,b_table:1,res_list:g,res_all:"",table_name:"",column_names:"",table_name_list:[],column_names_list:[],parameters:"",check:!0,table_all_combination:null,res:null,selected:null,table_column_numbering_list:[],template_key_data:"template_key",template_value_data:"const FOO_METHOD = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\ntry {\nreturn db.prepare('INSERT INTO !!!A_TABLE!!! ( !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! ) VALUES ( !!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!! )').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n} catch (ERROR) {\nreturn ERROR;\n}\n};",template_result_data:"",replacer_methods_data:L,replace_table_data:O}},methods:{foo(){const e=this.template_key_data;let t={};t[e]=this.template_value_data,this.template_data=Object.assign(B,t),this.template_result_data=this.template_data[e]},template_list_rendering(){Object.entries(this.template_data).forEach((([e,t])=>{this.res_list[e]=this.replace_statement_string(B[e],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters,"!!!B_TABLE!!!",this.table_name_list[this.a_table],this.table_name_list[this.b_table],"!!!CROSS_TABLE!!!",this.table_name_list[this.a_table]+"_"+this.table_name_list[this.b_table])}))},save(){this.res_list.select=B["select"].replaceAll("!!!THIS_IS_CHANGEABLE_TABLE_NAME!!!",this.table_name_list[this.a_table]),this.template_list_rendering(),Object.entries(this.res_list).forEach((([e,t])=>this.res_all+=t+"\n\n"));try{this.choose_table_combination()}catch(e){console.log(e)}},replace_statement_string(e,t,n,a,_,l,s,i,r){let o=e;const c=(e,t,n,a)=>e.replaceAll(t,this.replacer_methods_data[n](a)),u=o=>{switch(o){case"TEMPLATE_STR":return e;case"TABLE_NAME":return t;case"COLUMN_NAMES":return n;case"PARAMETERS":return a;case"B_TABLE_FROM":return _;case"A_TABLE_TO":return l;case"B_TABLE_TO":return s;case"CROSS_TABLE_FROM":return i;case"CROSS_TABLE_TO":return r;default:break}};return this.replace_table_data.forEach((e=>o=c(o,e[0],e[1],u(e[2])))),o=arguments.length>=5?o.replaceAll(t,l).replaceAll(_,s).replaceAll(i,r):o,o},vue_map(e){return Object.keys(e).map((t=>e[t]))},choose_table_combination(){try{const e=R.range(0,this.table_name_list.length);let t=R.xprod(this.vue_map(e),this.vue_map(e)).filter((e=>e[0]!==e[1]));const n=t.map((e=>{let t={};return Object.assign(t,{name:[e[0],e[1]]}),t}));this.table_all_combination=n}catch(e){return console.log(e),null}},set_a_b_table(e){[this.a_table,this.b_table]=e.target.value.split("+"),[this.a_table,this.b_table]=[Number(this.a_table),Number(this.b_table)],this.save()},add_table_column_numbering_list(){this.table_column_numbering_list.push(this.table_column_numbering_list.length),this.table_name_list.push("table_name"+this.table_column_numbering_list.length),this.column_names_list.push(`${this.table_column_numbering_list.length}COLUMN_NAME1\n${this.table_column_numbering_list.length}COLUMN_NAME2\n${this.table_column_numbering_list.length}COLUMN_NAME3`),this.choose_table_combination(),this.save()},sample(){this.parameters="PARAM1\nPARAM2\nPARAM3"},debug(){console.log([this.a_table,this.b_table,this.res_list,this.res_all,this.table_name,this.column_names,this.table_name_list,this.column_names_list,this.parameters,this.check,this.table_all_combination,this.res,this.selected,this.table_column_numbering_list])},click_for_initialize(){document.querySelector(".add_table_column_numbering_list").click(),document.querySelector(".add_table_column_numbering_list").click(),document.querySelector(".add_table_column_numbering_list").click(),document.querySelector(".add_table_column_numbering_list").click(),this.attach_table_name()},is_a_table(e){return e===this.a_table||""},is_b_table(e){return e===this.b_table||""},attach_table_name(){this.column_names_list=this.vue_map(this.column_names_list).map(((e,t)=>e.split("\n").map((e=>!1===e.includes(".")?this.table_name_list[t]+"."+e:e)).join("\n")))},detach_table_name(){this.column_names_list=this.vue_map(this.column_names_list).map(((e,t)=>e.split("\n").map((e=>e.split(".")[1]?e.split(".")[1]:e)).join("\n")))}}},v=n(744);const N=(0,v.Z)(C,[["render",p]]);var I=N;(0,a.ri)(I).mount("#app")}},t={};function n(a){var _=t[a];if(void 0!==_)return _.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,_,l){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],_=e[c][1],l=e[c][2];for(var i=!0,r=0;r<a.length;r++)(!1&l||s>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(i=!1,l<s&&(s=l));if(i){e.splice(c--,1);var o=_();void 0!==o&&(t=o)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,_,l]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var _,l,s=a[0],i=a[1],r=a[2],o=0;if(s.some((function(t){return 0!==e[t]}))){for(_ in i)n.o(i,_)&&(n.m[_]=i[_]);if(r)var c=r(n)}for(t&&t(a);o<s.length;o++)l=s[o],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},a=self["webpackChunkvue_test3"]=self["webpackChunkvue_test3"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(142)}));a=n.O(a)})();
//# sourceMappingURL=app.f2bdc8eb.js.map