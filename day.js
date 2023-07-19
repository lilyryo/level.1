// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: magic;
// 今日の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// 画面に表示
const dateText = `${year}年${month}月${day}日`;
Script.setWidget(new ListWidget());
const widget = Script.widget;
// ウィジェットを表示
Script.complete();