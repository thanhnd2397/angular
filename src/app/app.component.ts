import {Component, OnInit} from '@angular/core';
import {Obligation} from "./obligation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  codeLabel = "Mã nghĩa vụ";
  statusMappingLabel = "Mapping";
  statusApprovalLabel = "Trạng thái cập nhật";
  effectiveStatusLabel = "Tình trạng hiệu lực";
  formTitle = "Tìm kiếm nghĩa vụ tuân thủ";
  listTitle = "Danh sách nghĩa vụ tuân thủ";
  selectedCount = 0;
  obligations: Obligation[] = [];
  selectAll = false;
  code = "";
  statusMapping = "";
  effectiveStatus = "";
  statusApproval = "";
  obligation1 = {
    id: 1,
    code: "G232A",
    docCode: "1",
    docInternalId: 1,
    addendum: "Tín dụng",
    indexCode: "Cho vay",
    action1: 1,
    action2: 2,
    action3: 12,
    descriptionAct: "Cho vay tiêu dùng cá nhân",
    descriptionCtrl: "descriptionCtrl",
    levelAct: "Nhân Viên",
    levelCtrl: "Trưởng Phòng",
    topic: 2,
    effectiveStatus: 0,
    effectiveEndDate: "1694327896000",
    isDelete: 0,
    defineRule: 1,
    preventive1: "Dự Phòng Sau",
    preventive2: "Tính sau",
    preventive3: "Để Sau",
    stepLevel1: "Tiếp Nhận",
    stepLevel2: "Xử Lý",
    statusMapping: 1,
    statusApproval: 1,
    createdDate: "1694328075000",
    createdBy: "",
    modifiedDate: "1694328083000",
    modifiedBy: 1,
    selected: false
  };
  obligation2 = {
    id: 5,
    code: "FE23G",
    docCode: "1",
    docInternalId: 1,
    addendum: "Tín dụng",
    indexCode: "Cho vay",
    action1: 1,
    action2: 2,
    action3: 12,
    descriptionAct: "Cho vay tiêu dùng cá nhân",
    descriptionCtrl: "descriptionCtrl",
    levelAct: "Nhân Viên",
    levelCtrl: "Trưởng Phòng",
    topic: 2,
    effectiveStatus: 0,
    effectiveEndDate: "1694327896000",
    isDelete: 0,
    defineRule: 1,
    preventive1: "Dự Phòng Sau",
    preventive2: "Tính sau",
    preventive3: "Để Sau",
    stepLevel1: "Tiếp Nhận",
    stepLevel2: "Xử Lý",
    statusMapping: 1,
    statusApproval: 1,
    createdDate: "1694328075000",
    createdBy: "",
    modifiedDate: "1694328083000",
    modifiedBy: 1,
    selected: false
  };

  constructor(
    //khai báo service
  ) {
  }

  ngOnInit(): void {
    this.obligations.push(this.obligation1);
    this.obligations.push(this.obligation2);

    // Sau khi thêm service call api đến backend, thêm function này vào service để call api ngay khi chạy màn hình
    // getAllObligation()
  }
  // xử lý để call api đến backend để lấy ra list data này
  // getAllObligation() {
  //   this.obligationService.getAllObligations().subscribe(rs => {
  //     this.obligations = rs;
  //   });
  // }




  updateSelectedCount() {
    this.selectedCount = this.obligations.filter(item => item.selected).length;
  }

  toggleSelectAll() {
    for (const item of this.obligations) {
      item.selected = this.selectAll;
    }
    this.updateSelectedCount();
  }

  canSubmit() {
    return this.code || this.statusMapping || this.effectiveStatus || this.statusApproval;
  }

  // Data ở 4 trường sau khi ấn button submit
  // Thêm service để call api search đến back end
  submitForm() {
    if (this.canSubmit()) {
      console.log('Data submitted:', this.code, this.statusMapping, this.effectiveStatus, this.statusApproval);
    }
  }
}
