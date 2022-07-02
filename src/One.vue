<template>
<div class="parent">
<div class="in_zone">

<template v-for='(obj, key, index) in template_data'>
<div>{{ key }}</div>
</template>

<button @click="foo">foo_click</button>
<input v-model="template_key_data" placeholder="template_key" name="template_key" id="template_key">
<textarea v-model="template_value_data" placeholder="template_value_data" name="foo" id="foo" cols="30"
rows="10"></textarea>
<textarea v-model="template_result_data" placeholder="template_result_data" name="foo" id="foo" cols="30"
rows="10"></textarea>

<button @click="sample(); click_for_initialize();" class="sample">sample</button>

<button class="attach_table_name" @click="attach_table_name">attach_table_name</button>
<button class="detach_table_name" @click="detach_table_name">detach_table_name</button>
<div>
<span>a_table: </span><span>{{ table_name_list[a_table] }}</span>
<span> active_a_table_index: </span><span>{{ a_table }}</span>
</div>
<div>
<span>b_table: </span><span>{{ table_name_list[b_table] }}</span>
<span> active_b_table_index: </span><span>{{ b_table }}</span>
</div>

<select class="select" v-model="selected" @change="set_a_b_table($event)">
<option disabled value="">Please select one</option>
<option v-for="(table_combination, table_combination_index) in table_all_combination" :key="table_combination">
{{ table_combination.name[0] + "+" + table_combination.name[1] }}
</option>
</select>


<template v-for="(table_column_numbering, table_column_numbering_index) in table_column_numbering_list"
:key="table_column_numbering">
<input v-model="table_name_list[table_column_numbering]" placeholder="table_name_list[table_column_numbering]"
type="text" @input="save" @change="save">
<!-- </input> -->
<textarea class=''
:class="{ a_table: is_a_table(table_column_numbering_index), b_table: is_b_table(table_column_numbering_index) }"
v-model="column_names_list[table_column_numbering]"
placeholder="column_names_list[table_column_numbering]_one" name="column_names_list[table_column_numbering]"
id="column_names_list[table_column_numbering]" cols="30" rows="10" @input="save" @change="save"></textarea>
</template>
<button class="add_table_column_numbering_list"
@click="add_table_column_numbering_list">add_table_column_numbering_list</button>

<textarea v-model="parameters" placeholder="parameters_one" name="parameters" id="parameters" cols="30" rows="10"
@input="save" @change="save"></textarea>

</div>
<div class="out_zone">
<template v-for='(item, key, index) in res_list'>
<textarea v-model='res_list[key]' placeholder="res" name="res" id="res" cols="30" rows="10" @input="save"
@change="save"></textarea>
</template>

<textarea v-model="res_all" placeholder="res_all" name="res_all" id="res_all" cols="30" rows="10" @input="save"
@change="save"></textarea>
</div>
</div>
</template>



<script>
const just_replace = (TO_STR) => TO_STR;
const new_lined_string_to_join_comma_string = (new_lined_string) => new_lined_string.split("\n").join(", ");
const new_lined_string_to_question_symbol_comma_string = (new_lined_string) => new_lined_string.split("\n").map(V => "?").join(", ");

const replacer_methods = {
    "just_replace": just_replace,
    "new_lined_string_to_join_comma_string": new_lined_string_to_join_comma_string,
    "new_lined_string_to_question_symbol_comma_string": new_lined_string_to_question_symbol_comma_string,
};

const replace_table = [
    ["!!!A_TABLE!!!", "just_replace", "TABLE_NAME"],
    ["!!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!", "new_lined_string_to_join_comma_string", "COLUMN_NAMES"],
    ["!!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!!", "new_lined_string_to_question_symbol_comma_string", "COLUMN_NAMES"],
    ["!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!", "new_lined_string_to_question_symbol_comma_string", "PARAMETERS"],
];

// https://stackoverflow.com/questions/49689312/how-to-add-rows-based-on-multiple-selection-options-in-html-vue-js
let template = {
select: `const SELECT = () => {
    try {
        return db.prepare('SELECT rowid, * FROM !!!A_TABLE!!!').all();
    } catch (ERROR) {
        return ERROR;
    }
};`,
insert: `const INSERT = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {
    try {
        return db.prepare('INSERT INTO !!!A_TABLE!!! ( !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! ) VALUES ( !!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!! )').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );
    } catch (ERROR) {
        return ERROR;
    }
};`,
update: `const UPDATE = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {
    try {
        return db.prepare('UPDATE !!!A_TABLE!!! SET !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );
    } catch (ERROR) {
        return ERROR;
    }
};`,
delete: `const DELETE = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {
    try {
        return db.prepare('DELETE FROM !!!A_TABLE!!! WHERE !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! = ?').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );
    } catch (ERROR) {
        return ERROR;
    }
};`,
create: `const CREATE = () => CREATE TABLE IF NOT EXISTS !!!A_TABLE!!! (
!!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!!
// I recommend GitHub Copilot writing the SQLite3 code for you. like this,
// vue_instance.$data copy & paste
// const vue_instance = {
//     "article": "foo0",
//     "comment_text": "foo2 is FOO2",
//     "new_tag": "",
//     "star_count": 3,
// }
// CREATE TABLE IF NOT EXISTS table_name ( Abracadabra...
// CREATE TABLE IF NOT EXISTS vue_instance (
//     article TEXT,
//     comment_text TEXT,
//     new_tag TEXT,
//     star_count INTEGER
// );
);`,
drop: `const DROP = () => {
    db.prepare("DROP TABLE !!!A_TABLE!!! ").run();
};`,
create_cross_table: `const CREATE_!!!CROSS_TABLE!!! = () => {
    try {
        return db.prepare("CREATE TABLE IF NOT EXISTS !!!A_TABLE!!!_!!!B_TABLE!!! (
id IT,
!!!A_TABLE!!!_id INT,
!!!B_TABLE!!!_id INT)")
        .run();
    ;
    } catch (ERROR) {
        return ERROR;
    }
}`,
select_table_join: `const SELECT_!!!A_TABLE!!!_JOIN_!!!B_TABLE!!! = () => {
    try {
        db.prepare("SELECT *
FROM !!!A_TABLE!!!
JOIN !!!B_TABLE!!!
WHERE !!!A_TABLE!!!.id = !!!B_TABLE!!!.!!!A_TABLE!!!_id
        ").all();
    } catch (err) {
        console.table(err);
    }
};`,
select_cross_table: `const SELECT_CROSS_!!!CROSS_TABLE!!! = () => {
    try {
        db.prepare("SELECT *
FROM !!!A_TABLE!!!
JOIN !!!CROSS_TABLE!!!
    ON
        !!!A_TABLE!!!.id = !!!CROSS_TABLE!!!.!!!A_TABLE!!!_id
JOIN !!!B_TABLE!!!
    ON
        !!!CROSS_TABLE!!!.!!!B_TABLE!!!_id = !!!B_TABLE!!!.id
        ").all();
    } catch (err) {
        console.table(err);
    }
};`,
};

// https://stackoverflow.com/a/36388401
const template_key_and_empty_string_object = Object.keys(template).reduce((a, v) => ({ ...a, [v]: '' }), {});

export default {
data() {
return {
template_data: template,
a_table: 0,
b_table: 1,
res_list: template_key_and_empty_string_object,
res_all: '',
table_name: '',
column_names: '',
table_name_list: [],
column_names_list: [],
parameters: '',
check: true,
table_all_combination: null,
res: null,
selected: null,
table_column_numbering_list: [],
template_key_data: 'template_key',
template_value_data: `const FOO_METHOD = (!!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!!) => {
try {
return db.prepare('INSERT INTO !!!A_TABLE!!! ( !!!THIS_IS_CHANGEABLE_COLUMN_NAMES!!! ) VALUES ( !!!THIS_IS_CHANGEABLE_COUPLE_OF_QUESTION_SYMBOLS!!! )').run( !!!THIS_IS_CHANGEABLE_VALUES_PARAMETERS!!! );
} catch (ERROR) {
return ERROR;
}
};`,
template_result_data: '',
replacer_methods_data: replacer_methods,
replace_table_data: replace_table,
}
},
methods: {
foo() {
// https://stackoverflow.com/a/11508490
const key = this.template_key_data;
let obj = {};
obj[key] = this.template_value_data;
this.template_data = Object.assign(template, obj);
this.template_result_data = this.template_data[key];
},
template_list_rendering() {
Object.entries(this.template_data).forEach(([key, value]) => {
this.res_list[key] = this.replace_statement_string(
template[key],
this.table_name_list[this.a_table],
this.column_names_list[this.a_table],
this.parameters,
// these extra parameters for B_TABLE
"!!!B_TABLE!!!",
this.table_name_list[this.a_table],
this.table_name_list[this.b_table],
"!!!CROSS_TABLE!!!",
this.table_name_list[this.a_table] + "_" + this.table_name_list[this.b_table]
);
})
},
save() {
this.res_list.select = template["select"].replaceAll("!!!THIS_IS_CHANGEABLE_TABLE_NAME!!!", this.table_name_list[this.a_table]);
this.template_list_rendering();
Object.entries(this.res_list).forEach(([key, value]) => this.res_all += value + "\n\n");

try {
this.choose_table_combination();
} catch (error) {
console.log(error);
}
},
replace_statement_string(TEMPLATE_STR, TABLE_NAME, COLUMN_NAMES, PARAMETERS, B_TABLE_FROM, A_TABLE_TO, B_TABLE_TO, CROSS_TABLE_FROM, CROSS_TABLE_TO) {
    let TEMPORARY_TEMPLATE_STRING = TEMPLATE_STR;
    // only A_TABLE
    const replace_by_replacer = (STR, TARGET_STR, REPLACER_STR, REPLACER_PARAM) => STR.replaceAll(TARGET_STR, this.replacer_methods_data[REPLACER_STR](REPLACER_PARAM));
    // why resolve it? cause, the replace_table's parameters from input tag's value string
    const resolve_param_from_str = (STR) => {
        switch (STR) {
            case "TEMPLATE_STR": return TEMPLATE_STR;
            case "TABLE_NAME": return TABLE_NAME;
            case "COLUMN_NAMES": return COLUMN_NAMES;
            case "PARAMETERS": return PARAMETERS;
            case "B_TABLE_FROM": return B_TABLE_FROM;
            case "A_TABLE_TO": return A_TABLE_TO;
            case "B_TABLE_TO": return B_TABLE_TO;
            case "CROSS_TABLE_FROM": return CROSS_TABLE_FROM;
            case "CROSS_TABLE_TO": return CROSS_TABLE_TO;
            default:
                break;
        }
    };

    this.replace_table_data.forEach(REPLACE_RECORD => TEMPORARY_TEMPLATE_STRING = replace_by_replacer(TEMPORARY_TEMPLATE_STRING, REPLACE_RECORD[0], REPLACE_RECORD[1], resolve_param_from_str(REPLACE_RECORD[2])));

    // A_TABLE with B_TABLE
    TEMPORARY_TEMPLATE_STRING = arguments.length >= 5 ? TEMPORARY_TEMPLATE_STRING
    .replaceAll(TABLE_NAME, A_TABLE_TO)
    .replaceAll(B_TABLE_FROM, B_TABLE_TO)
    .replaceAll(CROSS_TABLE_FROM, CROSS_TABLE_TO)
    : TEMPORARY_TEMPLATE_STRING;

    return TEMPORARY_TEMPLATE_STRING;
},
vue_map(vue_data_list) {
return Object.keys(vue_data_list).map(key => vue_data_list[key]);
},
choose_table_combination() {
try {
const table_name_list_index_list = R.range(0, this.table_name_list.length);
let list = R.xprod(
this.vue_map(table_name_list_index_list),
this.vue_map(table_name_list_index_list)
)
.filter(V => V[0] !== V[1])
const obj_list = list.map(VAL => {
let obj = {};
Object.assign(obj, { name: [VAL[0], VAL[1]] });
return obj;
});
this.table_all_combination = obj_list;
} catch (error) {
console.log(error);
return null
}
},
set_a_b_table(EVENT) {
[this.a_table, this.b_table] = EVENT.target.value.split('+');
[this.a_table, this.b_table] = [Number(this.a_table), Number(this.b_table)];
this.save();
},
add_table_column_numbering_list() {
this.table_column_numbering_list.push(this.table_column_numbering_list.length);
this.table_name_list.push('table_name' + this.table_column_numbering_list.length);
this.column_names_list.push(`${this.table_column_numbering_list.length}COLUMN_NAME1
${this.table_column_numbering_list.length}COLUMN_NAME2
${this.table_column_numbering_list.length}COLUMN_NAME3`);
this.choose_table_combination();
this.save();
},
sample() {
this.parameters = `PARAM1
PARAM2
PARAM3`;
},
debug() {
console.log([
this.a_table,
this.b_table,
this.res_list,
this.res_all,
this.table_name,
this.column_names,
this.table_name_list,
this.column_names_list,
this.parameters,
this.check,
this.table_all_combination,
this.res,
this.selected,
this.table_column_numbering_list,
]);
},
click_for_initialize() {
document.querySelector(`.add_table_column_numbering_list`).click();
document.querySelector(`.add_table_column_numbering_list`).click();
document.querySelector(`.add_table_column_numbering_list`).click();
document.querySelector(`.add_table_column_numbering_list`).click();
this.attach_table_name();
},
is_a_table(table_column_numbering_index) {
let res = null;
return table_column_numbering_index === this.a_table ? true : '';
},
is_b_table(table_column_numbering_index) {
return table_column_numbering_index === this.b_table ? true : '';
},
attach_table_name() {
this.column_names_list = this.vue_map(this.column_names_list)
.map((column_names, INDEX) =>
column_names.split("\n")
.map(column_name_of_one =>
column_name_of_one.includes(".") === false ? this.table_name_list[INDEX] + "." + column_name_of_one : column_name_of_one)
.join("\n"))
},
detach_table_name() {
this.column_names_list = this.vue_map(this.column_names_list)
.map((column_names, INDEX) =>
column_names.split("\n")
.map(column_name_of_one =>
column_name_of_one.split(".")[1] ? column_name_of_one.split(".")[1] : column_name_of_one)
.join("\n"))
},
},
}
</script>



<style>
/* grid_layout */
.parent {
display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(10, 1fr);
}
.in_zone {
grid-column: 1 / 6;
grid-row: 1 / 11;
background-color: gray;
}
.out_zone {
grid-column: 6 / 11;
grid-row: 1 / 11;
background-color: darkgray;
}
textarea {
width: 20rem;
height: 15rem;
}

textarea.a_table {
background-color: pink;
}

textarea.b_table {
background-color: greenyellow;
}
</style>