import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  console.log(projects);
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه " />;

  return (
    <div className="w-full overflow-x-auto ">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="title-row  ">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            return (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>{project.title}</td>
                <td>{project.category.title}</td>
                <td>{project.budget}</td>
                <td>{project.deadline}</td>
                <td>
                  <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                    {project.tags.map((tag) => (
                      <span className="badge badge--secondary" key={tag} >{tag}</span>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
