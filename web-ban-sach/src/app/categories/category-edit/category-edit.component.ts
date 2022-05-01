import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/shared/categories.model';
import { CategoriesService } from 'src/app/shared/categories.service';

declare var M:any;
@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  @Output() updateView = new EventEmitter();
  category: Category;
  id: number;
  editMode = false;
  categoryForm: FormGroup;
  bookForm: FormGroup;
  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.category = this.categoriesService.getCateFromIndex(this.id);
        this.initForm();
      }
    );
  }
  private initForm() {
    let _id = '';
    let name = '';
    let cateID = '';
    if (this.editMode) 
    {
      _id = this.category._id;
      name = this.category.name;
      cateID = this.category.cateID;
    }
    this.categoryForm = new FormGroup({
      '_id': new FormControl(_id, Validators.required),
      'name': new FormControl(name, Validators.required),
      'cateID': new FormControl(cateID, Validators.required),
    });
    
  }
  onSubmit(form: FormGroup) {
    if(this.editMode == false){
      this.categoriesService.addCategory(form.value).subscribe((res)=>{
        this.resetForm();
        this.categoriesService.isChanged.next(true);
      });
    }
    else{
      this.categoriesService.updateCategory(form.value).subscribe((res)=>{
        this.updateView.emit();
        M.toast({html:'Edit Successfully',class:'rounded'});
      });
    }
  }
  resetForm(){
    if(this.categoryForm){
      this.categoryForm.reset();
    }
    this.categoriesService.selectedCategory={
      _id:"",
      cateID:"",
      name:"",
    }
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
