import React from 'react'
import Table from '../../ui/Table'
import toPersianNumbersWithComma, { toPersianNumbers } from '../../utils/toPersianNumbers'
import toLocaleDateString from '../../utils/toLocaleDateString'
import TruncateText from '../../utils/TruncateText'

function ProjectRow({project,index}) {
  return (
     <Table.Row key={project._id}>
              <td>{toPersianNumbers(index + 1)}</td>
              <td>{TruncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{toPersianNumbersWithComma(project.budget)}</td>
              <td>{toLocaleDateString(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span className="badge badge--secondary" key={tag}>
                      {tag}
                    </span>
                  ))}{" "}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>...</td>
            </Table.Row>
           
  )
}

export default ProjectRow