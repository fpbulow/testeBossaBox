import { Tool } from './../tool.model';
import { ToolService } from './../tool.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-read',
  templateUrl: './tool-read.component.html',
  styleUrls: ['./tool-read.component.css']
})
export class ToolReadComponent implements OnInit {

  tools: Tool[]

  constructor(
    private toolService: ToolService) { }

  ngOnInit(): void {
    this.toolService.read().subscribe(tools => {
      this.tools = tools
    })
  }
}
