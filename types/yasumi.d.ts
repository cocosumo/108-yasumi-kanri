declare namespace Yasumi {
  interface Fields {
    employeeName: kintone.fieldTypes.SingleLineText;
    reason: kintone.fieldTypes.SingleLineText;
    レコードタイトル: kintone.fieldTypes.SingleLineText;
    店舗: kintone.fieldTypes.SingleLineText;
    type: kintone.fieldTypes.RadioButton;
    employeeNumber: kintone.fieldTypes.Number;
    duration: kintone.fieldTypes.RadioButton;
    affiliation: kintone.fieldTypes.SingleLineText;
    yasumiDate: kintone.fieldTypes.Date;

    申請者: kintone.fieldTypes.UserSelect;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    申請日時: kintone.fieldTypes.CreatedTime;
    更新日時: kintone.fieldTypes.UpdatedTime;
  }
}
