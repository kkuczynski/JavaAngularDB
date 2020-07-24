import { Component, OnInit, Inject } from '@angular/core';
import { AdoptionHousesExternal } from 'src/app/domain/external/adoption-houses.external';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AdoptionHousesService } from 'src/app/services/adoption-houses.service';

@Component({
  selector: 'app-add-house-dialog',
  templateUrl: './add-house-dialog.component.html',
  styleUrls: ['./add-house-dialog.component.css']
})
export class AddHouseDialogComponent implements OnInit {
  private _isUpdate = false;
  private _isAdd = false;
  private _inputForm: FormGroup;
  private _newHouse: AdoptionHousesExternal;

  constructor(
    private housesService: AdoptionHousesService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddHouseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      ownerId: number,
      house: AdoptionHousesExternal,
    }) {
    this.createForm();
  }

  ngOnInit(): void {
    if (this.data.title === 'edit house') {
      this._isUpdate = true;
      console.log(this.data.house);
      this.fillFormWithData();
    }
    else if (this.data.title === 'add house') {
      this._isAdd = true;
    }
  }

  getInputForm(): FormGroup {
    return this._inputForm;
  }

  getIsUpdate(): boolean {
    return this._isUpdate;
  }

  getIsAdd(): boolean {
    return this._isAdd;
  }

  hideAddDialog() {
    this._inputForm.reset();
    this.dialogRef.close();
  }

  fillFormWithData() {
    this._inputForm.get('address').setValue(this.data.house.address);
    this._inputForm.get('city').setValue(this.data.house.city);
    this._inputForm.get('postcode').setValue(this.data.house.postcode);
    this._inputForm.get('conditions').setValue(this.data.house.conditions);
  }

  createForm() {
    this._inputForm = this.formBuilder.group({
      address: ['', [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(40)
      ]],
      city: ['', [Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40)
      ]],
      postcode: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
      conditions: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(250),
      ]],
    });
  }

  postHouse() {
    this._newHouse = new AdoptionHousesExternal();
    this._newHouse.setNew(
      this._inputForm.get('address').value,
      this._inputForm.get('city').value,
      this._inputForm.get('postcode').value,
      this._inputForm.get('conditions').value);
    this._newHouse.setOwnerId(this.data.ownerId);
    this.housesService.postNewHouse(this._newHouse).subscribe();
    this.dialogRef.close();
  }

  putHouse() {
    this._newHouse = new AdoptionHousesExternal();
    this._newHouse.setNew(
      this._inputForm.get('address').value,
      this._inputForm.get('city').value,
      this._inputForm.get('postcode').value,
      this._inputForm.get('conditions').value);
    this._newHouse.setId(this.data.house.id);
    this._newHouse.setOwnerId(this.data.house.userId);
    this.housesService.putHouse(this._newHouse).subscribe();
    this.dialogRef.close();
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      document.getElementById('confirmButton').click();
    }
  }
}
