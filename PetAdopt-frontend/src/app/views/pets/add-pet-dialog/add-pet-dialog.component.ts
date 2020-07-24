import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, SelectControlValueAccessor } from '@angular/forms';
import { PetsExternal } from '../../../domain/external/pets.external';
import { DatePipe } from '@angular/common';
import { PetsService } from 'src/app/services/pets.service';



@Component({
  selector: 'app-add-pet-dialog',
  templateUrl: './add-pet-dialog.component.html',
  styleUrls: ['./add-pet-dialog.component.css']
})
export class AddPetDialogComponent implements OnInit {

  private _adopted: boolean;
  private _inputForm: FormGroup;
  private _newPet: PetsExternal;
  private _isUpdate: boolean;

  constructor(
    private petsService: PetsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddPetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PetsExternal) {
    this.createForm();
  }

  ngOnInit(): void {
    if (this.data) {
      this._isUpdate = true;
      this.fillFormWithData();
    } else {
      const date = new Date();
      this._isUpdate = false;
      this._inputForm.get('adoptDate').setValue(this.dateConverter(date));
    }
  }

  createForm() {
    this._inputForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      spieces: ['', [
        Validators.required]],
      race: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
      ]],
      health: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250)]],
      age: [Number, [Validators.required, Validators.pattern('[0-9]+$')]],
      sex: ['', Validators.required],
      sterilized: [Boolean, Validators.required],
      adopted: [Boolean, Validators.required],
      adoptDate: [Date],
      temporaryAdopted: [Boolean, Validators.required],
      tmpAdoptForDays: [Number, Validators.pattern('[0-9]+$')]
    });
  }

  getIsUpdate(): boolean {
    return this._isUpdate;
  }

  getInputForm(): FormGroup {
    return this._inputForm;
  }

  getAdopted(): boolean {
    return this._adopted;
  }

  getTmpAdopted(): boolean {
    if (this._inputForm.get('temporaryAdopted').value === 'true') {
      return true;
    }
    else {
      return false;
    }
  }

  anyAdoptTrue(): boolean {
    if (this.getTmpAdopted() || this._inputForm.get('adopted').value === 'true') {
      return true;
    }
    else {
      return false;
    }
  }

  hideAddDialog() {
    this._inputForm.reset();
    this.dialogRef.close();
  }

  boolToString(bool: boolean): string {
    if (bool) {
      return 'true';
    }
    else {
      return 'false';
    }
  }

  fillFormWithData() {
    this._inputForm.get('name').setValue(this.data.name),
      this._inputForm.get('spieces').setValue(this.data.spieces),
      this._inputForm.get('race').setValue(this.data.race),
      this._inputForm.get('age').setValue(this.data.age),
      this._inputForm.get('health').setValue(this.data.health),
      this._inputForm.get('sex').setValue(this.data.sex),
      this._inputForm.get('sterilized').setValue(this.boolToString(this.data.sterilized)),
      this._inputForm.get('adopted').setValue(this.boolToString(this.data.adopted)),
      this._inputForm.get('temporaryAdopted').setValue(this.boolToString(this.data.temporaryAdopted)),
      this._inputForm.get('adoptDate').setValue(this.data.adoptDate),
      this._inputForm.get('tmpAdoptForDays').setValue(this.data.tmpAdoptForDays);

  }

  postPet() {
    const date = new Date();
    this._newPet = new PetsExternal();
    this._newPet.setNew(
      this._inputForm.get('name').value,
      this._inputForm.get('spieces').value,
      this._inputForm.get('race').value,
      this._inputForm.get('age').value,
      this.dateConverter(date),
      this._inputForm.get('health').value,
      this._inputForm.get('sex').value,
      this._inputForm.get('sterilized').value ? this._inputForm.get('sterilized').value : false,
      this._inputForm.get('adopted').value,
      this._inputForm.get('temporaryAdopted').value ? this._inputForm.get('temporaryAdopted').value : false,
      this._inputForm.get('adoptDate').value ? this.dateConverter(this._inputForm.get('adoptDate').value) : this.dateConverter(date),
      this._inputForm.get('tmpAdoptForDays').value ? this._inputForm.get('tmpAdoptForDays').value : 0);

    this.petsService.postNewPet(this._newPet).subscribe();
    this.dialogRef.close();
  }


  putPet() {
    const date = new Date();
    this._newPet = new PetsExternal();
    this._newPet.setNew(
      this._inputForm.get('name').value,
      this._inputForm.get('spieces').value,
      this._inputForm.get('race').value,
      this._inputForm.get('age').value,
      this.data.addedAt,
      this._inputForm.get('health').value,
      this._inputForm.get('sex').value,
      this._inputForm.get('sterilized').value ? this._inputForm.get('sterilized').value : false,
      this._inputForm.get('adopted').value,
      this._inputForm.get('temporaryAdopted').value ? this._inputForm.get('temporaryAdopted').value : false,
      this._inputForm.get('adoptDate').value ? this.dateConverter(this._inputForm.get('adoptDate').value) : this.dateConverter(date),
      this._inputForm.get('tmpAdoptForDays').value ? this._inputForm.get('tmpAdoptForDays').value : 0);
    this._newPet.setId(this.data.id);
    this.petsService.putPet(this._newPet).subscribe();
    this.dialogRef.close();
  }

  dateConverter(date: Date) {
    const datepipe = new DatePipe('en-US');
    return datepipe.transform(date, 'yyyy-MM-dd');
  }
}
