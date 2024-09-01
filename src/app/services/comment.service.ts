import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { enviroments } from '../../enviroment';
import { Comment } from '../interfaces/comment.interface';

type CreateCommentDto = {
  parentId?:string;
  text: string;
  userId:string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  http = inject(HttpClient);
  
  getComments(parentId:string = ''){
    let url = `${enviroments.apiBaseUrl}/comments`;
    if(parentId){
      url+=`?parendId=${parentId}`
    }
    return this.http.get<Comment[]>(url);
  }

  createComment(comment: CreateCommentDto){
    return this.http.post<Comment>(`${enviroments.apiBaseUrl}/comments`,comment)
  }
}
