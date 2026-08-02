var findMedianSortedArrays = function(nums1, nums2) {

//binary search approach
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = 0;
    let right = m;

    while (left <= right) {

       //number of elements on the left side of nums1
        let partitionX = Math.floor((left + right) / 2);

        //number of elements on the left side of nums2
        let partitionY = Math.floor((m + n + 1) / 2) - partitionX;


        let maxLeftX = partitionX === 0 
            ? -Infinity 
            : nums1[partitionX - 1];

        let minRightX = partitionX === m 
            ? Infinity 
            : nums1[partitionX];


        let maxLeftY = partitionY === 0 
            ? -Infinity 
            : nums2[partitionY - 1];

        let minRightY = partitionY === n 
            ? Infinity 
            : nums2[partitionY];


     // Check if we have found the correct partitions
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {

           //number of total elements is odd
            if ((m + n) % 2 === 1) {
                return Math.max(maxLeftX, maxLeftY);
            }

        //number of total elements is even
            return (
                Math.max(maxLeftX, maxLeftY) +
                Math.min(minRightX, minRightY)
            ) / 2;
        }


      // If we are too far on the right side for partitionX, go on left side
        else if (maxLeftX > minRightY) {
            right = partitionX - 1;
        }


       // If we are too far on the left side for partitionX, go on right side
        else {
            left = partitionX + 1;
        }
    }
};