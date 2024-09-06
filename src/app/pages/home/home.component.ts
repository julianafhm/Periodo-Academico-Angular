import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { AlunoListar } from '../../models/Aluno';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  alunos: AlunoListar[] = [];
  alunosGeral: AlunoListar[] = [];
  constructor(private serviceAluno: AlunoService){

  }
  ngOnInit(): void {
      this.serviceAluno.GetAlunos().subscribe( response => {
      this.alunos = response.idTurma, response.nome;
      this.alunosGeral =response.idTurma, response.nome;
    })
  }

}
