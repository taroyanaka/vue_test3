(function(){"use strict";var e={140:function(e,t,a){var _=a(963),l=a(252),n=a(577);const s={class:"parent"},i={class:"in_zone"},r=(0,l._)("span",null,"a_table: ",-1),o=(0,l._)("span",null," active_a_table_index: ",-1),c=(0,l._)("span",null,"b_table: ",-1),m=(0,l._)("span",null," active_b_table_index: ",-1),b=(0,l._)("option",{disabled:"",value:""},"Please select one",-1),u=["onUpdate:modelValue"],E=["onUpdate:modelValue"],h={class:"out_zone"},A=["onUpdate:modelValue"];function p(e,t,a,p,d,S){return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",i,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.template_data,((e,t,a)=>((0,l.wg)(),(0,l.iD)("div",null,(0,n.zw)(t),1)))),256)),(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>S.foo&&S.foo(...e))},"foo_click"),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>d.template_key_data=e),placeholder:"template_key",name:"template_key",id:"template_key"},null,512),[[_.nr,d.template_key_data]]),(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>d.template_value_data=e),placeholder:"template_value_data",name:"foo",id:"foo",cols:"30",rows:"10"},null,512),[[_.nr,d.template_value_data]]),(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>d.template_result_data=e),placeholder:"template_result_data",name:"foo",id:"foo",cols:"30",rows:"10"},null,512),[[_.nr,d.template_result_data]]),(0,l._)("button",{onClick:t[4]||(t[4]=e=>{S.sample(),S.click_for_initialize()}),class:"sample"},"sample"),(0,l._)("button",{class:"attach_table_name",onClick:t[5]||(t[5]=(...e)=>S.attach_table_name&&S.attach_table_name(...e))},"attach_table_name"),(0,l._)("button",{class:"detach_table_name",onClick:t[6]||(t[6]=(...e)=>S.detach_table_name&&S.detach_table_name(...e))},"detach_table_name"),(0,l._)("div",null,[r,(0,l._)("span",null,(0,n.zw)(d.table_name_list[d.a_table]),1),o,(0,l._)("span",null,(0,n.zw)(d.a_table),1)]),(0,l._)("div",null,[c,(0,l._)("span",null,(0,n.zw)(d.table_name_list[d.b_table]),1),m,(0,l._)("span",null,(0,n.zw)(d.b_table),1)]),(0,l.wy)((0,l._)("select",{class:"select","onUpdate:modelValue":t[7]||(t[7]=e=>d.selected=e),onChange:t[8]||(t[8]=e=>S.set_a_b_table(e))},[b,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.table_all_combination,((e,t)=>((0,l.wg)(),(0,l.iD)("option",{key:e},(0,n.zw)(e.name[0]+"+"+e.name[1]),1)))),128))],544),[[_.bM,d.selected]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.table_column_numbering_list,((e,a)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:e},[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t=>d.table_name_list[e]=t,placeholder:"table_name_list[table_column_numbering]",type:"text",onInput:t[9]||(t[9]=(...e)=>S.save&&S.save(...e)),onChange:t[10]||(t[10]=(...e)=>S.save&&S.save(...e))},null,40,u),[[_.nr,d.table_name_list[e]]]),(0,l.wy)((0,l._)("textarea",{class:(0,n.C_)(["",{a_table:S.is_a_table(a),b_table:S.is_b_table(a)}]),"onUpdate:modelValue":t=>d.column_names_list[e]=t,placeholder:"column_names_list[table_column_numbering]_one",name:"column_names_list[table_column_numbering]",id:"column_names_list[table_column_numbering]",cols:"30",rows:"10",onInput:t[11]||(t[11]=(...e)=>S.save&&S.save(...e)),onChange:t[12]||(t[12]=(...e)=>S.save&&S.save(...e))},null,42,E),[[_.nr,d.column_names_list[e]]])],64)))),128)),(0,l._)("button",{class:"add_table_column_numbering_list",onClick:t[13]||(t[13]=(...e)=>S.add_table_column_numbering_list&&S.add_table_column_numbering_list(...e))},"add_table_column_numbering_list"),(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[14]||(t[14]=e=>d.parameters=e),placeholder:"parameters_one",name:"parameters",id:"parameters",cols:"30",rows:"10",onInput:t[15]||(t[15]=(...e)=>S.save&&S.save(...e)),onChange:t[16]||(t[16]=(...e)=>S.save&&S.save(...e))},null,544),[[_.nr,d.parameters]])]),(0,l._)("div",h,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.res_list,((e,a,n)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("textarea",{"onUpdate:modelValue":e=>d.res_list[a]=e,placeholder:"res",name:"res",id:"res",cols:"30",rows:"10",onInput:t[17]||(t[17]=(...e)=>S.save&&S.save(...e)),onChange:t[18]||(t[18]=(...e)=>S.save&&S.save(...e))},null,40,A)),[[_.nr,d.res_list[a]]]))),256)),(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[19]||(t[19]=e=>d.res_all=e),placeholder:"res_all",name:"res_all",id:"res_all",cols:"30",rows:"10",onInput:t[20]||(t[20]=(...e)=>S.save&&S.save(...e)),onChange:t[21]||(t[21]=(...e)=>S.save&&S.save(...e))},null,544),[[_.nr,d.res_all]])])])}let d={select:"const SELECT = () => {\n    try {\n        return db.prepare('SELECT rowid, * FROM !!!THIS_IS_CHANGEABLE_TABLE_NAME!!!').all();\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",insert:"const INSERT = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\n    try {\n        return db.prepare('INSERT INTO !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! ( !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! ) VALUES ( !!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!! )').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",update:"const UPDATE = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\n    try {\n        return db.prepare('UPDATE !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! SET !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",delete:"const DELETE = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\n    try {\n        return db.prepare('DELETE FROM !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! WHERE !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! = ?').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n    } catch (ERROR) {\n        return ERROR;\n    }\n};",create:'const CREATE = () => CREATE TABLE IF NOT EXISTS !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! (\n!!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!\n// I recommend GitHub Copilot writing the SQLite3 code for you. like this,\n// vue_instance.$data copy & paste\n// const vue_instance = {\n//     "article": "foo0",\n//     "comment_text": "foo2 is FOO2",\n//     "new_tag": "",\n//     "star_count": 3,\n// }\n// CREATE TABLE IF NOT EXISTS table_name ( Abracadabra...\n// CREATE TABLE IF NOT EXISTS vue_instance (\n//     article TEXT,\n//     comment_text TEXT,\n//     new_tag TEXT,\n//     star_count INTEGER\n// );\n);',drop:'const DROP = () => {\n    db.prepare("DROP TABLE !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! ").run();\n};',create_cross_table:'const CREATE_!!!CROSS_TABLE!!! = () => {\n    try {\n        return db.prepare("CREATE TABLE IF NOT EXISTS !!!A_TABLE!!!_!!!B_TABLE!!! (\nid IT,\n!!!A_TABLE!!!_id INT,\n!!!B_TABLE!!!_id INT)")\n        .run();\n    ;\n    } catch (ERROR) {\n        return ERROR;\n    }\n}',select_table_join:'const SELECT_!!!A_TABLE!!!_JOIN_!!!B_TABLE!!! = () => {\n    try {\n        db.prepare("SELECT *\nFROM !!!A_TABLE!!!\nJOIN !!!B_TABLE!!!\nWHERE !!!A_TABLE!!!.id = !!!B_TABLE!!!.!!!A_TABLE!!!_id\n        ").all();\n    } catch (err) {\n        console.table(err);\n    }\n};',select_cross_table:'const SELECT_CROSS_!!!CROSS_TABLE!!! = () => {\n    try {\n        db.prepare("SELECT *\nFROM !!!A_TABLE!!!\nJOIN !!!CROSS_TABLE!!!\n    ON\n        !!!A_TABLE!!!.id = !!!CROSS_TABLE!!!.!!!A_TABLE!!!_id\nJOIN !!!B_TABLE!!!\n    ON\n        !!!CROSS_TABLE!!!.!!!B_TABLE!!!_id = !!!B_TABLE!!!.id\n        ").all();\n    } catch (err) {\n        console.table(err);\n    }\n};'};const S=e=>e.split("\n").join(", "),T=e=>e.split("\n").map((e=>"?")).join(", "),L=(e,t,a)=>e.replaceAll(t,a),B=(e,t,a,_,l,n,s)=>e.replaceAll(t,_).replaceAll(a,l).replaceAll(n,s),I=Object.keys(d).reduce(((e,t)=>({...e,[t]:""})),{});var O={data(){return{template_data:d,a_table:0,b_table:1,res_list:I,res_all:"",table_name:"",column_names:"",table_name_list:[],column_names_list:[],parameters:"",check:!0,table_all_combination:null,res:null,selected:null,table_column_numbering_list:[],template_key_data:"template_key",template_value_data:"const FOO_METHOD = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {\ntry {\n  return db.prepare('INSERT INTO !!!THIS_IS_CHANGEABLE_TABLE_NAME!!! ( !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! ) VALUES ( !!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!! )').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );\n} catch (ERROR) {\n  return ERROR;\n}\n};",template_result_data:""}},methods:{foo(){var e=this.template_key_data,t={};t[e]=this.template_value_data,this.template_data=Object.assign(d,t),this.template_result_data=this.template_data[e],console.table(this.template_data)},template_list_rendering(){Object.entries(this.template_data).forEach((([e,t])=>{this.res_list[e]=this.replace_statement_string(d[e],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters)}))},save(){this.res_list.select=L(d["select"],"!!!THIS_IS_CHANGEABLE_TABLE_NAME!!!",this.table_name_list[this.a_table]),this.res_list.insert=this.replace_statement_string(d["insert"],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters),this.res_list.update=this.replace_statement_string(d["update"],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters),this.res_list.delete=this.replace_statement_string(d["delete"],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters),this.res_list.create=this.replace_statement_string(d["create"],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters),this.res_list.drop=this.replace_statement_string(d["drop"],this.table_name_list[this.a_table],this.column_names_list[this.a_table],this.parameters),this.res_all="",this.res_list.create_cross_table=B(d["create_cross_table"],"!!!A_TABLE!!!","!!!B_TABLE!!!",this.table_name_list[this.a_table],this.table_name_list[this.b_table],"!!!CROSS_TABLE!!!",this.table_name_list[this.a_table]+"_"+this.table_name_list[this.b_table]),this.res_list.select_table_join=B(d["select_table_join"],"!!!A_TABLE!!!","!!!B_TABLE!!!",this.table_name_list[this.a_table],this.table_name_list[this.b_table],"!!!CROSS_TABLE!!!",this.table_name_list[this.a_table]+"_"+this.table_name_list[this.b_table]),this.res_list.select_cross_table=B(d["select_cross_table"],"!!!A_TABLE!!!","!!!B_TABLE!!!",this.table_name_list[this.a_table],this.table_name_list[this.b_table],"!!!CROSS_TABLE!!!",this.table_name_list[this.a_table]+"_"+this.table_name_list[this.b_table]),Object.entries(this.res_list).forEach((([e,t])=>this.res_all+=t+"\n\n"));try{this.choose_table_cobination()}catch(e){console.log(e)}},replace_statement_string(e,t,a,_){let l="";return l=L(e,"!!!THIS_IS_CHANGEABLE_TABLE_NAME!!!",t),l=L(l,"!!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!",S(a)),l=L(l,"!!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!!",T(a)),l=L(l,"!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!",S(_)),l},vue_map(e){return Object.keys(e).map((t=>e[t]))},choose_table_cobination(){try{const e=R.range(0,this.table_name_list.length);let t=R.xprod(this.vue_map(e),this.vue_map(e)).filter((e=>e[0]!==e[1]));const a=t.map((e=>{let t={};return Object.assign(t,{name:[e[0],e[1]]}),t}));this.table_all_combination=a}catch(e){return console.log(e),null}},set_a_b_table(e){[this.a_table,this.b_table]=e.target.value.split("+"),[this.a_table,this.b_table]=[Number(this.a_table),Number(this.b_table)],this.save()},add_table_column_numbering_list(){this.table_column_numbering_list.push(this.table_column_numbering_list.length),this.table_name_list.push("table_name"+this.table_column_numbering_list.length),this.column_names_list.push(`${this.table_column_numbering_list.length}COLUMN_NAME1\n${this.table_column_numbering_list.length}COLUMN_NAME2\n${this.table_column_numbering_list.length}COLUMN_NAME3`),this.choose_table_cobination(),this.save()},sample(){this.parameters="PARAM1\nPARAM2\nPARAM3"},debug(){console.log([this.a_table,this.b_table,this.res_list,this.res_all,this.table_name,this.column_names,this.table_name_list,this.column_names_list,this.parameters,this.check,this.table_all_combination,this.res,this.selected,this.table_column_numbering_list])},click_for_initialize(){document.querySelector(".add_table_column_numbering_list").click(),document.querySelector(".add_table_column_numbering_list").click(),document.querySelector(".add_table_column_numbering_list").click(),document.querySelector(".add_table_column_numbering_list").click(),this.attach_table_name()},is_a_table(e){return e===this.a_table||""},is_b_table(e){return e===this.b_table||""},attach_table_name(){this.column_names_list=this.vue_map(this.column_names_list).map(((e,t)=>e.split("\n").map((e=>!1===e.includes(".")?this.table_name_list[t]+"."+e:e)).join("\n")))},detach_table_name(){this.column_names_list=this.vue_map(this.column_names_list).map(((e,t)=>e.split("\n").map((e=>e.split(".")[1]?e.split(".")[1]:e)).join("\n")))}}},N=a(744);const C=(0,N.Z)(O,[["render",p]]);var g=C;(0,_.ri)(g).mount("#app")}},t={};function a(_){var l=t[_];if(void 0!==l)return l.exports;var n=t[_]={exports:{}};return e[_](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,_,l,n){if(!_){var s=1/0;for(c=0;c<e.length;c++){_=e[c][0],l=e[c][1],n=e[c][2];for(var i=!0,r=0;r<_.length;r++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](_[r])}))?_.splice(r--,1):(i=!1,n<s&&(s=n));if(i){e.splice(c--,1);var o=l();void 0!==o&&(t=o)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[_,l,n]}}(),function(){a.d=function(e,t){for(var _ in t)a.o(t,_)&&!a.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:t[_]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,_){var l,n,s=_[0],i=_[1],r=_[2],o=0;if(s.some((function(t){return 0!==e[t]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(r)var c=r(a)}for(t&&t(_);o<s.length;o++)n=s[o],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},_=self["webpackChunkvue_test3"]=self["webpackChunkvue_test3"]||[];_.forEach(t.bind(null,0)),_.push=t.bind(null,_.push.bind(_))}();var _=a.O(void 0,[998],(function(){return a(140)}));_=a.O(_)})();
//# sourceMappingURL=app.8cb75755.js.map