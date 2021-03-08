import { Router } from '@angular/router';
import { Tool } from './../tool.model';
import { ToolService } from './../tool.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-create',
  templateUrl: './tool-create.component.html',
  styleUrls: ['./tool-create.component.css']
})
export class ToolCreateComponent implements OnInit {

  tool: Tool = {
    title: '',
    link: '',
    description: '',
    tags: []
  }

  constructor(
    private toolService: ToolService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createTool(): void {
    this.toolService.create(this.tool).subscribe(() => {
      this.toolService.showOnConsole('Tool Created')
      this.router.navigate(['/'])
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
