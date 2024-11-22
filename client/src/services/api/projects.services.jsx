import axiosInstance from "../axiosInstance";

// * PROJECTS

export const getProjects = async () => {
  try {
    const response = await axiosInstance.get(`/v1/projects`);
    const projects = response.data?.data || null;
    return projects;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};

export const getProject = async (pId) => {
  try {
    const response = await axiosInstance.get(`/v1/projects/id/${pId}`);
    const projects = response.data?.data || null;
    return projects;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};

// * TASK

export const getProjectTasks = async (pId) => {
  try {
    const response = await axiosInstance.get(`/v1/projects/task?projectId=${pId}`);
    const projects = response.data?.data || null;
    return projects;
  } catch (error) {
    throw new Response('Error al cargar los datos', {
      status: 500,
      statusText: error.message,
    });
  }
};


// * COMMENTS