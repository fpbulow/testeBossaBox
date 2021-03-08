import { ActivatedRoute, Router } from '@angular/router';
import { ToolService } from './../tool.service';
import { Tool } from './../tool.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-delete',
  templateUrl: './tool-delete.component.html',
  styleUrls: ['./tool-delete.component.css']
})
export class ToolDeleteComponent implements OnInit {

  tools: Tool[]
  tool: Tool

  constructor(
    private toolService: ToolService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.toolService.readById(id).subscribe(tool => {
      this.tool = tool
      console.log(tool)
    })
  }

  deleteTool(): void {
    this.toolService.delete(this.tool.id).subscribe(() => {
      this.toolService.showOnConsole('produto deletado')
      this.router.navigate(['/'])
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }
}

