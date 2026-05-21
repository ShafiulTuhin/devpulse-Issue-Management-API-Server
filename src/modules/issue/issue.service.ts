import { pool } from "../../db";
import type { IIssue } from "./issue.interface";

// const createIssueService = async (payload: IIssue) => {
//   const { reporter_id, title, type, status, description } = payload;

//   const user = await pool.query(`SELECT * from users where id = $1`, [
//     reporter_id,
//   ]);

//   if (user.rows.length === 0) {
//     throw new Error("User not exists!");
//   }
//   const result = await pool.query(
//     `
//         insert into issues( reporter_id,title, type, status, description)
//         values($1, $2, $3, $4,$5) RETURNING *
//         `,
//     [reporter_id, title, type, status, description],
//   );

//   return result;
// };
const createIssueService = async (reporter_id: number, payload: IIssue) => {
  const { title, type, description } = payload;

  const result = await pool.query(
    `
    INSERT INTO issues (reporter_id, title, type, description)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [reporter_id, title, type, description],
  );

  return result.rows[0];
};

const getAllIssuesService = async () => {
  const result = await pool.query(`
      SELECT * FROM issues  
        `);
  return result;
};

const getSingleIssueService = async (id: string) => {
  const result = await pool.query(
    `
      SELECT * FROM issues WHERE id=$1  
        `,
    [id],
  );
  return result;
};

const updateIssueService = async (payload: IIssue, id: string) => {
  const { title, type, status, description } = payload;

  const result = await pool.query(
    `
    UPDATE issues 
    SET 
    title=COALESCE($1,title),
    type=COALESCE($2,type),
    status=COALESCE($3,status),
    description=COALESCE($4,description)
   
    WHERE id=$5 RETURNING *
    `,
    [title, type, status, description, id],
  );

  return result;
};

const deleteIssueService = async (id: string) => {
  const result = await pool.query(
    `
    DELETE FROM issues WHERE id=$1  
      `,
    [id],
  );
  return result;
};

export const issueService = {
  createIssueService,
  getAllIssuesService,
  getSingleIssueService,
  updateIssueService,
  deleteIssueService,
};
