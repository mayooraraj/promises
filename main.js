document.addEventListener('DOMContentLoaded', function () {
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const studentId = this.getAttribute('data-id');
            Swal.fire({
                title: 'Are you sure?',
                text: 'Once deleted, you will not be able to recover this student data!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteStudent(studentId);
                }
            });
        });
    });

function deleteStudent(studentId) {
        if (row) {
            row.parentNode.removeChild(row);
        } else {
            Swal.fire('Some error occurred, try again later');
        }
    }
});
