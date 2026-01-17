export async function fetchOrgRepos(org) {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/${org}/repos?per_page=10`
    );

    if (response.status === 404) {
      throw new Error("Organization not found");
    }

    if (response.status === 403) {
      throw new Error("GitHub API rate limit exceeded");
    }

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      error.message || "Network error. Please try again later."
    );
  }
}



